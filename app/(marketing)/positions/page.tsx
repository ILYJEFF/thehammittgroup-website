import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Manufacturing Positions & Jobs in Texas | The Hammitt Group | DFW, Austin, Houston, San Antonio",
  description: "We place talent across all manufacturing roles in Texas, from entry-level positions to executive leadership. Find plant managers, production supervisors, engineers, quality control, maintenance, supply chain, and safety professionals in DFW, Austin, Houston, and San Antonio.",
  keywords: [
    "manufacturing jobs Texas",
    "manufacturing positions Texas",
    "plant manager jobs Texas",
    "production supervisor jobs",
    "manufacturing engineer jobs",
    "quality control jobs Texas",
    "maintenance jobs manufacturing",
    "supply chain jobs Texas",
    "safety compliance jobs",
    "manufacturing careers Texas",
  ],
  openGraph: {
    title: "Manufacturing Positions | The Hammitt Group",
    description: "We place talent across all manufacturing roles in Texas.",
    type: "website",
    url: "https://thehammittgroup.com/positions",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/positions",
  },
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

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://thehammittgroup.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Positions",
      item: "https://thehammittgroup.com/positions",
    },
  ],
};

export default function PositionsPage() {
  return (
    <>
      <Script
        id="positions-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Manufacturing Positions We Fill
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              From entry-level production workers to C-suite executives, we place talent across all manufacturing roles throughout Texas.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Our expertise spans operations, engineering, quality control, maintenance, supply chain, safety, and executive leadership positions.
            </p>
          </div>

          {/* Positions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {positions.map((position) => (
              <Link
                key={position.slug}
                href={`/positions/${position.slug}`}
                className="group"
                aria-label={`Learn more about ${position.name} opportunities`}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary-600 hover:border-l-primary-700 bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-full -mr-12 -mt-12 opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <CardHeader className="relative">
                    <div className="w-12 h-1 bg-primary-600 mb-4 rounded-full"></div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-primary-600 transition-colors text-gray-900 font-bold">
                      {position.name}
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base mt-3 leading-relaxed">
                      {position.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <span className="text-primary-600 font-semibold group-hover:underline inline-flex items-center">
                      Explore {position.name.toLowerCase()} opportunities
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Find Your Next Manufacturing Role?
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
              Submit your resume and let us match you with the right opportunity in Texas manufacturing.
            </p>
            <Link href="/submit-resume">
              <Button size="lg" variant="primary" className="bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-6">
                Submit Your Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

