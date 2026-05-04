import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { stores, categories, SITE_NAME, SITE_URL, getAllCoupons } from "@/lib/store-data";
import { Store, Tag, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "All Stores – UAE Coupon Codes & Deals | That Coupon",
  description:
    "Browse all stores on That Coupon. Find verified coupon codes, promo codes, and cashback deals for top UAE retailers including Noon, Namshi, Shosh Arab, Bloomingdale's, and more.",
  keywords: [
    "UAE coupon codes",
    "all stores UAE",
    "promo codes UAE",
    "discount codes UAE",
    "coupon websites UAE",
    "cashback UAE",
  ],
  openGraph: {
    title: "All Stores – UAE Coupon Codes & Deals | That Coupon",
    description:
      "Browse all stores on That Coupon. Find verified coupon codes, promo codes, and cashback deals for top UAE retailers.",
    url: `${SITE_URL}/stores`,
    siteName: SITE_NAME,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/stores`,
  },
};

export default function StoresPage() {
  const totalCoupons = getAllCoupons().length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Breadcrumbs items={[{ label: "All Stores" }]} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              All Stores
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
              {stores.length} stores · {totalCoupons} verified coupon codes ·
              Updated daily
            </p>
          </div>
        </section>

        {/* Categories Quick Links */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors border border-emerald-200"
              >
                <Tag className="w-4 h-4" />
                {cat.name}
                <span className="text-emerald-600">
                  ({cat.stores.length} stores)
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Stores Grid */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Browse All Stores
          </h2>
          <p className="text-gray-600 mb-8">
            Click on any store to view the latest verified coupon codes and
            start saving instantly.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stores.map((store) => (
              <Link
                key={store.slug}
                href={`/${store.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-emerald-300 transition-all duration-200"
              >
                {/* Store Logo */}
                <div className="p-6 bg-gray-50 flex items-center justify-center h-32">
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center text-xl font-black"
                    style={{
                      backgroundColor: store.logoBg,
                      color: store.logoColor,
                    }}
                  >
                    {store.logoText}
                  </div>
                </div>

                {/* Store Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {store.name}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {store.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md font-medium">
                      <Store className="w-3 h-3" />
                      {store.coupons.length}{" "}
                      {store.coupons.length === 1 ? "code" : "codes"}
                    </span>
                    <span className="text-gray-400">{store.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO Content */}
        <section className="bg-emerald-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your One-Stop Destination for UAE Coupon Codes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {SITE_NAME} aggregates the best coupon codes, promo codes, and
              cashback deals from the most popular online stores in the UAE and
              GCC region. Whether you&apos;re shopping for electronics on{" "}
              <Link
                href="/noon-coupon-code"
                className="text-emerald-700 font-semibold hover:underline"
              >
                Noon
              </Link>
              , updating your wardrobe on{" "}
              <Link
                href="/namshi-coupon-code"
                className="text-emerald-700 font-semibold hover:underline"
              >
                Namshi
              </Link>
              , or looking for elegant modest fashion from{" "}
              <Link
                href="/shosh-arab-coupon-code"
                className="text-emerald-700 font-semibold hover:underline"
              >
                Shosh Arab
              </Link>
              , we have verified codes that are tested daily and guaranteed to
              work.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We currently feature {stores.length} partner stores across{" "}
              {categories.length} categories, with a total of {totalCoupons}{" "}
              active coupon codes. Our team of deal experts verifies every code
              each day to ensure the highest accuracy rate in the UAE coupon
              market. We remove expired codes within 24 hours and add new deals
              as soon as they become available, so you always have access to the
              freshest offers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Looking for something specific? Browse our store categories above
              to find deals in Fashion, Electronics, and more. Each store page
              includes detailed instructions on how to apply coupon codes at
              checkout, frequently asked questions, and long-form content about
              maximizing your savings. Don&apos;t forget to bookmark your
              favorite stores and check back regularly for new deals and
              seasonal promotions during Ramadan, Eid, Dubai Shopping Festival,
              and other major shopping events.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Can&apos;t Find Your Store?
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;re always adding new stores. Let us know which store
            you&apos;d like to see on {SITE_NAME}.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Suggest a Store
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
