import type { Metadata } from "next";
import { HomeContent } from "./HomeContent";
import {
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateFAQSchema,
  generateStorePageSchema,
} from "@/lib/schema";
import { stores, SITE_NAME, SITE_URL } from "@/lib/store-data";

export const metadata: Metadata = {
  title: "UAE Coupon Codes 2026 – Verified Promo Codes & Cashback | That Coupon",
  description:
    "Get verified UAE coupon codes for 2026. Noon (FOREVER – 15% cashback), Namshi (LL44 – up to 75% off), Shosh Arab (HH4 – 3% off), Bloomingdale's (AB57 – 15% off). Updated daily.",
  keywords: [
    "UAE coupon codes",
    "UAE promo codes 2026",
    "Noon coupon code UAE",
    "Namshi discount code",
    "Shosh Arab promo code",
    "Bloomingdale's coupon UAE",
    "GCC coupon codes",
    "verified promo codes UAE",
    "Dubai coupon codes",
    "cashback codes UAE",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "UAE Coupon Codes 2026 – Verified Promo Codes & Cashback | That Coupon",
    description:
      "Save big in the UAE with verified codes. 15% Noon Cashback (FOREVER), 75% Off Namshi (LL44), 3% Off Shosh Arab (HH4), 15% Off Bloomingdale's (AB57). Updated daily.",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Verified UAE Coupon Codes 2026 | That Coupon",
    description:
      "Grab the latest codes: FOREVER (Noon), LL44 (Namshi), HH4 (Shosh Arab), AB57 (Bloomingdale's). Copy & save now!",
  },
};

export default function HomePage() {
  const faqItems = stores.flatMap((s) => s.faq.slice(0, 1));
  const homepageSchemas = stores.map((s) => generateStorePageSchema(s));

  return (
    <>
      {/* JSON-LD: WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
      />
      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />
      {/* JSON-LD: Product offers per store */}
      {homepageSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* JSON-LD: FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqItems)) }}
      />

      <main className="min-h-screen">
        <HomeContent />
      </main>
    </>
  );
}
