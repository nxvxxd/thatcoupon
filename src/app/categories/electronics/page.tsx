import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { stores, categories, SITE_NAME, SITE_URL } from "@/lib/store-data";
import { ArrowRight, Tag, Percent, Smartphone, Monitor, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Electronics Coupon Codes UAE 2026 – Gadgets & Tech Deals | That Coupon",
  description:
    "Find the latest electronics coupon codes for UAE in 2026. Save on smartphones, laptops, gadgets, and tech accessories with verified codes for Noon and more.",
  keywords: [
    "electronics coupon codes UAE",
    "Noon coupon code",
    "tech deals UAE",
    "gadget discount UAE",
    "smartphone promo code UAE",
    "laptop coupon UAE",
    "electronics deals UAE 2026",
  ],
  openGraph: {
    title:
      "Electronics Coupon Codes UAE 2026 – Gadgets & Tech Deals | That Coupon",
    description:
      "Find the latest electronics coupon codes for UAE in 2026. Save on smartphones, laptops, gadgets with verified codes for Noon.",
    url: `${SITE_URL}/categories/electronics`,
    siteName: SITE_NAME,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/categories/electronics`,
  },
};

export default function ElectronicsCategoryPage() {
  const electronicsCategory = categories.find((c) => c.slug === "electronics")!;
  const electronicsStores = stores.filter((s) =>
    electronicsCategory.stores.includes(s.name)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Breadcrumbs
              items={[
                { label: "Categories", href: "/stores" },
                { label: "Electronics" },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Electronics Coupon Codes UAE 2026
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
              Save on smartphones, laptops, gadgets, and tech accessories with
              verified coupon codes from top UAE electronics stores.
            </p>
          </div>
        </section>

        {/* Sub-categories */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200">
              <Smartphone className="w-4 h-4" />
              Smartphones &amp; Tablets
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200">
              <Monitor className="w-4 h-4" />
              Laptops &amp; Computers
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200">
              <Headphones className="w-4 h-4" />
              Audio &amp; Accessories
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200">
              <Tag className="w-4 h-4" />
              Gaming &amp; Consoles
            </span>
          </div>
        </section>

        {/* Electronics Stores */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Electronics Stores
          </h2>
          <p className="text-gray-600 mb-8">
            {electronicsStores.length} store{electronicsStores.length === 1 ? "" : "s"} with
            verified electronics coupon codes — click to view available deals.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {electronicsStores.map((store) => (
              <Link
                key={store.slug}
                href={`/${store.slug}`}
                className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-emerald-300 transition-all duration-200"
              >
                <div className="p-6 bg-gray-50 flex items-center justify-center h-28">
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
                  <div className="flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md font-medium">
                      <Percent className="w-3 h-3" />
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

        {/* Top Coupon Highlights */}
        {electronicsStores.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 pb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Top Electronics Deals Right Now
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {electronicsStores.flatMap((store) =>
                store.coupons.slice(0, 4).map((coupon) => (
                  <div
                    key={coupon.id}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl bg-white hover:border-emerald-300 transition-colors"
                  >
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{
                        backgroundColor: coupon.logoBg,
                        color: coupon.logoColor,
                      }}
                    >
                      {coupon.logoText}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">
                        {coupon.title}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {coupon.description}
                      </p>
                    </div>
                    <Link
                      href={`/${store.slug}`}
                      className="flex-shrink-0 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-md hover:bg-emerald-100 transition-colors whitespace-nowrap"
                    >
                      {coupon.discountShort} OFF
                    </Link>
                  </div>
                ))
              )}
            </div>
          </section>
        )}

        {/* SEO Content */}
        <section className="bg-emerald-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Electronics Deals in the UAE: Save on Gadgets &amp; Tech in 2026
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The UAE is one of the biggest markets for consumer electronics in
              the Middle East, with a tech-savvy population that eagerly adopts
              the latest smartphones, laptops, gaming consoles, and smart home
              devices. Whether you&apos;re upgrading to the newest iPhone,
              building a gaming PC, or shopping for wireless earbuds, buying
              electronics online in the UAE offers incredible convenience — and
              with the right coupon code, incredible savings too.{" "}
              {SITE_NAME} is here to make sure you never pay full price for
              your tech purchases.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <Link
                href="/noon-coupon-code"
                className="text-emerald-700 font-semibold hover:underline"
              >
                Noon
              </Link>{" "}
              is the leading destination for electronics deals in the UAE,
              offering a massive catalog that spans smartphones from Apple and
              Samsung, laptops from HP, Dell, and Lenovo, gaming consoles
              including PlayStation and Xbox, and thousands of accessories.
              Their daily deals and flash sales frequently offer discounts of up
              to 50% on popular electronics, and using a verified Noon coupon
              code like FOREVER (up to 15% cashback) or GPZM (10% cashback) at
              checkout can save you even more on already-discounted items.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Timing your electronics purchase is key to getting the best deal
              in the UAE. Major shopping events like Ramadan, Eid al-Fitr, Eid
              al-Adha, UAE National Day, and the Dubai Shopping Festival are
              when retailers offer their deepest discounts on electronics. Noon
              &apos;s Yellow Friday (their version of Black Friday) is
              particularly exciting, with doorbuster deals on flagship
              smartphones and premium laptops. During these events, combining
              sale prices with cashback coupon codes can result in total savings
              of 30% to 60% on your favorite tech products.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At {SITE_NAME}, we understand that buying electronics is a
              significant investment, and every dirham saved matters. That&apos;s
              why our team verifies electronics coupon codes every single day —
              testing each one on the retailer&apos;s website to confirm
              it&apos;s still active and providing the advertised discount. We
              track all the major coupon codes for UAE electronics stores and
              update our listings in real-time. Bookmark this page to stay on
              top of the latest electronics deals, and remember: the best codes
              don&apos;t last forever, so use them while they&apos;re hot!
            </p>
          </div>
        </section>

        {/* Other Categories */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Browse Other Categories
          </h2>
          <div className="flex flex-wrap gap-4">
            {categories
              .filter((c) => c.slug !== "electronics")
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-colors"
                >
                  <Tag className="w-4 h-4" />
                  {cat.name}
                  <span className="text-gray-400">({cat.stores.length})</span>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
