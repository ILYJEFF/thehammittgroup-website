import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "San Antonio Manufacturing Recruiting Agency | The Hammitt Group | San Antonio, Texas",
  description: "Premier manufacturing recruitment agency serving San Antonio, Texas. Expert placement of manufacturing talent in San Antonio&apos;s aerospace, automotive, food processing, and industrial manufacturing sectors.",
  keywords: [
    "San Antonio manufacturing recruiters",
    "San Antonio manufacturing jobs",
    "San Antonio manufacturing agency",
    "San Antonio manufacturing talent",
    "San Antonio manufacturing careers",
    "San Antonio aerospace manufacturing",
    "San Antonio automotive manufacturing",
  ],
  openGraph: {
    title: "San Antonio Manufacturing Recruiting Agency | The Hammitt Group",
    description: "Premier manufacturing recruitment agency serving San Antonio, Texas.",
    type: "website",
    url: "https://thehammittgroup.com/locations/san-antonio",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/locations/san-antonio",
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
      name: "San Antonio Manufacturing Recruitment",
      item: "https://thehammittgroup.com/locations/san-antonio",
    },
  ],
};

export default function SanAntonioPage() {
  return (
    <>
      <Script
        id="san-antonio-breadcrumb"
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
              <li className="text-gray-900 font-medium">San Antonio Manufacturing Recruitment</li>
            </ol>
          </nav>

          <div className="mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
              San Antonio, Texas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              San Antonio Manufacturing Recruiting Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-6">
              Premier manufacturing recruitment services for San Antonio, Texas. We understand San Antonio&apos;s diverse manufacturing landscape, from aerospace and automotive to food processing and industrial manufacturing, and connect top talent with leading companies in the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" variant="primary" className="text-lg px-8 py-6">
                  Find San Antonio Manufacturing Talent
                </Button>
              </Link>
              <Link href="/submit-resume">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Submit Your Resume
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Understanding San Antonio&apos;s Manufacturing Market
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    San Antonio has a robust and growing manufacturing sector that plays a vital role in the region&apos;s economy. The city&apos;s manufacturing landscape is characterized by a strong aerospace presence, significant automotive manufacturing operations, extensive food processing facilities, and diverse industrial manufacturing operations.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    San Antonio&apos;s manufacturing sector benefits from the city&apos;s strategic location, skilled workforce, and business-friendly environment. The region has attracted major manufacturers from various industries, creating a diverse manufacturing base that offers opportunities across multiple sectors and skill levels.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The manufacturing workforce in San Antonio is experienced and dedicated, with strong work ethic and technical skills. The region&apos;s manufacturing operations range from large-scale production facilities to specialized manufacturers, creating a dynamic environment that offers opportunities for both entry-level workers and experienced professionals.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Key Manufacturing Industries in San Antonio
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Aerospace & Defense",
                    "Automotive Manufacturing",
                    "Food & Beverage Processing",
                    "Industrial Machinery",
                    "Medical Device Manufacturing",
                    "Electronics Manufacturing",
                    "Metal Fabrication",
                    "Plastics & Packaging",
                  ].map((industry) => (
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
                  Why Choose The Hammitt Group for San Antonio Manufacturing Recruitment
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Deep understanding of San Antonio&apos;s diverse manufacturing ecosystem</li>
                    <li>Extensive network of manufacturing professionals in the San Antonio area</li>
                    <li>Knowledge of San Antonio&apos;s unique manufacturing sectors and their needs</li>
                    <li>Understanding of the region&apos;s manufacturing clusters and industrial areas</li>
                    <li>Experience with both large-scale operations and specialized manufacturers</li>
                    <li>Familiarity with San Antonio&apos;s competitive talent market and compensation</li>
                    <li>Understanding of the region&apos;s growth trajectory and emerging opportunities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  San Antonio Manufacturing Market Insights
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    San Antonio&apos;s manufacturing sector continues to grow, with new facilities opening and existing operations expanding. The region&apos;s strategic location, skilled workforce, and quality of life make it attractive to manufacturers seeking to establish or expand operations. The city&apos;s manufacturing base is diverse, offering opportunities across multiple industries.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The manufacturing talent pool in San Antonio is strong, with many professionals having experience in aerospace, automotive, or food processing operations. The region&apos;s technical training programs and community colleges produce skilled workers who understand manufacturing processes, quality standards, and safety requirements. This creates a reliable workforce that supports manufacturing growth.
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Get Started in San Antonio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Whether you&apos;re a San Antonio manufacturer looking for talent or a professional seeking manufacturing opportunities, we&apos;re here to help.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href="/contact">
                      <Button size="lg" variant="primary" className="w-full">Contact Us</Button>
                    </Link>
                    <Link href="/submit-resume">
                      <Button size="lg" variant="secondary" className="w-full">Submit Resume</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">San Antonio Area Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      San Antonio Metro
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      New Braunfels
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Schertz
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Universal City
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      And surrounding areas
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

