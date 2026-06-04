import type { Metadata } from "next";
import { Outfit, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saudigarej.com'),
  title: "مؤسسة سيارة الحد لخدمات السيارات | Al-Hadd Auto Services",
  description: "خدمات صيانة وإصلاح احترافية متوفرة 24 ساعة. ميزان إلكتروني، بطاريات، ترصيص، كفرات، وغيار زيت. Professional maintenance and auto repair services in Ar Ar.",
  keywords: ["Vehicle Repair Shop Ar Ar", "مؤسسة سيارة الحد لخدمات السيارات", "Car wash", "Oil change", "Tires", "Battery", "غيار زيت", "كفرات", "ترصيص", "ميزان إلكتروني", "بطاريات", "ورشة سيارات", "عرعر"],
  openGraph: {
    title: "مؤسسة سيارة الحد لخدمات السيارات | Al-Hadd Auto Services",
    description: "خدمات صيانة وإصلاح احترافية متوفرة 24 ساعة. Professional maintenance and repair services.",
    url: 'https://saudigarej.com',
    siteName: 'Al-Hadd Auto Services',
    locale: 'ar_SA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${notoKufi.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
