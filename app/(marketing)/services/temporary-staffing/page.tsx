import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Temporary & Contract Staffing | The Hammitt Group | Texas Manufacturing",
  description: "Flexible temporary and contract staffing solutions for Texas manufacturing companies. Project-based work, seasonal needs, and temporary positions across DFW, Austin, Houston, and San Antonio.",
  keywords: [
    "temporary staffing",
    "contract staffing",
    "manufacturing temp jobs",
    "flexible staffing",
    "project-based staffing",
    "seasonal manufacturing workers",
    "contract employees Texas",
  ],
  openGraph: {
    title: "Temporary & Contract Staffing | The Hammitt Group",
    description: "Flexible staffing solutions for Texas manufacturing companies.",
    type: "website",
    url: "https://thehammittgroup.com/services/temporary-staffing",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/temporary-staffing",
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
      name: "Temporary & Contract Staffing",
      item: "https://thehammittgroup.com/services/temporary-staffing",
    },
  ],
};

export default function TemporaryStaffingPage() {
  return (
    <>
      <Script
        id="temporary-staffing-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <li className="text-gray-900 font-medium">Temporary & Contract Staffing</li>
            </ol>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Temporary & Contract Staffing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Flexible staffing solutions for project-based work, seasonal needs, and temporary positions. Scale your workforce up or down based on production demands without the long-term commitment of permanent hires.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Flexible Workforce Solutions
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Manufacturing operations often experience fluctuating workforce needs due to production surges, seasonal demands, special projects, or facility expansions. Our temporary and contract staffing services provide the flexibility to scale your workforce quickly without the overhead and commitment of permanent employment.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We understand that temporary doesn&apos;t mean unqualified. Every temporary or contract worker we place is thoroughly screened, skilled, and ready to contribute to your production goals from day one. Whether you need production line workers for a peak season, skilled technicians for a specific project, or administrative support during busy periods, we have the talent ready.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  When Temporary Staffing Makes Sense
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Production Surges</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Handle increased production demands during peak seasons, large orders, or facility expansions without overstaffing during slower periods.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Special Projects</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Staff short-term projects, equipment installations, facility maintenance, or new product launches with skilled contract workers.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Coverage for Absences</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Maintain production continuity during employee leaves, vacations, or unexpected absences with qualified temporary replacements.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Try Before You Hire</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Evaluate potential permanent employees through temporary assignments, reducing hiring risk and ensuring the right fit before making a permanent commitment.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Types of Temporary Positions We Fill
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Production Line Workers",
                    "Assembly Technicians",
                    "Quality Control Inspectors",
                    "Warehouse & Logistics Staff",
                    "Machine Operators",
                    "Maintenance Technicians",
                    "Packaging Operators",
                    "Material Handlers",
                    "Shipping & Receiving Clerks",
                    "Administrative Support",
                    "Data Entry Specialists",
                    "Inventory Coordinators",
                  ].map((position) => (
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
                  Benefits of Our Temporary Staffing Services
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Rapid deployment of qualified workers, often within 24-48 hours</li>
                    <li>Reduced administrative burden—we handle payroll, benefits, and HR compliance</li>
                    <li>Cost-effective solution without long-term employment commitments</li>
                    <li>Access to pre-screened, skilled manufacturing talent</li>
                    <li>Flexibility to adjust workforce size based on production needs</li>
                    <li>Reduced risk of overstaffing during slower periods</li>
                    <li>Opportunity to evaluate workers for potential permanent placement</li>
                    <li>Maintained production continuity during staffing gaps</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Temporary Staffing Process
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We begin by understanding your specific staffing needs, timeline, and requirements. Our team then matches you with qualified candidates from our pre-screened talent pool. We handle all administrative aspects including payroll, benefits administration, workers&apos; compensation, and compliance, allowing you to focus on production while we manage the HR complexities.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Throughout the assignment, we maintain regular communication to ensure satisfaction on both sides. If a temporary worker proves to be an excellent fit, we can facilitate a smooth transition to permanent employment when appropriate.
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Get Started</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Need flexible staffing solutions? Let&apos;s discuss how temporary or contract staffing can support your manufacturing operations.
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
                  <CardTitle className="text-xl">What We Provide</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Pre-screened qualified workers
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Rapid deployment (24-48 hours)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Payroll & benefits administration
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Workers&apos; compensation coverage
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      HR compliance management
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Ongoing support & communication
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
