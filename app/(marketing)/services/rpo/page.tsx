import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "RPO (Recruitment Process Outsourcing) | The Hammitt Group | Texas Manufacturing",
  description: "Complete Recruitment Process Outsourcing (RPO) services for Texas manufacturing companies. End-to-end talent acquisition management from sourcing to onboarding.",
  keywords: [
    "RPO services",
    "Recruitment Process Outsourcing",
    "outsourced recruitment",
    "talent acquisition outsourcing",
    "RPO Texas",
    "manufacturing RPO",
  ],
  openGraph: {
    title: "RPO Services | The Hammitt Group",
    description: "Complete Recruitment Process Outsourcing services for Texas manufacturing companies.",
    type: "website",
    url: "https://thehammittgroup.com/services/rpo",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/rpo",
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
      name: "RPO",
      item: "https://thehammittgroup.com/services/rpo",
    },
  ],
};

export default function RPOPage() {
  return (
    <>
      <Script
        id="rpo-breadcrumb"
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
              <li className="text-gray-900 font-medium">RPO</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              RPO (Recruitment Process Outsourcing)
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Complete recruitment process management from sourcing to onboarding. Let us handle your entire talent acquisition function while you focus on running your business.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  What is RPO?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Recruitment Process Outsourcing (RPO) is a comprehensive solution where we take ownership of all or part of your recruitment process. Unlike traditional staffing agencies, RPO providers act as an extension of your HR team, managing everything from job posting and candidate sourcing to interviewing, offer management, and onboarding.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    For manufacturing companies, RPO offers a scalable, cost-effective way to handle high-volume hiring, seasonal workforce needs, and specialized technical positions. We understand the unique challenges of manufacturing recruitment and tailor our RPO solutions accordingly.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our RPO Services
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Full RPO</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Complete ownership of your recruitment process. We handle everything from job requisition to offer acceptance, acting as your dedicated recruitment team.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Selective RPO</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We manage specific parts of your recruitment process—such as sourcing and screening—while your internal team handles interviews and final decisions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Project RPO</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Short-term RPO solutions for specific projects, facility openings, or seasonal hiring surges. Perfect for manufacturing expansion or peak production periods.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Recruiter on Demand</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Dedicated recruiters embedded in your organization, working alongside your team to fill positions quickly and efficiently.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Why Choose RPO for Manufacturing?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Reduce recruitment costs by up to 50% compared to traditional staffing</li>
                    <li>Faster time-to-fill for critical manufacturing positions</li>
                    <li>Access to specialized manufacturing recruitment expertise</li>
                    <li>Scalable solutions that grow with your hiring needs</li>
                    <li>Improved candidate quality through dedicated sourcing and screening</li>
                    <li>Better employer brand representation in the market</li>
                    <li>Comprehensive reporting and analytics on recruitment metrics</li>
                    <li>Focus your internal resources on core business operations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our RPO Process
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We begin with a comprehensive assessment of your hiring needs, company culture, and recruitment challenges. From there, we develop a customized RPO solution that aligns with your business objectives. Our dedicated team then manages the entire recruitment lifecycle, providing regular updates, metrics, and strategic insights to continuously improve your hiring outcomes.
                  </p>
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
                    Ready to transform your recruitment process? Let&apos;s discuss how RPO can work for your manufacturing company.
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
                  <CardTitle className="text-xl">What We Manage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Job posting & distribution
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Candidate sourcing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Screening & assessment
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Interview coordination
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Offer management
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Onboarding support
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

