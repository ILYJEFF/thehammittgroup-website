import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Talent Pipeline Development | The Hammitt Group | Texas Manufacturing",
  description: "Build and maintain a ready pool of qualified candidates for future hiring needs in Texas manufacturing. Proactive talent pipeline development services.",
  keywords: [
    "talent pipeline",
    "candidate pool",
    "talent community",
    "future hiring",
    "talent pipeline development",
    "candidate pipeline",
  ],
  openGraph: {
    title: "Talent Pipeline Development | The Hammitt Group",
    description: "Build a ready pool of qualified manufacturing candidates.",
    type: "website",
    url: "https://thehammittgroup.com/services/talent-pipeline",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/talent-pipeline",
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
      name: "Talent Pipeline Development",
      item: "https://thehammittgroup.com/services/talent-pipeline",
    },
  ],
};

export default function TalentPipelinePage() {
  return (
    <>
      <Script
        id="talent-pipeline-breadcrumb"
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
              <li className="text-gray-900 font-medium">Talent Pipeline Development</li>
            </ol>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Talent Pipeline Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Don&apos;t wait until you have an open position. Build and maintain a ready pool of engaged, qualified candidates who are available when you need them. Reduce time-to-fill and ensure you always have access to top manufacturing talent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Proactive Talent Acquisition
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The best candidates are often not actively job searching. They&apos;re employed, satisfied in their current roles, but open to the right opportunity. Talent pipeline development allows you to build relationships with these passive candidates before you have an immediate need, creating a ready pool of qualified talent when positions open.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our talent pipeline development services help you identify, engage, and maintain relationships with top manufacturing professionals who may be interested in future opportunities with your company. This proactive approach dramatically reduces time-to-fill, improves candidate quality, and ensures you&apos;re not starting from scratch every time you need to hire.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Pipeline Development Process
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Talent Identification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We identify and source qualified candidates for roles you frequently hire, including both active job seekers and passive candidates who may be interested in future opportunities. Our network and sourcing expertise help us find top talent across Texas manufacturing.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Initial Engagement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We reach out to potential candidates, introduce your company, and gauge interest in future opportunities. This initial contact builds awareness and establishes a foundation for ongoing relationship building.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Relationship Building</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We maintain regular, meaningful contact with pipeline candidates through newsletters, industry updates, company news, and personalized communication. This keeps your company top-of-mind and builds positive associations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Pipeline Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        We maintain detailed candidate profiles, track engagement, update availability status, and organize candidates by role, skill level, and interest. This organized system ensures you can quickly identify qualified candidates when needs arise.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Rapid Activation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        When a position opens, we immediately activate the pipeline, reaching out to pre-qualified candidates who are already familiar with your company. This dramatically reduces time-to-fill compared to starting a search from scratch.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Benefits of Talent Pipeline Development
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Reduce time-to-fill by 50-70% compared to starting new searches</li>
                    <li>Access to passive candidates who aren&apos;t actively job searching</li>
                    <li>Higher quality candidates who are already pre-qualified and engaged</li>
                    <li>Lower cost-per-hire through more efficient recruitment</li>
                    <li>Better candidate experience with established relationships</li>
                    <li>Reduced hiring pressure during urgent needs</li>
                    <li>Improved employer brand through consistent, positive engagement</li>
                    <li>Strategic advantage in competitive talent markets</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Pipeline Maintenance & Engagement
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    A talent pipeline is only valuable if it&apos;s actively maintained. We regularly update candidate information, check availability, refresh interest levels, and keep candidates engaged with relevant content about your company and industry. This ensures your pipeline remains current and ready when you need it.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We use a variety of engagement strategies including email newsletters, social media content, industry insights, company updates, and personalized outreach. The goal is to keep your company top-of-mind so that when candidates are ready to make a move, they think of you first.
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
                    Ready to build your talent pipeline? Let&apos;s discuss how we can help you stay ahead of your hiring needs.
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
                  <CardTitle className="text-xl">Pipeline Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Talent identification
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Candidate engagement
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Relationship building
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Pipeline management
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Regular updates
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Rapid activation
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
