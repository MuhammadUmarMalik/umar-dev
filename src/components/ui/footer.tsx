import React from "react";
import { FiMail, FiPhone,  } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiWordpress } from "react-icons/si";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Services", href: "/services" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Frontend Development", href: "/services" },
    { name: "Backend Development", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "WordPress Development", href: "/services" },
    { name: "Bug Fixing & Troubleshooting", href: "/services" },
    { name: "Speed Optimization", href: "/services" }
  ];

  return (
    <footer className="w-full border-t border-slate-800/50 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand & Description */}
            <div className="sm:col-span-2 lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/10">
                  <Image 
                    src="/favicon.png" 
                    alt="Muhammad Umar logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase">
                  Muhammad Umar
                </h3>
              </div>
              <p className="text-gray-300 mb-3 leading-relaxed max-w-md text-sm">
                Full Stack Developer | UI/UX Designer | Tech Innovator
              </p>
              <p className="text-gray-400 text-sm mb-6 max-w-md">
                Transforming ideas into digital excellence. Helping businesses launch faster, look better, and scale smarter with cutting-edge technology solutions.
              </p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="w-8 h-8 bg-slate-800/50 rounded-md flex items-center justify-center border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                    <FaReact className="w-5 h-5 text-[#61DAFB]" />
                  </div>
                  <div className="w-8 h-8 bg-slate-800/50 rounded-md flex items-center justify-center border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                    <SiNextdotjs className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-slate-800/50 rounded-md flex items-center justify-center border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                    <SiTypescript className="w-5 h-5 text-[#3178C6]" />
                  </div>
                  <div className="w-8 h-8 bg-slate-800/50 rounded-md flex items-center justify-center border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                    <FaNodeJs className="w-5 h-5 text-[#8CC84B]" />
                  </div>
                  <div className="w-8 h-8 bg-slate-800/50 rounded-md flex items-center justify-center border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                    <SiTailwindcss className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div className="w-8 h-8 bg-slate-800/50 rounded-md flex items-center justify-center border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                    <SiMongodb className="w-5 h-5 text-[#4DB33D]" />
                  </div>
                  <div className="w-8 h-8 bg-slate-800/50 rounded-md flex items-center justify-center border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                    <SiWordpress className="w-5 h-5 text-[#21759B]" />
                  </div>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <FiMail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:umarmalik.cs711@gmail.com" className="hover:text-blue-400 transition-colors text-sm">
                    umarmalik.cs711@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FiPhone className="w-4 h-4 text-green-400" />
                  <a href="tel:+923062617205" className="hover:text-green-400 transition-colors text-sm">
                    +92 306 2617205
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="sm:col-span-1 lg:col-span-3">
              <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                     
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="sm:col-span-1 lg:col-span-4">
              <h4 className="text-base font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                     
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a href="https://calendly.com/umarmalik-cs711/30min" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium transition-all duration-300 hover:from-blue-500 hover:to-purple-500 shadow-md hover:shadow-blue-900/20 hover:-translate-y-0.5">Book a Free Consultation</a>
              <a href="/contact" className="px-4 py-2 rounded-lg border border-slate-700/50 text-slate-200 text-sm hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">Get a Proposal</a>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} Muhammad Umar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 