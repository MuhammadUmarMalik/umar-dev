"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQSection = () => {
	const faqs = [
		{ q: "What services do you offer?", a: "Full-stack web development (Next.js/Node), mobile apps (React Native), backend APIs, and UI/UX design." },
		{ q: "How do you price projects?", a: "Fixed-price for well-defined scopes; time & materials for iterative work. You get clear estimates and milestones." },
		{ q: "How long does a project take?", a: "Typical MVPs take 2–6 weeks depending on scope. I share a weekly plan and demos." },
		{ q: "Do you provide ongoing support?", a: "Yes—maintenance, performance optimization, and feature iterations after launch." },
		{ q: "What tech stack do you use?", a: "Next.js, React, Node.js/Adonis.js, PostgreSQL, Tailwind, TypeScript, and React Native." },
		{ q: "Can you improve my existing product?", a: "Absolutely—audits, refactors, speed and conversion optimizations, UX improvements, and redesigns." },
	];

	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section id="faq" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-8 sm:mb-12 md:mb-16">
					<div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-slate-400 mb-4 sm:mb-6">
						<span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
						Frequently Asked Questions
					</div>
					<h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
						<span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block">Your Questions,</span>
						<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent block">Answered</span>
					</h2>
					<p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">Clear, SEO-friendly answers about scope, pricing, timelines, and process.</p>
				</div>

				<div className="max-w-4xl mx-auto border-y border-slate-700/50 divide-y divide-slate-700/50">
					{faqs.map((item, i) => {
						const isOpen = openIndex === i;
						const contentId = `faq-content-${i}`;
						return (
							<div key={i} className="relative group">
								<div className={`absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-purple-500/0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}></div>
								<button
									type="button"
									className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:text-white transition-colors rounded-lg hover:bg-slate-800/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
									aria-expanded={isOpen}
									aria-controls={contentId}
									onClick={() => setOpenIndex(isOpen ? null : i)}
								>
									<span className={`font-semibold text-base sm:text-lg leading-tight ${isOpen ? "text-blue-400" : "text-white"}`}>
										{item.q}
									</span>
									<ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-400" : "text-slate-400 group-hover:text-slate-300"}`} />
								</button>
								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											id={contentId}
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.25, ease: "easeInOut" }}
											className="overflow-hidden"
										>
											<div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
												<p className="text-slate-300 text-sm sm:text-base leading-relaxed">
													{item.a}
												</p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
