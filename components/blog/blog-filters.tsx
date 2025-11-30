"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface BlogFiltersProps {
  categories: { id: string; name: string; slug: string }[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function BlogFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: BlogFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <Button
        variant={selectedCategory === null ? "primary" : "secondary"}
        size="sm"
        onClick={() => onCategoryChange(null)}
        className="rounded-full"
      >
        All Posts
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.slug ? "primary" : "secondary"}
          size="sm"
          onClick={() => onCategoryChange(category.slug)}
          className="rounded-full"
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}

