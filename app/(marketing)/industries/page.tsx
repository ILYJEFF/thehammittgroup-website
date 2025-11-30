import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Industries | The Hammitt Group",
  description: "Specialized recruitment across Texas manufacturing industries including automotive, aerospace, food & beverage, oil & gas, and more.",
};

const industries = [
  {
    name: "Automotive Manufacturing",
    slug: "automotive",
    description: "Expert placement in automotive production and assembly operations across Texas.",
  },
  {
    name: "Aerospace & Defense",
    slug: "aerospace-defense",
    description: "Specialized recruitment for aerospace manufacturing and defense contractors.",
  },
  {
    name: "Food & Beverage Processing",
    slug: "food-beverage",
    description: "Connecting talent with food processing, packaging, and beverage manufacturing operations.",
  },
  {
    name: "Oil & Gas Equipment",
    slug: "oil-gas",
    description: "Recruitment for energy sector manufacturing and equipment production.",
  },
  {
    name: "Electronics & Semiconductors",
    slug: "electronics",
    description: "Tech manufacturing recruitment for electronics and semiconductor production.",
  },
  {
    name: "Industrial Machinery",
    slug: "industrial-machinery",
    description: "Heavy machinery, equipment manufacturing, and industrial automation recruitment.",
  },
  {
    name: "Plastics & Packaging",
    slug: "plastics-packaging",
    description: "Packaging solutions and plastics manufacturing expertise across Texas.",
  },
  {
    name: "Metal Fabrication",
    slug: "metal-fabrication",
    description: "Metalworking, welding, and fabrication recruitment specialists.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Manufacturing Industries
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise across Texas manufacturing sectors. We understand the
            unique talent needs of each industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle>{industry.name}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-primary-600 font-medium">
                    Learn more →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

