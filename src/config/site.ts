import { Clock, ShieldCheck, AlignHorizontalSpaceAround, Droplets, Wrench, Zap } from "lucide-react";

export const siteConfig = {
  contact: {
    whatsappNumber: "966551317228",
    whatsappDisplay: "+966 55 131 7228",
  },
  hero: {
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2574&auto=format&fit=crop",
  },
  offer: {
    image: "/offer-banner.jpg",
  },
  highlights: [
    { id: "24hours", transKey: "hl24Hours", Icon: Clock },
    { id: "warranty", transKey: "hlWarranty", Icon: ShieldCheck },
    { id: "leveling", transKey: "hlLeveling", Icon: AlignHorizontalSpaceAround },
    { id: "freewash", transKey: "hlFreeWash", Icon: Droplets },
  ],
  services: {
    engineOil: [
      { id: "oilChange", transKeyTitle: "oilChange", transKeyDesc: "oilChangeDesc", image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=800&auto=format&fit=crop" },
      { id: "filterChange", transKeyTitle: "filterChange", transKeyDesc: "filterChangeDesc", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" },
      { id: "tyrePressure", transKeyTitle: "tyrePressure", transKeyDesc: "tyrePressureDesc", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop" },
      { id: "radiatorWater", transKeyTitle: "radiatorWater", transKeyDesc: "radiatorWaterDesc", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" },
      { id: "glassWater", transKeyTitle: "glassWater", transKeyDesc: "glassWaterDesc", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
      { id: "engineAir", transKeyTitle: "engineAir", transKeyDesc: "engineAirDesc", image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=800&auto=format&fit=crop" },
      { id: "brakeOil", transKeyTitle: "brakeOil", transKeyDesc: "brakeOilDesc", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
    ],
    workshop: [
      { id: "tyreSales", transKeyTitle: "tyreSales", transKeyDesc: "tyreSalesDesc", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop" },
      { id: "tyreRepair", transKeyTitle: "tyreRepair", transKeyDesc: "tyreRepairDesc", image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=800&auto=format&fit=crop" },
      { id: "tyreBalancing", transKeyTitle: "tyreBalancing", transKeyDesc: "tyreBalancingDesc", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop" },
      { id: "batterySales", transKeyTitle: "batterySales", transKeyDesc: "batterySalesDesc", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop" },
      { id: "electricalIssues", transKeyTitle: "electricalIssues", transKeyDesc: "electricalIssuesDesc", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
      { id: "carWash", transKeyTitle: "carWash", transKeyDesc: "carWashDesc", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop" },
    ]
  },
  products: {
    tyresImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2564&auto=format&fit=crop",
    oilImage: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=2670&auto=format&fit=crop"
  },
  whyUsPoints: [
    { id: "fast", titleKey: "wuFast", descKey: "wuFastDesc", Icon: Zap },
    { id: "genuine", titleKey: "wuGenuine", descKey: "wuGenuineDesc", Icon: ShieldCheck },
    { id: "certified", titleKey: "wuCertified", descKey: "wuCertifiedDesc", Icon: Wrench },
    { id: "24hours", titleKey: "hl24Hours", descKey: "wu24HoursDesc", Icon: Clock },
  ]
};
