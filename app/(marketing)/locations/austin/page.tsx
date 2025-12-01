import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Austin Manufacturing Recruiting Agency | The Hammitt Group | Austin, Texas",
  description: "Premier manufacturing recruitment agency serving Austin, Texas. Expert placement of manufacturing talent in Austin&apos;s tech manufacturing, electronics, and advanced manufacturing sectors.",
  keywords: [
    "Austin manufacturing recruiters",
    "Austin manufacturing jobs",
    "Austin manufacturing agency",
    "Austin manufacturing talent",
    "Austin manufacturing careers",
    "Austin tech manufacturing",
    "Austin electronics manufacturing",
  ],
  openGraph: {
    title: "Austin Manufacturing Recruiting Agency | The Hammitt Group",
    description: "Premier manufacturing recruitment agency serving Austin, Texas.",
    type: "website",
    url: "https://thehammittgroup.com/locations/austin",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/locations/austin",
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
      name: "Austin Manufacturing Recruitment",
      item: "https://thehammittgroup.com/locations/austin",
    },
  ],
};

export default function AustinPage() {
  return (
    <>
      <Script
        id="austin-breadcrumb"
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
              <li className="text-gray-900 font-medium">Austin Manufacturing Recruitment</li>
            </ol>
          </nav>

          <div className="mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
              Austin, Texas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Austin Manufacturing Recruiting Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-6">
              Premier manufacturing recruitment services for Austin, Texas. We understand Austin&apos;s unique manufacturing ecosystem, from tech manufacturing to advanced electronics, and connect top talent with leading companies in the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" variant="primary" className="text-lg px-8 py-6">
                  Find Austin Manufacturing Talent
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
                  Understanding Austin&apos;s Manufacturing Market
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Austin has emerged as a major manufacturing hub, particularly in technology-driven manufacturing sectors. The city&apos;s manufacturing landscape is characterized by advanced electronics, semiconductor production, clean energy manufacturing, and precision manufacturing operations that leverage Austin&apos;s strong tech talent pool.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Austin&apos;s manufacturing sector benefits from the city&apos;s reputation as a tech hub, attracting both established manufacturers and innovative startups. The region has seen significant growth in semiconductor manufacturing, with major facilities producing advanced chips and electronic components. This tech-forward manufacturing environment creates unique opportunities for skilled professionals.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The manufacturing workforce in Austin is highly educated and technically skilled, with many professionals having backgrounds in engineering, technology, and advanced manufacturing processes. This creates a competitive but rewarding environment for both employers seeking top talent and professionals seeking challenging, well-compensated positions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Key Manufacturing Industries in Austin
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Electronics & Semiconductors",
                    "Advanced Manufacturing",
                    "Clean Energy Manufacturing",
                    "Medical Device Manufacturing",
                    "Aerospace Components",
                    "Industrial Automation",
                    "Food & Beverage Processing",
                    "Precision Manufacturing",
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
                  Why Choose The Hammitt Group for Austin Manufacturing Recruitment
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Deep understanding of Austin&apos;s tech-forward manufacturing ecosystem</li>
                    <li>Extensive network of manufacturing professionals in the Austin area</li>
                    <li>Knowledge of Austin&apos;s competitive compensation landscape</li>
                    <li>Understanding of the region&apos;s unique blend of tech and manufacturing talent</li>
                    <li>Experience with both established manufacturers and innovative startups</li>
                    <li>Familiarity with Austin&apos;s quality of life factors that attract top talent</li>
                    <li>Understanding of the region&apos;s growth trajectory and emerging opportunities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Austin Manufacturing Market Insights
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Austin&apos;s manufacturing sector continues to expand, driven by the region&apos;s strong tech ecosystem, skilled workforce, and business-friendly environment. Major semiconductor manufacturers and electronics companies have established significant operations in the area, creating a robust manufacturing base.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The manufacturing talent pool in Austin is unique, combining traditional manufacturing skills with advanced technical capabilities. The presence of major universities and tech companies creates a pipeline of highly skilled professionals who understand both manufacturing processes and advanced technologies. This makes Austin an attractive location for companies seeking sophisticated manufacturing talent.
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Get Started in Austin</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Whether you&apos;re an Austin manufacturer looking for talent or a professional seeking manufacturing opportunities, we&apos;re here to help.
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
                  <CardTitle className="text-xl">Austin Area Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Austin Metro
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Round Rock
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Cedar Park
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Pflugerville
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Georgetown
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

