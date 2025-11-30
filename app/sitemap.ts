import { MetadataRoute } from "next";
import { prisma } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://thehammittgroup.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/submit-resume",
    "/industries",
    "/positions",
    "/blog",
  ];

  // Industry pages
  const industries = [
    "automotive",
    "aerospace-defense",
    "food-beverage",
    "oil-gas",
    "electronics",
    "industrial-machinery",
    "plastics-packaging",
    "metal-fabrication",
  ];

  // Position pages
  const positions = [
    "plant-managers",
    "production-supervisors",
    "quality-control",
    "manufacturing-engineers",
    "maintenance-facilities",
    "supply-chain-logistics",
    "safety-compliance",
  ];

  // Blog posts
  let posts: Array<{ slug: string; updatedAt: Date }> = [];
  try {
    posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    });
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
    // Continue without blog posts if database is unavailable
  }

  const sitemapEntries: MetadataRoute.Sitemap = [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...industries.map((slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...positions.map((slug) => ({
      url: `${baseUrl}/positions/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];

  return sitemapEntries;
}

