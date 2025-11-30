import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { formatDate } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardSkeleton } from "@/components/ui/loading";
import { Suspense } from "react";

async function getPost(slug: string) {
  try {
    return await prisma.blogPost.findUnique({
      where: { slug, published: true },
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
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt || undefined,
    keywords: post.seoKeywords || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      images: post.featuredImage ? [post.featuredImage] : undefined,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-primary-600 hover:text-primary-700 mb-8 inline-block transition-colors"
        >
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.categories.map((cat) => (
                <span
                  key={cat.id}
                  className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded"
                >
                  {cat.name}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-4">{post.excerpt}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>
                {post.publishedAt && formatDate(post.publishedAt)}
              </span>
              <span>•</span>
              <span>By {post.author.email}</span>
            </div>
          </header>

          {post.featuredImage && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
            <Suspense fallback={<CardSkeleton />}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {post.content}
              </ReactMarkdown>
            </Suspense>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-primary-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Connect?
              </h3>
              <p className="text-gray-700 mb-6">
                Whether you&apos;re looking for top talent or your next career
                opportunity, we&apos;re here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="primary">
                    For Employers
                  </Button>
                </Link>
                <Link href="/submit-resume">
                  <Button size="lg" variant="secondary">
                    For Candidates
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
