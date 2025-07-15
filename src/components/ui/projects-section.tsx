"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingCart, Users, Heart } from "lucide-react";

const featuredProjects = [
  {
    title: "ADHURI CART",
    description: "E-commerce backend built with Adonis.js and JWT, designed for high scalability and security.",
    icon: <ShoppingCart className="w-6 h-6" />,
    technologies: ["Adonis.js", "JWT", "PostgreSQL", "RESTful API", "E-commerce"],
    category: "Backend Development",
    color: "from-blue-500 to-blue-600",
    featured: true
  },
  {
    title: "Knowledge Exchange API",
    description: "A dynamic academic marketplace platform for student collaboration and resource sharing.",
    icon: <Users className="w-6 h-6" />,
    technologies: ["Node.js", "Academic Platform", "Marketplace", "Student Collaboration", "API"],
    category: "Full Stack Development",
    color: "from-purple-500 to-purple-600",
    featured: true
  },
  {
    title: "Blood Stream App",
    description: "Mobile application connecting blood donors and recipients with real-time chat and location mapping.",
    icon: <Heart className="w-6 h-6" />,
    technologies: ["React Native", "Real-time Chat", "Location Mapping", "Mobile App", "Healthcare"],
    category: "Mobile Development",
    color: "from-red-500 to-red-600",
    featured: true
  }
];

const additionalProjects = [
  {
    title: "Loan Calculator Web App",
    description: "User-friendly tool developed for financial firms to assist in quick, accurate loan decisions.",
    technologies: ["Web App", "Financial Tools", "Calculations", "User-friendly UI"],
    category: "Web Development",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "LinkedIn Job Scraper",
    description: "Custom job listing scraper with filters, CSV export, and future integration for ATS-friendly resume generation.",
    technologies: ["Web Scraping", "CSV Export", "Job Listings", "Data Processing"],
    category: "Automation",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing development and design skills with dark theme.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    category: "Web Development",
    color: "from-indigo-500 to-indigo-600"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative bg-gradient-to-b from-slate-900/30 via-slate-950/50 to-slate-900/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            Featured Projects
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Real Projects,
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing a selection of projects that demonstrate my expertise in 
            <span className="text-cyan-400 font-semibold"> full-stack development</span>, 
            <span className="text-blue-400 font-semibold"> mobile apps</span>, and 
            <span className="text-purple-400 font-semibold"> innovative solutions</span>
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Featured Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-medium">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                  Featured
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-sm text-cyan-400 font-medium mb-3">
                {project.category}
              </p>

              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-3 mt-auto">
                <button className="flex-1 px-4 py-2 bg-slate-700/50 border border-slate-600/50 text-gray-300 rounded-lg hover:bg-slate-600/50 hover:border-slate-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">View Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:border-cyan-500/20 transition-all duration-300 flex flex-col h-full"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-cyan-400 font-medium mb-3">
                  {project.category}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/30 text-gray-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to See More?
          </h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Check out my complete project portfolio and source code on GitHub.
          </p>
          
          <button 
            onClick={() => window.open('https://github.com/MuhammadUmarMalik', '_blank')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            <Github className="w-5 h-5" />
            View More Projects on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 