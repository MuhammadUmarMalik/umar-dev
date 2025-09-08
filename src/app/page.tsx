import { HeroSection } from "@/components/ui/hero-section";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/ui/about-section").then(m => m.AboutSection), {
  ssr: true,
  loading: () => <section id="about" className="cv-auto py-12" aria-busy="true" aria-live="polite" />
});

const ServicesSection = dynamic(() => import("@/components/ui/services-section").then(m => m.ServicesSection), {
  ssr: true,
  loading: () => <section id="services" className="cv-auto py-12" aria-busy="true" aria-live="polite" />
});

const ProjectsSection = dynamic(() => import("@/components/ui/projects-section").then(m => m.ProjectsSection), {
  ssr: true,
  loading: () => <section id="projects" className="cv-auto py-12" aria-busy="true" aria-live="polite" />
});

const TestimonialsSection = dynamic(() => import("@/components/ui/testimonials-section").then(m => m.TestimonialsSection), {
  ssr: true,
  loading: () => <section id="testimonials" className="cv-auto py-12" aria-busy="true" aria-live="polite" />
});

const WorkProcessSection = dynamic(() => import("@/components/ui/work-process-section").then(m => m.WorkProcessSection), {
  ssr: true,
  loading: () => <section id="process" className="cv-auto py-12" aria-busy="true" aria-live="polite" />
});

const ContactSection = dynamic(() => import("@/components/ui/contact-section").then(m => m.ContactSection), {
  ssr: true,
  loading: () => <section id="contact" className="cv-auto py-12" aria-busy="true" aria-live="polite" />
});


export default function Home() {
  return (
    <main className="relative">
      <section id="hero">
        <HeroSection />
      </section>
      
      <section id="about" className="cv-auto">
        <AboutSection />
      </section>
      
      <section id="services" className="cv-auto">
        <ServicesSection />
      </section>
      
      <section id="projects" className="cv-auto">
        <ProjectsSection />
      </section>

      <section id="testimonials" className="cv-auto">
        <TestimonialsSection />
      </section>

      <section id="process" className="cv-auto">
        <WorkProcessSection />
      </section>
      
      <section id="contact" className="cv-auto">
        <ContactSection />
      </section>
    </main>
  );
}
