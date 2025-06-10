"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "💻",
    title: "Backend Development",
    description: "Secure, high-performance APIs built using Node.js, Adonis.js, and PostgreSQL. From user authentication to real-time features—your logic layer will be bulletproof.",
    technologies: ["Node.js", "Adonis.js", "PostgreSQL", "JWT", "RESTful APIs"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: "📱",
    title: "Frontend Development", 
    description: "Clean, modern interfaces using React.js, React Native, and responsive design best practices. Built for speed and user satisfaction.",
    technologies: ["React.js", "React Native", "Next.js", "TypeScript", "Responsive Design"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: "🎨",
    title: "Graphic & UI/UX Design",
    description: "Pixel-perfect design for web, mobile, and branding. Get designs that look great and convert—crafted in Figma, Photoshop, Illustrator, and Canva.",
    technologies: ["Figma", "Photoshop", "Illustrator", "Canva", "Branding"],
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: "💳",
    title: "Payment Integration",
    description: "Stripe, JazzCash, PayPal—I integrate what your business needs for smooth, secure online payments.",
    technologies: ["Stripe", "PayPal", "JazzCash", "Secure Payments", "E-commerce"],
    color: "from-rose-500 to-rose-600"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 lg:px-8 relative bg-gradient-to-b from-slate-950/30 via-slate-900/50 to-slate-950/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Services That Sell
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Full-Stack Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              That Drive Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From backend APIs to stunning designs, I deliver complete digital solutions 
            that help your business <span className="text-emerald-400 font-semibold">grow faster</span> and 
            <span className="text-blue-400 font-semibold"> perform better</span>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Service Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-full"
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
                className={`w-full px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
              >
                Get Started →
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
          className="text-center bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl p-8 border border-emerald-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results for your business.
          </p>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 