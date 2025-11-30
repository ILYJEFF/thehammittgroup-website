"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export function HomepageStats() {
  return (
    <ScrollAnimation direction="fade" delay={200}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-white/20">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold mb-1">
            <AnimatedCounter value={500} suffix="+" />
          </div>
          <div className="text-sm text-primary-200">Placements</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold mb-1">
            <AnimatedCounter value={8} />
          </div>
          <div className="text-sm text-primary-200">Industries</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold mb-1">
            <AnimatedCounter value={4} />
          </div>
          <div className="text-sm text-primary-200">Texas Cities</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold mb-1">
            <AnimatedCounter value={15} suffix="+" />
          </div>
          <div className="text-sm text-primary-200">Years Experience</div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

