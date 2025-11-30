import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Script from "next/script";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "The Hammitt Group",
            description:
              "Premier recruiting agency specializing in Texas manufacturing recruitment",
            url: "https://thehammittgroup.com",
            telephone: "2544797482",
            email: "contact@thehammittgroup.com",
            address: {
              "@type": "PostalAddress",
              addressRegion: "TX",
              addressCountry: "US",
            },
            areaServed: [
              "Dallas-Fort Worth",
              "Austin",
              "Houston",
              "San Antonio",
            ],
            serviceType: "Recruitment Services",
            industry: "Manufacturing Recruitment",
          }),
        }}
      />
    </div>
  );
}
