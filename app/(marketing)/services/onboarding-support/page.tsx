import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Onboarding & Integration Support | The Hammitt Group | Texas Manufacturing",
  description: "Smooth transition support to ensure new hires integrate successfully into your manufacturing organization. Comprehensive onboarding programs for Texas manufacturing companies.",
  keywords: [
    "onboarding",
    "new hire integration",
    "employee onboarding",
    "manufacturing onboarding",
    "onboarding support",
    "employee orientation",
  ],
  openGraph: {
    title: "Onboarding & Integration Support | The Hammitt Group",
    description: "Smooth transition support for new manufacturing hires.",
    type: "website",
    url: "https://thehammittgroup.com/services/onboarding-support",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/onboarding-support",
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
      name: "Onboarding & Integration Support",
      item: "https://thehammittgroup.com/services/onboarding-support",
    },
  ],
};

export default function OnboardingSupportPage() {
  return (
    <>
      <Script
        id="onboarding-support-breadcrumb"
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
              <li className="text-gray-900 font-medium">Onboarding & Integration Support</li>
            </ol>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Onboarding & Integration Support
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              The first 90 days are critical for new hire success. Our onboarding support ensures new employees integrate smoothly into your manufacturing team, understand your processes, and become productive quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Why Onboarding Matters
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Research shows that effective onboarding can improve new hire retention by up to 82% and productivity by over 70%. In manufacturing environments, where safety, quality, and efficiency are paramount, proper onboarding is even more critical. New employees need to understand not just their job duties, but also safety protocols, quality standards, production processes, and company culture.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our onboarding and integration support services help you create a structured, comprehensive onboarding experience that sets new hires up for long-term success. We work with you to develop and execute onboarding programs that reduce time-to-productivity, improve retention, and ensure new employees feel welcomed and valued from day one.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Onboarding Services
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Onboarding Program Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Design comprehensive onboarding programs tailored to your manufacturing environment, including orientation schedules, training curricula, checklists, and success metrics. We create programs that cover safety, quality, processes, culture, and role-specific training.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Pre-Boarding Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Engage new hires before their start date with welcome packages, information about your company, what to expect on day one, and required documentation. Set the right tone and reduce first-day anxiety.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Orientation Coordination</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Plan and coordinate comprehensive orientation sessions covering company history, values, safety protocols, quality standards, benefits, policies, and facility tours. Ensure all critical information is covered systematically.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Mentorship Program Setup</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Establish mentorship or buddy programs that pair new hires with experienced employees. We help identify mentors, create program guidelines, and facilitate connections that support integration.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">30-60-90 Day Check-ins</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Conduct structured check-ins at 30, 60, and 90 days to assess progress, address concerns, gather feedback, and ensure new hires are on track. Identify and resolve issues early before they impact retention.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Integration Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Provide ongoing support to help new hires integrate into teams, understand workflows, build relationships, and navigate company culture. We facilitate introductions and help new employees find their place in your organization.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Benefits of Effective Onboarding
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Reduce new hire turnover by up to 82%</li>
                    <li>Improve time-to-productivity by over 70%</li>
                    <li>Enhance employee engagement and job satisfaction</li>
                    <li>Ensure compliance with safety and quality standards from day one</li>
                    <li>Build stronger connections between new hires and existing teams</li>
                    <li>Create positive first impressions that last</li>
                    <li>Reduce training costs through more efficient onboarding</li>
                    <li>Improve overall organizational culture and retention</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Manufacturing-Specific Considerations
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Manufacturing onboarding requires special attention to safety protocols, quality standards, equipment operation, and production processes. Our programs are designed specifically for manufacturing environments, ensuring new hires understand not just their role, but also how they fit into the larger production system.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We incorporate hands-on training, shadowing opportunities, safety certifications, and quality training into our onboarding programs. New hires learn about your specific equipment, processes, and standards in a structured, supportive environment that builds confidence and competence.
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
                    Ready to improve your onboarding process? Let&apos;s discuss how we can help new hires succeed.
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
                      Onboarding program design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Pre-boarding support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Orientation coordination
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Mentorship program setup
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Regular check-ins
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Integration support
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
