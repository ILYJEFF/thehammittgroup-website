import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ATS Implementation & Setup | The Hammitt Group | Texas Manufacturing Recruitment",
  description: "Expert ATS implementation and setup services for Texas manufacturing companies. Streamline your hiring process with professional Applicant Tracking System configuration, training, and optimization.",
  keywords: [
    "ATS implementation",
    "Applicant Tracking System setup",
    "recruitment software implementation",
    "ATS configuration Texas",
    "hiring software setup",
    "recruitment technology",
  ],
  openGraph: {
    title: "ATS Implementation & Setup | The Hammitt Group",
    description: "Expert ATS implementation and setup services for Texas manufacturing companies.",
    type: "website",
    url: "https://thehammittgroup.com/services/ats-implementation",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/ats-implementation",
  },
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
      name: "Services",
      item: "https://thehammittgroup.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ATS Implementation & Setup",
      item: "https://thehammittgroup.com/services/ats-implementation",
    },
  ],
};

export default function ATSImplementationPage() {
  return (
    <>
      <Script
        id="ats-breadcrumb"
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
                <Link href="/services" className="hover:text-primary-600">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">ATS Implementation & Setup</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <div className="text-5xl mb-6">📋</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              ATS Implementation & Setup
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Streamline your hiring process with expert Applicant Tracking System implementation, configuration, and optimization tailored to manufacturing recruitment needs.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  What We Offer
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Implementing an Applicant Tracking System (ATS) can transform your recruitment process, but only if it&apos;s configured correctly for your specific needs. Our ATS implementation services ensure your system is set up to maximize efficiency, improve candidate experience, and integrate seamlessly with your existing workflows.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We work with leading ATS platforms including Greenhouse, Lever, Workday, Bullhorn, and others. Our team understands the unique requirements of manufacturing recruitment—from handling high-volume production roles to managing complex technical positions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Implementation Process
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">1. Needs Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We analyze your current recruitment process, identify pain points, and determine the optimal ATS configuration for your manufacturing hiring needs.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">2. System Configuration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Custom setup of job posting workflows, candidate pipelines, interview scheduling, communication templates, and reporting dashboards.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">3. Integration & Data Migration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Seamless integration with your HRIS, email systems, calendar tools, and background check providers. Secure migration of existing candidate data.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">4. Team Training & Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Comprehensive training for your recruitment team, hiring managers, and administrators. Ongoing support to ensure successful adoption.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Benefits for Manufacturing Companies
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Reduce time-to-fill for critical manufacturing positions</li>
                    <li>Improve candidate experience with streamlined application process</li>
                    <li>Centralize all recruitment data and communications</li>
                    <li>Automate repetitive tasks like scheduling and follow-ups</li>
                    <li>Generate actionable insights with built-in analytics and reporting</li>
                    <li>Ensure compliance with EEOC and other regulatory requirements</li>
                    <li>Scale your recruitment efforts as your company grows</li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Get Started
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Ready to streamline your recruitment process? Let&apos;s discuss your ATS implementation needs.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href="/contact">
                      <Button size="lg" variant="primary" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button size="lg" variant="secondary" className="w-full">
                        View All Services
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What&apos;s Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      System configuration & setup
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Data migration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Integration with existing tools
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Team training
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Ongoing support
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

