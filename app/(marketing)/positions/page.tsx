import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Positions | The Hammitt Group",
  description: "We place talent across all manufacturing roles, from entry-level positions to executive leadership in Texas.",
};

const positions = [
  {
    name: "Plant Managers & Operations Leaders",
    slug: "plant-managers",
    description: "Executive and senior leadership roles in manufacturing operations",
  },
  {
    name: "Production Supervisors",
    slug: "production-supervisors",
    description: "Supervisory roles managing production teams and operations",
  },
  {
    name: "Quality Control & Assurance",
    slug: "quality-control",
    description: "QA/QC professionals ensuring product quality and compliance",
  },
  {
    name: "Manufacturing Engineers",
    slug: "manufacturing-engineers",
    description: "Engineering roles optimizing production processes and systems",
  },
  {
    name: "Maintenance & Facilities",
    slug: "maintenance-facilities",
    description: "Maintenance technicians and facilities management professionals",
  },
  {
    name: "Supply Chain & Logistics",
    slug: "supply-chain-logistics",
    description: "Logistics coordinators and supply chain management roles",
  },
  {
    name: "Safety & Compliance",
    slug: "safety-compliance",
    description: "Safety managers and compliance officers ensuring workplace safety",
  },
];

export default function PositionsPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Manufacturing Positions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From entry-level to executive, we place talent across all
            manufacturing roles throughout Texas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((position) => (
            <Link key={position.slug} href={`/positions/${position.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle>{position.name}</CardTitle>
                  <CardDescription>{position.description}</CardDescription>
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

