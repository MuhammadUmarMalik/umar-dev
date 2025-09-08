"use client";
import React, { useEffect, useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";

export const HeroSection = () => {
  const words = ["Creative Designer", "Problem Solver", "UI/UX Expert", "Tech Innovator"];
  const [showDecor, setShowDecor] = useState(false);

  useEffect(() => {
    const schedule = (cb: () => void) => {
      // Prefer idle time to mount heavy decorative layers after first paint
      const ric: any = (window as any).requestIdleCallback;
      if (typeof ric === "function") {
        ric(cb, { timeout: 1500 });
      } else {
        setTimeout(cb, 0);
      }
    };
    schedule(() => setShowDecor(true));
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900/50 to-slate-950 pt-16 sm:pt-20 md:pt-24 lg:pt-20 xl:pt-16">
      {/* Background decorative elements (mounted after first paint) */}
      {showDecor && (
        <div className="absolute inset-0 overflow-hidden will-change-transform">
          <div className="absolute -top-20 -right-16 sm:-top-32 sm:-right-24 md:-top-40 md:-right-32 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute -bottom-20 -left-16 sm:-bottom-32 sm:-left-24 md:-bottom-40 md:-left-32 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-500/20 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-indigo-500/10 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>
      )}

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10 mt-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Status Badge */}
          <div
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="hidden xs:inline">Available for new opportunities</span>
            <span className="xs:hidden">Available for new opportunities</span>
          </div>

          {/* Main Title with FlipWords */}
          <h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block mb-1 sm:mb-2">
              <span className="hidden sm:inline">Full Stack Web Developer</span>
              <span className="sm:hidden">Full Stack Developer</span>
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent block">
              and <FlipWords words={words} className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent" />
            </span>
          </h1>

          {/* Tagline */}
          <h4
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-300 mb-4 sm:mb-6 px-2"
          >
            <span className="hidden sm:inline">Build Your Vision with Clean Code and Stunning Design</span>
            <span className="sm:hidden">Clean Code, Stunning Design</span>
          </h4>

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-2"
          >
            Need a web app that performs flawlessly or visuals that tell your brand&apos;s story? 
            I&apos;m <span className="text-blue-400 font-semibold">Muhammad Umar Malik</span>, a results-driven developer and designer 
            who transforms ideas into seamless digital products. Let&apos;s turn your project into a reality—faster, better, smarter.
          </p>

          {/* Skills List */}
          <div
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mb-6 sm:mb-8 px-2"
          >
            {[
              "Backend Development",
              "Mobile Apps", 
              "Web Apps",
              "UI/UX Design"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg sm:rounded-xl text-gray-300 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                <span className="hidden sm:inline">{skill}</span>
                <span className="sm:hidden">
                  {skill === "Backend Development" ? "Backend" :
                   skill === "Mobile Apps" ? "Mobile" :
                   skill === "Web Apps" ? "Web" :
                   "UI/UX"}
                </span>
              </span>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className="mb-8 sm:mb-12"
          >
            <p className="text-sm sm:text-base md:text-lg font-semibold text-white mb-3 sm:mb-4 px-2">
                              <span className="hidden sm:inline">Let&apos;s Build Your Project Today</span>
              <span className="sm:hidden">Ready to Start?</span>
            </p>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Get a Free Quote</span>
              <span className="sm:hidden">Get Quote</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}; 