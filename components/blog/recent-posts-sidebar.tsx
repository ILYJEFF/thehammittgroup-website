import { prisma } from "@/lib/db";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export async function RecentPostsSidebar() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 5,
      select: {
        id: true,
        title: true,
        slug: true,
        publishedAt: true,
      },
    });

    if (posts.length === 0) {
      return null;
    }

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="block group hover:text-primary-600 transition-colors"
              >
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary-600 line-clamp-2">
                  {post.title}
                </h4>
                {post.publishedAt && (
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDate(post.publishedAt)}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return null;
  }
}

