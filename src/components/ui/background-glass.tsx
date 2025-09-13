"use client";

import React, { useEffect, useState } from "react";

export const BackgroundGlass = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Glass effect overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      
      {/* Large gradient orbs */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-3xl animate-pulse-slower"></div>
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-3xl animate-pulse-slower" style={{animationDelay: "2s"}}></div>
      <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-3xl animate-pulse-slower" style={{animationDelay: "3s"}}></div>
      
      {/* Radial gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(30,64,175,0.08)_0%,rgba(15,23,42,0)_50%)]"></div>
      </div>
      
      {/* Subtle grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-[0.02]"></div>
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay"></div>
      
      {/* Light beams */}
      <div className="absolute -top-40 left-0 right-0 h-80 bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl transform -rotate-[5deg] opacity-30"></div>
      <div className="absolute -bottom-40 left-0 right-0 h-80 bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl transform rotate-[5deg] opacity-30"></div>
    </div>
  );
};
