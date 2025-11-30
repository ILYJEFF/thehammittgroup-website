import { CandidateForm } from "@/components/forms/candidate-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Submit Your Resume | Manufacturing Jobs in Texas | The Hammitt Group",
  description: "Submit your resume to The Hammitt Group for manufacturing opportunities in Texas. Find jobs in DFW, Austin, Houston, and San Antonio. Plant managers, engineers, supervisors, quality control, and more.",
  keywords: [
    "submit resume manufacturing",
    "manufacturing jobs Texas",
    "manufacturing careers Texas",
    "submit resume Texas",
    "manufacturing job application",
  ],
  openGraph: {
    title: "Submit Your Resume | The Hammitt Group",
    description: "Submit your resume for manufacturing opportunities in Texas.",
    type: "website",
    url: "https://thehammittgroup.com/submit-resume",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/submit-resume",
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
      name: "Submit Resume",
      item: "https://thehammittgroup.com/submit-resume",
    },
  ],
};

export default function SubmitResumePage() {
  return (
    <>
      <Script
        id="submit-resume-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Submit Your Resume
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Ready for your next opportunity in Texas manufacturing? Submit your resume and let us help you find the right fit.
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We work with top manufacturing companies across DFW, Austin, Houston, and San Antonio to match qualified candidates with the right opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl md:text-3xl">Candidate Information</CardTitle>
                  <p className="text-gray-600 mt-2 text-lg">
                    Fill out the form below to submit your resume. We&apos;ll review your submission and be in touch soon to discuss opportunities that match your skills and career goals.
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <CandidateForm />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="font-bold text-primary-600 mr-2">1.</span>
                      <span>We review your resume and qualifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-primary-600 mr-2">2.</span>
                      <span>Our team contacts you to discuss your goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-primary-600 mr-2">3.</span>
                      <span>We match you with relevant opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold text-primary-600 mr-2">4.</span>
                      <span>We guide you through the interview process</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">
                    Have questions about the process or want to speak with someone directly?
                  </p>
                  <a
                    href="mailto:contact@thehammittgroup.com"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    contact@thehammittgroup.com
                  </a>
                  <br />
                  <a
                    href="tel:2544797482"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    (254) 479-7482
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

