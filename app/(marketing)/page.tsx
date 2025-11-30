import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hammitt Group | Texas Manufacturing Recruitment Specialists",
  description: "Premier recruiting agency specializing in Texas manufacturing. Connecting top talent with leading manufacturers in DFW, Austin, Houston, and San Antonio.",
  openGraph: {
    title: "The Hammitt Group | Texas Manufacturing Recruitment",
    description: "Connecting top manufacturing talent with leading Texas companies.",
    type: "website",
  },
};

const industries = [
  {
    name: "Automotive Manufacturing",
    slug: "automotive",
    description: "Expert placement in automotive production and assembly",
  },
  {
    name: "Aerospace & Defense",
    slug: "aerospace-defense",
    description: "Specialized recruitment for aerospace manufacturing",
  },
  {
    name: "Food & Beverage",
    slug: "food-beverage",
    description: "Connecting talent with food processing operations",
  },
  {
    name: "Oil & Gas Equipment",
    slug: "oil-gas",
    description: "Recruitment for energy sector manufacturing",
  },
  {
    name: "Electronics & Semiconductors",
    slug: "electronics",
    description: "Tech manufacturing recruitment specialists",
  },
  {
    name: "Industrial Machinery",
    slug: "industrial-machinery",
    description: "Heavy machinery and equipment manufacturing",
  },
  {
    name: "Plastics & Packaging",
    slug: "plastics-packaging",
    description: "Packaging and plastics manufacturing expertise",
  },
  {
    name: "Metal Fabrication",
    slug: "metal-fabrication",
    description: "Metalworking and fabrication recruitment",
  },
];

const positions = [
  {
    name: "Plant Managers",
    slug: "plant-managers",
    description: "Operations leadership and plant management",
  },
  {
    name: "Production Supervisors",
    slug: "production-supervisors",
    description: "Supervisory roles in manufacturing operations",
  },
  {
    name: "Quality Control",
    slug: "quality-control",
    description: "QA/QC professionals and inspectors",
  },
  {
    name: "Manufacturing Engineers",
    slug: "manufacturing-engineers",
    description: "Engineering roles in production",
  },
  {
    name: "Maintenance & Facilities",
    slug: "maintenance-facilities",
    description: "Maintenance technicians and facilities management",
  },
  {
    name: "Supply Chain & Logistics",
    slug: "supply-chain-logistics",
    description: "Logistics and supply chain professionals",
  },
  {
    name: "Safety & Compliance",
    slug: "safety-compliance",
    description: "Safety managers and compliance officers",
  },
];

const cities = [
  { name: "Dallas-Fort Worth", abbreviation: "DFW" },
  { name: "Austin", abbreviation: "ATX" },
  { name: "Houston", abbreviation: "HOU" },
  { name: "San Antonio", abbreviation: "SAT" },
];

const benefits = [
  {
    title: "Industry Expertise",
    description:
      "Deep knowledge of Texas manufacturing sectors and their unique talent needs",
  },
  {
    title: "Proven Results",
    description:
      "Track record of successful placements across all manufacturing industries",
  },
  {
    title: "Personalized Service",
    description:
      "Boutique approach ensuring the right fit for both candidates and employers",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
              Texas Manufacturing
              <span className="block text-primary-200 mt-2">
                Recruitment Specialists
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
              Connecting top manufacturing talent with leading companies across
              Texas. Specialized recruitment for DFW, Austin, Houston, and San
              Antonio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary" className="bg-white text-primary-900 hover:bg-gray-100">
                  Find Talent
                </Button>
              </Link>
              <Link href="/submit-resume">
                <Button size="lg" variant="secondary">
                  Submit Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Why Choose The Hammitt Group
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep expertise in Texas manufacturing with a proven track record
              of successful placements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-200 border-2 hover:border-primary-200"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized recruitment across Texas manufacturing sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-2 hover:border-primary-200">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary-600 transition-colors">
                      {industry.name}
                    </CardTitle>
                    <CardDescription className="mt-2">{industry.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries">
              <Button variant="outline" size="lg">
                View All Industries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Positions We Fill
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From entry-level to executive, we place talent across all
              manufacturing roles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {positions.map((position) => (
              <Link
                key={position.slug}
                href={`/positions/${position.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-2 hover:border-primary-200">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary-600 transition-colors">
                      {position.name}
                    </CardTitle>
                    <CardDescription>{position.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/positions">
              <Button variant="outline" size="lg">
                View All Positions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Serving Texas Manufacturing Hubs
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Deep connections across Texas&apos;s major manufacturing markets
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cities.map((city) => (
              <div
                key={city.abbreviation}
                className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                <div className="text-5xl font-bold mb-2">{city.abbreviation}</div>
                <div className="text-primary-100 text-lg">{city.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Connect?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you&apos;re looking for top talent or your next career
            opportunity, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="primary"
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                For Employers
              </Button>
            </Link>
            <Link href="/submit-resume">
              <Button size="lg" variant="secondary">
                For Candidates
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
