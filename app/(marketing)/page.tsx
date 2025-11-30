import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Texas Manufacturing Recruitment Specialists | The Hammitt Group | DFW, Austin, Houston, San Antonio",
  description: "Premier Texas manufacturing recruitment agency. Expert placement of manufacturing talent in DFW, Austin, Houston, and San Antonio. Specializing in automotive, aerospace, food & beverage, oil & gas, electronics, and industrial manufacturing recruitment.",
  keywords: [
    "Texas manufacturing recruitment",
    "DFW manufacturing jobs",
    "Austin manufacturing recruiters",
    "Houston manufacturing staffing",
    "San Antonio manufacturing careers",
    "Texas manufacturing recruiters",
    "manufacturing jobs Texas",
    "manufacturing recruitment agency",
    "Texas industrial recruitment",
    "manufacturing talent placement",
    "Dallas manufacturing jobs",
    "Fort Worth manufacturing careers",
    "Texas production jobs",
    "manufacturing headhunters Texas",
  ],
  openGraph: {
    title: "The Hammitt Group | Texas Manufacturing Recruitment Specialists",
    description: "Connecting top manufacturing talent with leading Texas companies. Specialized recruitment for DFW, Austin, Houston, and San Antonio.",
    type: "website",
    url: "https://thehammittgroup.com",
    siteName: "The Hammitt Group",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hammitt Group | Texas Manufacturing Recruitment",
    description: "Premier recruiting agency specializing in Texas manufacturing recruitment.",
  },
  alternates: {
    canonical: "https://thehammittgroup.com",
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
    title: "Deep Industry Expertise",
    description:
      "Years of specialized experience in Texas manufacturing sectors. We understand the unique talent needs, regulatory requirements, and operational challenges of automotive, aerospace, food & beverage, oil & gas, electronics, and industrial manufacturing.",
    icon: "🏭",
  },
  {
    title: "Proven Track Record",
    description:
      "Successful placements across all manufacturing industries in DFW, Austin, Houston, and San Antonio. We've helped hundreds of companies find the right talent and thousands of professionals advance their careers.",
    icon: "📈",
  },
  {
    title: "Boutique, Personalized Service",
    description:
      "Unlike large recruiting firms, we take a personalized approach to every placement. We get to know both our clients and candidates, ensuring the right cultural and technical fit for long-term success.",
    icon: "🤝",
  },
  {
    title: "Texas Market Knowledge",
    description:
      "Deep connections across Texas manufacturing hubs. We understand local market dynamics, salary ranges, and the unique characteristics of each region's manufacturing landscape.",
    icon: "🗺️",
  },
  {
    title: "Comprehensive Role Coverage",
    description:
      "From entry-level production workers to C-suite executives, we place talent across all manufacturing roles including plant managers, engineers, supervisors, quality control, maintenance, and supply chain professionals.",
    icon: "👥",
  },
  {
    title: "Fast, Responsive Service",
    description:
      "We understand that manufacturing operations can't wait. Our streamlined process ensures quick response times and efficient placement, minimizing downtime and maximizing productivity.",
    icon: "⚡",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://thehammittgroup.com/#organization",
  name: "The Hammitt Group",
  description: "Premier recruiting agency specializing in Texas manufacturing recruitment. Connecting top talent with leading manufacturers in DFW, Austin, Houston, and San Antonio.",
  url: "https://thehammittgroup.com",
  telephone: "+1-254-479-7482",
  email: "contact@thehammittgroup.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Dallas-Fort Worth",
    },
    {
      "@type": "City",
      name: "Austin",
    },
    {
      "@type": "City",
      name: "Houston",
    },
    {
      "@type": "City",
      name: "San Antonio",
    },
  ],
  serviceType: "Recruitment Services",
  industry: "Manufacturing Recruitment",
  sameAs: [],
};

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
  ],
};

export default function HomePage() {
  return (
    <>
      <Script
        id="homepage-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="homepage-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
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
      <section className="py-16 lg:py-24 bg-white" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Why Choose The Hammitt Group
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Texas&apos;s premier manufacturing recruitment agency. We combine deep industry expertise with personalized service to deliver exceptional results for both employers and candidates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-left hover:shadow-xl transition-all duration-300 border-2 hover:border-primary-300 hover:-translate-y-1 bg-white"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl md:text-2xl mb-3 text-gray-900">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-700 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-24 bg-gray-50" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Manufacturing Industries We Serve
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized recruitment expertise across all major Texas manufacturing sectors. From automotive assembly to aerospace production, we understand the unique talent needs of each industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group"
                aria-label={`Learn more about ${industry.name} recruitment`}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary-400 bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl group-hover:text-primary-600 transition-colors text-gray-900">
                      {industry.name}
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-700">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-primary-600 font-semibold group-hover:underline inline-flex items-center">
                      Learn more
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/industries">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View All Manufacturing Industries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-16 lg:py-24 bg-white" id="positions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Manufacturing Positions We Fill
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From entry-level production workers to C-suite executives, we place talent across all manufacturing roles throughout Texas. Our expertise spans operations, engineering, quality, maintenance, supply chain, and safety.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {positions.map((position) => (
              <Link
                key={position.slug}
                href={`/positions/${position.slug}`}
                className="group"
                aria-label={`Learn more about ${position.name} opportunities`}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary-400 bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl group-hover:text-primary-600 transition-colors text-gray-900">
                      {position.name}
                    </CardTitle>
                    <CardDescription className="text-gray-700">
                      {position.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-primary-600 font-semibold group-hover:underline inline-flex items-center">
                      Explore roles
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/positions">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View All Manufacturing Positions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white" id="locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Serving Texas Manufacturing Hubs
            </h2>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
              Deep connections and local expertise across Texas&apos;s major manufacturing markets. We understand the unique characteristics, talent pools, and opportunities in each region.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {cities.map((city) => (
              <div
                key={city.abbreviation}
                className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <div className="text-5xl md:text-6xl font-bold mb-3 text-white">{city.abbreviation}</div>
                <div className="text-primary-100 text-lg md:text-xl font-medium">{city.name}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-primary-100 text-lg mb-6">
              Manufacturing recruitment services available throughout Texas
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary" className="bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-6">
                Get Started in Your City
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white" id="get-started">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Ready to Connect?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Whether you&apos;re a manufacturing company looking for top talent or a professional seeking your next career opportunity in Texas, we&apos;re here to help you succeed.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-12">
            Join hundreds of Texas manufacturers and thousands of professionals who trust The Hammitt Group for their recruitment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button
                size="lg"
                variant="primary"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 w-full sm:w-auto"
              >
                Find Manufacturing Talent
              </Button>
            </Link>
            <Link href="/submit-resume">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 w-full sm:w-auto">
                Submit Your Resume
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-800">
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">500+</div>
              <div className="text-gray-400">Successful Placements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">8</div>
              <div className="text-gray-400">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-2">4</div>
              <div className="text-gray-400">Texas Cities</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
