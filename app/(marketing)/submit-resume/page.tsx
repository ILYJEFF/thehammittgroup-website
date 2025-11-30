import { CandidateForm } from "@/components/forms/candidate-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Resume | The Hammitt Group",
  description: "Submit your resume to The Hammitt Group for manufacturing opportunities in Texas.",
};

export default function SubmitResumePage() {
  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Submit Your Resume
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready for your next opportunity in Texas manufacturing? Submit your
            resume and let us help you find the right fit.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl">Candidate Information</CardTitle>
            <p className="text-gray-600 mt-2">
              Fill out the form below to submit your resume. We&apos;ll review your submission and be in touch soon.
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            <CandidateForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

