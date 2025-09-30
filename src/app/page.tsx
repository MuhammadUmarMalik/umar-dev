import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { ServicesSection } from "@/components/ui/services-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { WorkProcessSection } from "@/components/ui/work-process-section";
import { FAQSection } from "@/components/ui/faq-section";
import { CTAAfterFAQ } from "@/components/ui/cta-after-faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Umar - Full Stack Developer & Designer",
  description:
    "Build fast, accessible web and mobile apps with clean code and stunning design. Full‑stack development, UI/UX, performance, and scalability.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Muhammad Umar - Full Stack Developer & Designer",
    description:
      "Full‑stack development, UI/UX, performance optimization, and scalable systems.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Umar - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Umar - Full Stack Developer & Designer",
    description:
      "Full‑stack development, UI/UX, performance optimization, and scalable systems.",
    images: ["/logo.png"],
  },
};

export default function Home() {
  return (
    <main className="relative">
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="process">
        <WorkProcessSection />
      </section>
      
      <section id="faq">
        <FAQSection />
      </section>
      
      <section id="cta">
        <CTAAfterFAQ />
      </section>
      
    </main>
  );
}
