import { prisma } from "@/lib/db";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

export async function PopularPosts() {
  try {
    // Get popular posts (most recent published posts as a proxy for popularity)
    // In a real implementation, you'd track views/clicks
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 5,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        publishedAt: true,
        featuredImage: true,
      },
    });

    if (posts.length === 0) {
      return null;
    }

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block group hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded overflow-hidden">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                      {index + 1}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 line-clamp-2">
                    {post.title}
                  </h4>
                  {post.publishedAt && (
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(post.publishedAt)}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching popular posts:", error);
    return null;
  }
}

