import React from "react";
import { GradientOrbs } from "./gradient-orbs";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  cta?: React.ReactNode;
  /**
   * Variant controls layout/size. "default" = left aligned; "centered" = hero-like centered header
   */
  variant?: "default" | "centered";
  /**
   * Custom eyebrow element that will replace the default eyebrow styling
   */
  customEyebrow?: React.ReactNode;
  /**
   * Custom title element that will replace the default title styling
   */
  customTitle?: React.ReactNode;
};

export function PageHeader({ title, subtitle, eyebrow, cta, variant = "default", customEyebrow, customTitle }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden">
      {/* Enhanced background with better gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <GradientOrbs />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-transparent"></div>
      </div>
      
      {/* Glass panel effect */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
      
      <div
        className={
          variant === "centered"
            ? "container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-36 sm:pt-40 md:pt-44 pb-16 sm:pb-20 md:pb-24 text-center relative z-10"
            : "container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-36 sm:pt-40 md:pt-44 pb-16 sm:pb-16 md:pb-20 relative z-10"
        }
      >
        {/* Decorative elements */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -top-10 left-1/4 w-16 h-16 rounded-full bg-purple-500/10 blur-2xl animate-pulse-slow pointer-events-none"></div>
        
        {/* Eyebrow with enhanced styling */}
        {customEyebrow ? (
          customEyebrow
        ) : eyebrow && (
          <div
            className={
              variant === "centered"
                ? "mx-auto inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-400 mb-6 shadow-lg shadow-blue-500/5 animate-fadeIn"
                : "inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-blue-400 mb-6 shadow-lg shadow-blue-500/5 animate-fadeIn"
            }
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {eyebrow}
          </div>
        )}
        
        {/* Title with enhanced styling */}
        {customTitle ? (
          customTitle
        ) : (
          <h1
            className={
              variant === "centered"
                ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white mb-4 drop-shadow-sm"
                : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white mb-4 drop-shadow-sm"
            }
          >
            {title}
          </h1>
        )}
        
        {/* Decorative separator */}
        {variant === "centered" && (
          <div className="relative mx-auto mb-8">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="mx-auto h-1 w-1 rounded-full bg-blue-500"></div>
          </div>
        )}
        
        {/* Subtitle with enhanced styling */}
        {subtitle && (
          <p
            className={
              variant === "centered"
                ? "text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-slate-300 leading-relaxed font-light"
                : "text-base sm:text-lg md:text-xl max-w-2xl text-slate-300 leading-relaxed font-light"
            }
          >
            {subtitle}
          </p>
        )}
        
        {/* Call to action with enhanced positioning */}
        {cta && (
          <div className={variant === "centered" ? "mt-10" : "mt-8"}>{cta}</div>
        )}
      </div>
    </header>
  );
}


