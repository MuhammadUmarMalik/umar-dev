import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { ServicesSection } from "@/components/ui/services-section";

export const metadata: Metadata = {
  title: "Services | Full-Stack, Mobile, and UI/UX by Muhammad Umar",
  description:
    "End-to-end services: web apps, mobile apps, backend APIs, and UI/UX design. Built with Next.js, React, Node.js. Conversion-focused and performance-driven.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services by Muhammad Umar",
    description:
      "Full-stack development, mobile apps, backend APIs, and UI/UX design.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Modern Services Hero Section */}
      <div className="relative overflow-hidden pt-28 sm:pt-36 md:pt-44 lg:pt-48 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent z-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="container max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 mb-6 backdrop-blur-sm shadow-lg animate-fadeIn">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-blue-400 font-medium">Expert Services</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                  Full-Stack Development <br className="hidden lg:block" />
                  <span className="relative inline-block">
                    <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur rounded-lg"></span>
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      Done Right
                    </span>
                  </span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                From concept to launch — I design, build, and ship fast, secure, and accessible products that grow your business.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#services" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-900/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                  Explore Services
                </a>
                <a href="/contact" className="px-8 py-3 bg-transparent border border-slate-700 hover:border-blue-500/30 text-slate-200 font-medium rounded-lg hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  Get a Quote
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-3 text-slate-400 text-sm">
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span>5-star rated</span>
                </div>
                <span>•</span>
                <div>Fast turnaround</div>
                <span>•</span>
                <div>Quality code</div>
                <span>•</span>
                <div>Ongoing support</div>
              </div>
            </div>
            
            {/* Right Side - Service Cards Preview */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur opacity-30"></div>
              <div className="relative grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    ),
                    title: "Web Development",
                    description: "Modern, responsive websites and web applications"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                    ),
                    title: "Mobile Apps",
                    description: "Native and cross-platform mobile applications"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                      </svg>
                    ),
                    title: "Backend Development",
                    description: "Scalable APIs and database architecture"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                      </svg>
                    ),
                    title: "UI/UX Design",
                    description: "User-centered design and seamless experiences"
                  }
                ].map((service, idx) => (
                  <div 
                    key={idx} 
                    className="relative backdrop-blur-sm bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="flex flex-col h-full">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Gradient Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>
      
      <div id="services" className="scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36">
      <Section>
        <div className="max-w-7xl mx-auto">
          <ServicesSection />
        </div>
      </Section>
      </div>
      {/* JSON-LD Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web and Mobile App Development",
            provider: {
              "@type": "Person",
              name: "Muhammad Umar",
            },
            areaServed: "Worldwide",
            serviceType: [
              "Full-Stack Development",
              "Mobile App Development",
              "Backend API Development",
              "UI/UX Design",
            ],
            url: "/services",
          }),
        }}
      />
    </>
  );
}


