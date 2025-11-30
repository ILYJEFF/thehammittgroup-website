import { getServerSession } from "next-auth";
import { redirect, notFound } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { BlogEditor } from "@/components/admin/blog-editor";

async function getPost(id: string) {
  return await prisma.blogPost.findUnique({
    where: { id },
    include: {
      categories: true,
      tags: true,
    },
  });
}

export default async function EditPostPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
        </div>
        <BlogEditor post={post} />
      </div>
    </div>
  );
}

