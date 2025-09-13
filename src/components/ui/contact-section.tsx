"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Support Email",
      value: "support@umarmalik-dev.com",
      href: "mailto:support@umarmalik-dev.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "umarmalik.cs711@gmail.com",
      href: "mailto:umarmalik.cs711@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone/WhatsApp",
      value: "+92 306 2617205",
      href: "tel:+923062617205",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "umarmalik-dev",
      href: "https://www.linkedin.com/in/umarmalik-dev/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "MuhammadUmarMalik",
      href: "https://github.com/MuhammadUmarMalik",
      color: "from-gray-600 to-gray-700"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Let&apos;s Connect
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let&apos;s Work
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
            I help startups, agencies, and entrepreneurs launch faster, scale smarter, and design better. 
            Whether it&apos;s a brand new idea or an existing project that needs an upgrade, I&apos;m here to help you win.
          </p>

          <p className="text-base sm:text-lg font-semibold text-white">
            Let&apos;s bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-sm">📞</span>
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group w-full"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-400 text-sm font-medium">
                        {contact.label}
                      </div>
                      <div className="text-white font-semibold group-hover:text-green-400 transition-colors duration-300 break-all sm:break-normal">
                        {contact.value}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors duration-300 shrink-0" />
                  </motion.a>
                ))}
              </div>

              {/* Behance Link */}
              <motion.a
                href="https://behance.net/malikgraphics1"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group mt-4 sm:mt-6 w-full"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <span className="text-lg font-bold">Be</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-400 text-sm font-medium">
                    Behance
                  </div>
                  <div className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300 break-all sm:break-normal">
                    malikgraphics1
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-300 shrink-0" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full space-y-6 sm:space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center lg:text-left">
                Send me a message to get started
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-center lg:text-left">
                Ready to transform your ideas into reality? Whether you need a complete web application, 
                mobile app, or stunning design work, I&apos;m here to deliver exceptional results that exceed your expectations.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-3 sm:space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('mailto:support@umarmalik-dev.com?subject=Project Inquiry&body=Hi Muhammad, I would like to discuss a project with you.', '_blank')}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-sm sm:text-base"
                >
                  <Mail className="w-5 h-5" />
                  Let&apos;s Build Your Project
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://wa.me/923062617205?text=Hi Muhammad, I would like to discuss a project with you.', '_blank')}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-sm sm:text-base"
                >
                  <Phone className="w-5 h-5" />
                  WhatsApp Me
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('mailto:support@umarmalik-dev.com?subject=Free Quote Request&body=Hi Muhammad, I would like to get a free quote for my project.', '_blank')}
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-500/30 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300 flex items-center justify-center gap-3 text-sm sm:text-base"
                >
                  <ExternalLink className="w-5 h-5" />
                  Get a Free Quote
                </motion.button>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold text-sm sm:text-base">Available for new projects</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Currently accepting new clients • Quick response guaranteed
                </p>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
               { number: "2+", label: "Year Experience", icon: "🚀" },
               { number: "20+", label: "Projects Done", icon: "⚡" },
               { number: "10+", label: "Technologies", icon: "🛠️" },
               { number: "100%", label: "Client Satisfaction", icon: "❤️" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 sm:p-4 text-center hover:border-green-500/30 transition-colors duration-300"
                >
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{stat.icon}</div>
                  <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400 font-medium leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 