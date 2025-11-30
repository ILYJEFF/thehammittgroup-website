import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

const industries: Record<
  string,
  {
    name: string;
    description: string;
    overview: string;
    positions: string[];
    whyChooseUs: string;
  }
> = {
  automotive: {
    name: "Automotive Manufacturing",
    description: "Expert placement in automotive production and assembly",
    overview:
      "Texas is home to a thriving automotive manufacturing sector, with major assembly plants and suppliers throughout the state. We specialize in connecting skilled professionals with automotive manufacturers, from production line workers to plant managers.",
    positions: [
      "Production Supervisors",
      "Quality Control Inspectors",
      "Assembly Line Workers",
      "Maintenance Technicians",
      "Plant Managers",
      "Manufacturing Engineers",
    ],
    whyChooseUs:
      "Our deep understanding of automotive manufacturing processes and quality standards ensures we match the right talent with the right opportunities.",
  },
  "aerospace-defense": {
    name: "Aerospace & Defense",
    description: "Specialized recruitment for aerospace manufacturing",
    overview:
      "Texas is a major hub for aerospace and defense manufacturing, with companies producing everything from commercial aircraft components to defense systems. We understand the specialized requirements and security clearances needed in this sector.",
    positions: [
      "Aerospace Engineers",
      "Quality Assurance Specialists",
      "CNC Machinists",
      "Composite Technicians",
      "Production Managers",
      "Safety Compliance Officers",
    ],
    whyChooseUs:
      "We have extensive experience placing candidates in aerospace roles, understanding the precision and quality standards required in this industry.",
  },
  "food-beverage": {
    name: "Food & Beverage Processing",
    description: "Connecting talent with food processing operations",
    overview:
      "The food and beverage processing industry in Texas is diverse and growing. We work with companies producing everything from packaged foods to beverages, understanding the unique requirements around food safety and quality.",
    positions: [
      "Production Supervisors",
      "Quality Control Analysts",
      "Food Safety Specialists",
      "Packaging Operators",
      "Maintenance Technicians",
      "Plant Managers",
    ],
    whyChooseUs:
      "Our knowledge of food safety regulations and processing operations helps us place candidates who understand the critical nature of food manufacturing.",
  },
  "oil-gas": {
    name: "Oil & Gas Equipment",
    description: "Recruitment for energy sector manufacturing",
    overview:
      "Texas is the heart of the energy industry, and we specialize in placing talent with companies that manufacture equipment for oil and gas extraction, refining, and distribution.",
    positions: [
      "Welding Specialists",
      "Fabrication Technicians",
      "Quality Inspectors",
      "Project Managers",
      "Safety Coordinators",
      "Field Service Technicians",
    ],
    whyChooseUs:
      "We understand the demanding nature of energy sector manufacturing and the need for candidates who can work in challenging environments.",
  },
  electronics: {
    name: "Electronics & Semiconductors",
    description: "Tech manufacturing recruitment specialists",
    overview:
      "With major tech companies expanding in Texas, we place talent in electronics and semiconductor manufacturing, from clean room operations to quality control.",
    positions: [
      "Process Engineers",
      "Quality Engineers",
      "Equipment Technicians",
      "Production Supervisors",
      "Test Engineers",
      "Manufacturing Managers",
    ],
    whyChooseUs:
      "Our understanding of high-tech manufacturing processes and quality standards ensures successful placements in this precision-driven industry.",
  },
  "industrial-machinery": {
    name: "Industrial Machinery",
    description: "Heavy machinery and equipment manufacturing",
    overview:
      "Texas manufacturers produce heavy machinery and industrial equipment for various sectors. We connect skilled professionals with companies building everything from construction equipment to industrial automation systems.",
    positions: [
      "CNC Machinists",
      "Assembly Technicians",
      "Quality Inspectors",
      "Maintenance Engineers",
      "Production Managers",
      "Welding Specialists",
    ],
    whyChooseUs:
      "We understand the technical skills required in heavy machinery manufacturing and match candidates with the right expertise.",
  },
  "plastics-packaging": {
    name: "Plastics & Packaging",
    description: "Packaging and plastics manufacturing expertise",
    overview:
      "The plastics and packaging industry in Texas serves multiple sectors. We place talent in injection molding, blow molding, and packaging operations across the state.",
    positions: [
      "Mold Technicians",
      "Production Operators",
      "Quality Control Inspectors",
      "Maintenance Technicians",
      "Production Supervisors",
      "Process Engineers",
    ],
    whyChooseUs:
      "Our knowledge of plastics manufacturing processes and packaging operations helps us find the right fit for both candidates and employers.",
  },
  "metal-fabrication": {
    name: "Metal Fabrication",
    description: "Metalworking and fabrication recruitment",
    overview:
      "Metal fabrication is a cornerstone of Texas manufacturing. We specialize in placing skilled welders, fabricators, and machinists with companies producing metal components and structures.",
    positions: [
      "Welders",
      "Fabricators",
      "CNC Operators",
      "Quality Inspectors",
      "Shop Supervisors",
      "Project Managers",
    ],
    whyChooseUs:
      "We understand the craftsmanship and technical skills required in metal fabrication and match candidates with companies that value their expertise.",
  },
};

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = industries[params.slug];
  if (!industry) {
    return {};
  }

  return {
    title: `${industry.name} Recruitment | The Hammitt Group`,
    description: industry.description,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries[params.slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/industries"
            className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
          >
            ← Back to Industries
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {industry.name}
          </h1>
          <p className="text-xl text-gray-600">{industry.description}</p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 mb-8">{industry.overview}</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Positions We Fill
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            {industry.positions.map((position) => (
              <li key={position}>{position}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-700 mb-8">{industry.whyChooseUs}</p>
        </div>

        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Connect?
          </h3>
          <p className="text-gray-700 mb-6">
            Whether you&apos;re looking for talent or your next opportunity in{" "}
            {industry.name}, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Contact Us
              </Button>
            </Link>
            <Link href="/submit-resume">
              <Button size="lg" variant="secondary">
                Submit Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

