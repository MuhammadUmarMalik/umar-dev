"use client";
import React from "react";
import { motion } from "framer-motion";

export const CTAAfterFAQ = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 sm:p-10"
        >
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to turn your idea into a product?
            </h3>
            <p className="text-slate-300 text-base sm:text-lg mb-6">
              Get a free strategy call to map the fastest path to launch, or request a proposal with timelines and cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://calendly.com/umarmalik-cs711/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
              >
                Book a Free Consultation
              </a>
              <a
                href="mailto:support@umarmalik-dev.com?subject=Project%20Proposal%20Request&body=Hi%20Muhammad,%0D%0A%0D%0AHere%20are%20my%20project%20goals,%20timeline,%20and%20budget:%0D%0A-%20Goals:%0D%0A-%20Timeline:%0D%0A-%20Budget:%0D%0A%0D%0AThank%20you!"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-blue-500/40 text-blue-300 font-semibold rounded-xl hover:bg-slate-800/50 hover:border-blue-500/60 transition-all duration-300 text-center"
              >
                Get a Proposal
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -bottom-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-blue-500/10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};


