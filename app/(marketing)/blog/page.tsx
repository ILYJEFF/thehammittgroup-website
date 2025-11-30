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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Manufacturing Insights & News
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert insights, industry trends, and recruitment strategies for Texas manufacturing
          </p>
        </div>

        <BlogPostsList />
      </div>
    </div>
  );
}
