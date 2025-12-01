import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getPosts() {
  try {
    return await prisma.blogPost.findMany({
      include: {
        author: {
          select: {
            email: true,
          },
        },
        categories: true,
        tags: true,
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Blog Posts</h1>
            <p className="text-gray-600 mt-2 text-sm md:text-base">Manage your blog content</p>
          </div>
          <Link href="/admin/blog/new" className="w-full sm:w-auto touch-manipulation">
            <Button variant="primary" size="lg" className="w-full sm:w-auto min-h-[48px] text-base font-semibold">
              New Post
            </Button>
          </Link>
        </div>

        <Card className="border-2 border-gray-200">
          <CardHeader className="px-4 md:px-6 pt-4 md:pt-6 pb-3">
            <CardTitle className="text-lg md:text-xl font-bold text-gray-900">
              All Posts ({posts.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6 pb-4 md:pb-6">
            <div className="space-y-3 md:space-y-4">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-base mb-2">No posts yet.</p>
                  <p className="text-gray-500 text-sm">Create your first post!</p>
                </div>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="border-2 border-gray-200 rounded-lg p-4 md:p-5 hover:border-primary-300 hover:bg-primary-50/30 active:bg-primary-100 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <h3 className="text-base md:text-lg font-bold text-gray-900 flex-1 min-w-[200px]">
                            {post.title}
                          </h3>
                          {!post.published && (
                            <span className="px-3 py-1.5 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full border-2 border-yellow-200">
                              Draft
                            </span>
                          )}
                          {post.published && (
                            <span className="px-3 py-1.5 bg-green-100 text-green-800 text-xs font-bold rounded-full border-2 border-green-200">
                              Published
                            </span>
                          )}
                        </div>
                        <p className="text-sm md:text-base text-gray-700 mb-3 line-clamp-2">
                          {post.excerpt || "No excerpt"}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-600 mb-3">
                          <span className="font-medium">By {post.author.email}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{formatDate(post.createdAt)}</span>
                          {post.publishedAt && (
                            <>
                              <span className="hidden sm:inline">•</span>
                              <span>Published: {formatDate(post.publishedAt)}</span>
                            </>
                          )}
                        </div>
                        {post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {post.categories.map((cat) => (
                              <span
                                key={cat.id}
                                className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded-full border border-primary-200"
                              >
                                {cat.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-row md:flex-col gap-2 md:ml-4 md:gap-2">
                        <Link 
                          href={`/admin/blog/${post.id}/edit`}
                          className="flex-1 md:flex-none touch-manipulation"
                        >
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full md:w-auto min-h-[44px] text-sm font-semibold"
                          >
                            Edit
                          </Button>
                        </Link>
                        <Link 
                          href={`/blog/${post.slug}`} 
                          target="_blank"
                          className="flex-1 md:flex-none touch-manipulation"
                        >
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="w-full md:w-auto min-h-[44px] text-sm font-semibold text-primary-600"
                          >
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

