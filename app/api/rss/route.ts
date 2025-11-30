import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 50,
      include: {
        author: {
          select: {
            email: true,
          },
        },
        categories: true,
        tags: true,
      },
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.thehammittgroup.com";

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>The Hammitt Group Blog</title>
    <description>Texas Manufacturing Recruitment Insights, Tips, and Industry News</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>The Hammitt Group</title>
      <link>${baseUrl}</link>
    </image>
    ${posts
      .map((post) => {
        const postUrl = `${baseUrl}/blog/${post.slug}`;
        const pubDate = post.publishedAt
          ? new Date(post.publishedAt).toUTCString()
          : new Date(post.createdAt).toUTCString();
        
        // Clean content for RSS (remove markdown formatting, limit length)
        const content = post.content
          .replace(/[#*_`]/g, "")
          .substring(0, 1000)
          .replace(/\n/g, " ");

        return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt || content}]]></description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${post.author.email}</author>
      ${post.categories.map((cat) => `<category><![CDATA[${cat.name}]]></category>`).join("")}
      ${post.tags.map((tag) => `<category><![CDATA[${tag.name}]]></category>`).join("")}
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
    </item>`;
      })
      .join("")}
  </channel>
</rss>`;

    return new NextResponse(rss, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    return new NextResponse("Error generating RSS feed", { status: 500 });
  }
}

