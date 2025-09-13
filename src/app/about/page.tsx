import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

export const metadata = {
  title: "About Muhammad Umar | Expert Full Stack Developer & UI/UX Designer",
  description:
    "Muhammad Umar is a Full Stack Developer with 2+ years of experience in React, Next.js, Node.js, and UI/UX design. Discover my skills, portfolio, and development approach.",
  keywords: ["Full Stack Developer", "UI/UX Designer", "React Developer", "Next.js Expert", "Node.js Developer", "Web Development Services"],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Muhammad Umar | Full Stack Developer & Designer",
    description: "Full Stack Developer with expertise in React, Next.js, Node.js and modern web technologies. View my portfolio and services.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 z-1">
      {/* Unified background for the whole page */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>
        <div className="absolute top-0 right-0 w-[1000px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[1000px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(30,64,175,0.08)_0%,rgba(15,23,42,0)_50%)]"></div>
        </div>
      </div>
      
      <Section className="pt-20 sm:pt-32 md:pt-40 pb-20">
        <div id="about" className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-12 justify-center scroll-mt-32 sm:scroll-mt-40">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6 animate-fadeIn">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              About Me
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block mb-2">Transforming <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300">Ideas into Digital</span></span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">Excellence</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300/90 mb-8 leading-relaxed max-w-xl lg:mx-0 mx-auto">
              I&apos;m Muhammad Umar, a passionate Full Stack Developer and Designer with a proven track record of creating exceptional digital experiences. Leveraging modern technologies like Next.js, React, and Node.js, I build solutions that combine stunning design with robust functionality.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '20+', label: 'Projects Delivered' },
                { value: '10+', label: 'Tech Stack Mastery' },
                { value: '100%', label: 'Client Satisfaction' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-center hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300 transform hover:scale-105">
                  <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8 lg:justify-start justify-center">
              <a
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-900/30 transition-all duration-300 flex items-center gap-2 group"
              >
                Start a Project
                <svg 
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </a>
              
              <a
                href="/projects"
                className="px-6 py-3 bg-transparent border border-slate-700/60 hover:border-blue-500/50 text-slate-300 hover:text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Right/Image Content */}
          <div className="w-full lg:w-1/2 max-w-[400px] lg:max-w-[480px] mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-transparent to-purple-600/30 rounded-2xl blur-lg opacity-50"></div>
              
              <div className="relative rounded-xl overflow-hidden border-2 border-slate-700/50 bg-slate-800/20 aspect-[4/5] shadow-xl shadow-blue-900/20">
                <Image
                  src="/assets/images/muhammad-umar-malik.jpg"
                  alt="Muhammad Umar Malik - Full Stack Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 inset-x-0 p-4 z-20 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-bold text-lg">Muhammad Umar</h3>
                      <p className="text-blue-300 text-sm">Full Stack Developer</p>
                    </div>
                    <div className="flex gap-2">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-500/30 hover:bg-blue-800/50 transition-colors hover:scale-110">
                        <svg className="w-4 h-4 text-blue-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-500/30 hover:bg-blue-800/50 transition-colors hover:scale-110">
                        <svg className="w-4 h-4 text-blue-300" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a href="mailto:contact@example.com" className="w-8 h-8 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-500/30 hover:bg-blue-800/50 transition-colors hover:scale-110">
                        <svg className="w-4 h-4 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute right-0 top-1/2 bg-gradient-to-r from-blue-600/90 to-blue-800/90 px-4 py-2 rounded-lg border border-blue-500/40 shadow-lg shadow-blue-500/20 backdrop-blur-sm text-white text-sm font-medium transform rotate-6 animate-float">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                  Frontend Expert
                </div>
              </div>
              <div className="absolute left-0 top-1/4 bg-gradient-to-r from-purple-600/90 to-purple-800/90 px-4 py-2 rounded-lg border border-purple-500/40 shadow-lg shadow-purple-500/20 backdrop-blur-sm text-white text-sm font-medium transform -rotate-6 animate-float" style={{animationDelay: "1s"}}>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                  </svg>
                  Backend Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 bg-slate-950/50">
        <h2 className="text-3xl font-bold text-center text-white mb-8">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 w-24">
            <FaReact className="w-10 h-10 text-[#61DAFB] mb-2" />
            <span className="text-sm text-slate-300">React</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 w-24">
            <SiNextdotjs className="w-10 h-10 text-white mb-2" />
            <span className="text-sm text-slate-300">Next.js</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 w-24">
            <SiTypescript className="w-10 h-10 text-[#3178C6] mb-2" />
            <span className="text-sm text-slate-300">TypeScript</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 w-24">
            <FaNodeJs className="w-10 h-10 text-[#8CC84B] mb-2" />
            <span className="text-sm text-slate-300">Node.js</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 w-24">
            <SiTailwindcss className="w-10 h-10 text-[#38BDF8] mb-2" />
            <span className="text-sm text-slate-300">Tailwind</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 w-24">
            <SiMongodb className="w-10 h-10 text-[#4DB33D] mb-2" />
            <span className="text-sm text-slate-300">MongoDB</span>
          </div>
        </div>
      </Section>

      <Section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let&apos;s Build Something Amazing Together</h2>
          <p className="text-gray-300 mb-8">I&apos;m available for freelance projects and full-time positions.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="/projects"
              className="px-6 py-3 bg-transparent border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white font-medium rounded-lg"
            >
              View Projects
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}