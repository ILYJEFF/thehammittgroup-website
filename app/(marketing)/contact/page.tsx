import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | The Hammitt Group",
  description: "Get in touch with The Hammitt Group for your Texas manufacturing recruitment needs.",
};

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to find the right talent for your manufacturing team? Get in
            touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form Section */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-gray-600 mt-2">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@thehammittgroup.com"
                    className="text-primary-600 hover:text-primary-700 text-lg transition-colors"
                  >
                    contact@thehammittgroup.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                    Phone
                  </h3>
                  <a
                    href="tel:2544797482"
                    className="text-primary-600 hover:text-primary-700 text-lg transition-colors"
                  >
                    (254) 479-7482
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Areas We Serve</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Dallas-Fort Worth
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Austin
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Houston
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    San Antonio
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-primary-50 border-primary-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Why Choose Us</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="text-sm">
                    <strong className="text-gray-900">Expert Knowledge:</strong> Deep understanding of Texas manufacturing
                  </li>
                  <li className="text-sm">
                    <strong className="text-gray-900">Proven Results:</strong> Track record of successful placements
                  </li>
                  <li className="text-sm">
                    <strong className="text-gray-900">Personalized Service:</strong> Boutique approach to every placement
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
