"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Heart } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/MuhammadUmarMalik",
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/muhammad-umar-malik786",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-400"
    },
    {
      name: "Behance",
      url: "https://behance.net/malikgraphics1",
      icon: <span className="w-5 h-5 text-sm">🎨</span>,
      color: "hover:text-purple-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Backend Development",
    "Frontend Development", 
    "UI/UX Design",
    "Payment Integration"
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
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
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase text-lg">
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
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a href="mailto:umarmalik.cs711@gmail.com" className="hover:text-blue-400 transition-colors">
                      umarmalik.cs711@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-4 h-4 text-green-400" />
                    <a href="tel:+923062617205" className="hover:text-green-400 transition-colors">
                      +92 306 2617205
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="text-gray-400 text-sm">
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-slate-800/50"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <h5 className="text-white font-semibold mb-4">Follow Me</h5>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${link.color} hover:border-current hover:bg-current/10 hover:scale-110`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center sm:text-right">
                <p className="text-gray-300 font-semibold mb-3">Ready to start your project?</p>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Let's Build Your Project →
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Muhammad Umar. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400" /> in Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 