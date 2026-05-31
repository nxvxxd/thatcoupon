import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { stores, categories, SITE_NAME, SITE_URL } from "@/lib/store-data";
import { ArrowRight, Tag, Percent, Shirt, Gem, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Fashion Coupon Codes UAE 2026 – Clothing, Shoes & Accessories | That Coupon",
  description:
    "Find the latest fashion coupon codes for UAE in 2026. Save on clothing, shoes, accessories, and modest fashion with verified codes for Namshi, Shosh Arab, Bloomingdale's, and more.",
  keywords: [
    "fashion coupon codes UAE",
    "clothing promo code UAE",
    "shoes discount UAE",
    "Namshi coupon",
    "Bloomingdale's coupon UAE",
    "modest fashion coupon",
    "fashion deals UAE 2026",
  ],
  openGraph: {
    title:
      "Fashion Coupon Codes UAE 2026 – Clothing, Shoes & Accessories | That Coupon",
    description:
      "Find the latest fashion coupon codes for UAE in 2026. Save on clothing, shoes, accessories with verified codes for Namshi, Shosh Arab, Bloomingdale's.",
    url: `${SITE_URL}/categories/fashion`,
    siteName: SITE_NAME,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/categories/fashion`,
  },
};

export default function FashionCategoryPage() {
  const fashionCategory = categories.find((c) => c.slug === "fashion")!;
  const fashionStores = stores.filter((s) =>
    fashionCategory.stores.includes(s.name)
  );

  return (
    <main className="bg-white">
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Breadcrumbs
              items={[
                { label: "Categories", href: "/stores" },
                { label: "Fashion" },
              ]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Fashion Coupon Codes UAE 2026
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
              Save on clothing, shoes, accessories, and modest fashion with
              verified coupon codes from top UAE stores.
            </p>
          </div>
        </section>

        {/* Sub-categories */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200">
              <Shirt className="w-4 h-4" />
              Clothing &amp; Apparel
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200">
              <Gem className="w-4 h-4" />
              Shoes &amp; Sneakers
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200">
              <Tag className="w-4 h-4" />
              Accessories &amp; Bags
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200">
              <Sparkles className="w-4 h-4" />
              Modest Fashion
            </span>
          </div>
        </section>

        {/* Fashion Stores */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Fashion Stores
          </h2>
          <p className="text-gray-600 mb-8">
            {fashionStores.length} stores with verified fashion coupon codes —
            click any store to view available deals.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fashionStores.map((store) => (
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

        {/* SEO Content */}
        <section className="bg-emerald-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Fashion Deals in the UAE: Your Complete Guide for 2026
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The UAE fashion scene is one of the most vibrant and diverse in
              the Middle East, and online shopping has transformed how residents
              and visitors build their wardrobes. From luxury designer brands at{" "}
              <Link
                href="/bloomingdales-uae-coupon"
                className="text-emerald-700 font-semibold hover:underline"
              >
                Bloomingdale&apos;s UAE
              </Link>{" "}
              to trendy streetwear and sneakers on{" "}
              <Link
                href="/namshi-coupon-code"
                className="text-emerald-700 font-semibold hover:underline"
              >
                Namshi
              </Link>
              , there&apos;s no shortage of options for the style-conscious
              shopper. But with so many online retailers competing for your
              attention, how do you make sure you&apos;re getting the best price?
              That&apos;s where {SITE_NAME} comes in — we track and verify the
              best fashion coupon codes in the UAE so you never overpay for your
              favorite brands.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Using a fashion coupon code at checkout can save you anywhere from
              3% to 75% on your purchase, depending on the store and the current
              promotion. For example, the Namshi discount code LL44 regularly
              offers discounts ranging from 10% to 75% off on clothing, shoes,
              and accessories from over 500 global and regional brands. The
              Bloomingdale&apos;s coupon code AB57 provides up to 15% off luxury
              fashion, making high-end designer brands significantly more
              affordable. Even a small discount like the Shosh Arab promo code
              HH4 (3% off modest fashion) adds up over time, especially when
              combined with seasonal sale prices.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The best time to shop for fashion in the UAE is during major
              seasonal events like Ramadan, Eid al-Fitr, Eid al-Adha, UAE
              National Day, and the Dubai Shopping Festival. During these
              periods, retailers offer their deepest discounts of the year, and
              stacking a verified coupon code on top of already-reduced sale
              prices can result in extraordinary savings. For modest fashion
              shoppers, the Ramadan and Eid collections at stores like Shosh
              Arab feature beautifully crafted abayas and kaftans at promotional
              prices — and using a coupon code at checkout makes the deal even
              sweeter.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At {SITE_NAME}, we verify every fashion coupon code daily to
              ensure it&apos;s still active and working. Our team personally
              tests each code on the retailer&apos;s website before listing it
              on our platform. If a code stops working, we remove it within 24
              hours. This commitment to accuracy means you can shop with
              confidence, knowing that the code you copied from {SITE_NAME} will
              work at checkout. Bookmark this page and check back regularly for
              new fashion deals and seasonal promotions.
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
              .filter((c) => c.slug !== "fashion")
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
  );
}
