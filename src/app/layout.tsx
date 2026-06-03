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
  title: "مؤسسة سيارة الحد لخدمات السيارات | Vehicle Repair Shop",
  description: "خدمات صيانة وإصلاح احترافية. متوفرون في أي وقت تحتاجه. Professional maintenance and repair services open 24 hours.",
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
