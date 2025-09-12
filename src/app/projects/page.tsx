import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { ProjectsSection } from "@/components/ui/projects-section";

export const metadata: Metadata = {
  title: "Projects | Case Studies and Results by Muhammad Umar",
  description:
    "Selected projects with problem, solution, and outcome. Real results across web, mobile, and backend projects.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Muhammad Umar Projects",
    description: "Case studies with measurable outcomes.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Modern Hero Section Design */}
      <div className="relative overflow-hidden -mt-16 pt-32 pb-16">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent z-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 mb-6 backdrop-blur-sm shadow-lg animate-fadeIn">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-blue-400 font-medium">Recent Work</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="relative z-10">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                    Turning Vision Into <br/>
                  </span>
                  <span className="relative">
                    <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur rounded-lg -z-10"></span>
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      Digital Excellence
                    </span>
                  </span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                Explore a handpicked collection of projects showcasing my expertise in web development, UI/UX design, and problem-solving. Each case study demonstrates the challenge, solution, and measurable outcomes.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#featured-projects" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-900/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path>
                  </svg>
                  Explore Projects
                </a>
                <a href="/contact" className="px-8 py-3 bg-transparent border border-slate-700 hover:border-blue-500/30 text-slate-200 font-medium rounded-lg hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Contact Me
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                {[
                  { value: '15+', label: 'Projects Completed' },
                  { value: '4+', label: 'Happy Clients' },
                  { value: '100%', label: 'Client Satisfaction' },
                  { value: '3+', label: 'Industries Served' },
                ].map((stat, idx) => (
                  <div key={idx} className="px-4 py-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Featured Project Preview */}
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-2xl blur opacity-50"></div>
              <div className="relative rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                {/* Project Preview */}
                <div className="aspect-[4/3] bg-slate-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <h3 className="text-white font-bold mb-2">Featured Project</h3>
                        <p className="text-blue-300 text-sm">Click to explore my best work</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-medium">Web Application</div>
                    <div className="text-slate-400 text-xs">2023</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">E-Commerce Platform</h3>
                  <p className="text-slate-300 text-sm mb-4">Full-stack solution with modern UI/UX, secure payments, and inventory management</p>
                  <div className="flex gap-2">
                    {['Next.js', 'React', 'Node.js'].map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700/50">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Gradient Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>
      
      <div id="featured-projects">
        <Section className="py-12">
        <div className="max-w-7xl mx-auto">
          {/* Featured Project Header */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-slate-400">Highlighting some of my best work and most challenging problems solved.</p>
          </div>
          
          {/* Project Filtering Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["All", "Web App", "Frontend", "Backend", "UI/UX", "E-commerce"].map((tag, index) => (
              <button 
                key={index} 
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${index === 0 
                  ? "bg-blue-600 text-white" 
                  : "bg-slate-800/70 text-slate-300 hover:bg-slate-700/70"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <ProjectsSection />
          
          {/* Additional Project Info Section */}
          <div className="mt-16 grid lg:grid-cols-2 gap-10">
            <div className="relative group transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-30 group-hover:opacity-40 rounded-2xl blur-md transition-all duration-500"></div>
              <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 backdrop-blur-xl border border-slate-800/80 rounded-xl p-8 h-full">
                <h3 className="text-xl font-bold text-white mb-4">Project Approach</h3>
                <p className="text-slate-300 mb-6">
                  My development process involves thorough planning, clean architecture, and rigorous testing. I focus on delivering projects that are:
                </p>
                <ul className="space-y-3">
                  {[
                    "Performance optimized for fast loading times",
                    "Responsive and accessible across all devices",
                    "Built with best practices and maintainable code",
                    "Scalable to accommodate future growth"
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
                <h3 className="text-xl font-bold text-white mb-4">Technology Stack</h3>
                <p className="text-slate-300 mb-6">
                  I use modern technologies and frameworks to build robust and scalable applications:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      category: "Frontend",
                      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
                    },
                    {
                      category: "Backend",
                      tech: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
                    },
                    {
                      category: "Tools & DevOps",
                      tech: ["Git", "Docker", "Vercel", "AWS"]
                    },
                    {
                      category: "Design",
                      tech: ["Figma", "Adobe XD", "Responsive Design"]
                    }
                  ].map((stack, idx) => (
                    <div key={idx} className="mb-4">
                      <h4 className="text-blue-400 font-medium text-sm mb-2">{stack.category}</h4>
                      <ul className="space-y-1">
                        {stack.tech.map((item, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-center gap-1">
                            <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="relative rounded-2xl overflow-hidden mt-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-md"></div>
            <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-10 rounded-xl border border-slate-800/80 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Have a project in mind?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">Let&apos;s discuss how I can help bring your vision to life with clean code and exceptional design.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-900/30 border border-blue-500/30"
                >
                  Start a project
                </a>
                <a 
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white border border-slate-700/50 hover:border-blue-500/30 font-medium rounded-lg transition-all duration-300"
                >
                  Schedule a call
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      </div>
      {/* JSON-LD for Portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Projects by Muhammad Umar",
            url: "/projects",
            description: "Selected projects with outcomes",
          }),
        }}
      />
    </>
  );
}
