"use client";

import Link from "next/link";
import { CouponCard } from "@/components/CouponCard";
import { CashbackCard } from "@/components/CashbackCard";
import { HowItWorks } from "@/components/HowItWorks";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Newsletter } from "@/components/Newsletter";
import { LatestCodes } from "@/components/LatestCodes";
import { stores, getAllCoupons, LAST_UPDATED } from "@/lib/store-data";
// @ts-expect-error blog-data types
import { getLatestPosts } from "@/lib/blog-data";
import { BookOpen, ArrowRight } from "lucide-react";

export function HomeContent() {
  const allCoupons = getAllCoupons();
  const topCoupons = stores.map((s) => s.coupons[0]);
  const latestBlogPosts = getLatestPosts(3);

  const homeFaq = [
    {
      question: "What is the latest working Noon coupon code in the UAE?",
      answer:
        "The latest working Noon coupon code is FOREVER. This code provides 15% cashback for new users and 10% cashback for existing users. Other active Noon cashback codes include GPZM, ADHA10, and FOREVER10.",
    },
    {
      question: "How do I get 75% off on Namshi?",
      answer:
        "To get up to 75% off on Namshi, use the discount code LL44 at checkout. This code is valid on fashion, shoes, and accessories and offers discounts ranging from 10% to 75% depending on the item and current sale events.",
    },
    {
      question: "What is the promo code for Shosh Arab?",
      answer:
        "The active promo code for Shosh Arab is HH4. Applying this code at checkout gives you a flat 3% discount on traditional and modest fashion collections.",
    },
    {
      question: "Is there a discount code for Bloomingdale's UAE?",
      answer:
        "Yes, you can use the code AB57 at Bloomingdale's UAE to get up to a 15% discount on luxury fashion, beauty products, and home accessories.",
    },
    {
      question: "Are these UAE coupon codes free to use?",
      answer:
        "Yes, all coupon codes listed on That Coupon are 100% free to use. We are supported by our partner stores, meaning you never pay a dime to access these discounts and cashback offers.",
    },
    {
      question: "How often are these coupon codes updated?",
      answer:
        "Our team verifies and updates the coupon codes on this page daily. If a code stops working, we remove it within 24 hours to ensure you only see valid, active promo codes.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-600 py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23FFFFFF' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E\")"
        }} />
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Save More, Shop Smarter in the{" "}
            <span className="text-amber-300">UAE & GCC</span>
          </h1>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Verified coupons & exclusive cashback codes for Noon, Namshi, Shosh Arab, and
            Bloomingdale&apos;s. Updated daily.
          </p>
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for a store or code (e.g. Noon, LL44)..."
              className="w-full py-4 px-6 pr-36 rounded-full text-sm shadow-2xl outline-none text-gray-800 bg-white"
              id="searchInput"
            />
            <button className="absolute right-2 top-2 py-3 px-6 bg-gradient-to-br from-amber-400 to-amber-600 text-white border-none rounded-full text-sm font-bold cursor-pointer transition-transform hover:scale-105 shadow-lg">
              Find Deals
            </button>
          </div>

          {/* Trending */}
          <div className="mt-10">
            <p className="text-xs opacity-80 font-medium mb-4">
              Top Verified Codes Right Now
            </p>
            <div className="flex justify-center gap-3 overflow-x-auto pb-2">
              {topCoupons.map((c) => (
                <Link
                  key={c.id}
                  href={`/${c.storeSlug}/`}
                  className="bg-white/12 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 flex items-center gap-3 min-w-[160px] cursor-pointer transition-all hover:bg-white/22 hover:-translate-y-0.5 no-underline text-white"
                >
                  <div
                    className="w-9 h-9 rounded-md flex items-center justify-center font-extrabold text-[9px] shrink-0"
                    style={{ background: c.logoBg, color: c.logoColor }}
                  >
                    {c.logoText}
                  </div>
                  <div>
                    <div className="font-semibold text-xs">{c.store}</div>
                    <div className="text-amber-300 text-[11px] font-medium">
                      {c.code}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Coupons */}
      <section className="py-14" aria-label="Top Verified Coupon Codes">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-emerald-800 mb-7">
            Top Verified Coupon Codes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {topCoupons.map((coupon) => (
              <CouponCard key={coupon.id} {...coupon} />
            ))}
          </div>

          {/* Internal links to store pages */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {stores.map((store) => (
              <Link
                key={store.slug}
                href={`/${store.slug}/`}
                className="text-sm text-emerald-700 hover:text-emerald-900 font-medium underline underline-offset-4 transition-colors no-underline hover:underline"
              >
                View all {store.name} coupons &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cashback Spotlight */}
      <section className="py-14 bg-gray-50" aria-label="Cashback Codes List">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-emerald-800 mb-7">
            Cashback & Exclusive Codes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allCoupons.map((coupon) => (
              <CashbackCard
                key={coupon.id}
                id={coupon.id}
                store={coupon.store}
                storeSlug={coupon.storeSlug}
                code={coupon.code}
                label={coupon.description.length > 50 ? coupon.description.slice(0, 50) + "..." : coupon.description}
                amount={coupon.discount}
                outboundUrl={coupon.outboundUrl}
                logoText={coupon.logoText}
                logoBg={coupon.logoBg}
                logoColor={coupon.logoColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts - Above Latest Savings Tips */}
      <section className="py-14 bg-white" aria-label="Latest Blog Posts">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-emerald-800">Latest Blog Posts</h2>
                <p className="text-sm text-gray-500 mt-0.5">Savings tips, deals & shopping guides</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestBlogPosts.map((post: { slug: string; title: string; description: string; date: string; featuredCode: string | null; category: string }) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="group no-underline">
                <div className="bg-gray-50 rounded-2xl overflow-hidden border-2 border-transparent hover:border-emerald-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white px-4 py-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      {post.category.replace(/-/g, " ")}
                    </span>
                    <time className="text-xs opacity-80">
                      {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </time>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug text-base">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      {post.featuredCode && (
                        <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
                          {post.featuredCode}
                        </span>
                      )}
                      <span className="text-xs text-emerald-600 font-semibold group-hover:underline">
                        Read more &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Read Blog Button */}
          <div className="mt-8 text-center">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 no-underline"
            >
              Read Our Blog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Working Codes Table (Freshness Signal) */}
      <LatestCodes />

      {/* How It Works */}
      <HowItWorks dark />

      {/* SEO Content Hub + FAQ */}
      <section className="py-16 bg-white" aria-label="UAE Coupon Guide and FAQs">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* SEO Content */}
            <div>
              <h2 className="text-2xl font-extrabold text-emerald-800 mb-5">
                Ultimate Guide to UAE Coupon Codes in 2026
              </h2>

              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">
                Why Coupon Codes Matter in the UAE
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The UAE has one of the highest online shopping penetration rates in the
                Middle East, with e-commerce sales projected to exceed AED 40 billion by
                2027. With so many shoppers moving online, coupon codes have become an
                essential tool for saving money on everyday purchases. Whether you&apos;re
                buying electronics, fashion, beauty products, or home goods, a verified
                promo code can help you save anywhere from 3% to 75% on your order.
              </p>

              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">
                Noon Coupon Codes & Cashback Offers
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Noon is the leading e-commerce platform in the UAE and KSA. Currently, the
                most effective Noon coupon code is{" "}
                <strong className="text-emerald-800">FOREVER</strong>. This code provides
                a massive <strong className="text-emerald-800">15% cashback for new
                users</strong> and a solid{" "}
                <strong className="text-emerald-800">10% cashback for existing users</strong>{" "}
                across all categories, including electronics, fashion, and home goods. If
                you are looking for alternative cashback options, we also highly recommend
                using the codes{" "}
                <strong className="text-emerald-800">GPZM</strong>,{" "}
                <strong className="text-emerald-800">ADHA10</strong>, and{" "}
                <strong className="text-emerald-800">FOREVER10</strong>. These are
                exclusive Noon cashback codes that guarantee up to 10% back on your
                purchases.
              </p>
              <p className="text-xs text-gray-400 mb-4">
                Last updated: {LAST_UPDATED} &bull;{" "}
                <Link href="/noon-coupon-code/" className="text-emerald-600 hover:text-emerald-800 no-underline underline">
                  View all Noon coupons
                </Link>
              </p>

              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">
                Namshi Discount Codes (Fashion & Lifestyle)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                For fashion enthusiasts in the GCC, Namshi is the go-to destination. To
                maximize your savings, use the Namshi promo code{" "}
                <strong className="text-emerald-800">LL44</strong>. This code is incredibly
                versatile, offering discounts ranging from{" "}
                <strong className="text-emerald-800">10% to 75% off</strong> on thousands of
                items, including sneakers, dresses, activewear, and beauty products.
              </p>
              <p className="text-xs text-gray-400 mb-4">
                Last updated: {LAST_UPDATED} &bull;{" "}
                <Link href="/namshi-coupon-code/" className="text-emerald-600 hover:text-emerald-800 no-underline underline">
                  View all Namshi coupons
                </Link>
              </p>

              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">
                Shosh Arab Promo Codes (Modest Fashion)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Shosh Arab specializes in elegant, modest fashion. To get a discount on
                their collections, apply the code{" "}
                <strong className="text-emerald-800">HH4</strong> at checkout. This
                guarantees a flat <strong className="text-emerald-800">3% discount</strong>{" "}
                on your entire order, stacking on top of their already competitive prices.
              </p>
              <p className="text-xs text-gray-400 mb-4">
                Last updated: {LAST_UPDATED} &bull;{" "}
                <Link href="/shosh-arab-coupon-code/" className="text-emerald-600 hover:text-emerald-800 no-underline underline">
                  View all Shosh Arab coupons
                </Link>
              </p>

              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">
                Bloomingdale&apos;s UAE Coupons (Luxury Shopping)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Shopping for luxury brands in the UAE? Use the Bloomingdale&apos;s coupon code{" "}
                <strong className="text-emerald-800">AB57</strong> to receive{" "}
                <strong className="text-emerald-800">up to a 15% discount</strong> on
                high-end fashion, premium beauty products, and exclusive home accessories
                available at Bloomingdale&apos;s UAE.
              </p>
              <p className="text-xs text-gray-400 mb-4">
                Last updated: {LAST_UPDATED} &bull;{" "}
                <Link href="/bloomingdales-uae-coupon/" className="text-emerald-600 hover:text-emerald-800 no-underline underline">
                  View all Bloomingdale&apos;s coupons
                </Link>
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-extrabold text-emerald-800 mb-5">
                Frequently Asked Questions
              </h2>
              <FaqAccordion items={homeFaq} />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
