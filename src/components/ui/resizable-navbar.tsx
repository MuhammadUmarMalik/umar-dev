"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";
import Image from "next/image";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-4 z-[100] w-full px-4 sm:px-6 lg:px-8", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(0, 0, 0, 0.15), 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 4px rgba(0, 0, 0, 0.1), 0 16px 68px rgba(0, 0, 0, 0.1)"
          : "0 0 0 1px rgba(255, 255, 255, 0.05)",
        scale: visible ? 0.95 : 1,
        y: visible ? 0 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-6xl flex-row items-center justify-between rounded-full bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 px-4 py-3 lg:flex",
        visible && "bg-slate-900/90 backdrop-blur-lg border-slate-600/60",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-300 transition duration-200",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-3 xl:px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 text-sm xl:text-base"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-slate-700/50"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(0, 0, 0, 0.15), 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 4px rgba(0, 0, 0, 0.1), 0 16px 68px rgba(0, 0, 0, 0.1)"
          : "0 0 0 1px rgba(255, 255, 255, 0.05)",
        scale: visible ? 0.96 : 1,
        y: visible ? 0 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between rounded-2xl bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 lg:hidden",
        visible && "bg-slate-900/90 backdrop-blur-lg border-slate-600/60",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-4 py-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "w-full overflow-hidden border-t border-slate-700/50",
            className,
          )}
        >
          <div className="flex w-full flex-col items-start justify-start gap-2 px-4 py-6">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 text-white hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-slate-700/50 active:scale-95"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? (
          <IconX className="w-5 h-5" />
        ) : (
          <IconMenu2 className="w-5 h-5" />
        )}
      </motion.div>
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#hero"
      className="relative z-20 flex items-center space-x-1.5 sm:space-x-2 px-1 sm:px-2 py-1 text-sm font-normal group"
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 overflow-hidden">
        <Image 
          src="/favicon.png"
          alt="Umar" 
          width={40}
          height={40}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <span className="font-bold text-white group-hover:text-blue-400 transition-colors duration-200 hidden sm:block uppercase text-sm sm:text-base md:text-lg">
        Muhammad Umar
      </span>
      <span className="font-bold text-white group-hover:text-blue-400 transition-colors duration-200 sm:hidden uppercase text-sm">
        Umar
      </span>
     
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-2 sm:px-3 xl:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center whitespace-nowrap active:scale-95";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
    secondary: "bg-transparent border border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500",
    dark: "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700",
    gradient:
      "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}; 