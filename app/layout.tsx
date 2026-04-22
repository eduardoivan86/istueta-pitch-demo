import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Istueta Roofing | 41 Years Installing South Florida's Best Roofs",
  description: "Family-owned roofing contractor since 1985. Tile, metal, and flat roofs built to outlive Miami hurricanes. Factory-certified. 78% referral rate. 4.8★ average.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
