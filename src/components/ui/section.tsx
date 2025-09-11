import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
};

export function Section({ children, className = "", container = true }: SectionProps) {
  return (
    <section className={`py-10 sm:py-14 md:py-16 ${className}`}>
      <div className={`${container ? "container mx-auto px-3 sm:px-4 md:px-6 lg:px-8" : ""}`}>
        {children}
      </div>
    </section>
  );
}


