import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";

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
    <>
      {/* Modern Hero Section with proper spacing */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden" id="about">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>
          <div className="absolute top-0 right-0 w-[1000px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[1000px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(30,64,175,0.08)_0%,rgba(15,23,42,0)_50%)]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6 animate-fadeIn">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                About Me
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="block mb-2">Transforming <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300">Ideas into Digital</span></span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">Excellence</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300/90 mb-8 leading-relaxed">
                I&apos;m Muhammad Umar, a passionate Full Stack Developer and Designer with a proven track record of creating exceptional digital experiences. Leveraging modern technologies like Next.js, React, and Node.js, I build solutions that combine stunning design with robust functionality.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { value: '2+', label: 'Years Experience' },
                  { value: '40+', label: 'Projects Delivered' },
                  { value: '15+', label: 'Tech Stack Mastery' },
                  { value: '100%', label: 'Client Satisfaction' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4 text-center hover:border-blue-500/30 transition-all duration-300">
                    <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-2">
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

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-8">
                {["Full Stack", "Next.js", "React", "Node.js", "UI/UX Design", "TypeScript"].map((badge, index) => (
                  <span 
                    key={index}
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-900/20 text-blue-400 border border-blue-500/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right/Image Content */}
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-transparent to-purple-600/30 rounded-3xl blur-xl opacity-50" />
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/20 aspect-[4/5] shadow-2xl shadow-blue-900/10">
                  <Image
                    src="/assets/images/muhammad-umar-malik.jpg"
                    alt="Muhammad Umar Malik - Full Stack Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-transparent to-transparent" />

                  {/* Bottom info panel */}
                  <div className="absolute bottom-0 inset-x-0 p-4 z-20 bg-gradient-to-t from-slate-900 to-transparent">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-bold text-lg">Muhammad Umar</h3>
                        <p className="text-blue-300 text-sm">Full Stack Developer</p>
                      </div>
                      <div className="flex gap-2">
                        {/* Social icons */}
                        {['github', 'linkedin', 'mail'].map((icon, idx) => (
                          <div key={idx} className="w-8 h-8 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-500/30 hover:bg-blue-800/50 transition-colors">
                            <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating skill pills */}
                <div className="absolute -right-4 top-10 bg-gradient-to-r from-blue-600/80 to-blue-800/80 px-4 py-2 rounded-lg border border-blue-500/30 shadow-lg backdrop-blur-sm text-white text-sm font-medium transform rotate-6 animate-float">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    Frontend Expert
                  </div>
                </div>
                <div className="absolute -left-4 top-1/3 bg-gradient-to-r from-purple-600/80 to-purple-800/80 px-4 py-2 rounded-lg border border-purple-500/30 shadow-lg backdrop-blur-sm text-white text-sm font-medium transform -rotate-6 animate-float" style={{animationDelay: "1s"}}>
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
        </div>

        {/* Bottom gradient separator */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      </section>
      

        {/* Tech Stack Section */}
        <div className="relative mt-8 sm:mt-16 py-8 border-t border-b border-slate-800/40 bg-gradient-to-r from-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-purple-900/5"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider" id="tech-stack">Preferred Tech Stack</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {[
                { 
                  name: "Next.js", 
                  color: "blue",
                  logo: (
                    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <mask id="mask0_408_139" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                        <circle cx="90" cy="90" r="90" fill="black"/>
                      </mask>
                      <g mask="url(#mask0_408_139)">
                        <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6"/>
                        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"/>
                        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"/>
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white"/>
                          <stop offset="1" stopColor="white" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white"/>
                          <stop offset="1" stopColor="white" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  )
                },
                { 
                  name: "React", 
                  color: "cyan",
                  logo: (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#61DAFB" stroke="#61DAFB" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 21.5C17.5228 21.5 22 17.0228 22 11.5C22 5.97715 17.5228 1.5 12 1.5C6.47715 1.5 2 5.97715 2 11.5C2 17.0228 6.47715 21.5 12 21.5Z" stroke="#61DAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 21.5C14.5013 21.5 16.5 17.0228 16.5 11.5C16.5 5.97715 14.5013 1.5 12 1.5C9.49872 1.5 7.5 5.97715 7.5 11.5C7.5 17.0228 9.49872 21.5 12 21.5Z" stroke="#61DAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 11.5H22" stroke="#61DAFB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                { 
                  name: "TypeScript", 
                  color: "blue",
                  logo: (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path d="M3 3H21V21H3V3Z" fill="#3178C6" />
                      <path d="M13.2 13.2V17.5H11.2V13.2H7V11.2H17V13.2H13.2ZM10.1 8.8C10.1 8.3 10.3 7.9 10.7 7.6C11.1 7.3 11.6 7.1 12.2 7.1C12.8 7.1 13.3 7.3 13.7 7.6C14.1 7.9 14.3 8.3 14.3 8.8C14.3 9.3 14.1 9.7 13.7 10C13.3 10.3 12.8 10.5 12.2 10.5C11.6 10.5 11.1 10.3 10.7 10C10.3 9.7 10.1 9.3 10.1 8.8Z" fill="white" />
                    </svg>
                  )
                },
                { 
                  name: "Node.js", 
                  color: "green",
                  logo: (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path d="M12 1.77L3.9 6.29C3.35 6.61 3 7.19 3 7.83V16.17C3 16.81 3.35 17.39 3.9 17.71L12 22.23L20.1 17.71C20.65 17.39 21 16.81 21 16.17V7.83C21 7.19 20.65 6.61 20.1 6.29L12 1.77Z" fill="#8CC84B" />
                      <path d="M12 22.23C11.81 22.23 11.62 22.18 11.44 22.08L8.49 20.29C8.19 20.11 8.34 20.05 8.43 20.02C8.87 19.87 8.96 19.83 9.4 19.59C9.43 19.57 9.47 19.58 9.51 19.6L11.75 20.97C11.8 21 11.86 21 11.91 20.97L19.96 16.17C20.01 16.14 20.04 16.08 20.04 16.02V6.42C20.04 6.36 20.01 6.3 19.96 6.27L11.91 1.47C11.86 1.44 11.8 1.44 11.75 1.47L3.7 6.27C3.65 6.3 3.62 6.36 3.62 6.42V16.02C3.62 16.08 3.65 16.14 3.7 16.17L5.9 17.47C6.95 18.02 7.58 17.45 7.58 16.88V7.08C7.58 6.98 7.66 6.9 7.76 6.9H8.53C8.63 6.9 8.71 6.98 8.71 7.08V16.88C8.71 18.25 7.94 19.07 6.65 19.07C6.26 19.07 5.95 19.07 5.04 18.61L2.93 17.37C2.57 17.17 2.35 16.78 2.35 16.36V6.76C2.35 6.34 2.57 5.95 2.93 5.75L11.44 0.67C11.79 0.48 12.21 0.48 12.56 0.67L21.07 5.75C21.43 5.95 21.65 6.34 21.65 6.76V16.36C21.65 16.78 21.43 17.17 21.07 17.37L12.56 22.45C12.38 22.55 12.19 22.6 12 22.6V22.23Z" fill="#8CC84B" />
                      <path d="M14.19 12.32C14.19 12.27 14.16 12.23 14.12 12.21L13.58 11.91C13.54 11.89 13.5 11.89 13.46 11.91C13.42 11.93 13.4 11.97 13.4 12.01V12.61C13.4 12.65 13.42 12.69 13.46 12.71C13.5 12.73 13.54 12.73 13.58 12.71L14.12 12.41C14.16 12.39 14.19 12.35 14.19 12.31V12.32ZM15.42 10.57C15.38 10.55 15.34 10.55 15.3 10.57C15.26 10.59 15.24 10.63 15.24 10.67V12.47C15.24 12.53 15.21 12.58 15.16 12.61C15.11 12.64 15.05 12.64 15 12.61L14.47 12.32V10.52C14.47 10.1 14.25 9.71 13.89 9.51L10.3 7.44C10.12 7.34 9.93 7.29 9.74 7.29C9.55 7.29 9.36 7.34 9.18 7.44L5.59 9.51C5.23 9.71 5.01 10.1 5.01 10.52V14.66C5.01 15.08 5.23 15.47 5.59 15.67L9.18 17.74C9.36 17.84 9.55 17.89 9.74 17.89C9.93 17.89 10.12 17.84 10.3 17.74L13.89 15.67C14.25 15.47 14.47 15.08 14.47 14.66V12.32L15.95 13.17C16.31 13.37 16.78 13.37 17.14 13.17L18.62 12.32C18.98 12.12 19.2 11.73 19.2 11.31V9.61C19.2 9.19 18.98 8.8 18.62 8.6L17.14 7.75C16.78 7.55 16.31 7.55 15.95 7.75L14.47 8.6C14.11 8.8 13.89 9.19 13.89 9.61V11.31L12.41 10.46C12.05 10.26 11.58 10.26 11.22 10.46L9.74 11.31C9.38 11.51 9.16 11.9 9.16 12.32V14.02C9.16 14.44 9.38 14.83 9.74 15.03L11.22 15.88C11.58 16.08 12.05 16.08 12.41 15.88L13.89 15.03C14.25 14.83 14.47 14.44 14.47 14.02V12.32L15.95 13.17C16.31 13.37 16.78 13.37 17.14 13.17L18.62 12.32C18.98 12.12 19.2 11.73 19.2 11.31V9.61C19.2 9.19 18.98 8.8 18.62 8.6L17.14 7.75C16.78 7.55 16.31 7.55 15.95 7.75L14.47 8.6C14.11 8.8 13.89 9.19 13.89 9.61V11.31L12.41 10.46C12.05 10.26 11.58 10.26 11.22 10.46L9.74 11.31C9.38 11.51 9.16 11.9 9.16 12.32V14.02C9.16 14.44 9.38 14.83 9.74 15.03L11.22 15.88C11.58 16.08 12.05 16.08 12.41 15.88L13.89 15.03C14.25 14.83 14.47 14.44 14.47 14.02V12.32L15.95 13.17C16.31 13.37 16.78 13.37 17.14 13.17L18.62 12.32C18.98 12.12 19.2 11.73 19.2 11.31V9.61C19.2 9.19 18.98 8.8 18.62 8.6L17.14 7.75C16.78 7.55 16.31 7.55 15.95 7.75L14.47 8.6C14.11 8.8 13.89 9.19 13.89 9.61V10.52L15.42 11.37V10.67C15.42 10.63 15.4 10.59 15.36 10.57C15.32 10.55 15.28 10.55 15.24 10.57L14.7 10.87C14.66 10.89 14.64 10.93 14.64 10.97V11.57C14.64 11.61 14.66 11.65 14.7 11.67C14.74 11.69 14.78 11.69 14.82 11.67L15.36 11.37C15.4 11.35 15.42 11.31 15.42 11.27V10.57Z" fill="white" />
                    </svg>
                  )
                },
                { 
                  name: "Tailwind CSS", 
                  color: "cyan",
                  logo: (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 7.95 10.65 8.25C11.3389 8.4195 11.8474 8.94333 12.4192 9.5302C13.3524 10.4904 14.4441 11.6 16.5 11.6C18.9 11.6 20.4 10.4 21 8C20.1 9.2 19.05 9.65 17.85 9.35C17.1611 9.1805 16.6526 8.65667 16.0808 8.0698C15.1476 7.1096 14.0559 6 12 6ZM7.5 11.6C5.1 11.6 3.6 12.8 3 15.2C3.9 14 4.95 13.55 6.15 13.85C6.83888 14.0195 7.34741 14.5433 7.91917 15.1302C8.85242 16.0904 9.94412 17.2 12 17.2C14.4 17.2 15.9 16 16.5 13.6C15.6 14.8 14.55 15.25 13.35 14.95C12.6611 14.7805 12.1526 14.2567 11.5808 13.6698C10.6476 12.7096 9.55588 11.6 7.5 11.6Z" fill="#38BDF8"/>
                    </svg>
                  )
                },
                { 
                  name: "MongoDB", 
                  color: "green",
                  logo: (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path d="M12 2C12 2 5.5 5.9 5.5 13.4C5.5 17.6 8.3 19.5 9.7 20.2C10.3 20.5 10.7 20.9 10.7 21.4V22H13.3V21.4C13.3 20.9 13.7 20.5 14.3 20.2C15.7 19.5 18.5 17.6 18.5 13.4C18.5 5.9 12 2 12 2Z" fill="#10AA50" />
                      <path d="M12 2C12 2 5.5 5.9 5.5 13.4C5.5 17.6 8.3 19.5 9.7 20.2C10.3 20.5 10.7 20.9 10.7 21.4V22H12V2Z" fill="#B8C4C2" />
                      <path d="M10.9 18.3C10.9 18.3 10.3 17.9 10.1 17.5C9.9 17.1 9.8 15.5 9.8 15.5C9.8 15.5 8.5 9.1 11.9 8.3C12 8.3 12.1 8.3 12.2 8.3C12.3 8.3 12.4 8.3 12.5 8.3C15.9 9.1 14.6 15.5 14.6 15.5C14.6 15.5 14.5 17.1 14.3 17.5C14.1 17.9 13.5 18.3 13.5 18.3L10.9 18.3Z" fill="#12924F" />
                    </svg>
                  )
                }
              ].map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-lg bg-${tech.color === 'blue' ? 'blue' : tech.color === 'cyan' ? 'cyan' : 'emerald'}-900/20 flex items-center justify-center border border-${tech.color === 'blue' ? 'blue' : tech.color === 'cyan' ? 'cyan' : 'emerald'}-500/30 mb-2 hover:border-${tech.color === 'blue' ? 'blue' : tech.color === 'cyan' ? 'cyan' : 'emerald'}-400/50 transition-all duration-300 group-hover:scale-105`}>
                    <div className="w-8 h-8 flex items-center justify-center">
                      {tech.logo}
                    </div>
                  </div>
                  <span className="text-sm text-slate-400">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      
      {/* What I Do Section */}
      <Section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="relative group transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-30 group-hover:opacity-40 rounded-2xl blur-md transition-all duration-500"></div>
              <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl border border-slate-800/80 rounded-xl p-8 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-900/30 border border-blue-500/30 text-blue-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4" id="services">What I Do</h2>
                <ul className="space-y-4">
                  {[
                    "Frontend development with React/Next.js, Tailwind CSS, and TypeScript",
                    "Backend APIs with Node.js, Express, and databases (Postgres, MongoDB)",
                    "UI/UX design and product interface refinement",
                    "Payment integrations, auth, analytics, and SEO"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
            
            <div className="relative group transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-30 group-hover:opacity-40 rounded-2xl blur-md transition-all duration-500"></div>
              <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl border border-slate-800/80 rounded-xl p-8 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-900/30 border border-purple-500/30 text-purple-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4" id="approach">My Approach</h2>
                <ul className="space-y-4">
                  {[
                    "Delivered production-grade apps for clients and personal projects",
                    "Strong focus on performance, accessibility, and maintainability",
                    "Clear communication and results-driven delivery",
                    "Continuous learning and staying updated with latest technologies"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="flex items-center justify-center w-6 h-6 mt-0.5 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 mb-8 text-center" id="services-expertise">Services & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Frontend Development",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  description: "Fast, responsive web applications built with modern frameworks and best practices.",
                  color: "blue"
                },
                {
                  title: "Backend Development",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  ),
                  description: "Scalable API development, database design, and server architecture with security in mind.",
                  color: "purple"
                },
                {
                  title: "UI/UX Design",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  ),
                  description: "User-centered design focused on creating intuitive, beautiful interfaces that drive conversions.",
                  color: "emerald"
                },
              ].map((service, idx) => (
                <div 
                  key={idx} 
                  className="relative group transition-all duration-500 flex flex-col h-full"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${service.color}-600/20 to-${service.color}-600/0 opacity-30 group-hover:opacity-40 rounded-2xl blur-md transition-all duration-500`}></div>
                  <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl border border-slate-800/80 rounded-xl p-6 sm:p-8 h-full flex-1 flex flex-col">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-${service.color}-900/30 border border-${service.color}-500/30 text-${service.color}-400 mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-300 flex-1">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          
          {/* Call to Action */}
          <div className="relative rounded-2xl overflow-hidden mt-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-md"></div>
            <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-10 rounded-xl border border-slate-800/80 text-center">
              <h2 className="text-2xl font-bold text-white mb-4" id="contact">Let&apos;s work together</h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">Ready to bring your project to life? I&apos;m available for freelance work and collaborations.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-900/30 border border-blue-500/30"
                >
                  Get in touch
                </a>
                <a 
                  href="/projects"
                  className="px-6 py-3 bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white border border-slate-700/50 hover:border-blue-500/30 font-medium rounded-lg transition-all duration-300"
                >
                  View my work
                </a>
            </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


