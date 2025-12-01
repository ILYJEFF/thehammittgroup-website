import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Script from "next/script";

const positions: Record<
  string,
  {
    name: string;
    description: string;
    overview: string;
    qualifications: string[];
    industries: string[];
    howWeHelp: string;
  }
> = {
  "plant-managers": {
    name: "Plant Managers & Operations Leaders",
    description: "Executive and senior leadership roles in manufacturing operations",
    overview:
      "Plant managers and operations leaders are critical to manufacturing success. We place experienced leaders who can drive operational excellence, manage teams, and ensure production goals are met.",
    qualifications: [
      "Bachelor's degree in Engineering, Business, or related field",
      "5+ years of manufacturing management experience",
      "Strong leadership and team management skills",
      "Experience with lean manufacturing principles",
      "Budget and P&L management experience",
    ],
    industries: [
      "Automotive Manufacturing",
      "Aerospace & Defense",
      "Food & Beverage",
      "Industrial Machinery",
      "Electronics & Semiconductors",
    ],
    howWeHelp:
      "We understand the unique requirements of plant management roles and match candidates with the right leadership style and industry experience. We also place leaders who are adaptable and can contribute to various operational areas beyond their primary focus.",
  },
  "production-supervisors": {
    name: "Production Supervisors",
    description: "Supervisory roles managing production teams and operations",
    overview:
      "Production supervisors are the backbone of manufacturing operations, ensuring daily production targets are met while maintaining quality and safety standards.",
    qualifications: [
      "High school diploma or equivalent (Bachelor's preferred)",
      "2+ years of supervisory experience in manufacturing",
      "Strong communication and problem-solving skills",
      "Knowledge of production processes and quality standards",
      "Ability to work in fast-paced environments",
    ],
    industries: [
      "All manufacturing industries",
      "Automotive",
      "Food & Beverage",
      "Plastics & Packaging",
      "Metal Fabrication",
    ],
    howWeHelp:
      "We place supervisors who understand production workflows and can effectively manage teams to meet production goals. Many of our placements also contribute to quality, safety, and other manufacturing areas as needed.",
  },
  "quality-control": {
    name: "Quality Control & Assurance",
    description: "QA/QC professionals ensuring product quality and compliance",
    overview:
      "Quality control and assurance professionals are essential for maintaining product standards and regulatory compliance across all manufacturing sectors.",
    qualifications: [
      "Associate's or Bachelor's degree in Quality, Engineering, or related field",
      "Experience with quality management systems (ISO, AS9100, etc.)",
      "Knowledge of statistical process control",
      "Attention to detail and analytical skills",
      "Industry-specific certifications (preferred)",
    ],
    industries: [
      "Aerospace & Defense",
      "Automotive",
      "Food & Beverage",
      "Electronics",
      "Medical Device Manufacturing",
    ],
    howWeHelp:
      "We match quality professionals with companies that value their expertise in maintaining high standards and regulatory compliance. We also place candidates who can contribute to process improvement, training, and other manufacturing functions.",
  },
  "manufacturing-engineers": {
    name: "Manufacturing Engineers",
    description: "Engineering roles optimizing production processes and systems",
    overview:
      "Manufacturing engineers design and optimize production processes, improve efficiency, and solve complex manufacturing challenges.",
    qualifications: [
      "Bachelor's degree in Manufacturing, Industrial, or Mechanical Engineering",
      "Experience with CAD/CAM software",
      "Knowledge of lean manufacturing and Six Sigma",
      "Process improvement experience",
      "Strong problem-solving and analytical skills",
    ],
    industries: [
      "Automotive",
      "Aerospace & Defense",
      "Electronics & Semiconductors",
      "Industrial Machinery",
      "Medical Device Manufacturing",
    ],
    howWeHelp:
      "We connect manufacturing engineers with opportunities where they can apply their technical expertise to drive process improvements. Many placements also work on quality initiatives, safety improvements, and cross-functional projects.",
  },
  "maintenance-facilities": {
    name: "Maintenance & Facilities",
    description: "Maintenance technicians and facilities management professionals",
    overview:
      "Maintenance and facilities professionals keep manufacturing operations running smoothly by ensuring equipment reliability and facility operations.",
    qualifications: [
      "Technical degree or certification in maintenance, electrical, or mechanical",
      "Experience with industrial equipment maintenance",
      "Knowledge of PLCs, hydraulics, pneumatics",
      "Preventive maintenance program experience",
      "Strong troubleshooting skills",
    ],
    industries: [
      "All manufacturing industries",
      "Industrial Machinery",
      "Food & Beverage",
      "Automotive",
      "Oil & Gas Equipment",
    ],
    howWeHelp:
      "We place skilled maintenance professionals who can keep production lines running and minimize downtime. Our placements often contribute to facilities management, safety improvements, and other operational areas.",
  },
  "supply-chain-logistics": {
    name: "Supply Chain & Logistics",
    description: "Logistics coordinators and supply chain management roles",
    overview:
      "Supply chain and logistics professionals ensure materials flow efficiently through manufacturing operations, from raw materials to finished products.",
    qualifications: [
      "Bachelor's degree in Supply Chain, Logistics, or Business",
      "Experience with ERP systems",
      "Knowledge of inventory management",
      "Strong analytical and organizational skills",
      "Experience with vendor management",
    ],
    industries: [
      "All manufacturing industries",
      "Automotive",
      "Electronics",
      "Food & Beverage",
      "Industrial Machinery",
    ],
    howWeHelp:
      "We match supply chain professionals with companies that need their expertise in optimizing material flow and inventory management. Many also contribute to production planning, quality coordination, and other operational functions.",
  },
  "safety-compliance": {
    name: "Safety & Compliance",
    description: "Safety managers and compliance officers ensuring workplace safety",
    overview:
      "Safety and compliance professionals protect workers and ensure companies meet regulatory requirements in manufacturing environments.",
    qualifications: [
      "Bachelor's degree in Safety, Environmental Science, or related field",
      "OSHA certifications (30-hour, 40-hour, CSP preferred)",
      "Experience with safety program development",
      "Knowledge of regulatory requirements",
      "Strong communication and training skills",
    ],
    industries: [
      "All manufacturing industries",
      "Oil & Gas",
      "Chemical Manufacturing",
      "Aerospace & Defense",
      "Food & Beverage",
    ],
    howWeHelp:
      "We place safety professionals who can develop and implement effective safety programs that protect workers and ensure compliance. Our placements often contribute to training, quality initiatives, and environmental programs as well.",
  },
};

export async function generateStaticParams() {
  return Object.keys(positions).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const position = positions[params.slug];
  if (!position) {
    return {};
  }

  const cityKeywords = ["DFW", "Dallas-Fort Worth", "Austin", "Houston", "San Antonio"];
  const keywords = [
    `${position.name} jobs Texas`,
    `${position.name} recruitment`,
    `Texas ${position.name.toLowerCase()} jobs`,
    ...cityKeywords.map(city => `${position.name} jobs ${city}`),
    `manufacturing ${position.name.toLowerCase()} Texas`,
    `${position.name} careers Texas`,
  ];

  return {
    title: `${position.name} Jobs in Texas | The Hammitt Group | DFW, Austin, Houston, San Antonio`,
    description: `Find ${position.name.toLowerCase()} opportunities in Texas manufacturing. Expert placement services for ${position.name.toLowerCase()} roles across DFW, Austin, Houston, and San Antonio.`,
    keywords: keywords.join(", "),
    openGraph: {
      title: `${position.name} Recruitment | The Hammitt Group`,
      description: `Expert placement services for ${position.name.toLowerCase()} roles in Texas manufacturing.`,
      type: "website",
      url: `https://thehammittgroup.com/positions/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${position.name} Jobs | The Hammitt Group`,
      description: `Find ${position.name.toLowerCase()} opportunities in Texas.`,
    },
    alternates: {
      canonical: `https://thehammittgroup.com/positions/${params.slug}`,
    },
  };
}

export default function PositionPage({ params }: { params: { slug: string } }) {
  const position = positions[params.slug];

  if (!position) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: position.name,
    description: position.overview,
    employmentType: "FULL_TIME",
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
    },
    industry: "Manufacturing",
    qualifications: position.qualifications,
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
        name: "Positions",
        item: "https://thehammittgroup.com/positions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: position.name,
        item: `https://thehammittgroup.com/positions/${params.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id={`position-structured-data-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id={`position-breadcrumb-${params.slug}`}
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
                <Link href="/positions" className="hover:text-primary-600">
                  Positions
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{position.name}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              {position.name} Jobs in Texas
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              {position.description} Find opportunities across Dallas-Fort Worth, Austin, Houston, and San Antonio.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Role Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {position.overview}
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {position.name} roles are critical to manufacturing success in Texas. These positions require a combination of technical expertise, leadership skills, and industry knowledge. We work with top manufacturing companies across the state to place qualified professionals in these essential roles. While these positions focus on specific responsibilities, we also place candidates who are flexible and willing to contribute to other areas of manufacturing operations as needed.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Typical Qualifications & Requirements
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {position.qualifications.map((qual, index) => (
                    <Card key={index} className="border-2 hover:border-primary-300 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-900 leading-relaxed">{qual}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Common Industries for {position.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {position.industries.map((industry) => (
                    <Card key={industry} className="border-2 hover:border-primary-300 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                          <span className="text-gray-900 font-medium">{industry}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  How We Help Place {position.name}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {position.howWeHelp}
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our team understands the specific requirements and expectations for {position.name.toLowerCase()} roles in Texas manufacturing. We work closely with both candidates and employers to ensure the right match, considering not just technical qualifications, but also company culture, team dynamics, and long-term career goals. We also help place professionals who are adaptable and can contribute beyond their primary specialty when opportunities arise.
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Interested in {position.name}?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Submit your resume and let us know you&apos;re interested in {position.name.toLowerCase()} positions. We&apos;ll match you with opportunities that align with your skills and career goals, including roles where you can contribute to your specialty while also working on other manufacturing areas.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href="/submit-resume">
                      <Button size="lg" variant="primary" className="w-full">
                        Submit Resume
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" variant="secondary" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Locations</CardTitle>
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

