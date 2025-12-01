import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Background Checks & Verification | The Hammitt Group | Texas Manufacturing",
  description: "Thorough verification of credentials, employment history, and background screening for manufacturing candidates. Comprehensive background check services for Texas manufacturing companies.",
  keywords: [
    "background checks",
    "employment verification",
    "credential verification",
    "screening",
    "pre-employment screening",
    "reference checks",
  ],
  openGraph: {
    title: "Background Checks & Verification | The Hammitt Group",
    description: "Thorough verification services for manufacturing candidates.",
    type: "website",
    url: "https://thehammittgroup.com/services/background-checks",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/background-checks",
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
      name: "Background Checks & Verification",
      item: "https://thehammittgroup.com/services/background-checks",
    },
  ],
};

export default function BackgroundChecksPage() {
  return (
    <>
      <Script
        id="background-checks-breadcrumb"
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
              <li className="text-gray-900 font-medium">Background Checks & Verification</li>
            </ol>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Background Checks & Verification
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Protect your organization with thorough background checks and verification services. Verify credentials, employment history, and conduct comprehensive screening to ensure you hire trustworthy, qualified candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Comprehensive Verification Services
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Background checks and verification are essential for protecting your organization, ensuring workplace safety, and making informed hiring decisions. In manufacturing environments, where employees work with equipment, materials, and in safety-sensitive roles, thorough screening is particularly important.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our comprehensive background check and verification services help you confirm candidate credentials, verify employment history, check references, and screen for potential red flags. We conduct all checks in compliance with FCRA regulations and provide clear, actionable reports that help you make informed hiring decisions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Types of Background Checks We Provide
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Criminal Background Checks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Comprehensive criminal history searches at county, state, and federal levels. We check for felonies, misdemeanors, and pending cases that may impact job suitability, with full compliance to FCRA and state regulations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Employment Verification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Verify employment dates, job titles, responsibilities, and reasons for leaving. We confirm work history accuracy and identify any discrepancies or gaps that need explanation.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Education & Credential Verification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Verify degrees, certifications, licenses, and professional credentials. We confirm that candidates actually hold the qualifications they claim, which is critical for technical and licensed positions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Reference Checks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Professional reference interviews with former supervisors, colleagues, and managers. We gather insights about work performance, reliability, teamwork, and character from people who have worked directly with the candidate.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Drug Screening</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Pre-employment drug testing to ensure workplace safety and compliance with company policies. We coordinate testing through certified laboratories and provide results quickly.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Motor Vehicle Records</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        For positions requiring driving, we check driving records, license status, and any violations or suspensions. Critical for roles involving company vehicles or transportation responsibilities.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Credit History Checks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Financial background checks for positions involving financial responsibility or access to sensitive financial information. Conducted in compliance with FCRA requirements.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Benefits of Professional Background Screening
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Protect your organization from negligent hiring claims</li>
                    <li>Ensure workplace safety by screening for concerning history</li>
                    <li>Verify candidate qualifications and credentials</li>
                    <li>Reduce employee theft and fraud risk</li>
                    <li>Maintain compliance with industry regulations and standards</li>
                    <li>Improve hiring quality by identifying misrepresentations</li>
                    <li>Protect company reputation and brand</li>
                    <li>Reduce turnover by verifying candidate claims</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Verification Process
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We begin by understanding your specific screening requirements based on role, industry regulations, and company policies. We then conduct comprehensive checks using multiple data sources and verification methods. All checks are performed in compliance with FCRA, state, and local regulations.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Results are provided in clear, easy-to-understand reports that highlight any concerns while also providing context. We help you interpret results and make informed decisions, ensuring you understand both what the checks reveal and what they mean for the candidate&apos;s suitability for the role.
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
                    Need comprehensive background screening? Let&apos;s discuss your verification requirements.
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
                  <CardTitle className="text-xl">Check Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Criminal history
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Employment verification
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Education & credentials
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Reference checks
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Drug screening
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Motor vehicle records
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
