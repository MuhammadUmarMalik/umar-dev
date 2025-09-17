"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers, TrendingUp, MessageSquare, Rocket } from "lucide-react";

const reasons = [
  {
    title: "One Partner, Full Solution",
    description: "From strategy and design to coding and deployment — no multiple vendors.",
    icon: <Layers className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Results-Driven Approach",
    description: "Speed, security, and ROI — not just pretty designs.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "Clear Communication",
    description: "Transparent timelines, weekly updates, and no surprises.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Scalable & Future‑Proof",
    description: "Modern frameworks that grow with your business.",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-indigo-500 to-indigo-600",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
            Why Work With Me
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">
              <span className="hidden sm:inline">💡 Why Businesses Choose Me</span>
              <span className="sm:hidden">💡 Why Choose Me</span>
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block"></span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            One partner, full solution. Results-driven, clear communication, and future‑proof builds.
          </p>
        </motion.div>
        {/* Differentiation list - minimalist, no background */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-6 border border-slate-700/60 rounded-xl hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="relative flex items-start gap-4">
                <div className={`w-12 h-12 border border-slate-700/60 rounded-xl flex items-center justify-center text-white shrink-0`}
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                  >
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-lg leading-tight">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed mt-2 text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 