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
    <footer className="cv-auto bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden">
                    <Image 
                      src="/favicon.png" 
                      alt="Umar" 
                      width={48}
                      height={48}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase">
                    Muhammad Umar
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed max-w-md">
                  Backend Developer | Frontend Engineer | Graphic Designer
                </p>
                <p className="text-gray-400 text-sm mb-6 max-w-md">
                  Helping you launch faster, look better, and scale smarter with cutting-edge technology solutions.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <FiMail className="w-4 h-4 text-blue-400" />
                    <a href="mailto:umarmalik.cs711@gmail.com" className="hover:text-blue-400 transition-colors">
                      umarmalik.cs711@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FiPhone className="w-4 h-4 text-green-400" />
                    <a href="tel:+923062617205" className="hover:text-green-400 transition-colors">
                      +92 306 2617205
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="text-gray-400 text-sm">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="#contact" className="px-4 py-2 rounded-lg bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white font-semibold transition-colors">Hire Me</a>
              <a href="/Muhammad-Umar-Resume.pdf" className="px-4 py-2 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition-colors">Download Resume</a>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Muhammad Umar. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}; 