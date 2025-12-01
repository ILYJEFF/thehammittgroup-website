import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talent Pipeline Development | The Hammitt Group",
  description: "Build and maintain a ready pool of qualified candidates for future hiring needs in Texas manufacturing.",
  keywords: ["talent pipeline", "candidate pool", "talent community", "future hiring"],
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

export default function TalentPipelinePage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/services" className="hover:text-primary-600">Services</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Talent Pipeline Development</li>
          </ol>
        </nav>
        <div className="mb-12">
          <div className="text-5xl mb-6">🚀</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Talent Pipeline Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
            Build and maintain a ready pool of qualified candidates for future hiring needs in Texas manufacturing.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Proactive Talent Acquisition</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Don't wait until you have an open position. Build a talent pipeline of engaged, qualified candidates who are ready when you need them. Reduce time-to-fill and ensure you always have access to top manufacturing talent.
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

