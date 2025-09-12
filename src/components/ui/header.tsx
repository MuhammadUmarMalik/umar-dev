"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setActive(pathname);
      return;
    }
    const sectionIds = ["hero", "services", "projects", "contact"]; // hash-based sections on home
    const handleScroll = () => {
      let current: string = "/";
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 96) {
            current = `#${sectionIds[i]}`;
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToSection = (href: string) => {
    console.log('🔍 Scrolling to:', href);
    
    // Check if it's an external link (starts with '/')
    if (href.startsWith('/')) {
      console.log('🌐 External link detected:', href);
      window.location.href = href;
      return;
    }
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      console.log('✅ Element found:', element);
      // Close mobile menu first
      setIsMobileMenuOpen(false);
      
      // Use setTimeout to ensure menu closes before scrolling
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        console.log('📍 Scrolling to position:', offsetPosition);
        
        // Smooth scroll to section
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 150); // Small delay to let menu animation complete
    } else {
      console.log('❌ Element not found for ID:', targetId);
    }
  };

  // Scroll functions are handled directly in onClick events

  const handleButtonClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToSection(href);
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems 
          items={navItems} 
          activeLink={active}
          onItemClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            const href = e.currentTarget.getAttribute('href');
            if (href) {
              e.preventDefault();
              e.stopPropagation();
              if (href.startsWith('/')) {
                window.location.href = href;
                setActive(href);
              } else {
                scrollToSection(href);
                setActive(href);
              }
            }
          }} 
        />
        <div className="flex items-center gap-2 xl:gap-4">
          <NavbarButton 
            variant="secondary"
            href="/about"
            className="hidden sm:inline-block"
            onClick={(e: React.MouseEvent) => handleButtonClick(e, "/about")}
          >
            <span className="hidden lg:inline">About Me</span>
            <span className="lg:hidden">About</span>
          </NavbarButton>
          <NavbarButton 
            variant="primary"
            href="/contact"
            onClick={(e: React.MouseEvent) => handleButtonClick(e, "/contact")}
          >
            <span className="hidden sm:inline">Hire Me</span>
            <span className="sm:hidden">Contact</span>
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <button
              key={`mobile-link-${idx}`}
              onClick={(e) => {
                console.log('📱 Mobile nav clicked:', item.name, item.link);
                e.preventDefault();
                e.stopPropagation();
                scrollToSection(item.link);
                setActive(item.link);
              }}
              className={cn(
                "relative text-slate-300 hover:text-white transition-all duration-300 py-3 w-full mb-2 text-left bg-transparent border-0 outline-none focus:outline-none cursor-pointer rounded-lg px-4",
                active === item.link 
                  ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white font-medium shadow-[0_0_10px_rgba(59,130,246,0.2)]" 
                  : "hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50"
              )}
            >
              <div className="flex items-center">
                {active === item.link && (
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 shadow-[0_0_5px_rgba(59,130,246,0.7)]"></div>
                )}
                <span className="block text-lg font-medium">{item.name}</span>
              </div>
            </button>
          ))}
          <div className="flex w-full flex-col gap-3 mt-4 pt-4 border-t border-slate-700/50">
            <NavbarButton
              onClick={(e: React.MouseEvent) => handleButtonClick(e, "#about")}
              variant="secondary"
              href="#about"
              className="w-full justify-center"
            >
              About Me
            </NavbarButton>
            <NavbarButton
              onClick={(e: React.MouseEvent) => handleButtonClick(e, "#contact")}
              variant="primary"
              href="#contact"
              className="w-full justify-center"
            >
              Get a Quote
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}; 