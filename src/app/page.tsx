"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/translations";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ImageSlider } from "@/components/ImageSlider";
import { Wrench, Zap, CheckCircle2, Droplets, Gift, Phone, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";

const whyUsImages = [
  "/slider/img1.png",
  "/slider/img2.png",
  "/slider/img3.png",
  "/slider/img4.png"
];

const heroImages = [
  "/hero-slider/img1.jpg",
  "/hero-slider/img2.jpg",
  "/hero-slider/img3.jpg",
  "/hero-slider/img4.jpg"
];

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];


  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* HERO SECTION */}
        <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center pt-20">
          <div className="absolute inset-0 z-0 bg-background">
            <ImageSlider images={heroImages} interval={5000} />
            {/* Gradient Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center text-center justify-center w-full h-full pt-10">
            <div className="inline-block bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6 w-fit">
              {t.hl24Hours}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              {t.heroTitle.split('—')[0]} <br />
              <span className="text-primary">— {t.heroTitle.split('—')[1]}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed mx-auto">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pb-12 lg:pb-24">
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(t.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-primary/25 text-center"
              >
                {t.whatsapp}
              </a>
              <a 
                href="#services"
                className="bg-surface hover:bg-transparent text-foreground hover:text-white border border-black/10 hover:border-white px-8 py-4 rounded-xl font-bold text-lg transition-colors text-center"
              >
                {t.viewServices}
              </a>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS STRIP */}
        <div className="bg-surface border-y border-black/5 relative z-20 -mt-10 mx-4 lg:mx-auto max-w-7xl rounded-2xl shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 lg:p-8">
            {siteConfig.highlights.map((hl) => (
              <div key={hl.id} className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-black/5 transition-colors">
                <div className="bg-background p-4 rounded-full shadow-inner border border-black/5">
                  <hl.Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm md:text-base">
                  {t[hl.transKey as keyof typeof t]}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t.servicesTitle}</h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">{t.servicesSubtitle}</p>
            </div>

            {/* ENGINE OIL SERVICES */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-primary p-3 rounded-xl">
                  <Droplets className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t.engineOilTitle}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[240px] md:auto-rows-[280px]">
                {siteConfig.services.engineOil.map((service, idx) => {
                  let gridClass = "";
                  if (idx === 0) gridClass = "md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2";
                  else if (idx === 1) gridClass = "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1";
                  else if (idx === 2) gridClass = "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1";
                  else if (idx === 3) gridClass = "md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2";
                  else if (idx === 4) gridClass = "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2";
                  else if (idx === 5) gridClass = "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1";
                  else if (idx === 6) gridClass = "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1";

                  return (
                    <div key={service.id} className={`group relative bg-surface rounded-3xl overflow-hidden border border-black/5 hover:border-primary/50 transition-all shadow-xl h-full w-full ${gridClass}`}>
                      <Image 
                        src={service.image}
                        alt={t[service.transKeyTitle as keyof typeof t] as string}
                        fill
                        className="object-cover opacity-100 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <h4 className="text-2xl font-bold text-white mb-2">{t[service.transKeyTitle as keyof typeof t]}</h4>
                        <p className="text-text-muted text-sm line-clamp-3 group-hover:text-gray-200 transition-colors">{t[service.transKeyDesc as keyof typeof t]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WORKSHOP SERVICES */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-accent p-3 rounded-xl">
                  <Wrench className="text-background w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t.workshopServicesTitle}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
                {siteConfig.services.workshop.map((service, idx) => {
                  let gridClass = "";
                  if (idx === 0) gridClass = "lg:col-span-1 lg:row-span-2";
                  else if (idx === 1) gridClass = "lg:col-span-2 lg:row-span-1";
                  else if (idx === 2) gridClass = "lg:col-span-1 lg:row-span-1";
                  else if (idx === 3) gridClass = "lg:col-span-1 lg:row-span-1";
                  else if (idx === 4) gridClass = "lg:col-span-2 lg:row-span-1";
                  else if (idx === 5) gridClass = "lg:col-span-1 lg:row-span-1";

                  return (
                    <div key={service.id} className={`group relative bg-surface rounded-3xl overflow-hidden border border-black/5 hover:border-accent/50 transition-all shadow-xl h-full w-full ${gridClass}`}>
                      <Image 
                        src={service.image}
                        alt={t[service.transKeyTitle as keyof typeof t] as string}
                        fill
                        className="object-cover opacity-100 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <h4 className="text-2xl font-bold text-white mb-2">{t[service.transKeyTitle as keyof typeof t]}</h4>
                        <p className="text-text-muted text-sm line-clamp-3 group-hover:text-gray-200 transition-colors">{t[service.transKeyDesc as keyof typeof t]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SPECIAL OFFER BANNER */}
        <section className="relative overflow-hidden mx-4 xl:mx-auto max-w-7xl my-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black h-[500px] md:h-[600px] flex items-center">
          <Image 
            src={siteConfig.offer.image}
            alt="Special Offer"
            fill
            className="object-cover object-right opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black from-0% to-transparent to-25%" />
          
          {/* Inner Frame */}
          <div className="absolute inset-4 md:inset-6 border border-white/20 pointer-events-none z-10" />

          {/* Burst Badge */}
          <div className="absolute top-8 right-8 md:top-16 md:right-[15%] z-30 animate-pulse">
            <div className="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
              <div className="absolute inset-0 bg-yellow-400 rotate-12 shadow-2xl"></div>
              <div className="absolute inset-0 bg-yellow-400 rotate-45 shadow-2xl"></div>
              <div className="absolute inset-0 bg-yellow-400 rotate-[75deg] shadow-2xl"></div>
              <div className="absolute inset-0 bg-yellow-400 -rotate-12 shadow-2xl"></div>
              <div className="relative z-10 text-center flex flex-col -rotate-12 mt-2">
                <span className="font-black text-black text-3xl md:text-5xl leading-none">FREE</span>
                <span className="font-bold text-black text-sm md:text-xl tracking-widest uppercase mt-1">Wash</span>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-8 w-full px-8 md:px-16 pt-12 md:pt-0">
            <div className="flex-1 text-center md:text-left rtl:md:text-right max-w-2xl">
              <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-black text-white leading-none uppercase tracking-tighter drop-shadow-lg mb-4">
                {t.offerTitle}
              </h2>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-primary leading-tight uppercase italic tracking-tighter drop-shadow-md mb-6">
                {t.offerText}
              </h3>
              <p className="text-gray-300 text-lg md:text-2xl font-medium tracking-wide">
                {t.hlFreeWash}*
              </p>
            </div>
          </div>

          {/* Bottom Info inside frame */}
          <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 z-30 flex items-center gap-6 text-white text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-1.5 rounded-full border border-white/20"><Phone className="w-4 h-4" /></div>
              <span className="font-bold tracking-widest">{siteConfig.contact.whatsappNumber}</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="bg-white/10 p-1.5 rounded-full border border-white/20"><Globe className="w-4 h-4" /></div>
              <span className="font-bold tracking-widest">saudigarej.com</span>
            </div>
          </div>

          {/* CTA */}
          <div className="absolute bottom-8 md:bottom-10 right-8 md:right-12 z-30 hidden md:block">
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(t.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-3 font-black text-xl transition-colors uppercase tracking-widest border-2 border-primary"
            >
              {t.whatsapp}
            </a>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="products" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
             <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{t.productsTitle}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-3xl overflow-hidden group">
                <Image 
                  src={siteConfig.products.tyresImage}
                  alt={t.tyresSection}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{t.tyresSection}</h3>
                  <p className="text-gray-300 text-lg">{t.tyresDesc}</p>
                </div>
              </div>
              <div className="relative h-80 rounded-3xl overflow-hidden group">
                <Image 
                  src={siteConfig.products.oilImage}
                  alt={t.oilSection}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{t.oilSection}</h3>
                  <p className="text-gray-300 text-lg">{t.oilDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why-us" className="py-24 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="bg-surface border border-black/5 rounded-[3rem] p-6 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              
              {/* Left Image Side */}
              <div className="relative w-full lg:w-5/12 aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] rounded-tl-[6rem] rounded-br-[6rem] overflow-hidden shrink-0 shadow-2xl bg-surface">
                <ImageSlider images={whyUsImages} interval={4000} />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                {/* Decorative Cross Shape */}
                <div className="absolute bottom-6 left-6 text-primary drop-shadow-2xl">
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 0H65V35H100V65H65V100H35V65H0V35H35V0Z" />
                  </svg>
                </div>
              </div>

              {/* Right Content Side */}
              <div className="flex-1 w-full flex flex-col">
                <div className="inline-flex items-center gap-2 text-primary font-bold mb-6 text-sm md:text-base uppercase tracking-wider">
                  <div className="w-2.5 h-2.5 bg-primary" />
                  {t.whyUsTitle}
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6">
                  {t.wuHeadline1}{' '}
                  <span className="bg-primary text-white px-4 py-1 rounded-2xl inline-block -rotate-2 shadow-lg mb-2">{t.wuHeadlineHighlight1}</span>
                  <br />
                  {t.wuHeadline2}{' '}
                  <span className="bg-accent text-background px-4 py-1 rounded-2xl inline-block rotate-1 shadow-lg">{t.wuHeadlineHighlight2}</span>
                </h2>
                
                <p className="text-text-muted text-lg leading-relaxed mb-12 max-w-2xl">
                  {t.wuSectionDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  {siteConfig.whyUsPoints.map((point) => {
                    const Icon = point.Icon;
                    return (
                      <div key={point.id} className="flex flex-col gap-4 group">
                        <div className="text-primary border-b-2 border-primary/20 w-12 pb-3 mb-1 group-hover:w-full group-hover:border-primary transition-all duration-500">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-2">{t[point.titleKey as keyof typeof t]}</h4>
                          <p className="text-text-muted text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">{t[point.descKey as keyof typeof t]}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
