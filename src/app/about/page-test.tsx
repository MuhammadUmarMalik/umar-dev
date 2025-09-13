import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

export const metadata = {
  title: "About Muhammad Umar | Expert Full Stack Developer & UI/UX Designer",
  description:
    "Muhammad Umar is a Full Stack Developer with 2+ years of experience in React, Next.js, Node.js, and UI/UX design. Discover my skills, portfolio, and development approach.",
  keywords: ["Full Stack Developer", "UI/UX Designer", "React Developer", "Next.js Expert", "Node.js Developer", "Web Development Services"],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Muhammad Umar | Full Stack Developer & Designer",
    description: "Full Stack Developer with expertise in React, Next.js, Node.js and modern web technologies. View my portfolio and services.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* Unified background for the whole page */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>
        <div className="absolute top-0 right-0 w-[1000px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[1000px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(30,64,175,0.08)_0%,rgba(15,23,42,0)_50%)]"></div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-white">About Page</h1>
        <p className="text-gray-400 mt-4">This is a temporary placeholder</p>
      </div>
    </div>
  );
}
