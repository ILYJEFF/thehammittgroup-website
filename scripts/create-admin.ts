import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import readline from "readline";

const prisma = new PrismaClient();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

async function createAdmin() {
  try {
    console.log("Create Admin User");
    console.log("================");

    const email = await question("Email: ");
    const password = await question("Password: ");

    if (!email || !password) {
      console.error("Email and password are required");
      process.exit(1);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    console.log(`\nAdmin user created successfully!`);
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

    console.log("\nDefault blog categories and tags created!");
  } catch (error: any) {
    if (error.code === "P2002") {
      console.error("An admin with this email already exists");
    } else {
      console.error("Error creating admin:", error);
    }
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    rl.close();
  }
}

createAdmin();

