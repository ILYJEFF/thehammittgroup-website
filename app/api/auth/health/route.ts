import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    // Check database connection
    await prisma.$connect();
    const adminCount = await prisma.admin.count();

    // Check environment variables
    const hasSecret = !!process.env.NEXTAUTH_SECRET;
    const hasUrl = !!process.env.NEXTAUTH_URL;
    const hasDbUrl = !!process.env.DATABASE_URL;

    return NextResponse.json({
      status: "ok",
      database: {
        connected: true,
        adminUsers: adminCount,
      },
      environment: {
        NEXTAUTH_SECRET: hasSecret ? "✅ Set" : "❌ Missing",
        NEXTAUTH_URL: hasUrl ? `✅ Set (${process.env.NEXTAUTH_URL})` : "❌ Missing",
        DATABASE_URL: hasDbUrl ? "✅ Set" : "❌ Missing",
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        error: error.message,
        database: {
          connected: false,
        },
        environment: {
          NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET ? "✅ Set" : "❌ Missing",
          NEXTAUTH_URL: !!process.env.NEXTAUTH_URL ? `✅ Set (${process.env.NEXTAUTH_URL})` : "❌ Missing",
          DATABASE_URL: !!process.env.DATABASE_URL ? "✅ Set" : "❌ Missing",
        },
      },
      { status: 500 }
    );
  }
}

