import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location");
    const industry = searchParams.get("industry");
    const status = searchParams.get("status");

    const where: any = {};

    if (location) {
      where.desiredLocation = location;
    }

    if (industry) {
      where.industry = { contains: industry, mode: "insensitive" };
    }

    if (status) {
      where.status = status;
    }

    const candidates = await prisma.candidate.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(candidates);
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

