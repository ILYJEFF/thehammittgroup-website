import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Employer Brand Consulting | The Hammitt Group | Texas Manufacturing",
  description: "Build a compelling employer brand that attracts top manufacturing talent. Expert consulting on employer branding, recruitment marketing, and talent attraction strategies for Texas manufacturing companies.",
  keywords: [
    "employer branding",
    "employer brand consulting",
    "recruitment marketing",
    "talent attraction",
    "employer value proposition",
    "manufacturing employer brand",
  ],
  openGraph: {
    title: "Employer Brand Consulting | The Hammitt Group",
    description: "Build a compelling employer brand that attracts top manufacturing talent.",
    type: "website",
    url: "https://thehammittgroup.com/services/employer-brand-consulting",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/employer-brand-consulting",
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
      name: "Employer Brand Consulting",
      item: "https://thehammittgroup.com/services/employer-brand-consulting",
    },
  ],
};

export default function EmployerBrandConsultingPage() {
  return (
    <>
      <Script
        id="employer-brand-breadcrumb"
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
              <li className="text-gray-900 font-medium">Employer Brand Consulting</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <div className="text-5xl mb-6">🎯</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Employer Brand Consulting
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Build a compelling employer brand that attracts top manufacturing talent. Stand out in a competitive market and become the employer of choice in Texas manufacturing.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Why Employer Branding Matters
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    In today&apos;s competitive manufacturing talent market, your employer brand is one of your most valuable assets. A strong employer brand not only attracts top talent but also reduces recruitment costs, improves candidate quality, and increases employee retention.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Manufacturing companies often face unique challenges in employer branding. Many candidates have misconceptions about manufacturing work—thinking it&apos;s outdated, low-tech, or offers limited career growth. Our employer brand consulting helps you tell your authentic story, showcase your modern facilities, highlight career advancement opportunities, and position your company as an innovative, desirable place to work.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Consulting Services
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Employer Brand Strategy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Develop a comprehensive employer brand strategy that aligns with your company values, culture, and business objectives. We help you define your unique employer value proposition (EVP) and create messaging that resonates with manufacturing talent.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Brand Audit & Research</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Assess your current employer brand perception through candidate surveys, employee feedback, and market research. Identify gaps between your desired brand and current reality.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Content Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Create compelling content that showcases your company culture, employee stories, facility tours, and career opportunities. This includes website content, social media strategy, video production, and recruitment marketing materials.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Recruitment Marketing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Develop and execute recruitment marketing campaigns across job boards, social media, industry publications, and career fairs. We help you reach the right candidates with the right message at the right time.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Candidate Experience Optimization</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Improve every touchpoint in the candidate journey—from initial job posting to onboarding—to create a positive, memorable experience that reinforces your employer brand.
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
                    <li>Attract higher-quality candidates who are genuinely interested in manufacturing careers</li>
                    <li>Reduce cost-per-hire by up to 50% through improved brand recognition</li>
                    <li>Decrease time-to-fill as more candidates proactively seek out your company</li>
                    <li>Improve employee retention by attracting candidates who align with your culture</li>
                    <li>Differentiate your company in a competitive talent market</li>
                    <li>Build a talent pipeline of engaged, interested candidates</li>
                    <li>Enhance your reputation within the manufacturing community</li>
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
                    Ready to build a compelling employer brand? Let&apos;s discuss how we can help you attract top manufacturing talent.
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
                  <CardTitle className="text-xl">What We Deliver</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Employer brand strategy
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Brand messaging & EVP
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Content development
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Recruitment marketing campaigns
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Candidate experience optimization
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Ongoing brand management
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

