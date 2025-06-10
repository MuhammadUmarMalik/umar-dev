"use client";
import React, { useState } from "react";
import { Home as HomeIcon, User, Briefcase, Mail, Palette, Wrench } from "lucide-react";
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

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={handleNavClick} />
        <div className="flex items-center gap-2 xl:gap-4">
          <NavbarButton 
            variant="secondary"
            href="#about"
            className="hidden sm:inline-block"
          >
            <span className="hidden lg:inline">About Me</span>
            <span className="lg:hidden">About</span>
          </NavbarButton>
          <NavbarButton 
            variant="primary"
            href="#contact"
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
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={handleNavClick}
              className="relative text-slate-300 hover:text-white transition-colors duration-200 py-3 w-full border-b border-slate-700/30 last:border-b-0"
            >
              <span className="block text-lg font-medium">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-3 mt-4 pt-4 border-t border-slate-700/50">
            <NavbarButton
              onClick={handleNavClick}
              variant="secondary"
              href="#about"
              className="w-full justify-center"
            >
              About Me
            </NavbarButton>
            <NavbarButton
              onClick={handleNavClick}
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