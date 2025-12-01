import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Manufacturing Industries We Serve | The Hammitt Group | Texas Recruitment",
  description: "Specialized recruitment across Texas manufacturing industries including automotive, aerospace, food & beverage, oil & gas, electronics, industrial machinery, plastics, and metal fabrication. Expert placement in DFW, Austin, Houston, and San Antonio.",
  keywords: [
    "Texas manufacturing industries",
    "automotive manufacturing recruitment Texas",
    "aerospace recruitment Texas",
    "food beverage manufacturing jobs",
    "oil gas equipment recruitment",
    "electronics manufacturing Texas",
    "industrial machinery recruitment",
    "plastics packaging manufacturing",
    "metal fabrication Texas",
    "manufacturing recruitment by industry",
  ],
  openGraph: {
    title: "Manufacturing Industries | The Hammitt Group",
    description: "Specialized recruitment across Texas manufacturing industries.",
    type: "website",
    url: "https://thehammittgroup.com/industries",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/industries",
  },
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
      name: "Industries",
      item: "https://thehammittgroup.com/industries",
    },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <Script
        id="industries-breadcrumb"
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
              Manufacturing Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              Deep expertise across Texas manufacturing sectors. We understand the unique talent needs, operational challenges, and regulatory requirements of each industry.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              From automotive assembly to aerospace production, from food processing to electronics manufacturing, we have specialized knowledge in every major Texas manufacturing sector.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group"
                aria-label={`Learn more about ${industry.name} recruitment`}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-primary-600 hover:border-l-primary-700 bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-full -mr-12 -mt-12 opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <CardHeader className="relative">
                    <div className="w-12 h-1 bg-primary-600 mb-4 rounded-full"></div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-primary-600 transition-colors text-gray-900 font-bold">
                      {industry.name}
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-base mt-3 leading-relaxed">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <span className="text-primary-600 font-semibold group-hover:underline inline-flex items-center">
                      Explore {industry.name.toLowerCase()} recruitment
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
              Ready to Find Talent in Your Industry?
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
              Our specialized industry expertise ensures we understand your unique talent needs and can deliver the right candidates quickly.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary" className="bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-6">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

