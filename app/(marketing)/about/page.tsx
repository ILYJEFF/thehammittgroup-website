import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The Hammitt Group",
  description: "Learn about The Hammitt Group, a boutique recruiting agency specializing in Texas manufacturing recruitment.",
};

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
          About The Hammitt Group
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            The Hammitt Group is a boutique recruiting agency specializing in
            Texas manufacturing. We connect top talent with leading
            manufacturers across Dallas-Fort Worth, Austin, Houston, and San
            Antonio.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-6">
            Our mission is to provide personalized, high-touch recruitment
            services that match the right talent with the right opportunities in
            Texas manufacturing. We understand that successful placements require
            more than just matching skills—they require understanding company
            culture, team dynamics, and long-term career goals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Why Manufacturing?
          </h2>
          <p className="text-gray-700 mb-6">
            Manufacturing is the backbone of the Texas economy. We specialize in
            this sector because we understand its unique challenges and
            opportunities. From automotive assembly to aerospace production,
            from food processing to electronics manufacturing, we have deep
            expertise across all manufacturing industries.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-700 mb-6">
            As a boutique agency, we take a personalized approach to every
            placement. We get to know both our clients and candidates, ensuring
            that every match is the right fit. We&apos;re not just filling positions;
            we&apos;re building long-term relationships.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Serving Texas
          </h2>
          <p className="text-gray-700 mb-6">
            We&apos;re proud to serve manufacturing companies and professionals
            throughout Texas, with a focus on the major manufacturing hubs:
            Dallas-Fort Worth, Austin, Houston, and San Antonio. Our local
            expertise helps us understand the unique characteristics of each
            market.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-6">
            Ready to work with us? Whether you&apos;re looking for top talent or your
            next career opportunity, we&apos;re here to help.
          </p>
          <div className="bg-primary-50 rounded-lg p-6 mt-8">
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@thehammittgroup.com"
                className="text-primary-600 hover:text-primary-700"
              >
                contact@thehammittgroup.com
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:2544797482"
                className="text-primary-600 hover:text-primary-700"
              >
                (254) 479-7482
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

