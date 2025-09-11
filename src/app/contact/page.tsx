import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Mail, Phone, Linkedin, Github, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Work with Muhammad Umar",
  description: "Get in touch for web, mobile, backend, or UI/UX projects. Fast replies via email or WhatsApp.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Muhammad Umar",
    description: "Project inquiries, collaborations, and consulting.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s build something great together"
        subtitle="For project inquiries, collaborations, or consulting, send a message or reach me directly. Quick replies guaranteed."
        variant="centered"
        cta={(
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="mailto:umarmalik.cs711@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white font-semibold transition-colors"
              aria-label="Email Muhammad Umar"
            >
              <Mail className="w-5 h-5" /> Email me
            </a>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/12 bg-white/[0.04] hover:bg-white/[0.07] text-white font-semibold transition-colors"
              aria-label="Book a discovery call"
            >
              <Calendar className="w-5 h-5" /> Book a call
            </a>
            <div className="w-full sm:w-auto text-center text-xs text-slate-400 sm:ml-3">
              Response time: <span className="text-slate-300">under 24 hours</span>
            </div>
          </div>
        )}
      />
      <Section>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Contact Options */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to new projects
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">Get in touch</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Prefer email? Reach out at {""}
              <a className="text-[var(--color-accent-blue)] hover:underline" href="mailto:umarmalik.cs711@gmail.com">umarmalik.cs711@gmail.com</a>
              {" "}or ping me on WhatsApp for a quick chat.
            </p>

            {/* Quick action buttons */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <a href="mailto:umarmalik.cs711@gmail.com" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors">
                <Mail className="w-5 h-5 text-[var(--color-accent-blue)]" /> Email me
              </a>
              <a href="https://wa.me/923062617205?text=Hi%20Muhammad%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors">
                <Phone className="w-5 h-5 text-emerald-400" /> WhatsApp
              </a>
              <a href="https://linkedin.com/in/muhammad-umar-malik786" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors">
                <Linkedin className="w-5 h-5 text-sky-400" /> LinkedIn
              </a>
              <a href="https://github.com/MuhammadUmarMalik" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors">
                <Github className="w-5 h-5 text-gray-300" /> GitHub
              </a>
            </div>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-4">
                <div className="text-sm text-gray-400">Response time</div>
                <div className="text-white font-semibold">Under 24 hours</div>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-4">
                <div className="text-sm text-gray-400">Availability</div>
                <div className="text-white font-semibold">Taking new projects</div>
              </div>
            </div>

            {/* Book a call */}
            <div className="mt-6">
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white font-semibold transition-colors"
              >
                <Calendar className="w-5 h-5" /> Book a discovery call
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-[var(--color-primary-500)] to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition" />
            <div className="relative rounded-2xl bg-slate-950/60 border border-white/10 p-1">
              <div className="rounded-xl bg-slate-950/60 border border-white/10 p-5 sm:p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ContactPoint JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Muhammad Umar",
            url: "/",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "umarmalik.cs711@gmail.com",
                telephone: "+92-306-2617205",
                availableLanguage: ["English"],
              },
            ],
          }),
        }}
      />
    </>
  );
}


