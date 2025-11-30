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
import Image from "next/image";
import { RelatedPosts } from "@/components/blog/related-posts";
import { SocialShare } from "@/components/blog/social-share";
import { ReadingTime } from "@/components/blog/reading-time";

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

async function getAllPosts() {
  try {
    return await prisma.blogPost.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        publishedAt: true,
        featuredImage: true,
        categories: {
          select: {
            name: true,
          },
        },
      },
      orderBy: { publishedAt: "desc" },
      take: 10,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
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
  const allPosts = await getAllPosts();

  if (!post) {
    notFound();
  }

  const currentUrl = `https://www.thehammittgroup.com/blog/${post.slug}`;

  return (
    <div className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-primary-600 hover:text-primary-700 mb-8 inline-flex items-center gap-2 transition-colors font-medium"
        >
          <span>←</span>
          <span>Back to Blog</span>
        </Link>

        <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <header className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blog?category=${cat.slug}`}
                  className="px-3 py-1.5 bg-primary-100 text-primary-800 text-sm font-medium rounded-full hover:bg-primary-200 transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>
                {post.publishedAt && formatDate(post.publishedAt)}
              </span>
              <span>•</span>
              <ReadingTime content={post.content} />
              <span>•</span>
              <span>By {post.author.email}</span>
            </div>
            <div className="mt-6">
              <SocialShare 
                title={post.title}
                url={currentUrl}
              />
            </div>
          </header>

          {post.featuredImage && (
            <div className="mb-10 rounded-xl overflow-hidden relative aspect-video shadow-lg">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed prose-p:mb-6 prose-headings:mb-4 prose-headings:mt-8 prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-h4:text-xl prose-h4:font-semibold prose-h4:mt-6 prose-h4:mb-3 prose-ul:mb-6 prose-ol:mb-6 prose-li:mb-2 prose-li:leading-relaxed prose-strong:font-semibold prose-strong:text-gray-900 prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-6">
            <Suspense fallback={<CardSkeleton />}>
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {post.content}
              </ReactMarkdown>
            </Suspense>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/blog?search=${encodeURIComponent(tag.name)}`}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <RelatedPosts posts={allPosts} currentPostId={post.id} />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Connect?
              </h3>
              <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
                Whether you&apos;re looking for top manufacturing talent or your next career
                opportunity in Texas, we&apos;re here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="primary" className="min-w-[160px]">
                    For Employers
                  </Button>
                </Link>
                <Link href="/submit-resume">
                  <Button size="lg" variant="secondary" className="min-w-[160px]">
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
