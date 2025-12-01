import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Executive Search & Headhunting | The Hammitt Group | Texas Manufacturing",
  description: "Targeted executive search and headhunting services for C-suite and senior leadership positions in Texas manufacturing companies. Expert placement of plant managers, operations directors, and manufacturing executives.",
  keywords: [
    "executive search",
    "headhunting",
    "executive recruitment",
    "C-suite search",
    "manufacturing executives",
    "plant manager search",
  ],
  openGraph: {
    title: "Executive Search & Headhunting | The Hammitt Group",
    description: "Targeted executive search for senior leadership positions in Texas manufacturing.",
    type: "website",
    url: "https://thehammittgroup.com/services/executive-search",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/executive-search",
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
      name: "Executive Search",
      item: "https://thehammittgroup.com/services/executive-search",
    },
  ],
};

export default function ExecutiveSearchPage() {
  return (
    <>
      <Script
        id="executive-search-breadcrumb"
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
              <li className="text-gray-900 font-medium">Executive Search</li>
            </ol>
          </nav>

          <div className="mb-12">
            <div className="text-5xl mb-6">👔</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Executive Search & Headhunting
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Targeted search for C-suite and senior leadership positions. We identify, attract, and place top manufacturing executives who drive operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Executive-Level Recruitment
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Finding the right executive leader can transform your manufacturing operations. Our executive search services focus on identifying and attracting top-tier talent for senior positions including Plant Managers, Operations Directors, VP of Manufacturing, Chief Operating Officers, and other C-suite roles.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We understand that executive searches require discretion, thoroughness, and deep industry knowledge. Our approach combines targeted headhunting, extensive network access, and rigorous assessment to ensure the perfect cultural and strategic fit.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Positions We Fill
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Plant Managers & Directors",
                    "VP of Operations",
                    "Chief Operating Officer (COO)",
                    "VP of Manufacturing",
                    "Operations Directors",
                    "Supply Chain Executives",
                    "Quality & Safety Directors",
                    "Engineering Executives",
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
                  Our Executive Search Process
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">1. Position Analysis & Strategy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Deep dive into your organization, culture, and specific requirements. We develop a comprehensive search strategy and candidate profile.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">2. Targeted Sourcing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Leverage our extensive network, industry connections, and headhunting expertise to identify and approach qualified candidates, including passive talent.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">3. Rigorous Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Comprehensive evaluation including technical competency, leadership style, cultural fit, and strategic alignment through multiple interview rounds.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">4. Presentation & Selection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Present qualified candidates with detailed profiles and facilitate interviews. Support through offer negotiation and onboarding.
                      </p>
                    </CardContent>
                  </Card>
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
                    Ready to find your next executive leader? Let's discuss your search requirements.
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

