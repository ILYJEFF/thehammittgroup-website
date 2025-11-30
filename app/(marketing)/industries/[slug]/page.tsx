import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Script from "next/script";

const industries: Record<
  string,
  {
    name: string;
    description: string;
    overview: string;
    positions: string[];
    whyChooseUs: string;
  }
> = {
  automotive: {
    name: "Automotive Manufacturing",
    description: "Expert placement in automotive production and assembly",
    overview:
      "Texas is home to a thriving automotive manufacturing sector, with major assembly plants and suppliers throughout the state. We specialize in connecting skilled professionals with automotive manufacturers, from production line workers to plant managers.",
    positions: [
      "Production Supervisors",
      "Quality Control Inspectors",
      "Assembly Line Workers",
      "Maintenance Technicians",
      "Plant Managers",
      "Manufacturing Engineers",
    ],
    whyChooseUs:
      "Our deep understanding of automotive manufacturing processes and quality standards ensures we match the right talent with the right opportunities.",
  },
  "aerospace-defense": {
    name: "Aerospace & Defense",
    description: "Specialized recruitment for aerospace manufacturing",
    overview:
      "Texas is a major hub for aerospace and defense manufacturing, with companies producing everything from commercial aircraft components to defense systems. We understand the specialized requirements and security clearances needed in this sector.",
    positions: [
      "Aerospace Engineers",
      "Quality Assurance Specialists",
      "CNC Machinists",
      "Composite Technicians",
      "Production Managers",
      "Safety Compliance Officers",
    ],
    whyChooseUs:
      "We have extensive experience placing candidates in aerospace roles, understanding the precision and quality standards required in this industry.",
  },
  "food-beverage": {
    name: "Food & Beverage Processing",
    description: "Connecting talent with food processing operations",
    overview:
      "The food and beverage processing industry in Texas is diverse and growing. We work with companies producing everything from packaged foods to beverages, understanding the unique requirements around food safety and quality.",
    positions: [
      "Production Supervisors",
      "Quality Control Analysts",
      "Food Safety Specialists",
      "Packaging Operators",
      "Maintenance Technicians",
      "Plant Managers",
    ],
    whyChooseUs:
      "Our knowledge of food safety regulations and processing operations helps us place candidates who understand the critical nature of food manufacturing.",
  },
  "oil-gas": {
    name: "Oil & Gas Equipment",
    description: "Recruitment for energy sector manufacturing",
    overview:
      "Texas is the heart of the energy industry, and we specialize in placing talent with companies that manufacture equipment for oil and gas extraction, refining, and distribution.",
    positions: [
      "Welding Specialists",
      "Fabrication Technicians",
      "Quality Inspectors",
      "Project Managers",
      "Safety Coordinators",
      "Field Service Technicians",
    ],
    whyChooseUs:
      "We understand the demanding nature of energy sector manufacturing and the need for candidates who can work in challenging environments.",
  },
  electronics: {
    name: "Electronics & Semiconductors",
    description: "Tech manufacturing recruitment specialists",
    overview:
      "With major tech companies expanding in Texas, we place talent in electronics and semiconductor manufacturing, from clean room operations to quality control.",
    positions: [
      "Process Engineers",
      "Quality Engineers",
      "Equipment Technicians",
      "Production Supervisors",
      "Test Engineers",
      "Manufacturing Managers",
    ],
    whyChooseUs:
      "Our understanding of high-tech manufacturing processes and quality standards ensures successful placements in this precision-driven industry.",
  },
  "industrial-machinery": {
    name: "Industrial Machinery",
    description: "Heavy machinery and equipment manufacturing",
    overview:
      "Texas manufacturers produce heavy machinery and industrial equipment for various sectors. We connect skilled professionals with companies building everything from construction equipment to industrial automation systems.",
    positions: [
      "CNC Machinists",
      "Assembly Technicians",
      "Quality Inspectors",
      "Maintenance Engineers",
      "Production Managers",
      "Welding Specialists",
    ],
    whyChooseUs:
      "We understand the technical skills required in heavy machinery manufacturing and match candidates with the right expertise.",
  },
  "plastics-packaging": {
    name: "Plastics & Packaging",
    description: "Packaging and plastics manufacturing expertise",
    overview:
      "The plastics and packaging industry in Texas serves multiple sectors. We place talent in injection molding, blow molding, and packaging operations across the state.",
    positions: [
      "Mold Technicians",
      "Production Operators",
      "Quality Control Inspectors",
      "Maintenance Technicians",
      "Production Supervisors",
      "Process Engineers",
    ],
    whyChooseUs:
      "Our knowledge of plastics manufacturing processes and packaging operations helps us find the right fit for both candidates and employers.",
  },
  "metal-fabrication": {
    name: "Metal Fabrication",
    description: "Metalworking and fabrication recruitment",
    overview:
      "Metal fabrication is a cornerstone of Texas manufacturing. We specialize in placing skilled welders, fabricators, and machinists with companies producing metal components and structures.",
    positions: [
      "Welders",
      "Fabricators",
      "CNC Operators",
      "Quality Inspectors",
      "Shop Supervisors",
      "Project Managers",
    ],
    whyChooseUs:
      "We understand the craftsmanship and technical skills required in metal fabrication and match candidates with companies that value their expertise.",
  },
};

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = industries[params.slug];
  if (!industry) {
    return {};
  }

  const cityKeywords = ["DFW", "Dallas-Fort Worth", "Austin", "Houston", "San Antonio"];
  const keywords = [
    `${industry.name} recruitment Texas`,
    `${industry.name} jobs Texas`,
    `${industry.name} recruiters`,
    `Texas ${industry.name.toLowerCase()} recruitment`,
    ...cityKeywords.map(city => `${industry.name} jobs ${city}`),
    `manufacturing recruitment ${industry.name.toLowerCase()}`,
  ];

  return {
    title: `${industry.name} Recruitment in Texas | The Hammitt Group | DFW, Austin, Houston, San Antonio`,
    description: `Expert ${industry.name.toLowerCase()} recruitment in Texas. We place top talent in ${industry.name.toLowerCase()} roles across DFW, Austin, Houston, and San Antonio. Specialized manufacturing recruitment services.`,
    keywords: keywords.join(", "),
    openGraph: {
      title: `${industry.name} Recruitment | The Hammitt Group`,
      description: `Expert ${industry.name.toLowerCase()} recruitment services in Texas manufacturing.`,
      type: "website",
      url: `https://thehammittgroup.com/industries/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.name} Recruitment | The Hammitt Group`,
      description: `Expert ${industry.name.toLowerCase()} recruitment in Texas.`,
    },
    alternates: {
      canonical: `https://thehammittgroup.com/industries/${params.slug}`,
    },
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries[params.slug];

  if (!industry) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${industry.name} Recruitment`,
    provider: {
      "@type": "ProfessionalService",
      name: "The Hammitt Group",
      url: "https://thehammittgroup.com",
    },
    areaServed: [
      "Dallas-Fort Worth",
      "Austin",
      "Houston",
      "San Antonio",
      "Texas",
    ],
    description: industry.description,
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://thehammittgroup.com/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.name,
        item: `https://thehammittgroup.com/industries/${params.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id={`industry-structured-data-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id={`industry-breadcrumb-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/industries" className="hover:text-primary-600">
                  Industries
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{industry.name}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              {industry.name} Recruitment in Texas
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              {industry.description} We specialize in connecting top talent with leading {industry.name.toLowerCase()} companies across Dallas-Fort Worth, Austin, Houston, and San Antonio.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Industry Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {industry.overview}
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Texas is home to a thriving {industry.name.toLowerCase()} sector, with companies ranging from large-scale production facilities to specialized manufacturers. The state&apos;s business-friendly environment, skilled workforce, and strategic location make it an ideal hub for {industry.name.toLowerCase()} operations.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Common Positions We Fill
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {industry.positions.map((position) => (
                    <Card key={position} className="border-2 hover:border-primary-300 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                          <span className="text-gray-900 font-medium">{position}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Why Choose The Hammitt Group for {industry.name}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {industry.whyChooseUs}
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our team has deep connections within the {industry.name.toLowerCase()} sector in Texas. We understand the specific technical requirements, regulatory compliance needs, and operational challenges that companies in this industry face. Whether you&apos;re looking to fill a critical role or advance your career in {industry.name.toLowerCase()}, we have the expertise to make the right match.
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Get Started Today
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Whether you&apos;re looking for talent or your next opportunity in {industry.name.toLowerCase()}, we&apos;re here to help.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href="/contact">
                      <Button size="lg" variant="primary" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                    <Link href="/submit-resume">
                      <Button size="lg" variant="secondary" className="w-full">
                        Submit Resume
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Areas We Serve</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Dallas-Fort Worth
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Austin
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Houston
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      San Antonio
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

