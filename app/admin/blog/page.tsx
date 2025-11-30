import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getPosts() {
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
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
            <p className="text-gray-600 mt-2">Manage your blog content</p>
          </div>
          <Link href="/admin/blog/new">
            <Button variant="primary">New Post</Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Posts ({posts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {posts.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No posts yet. Create your first post!</p>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{post.title}</h3>
                          {!post.published && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                              Draft
                            </span>
                          )}
                          {post.published && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                              Published
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {post.excerpt || "No excerpt"}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>By {post.author.email}</span>
                          <span>{formatDate(post.createdAt)}</span>
                          {post.publishedAt && (
                            <span>Published: {formatDate(post.publishedAt)}</span>
                          )}
                        </div>
                        {post.categories.length > 0 && (
                          <div className="mt-2 flex gap-2">
                            {post.categories.map((cat) => (
                              <span
                                key={cat.id}
                                className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded"
                              >
                                {cat.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="ml-4 flex gap-2">
                        <Link href={`/admin/blog/${post.id}/edit`}>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </Link>
                        <Link href={`/blog/${post.slug}`} target="_blank">
                          <Button variant="ghost" size="sm">
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

