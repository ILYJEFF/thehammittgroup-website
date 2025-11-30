export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

interface ReadingTimeProps {
  content: string;
}

export function ReadingTime({ content }: ReadingTimeProps) {
  const minutes = calculateReadingTime(content);
  return (
    <span className="text-sm text-gray-500">
      {minutes} min read
    </span>
  );
}

