"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/translations";
import { siteConfig } from "@/config/site";
import { Wrench, Phone } from "lucide-react";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="pt-24 pb-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col gap-6">
        
        {/* CTA Block - Full Width */}
        <div className="bg-surface rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-black/5">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground tracking-tight uppercase">
            {language === 'ar' ? 'هل أنت متحمس؟ نحن كذلك. دعنا نبدأ.' : "EXCITED? US TOO. LET'S GET MOVING."}
          </h2>
          <a 
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] whitespace-nowrap uppercase"
          >
            {language === 'ar' ? 'حدد موعداً' : "SCHEDULE A VISIT"} <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Logo Block (1 col) */}
          <div className="bg-primary rounded-3xl p-12 flex flex-col items-center justify-center min-h-[300px]">
            <div className="bg-black/10 p-6 rounded-3xl mb-6 backdrop-blur-md">
              <Wrench className="text-white w-16 h-16" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-wider text-center">{t.workshopName}</h3>
          </div>

          {/* Links & Info Block (2 cols) */}
          <div className="bg-surface border border-black/5 rounded-3xl p-8 md:p-12 lg:col-span-2 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-2 mb-10 bg-black/5 w-fit px-5 py-2 rounded-full border border-black/10">
                <Wrench className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-foreground">Professional Partner</span>
              </div>
              
              <div className="flex flex-wrap gap-x-8 gap-y-6 font-bold text-sm md:text-base tracking-wide uppercase mb-12">
                <a href="#services" className="hover:text-primary transition-colors text-foreground">{t.servicesTitle}</a>
                <a href="#products" className="hover:text-primary transition-colors text-foreground">{t.productsTitle}</a>
                <a href="#contact" className="hover:text-primary transition-colors text-foreground">{t.contactTitle}</a>
                <a href="#" className="hover:text-primary transition-colors text-foreground">About Us</a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-bold text-text-muted">
              <p>© {new Date().getFullYear()} {t.workshopName}.</p>
              <div className="flex gap-6 uppercase">
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a href="#" className="bg-surface border border-black/5 hover:border-primary/50 hover:bg-black/5 transition-all rounded-3xl aspect-square flex items-center justify-center group">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-text-muted group-hover:text-primary transition-colors"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
          </a>
          <a href="#" className="bg-surface border border-black/5 hover:border-primary/50 hover:bg-black/5 transition-all rounded-3xl aspect-square flex items-center justify-center group">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-text-muted group-hover:text-primary transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="#" className="bg-surface border border-black/5 hover:border-primary/50 hover:bg-black/5 transition-all rounded-3xl aspect-square flex items-center justify-center group">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-text-muted group-hover:text-primary transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </a>
          <a href="#" className="bg-surface border border-black/5 hover:border-primary/50 hover:bg-black/5 transition-all rounded-3xl aspect-square flex items-center justify-center group">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-text-muted group-hover:text-primary transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
