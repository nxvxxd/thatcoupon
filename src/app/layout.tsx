import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GTMProvider } from "@/components/GTMProvider";
import { BackToTop } from "@/components/BackToTop";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "That Coupon Navigation",
    url: "https://thatcoupon.com/",
    hasPart: [
      { "@type": "WebPage", name: "All Stores", url: "https://thatcoupon.com/stores/" },
      { "@type": "WebPage", name: "Fashion Deals", url: "https://thatcoupon.com/categories/fashion/" },
      { "@type": "WebPage", name: "Electronics Deals", url: "https://thatcoupon.com/categories/electronics/" },
      { "@type": "WebPage", name: "Blog", url: "https://thatcoupon.com/blog/" },
      { "@type": "WebPage", name: "About Us", url: "https://thatcoupon.com/about/" },
      { "@type": "WebPage", name: "Contact Us", url: "https://thatcoupon.com/contact/" },
      { "@type": "WebPage", name: "Our Team", url: "https://thatcoupon.com/team/" },
    ],
  };

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />

        {/* Hreflang for GCC */}
        <link rel="alternate" hreflang="en-AE" href="https://thatcoupon.com/?country=uae" />
        <link rel="alternate" hreflang="en-SA" href="https://thatcoupon.com/?country=ksa" />

        {/* SiteNavigation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <GTMProvider />
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <BackToTop />
        <Toaster />
      </body>
    </html>
  );
}
