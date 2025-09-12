import React from "react";
import Image from "next/image";
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
        eyebrow="About Me"
        title="Crafting Reliable, Beautiful Software"
        subtitle="I&apos;m Muhammad Umar, a Full Stack Developer and Designer specializing in building exceptional digital experiences. With expertise in Next.js, React, TypeScript, and Node.js, I create fast, accessible, and visually stunning web applications."
        customEyebrow={
          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium animate-fadeIn">
            <span className="flex h-2 w-2 relative">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            About Me
          </span>
        }
        customTitle={
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Crafting Reliable, Beautiful Software
          </span>
        }
      />
      
      {/* Hero Section - Premium Professional Design */}
      <div className="relative overflow-hidden py-10 sm:py-12 -mt-20">
        {/* Background elements for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent z-0"></div>
        <div className="absolute right-0 top-96 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] opacity-60 -z-10"></div>
        <div className="absolute left-0 top-96 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] opacity-60 -z-10"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-32 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-blue-500/5 blur-3xl -z-10"></div>
        
        {/* Content Container */}
        <Section className="relative z-10 pb-0 pt-24 lg:pt-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Content with Split Layout */}
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              {/* Left Content Column */}
              <div className="flex-1 max-w-2xl">
                {/* Professional badge */}
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-500/20 shadow-lg mb-6 backdrop-blur-sm animate-fadeIn"
                >
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent font-medium">Available for New Projects</span>
                </div>
                
                {/* Main headline */}
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white tracking-tight mb-8">
                  Transforming Ideas Into <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent inline-block">Digital Reality</span>
                </h1>
                
                {/* Intro with gradient highlight */}
                <div className="relative mb-8">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur"></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                    <h2 className="text-xl md:text-2xl font-medium text-white mb-3 flex items-center gap-2">
                      <span className="inline-block animate-wave origin-bottom-right text-2xl">👋</span>
                      Hi, I&apos;m Muhammad Umar
                    </h2>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      Full-stack developer specializing in crafting exceptional digital experiences with modern technologies. I build robust, user-centered web applications that deliver real business value.
                    </p>
                  </div>
                </div>
                
                {/* Key metrics - add professional credibility */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { value: '1+', label: 'Years Experience' },
                    { value: '20+', label: 'Projects Completed' },
                    { value: '10+', label: 'Tech Stack Depth' },
                    { value: '100%', label: 'Client Satisfaction' }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-3 bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Professional CTA section */}
                <div className="flex flex-wrap gap-4 mb-8 sm:mb-0">
                  <a 
                    href="/contact" 
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-purple-500 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Start a Project
                  </a>
                  <a 
                    href="/projects" 
                    className="px-8 py-3 bg-transparent border border-slate-700/80 text-slate-200 font-medium rounded-lg hover:bg-slate-800/50 hover:border-blue-500/30 hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                    </svg>
                    Explore Work
                  </a>
                </div>
              </div>
              
              {/* Right Image Column */}
              <div className="relative w-full max-w-sm xl:max-w-md">
                {/* Premium image treatment */}
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                  
                  {/* Outer frame with gradient border */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur opacity-70"></div>
                  
                  {/* Image container */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-800 border border-slate-700/50">
                    {/* Professional image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                    
                    {/* Image */}
                    <Image
                      src="/assets/images/muhammad-umar-malik.jpg" 
                      alt="Muhammad Umar Malik - Full Stack Developer" 
                      className="w-full h-full object-cover z-0"
                      width={600}
                      height={750}
                      priority
                      quality={100}
                    />
                    
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
                  <div className="absolute -left-2 bottom-20 bg-gradient-to-r from-emerald-600/80 to-emerald-800/80 px-4 py-2 rounded-lg border border-emerald-500/30 shadow-lg backdrop-blur-sm text-white text-sm font-medium transform rotate-3 animate-float" style={{animationDelay: "2s"}}>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                      </svg>
                      UI/UX Designer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Tech Stack Section */}
        <div className="relative mt-12 sm:mt-20 py-8 border-t border-b border-slate-800/40 bg-gradient-to-r from-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-purple-900/5"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Preferred Tech Stack</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {[
                { name: "Next.js", color: "blue" },
                { name: "React", color: "cyan" },
                { name: "TypeScript", color: "blue" },
                { name: "Node.js", color: "green" },
                { name: "Tailwind CSS", color: "cyan" },
                { name: "MongoDB", color: "green" }
              ].map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-lg bg-${tech.color === 'blue' ? 'blue' : tech.color === 'cyan' ? 'cyan' : 'emerald'}-900/20 flex items-center justify-center border border-${tech.color === 'blue' ? 'blue' : tech.color === 'cyan' ? 'cyan' : 'emerald'}-500/30 mb-2`}>
                    <span className={`text-${tech.color === 'blue' ? 'blue' : tech.color === 'cyan' ? 'cyan' : 'emerald'}-400 font-bold text-xl`}>
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-slate-400">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* What I Do Section */}
      <Section className="py-16">
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
                <h2 className="text-2xl font-bold text-white mb-4">What I Do</h2>
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
                <h2 className="text-2xl font-bold text-white mb-4">My Approach</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 mb-8 text-center">Services & Expertise</h2>
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
              <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s work together</h3>
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


