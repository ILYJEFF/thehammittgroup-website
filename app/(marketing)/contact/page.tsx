import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact The Hammitt Group | Texas Manufacturing Recruitment | DFW, Austin, Houston, San Antonio",
  description: "Get in touch with The Hammitt Group for your Texas manufacturing recruitment needs. Expert placement services in DFW, Austin, Houston, and San Antonio. Call (254) 479-7482 or email contact@thehammittgroup.com",
  keywords: [
    "contact manufacturing recruiters",
    "Texas manufacturing recruitment contact",
    "manufacturing staffing contact",
    "recruitment agency contact Texas",
  ],
  openGraph: {
    title: "Contact Us | The Hammitt Group",
    description: "Get in touch with The Hammitt Group for your Texas manufacturing recruitment needs.",
    type: "website",
    url: "https://thehammittgroup.com/contact",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/contact",
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "The Hammitt Group",
      telephone: "+1-254-479-7482",
      email: "contact@thehammittgroup.com",
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
        name: "Contact",
        item: "https://thehammittgroup.com/contact",
      },
    ],
  };

  return (
    <div>
      <Script
        id="contact-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="contact-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Contact The Hammitt Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Ready to find the right talent for your manufacturing team? Get in touch with us today.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We&apos;re here to help you build your manufacturing workforce with top talent across Texas.
            </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form Section */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl md:text-3xl">Send Us a Message</CardTitle>
                <p className="text-gray-600 mt-2 text-lg">
                  Fill out the form below and we&apos;ll get back to you as soon as possible. We typically respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@thehammittgroup.com"
                    className="text-primary-600 hover:text-primary-700 text-lg transition-colors"
                  >
                    contact@thehammittgroup.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                    Phone
                  </h3>
                  <a
                    href="tel:2544797482"
                    className="text-primary-600 hover:text-primary-700 text-lg transition-colors"
                  >
                    (254) 479-7482
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Areas We Serve</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Dallas-Fort Worth
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Austin
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Houston
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    San Antonio
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-primary-50 border-primary-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Why Choose The Hammitt Group</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 block mb-1">Expert Knowledge:</strong>
                      <span className="text-sm">Deep understanding of Texas manufacturing industries and talent markets</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 block mb-1">Proven Results:</strong>
                      <span className="text-sm">Track record of successful placements across all manufacturing sectors</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-gray-900 block mb-1">Personalized Service:</strong>
                      <span className="text-sm">Boutique approach ensuring the right fit for every placement</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
