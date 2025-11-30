"use client";

import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const testimonials = [
  {
    quote:
      "The Hammitt Group understood our unique needs in automotive manufacturing and delivered exceptional candidates. Their industry expertise made all the difference in finding the right plant manager for our facility.",
    author: "Sarah Martinez",
    role: "VP of Operations",
    company: "Texas Automotive Manufacturing",
  },
  {
    quote:
      "As a manufacturing engineer, I was looking for the right opportunity to advance my career. The Hammitt Group not only found me a great position but ensured it was the perfect cultural fit. Highly recommend their personalized approach.",
    author: "Michael Chen",
    role: "Manufacturing Engineer",
    company: "Aerospace Solutions Inc.",
  },
  {
    quote:
      "Working with The Hammitt Group has been a game-changer for our recruitment needs. They consistently deliver quality candidates who understand the manufacturing industry. Their Texas market knowledge is unmatched.",
    author: "David Rodriguez",
    role: "HR Director",
    company: "Industrial Machinery Co.",
  },
];

export function HomepageTestimonials() {
  return (
    <ScrollAnimation direction="up" delay={100}>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by Texas manufacturers and professionals
            </p>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>
    </ScrollAnimation>
  );
}

