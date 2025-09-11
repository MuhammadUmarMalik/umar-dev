import React from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "About",
  description:
    "About Muhammad Umar – full stack developer & designer, skills, journey, and services.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Crafting Reliable, Beautiful Software"
        subtitle="I'm Muhammad Umar, a Full Stack Developer and Designer. I build performant products with Next.js, React, TypeScript, Node.js, and a strong focus on UX and system design."
      />
      <Section>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">What I Do</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Frontend development with React/Next.js, Tailwind CSS, and TypeScript</li>
              <li>Backend APIs with Node.js, Express, and databases (Postgres, MongoDB)</li>
              <li>UI/UX design and product interface refinement</li>
              <li>Payment integrations, auth, analytics, and SEO</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Highlights</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Delivered production-grade apps for clients and personal projects</li>
              <li>Strong focus on performance, accessibility, and maintainability</li>
              <li>Clear communication and results-driven delivery</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4">Services</h2>
          <div className="grid md:grid-cols-3 gap-4 text-gray-300">
            <div className="glass rounded-lg p-5 hover:glass-hover transition-colors">
              <h3 className="font-semibold text-white mb-2">Frontend</h3>
              <p>Responsive, accessible UIs with modern tooling.</p>
            </div>
            <div className="glass rounded-lg p-5 hover:glass-hover transition-colors">
              <h3 className="font-semibold text-white mb-2">Backend</h3>
              <p>Secure APIs, databases, and integrations.</p>
            </div>
            <div className="glass rounded-lg p-5 hover:glass-hover transition-colors">
              <h3 className="font-semibold text-white mb-2">Design</h3>
              <p>Clean, thoughtful interfaces that convert.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


