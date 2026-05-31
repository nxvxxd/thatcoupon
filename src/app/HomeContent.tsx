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
import { BookOpen, ArrowRight, Tag, Users, Clock, TrendingUp } from "lucide-react";

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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 md:pt-28 md:pb-20 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90">Updated daily with verified codes</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight leading-[1.1] text-white">
            Save More, Shop Smarter
            <br />
            in the{" "}
            <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
              UAE &amp; GCC
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Verified coupons &amp; exclusive cashback codes for Noon, Namshi, Shosh Arab, and
            Bloomingdale&apos;s — all tested and updated daily.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <form onSubmit={(e) => e.preventDefault()} className="relative group">
              <div className="flex items-center bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden focus-within:ring-4 focus-within:ring-emerald-400/30 transition-all">
                <div className="pl-5 pr-3 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for a store or code (e.g. Noon, LL44)..."
                  className="flex-1 py-4 pr-2 text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none"
                  id="searchInput"
                  aria-label="Search for stores or coupon codes"
                />
                <button
                  type="submit"
                  className="m-2 py-3 px-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-none rounded-xl text-sm font-bold cursor-pointer transition-all hover:from-emerald-500 hover:to-emerald-600 hover:shadow-lg"
                >
                  Find Deals
                </button>
              </div>
            </form>
          </div>

          {/* Trending Codes */}
          <div>
            <p className="text-xs text-white/60 font-medium uppercase tracking-wider mb-4">
              Top Verified Codes Right Now
            </p>
            <div className="flex justify-center gap-3 overflow-x-auto pb-2 px-2">
              {topCoupons.map((c) => (
                <Link
                  key={c.id}
                  href={`/${c.storeSlug}/`}
                  className="bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-xl px-4 py-3 flex items-center gap-3 min-w-[160px] cursor-pointer transition-all duration-300 hover:bg-white/[0.15] hover:-translate-y-0.5 no-underline text-white group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-extrabold text-[9px] shrink-0 shadow-md"
                    style={{ background: c.logoBg, color: c.logoColor }}
                  >
                    {c.logoText}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{c.store}</div>
                    <div className="text-amber-300 text-[11px] font-mono font-bold">
                      {c.code}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Tag, value: "200K+", label: "Coupons Used", color: "text-emerald-600" },
              { icon: Users, value: "50K+", label: "Happy Shoppers", color: "text-teal-600" },
              { icon: Clock, value: "Daily", label: "Code Updates", color: "text-amber-600" },
              { icon: TrendingUp, value: "98%+", label: "Success Rate", color: "text-emerald-600" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-lg font-black text-gray-900 leading-tight">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Coupons */}
      <section className="py-16 bg-gray-50/50" aria-label="Top Verified Coupon Codes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Top Verified Coupon Codes
              </h2>
              <p className="text-sm text-gray-500 mt-1">Tested and confirmed working today</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {topCoupons.map((coupon) => (
              <CouponCard key={coupon.id} {...coupon} />
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {stores.map((store) => (
              <Link
                key={store.slug}
                href={`/${store.slug}/`}
                className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:text-emerald-900 font-semibold transition-colors no-underline bg-emerald-50 hover:bg-emerald-100 px-4 py-2.5 rounded-xl"
              >
                View all {store.name} coupons <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cashback Spotlight */}
      <section className="py-16" aria-label="Cashback Codes List">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            Cashback &amp; Exclusive Codes
          </h2>
          <p className="text-sm text-gray-500 mb-8">All verified and ready to use at checkout</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gray-50/50" aria-label="Latest Blog Posts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">Latest Blog Posts</h2>
                <p className="text-sm text-gray-500 mt-0.5">Savings tips, deals &amp; shopping guides</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestBlogPosts.map((post: { slug: string; title: string; description: string; date: string; featuredCode: string | null; category: string }) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="group no-underline">
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-emerald-800 to-teal-700 text-white px-5 py-3.5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {post.category.replace(/-/g, " ")}
                    </span>
                    <time className="text-xs text-white/70">
                      {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </time>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 mb-2.5 group-hover:text-emerald-700 transition-colors leading-snug text-[16px]">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2.5">
                      {post.featuredCode && (
                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-lg border border-emerald-100">
                          {post.featuredCode}
                        </span>
                      )}
                      <span className="text-xs text-emerald-600 font-semibold group-hover:underline flex items-center gap-1">
                        View full guide <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-700/20 hover:-translate-y-0.5 no-underline"
            >
              Read Our Blog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Working Codes Table */}
      <LatestCodes />

      {/* How It Works */}
      <HowItWorks dark />

      {/* SEO Content Hub + FAQ */}
      <section className="py-16" aria-label="UAE Coupon Guide and FAQs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* SEO Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                Ultimate Guide to UAE Coupon Codes in 2026
              </h2>

              <h3 className="text-lg font-bold text-gray-800 mt-8 mb-3">
                Why Coupon Codes Matter in the UAE
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                The UAE has one of the highest online shopping penetration rates in the
                Middle East, with e-commerce sales projected to exceed AED 40 billion by
                2027. With so many shoppers moving online, coupon codes have become an
                essential tool for saving money on everyday purchases. Whether you&apos;re
                buying electronics, fashion, beauty products, or home goods, a verified
                promo code can help you save anywhere from 3% to 75% on your order.
              </p>

              <h3 className="text-lg font-bold text-gray-800 mt-8 mb-3">
                Noon Coupon Codes &amp; Cashback Offers
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Noon is the leading e-commerce platform in the UAE and KSA. Currently, the
                most effective Noon coupon code is{" "}
                <strong className="text-emerald-700">FOREVER</strong>. This code provides
                a massive <strong className="text-emerald-700">15% cashback for new
                users</strong> and a solid{" "}
                <strong className="text-emerald-700">10% cashback for existing users</strong>{" "}
                across all categories, including electronics, fashion, and home goods. If
                you are looking for alternative cashback options, we also highly recommend
                using the codes{" "}
                <strong className="text-emerald-700">GPZM</strong>,{" "}
                <strong className="text-emerald-700">ADHA10</strong>, and{" "}
                <strong className="text-emerald-700">FOREVER10</strong>. These are
                exclusive Noon cashback codes that guarantee up to 10% back on your
                purchases.
              </p>
              <p className="text-xs text-gray-400 mb-5">
                Last updated: {LAST_UPDATED} &bull;{" "}
                <Link href="/noon-coupon-code/" className="text-emerald-600 hover:text-emerald-800 no-underline underline">
                  View all Noon coupons
                </Link>
              </p>

              <h3 className="text-lg font-bold text-gray-800 mt-8 mb-3">
                Namshi Discount Codes (Fashion &amp; Lifestyle)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                For fashion enthusiasts in the GCC, Namshi is the go-to destination. To
                maximize your savings, use the Namshi promo code{" "}
                <strong className="text-emerald-700">LL44</strong>. This code is incredibly
                versatile, offering discounts ranging from{" "}
                <strong className="text-emerald-700">10% to 75% off</strong> on thousands of
                items, including sneakers, dresses, activewear, and beauty products.
              </p>
              <p className="text-xs text-gray-400 mb-5">
                Last updated: {LAST_UPDATED} &bull;{" "}
                <Link href="/namshi-coupon-code/" className="text-emerald-600 hover:text-emerald-800 no-underline underline">
                  View all Namshi coupons
                </Link>
              </p>

              <h3 className="text-lg font-bold text-gray-800 mt-8 mb-3">
                Shosh Arab Promo Codes (Modest Fashion)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Shosh Arab specializes in elegant, modest fashion. To get a discount on
                their collections, apply the code{" "}
                <strong className="text-emerald-700">HH4</strong> at checkout. This
                guarantees a flat <strong className="text-emerald-700">3% discount</strong>{" "}
                on your entire order, stacking on top of their already competitive prices.
              </p>
              <p className="text-xs text-gray-400 mb-5">
                Last updated: {LAST_UPDATED} &bull;{" "}
                <Link href="/shosh-arab-coupon-code/" className="text-emerald-600 hover:text-emerald-800 no-underline underline">
                  View all Shosh Arab coupons
                </Link>
              </p>

              <h3 className="text-lg font-bold text-gray-800 mt-8 mb-3">
                Bloomingdale&apos;s UAE Coupons (Luxury Shopping)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Shopping for luxury brands in the UAE? Use the Bloomingdale&apos;s coupon code{" "}
                <strong className="text-emerald-700">AB57</strong> to receive{" "}
                <strong className="text-emerald-700">up to a 15% discount</strong> on
                high-end fashion, premium beauty products, and exclusive home accessories
                available at Bloomingdale&apos;s UAE.
              </p>
              <p className="text-xs text-gray-400 mb-5">
                Last updated: {LAST_UPDATED} &bull;{" "}
                <Link href="/bloomingdales-uae-coupon/" className="text-emerald-600 hover:text-emerald-800 no-underline underline">
                  View all Bloomingdale&apos;s coupons
                </Link>
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
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
