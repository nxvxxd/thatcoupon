import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_URL, stores, categories } from "@/lib/store-data";
// @ts-expect-error blog-data types
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Sitemap – All Pages on That Coupon",
  description: `Browse the complete sitemap of ${SITE_NAME}. Find all store pages, coupon categories, blog posts, and informational pages in one place.`,
  alternates: {
    canonical: `${SITE_URL}/sitemap-html/`,
  },
  openGraph: {
    title: "Sitemap – All Pages on That Coupon",
    description: `Browse the complete sitemap of ${SITE_NAME}. Find all store pages, coupon categories, blog posts, and informational pages in one place.`,
    url: `${SITE_URL}/sitemap-html/`,
    siteName: SITE_NAME,
    type: "website",
  },
};

const sortedPosts = [...blogPosts].sort((a, b) =>
  a.title.localeCompare(b.title)
);

export default function SitemapHtmlPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-500 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-emerald-100">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium">Sitemap</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Sitemap
            </h1>
            <p className="mt-4 text-lg text-emerald-100 max-w-2xl">
              A complete index of every page on {SITE_NAME}. Browse store pages,
              categories, blog posts, and more.
            </p>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-600 pb-2">
                Main Pages
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/stores/", label: "All Stores" },
                  { href: "/blog/", label: "Blog" },
                  { href: "/about/", label: "About Us" },
                  { href: "/contact/", label: "Contact Us" },
                  { href: "/privacy-policy/", label: "Privacy Policy" },
                  { href: "/terms/", label: "Terms of Service" },
                  { href: "/team/", label: "Our Team" },
                  { href: "/sitemap-html/", label: "Sitemap (this page)" },
                ].map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 hover:underline font-medium text-sm py-1"
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Store Pages */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-600 pb-2">
                Store Pages
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {stores.map((store) => (
                  <li key={store.slug}>
                    <Link
                      href={`/${store.slug}/`}
                      className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 hover:underline font-medium text-sm py-1"
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      {store.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category Pages */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-600 pb-2">
                Category Pages
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/categories/${cat.slug}/`}
                      className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 hover:underline font-medium text-sm py-1"
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-600 pb-2">
                Blog Posts
              </h2>
              <ul className="grid gap-2">
                {sortedPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 hover:underline font-medium text-sm py-1"
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
