import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ServicesSection } from "@/components/ui/services-section";

export const metadata: Metadata = {
  title: "Services | Full-Stack, Mobile, and UI/UX by Muhammad Umar",
  description:
    "End-to-end services: web apps, mobile apps, backend APIs, and UI/UX design. Built with Next.js, React, Node.js. Conversion-focused and performance-driven.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services by Muhammad Umar",
    description:
      "Full-stack development, mobile apps, backend APIs, and UI/UX design.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Full-Stack Development and Design, Done Right"
        subtitle="From concept to launch — I design, build, and ship fast, secure, and accessible products that grow your business."
      />
      <Section>
        <div className="max-w-7xl mx-auto">
          <ServicesSection />
        </div>
      </Section>
      {/* JSON-LD Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web and Mobile App Development",
            provider: {
              "@type": "Person",
              name: "Muhammad Umar",
            },
            areaServed: "Worldwide",
            serviceType: [
              "Full-Stack Development",
              "Mobile App Development",
              "Backend API Development",
              "UI/UX Design",
            ],
            url: "/services",
          }),
        }}
      />
    </>
  );
}


