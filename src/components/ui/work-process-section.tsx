"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We define your project goals, audience, and roadmap.",
    icon: <Search className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    details: [
      "Project consultation & goal setting",
      "Target audience analysis", 
      "Technology stack planning",
      "Timeline & milestone definition"
    ]
  },
  {
    step: "02", 
    title: "Development & Design",
    description: "You receive regular updates as we build your product with modern tools and best practices.",
    icon: <Code className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    details: [
      "UI/UX design & prototyping",
      "Frontend development",
      "Backend API development",
      "Regular progress updates"
    ]
  },
  {
    step: "03",
    title: "Launch & Support", 
    description: "After testing and deploying, I offer post-launch support to keep your app performing smoothly.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-emerald-500 to-emerald-600",
    details: [
      "Quality assurance testing",
      "Deployment & launch",
      "Performance monitoring",
      "Ongoing support & maintenance"
    ]
  }
];

export const WorkProcessSection = () => {
  return (
    <section id="process" className="py-20 px-6 lg:px-8 relative bg-gradient-to-b from-slate-950/30 via-slate-900/50 to-slate-950/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            Work Process
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How I Work
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              With You
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A proven process that ensures your project is delivered on time, on budget, and 
            <span className="text-indigo-400 font-semibold"> exceeds your expectations</span>
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Connecting Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-600 to-slate-700 z-0" />
              )}
              
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 relative z-10">
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-8 border border-indigo-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                            Let&apos;s discuss your project and kick off this proven process that has delivered success for countless clients.
          </p>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 