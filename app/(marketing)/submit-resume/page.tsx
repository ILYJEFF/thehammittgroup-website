import { CandidateForm } from "@/components/forms/candidate-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Resume | The Hammitt Group",
  description: "Submit your resume to The Hammitt Group for manufacturing opportunities in Texas.",
};

export default function SubmitResumePage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Submit Your Resume
          </h1>
          <p className="text-xl text-gray-600">
            Ready for your next opportunity in Texas manufacturing? Submit your
            resume and let us help you find the right fit.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Candidate Information</CardTitle>
          </CardHeader>
          <CardContent>
            <CandidateForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

