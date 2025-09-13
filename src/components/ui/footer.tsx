import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();



  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    "Backend Development",
    "Frontend Development", 
    "UI/UX Design",
    "Payment Integration"
  ];

  return (
    <footer className="w-full bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-6 sm:py-8 md:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Brand & Description */}
            <div className="sm:col-span-2 lg:col-span-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image 
                    src="/favicon.png" 
                    alt="Umar" 
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase">
                  Muhammad Umar
                </h3>
              </div>
              <p className="text-gray-300 mb-3 leading-relaxed max-w-md text-sm">
                Backend Developer | Frontend Engineer | Graphic Designer
              </p>
              <p className="text-gray-400 text-sm mb-4 max-w-md">
                Helping you launch faster, look better, and scale smarter with cutting-edge technology solutions.
              </p>
              
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
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="sm:col-span-1 lg:col-span-3">
              <h4 className="text-base font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <a href="#contact" className="px-3 py-1.5 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium transition-colors hover:from-blue-500 hover:to-purple-500">Hire Me</a>
              <a href="/Muhammad-Umar-Resume.pdf" className="px-3 py-1.5 rounded-md border border-slate-700/50 text-slate-200 text-sm hover:bg-slate-800/50 hover:border-blue-500/30 transition-colors">Download Resume</a>
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