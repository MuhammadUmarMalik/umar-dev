import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  container?: boolean;
  id?: string;
};

export function Section({ children, className = "", container = true, id }: SectionProps) {
  return (
    <section id={id} className={`py-10 sm:py-14 md:py-16 scroll-mt-28 sm:scroll-mt-32 md:scroll-mt-36 ${className}`}>
      <div className={`${container ? "container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl" : ""}`}>
        {children}
      </div>
    </section>
  );
}


