"use client";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { ServicesSection } from "@/components/ui/services-section";
import { ProjectsSection } from "@/components/ui/projects-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { WorkProcessSection } from "@/components/ui/work-process-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Home as HomeIcon, User, Briefcase, Mail } from "lucide-react";

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <Mail className="h-4 w-4" />,
  },
];

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
      
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
