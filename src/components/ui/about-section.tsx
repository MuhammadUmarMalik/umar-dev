"use client";
import React from "react";
import { motion } from "framer-motion";

const strengths = [
  {
    strength: "Backend Expertise",
    benefit: "Scalable, secure apps that handle real-world demands"
  },
  {
    strength: "Frontend Finesse", 
    benefit: "Sleek interfaces that feel natural on any screen"
  },
  {
    strength: "Design Mastery",
    benefit: "Branding and visuals that connect emotionally"
  },
  {
    strength: "Problem Solver",
    benefit: "Complex challenges solved with creative tech solutions"
  },
  {
    strength: "On-Time Delivery",
    benefit: "You get quality work, delivered fast and reliably"
  }
];

const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "Node.js/Adonis.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "PostgreSQL", level: 85 },
  { name: "UI/UX Design", level: 90 },
  { name: "React Native", level: 82 },
];

const stats = [
  { number: "2+", label: "Years Experience", icon: "🚀" },
  { number: "40+", label: "Projects Delivered", icon: "⚡" },
  { number: "15+", label: "Tech Stack Mastery", icon: "🛠️" },
  { number: "100%", label: "Client Satisfaction", icon: "❤️" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative bg-gradient-to-b from-slate-950/50 to-slate-900/30">
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
            Why Choose Me
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">
              <span className="hidden sm:inline">One Developer.</span>
              <span className="sm:hidden">One Developer</span>
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
              <span className="hidden sm:inline">Complete Digital Solutions.</span>
              <span className="sm:hidden">Complete Solutions</span>
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            <span className="hidden md:inline">Why hire multiple people when you can get </span>
            <span className="md:hidden">Get </span>
            <span className="text-blue-400 font-semibold">full-stack development</span> and 
            <span className="text-purple-400 font-semibold"> high-impact design</span>
            <span className="hidden sm:inline">—all in one?</span>
            <span className="sm:hidden"> in one place</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Left Column - Strengths Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">
                My Strengths & What They Mean for You
              </h3>
              
              {/* Strengths Table */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="font-semibold text-blue-400 text-lg">My Strength</div>
                  <div className="font-semibold text-purple-400 text-lg">What It Means for You</div>
                </div>
                
                {strengths.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-slate-700/20 rounded-lg border-l-4 border-blue-500/30"
                  >
                    <div className="text-white font-semibold">
                      {item.strength}
                    </div>
                    <div className="text-gray-300">
                      {item.benefit}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 text-center"
              >
                <p className="text-lg font-semibold text-white">
                  Let&apos;s create something your users will love.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-sm">🚀</span>
                </div>
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/30 transition-colors duration-300"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 