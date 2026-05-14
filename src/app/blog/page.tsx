import type { Metadata } from "next";
import Link from "next/link";
import { stores } from "@/lib/store-data";
import { SITE_NAME } from "@/lib/store-data";
// @ts-expect-error blog-data types
import { blogPosts as allBlogPosts, getLatestPosts, blogCategories } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog - UAE Coupon Tips, Deals & Savings Guides | That Coupon",
  description:
    "Expert coupon tips, deal guides, and savings strategies for Noon, Namshi, and more in the UAE. Stay updated with the latest promo codes and shopping hacks.",
  alternates: { canonical: "https://thatcoupon.com/blog" },
};

const categories = Object.entries(blogCategories);

export default function BlogPage() {
  const latestPosts = getLatestPosts(6);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 py-14 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
            Coupon Tips & Savings Guides
          </h1>
          <p className="text-lg opacity-90 max-w-xl mx-auto">
            Expert advice on saving money with coupon codes in the UAE. Updated daily by our team.
          </p>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-14 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-emerald-800 mb-8">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block no-underline">
                <div className="bg-gray-50 rounded-2xl overflow-hidden border-2 border-transparent hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                  <div className="bg-emerald-800 text-white px-5 py-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      {categories.find(([k]) => k === post.category)?.[1]?.name || post.category}
                    </span>
                    <time className="text-xs opacity-80">
                      {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </time>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">
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
            </article>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-emerald-800 mb-8">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map(([key, cat]) => {
              const count = allBlogPosts.filter((p: { category: string }) => p.category === key).length;
              return (
                <Link
                  key={key}
                  href={`#${key}`}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all no-underline group"
                >
                  <h3 className="font-bold text-gray-900 group-hover:text-emerald-700 transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{cat.description}</p>
                  <span className="text-xs font-semibold text-emerald-600">
                    {count} article{count !== 1 ? "s" : ""}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Posts by Category */}
      <section className="py-14 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-emerald-800 mb-8">
          All Articles
        </h2>
        {categories.map(([key, cat]) => {
          const catPosts = allBlogPosts.filter((p: { category: string }) => p.category === key);
          if (catPosts.length === 0) return null;
          return (
            <div key={key} id={key} className="mb-12 last:mb-0">
              <h3 className="text-xl font-bold text-gray-900 mb-5 pb-3 border-b-2 border-emerald-200">
                {cat.name}
              </h3>
              <div className="space-y-3">
                {catPosts.map((post: { slug: string; title: string; date: string; description: string; featuredCode: string | null }) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors no-underline group"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors mb-1">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 truncate">{post.description}</p>
                    </div>
                    <div className="shrink-0 flex flex-col items-end gap-1">
                      <time className="text-xs text-gray-400">
                        {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                      </time>
                      {post.featuredCode && (
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {post.featuredCode}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
