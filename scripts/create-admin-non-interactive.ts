import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    const email = process.env.ADMIN_EMAIL || "jeff@thehammittgroup.com";
    const password = process.env.ADMIN_PASSWORD || "Founder1769!";

    console.log("Creating admin user...");
    console.log(`Email: ${email}`);

    // Check if admin already exists
    const existing = await prisma.admin.findUnique({
      where: { email },
    });

    if (existing) {
      console.log("Admin user already exists with this email.");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    console.log(`\n✅ Admin user created successfully!`);
    console.log(`ID: ${admin.id}`);
    console.log(`Email: ${admin.email}`);

    // Create some default blog categories and tags
    const categories = [
      "Manufacturing News",
      "Recruitment Tips",
      "Industry Insights",
      "Career Advice",
    ];

    const tags = [
      "Texas Manufacturing",
      "Recruitment",
      "Career Development",
      "Industry Trends",
      "Job Search",
      "Hiring",
    ];

    for (const name of categories) {
      const slug = name.toLowerCase().replace(/\s+/g, "-");
      await prisma.blogCategory.upsert({
        where: { slug },
        update: {},
        create: { name, slug },
      });
    }

    for (const name of tags) {
      const slug = name.toLowerCase().replace(/\s+/g, "-");
      await prisma.blogTag.upsert({
        where: { slug },
        update: {},
        create: { name, slug },
      });
    }

    console.log("\n✅ Default blog categories and tags created!");
  } catch (error: any) {
    if (error.code === "P2002") {
      console.error("❌ An admin with this email already exists");
    } else {
      console.error("❌ Error creating admin:", error.message);
    }
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();

