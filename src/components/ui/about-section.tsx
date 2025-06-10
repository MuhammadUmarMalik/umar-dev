"use client";
import React from "react";
import { motion } from "framer-motion";

const strengths = [
  {
    strength: "🔧 Backend",
    benefit: "Scalable, secure apps that handle real-world demands",
   
  },
  {
    strength: "💻 Frontend", 
    benefit: "Sleek interfaces that feel natural on any screen",
   
  },
  {
    strength: "🎨 Design Mastery",
    benefit: "Branding and visuals that connect emotionally", 
   
  },
  {
    strength: "🧩 Problem Solver",
    benefit: "Complex challenges solved with creative tech solutions",
    
  },
  {
    strength: "⏰ On-Time, Every Time",
    benefit: "You get quality work, delivered fast and reliably",
    
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

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 relative bg-gradient-to-b from-slate-950/50 to-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            Why Choose Me
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-4xl md:text-5xl">🔧</span>
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              One Developer.
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Endless Possibilities.
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Why hire multiple people when you can get <span className="text-blue-400 font-semibold">full-stack development</span> and 
            <span className="text-purple-400 font-semibold"> high-impact design</span>—under one roof?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Strengths Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-sm">💪</span>
                </div>
                My Strengths & Your Benefits
              </h3>
              
              <div className="space-y-6">
                {strengths.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-blue-500/30 pl-6 py-3 bg-slate-700/20 rounded-r-lg"
                  >
                    <div className="flex items-start gap-3">
                    
                      <div>
                        <h4 className="text-blue-400 font-semibold text-lg mb-2">
                          {item.strength}
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {item.benefit}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20"
              >
                <p className="text-center text-lg font-semibold text-white">
                  💼 Let's create something your users will love.
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
              {[
                { number: "3+", label: "Years Experience", icon: "🚀" },
                { number: "50+", label: "Projects Completed", icon: "⚡" },
                { number: "15+", label: "Technologies", icon: "🛠️" },
                { number: "100%", label: "Client Satisfaction", icon: "❤️" },
              ].map((stat, index) => (
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