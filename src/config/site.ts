import {
  Clock,
  ShieldCheck,
  AlignHorizontalSpaceAround,
  Droplets,
  Wrench,
  Zap,
} from "lucide-react";

export const siteConfig = {
  contact: {
    whatsappNumber: "966551317228",
    whatsappDisplay: "+966 55 131 7228",
  },

  hero: {
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2574&auto=format&fit=crop",
  },

  offer: {
    image: "https://i.ibb.co.com/vRsST3M/car-wash.png",
  },

  highlights: [
    { id: "24hours", transKey: "hl24Hours", Icon: Clock },
    { id: "warranty", transKey: "hlWarranty", Icon: ShieldCheck },
    {
      id: "leveling",
      transKey: "hlLeveling",
      Icon: AlignHorizontalSpaceAround,
    },
    { id: "freewash", transKey: "hlFreeWash", Icon: Droplets },
  ],

  services: {
    engineOil: [
      {
        id: "oilChange",
        transKeyTitle: "oilChange",
        transKeyDesc: "oilChangeDesc",
        image: "https://i.ibb.co.com/RpqnBGbd/oil-change.png",
      },
      {
        id: "filterChange",
        transKeyTitle: "filterChange",
        transKeyDesc: "filterChangeDesc",
        image: "https://i.ibb.co.com/1fgB5bRr/changing-filter.png",
      },
      {
        id: "tyrePressure",
        transKeyTitle: "tyrePressure",
        transKeyDesc: "tyrePressureDesc",
        image: "https://i.ibb.co.com/1GLCkSTN/tyre-pressure.jpg",
      },
      {
        id: "radiatorWater",
        transKeyTitle: "radiatorWater",
        transKeyDesc: "radiatorWaterDesc",
        image: "https://i.ibb.co.com/pr10y6gw/water-pouring-radiator.png",
      },
      {
        id: "glassWater",
        transKeyTitle: "glassWater",
        transKeyDesc: "glassWaterDesc",
        image: "https://i.ibb.co.com/wrC58HW5/windshell-washer.png",
      },
      {
        id: "engineAir",
        transKeyTitle: "engineAir",
        transKeyDesc: "engineAirDesc",
        image: "https://i.ibb.co.com/4BrZZw7/air-engine-cleaning.png",
      },
      {
        id: "brakeOil",
        transKeyTitle: "brakeOil",
        transKeyDesc: "brakeOilDesc",
        image: "https://i.ibb.co.com/yFz5JtzR/brake-fluid0filling.png",
      },
    ],

    workshop: [
      {
        id: "tyreSales",
        transKeyTitle: "tyreSales",
        transKeyDesc: "tyreSalesDesc",
        image: "https://i.ibb.co.com/3yS8vmyt/covers.jpg",
      },
      {
        id: "tyreRepair",
        transKeyTitle: "tyreRepair",
        transKeyDesc: "tyreRepairDesc",
        image: "https://i.ibb.co.com/PzTBNrDF/tyre-puncture.png",
      },
      {
        id: "tyreBalancing",
        transKeyTitle: "tyreBalancing",
        transKeyDesc: "tyreBalancingDesc",
        image:
          "https://i.ibb.co.com/4RJg2J4s/Tire-balancing-and-electronic-wheel-alignment.png",
      },
      {
        id: "batterySales",
        transKeyTitle: "batterySales",
        transKeyDesc: "batterySalesDesc",
        image: "https://i.ibb.co.com/MDTw3Zwk/batteries.png",
      },
      {
        id: "electricalIssues",
        transKeyTitle: "electricalIssues",
        transKeyDesc: "electricalIssuesDesc",
        image: "https://i.ibb.co.com/5hrSWNDR/electric-fix.png",
      },
      {
        id: "carWash",
        transKeyTitle: "carWash",
        transKeyDesc: "carWashDesc",
        image: "https://i.ibb.co.com/vRsST3M/car-wash.png",
      },
    ],
  },

  products: {
    tyresImage: "https://i.ibb.co.com/zW4ZYwKX/tyres.jpg",
    oilImage: "https://i.ibb.co.com/RpqnBGbd/oil-change.png",
  },

  whyUsPoints: [
    {
      id: "fast",
      titleKey: "wuFast",
      descKey: "wuFastDesc",
      Icon: Zap,
    },
    {
      id: "genuine",
      titleKey: "wuGenuine",
      descKey: "wuGenuineDesc",
      Icon: ShieldCheck,
    },
    {
      id: "certified",
      titleKey: "wuCertified",
      descKey: "wuCertifiedDesc",
      Icon: Wrench,
    },
    {
      id: "24hours",
      titleKey: "hl24Hours",
      descKey: "wu24HoursDesc",
      Icon: Clock,
    },
  ],
};


