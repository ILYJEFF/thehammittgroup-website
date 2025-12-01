import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "DFW Manufacturing Recruiting Agency | The Hammitt Group | Dallas-Fort Worth",
  description: "Premier manufacturing recruitment agency serving Dallas-Fort Worth. Expert placement of manufacturing talent across DFW metroplex. Specialized in automotive, aerospace, electronics, and industrial manufacturing recruitment.",
  keywords: [
    "DFW manufacturing recruiters",
    "Dallas manufacturing jobs",
    "Fort Worth manufacturing recruitment",
    "DFW manufacturing agency",
    "Dallas-Fort Worth manufacturing jobs",
    "DFW manufacturing talent",
    "Dallas manufacturing recruiters",
    "Fort Worth manufacturing careers",
  ],
  openGraph: {
    title: "DFW Manufacturing Recruiting Agency | The Hammitt Group",
    description: "Premier manufacturing recruitment agency serving Dallas-Fort Worth metroplex.",
    type: "website",
    url: "https://thehammittgroup.com/locations/dfw",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/locations/dfw",
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
      name: "DFW Manufacturing Recruitment",
      item: "https://thehammittgroup.com/locations/dfw",
    },
  ],
};

export default function DFWPage() {
  return (
    <>
      <Script
        id="dfw-breadcrumb"
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
              <li className="text-gray-900 font-medium">DFW Manufacturing Recruitment</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
              Dallas-Fort Worth Metroplex
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              DFW Manufacturing Recruiting Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-6">
              Premier manufacturing recruitment services for the Dallas-Fort Worth metroplex. We understand the unique dynamics of DFW&apos;s manufacturing market and connect top talent with leading companies across the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" variant="primary" className="text-lg px-8 py-6">
                  Find DFW Manufacturing Talent
                </Button>
              </Link>
              <Link href="/submit-resume">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Submit Your Resume
                </Button>
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Understanding DFW&apos;s Manufacturing Market
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The Dallas-Fort Worth metroplex is one of the largest and most diverse manufacturing hubs in the United States. With over 5,000 manufacturing establishments employing hundreds of thousands of workers, DFW offers unparalleled opportunities for both employers and job seekers in the manufacturing sector.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    DFW&apos;s strategic location, business-friendly environment, and robust infrastructure have attracted major manufacturers from around the world. The region benefits from excellent transportation networks, including major airports, rail systems, and highway networks that make it ideal for manufacturing and distribution operations.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The manufacturing landscape in DFW is characterized by a mix of large-scale operations and specialized manufacturers. From automotive assembly plants to aerospace production facilities, from electronics manufacturing to food processing, the diversity of manufacturing in DFW creates opportunities across all skill levels and specializations.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Key Manufacturing Industries in DFW
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Automotive Manufacturing",
                    "Aerospace & Defense",
                    "Electronics & Semiconductors",
                    "Food & Beverage Processing",
                    "Industrial Machinery",
                    "Plastics & Packaging",
                    "Metal Fabrication",
                    "Medical Device Manufacturing",
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
                  Why Choose The Hammitt Group for DFW Manufacturing Recruitment
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Deep local knowledge of DFW manufacturing companies and their unique needs</li>
                    <li>Extensive network of manufacturing professionals across the metroplex</li>
                    <li>Understanding of regional salary trends and compensation expectations</li>
                    <li>Familiarity with DFW&apos;s diverse manufacturing submarkets from Plano to Arlington</li>
                    <li>Experience placing talent in both large corporate facilities and smaller specialized operations</li>
                    <li>Knowledge of DFW&apos;s transportation and logistics advantages for manufacturing</li>
                    <li>Understanding of the region&apos;s competitive talent landscape</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  DFW Manufacturing Market Insights
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    DFW&apos;s manufacturing sector continues to grow, with new facilities opening regularly and existing operations expanding. The region&apos;s central location makes it ideal for serving both domestic and international markets. Major manufacturers choose DFW for its skilled workforce, competitive operating costs, and excellent quality of life that helps attract and retain talent.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The manufacturing talent pool in DFW is diverse and well-educated, with strong technical training programs and community colleges producing skilled workers. The region also benefits from major universities that produce engineering and technical talent. This combination creates a robust talent pipeline that supports manufacturing growth across all sectors.
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Get Started in DFW
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Whether you&apos;re a DFW manufacturer looking for talent or a professional seeking manufacturing opportunities in the metroplex, we&apos;re here to help.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href="/contact">
                      <Button size="lg" variant="primary" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                    <Link href="/submit-resume">
                      <Button size="lg" variant="secondary" className="w-full">
                        Submit Resume
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">DFW Manufacturing Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Dallas
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Fort Worth
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Plano
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Irving
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Arlington
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Garland
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Mesquite
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      And throughout the metroplex
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
                    <a
                      href="mailto:contact@thehammittgroup.com"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      contact@thehammittgroup.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Phone</p>
                    <a
                      href="tel:2544797482"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      (254) 479-7482
                    </a>
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

