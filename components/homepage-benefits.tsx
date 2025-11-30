"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { InteractiveCard } from "@/components/ui/interactive-card";

const benefits = [
  {
    title: "Deep Industry Expertise",
    description:
      "Years of specialized experience in Texas manufacturing sectors. We understand the unique talent needs, regulatory requirements, and operational challenges of automotive, aerospace, food & beverage, oil & gas, electronics, and industrial manufacturing.",
  },
  {
    title: "Proven Track Record",
    description:
      "Successful placements across all manufacturing industries in DFW, Austin, Houston, and San Antonio. We've helped hundreds of companies find the right talent and thousands of professionals advance their careers.",
  },
  {
    title: "Boutique, Personalized Service",
    description:
      "Unlike large recruiting firms, we take a personalized approach to every placement. We get to know both our clients and candidates, ensuring the right cultural and technical fit for long-term success.",
  },
  {
    title: "Texas Market Knowledge",
    description:
      "Deep connections across Texas manufacturing hubs. We understand local market dynamics, salary ranges, and the unique characteristics of each region's manufacturing landscape.",
  },
  {
    title: "Comprehensive Role Coverage",
    description:
      "From entry-level production workers to C-suite executives, we place talent across all manufacturing roles including plant managers, engineers, supervisors, quality control, maintenance, and supply chain professionals.",
  },
  {
    title: "Fast, Responsive Service",
    description:
      "We understand that manufacturing operations can't wait. Our streamlined process ensures quick response times and efficient placement, minimizing downtime and maximizing productivity.",
  },
];

export function HomepageBenefits() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Why Choose The Hammitt Group
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Texas&apos;s premier manufacturing recruitment agency. We combine deep industry expertise with personalized service to deliver exceptional results for both employers and candidates.
            </p>
          </div>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimation
              key={index}
              direction="up"
              delay={index * 100}
            >
              <InteractiveCard hoverEffect="lift" className="h-full">
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
                  <div className="w-12 h-1 bg-primary-600 mb-4 rounded-full"></div>
                  <CardTitle className="text-xl md:text-2xl mb-3 text-gray-900 font-bold relative">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-700 leading-relaxed relative">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </InteractiveCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

