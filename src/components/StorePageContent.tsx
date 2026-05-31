"use client";

import Link from "next/link";
import { CouponCard } from "@/components/CouponCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HowItWorks } from "@/components/HowItWorks";
import { Newsletter } from "@/components/Newsletter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getRelatedStores, LAST_UPDATED } from "@/lib/store-data";
import type { Store } from "@/lib/store-data";
import { ExternalLink, Clock, Tag, ArrowRight } from "lucide-react";

interface StorePageContentProps {
  store: Store;
}

export function StorePageContent({ store }: StorePageContentProps) {
  const relatedStores = getRelatedStores(store.slug);
  const paragraphs = store.longDescription.split("\n\n").filter(Boolean);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: `${store.name} Coupon Codes` }]} />

        {/* Hero Section */}
        <section className="mb-12">
          <div
            className="rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
            style={{ background: store.heroGradient }}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-extrabold text-xs shadow-lg"
                  style={{ background: store.logoBg, color: store.logoColor }}
                >
                  {store.logoText}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold bg-white/15 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
                    {store.category}
                  </span>
                  <span className="text-xs font-medium bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    Updated: {LAST_UPDATED}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
                {store.h1}
              </h1>
              <p className="text-sm md:text-base text-white/85 max-w-2xl leading-relaxed mb-5">
                {store.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {store.coupons.length} active code{store.coupons.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliate Disclosure */}
        <div className="mb-8 bg-amber-50 border border-amber-200/60 rounded-xl px-5 py-3.5">
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>Disclosure:</strong> We may earn a commission when you use our coupon codes. This never affects our recommendations — we only list verified, working codes.
          </p>
        </div>

        {/* Coupon Cards Section */}
        <section className="mb-16" aria-label={`${store.name} Coupon Codes`}>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            {store.name} Coupon Codes &amp; Offers
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Verified and tested today. Copy any code below and apply it at checkout to save instantly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {store.coupons.map((coupon) => (
              <CouponCard key={coupon.id} {...coupon} />
            ))}
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* Long SEO Content */}
        <section className="py-12" aria-label={`${store.name} Guide`}>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
            Everything You Need to Know About {store.name}
          </h2>
          <div className="prose prose-sm max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm text-gray-600 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Last updated: {LAST_UPDATED} &bull; All coupon codes on this page are verified by our team daily.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="py-12" aria-label="Frequently Asked Questions">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
            Frequently Asked Questions About {store.name} Coupons
          </h2>
          <div className="max-w-3xl">
            <FaqAccordion items={store.faq} />
          </div>
        </section>

        {/* Related Stores */}
        <section className="py-12 border-t border-gray-100" aria-label="Related Stores">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
            Other Stores You Might Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {relatedStores.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.slug}/`}
                className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 no-underline"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-[9px] shrink-0 shadow-sm"
                    style={{ background: related.logoBg, color: related.logoColor }}
                  >
                    {related.logoText}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors truncate">
                      {related.name}
                    </div>
                    <div className="text-xs text-gray-500">{related.category}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 transition-all group-hover:translate-x-0.5" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {related.coupons.length} code{related.coupons.length !== 1 ? "s" : ""} available
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-emerald-500 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Newsletter */}
      <Newsletter variant="emerald" />
    </>
  );
}
