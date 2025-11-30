import type { Metadata } from "next";
import Script from "next/script";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About The Hammitt Group | Texas Manufacturing Recruitment Specialists",
  description: "Learn about The Hammitt Group, a boutique recruiting agency specializing in Texas manufacturing recruitment. Deep expertise in DFW, Austin, Houston, and San Antonio manufacturing markets.",
  keywords: [
    "about The Hammitt Group",
    "Texas manufacturing recruiters",
    "boutique recruitment agency",
    "manufacturing recruitment specialists",
    "Texas manufacturing expertise",
  ],
  openGraph: {
    title: "About Us | The Hammitt Group",
    description: "Boutique recruiting agency specializing in Texas manufacturing recruitment.",
    type: "website",
    url: "https://thehammittgroup.com/about",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/about",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "The Hammitt Group",
    description: "Boutique recruiting agency specializing in Texas manufacturing recruitment",
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
      name: "About",
      item: "https://thehammittgroup.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="about-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              About The Hammitt Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Texas&apos;s premier boutique recruiting agency specializing in manufacturing. We connect top talent with leading manufacturers across Dallas-Fort Worth, Austin, Houston, and San Antonio.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our mission is to provide personalized, high-touch recruitment services that match the right talent with the right opportunities in Texas manufacturing. We understand that successful placements require more than just matching skills—they require understanding company culture, team dynamics, and long-term career goals.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We believe in building lasting relationships with both our clients and candidates. Every placement is an investment in long-term success, not just a quick transaction. This philosophy has earned us a reputation as one of Texas&apos;s most trusted manufacturing recruitment partners.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Why Manufacturing?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Manufacturing is the backbone of the Texas economy, contributing billions annually and employing hundreds of thousands of skilled professionals. We specialize in this sector because we understand its unique challenges and opportunities.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    From automotive assembly to aerospace production, from food processing to electronics manufacturing, we have deep expertise across all manufacturing industries. Our team understands the technical requirements, regulatory compliance needs, and operational challenges that make manufacturing recruitment unique.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Texas manufacturing is experiencing unprecedented growth, with companies expanding operations and new facilities opening regularly. This growth creates both opportunities and challenges in finding the right talent—which is where we excel.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Approach
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    As a boutique agency, we take a personalized approach to every placement. Unlike large recruiting firms that treat candidates and clients as numbers, we get to know both parties deeply. We understand not just what skills are needed, but what kind of person will thrive in each role and organization.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our process is thorough and consultative. We spend time understanding your needs, your culture, and your goals. For candidates, we take the time to understand career aspirations, work preferences, and long-term objectives. This depth of understanding ensures that every match is the right fit.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We&apos;re not just filling positions; we&apos;re building long-term relationships. Many of our clients and candidates work with us repeatedly because they trust our expertise and appreciate our personalized service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Serving Texas Manufacturing
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We&apos;re proud to serve manufacturing companies and professionals throughout Texas, with a focus on the major manufacturing hubs: Dallas-Fort Worth, Austin, Houston, and San Antonio. Our local expertise helps us understand the unique characteristics of each market.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Each Texas manufacturing market has its own personality, talent pool, and competitive landscape. Our deep connections in each region allow us to navigate these nuances effectively, ensuring we can find the right talent or opportunity regardless of location.
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
                    <a
                      href="mailto:contact@thehammittgroup.com"
                      className="text-primary-600 hover:text-primary-700 text-lg"
                    >
                      contact@thehammittgroup.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Phone</p>
                    <a
                      href="tel:2544797482"
                      className="text-primary-600 hover:text-primary-700 text-lg"
                    >
                      (254) 479-7482
                    </a>
                  </div>
                  <div className="pt-4">
                    <Link href="/contact">
                      <Button size="lg" variant="primary" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Our Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Automotive Manufacturing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Aerospace & Defense
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Food & Beverage
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Oil & Gas Equipment
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Electronics & Semiconductors
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      And More
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

