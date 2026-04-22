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
  title: "Istueta Construction | Luxury Home Remodeling in South Florida",
  description: "High-end residential remodeling and construction in South Florida. Luxury kitchens, bathrooms, and full home renovations.",
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
