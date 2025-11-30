import { prisma } from "@/lib/db";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { CardSkeleton } from "@/components/ui/loading";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | The Hammitt Group",
  description: "Insights, trends, and news about Texas manufacturing recruitment and industry updates.",
};

async function getPosts() {
  try {
    return await prisma.blogPost.findMany({
      where: { published: true },
      include: {
        author: {
          select: {
            email: true,
          },
        },
        categories: true,
        tags: true,
      },
      orderBy: { publishedAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

function BlogPostsList() {
  return (
    <Suspense fallback={<BlogPostsSkeleton />}>
      <BlogPosts />
    </Suspense>
  );
}

async function BlogPosts() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No blog posts yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`}>
          <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer group">
            {post.featuredImage && (
              <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            )}
            <CardHeader>
              <div className="flex gap-2 mb-2 flex-wrap">
                {post.categories.map((cat) => (
                  <span
                    key={cat.id}
                    className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
              <CardTitle className="group-hover:text-primary-600 transition-colors">
                {post.title}
              </CardTitle>
              {post.excerpt && (
                <CardDescription className="line-clamp-2">
                  {post.excerpt}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-500">
                {post.publishedAt && formatDate(post.publishedAt)}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

function BlogPostsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export default async function BlogPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, trends, and news about Texas manufacturing recruitment
          </p>
        </div>

        <BlogPostsList />
      </div>
    </div>
  );
}
