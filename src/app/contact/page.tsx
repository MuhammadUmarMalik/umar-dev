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
        eyebrow="Get In Touch"
        title="Let&apos;s build something great together"
        subtitle="I help turn your ideas into reality with pixel-perfect execution and performance-optimized code. Let&apos;s discuss how I can help with your next project."
        customEyebrow={
          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium animate-fadeIn">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Get In Touch
          </span>
        }
        customTitle={
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Let&apos;s build something great together
          </span>
        }
        variant="centered"
        cta={(
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center mt-4 animate-fadeIn">
            <a
              href="mailto:umarmalik.cs711@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-900/30 border border-blue-500/30 w-full sm:w-auto justify-center"
              aria-label="Email Muhammad Umar"
            >
              <Mail className="w-5 h-5" /> Email me
            </a>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-blue-500/20 bg-blue-900/10 hover:bg-blue-900/20 text-white font-semibold transition-all duration-300 hover:border-blue-500/40 w-full sm:w-auto justify-center"
              aria-label="Book a discovery call"
            >
              <Calendar className="w-5 h-5" /> Book a call
            </a>
            <div className="hidden sm:flex items-center gap-2 text-sm text-blue-300 bg-blue-900/20 px-4 py-2 rounded-lg border border-blue-500/20">
              <span className="flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-slate-300">Response time: <span className="text-blue-300 font-medium">under 24 hours</span></span>
            </div>
          </div>
        )}
      />
      <Section className="py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Options */}
          <div className="relative group transition-all duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 group-hover:opacity-40 rounded-2xl blur-lg transition-all duration-500"></div>
            <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 text-emerald-400 text-sm mb-5 animate-fadeIn">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              Open to new projects
            </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 mb-3">Connect With Me</h2>
              <p className="text-gray-300 leading-relaxed mb-7">
                Let&apos;s discuss your project needs. Send me an email at{" "}
                <a className="text-blue-400 hover:text-blue-300 font-medium" href="mailto:umarmalik.cs711@gmail.com">umarmalik.cs711@gmail.com</a>
                {" "}or reach out through any of the channels below.
            </p>

            {/* Quick action buttons */}
              <div className="grid sm:grid-cols-2 gap-4 mb-7">
                <a href="mailto:umarmalik.cs711@gmail.com" className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-blue-900/20 to-blue-900/10 hover:from-blue-900/30 hover:to-blue-900/20 border border-blue-500/20 hover:border-blue-400/30 text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  <span className="flex items-center justify-center w-9 h-9 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-medium">Email</span>
                    <span className="text-xs text-slate-400">umarmalik.cs711@gmail.com</span>
                  </span>
                </a>
                <a href="https://wa.me/923062617205?text=Hi%20Muhammad%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-emerald-900/20 to-emerald-900/10 hover:from-emerald-900/30 hover:to-emerald-900/20 border border-emerald-500/20 hover:border-emerald-400/30 text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  <span className="flex items-center justify-center w-9 h-9 bg-gradient-to-tr from-emerald-500 to-emerald-400 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-medium">WhatsApp</span>
                    <span className="text-xs text-slate-400">+92 306 2617205</span>
                  </span>
                </a>
                <a href="https://linkedin.com/in/muhammad-umar-malik786" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-sky-900/20 to-sky-900/10 hover:from-sky-900/30 hover:to-sky-900/20 border border-sky-500/20 hover:border-sky-400/30 text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  <span className="flex items-center justify-center w-9 h-9 bg-gradient-to-tr from-sky-500 to-sky-400 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-medium">LinkedIn</span>
                    <span className="text-xs text-slate-400">muhammad-umar-malik786</span>
                  </span>
                </a>
                <a href="https://github.com/MuhammadUmarMalik" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-slate-800/70 to-slate-800/50 hover:from-slate-800/90 hover:to-slate-800/70 border border-slate-700/50 hover:border-slate-600/50 text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  <span className="flex items-center justify-center w-9 h-9 bg-gradient-to-tr from-slate-700 to-slate-600 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-medium">GitHub</span>
                    <span className="text-xs text-slate-400">MuhammadUmarMalik</span>
                  </span>
              </a>
            </div>

            {/* Info cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-7">
                <div className="rounded-xl bg-gradient-to-r from-blue-900/10 to-slate-900/30 border border-blue-500/20 p-5 backdrop-blur-lg transition-all duration-300 hover:border-blue-400/30 hover:shadow-md">
                  <div className="text-blue-400 font-medium mb-1 text-sm">Response time</div>
                  <div className="text-white font-semibold flex items-center gap-2">
                    <span className="flex h-2 w-2">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Under 24 hours
                  </div>
                </div>
                <div className="rounded-xl bg-gradient-to-r from-emerald-900/10 to-slate-900/30 border border-emerald-500/20 p-5 backdrop-blur-lg transition-all duration-300 hover:border-emerald-400/30 hover:shadow-md">
                  <div className="text-emerald-400 font-medium mb-1 text-sm">Availability</div>
                  <div className="text-white font-semibold flex items-center gap-2">
                    <span className="flex h-2 w-2">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Taking new projects
                  </div>
              </div>
            </div>

            {/* Book a call */}
              <div className="mt-8">
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold shadow-lg hover:shadow-blue-900/20 transition-all duration-300 border border-white/10"
              >
                  <Calendar className="w-5 h-5" /> Schedule a free discovery call
              </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative group transition-all duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-30 group-hover:opacity-40 rounded-2xl blur-lg transition-all duration-500"></div>
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 p-1 overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 left-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
              
              <div className="rounded-xl backdrop-blur-xl p-7 sm:p-8 relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-sm mb-2">
                    <span className="flex h-1.5 w-1.5 relative">
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                    </span>
                    Message me directly
                  </div>
                  <h3 className="text-xl font-bold text-white">Send me a message</h3>
                </div>
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


