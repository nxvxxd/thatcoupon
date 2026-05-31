import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/store-data";
import { CopyButton } from "@/components/CopyButton";
// @ts-expect-error blog-data types
import { getPostBySlug, getRelatedPosts, blogPosts as allBlogPosts, blogCategories } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allBlogPosts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}/`,
    },
  };
}

const categories = Object.entries(blogCategories);

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h1>
          <Link href="/blog/" className="text-emerald-600 hover:underline">
            &larr; Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const categoryName = categories.find(([k]) => k === post.category)?.[1]?.name || post.category;

  // Split content into paragraphs
  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <main className="min-h-screen bg-white">
      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: new Date().toISOString().split('T')[0],
            image: `${SITE_URL}/logo.svg`,
            author: {
              "@type": "Person",
              "name": "Sarah Mitchell",
              "jobTitle": "Head of Content & SEO",
              "url": `${SITE_URL}/team/`,
              "worksFor": {
                "@type": "Organization",
                "name": SITE_NAME,
                "url": SITE_URL,
              },
            },
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL + "/",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo.svg`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/blog/${post.slug}/`,
            },
            ...(post.schemaFaq?.length > 0 && {
              mainEntity: post.schemaFaq.map((faq: { question: string; answer: string }) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }),
        }}
      />
      {/* FAQPage Schema (separate block) */}
      {post.schemaFaq?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.schemaFaq.map((faq: { question: string; answer: string }) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      )}
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: SITE_URL + "/blog/" },
              { "@type": "ListItem", position: 3, name: categoryName, item: `${SITE_URL}/blog/` },
              { "@type": "ListItem", position: 4, name: post.title, item: `${SITE_URL}/blog/${post.slug}/` },
            ],
          }),
        }}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 py-12 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm opacity-80 mb-4">
            <Link href="/" className="hover:text-white no-underline text-white/80 hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog/" className="hover:text-white no-underline text-white/80 hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-amber-300">{categoryName}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm opacity-90">
            <time>
              {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </time>
            <span className="w-1 h-1 bg-white/50 rounded-full" />
            <span>By <a href="/team/" className="hover:underline text-white">Sarah Mitchell</a></span>
            <span className="w-1 h-1 bg-white/50 rounded-full" />
            <span>Head of Content &amp; SEO</span>
            {post.featuredCode && (
              <>
                <span className="w-1 h-1 bg-white/50 rounded-full" />
                <span className="bg-amber-400 text-emerald-900 font-bold px-2.5 py-0.5 rounded-full text-xs">
                  Code: {post.featuredCode}
                </span>
              </>
            )}
          </div>
          <p className="mt-4 text-lg opacity-90 max-w-2xl">{post.description}</p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <article className="flex-1 max-w-none">
            <div className="prose prose-lg prose-gray max-w-none">
              {paragraphs.map((para, i) => {
                if (para.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-xl font-bold text-gray-900 mt-10 mb-4">
                      {para.replace("## ", "")}
                    </h2>
                  );
                }
                if (para.startsWith("**") && para.endsWith("**")) {
                  return (
                    <p key={i} className="text-base font-semibold text-gray-800 my-3">
                      {para.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (para.startsWith("- ") || para.startsWith("* ")) {
                  const items = para.split("\n");
                  return (
                    <ul key={i} className="list-disc pl-6 space-y-2 text-gray-700 my-4">
                      {items.map((item, j) => (
                        <li key={j} dangerouslySetInnerHTML={{
                          __html: item.replace(/^[-*]\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        }} />
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{
                    __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  }} />
                );
              })}
            </div>

            {/* Coupon Code CTA Box */}
            {post.featuredCode && (
              <div className="mt-10 bg-gradient-to-r from-emerald-50 to-amber-50 border-2 border-emerald-200 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-emerald-800 mb-2">
                  Use Code: {post.featuredCode}
                </h3>
                <p className="text-sm text-gray-600 mb-4">Copy this code and paste it at Noon checkout</p>
                <div className="inline-flex items-center gap-3">
                  <code className="bg-white border-2 border-dashed border-emerald-400 text-emerald-800 font-mono font-black text-lg px-5 py-2.5 rounded-lg tracking-widest">
                    {post.featuredCode}
                  </code>
                  <CopyButton code={post.featuredCode} />
                </div>
                <a
                  href="https://www.noon.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block mt-3 text-sm text-emerald-600 hover:text-emerald-800 font-semibold no-underline hover:underline"
                >
                  Shop on Noon &rarr;
                </a>
              </div>
            )}

            {/* Affiliate Disclosure */}
            <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Disclosure:</strong> That Coupon may earn a commission when you click on links and make purchases. This does not affect our editorial integrity — we only recommend verified codes that provide real value. See our <a href="/privacy-policy/" className="underline hover:text-amber-900">Privacy Policy</a> and <a href="/terms/" className="underline hover:text-amber-900">Terms of Service</a> for details.
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6 flex gap-4 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-teal-600 to-emerald-800 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SM</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Sarah Mitchell</h3>
                <p className="text-emerald-700 text-sm font-medium">Head of Content &amp; SEO</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">Sarah brings over 10 years of content strategy and SEO experience. She leads the editorial team at That Coupon, creating savings guides and deal roundups that help UAE shoppers make informed decisions and save money on every purchase.</p>
                <a href="/team/" className="inline-block mt-2 text-sm text-emerald-700 font-semibold hover:underline">Meet the full team &rarr;</a>
              </div>
            </div>

            {/* FAQ Section */}
            {post.schemaFaq && post.schemaFaq.length > 0 && (
              <section className="mt-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-emerald-200">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {post.schemaFaq.map((faq: { question: string; answer: string }, idx: number) => (
                    <details
                      key={idx}
                      className="bg-gray-50 rounded-xl p-5 group cursor-pointer"
                    >
                      <summary className="font-semibold text-gray-900 list-none flex items-center justify-between">
                        {faq.question}
                        <span className="text-emerald-600 text-xl group-open:rotate-180 transition-transform">&darr;</span>
                      </summary>
                      <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Featured Code */}
              {post.featuredCode && (
                <div className="bg-emerald-800 text-white rounded-2xl p-5 text-center">
                  <p className="text-xs uppercase tracking-wide opacity-80 mb-2">Featured Code</p>
                  <code className="text-2xl font-black tracking-widest block mb-2">{post.featuredCode}</code>
                  <a
                    href="https://www.noon.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-block bg-white text-emerald-800 font-bold text-sm px-4 py-2 rounded-lg mt-2 no-underline hover:bg-gray-100 transition-colors"
                  >
                    Shop Now
                  </a>
                </div>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Related Articles</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((rp: { slug: string; title: string; date: string }) => (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}/`}
                        className="block no-underline group"
                      >
                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors leading-snug">
                          {rp.title}
                        </h4>
                        <time className="text-xs text-gray-400 mt-1 block">
                          {new Date(rp.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                        </time>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blog */}
              <Link
                href="/blog/"
                className="block text-center bg-gray-100 text-gray-700 font-semibold text-sm px-4 py-3 rounded-xl hover:bg-gray-200 transition-colors no-underline"
              >
                &larr; All Articles
              </Link>
            </div>
          </aside>
        </div>
      </div>
      </main>
    </>
  );
}
