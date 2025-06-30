"use client";
import React from "react";
import { motion } from "framer-motion";

export const BlogHero = () => {
  return (
    <section className="min-h-[40vh] flex items-center justify-center relative overflow-hidden pt-32 md:pt-40">
    

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            My Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-2"
          >
            Thoughts, tutorials, and insights on web development, design, and technology.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}; 