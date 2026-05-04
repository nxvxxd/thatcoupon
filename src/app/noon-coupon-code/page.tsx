import type { Metadata } from "next";
import { getStoreBySlug, SITE_URL } from "@/lib/store-data";
import { generateStorePageSchema, generateFAQSchema } from "@/lib/schema";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StorePageContent } from "@/components/StorePageContent";

const slug = "noon-coupon-code";
const store = getStoreBySlug(slug)!;

export const metadata: Metadata = {
  title: store.metaTitle,
  description: store.metaDescription,
  keywords: store.metaKeywords,
  alternates: { canonical: `${SITE_URL}/${slug}` },
  openGraph: {
    title: store.metaTitle,
    description: store.metaDescription,
    url: `${SITE_URL}/${slug}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: store.metaTitle,
    description: store.metaDescription,
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStorePageSchema(store)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(store.faq)) }} />
      <Header />
      <main className="min-h-screen">
        <StorePageContent store={store} />
      </main>
      <Footer />
    </>
  );
}
