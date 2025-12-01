import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Skills Assessment & Testing | The Hammitt Group | Texas Manufacturing",
  description: "Comprehensive evaluation of technical skills, competencies, and cultural fit for manufacturing candidates. Professional skills assessment and testing services for Texas manufacturing companies.",
  keywords: [
    "skills assessment",
    "candidate testing",
    "technical evaluation",
    "manufacturing skills",
    "competency testing",
    "pre-employment assessment",
  ],
  openGraph: {
    title: "Skills Assessment & Testing | The Hammitt Group",
    description: "Comprehensive evaluation of manufacturing candidate skills.",
    type: "website",
    url: "https://thehammittgroup.com/services/skills-assessment",
  },
  alternates: {
    canonical: "https://thehammittgroup.com/services/skills-assessment",
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
      name: "Services",
      item: "https://thehammittgroup.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Skills Assessment & Testing",
      item: "https://thehammittgroup.com/services/skills-assessment",
    },
  ],
};

export default function SkillsAssessmentPage() {
  return (
    <>
      <Script
        id="skills-assessment-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-primary-600">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Skills Assessment & Testing</li>
            </ol>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
              Skills Assessment & Testing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Ensure you hire candidates with the right skills and cultural fit through comprehensive assessment and testing tailored to manufacturing roles. Make data-driven hiring decisions with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Why Skills Assessment Matters
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Resumes and interviews can only tell you so much about a candidate&apos;s actual capabilities. Skills assessment and testing provide objective, measurable data about a candidate&apos;s technical abilities, problem-solving skills, and job readiness. This is especially critical in manufacturing, where technical competence directly impacts safety, quality, and productivity.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our comprehensive assessment services help you verify that candidates possess the skills they claim, understand their proficiency levels, and identify any training gaps before they start. This reduces hiring mistakes, improves job fit, and ensures new hires can contribute effectively from day one.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Types of Assessments We Offer
                </h2>
                <div className="space-y-4">
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Technical Skills Testing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Hands-on and written assessments for technical skills including welding, machining, electrical work, mechanical assembly, quality inspection, and equipment operation. Tests are tailored to your specific requirements and industry standards.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Cognitive Ability Testing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Assessment of problem-solving abilities, critical thinking, attention to detail, and ability to learn new processes. These tests predict job performance and trainability.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Safety Knowledge Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Evaluation of safety awareness, knowledge of OSHA regulations, understanding of safety protocols, and ability to identify hazards. Critical for manufacturing environments.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Work Sample Tests</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Practical demonstrations where candidates perform actual job tasks or simulations. These provide the most accurate assessment of job readiness and skill level.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Personality & Cultural Fit Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Evaluation of work style, communication preferences, teamwork orientation, and alignment with your company culture. Ensures candidates will thrive in your environment.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary-300 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Physical Capability Testing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Assessment of physical abilities required for the role, including lifting capacity, dexterity, stamina, and ability to perform job-specific physical tasks safely.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Benefits of Skills Assessment
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Reduce bad hires by verifying skills before employment</li>
                    <li>Improve job fit and reduce early turnover</li>
                    <li>Identify training needs before candidates start</li>
                    <li>Make objective, data-driven hiring decisions</li>
                    <li>Ensure candidates meet safety and quality requirements</li>
                    <li>Reduce time-to-productivity for new hires</li>
                    <li>Support compliance with hiring best practices</li>
                    <li>Improve overall hiring quality and outcomes</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Our Assessment Process
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We begin by understanding your specific role requirements, necessary skills, and success criteria. We then design or select appropriate assessments that accurately measure these requirements. Assessments are administered in a professional, standardized manner, and results are provided with clear interpretation and recommendations.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    All assessments are validated, legally compliant, and administered consistently to ensure fair evaluation. We provide detailed reports that help you understand not just what candidates scored, but what those scores mean for their potential job performance.
                  </p>
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Get Started</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Ready to improve your hiring decisions with skills assessment? Let&apos;s discuss your needs.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link href="/contact">
                      <Button size="lg" variant="primary" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button size="lg" variant="secondary" className="w-full">
                        View All Services
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Assessment Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Technical skills
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Cognitive ability
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Safety knowledge
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Work samples
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Cultural fit
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Physical capability
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
