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
  navPadding?: number;
  onStartResize?: (clientY: number) => void;
  navWidth?: number;
  onStartResizeWidth?: (clientX: number) => void;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  activeLink?: string;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  navPadding?: number;
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
  // Beginner-friendly constants for resize behavior
  const NAV_PADDING_MIN = 8;   // px
  const NAV_PADDING_MAX = 28;  // px
  const NAV_WIDTH_MIN = 720;   // px
  const NAV_WIDTH_MAX = 1200;  // px
  const NAV_WIDTH_DEFAULT = 960; // px

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [navPadding, setNavPadding] = useState<number>(12); // px; roughly py-3
  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const startPadRef = useRef(12);
  const [navWidth, setNavWidth] = useState<number>(NAV_WIDTH_DEFAULT);
  const isDraggingWidthRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(NAV_WIDTH_DEFAULT);

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
      id="site-navbar"
      data-navbar-root
      className={cn("fixed inset-x-0 top-4 z-[100] w-full px-4 sm:px-6 lg:px-8", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean; navPadding?: number; onStartResize?: (clientY: number) => void; navWidth?: number; onStartResizeWidth?: (clientX: number) => void }>,
              { 
                visible, 
                navPadding,
                navWidth,
                onStartResize: (clientY: number) => {
                  if (window.innerWidth < 1024) return; // desktop only
                  isDraggingRef.current = true;
                  startYRef.current = clientY;
                  startPadRef.current = navPadding;
                  document.body.style.userSelect = "none";
                  const onMove = (ev: PointerEvent) => {
                    if (!isDraggingRef.current) return;
                    const delta = ev.clientY - startYRef.current;
                    const next = Math.min(NAV_PADDING_MAX, Math.max(NAV_PADDING_MIN, startPadRef.current + delta * 0.5));
                    setNavPadding(next);
                  };
                  const onUp = () => {
                    if (!isDraggingRef.current) return;
                    isDraggingRef.current = false;
                    document.body.style.userSelect = "";
                    window.removeEventListener("pointermove", onMove);
                    window.removeEventListener("pointerup", onUp);
                  };
                  window.addEventListener("pointermove", onMove);
                  window.addEventListener("pointerup", onUp);
                },
                onStartResizeWidth: (clientX: number) => {
                  if (window.innerWidth < 1024) return;
                  isDraggingWidthRef.current = true;
                  startXRef.current = clientX;
                  startWidthRef.current = navWidth;
                  document.body.style.userSelect = "none";
                  const onMove = (ev: PointerEvent) => {
                    if (!isDraggingWidthRef.current) return;
                    const delta = ev.clientX - startXRef.current;
                    const next = Math.min(NAV_WIDTH_MAX, Math.max(NAV_WIDTH_MIN, startWidthRef.current + delta));
                    setNavWidth(next);
                  };
                  const onUp = () => {
                    if (!isDraggingWidthRef.current) return;
                    isDraggingWidthRef.current = false;
                    document.body.style.userSelect = "";
                    window.removeEventListener("pointermove", onMove);
                    window.removeEventListener("pointerup", onUp);
                  };
                  window.addEventListener("pointermove", onMove);
                  window.addEventListener("pointerup", onUp);
                }
              },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible, navPadding, onStartResize, navWidth, onStartResizeWidth }: NavBodyProps) => {
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
        "group relative z-[60] mx-auto hidden w-full max-w-none flex-row items-center justify-between rounded-full bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 px-4 lg:flex",
        visible && "bg-slate-900/90 backdrop-blur-lg border-slate-600/60",
        className,
      )}
      style={{ paddingTop: navPadding, paddingBottom: navPadding, maxWidth: navWidth }}
    >
      {children}
      {/* Resize handle */}
      <button
        type="button"
        aria-label="Resize header"
        onPointerDown={(e) => onStartResize && onStartResize(e.clientY)}
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 -bottom-3 h-3 w-24 cursor-ns-resize opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
      >
        <span className="sr-only">Resize header</span>
        <div className="mx-auto h-1 w-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors" />
      </button>
      {/* Width handle */}
      <button
        type="button"
        aria-label="Resize navbar width"
        onPointerDown={(e) => onStartResizeWidth && onStartResizeWidth(e.clientX)}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-10 w-4 cursor-ew-resize opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
      >
        <span className="sr-only">Resize width</span>
        <div className="mx-auto h-8 w-0.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors" />
      </button>
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, activeLink }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-300 transition duration-200",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isActive = !!activeLink && (activeLink === item.link || (activeLink.startsWith("#") && item.link.startsWith("#") && activeLink === item.link));
        return (
          <a
            onMouseEnter={() => setHovered(idx)}
            onClick={(e) => {
              e.preventDefault();
              if (onItemClick) onItemClick(e);
            }}
            className={cn(
              "relative px-3 xl:px-4 py-2 text-sm xl:text-base transition-colors duration-200",
              isActive ? "text-white" : "text-slate-300 hover:text-white"
            )}
            key={`link-${idx}`}
            href={item.link}
            aria-current={isActive ? "page" : undefined}
          >
            {isActive && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 rounded-full bg-white/8 border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
              />
            )}
            {!isActive && hovered === idx && (
              <motion.div
                layoutId="hoveredPill"
                className="absolute inset-0 rounded-full bg-slate-700/40"
              />
            )}
            <span className="relative z-20 inline-flex items-center">
              {item.name}
            </span>
            {/* Removed extra underline to avoid double indicators */}
          </a>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible, navPadding }: MobileNavProps) => {
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
      style={{ paddingTop: navPadding, paddingBottom: navPadding }}
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
          <div className="flex w-full flex-col items-start justify-start gap-2 px-4 py-6" onClick={(e) => e.stopPropagation()}>
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