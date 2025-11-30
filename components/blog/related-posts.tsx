import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  publishedAt: Date | null;
  featuredImage: string | null;
  categories: { name: string }[];
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  currentPostId: string;
}

export function RelatedPosts({ posts, currentPostId }: RelatedPostsProps) {
  const related = posts
    .filter((post) => post.id !== currentPostId)
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer group">
              {post.featuredImage && (
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden relative">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex gap-2 mb-2 flex-wrap">
                  {post.categories.slice(0, 1).map((cat, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded"
                    >
                      {cat.name}
                    </span>
                  ))}
                </div>
                <CardTitle className="text-lg group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                {post.excerpt && (
                  <CardDescription className="line-clamp-2 text-sm">
                    {post.excerpt}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="text-xs text-gray-500">
                  {post.publishedAt && formatDate(post.publishedAt)}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

