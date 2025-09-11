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
};

export function PageHeader({ title, subtitle, eyebrow, cta, variant = "default" }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <GradientOrbs />
      </div>
      <div
        className={
          variant === "centered"
            ? "container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-14 md:pb-16 text-center"
            : "container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-10 sm:py-14 md:py-16"
        }
      >
        {eyebrow && (
          <div
            className={
              variant === "centered"
                ? "mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 mb-4"
                : "inline-flex items-center gap-2 rounded-full border border-slate-800/60 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 mb-4"
            }
          >
            {eyebrow}
          </div>
        )}
        <h1
          className={
            variant === "centered"
              ? "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gradient-primary"
              : "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent"
          }
        >
          {title}
        </h1>
        {variant === "centered" && (
          <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-[var(--color-accent-blue)]/60" />
        )}
        {subtitle && (
          <p
            className={
              variant === "centered"
                ? "mt-4 max-w-3xl mx-auto text-slate-300 leading-relaxed"
                : "mt-3 max-w-2xl text-slate-300 leading-relaxed"
            }
          >
            {subtitle}
          </p>
        )}
        {cta && (
          <div className={variant === "centered" ? "mt-8" : "mt-6"}>{cta}</div>
        )}
      </div>
    </header>
  );
}


