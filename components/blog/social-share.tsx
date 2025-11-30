"use client";

import { Button } from "@/components/ui/button";

interface SocialShareProps {
  title: string;
  url: string;
}

export function SocialShare({ title, url }: SocialShareProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    if (typeof window !== "undefined") {
      window.open(shareLinks[platform], "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <span className="text-sm font-medium text-gray-700">Share:</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleShare("twitter")}
        className="text-gray-600 hover:text-blue-500"
        aria-label="Share on Twitter"
      >
        Twitter
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleShare("linkedin")}
        className="text-gray-600 hover:text-blue-600"
        aria-label="Share on LinkedIn"
      >
        LinkedIn
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleShare("facebook")}
        className="text-gray-600 hover:text-blue-700"
        aria-label="Share on Facebook"
      >
        Facebook
      </Button>
    </div>
  );
}

