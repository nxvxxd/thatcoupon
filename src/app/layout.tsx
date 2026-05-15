import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GTMProvider } from "@/components/GTMProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UAE Coupon Codes 2026 – Verified Promo Codes & Cashback | That Coupon",
    template: "%s | That Coupon",
  },
  description:
    "The leading coupon and cashback platform in the UAE & GCC. Verified, tested promo codes for Noon, Namshi, Shosh Arab, Bloomingdale's and more. Updated daily.",
  metadataBase: new URL("https://thatcoupon.com"),
  icons: {
    icon: "https://thatcoupon.com/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />

        {/* Hreflang for GCC */}
        <link rel="alternate" hreflang="en-AE" href="https://thatcoupon.com/?country=uae" />
        <link rel="alternate" hreflang="en-SA" href="https://thatcoupon.com/?country=ksa" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800`}
        suppressHydrationWarning
      >
        <GTMProvider />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
