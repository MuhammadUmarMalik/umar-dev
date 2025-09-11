import React from "react";

export function GradientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute top-24 -right-16 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute -bottom-16 left-1/3 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
    </div>
  );
}


