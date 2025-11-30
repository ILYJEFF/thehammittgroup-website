import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

const positions: Record<
  string,
  {
    name: string;
    description: string;
    overview: string;
    qualifications: string[];
    industries: string[];
    howWeHelp: string;
  }
> = {
  "plant-managers": {
    name: "Plant Managers & Operations Leaders",
    description: "Executive and senior leadership roles in manufacturing operations",
    overview:
      "Plant managers and operations leaders are critical to manufacturing success. We place experienced leaders who can drive operational excellence, manage teams, and ensure production goals are met.",
    qualifications: [
      "Bachelor's degree in Engineering, Business, or related field",
      "5+ years of manufacturing management experience",
      "Strong leadership and team management skills",
      "Experience with lean manufacturing principles",
      "Budget and P&L management experience",
    ],
    industries: [
      "Automotive Manufacturing",
      "Aerospace & Defense",
      "Food & Beverage",
      "Industrial Machinery",
      "Electronics & Semiconductors",
    ],
    howWeHelp:
      "We understand the unique requirements of plant management roles and match candidates with the right leadership style and industry experience.",
  },
  "production-supervisors": {
    name: "Production Supervisors",
    description: "Supervisory roles managing production teams and operations",
    overview:
      "Production supervisors are the backbone of manufacturing operations, ensuring daily production targets are met while maintaining quality and safety standards.",
    qualifications: [
      "High school diploma or equivalent (Bachelor's preferred)",
      "2+ years of supervisory experience in manufacturing",
      "Strong communication and problem-solving skills",
      "Knowledge of production processes and quality standards",
      "Ability to work in fast-paced environments",
    ],
    industries: [
      "All manufacturing industries",
      "Automotive",
      "Food & Beverage",
      "Plastics & Packaging",
      "Metal Fabrication",
    ],
    howWeHelp:
      "We place supervisors who understand production workflows and can effectively manage teams to meet production goals.",
  },
  "quality-control": {
    name: "Quality Control & Assurance",
    description: "QA/QC professionals ensuring product quality and compliance",
    overview:
      "Quality control and assurance professionals are essential for maintaining product standards and regulatory compliance across all manufacturing sectors.",
    qualifications: [
      "Associate's or Bachelor's degree in Quality, Engineering, or related field",
      "Experience with quality management systems (ISO, AS9100, etc.)",
      "Knowledge of statistical process control",
      "Attention to detail and analytical skills",
      "Industry-specific certifications (preferred)",
    ],
    industries: [
      "Aerospace & Defense",
      "Automotive",
      "Food & Beverage",
      "Electronics",
      "Medical Device Manufacturing",
    ],
    howWeHelp:
      "We match quality professionals with companies that value their expertise in maintaining high standards and regulatory compliance.",
  },
  "manufacturing-engineers": {
    name: "Manufacturing Engineers",
    description: "Engineering roles optimizing production processes and systems",
    overview:
      "Manufacturing engineers design and optimize production processes, improve efficiency, and solve complex manufacturing challenges.",
    qualifications: [
      "Bachelor's degree in Manufacturing, Industrial, or Mechanical Engineering",
      "Experience with CAD/CAM software",
      "Knowledge of lean manufacturing and Six Sigma",
      "Process improvement experience",
      "Strong problem-solving and analytical skills",
    ],
    industries: [
      "Automotive",
      "Aerospace & Defense",
      "Electronics & Semiconductors",
      "Industrial Machinery",
      "Medical Device Manufacturing",
    ],
    howWeHelp:
      "We connect manufacturing engineers with opportunities where they can apply their technical expertise to drive process improvements.",
  },
  "maintenance-facilities": {
    name: "Maintenance & Facilities",
    description: "Maintenance technicians and facilities management professionals",
    overview:
      "Maintenance and facilities professionals keep manufacturing operations running smoothly by ensuring equipment reliability and facility operations.",
    qualifications: [
      "Technical degree or certification in maintenance, electrical, or mechanical",
      "Experience with industrial equipment maintenance",
      "Knowledge of PLCs, hydraulics, pneumatics",
      "Preventive maintenance program experience",
      "Strong troubleshooting skills",
    ],
    industries: [
      "All manufacturing industries",
      "Industrial Machinery",
      "Food & Beverage",
      "Automotive",
      "Oil & Gas Equipment",
    ],
    howWeHelp:
      "We place skilled maintenance professionals who can keep production lines running and minimize downtime.",
  },
  "supply-chain-logistics": {
    name: "Supply Chain & Logistics",
    description: "Logistics coordinators and supply chain management roles",
    overview:
      "Supply chain and logistics professionals ensure materials flow efficiently through manufacturing operations, from raw materials to finished products.",
    qualifications: [
      "Bachelor's degree in Supply Chain, Logistics, or Business",
      "Experience with ERP systems",
      "Knowledge of inventory management",
      "Strong analytical and organizational skills",
      "Experience with vendor management",
    ],
    industries: [
      "All manufacturing industries",
      "Automotive",
      "Electronics",
      "Food & Beverage",
      "Industrial Machinery",
    ],
    howWeHelp:
      "We match supply chain professionals with companies that need their expertise in optimizing material flow and inventory management.",
  },
  "safety-compliance": {
    name: "Safety & Compliance",
    description: "Safety managers and compliance officers ensuring workplace safety",
    overview:
      "Safety and compliance professionals protect workers and ensure companies meet regulatory requirements in manufacturing environments.",
    qualifications: [
      "Bachelor's degree in Safety, Environmental Science, or related field",
      "OSHA certifications (30-hour, 40-hour, CSP preferred)",
      "Experience with safety program development",
      "Knowledge of regulatory requirements",
      "Strong communication and training skills",
    ],
    industries: [
      "All manufacturing industries",
      "Oil & Gas",
      "Chemical Manufacturing",
      "Aerospace & Defense",
      "Food & Beverage",
    ],
    howWeHelp:
      "We place safety professionals who can develop and implement effective safety programs that protect workers and ensure compliance.",
  },
};

export async function generateStaticParams() {
  return Object.keys(positions).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const position = positions[params.slug];
  if (!position) {
    return {};
  }

  return {
    title: `${position.name} Recruitment | The Hammitt Group`,
    description: position.description,
  };
}

export default function PositionPage({ params }: { params: { slug: string } }) {
  const position = positions[params.slug];

  if (!position) {
    notFound();
  }

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/positions"
            className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
          >
            ← Back to Positions
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {position.name}
          </h1>
          <p className="text-xl text-gray-600">{position.description}</p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 mb-8">{position.overview}</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Typical Qualifications
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            {position.qualifications.map((qual) => (
              <li key={qual}>{qual}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Industries
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            {position.industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How We Help
          </h2>
          <p className="text-gray-700 mb-8">{position.howWeHelp}</p>
        </div>

        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in This Role?
          </h3>
          <p className="text-gray-700 mb-6">
            Submit your resume and let us know you&apos;re interested in{" "}
            {position.name} positions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submit-resume">
              <Button size="lg" variant="primary">
                Submit Resume
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

