"use client";

import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  to: string;
  offset?: number;
  className?: string;
}

export function SmoothScroll({
  children,
  to,
  offset = 0,
  className = "",
}: SmoothScrollProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

