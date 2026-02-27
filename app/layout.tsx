import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"]
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: "Lepley Nutrition",
    template: "%s | Lepley Nutrition"
  },
  description:
    "Performance-focused personalized meal plans with macro-based nutrition coaching for body recomposition and sustainable routines.",
  keywords: [
    "Personalized meal plans",
    "Macro-based nutrition coaching",
    "Body recomposition",
    "Sustainable fat loss",
    "Muscle-building nutrition"
  ],
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="font-[family-name:var(--font-sans)] antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
