"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Server, 
  Monitor, 
  Palette, 
  CreditCard 
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web App Development",
    description: "Custom web applications tailored to your business goals. Developed using React.js, Node.js, and Next.js for speed, scalability, and responsiveness. Whether it's an e-commerce platform or a business dashboard, I bring your vision to life.",
    technologies: ["React.js", "Node.js", "Next.js", "PostgreSQL", "TypeScript"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile App Development", 
    description: "Cross-platform mobile apps using React Native. Get smooth, modern apps for Android and iOS that your users will enjoy using every day.",
    technologies: ["React Native", "iOS", "Android", "Cross-platform", "Mobile UI"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    description: "High-performance APIs built with Node.js, Adonis.js, and PostgreSQL. From user authentication to data security, your backend will be stable, fast, and ready to scale.",
    technologies: ["Node.js", "Adonis.js", "PostgreSQL", "RESTful APIs", "Authentication"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Frontend Development",
            description: "Interactive and responsive user interfaces using React.js, HTML, CSS, and JavaScript. I create UI that&apos;s intuitive, clean, and conversion-optimized.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript", "Responsive Design"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX and Graphic Design",
    description: "From branding to mobile app design, I craft visuals that are not only beautiful but also user-focused. Using tools like Figma, Photoshop, and Illustrator, I deliver designs that communicate and convert.",
    technologies: ["Figma", "Photoshop", "Illustrator", "Branding", "User Experience"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Payment Gateway Integration",
    description: "Accept online payments with secure integrations like Stripe, PayPal, and JazzCash. Hassle-free setup for a seamless checkout experience.",
    technologies: ["Stripe", "PayPal", "JazzCash", "Secure Payments", "E-commerce"],
    color: "from-blue-500 to-blue-600"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative bg-gradient-to-b from-slate-950/30 via-slate-900/50 to-slate-950/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            Services
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">
              <span className="hidden sm:inline">Complete Digital</span>
              <span className="sm:hidden">Digital</span>
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent block">
              Solutions
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            <span className="hidden md:inline">From web applications to mobile apps, backend systems to stunning designs — I deliver </span>
            <span className="md:hidden">Web apps, mobile solutions, and stunning designs — I deliver </span>
            <span className="text-blue-400 font-semibold">end-to-end solutions</span> that 
            <span className="text-indigo-400 font-semibold"> drive your business forward</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Service Icon & Title */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base flex-grow">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm rounded-full whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 text-sm sm:text-base mt-auto`}
              >
                <span className="hidden sm:inline">Get Started →</span>
                <span className="sm:hidden">Start →</span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                            Let&apos;s discuss your project and create a custom solution that drives real results for your business.
          </p>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 