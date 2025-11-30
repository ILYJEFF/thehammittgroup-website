"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

interface BlogSearchProps {
  onSearch: (query: string) => void;
}

export function BlogSearch({ onSearch }: BlogSearchProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="mb-8">
      <Input
        type="text"
        placeholder="Search blog posts..."
        value={query}
        onChange={handleChange}
        className="max-w-md w-full"
      />
    </div>
  );
}

