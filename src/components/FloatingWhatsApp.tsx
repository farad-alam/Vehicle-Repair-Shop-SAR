"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/translations";
import { siteConfig } from "@/config/site";

// A custom WhatsApp icon SVG since lucide doesn't have official brand logos
const WhatsAppIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    stroke="none"
  >
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
    <path d="M11.994 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18.232c-1.526 0-3.023-.393-4.33-1.14l-4.821 1.267 1.288-4.7C3.385 14.347 3 12.802 3 11.994 3 6.649 7.371 2.311 12.031 2.311c4.66 0 8.448 3.782 8.448 8.442s-3.788 8.448-8.448 8.448z"/>
  </svg>
);

export function FloatingWhatsApp() {
  const { language, dir } = useLanguage();
  const t = translations[language];

  const encodedMsg = encodeURIComponent(t.whatsappMsg);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodedMsg}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center animate-bounce group`}
      aria-label="WhatsApp Contact"
    >
      <WhatsAppIcon />
      
      {/* Tooltip */}
      <span className={`absolute ${dir === 'rtl' ? 'left-full ml-4' : 'right-full mr-4'} top-1/2 -translate-y-1/2 bg-surface text-foreground text-sm font-medium py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-black/10 pointer-events-none`}>
        {t.whatsapp}
      </span>
    </a>
  );
}
