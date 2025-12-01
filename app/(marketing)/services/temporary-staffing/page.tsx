import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Temporary & Contract Staffing | The Hammitt Group | Texas Manufacturing",
  description: "Flexible temporary and contract staffing solutions for Texas manufacturing companies. Project-based work, seasonal needs, and temporary positions.",
  keywords: ["temporary staffing", "contract staffing", "manufacturing temp jobs", "flexible staffing"],
  openGraph: {
    title: "Temporary & Contract Staffing | The Hammitt Group",
    description: "Flexible staffing solutions for Texas manufacturing companies.",
    type: "website",
    url: "https://thehammittgroup.com/services/temporary-staffing",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/temporary-staffing",
  },
};

export default function TemporaryStaffingPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-primary-600">Services</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Temporary & Contract Staffing</li>
          </ol>
        </nav>
        <div className="mb-12">
          <div className="text-5xl mb-6">⏱️</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Temporary & Contract Staffing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
            Flexible staffing solutions for project-based work, seasonal needs, and temporary positions in Texas manufacturing.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Flexible Staffing Solutions</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Whether you need temporary workers for a production surge, contract employees for a specific project, or seasonal staff for peak periods, we provide flexible staffing solutions tailored to your manufacturing needs.
              </p>
            </section>
          </div>
          <div className="space-y-6">
            <Card className="bg-primary-50 border-primary-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Get Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href="/contact">
                  <Button size="lg" variant="primary" className="w-full">Contact Us</Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="secondary" className="w-full">View All Services</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

