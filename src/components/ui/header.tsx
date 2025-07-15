"use client";
import React, { useState } from "react";

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
      link: "#hero",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToSection(href);
  };

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
          onItemClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            const href = e.currentTarget.getAttribute('href');
            if (href) {
              e.preventDefault();
              e.stopPropagation();
              scrollToSection(href);
            }
          }} 
        />
        <div className="flex items-center gap-2 xl:gap-4">
          <NavbarButton 
            variant="secondary"
            href="#about"
            className="hidden sm:inline-block"
            onClick={(e: React.MouseEvent) => handleButtonClick(e, "#about")}
          >
            <span className="hidden lg:inline">About Me</span>
            <span className="lg:hidden">About</span>
          </NavbarButton>
          <NavbarButton 
            variant="primary"
            href="#contact"
            onClick={(e: React.MouseEvent) => handleButtonClick(e, "#contact")}
          >
            <span className="hidden sm:inline">Get Quote</span>
            <span className="sm:hidden">Quote</span>
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
              }}
              className="relative text-slate-300 hover:text-white transition-colors duration-200 py-3 w-full border-b border-slate-700/30 last:border-b-0 text-left bg-transparent border-0 outline-none focus:outline-none cursor-pointer"
            >
              <span className="block text-lg font-medium">{item.name}</span>
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