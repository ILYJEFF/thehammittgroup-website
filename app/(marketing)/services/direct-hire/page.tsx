import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Direct Hire Services | The Hammitt Group | Texas Manufacturing Recruitment",
  description: "Permanent placement services for hourly workers, production staff, and low-level management positions in Texas manufacturing. Expert direct hire recruitment for DFW, Austin, Houston, and San Antonio.",
  keywords: [
    "direct hire services",
    "permanent placement",
    "hourly workers manufacturing",
    "production staff recruitment",
    "low-level management jobs",
    "manufacturing direct hire",
    "permanent manufacturing jobs",
  ],
  openGraph: {
    title: "Direct Hire Services | The Hammitt Group",
    description: "Permanent placement services for hourly workers and low-level management in Texas manufacturing.",
    type: "website",
    url: "https://thehammittgroup.com/services/direct-hire",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/direct-hire",
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
      name: "Direct Hire Services",
      item: "https://thehammittgroup.com/services/direct-hire",
    },
  ],
};

export default function DirectHirePage() {
  return (
    <>
      <Script
        id="direct-hire-breadcrumb"
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
              <li className="text-gray-900 font-medium">Direct Hire Services</li>
            </ol>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Direct Hire Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Permanent placement services for hourly workers, production staff, and low-level management positions. We help you find the right permanent employees who will become valuable long-term members of your manufacturing team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  What is Direct Hire?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Direct hire is a permanent placement service where we help you find and place qualified candidates who become your direct employees from day one. Unlike temporary staffing, direct hire placements are permanent positions where the candidate is hired directly by your company, not through a staffing agency.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our direct hire services focus on hourly workers, production staff, and low-level management positions - the backbone of your manufacturing operations. These are the employees who keep production lines running, ensure quality standards are met, and provide the day-to-day leadership that drives operational success.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We understand that finding the right permanent employees is critical to your long-term success. Our direct hire process ensures you get candidates who are not just qualified for the role, but who will fit your company culture, stay long-term, and contribute to your team&apos;s success.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Positions We Fill Through Direct Hire
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Hourly Production Workers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">
                        Assembly line workers, machine operators, material handlers, and production associates who form the foundation of your manufacturing operations.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div>• Assembly Workers</div>
                        <div>• Machine Operators</div>
                        <div>• Material Handlers</div>
                        <div>• Quality Inspectors</div>
                        <div>• Packaging Operators</div>
                        <div>• Warehouse Workers</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Skilled Hourly Workers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">
                        Technicians, welders, machinists, and other skilled tradespeople who bring specialized expertise to your operations.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div>• Maintenance Technicians</div>
                        <div>• Welders</div>
                        <div>• CNC Machinists</div>
                        <div>• Electricians</div>
                        <div>• Plumbers</div>
                        <div>• Tool & Die Makers</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Low-Level Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">
                        Front-line supervisors, team leads, and entry-level management positions that provide day-to-day leadership and direction.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div>• Production Supervisors</div>
                        <div>• Team Leaders</div>
                        <div>• Shift Supervisors</div>
                        <div>• Quality Supervisors</div>
                        <div>• Warehouse Supervisors</div>
                        <div>• Maintenance Supervisors</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Administrative & Support Staff</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">
                        Administrative, clerical, and support positions that keep manufacturing operations running smoothly.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div>• Production Coordinators</div>
                        <div>• Inventory Clerks</div>
                        <div>• Shipping & Receiving</div>
                        <div>• Data Entry Specialists</div>
                        <div>• Administrative Assistants</div>
                        <div>• Customer Service</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Direct Hire Process
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">1. Position Understanding</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We start by understanding your specific position requirements, company culture, work environment, and what makes a successful employee in your organization. This deep understanding ensures we find candidates who will thrive.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">2. Candidate Sourcing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We source candidates through multiple channels including our extensive network, job boards, referrals, and direct outreach. We focus on finding candidates who are actively seeking permanent positions and are committed to long-term employment.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">3. Screening & Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We conduct thorough screening including skills assessment, background checks, reference verification, and cultural fit evaluation. We ensure candidates meet your requirements before presenting them to you.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">4. Candidate Presentation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We present qualified candidates with detailed profiles and facilitate interviews. We coordinate scheduling, provide interview support, and help both parties make informed decisions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">5. Offer & Onboarding Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We assist with offer negotiations and provide onboarding support to ensure a smooth transition. We follow up to ensure both the employer and new hire are satisfied with the placement.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Benefits of Direct Hire Services
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Permanent employees who become long-term team members</li>
                    <li>Reduced turnover through better candidate matching</li>
                    <li>Faster time-to-fill compared to internal recruiting alone</li>
                    <li>Access to a broader talent pool than you might reach independently</li>
                    <li>Pre-screened candidates who meet your requirements</li>
                    <li>Reduced hiring risk through thorough vetting and assessment</li>
                    <li>Cost-effective compared to the time and resources of internal recruiting</li>
                    <li>Expertise in finding candidates who fit your company culture</li>
                    <li>Support throughout the hiring process from sourcing to onboarding</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Why Direct Hire for Manufacturing?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Manufacturing operations require reliable, committed employees who understand production processes, quality standards, and safety requirements. Direct hire ensures you get permanent employees who are invested in your company&apos;s success and will stay long-term.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    For hourly workers and low-level management positions, finding the right permanent employees is especially important because these roles form the foundation of your operations. High turnover in these positions disrupts production, impacts quality, and increases training costs. Our direct hire services help you find employees who will stay, grow, and contribute to your long-term success.
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
                    Ready to find permanent employees for your manufacturing team? Let&apos;s discuss your direct hire needs.
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
                      Candidate sourcing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Skills screening
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Background checks
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Interview coordination
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Offer support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Onboarding assistance
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Position Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Hourly production workers
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Skilled trades
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Low-level management
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Administrative staff
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Support positions
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

