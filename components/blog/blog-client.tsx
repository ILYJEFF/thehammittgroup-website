"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { BlogFilters } from "./blog-filters";
import { BlogSearch } from "./blog-search";
import { ReadingTime } from "./reading-time";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  publishedAt: Date | null;
  featuredImage: string | null;
  categories: { id: string; name: string; slug: string }[];
  tags: { id: string; name: string }[];
}

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

interface BlogClientProps {
  posts: BlogPost[];
  categories: BlogCategory[];
}

export function BlogClient({ posts, categories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((post) =>
        post.categories.some((cat) => cat.slug === selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt?.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.name.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [posts, selectedCategory, searchQuery]);

  return (
    <>
      <div className="mb-8">
        <BlogSearch onSearch={setSearchQuery} />
        <BlogFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-2">No posts found</p>
          <p className="text-gray-400 text-sm">
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-primary-200">
                  {post.featuredImage && (
                    <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden relative">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {post.categories.slice(0, 2).map((cat) => (
                        <span
                          key={cat.id}
                          className="px-2.5 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full"
                        >
                          {cat.name}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </CardTitle>
                    {post.excerpt && (
                      <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>
                        {post.publishedAt && formatDate(post.publishedAt)}
                      </span>
                      <ReadingTime content={post.content} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          {filteredPosts.length > 0 && (
            <div className="mt-8 text-center text-sm text-gray-500">
              Showing {filteredPosts.length} of {posts.length} posts
            </div>
          )}
        </>
      )}
    </>
  );
}

