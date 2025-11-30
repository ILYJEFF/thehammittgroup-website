import { prisma } from "@/lib/db";
import { CardSkeleton } from "@/components/ui/loading";
import { Suspense } from "react";
import type { Metadata } from "next";
import { BlogClient } from "@/components/blog/blog-client";

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

async function getCategories() {
  try {
    return await prisma.blogCategory.findMany({
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
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
  const categories = await getCategories();

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No blog posts yet. Check back soon!</p>
      </div>
    );
  }

  return <BlogClient posts={posts} categories={categories} />;
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
    <div className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900">
              Manufacturing Insights & News
            </h1>
            <a
              href="/api/rss"
              className="text-gray-400 hover:text-primary-600 transition-colors"
              title="RSS Feed"
              aria-label="Subscribe to RSS feed"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.429 2.571c9.486 0 17.143 7.657 17.143 17.143h-4.571c0-6.914-5.657-12.571-12.571-12.571V2.571zm0 5.143c6.629 0 12 5.371 12 12h-4.571c0-4.114-3.315-7.429-7.429-7.429V7.714zm0 5.143c3.771 0 6.857 3.086 6.857 6.857h-4.571c0-1.257-1.029-2.286-2.286-2.286v-4.571z" />
              </svg>
            </a>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert insights, industry trends, and recruitment strategies for Texas manufacturing
          </p>
        </div>

        <BlogPostsList />
      </div>
    </div>
  );
}
