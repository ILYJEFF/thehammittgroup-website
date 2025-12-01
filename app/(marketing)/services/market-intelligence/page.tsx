import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Market Intelligence & Salary Benchmarking | The Hammitt Group | Texas Manufacturing",
  description: "Data-driven insights on market rates, talent availability, and competitive positioning for Texas manufacturing companies. Comprehensive salary benchmarking and market intelligence services.",
  keywords: [
    "market intelligence",
    "salary benchmarking",
    "compensation analysis",
    "talent market data",
    "manufacturing salary data",
    "market research recruitment",
    "competitive intelligence",
  ],
  openGraph: {
    title: "Market Intelligence & Salary Benchmarking | The Hammitt Group",
    description: "Data-driven insights for Texas manufacturing recruitment.",
    type: "website",
    url: "https://thehammittgroup.com/services/market-intelligence",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/market-intelligence",
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
      name: "Market Intelligence",
      item: "https://thehammittgroup.com/services/market-intelligence",
    },
  ],
};

export default function MarketIntelligencePage() {
  return (
    <>
      <Script
        id="market-intelligence-breadcrumb"
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
              <li className="text-gray-900 font-medium">Market Intelligence & Salary Benchmarking</li>
            </ol>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Market Intelligence & Salary Benchmarking
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Make informed hiring decisions with comprehensive market intelligence including salary benchmarks, talent availability, competitive analysis, and industry trends specific to Texas manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Data-Driven Recruitment Strategy
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    In today&apos;s competitive manufacturing talent market, having accurate market intelligence is crucial for making informed hiring decisions. Our market intelligence and salary benchmarking services provide you with comprehensive data and insights to develop competitive compensation packages, understand talent availability, and position your company effectively in the market.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We gather and analyze data from multiple sources including our own placement history, industry surveys, job board analytics, and direct market research. This comprehensive approach ensures you receive accurate, actionable intelligence specific to Texas manufacturing markets across DFW, Austin, Houston, and San Antonio.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Market Intelligence Services
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Salary Benchmarking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Comprehensive salary and compensation analysis for specific roles, experience levels, and geographic markets. We provide percentile breakdowns (25th, 50th, 75th, 90th) to help you understand where your compensation stands relative to the market.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Talent Availability Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Assessment of candidate supply and demand for specific roles, including active job seekers, passive candidates, and overall market saturation. Understand how difficult it will be to fill a position before you start recruiting.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Competitive Intelligence</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Analysis of how your compensation, benefits, and employer brand compare to competitors in your industry and geographic area. Identify opportunities to differentiate your offerings.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Market Trend Reports</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Regular reports on salary trends, hiring patterns, skill demand shifts, and emerging roles in Texas manufacturing. Stay ahead of market changes with quarterly or annual trend analysis.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Custom Market Research</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Tailored research projects for specific roles, industries, or geographic markets. We can investigate compensation for new positions, expansion markets, or emerging skill requirements.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  How Market Intelligence Benefits Your Organization
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Set competitive compensation packages that attract top talent without overpaying</li>
                    <li>Understand time-to-fill expectations based on market conditions</li>
                    <li>Identify skill shortages and emerging talent needs in your industry</li>
                    <li>Make informed decisions about geographic expansion or new facility locations</li>
                    <li>Develop realistic recruitment budgets based on market rates</li>
                    <li>Benchmark your employer brand and compensation against competitors</li>
                    <li>Anticipate market changes and adjust your recruitment strategy proactively</li>
                    <li>Support compensation discussions with data-driven insights</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Methodology
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our market intelligence is built on multiple data sources including our extensive placement history across Texas manufacturing companies, industry salary surveys, job board analytics, direct candidate feedback, and proprietary market research. We analyze data by role, experience level, industry sector, company size, and geographic location to provide you with the most relevant and accurate insights.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    All reports include detailed methodology, data sources, sample sizes, and confidence intervals. We present data in clear, actionable formats including charts, tables, and executive summaries that make it easy to understand and apply to your recruitment strategy.
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
                    Ready to make data-driven hiring decisions? Let&apos;s discuss your market intelligence needs.
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
                  <CardTitle className="text-xl">What You Receive</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Comprehensive salary reports
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Talent availability analysis
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Competitive benchmarking
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Market trend reports
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Custom research projects
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Executive summaries & insights
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
