import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/contact-form";
import { Section } from "@/components/ui/section";
import { Mail, Phone, Linkedin, Github, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
      <div className="relative overflow-hidden pt-28 sm:pt-36 md:pt-44 lg:pt-48 pb-10 sm:pb-16">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4 sm:mb-6 animate-fadeIn backdrop-blur-sm shadow-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Get In Touch
            </div>
            
            {/* Main title with enhanced styling */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">
                Let&apos;s build something 
                <span className="relative inline-block whitespace-nowrap">
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur rounded-lg"></span>
                  <span className="relative text-blue-100"> great together</span>
                </span>
              </span>
            </h1>
            
            {/* Subtitle with improved styling */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
              I help turn your ideas into reality with pixel-perfect execution and performance-optimized code. Let&apos;s discuss how I can help with your next project.
            </p>
            
            {/* CTA buttons with improved styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fadeIn">
              <a
                href="mailto:umarmalik.cs711@gmail.com"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-900/30 border border-blue-500/30 w-full sm:w-auto justify-center hover:-translate-y-1"
                aria-label="Email Muhammad Umar"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> Email me
              </a>
              <a
                href="https://calendly.com/umarmalik-cs711/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border border-blue-500/20 bg-blue-900/10 hover:bg-blue-900/20 text-white font-semibold transition-all duration-300 hover:border-blue-500/40 w-full sm:w-auto justify-center hover:-translate-y-1"
                aria-label="Book a discovery call"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" /> Book a call
              </a>
            </div>
            
            {/* Response time indicator */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-blue-300 bg-blue-900/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-blue-500/20 max-w-max mx-auto backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-slate-300">Response time: <span className="text-blue-300 font-medium">under 24 hours</span></span>
            </div>
          </div>
        </div>
        
      </div>
      <Section className="py-8 sm:py-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Left: Contact Options */}
          <div className="relative group h-full">
            {/* Outer glow effect */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-40 blur-sm"></div>
            
            {/* Card background */}
            <div className="relative h-full rounded-2xl bg-slate-900/80 backdrop-blur-md border border-blue-500/20 overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              
              <div className="p-6 relative z-10 flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center justify-center mb-6 max-w-md mx-auto">
                  <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 text-emerald-400 text-sm mb-4 animate-fadeIn shadow-sm">
                    <span className="flex h-2 w-2 relative flex-shrink-0">
                      <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Open to new projects</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">Let&apos;s Connect</h2>
                  <p className="text-gray-300 leading-relaxed mb-4 text-center max-w-xs mx-auto">
                    Have a project in mind? Reach out through any of the channels below.
                  </p>
                </div>

                {/* Quick action buttons */}
                <div className="grid sm:grid-cols-2 gap-3 mb-4 w-full max-w-2xl mx-auto">
                  <a href="mailto:umarmalik.cs711@gmail.com" className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/80 border border-blue-500/20 hover:border-blue-500/40 text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000"></span>
                    <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-medium text-white group-hover:text-blue-200 transition-colors duration-300">Email</span>
                      <span className="text-xs text-slate-400">umarmalik.cs711@gmail.com</span>
                    </div>
                  </a>
                  <a href="https://wa.me/923062617205?text=Hi%20Muhammad%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/80 border border-emerald-500/20 hover:border-emerald-500/40 text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 via-emerald-600/5 to-emerald-600/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000"></span>
                    <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <FaWhatsapp className="w-5 h-5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-medium text-white group-hover:text-emerald-200 transition-colors duration-300">WhatsApp</span>
                      <span className="text-xs text-slate-400">+92 306 2617205</span>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/muhammad-umar-malik786" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/80 border border-sky-500/20 hover:border-sky-500/40 text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-sky-600/0 via-sky-600/5 to-sky-600/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000"></span>
                    <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-600 to-sky-400 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-5 h-5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-medium text-white group-hover:text-sky-200 transition-colors duration-300">LinkedIn</span>
                      <span className="text-xs text-slate-400">muhammad-umar-malik786</span>
                    </div>
                  </a>
                  <a href="https://github.com/MuhammadUmarMalik" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/80 border border-slate-700/30 hover:border-slate-600/50 text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-slate-600/0 via-slate-600/5 to-slate-600/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000"></span>
                    <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-500 rounded-full text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-5 h-5" />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-medium text-white group-hover:text-slate-300 transition-colors duration-300">GitHub</span>
                      <span className="text-xs text-slate-400">MuhammadUmarMalik</span>
                    </div>
                  </a>
                </div>

                {/* Info cards */}
                <div className="grid sm:grid-cols-2 gap-3 mb-4 w-full max-w-2xl mx-auto">
                  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-sm border border-blue-500/20 p-4 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-blue-400 font-medium mb-2 text-sm flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Response time</span>
                    </div>
                    <div className="text-white font-semibold flex items-center justify-center gap-2 relative z-10">
                      <span className="flex h-3 w-3 relative flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                      </span>
                      <span>Under 24 hours</span>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-sm border border-emerald-500/20 p-4 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-0.5 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-emerald-400 font-medium mb-2 text-sm flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Availability</span>
                    </div>
                    <div className="text-white font-semibold flex items-center justify-center gap-2 relative z-10">
                      <span className="flex h-3 w-3 relative flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <span>Taking new projects</span>
                    </div>
                  </div>
                </div>

                {/* Book a call */}
                <div className="w-full max-w-2xl mx-auto">
                  <a
                    href="https://calendly.com/umarmalik-cs711/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[0_4px_20px_rgba(79,70,229,0.45)] hover:-translate-y-0.5 active:translate-y-0 border border-indigo-500/30 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-2xl">
                      <span className="absolute left-0 aspect-square w-16 -translate-x-full animate-[shine_1.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1s_ease-in-out_infinite]"></span>
                    </span>
                    <Calendar className="w-5 h-5" /> Schedule a free discovery call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative group h-full">
            {/* Outer glow effect */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-40 blur-sm"></div>
            
            {/* Card background */}
            <div className="relative h-full rounded-2xl bg-slate-900/80 backdrop-blur-md border border-blue-500/20 overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              
              <div className="p-6 relative z-10">
                {/* Form header with modern styling */}
                <div className="mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm">
                      <span className="flex h-1.5 w-1.5 relative">
                        <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                      </span>
                      Message me directly
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white text-center">Send me a message</h3>
                </div>
                
                {/* Contact form component */}
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


