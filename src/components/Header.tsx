"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/translations";
import { siteConfig } from "@/config/site";
import { Globe, Wrench, Menu, X } from "lucide-react";

export function Header() {
  const { language, toggleLanguage, dir } = useLanguage();
  const t = translations[language];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: "#home" },
    { name: t.services, href: "#services" },
    { name: t.products, href: "#products" },
    { name: t.whyUs, href: "#why-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
            <Wrench className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-foreground bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
            {t.workshopName}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-text-muted hover:text-accent transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-black/10 pl-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-text-muted hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{t.languageToggle}</span>
            </button>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 hover:shadow-[var(--shadow-glow-primary)]"
            >
              {t.whatsapp}
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-t border-black/5 shadow-xl">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-accent font-medium p-2 rounded-lg hover:bg-black/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-black/5 my-2" />
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 text-foreground p-2 w-full text-left rtl:text-right"
            >
              <Globe className="w-5 h-5 text-accent" />
              <span className="font-medium">{t.languageToggle}</span>
            </button>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-3 rounded-xl font-medium text-center mt-2 hover:shadow-[var(--shadow-glow-primary)] transition-all duration-300"
            >
              {t.whatsapp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
