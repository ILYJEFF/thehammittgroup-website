import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Houston Manufacturing Recruiting Agency | The Hammitt Group | Houston, Texas",
  description: "Premier manufacturing recruitment agency serving Houston, Texas. Expert placement of manufacturing talent in Houston&apos;s energy, petrochemical, aerospace, and industrial manufacturing sectors.",
  keywords: [
    "Houston manufacturing recruiters",
    "Houston manufacturing jobs",
    "Houston manufacturing agency",
    "Houston manufacturing talent",
    "Houston manufacturing careers",
    "Houston energy manufacturing",
    "Houston petrochemical manufacturing",
  ],
  openGraph: {
    title: "Houston Manufacturing Recruiting Agency | The Hammitt Group",
    description: "Premier manufacturing recruitment agency serving Houston, Texas.",
    type: "website",
    url: "https://thehammittgroup.com/locations/houston",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/locations/houston",
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
      name: "Houston Manufacturing Recruitment",
      item: "https://thehammittgroup.com/locations/houston",
    },
  ],
};

export default function HoustonPage() {
  return (
    <>
      <Script
        id="houston-breadcrumb"
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
              <li className="text-gray-900 font-medium">Houston Manufacturing Recruitment</li>
            </ol>
          </nav>

          <div className="mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-6">
              Houston, Texas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Houston Manufacturing Recruiting Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-6">
              Premier manufacturing recruitment services for Houston, Texas. We understand Houston&apos;s diverse manufacturing landscape, from energy and petrochemicals to aerospace and industrial manufacturing, and connect top talent with leading companies in the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" variant="primary" className="text-lg px-8 py-6">
                  Find Houston Manufacturing Talent
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
                  Understanding Houston&apos;s Manufacturing Market
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Houston is one of the largest manufacturing centers in the United States, with a manufacturing sector deeply integrated with the energy industry. The region is home to extensive petrochemical manufacturing, oil and gas equipment production, and related industrial manufacturing operations that support the energy sector.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Beyond energy-related manufacturing, Houston also has significant aerospace manufacturing operations, including NASA&apos;s Johnson Space Center and numerous aerospace contractors. The region&apos;s manufacturing diversity extends to food processing, industrial machinery, and advanced manufacturing operations that leverage Houston&apos;s skilled workforce and strategic location.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Houston&apos;s manufacturing sector benefits from the region&apos;s port facilities, which make it ideal for both importing raw materials and exporting finished products. The city&apos;s extensive industrial infrastructure and skilled workforce create a robust manufacturing ecosystem that supports operations of all sizes, from small specialized manufacturers to large-scale industrial facilities.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Key Manufacturing Industries in Houston
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Oil & Gas Equipment Manufacturing",
                    "Petrochemical Manufacturing",
                    "Aerospace & Defense",
                    "Industrial Machinery",
                    "Food & Beverage Processing",
                    "Metal Fabrication",
                    "Chemical Manufacturing",
                    "Marine Equipment Manufacturing",
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
                  Why Choose The Hammitt Group for Houston Manufacturing Recruitment
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Deep understanding of Houston&apos;s energy-driven manufacturing ecosystem</li>
                    <li>Extensive network of manufacturing professionals across the Houston metro area</li>
                    <li>Knowledge of Houston&apos;s unique manufacturing sectors and their requirements</li>
                    <li>Understanding of the region&apos;s industrial landscape and major manufacturing corridors</li>
                    <li>Experience with both energy-related and diversified manufacturing operations</li>
                    <li>Familiarity with Houston&apos;s port-related manufacturing and logistics needs</li>
                    <li>Understanding of the region&apos;s competitive compensation and benefits landscape</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Houston Manufacturing Market Insights
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Houston&apos;s manufacturing sector is characterized by its scale and diversity. The region is home to some of the largest petrochemical manufacturing facilities in the world, as well as numerous smaller specialized manufacturers. This creates opportunities across all skill levels, from entry-level production workers to highly specialized engineers and technicians.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The manufacturing workforce in Houston is experienced and technically skilled, with many professionals having backgrounds in energy, petrochemicals, or related industrial sectors. The region&apos;s strong technical training programs and community colleges produce skilled workers who understand the unique requirements of Houston&apos;s manufacturing operations, particularly in safety, quality, and process control.
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Get Started in Houston</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Whether you&apos;re a Houston manufacturer looking for talent or a professional seeking manufacturing opportunities, we&apos;re here to help.
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
                  <CardTitle className="text-xl">Houston Area Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Houston Metro
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Pasadena
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Baytown
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Sugar Land
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      The Woodlands
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      And throughout the metro area
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

