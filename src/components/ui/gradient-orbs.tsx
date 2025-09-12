import React from "react";

export function GradientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none">
      {/* Primary orbs with animation */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-900/20 blur-3xl animate-pulse-slow" />
      <div className="absolute top-24 -right-16 h-96 w-96 rounded-full bg-gradient-to-bl from-purple-600/20 to-blue-700/20 blur-3xl animate-pulse-slower" />
      <div className="absolute -bottom-16 left-1/3 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-500/20 to-blue-500/10 blur-3xl animate-pulse-slow" />
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/3 left-1/4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/3 h-16 w-16 rounded-full bg-blue-400/10 blur-xl" />
      
      {/* Subtle highlight effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-900/5 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </div>
  );
}


