"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().optional(),
  content: z.string().min(1, "Content is required"),
  featuredImage: z.string().optional(),
  published: z.boolean().default(false),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional(),
});

type BlogPostFormData = z.infer<typeof blogPostSchema>;

interface BlogEditorProps {
  post?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    featuredImage: string | null;
    published: boolean;
    seoTitle: string | null;
    seoDescription: string | null;
    seoKeywords: string | null;
    categories: Array<{ id: string; name: string; slug: string }>;
    tags: Array<{ id: string; name: string; slug: string }>;
  };
}

export function BlogEditor({ post }: BlogEditorProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<Array<{ id: string; name: string }>>([]);
  const [tags, setTags] = useState<Array<{ id: string; name: string }>>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    post?.categories.map((c) => c.id) || []
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(
    post?.tags.map((t) => t.id) || []
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BlogPostFormData>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: post
      ? {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || "",
          content: post.content,
          featuredImage: post.featuredImage || "",
          published: post.published,
          seoTitle: post.seoTitle || "",
          seoDescription: post.seoDescription || "",
          seoKeywords: post.seoKeywords || "",
        }
      : {
          published: false,
        },
  });

  const title = watch("title");

  useEffect(() => {
    if (!post && title) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setValue("slug", slug);
    }
  }, [title, post, setValue]);

  useEffect(() => {
    // Fetch categories and tags
    fetch("/api/blog/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch("/api/blog/tags")
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, []);

  const onSubmit = async (data: BlogPostFormData) => {
    setIsSubmitting(true);

    try {
      const url = post ? `/api/blog/posts/${post.id}` : "/api/blog/posts";
      const method = post ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          categoryIds: selectedCategories,
          tagIds: selectedTags,
        }),
      });

      if (response.ok) {
        router.push("/admin/blog");
        router.refresh();
      } else {
        throw new Error("Failed to save post");
      }
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Failed to save post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Post Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <Input {...register("title")} placeholder="Enter post title" />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slug <span className="text-red-500">*</span>
            </label>
            <Input {...register("slug")} placeholder="post-url-slug" />
            {errors.slug && (
              <p className="mt-1 text-sm text-red-600">{errors.slug.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt
            </label>
            <Textarea
              {...register("excerpt")}
              rows={3}
              placeholder="Short description for listings"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content <span className="text-red-500">*</span>
            </label>
            <Textarea
              {...register("content")}
              rows={15}
              placeholder="Write your post content here (supports Markdown)"
              className="font-mono text-sm"
            />
            {errors.content && (
              <p className="mt-1 text-sm text-red-600">{errors.content.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image URL
            </label>
            <Input
              {...register("featuredImage")}
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categories & Tags</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categories
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCategories([...selectedCategories, cat.id]);
                      } else {
                        setSelectedCategories(
                          selectedCategories.filter((id) => id !== cat.id)
                        );
                      }
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm">{cat.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <label key={tag.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTags([...selectedTags, tag.id]);
                      } else {
                        setSelectedTags(selectedTags.filter((id) => id !== tag.id));
                      }
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm">{tag.name}</span>
                </label>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SEO Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SEO Title
            </label>
            <Input {...register("seoTitle")} placeholder="Custom SEO title (optional)" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SEO Description
            </label>
            <Textarea
              {...register("seoDescription")}
              rows={2}
              placeholder="Meta description for search engines"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SEO Keywords
            </label>
            <Input
              {...register("seoKeywords")}
              placeholder="keyword1, keyword2, keyword3"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Publishing</CardTitle>
        </CardHeader>
        <CardContent>
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("published")}
              className="mr-2"
            />
            <span className="text-sm">Publish this post</span>
          </label>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : post ? "Update Post" : "Create Post"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/blog")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

