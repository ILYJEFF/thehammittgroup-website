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
    const period = searchParams.get("period") || "30"; // days

    const days = parseInt(period);
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Get form submission stats
    const [totalContacts, totalCandidates, recentContacts, recentCandidates] = await Promise.all([
      prisma.contact.count({
        where: {
          createdAt: { gte: startDate },
        },
      }),
      prisma.candidate.count({
        where: {
          createdAt: { gte: startDate },
        },
      }),
      prisma.contact.findMany({
        where: {
          createdAt: { gte: startDate },
        },
        orderBy: { createdAt: "desc" },
        take: 10,
      }),
      prisma.candidate.findMany({
        where: {
          createdAt: { gte: startDate },
        },
        orderBy: { createdAt: "desc" },
        take: 10,
      }),
    ]);

    // Get blog stats
    const [totalPosts, publishedPosts, recentPosts] = await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { published: true } }),
      prisma.blogPost.findMany({
        where: { published: true },
        orderBy: { publishedAt: "desc" },
        take: 10,
        select: {
          id: true,
          title: true,
          slug: true,
          publishedAt: true,
          createdAt: true,
        },
      }),
    ]);

    // Get contacts by city
    const contactsByCity = await prisma.contact.groupBy({
      by: ["city"],
      where: {
        createdAt: { gte: startDate },
      },
      _count: {
        city: true,
      },
    });

    // Get candidates by location
    const candidatesByLocation = await prisma.candidate.groupBy({
      by: ["desiredLocation"],
      where: {
        createdAt: { gte: startDate },
      },
      _count: {
        desiredLocation: true,
      },
    });

    // Get contacts by status
    const contactsByStatus = await prisma.contact.groupBy({
      by: ["status"],
      where: {
        createdAt: { gte: startDate },
      },
      _count: {
        status: true,
      },
    });

    // Daily submission trends (last 30 days)
    const dailyTrends = [];
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      date.setHours(0, 0, 0, 0);
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);

      const [contacts, candidates] = await Promise.all([
        prisma.contact.count({
          where: {
            createdAt: {
              gte: date,
              lt: nextDate,
            },
          },
        }),
        prisma.candidate.count({
          where: {
            createdAt: {
              gte: date,
              lt: nextDate,
            },
          },
        }),
      ]);

      dailyTrends.push({
        date: date.toISOString().split("T")[0],
        contacts,
        candidates,
        total: contacts + candidates,
      });
    }

    return NextResponse.json({
      period: days,
      forms: {
        totalContacts,
        totalCandidates,
        totalSubmissions: totalContacts + totalCandidates,
        recentContacts,
        recentCandidates,
      },
      blog: {
        totalPosts,
        publishedPosts,
        recentPosts,
      },
      breakdowns: {
        contactsByCity: contactsByCity.map((item) => ({
          city: item.city,
          count: item._count.city,
        })),
        candidatesByLocation: candidatesByLocation.map((item) => ({
          location: item.desiredLocation,
          count: item._count.desiredLocation,
        })),
        contactsByStatus: contactsByStatus.map((item) => ({
          status: item.status,
          count: item._count.status,
        })),
      },
      trends: {
        daily: dailyTrends,
      },
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

