import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Texas Injection Molding Recruiting | Process Techs, Mold Makers, Setup Techs | The Hammitt Group",
  description: "Specialized injection molding recruitment for automotive, packaging, consumer goods & oil & gas. We deliver skilled Process Techs, Mold Makers, Setup Techs, Maintenance, QC, and Supervisors across Texas. Fast placement with 120-day replacement warranty.",
  keywords: [
    "injection molding recruitment Texas",
    "injection molding recruiter",
    "process technician recruitment",
    "mold maker recruitment Texas",
    "setup technician recruitment",
    "plastics manufacturing recruitment",
    "Texas plastics recruiting",
    "injection molding jobs Texas",
    "molding floor talent",
    "plastics industry recruitment",
  ],
  openGraph: {
    title: "Texas Injection Molding Recruiting | The Hammitt Group",
    description: "Skilled Process Techs, Mold Makers, Setup Techs, Maintenance, QC, and Supervisors delivered fast across Texas.",
    type: "website",
    url: "https://thehammittgroup.com/industries/injection-molding",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/industries/injection-molding",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Injection Molding Recruitment",
  provider: {
    "@type": "ProfessionalService",
    name: "The Hammitt Group",
    url: "https://thehammittgroup.com",
  },
  areaServed: [
    "Dallas-Fort Worth",
    "Houston",
    "Austin",
    "San Antonio",
    "East Texas",
    "Rio Grande Valley",
    "Texas",
  ],
  description: "Specialized injection molding recruitment for automotive, packaging, consumer goods, and oil & gas industries across Texas.",
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
      name: "Industries",
      item: "https://thehammittgroup.com/industries",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Injection Molding",
      item: "https://thehammittgroup.com/industries/injection-molding",
    },
  ],
};

export default function InjectionMoldingPage() {
  return (
    <>
      <Script
        id="injection-molding-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="injection-molding-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Texas Injection Molding Recruiting for Automotive, Packaging, Consumer Goods & Oil & Gas
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed">
              Skilled Process Techs, Mold Makers, Setup Techs, Maintenance, QC, and Supervisors delivered fast, sourced from across Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" variant="primary" className="bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
                  Request Injection Molding Talent
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold">
                  Download Texas Plastics Salary Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Texas Plastics Teams Choose Hammitt */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Why Texas Plastics Teams Choose Hammitt
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Manufacturing leaders don't need another generic recruiter. You need someone who understands the unique challenges of injection molding operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="border-l-4 border-l-primary-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">High Cavity Molds</h3>
                <p className="text-gray-600">We understand the complexity and precision required for high cavity mold operations.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Fast Cycle Times</h3>
                <p className="text-gray-600">We recruit talent experienced in optimizing cycle times and maximizing throughput.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Tight Tolerances</h3>
                <p className="text-gray-600">We find candidates who understand the critical importance of dimensional accuracy.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Reinforced Resins</h3>
                <p className="text-gray-600">We source talent with expertise in engineering resins and composite materials.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">ISO/IATF Compliance</h3>
                <p className="text-gray-600">We understand quality system requirements and recruit accordingly.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary-600 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Demand Spikes & Shift Needs</h3>
                <p className="text-gray-600">We help you scale quickly when production demands increase or shift coverage is needed.</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
            <p className="text-lg text-gray-900 font-medium">
              We recruit exclusively into the plastics and injection molding ecosystem across Texas. This isn't a side specialty for us it's our core focus.
            </p>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Automotive Plastics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Talent familiar with PP/ABS blends and tight tolerances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>IATF 16949 environment experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Continuous improvement culture alignment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Automotive quality standards expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Consumer Goods Plastics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>High speed molding operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Frequent changeover experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Color matching and multi shot molding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Lean manufacturing settings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Packaging & Caps & Closures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Thin wall part expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Fast cycle time optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>High cavitation experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Husky, Engel, and KM equipment familiarity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Automated QC line experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Oil & Gas Plastic Components</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Engineered resins expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Durable molded components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Rugged operating environment experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>Specialty tooling knowledge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Roles We Fill */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Roles We Fill
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If the role touches your molding floor, we can fill it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Plant Floor Technical Talent</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Process Technicians
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Setup Technicians / Die Setters
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Mold Operators
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Machine Operators
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Automation/Robotics Techs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Tooling</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Mold Makers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Tool & Die Makers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Tooling Technicians
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Tool Room Supervisors
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Engineering & Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Process Engineers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Manufacturing Engineers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Quality Technicians
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Quality Engineers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 md:col-span-3">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Shift/Production Supervisors
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Cell Leaders
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Operations Managers
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Maintenance Managers
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Quality Managers
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* How We Deliver Talent */}
      <div className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              How We Deliver Talent (Fast)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white border-l-4 border-l-primary-600">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">30 Day Recruiting Sprint</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  A focused, high touch hiring sprint that builds you a predictable, interview ready pipeline. No long waits, no empty promises.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-primary-600">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">3x Candidate Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  You get multiple qualified plastics candidates for each open role. Not one resume and crossed fingers. Real options, real choices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-primary-600">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Deep Technical Screening</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">We screen for:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                    Machine experience (Engel, Milacron, Husky, Toshiba, Arburg)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                    Materials knowledge
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                    Changeover speed
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                    Troubleshooting ability
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                    Tooling familiarity
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                    Shift flexibility
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-l-primary-600">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Weekly Scorecard Syncs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  You see real progress: interviews scheduled, candidate feedback, pipeline flow, and offer analytics. Complete transparency, no surprises.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-white">120 Day Replacement Warranty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white text-lg">
                If it doesn't work out, we replace them. No drama, no excuses. We stand behind our placements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Texas Coverage */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Texas Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We recruit across all major Texas manufacturing regions. Wherever your molding floor is, we support it.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Dallas Fort Worth",
              "Houston",
              "Austin / Round Rock",
              "San Antonio",
              "East Texas Plastics Corridor",
              "Rio Grande Valley Manufacturing Belt",
            ].map((location) => (
              <Card key={location} className="text-center hover:shadow-lg transition-shadow border-2 border-gray-200">
                <CardContent className="p-6">
                  <p className="font-semibold text-gray-900">{location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Salary Guide CTA */}
      <div className="py-16 lg:py-24 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Download the Texas Injection Molding Salary Guide
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Get real pay ranges for Process Techs, Setup Techs, Mold Makers, Maintenance Techs, QC, and Supervisors broken out by DFW, Houston, Central Texas, and East Texas.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="primary" className="bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-6 font-semibold">
              Download the Salary Guide
            </Button>
          </Link>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Ready to Hire Plastics Talent?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's build your pipeline. Get multiple qualified candidates in 30 days with our proven recruiting sprint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" variant="primary" className="text-lg px-8 py-6 font-semibold">
                Request Injection Molding Talent
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold border-2">
                Schedule a 15 Minute Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

