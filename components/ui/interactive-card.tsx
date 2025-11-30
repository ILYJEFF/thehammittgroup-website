"use client";

import { useState, useRef, ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: "lift" | "glow" | "tilt";
}

export function InteractiveCard({
  children,
  className = "",
  hoverEffect = "lift",
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || hoverEffect !== "tilt") return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setMousePosition({ x: rotateY, y: rotateX });
  };

  const getHoverStyles = () => {
    switch (hoverEffect) {
      case "lift":
        return isHovered
          ? "transform -translate-y-2 shadow-2xl"
          : "transform translate-y-0";
      case "glow":
        return isHovered
          ? "shadow-2xl shadow-primary-500/50 ring-2 ring-primary-500/20"
          : "";
      case "tilt":
        return "";
      default:
        return "";
    }
  };

  return (
    <Card
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      className={`transition-all duration-300 ${getHoverStyles()} ${className}`}
      style={
        hoverEffect === "tilt" && isHovered
          ? {
              transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            }
          : {}
      }
    >
      {children}
    </Card>
  );
}

