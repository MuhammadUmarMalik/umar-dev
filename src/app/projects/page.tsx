import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ProjectsSection } from "@/components/ui/projects-section";

export const metadata: Metadata = {
  title: "Projects | Case Studies and Results by Muhammad Umar",
  description:
    "Selected projects with problem, solution, and outcome. Real results across web, mobile, and backend projects.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Muhammad Umar Projects",
    description: "Case studies with measurable outcomes.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Case Studies That Deliver Results"
        subtitle="A selection of projects highlighting the problem, solution, and measurable outcomes."
      />
      <Section>
        <div className="max-w-7xl mx-auto">
          <ProjectsSection />
        </div>
      </Section>
      {/* JSON-LD for Portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Projects by Muhammad Umar",
            url: "/projects",
            description: "Selected projects with outcomes",
          }),
        }}
      />
    </>
  );
}


