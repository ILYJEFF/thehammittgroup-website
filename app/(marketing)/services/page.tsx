import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Recruitment Services | The Hammitt Group | Texas Manufacturing Recruitment",
  description: "Comprehensive recruitment services for Texas manufacturing companies. ATS implementation, RPO, employer branding, executive search, temporary staffing, and more. Expert solutions for DFW, Austin, Houston, and San Antonio.",
  keywords: [
    "recruitment services Texas",
    "ATS implementation",
    "RPO services",
    "employer branding",
    "executive search Texas",
    "temporary staffing manufacturing",
    "recruitment consulting",
    "talent acquisition services",
  ],
  openGraph: {
    title: "Recruitment Services | The Hammitt Group",
    description: "Comprehensive recruitment services for Texas manufacturing companies.",
    type: "website",
    url: "https://thehammittgroup.com/services",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services",
  },
};

const serviceCategories = [
  {
    title: "Core Recruitment Services",
    description: "Our primary services for finding and placing top talent",
    services: [
      {
        name: "Direct Hire Services",
        slug: "direct-hire",
        description: "Permanent placement services for hourly workers, production staff, and low-level management positions.",
      },
      {
        name: "RPO (Recruitment Process Outsourcing)",
        slug: "rpo",
        description: "Complete recruitment process management, from sourcing to onboarding, tailored to your needs.",
      },
      {
        name: "Executive Search & Headhunting",
        slug: "executive-search",
        description: "Targeted search for C-suite and senior leadership positions in manufacturing organizations.",
      },
      {
        name: "Temporary & Contract Staffing",
        slug: "temporary-staffing",
        description: "Flexible staffing solutions for project-based work, seasonal needs, and temporary positions.",
      },
    ],
  },
  {
    title: "Recruitment Technology & Systems",
    description: "Technology solutions to optimize your hiring process",
    services: [
      {
        name: "ATS Implementation & Setup",
        slug: "ats-implementation",
        description: "Expert setup and configuration of Applicant Tracking Systems to streamline your hiring process.",
      },
      {
        name: "Talent Pipeline Development",
        slug: "talent-pipeline",
        description: "Build and maintain a ready pool of qualified candidates for future hiring needs.",
      },
    ],
  },
  {
    title: "Consulting & Strategy",
    description: "Strategic guidance to improve your recruitment outcomes",
    services: [
      {
        name: "Employer Brand Consulting",
        slug: "employer-brand-consulting",
        description: "Build a compelling employer brand that attracts top manufacturing talent to your organization.",
      },
      {
        name: "Market Intelligence & Salary Benchmarking",
        slug: "market-intelligence",
        description: "Data-driven insights on market rates, talent availability, and competitive positioning.",
      },
    ],
  },
  {
    title: "Support Services",
    description: "Additional services to ensure successful placements",
    services: [
      {
        name: "Skills Assessment & Testing",
        slug: "skills-assessment",
        description: "Comprehensive evaluation of technical skills, competencies, and cultural fit.",
      },
      {
        name: "Background Checks & Verification",
        slug: "background-checks",
        description: "Thorough verification of credentials, employment history, and background screening.",
      },
      {
        name: "Onboarding & Integration Support",
        slug: "onboarding-support",
        description: "Smooth transition support to ensure new hires integrate successfully into your organization.",
      },
    ],
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
      name: "Services",
      item: "https://thehammittgroup.com/services",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-breadcrumb"
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              Comprehensive recruitment solutions for Texas manufacturing companies. From ATS implementation to executive search, we provide end-to-end talent acquisition services.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Every service is tailored to the unique needs of manufacturing organizations across DFW, Austin, Houston, and San Antonio.
            </p>
          </div>

          {/* Services by Category */}
          <div className="space-y-16 mb-16">
            {serviceCategories.map((category, categoryIndex) => (
              <section key={categoryIndex} className="scroll-mt-24">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group"
                      aria-label={`Learn more about ${service.name}`}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-primary-400 bg-white">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg md:text-xl group-hover:text-primary-600 transition-colors text-gray-900 font-bold leading-tight">
                            {service.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-gray-600 text-sm leading-relaxed mb-4">
                            {service.description}
                          </CardDescription>
                          <div className="flex items-center text-primary-600 font-medium text-sm group-hover:underline">
                            Learn more
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Recruitment Process?
            </h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how our services can help you attract, hire, and retain top manufacturing talent in Texas.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="primary" className="bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-6">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
