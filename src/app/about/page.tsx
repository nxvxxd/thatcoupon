import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { stores, SITE_NAME, SITE_URL } from "@/lib/store-data";
import { Shield, CheckCircle, Users, Target, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About That Coupon – UAE's Trusted Coupon Platform | That Coupon",
  description:
    "Learn about That Coupon, the UAE's most trusted coupon and cashback platform. Discover our mission to help shoppers save money with verified promo codes for top stores like Noon, Namshi, and more.",
  keywords: [
    "about That Coupon",
    "UAE coupon platform",
    "coupon website UAE",
    "verified promo codes UAE",
    "cashback platform UAE",
  ],
  openGraph: {
    title: "About That Coupon – UAE's Trusted Coupon Platform",
    description:
      "Learn about That Coupon, the UAE's most trusted coupon and cashback platform. Discover our mission to help shoppers save money with verified promo codes.",
    url: `${SITE_URL}/about/`,
    siteName: SITE_NAME,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/about/`,
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white">
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Breadcrumbs
              items={[{ label: "About" }]}
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              About {SITE_NAME}
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
              UAE&apos;s most trusted coupon platform — helping you save money every
              day with verified, tested promo codes.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At {SITE_NAME}, we specialise in finding, testing, and publishing verified coupon codes and cashback offers for the most popular online stores in the UAE and GCC region. Our services include daily code verification across more than 100 partner stores, in-depth savings guides and shopping tips published on our blog, price monitoring during major sale events like Ramadan, Eid, and Yellow Friday, and personalised deal alerts for our community of over 200,000 monthly shoppers. We work directly with retailers including Noon, Namshi, Shosh Arab, and Bloomingdale&apos;s UAE to bring you exclusive discounts that you will not find anywhere else.
          </p>
        </section>

        {/* Our Story */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {SITE_NAME} was founded with a simple yet powerful mission: to make
            online shopping in the UAE more affordable for everyone. In a region
            where e-commerce is growing at an unprecedented pace, we noticed that
            shoppers were spending hours searching for valid coupon codes across
            dozens of websites, only to find that most of them were expired or
            fake. We decided to change that by building a platform that shoppers
            could truly trust — one where every code is verified, tested, and
            guaranteed to work.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            What started as a small project by a team of enthusiastic bargain
            hunters in Dubai has grown into the UAE&apos;s leading coupon and
            cashback destination. We now serve hundreds of thousands of shoppers
            each month, helping them save millions of dirhams on their online
            purchases. From electronics and fashion to beauty and home goods, we
            partner with the biggest names in Middle Eastern e-commerce —
            including{" "}
            <Link
              href={`/${stores[0].slug}`}
              className="text-emerald-700 font-semibold hover:underline"
            >
              Noon
            </Link>
            ,{" "}
            <Link
              href={`/${stores[1].slug}`}
              className="text-emerald-700 font-semibold hover:underline"
            >
              Namshi
            </Link>
            ,{" "}
            <Link
              href={`/${stores[2].slug}`}
              className="text-emerald-700 font-semibold hover:underline"
            >
              Shosh Arab
            </Link>
            , and{" "}
            <Link
              href={`/${stores[3].slug}`}
              className="text-emerald-700 font-semibold hover:underline"
            >
              Bloomingdale&apos;s UAE
            </Link>{" "}
            — to bring you the best deals available anywhere online.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team is based in the UAE and understands the local shopping
            landscape inside out. We know when Ramadan sales start, which stores
            offer the best National Day deals, and how to maximize savings
            during Dubai Shopping Festival. This local expertise is what sets us
            apart from generic international coupon websites that don&apos;t
            understand the nuances of shopping in the GCC region. Every deal we
            feature is hand-selected and tailored specifically for UAE shoppers.
          </p>
        </section>

        {/* Our Mission */}
        <section className="bg-emerald-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Save You Money
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our primary goal is to put money back in your pocket. Every
                    coupon code on {SITE_NAME} is tested by our team before it
                    goes live. We verify codes daily and remove expired ones
                    within 24 hours, so you never waste time on a dead deal. On
                    average, our users save over AED 150 per month by using our
                    verified coupon codes at checkout. Whether you&apos;re
                    buying a new smartphone on Noon or updating your wardrobe on
                    Namshi, we make sure you get the best possible price every
                    single time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Build Trust
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Trust is the foundation of everything we do. Unlike many
                    coupon sites that flood their pages with hundreds of
                    unverified codes, we take a quality-first approach. We only
                    list codes that we have personally tested and confirmed to
                    be working. Our transparency report shows real-time
                    verification status for every code, and we clearly mark the
                    date each code was last tested. This commitment to honesty
                    has earned us the trust of over 200,000 monthly shoppers who
                    rely on {SITE_NAME} for their savings needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Keep It Simple
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We believe saving money should be effortless, not
                    complicated. That&apos;s why we&apos;ve designed our
                    platform to be clean, fast, and intuitive. No pop-ups, no
                    misleading buttons, no forced sign-ups — just click a code,
                    copy it, and use it at checkout. Our one-click copy feature
                    works seamlessly on both desktop and mobile devices, so you
                    can grab a deal in seconds whether you&apos;re at your desk
                    or browsing on the go. We also provide clear instructions
                    for using each coupon code, so there&apos;s never any
                    confusion.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Support the Community
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We&apos;re more than just a coupon website — we&apos;re a
                    community of smart shoppers. We regularly share money-saving
                    tips, shopping guides, and seasonal deal roundups through our
                    blog and social media channels. During major shopping events
                    like Ramadan, Eid, and Dubai Shopping Festival, we publish
                    comprehensive deal guides that help our users plan their
                    shopping strategies and maximize their savings. We also
                    partner with local charities, donating a portion of our
                    revenue to support education and food security initiatives
                    across the UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Team
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Behind {SITE_NAME} is a passionate team of deal hunters, tech
            enthusiasts, and consumer advocates based in Dubai, UAE. Our team
            combines deep expertise in e-commerce, digital marketing, and
            software development with a genuine love for finding great deals.
            Every member of our team is an avid online shopper who understands
            the frustration of finding an expired coupon code at checkout — and
            that shared experience drives our commitment to always providing
            working, verified codes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our operations team works around the clock to test and verify coupon
            codes from over 100 partner stores. Each code goes through a
            multi-step verification process: first, we check the code directly
            on the store&apos;s website; then we cross-reference it with the
            store&apos;s official promotions; and finally, we monitor user
            feedback to catch any issues early. This rigorous process ensures
            that our verification accuracy rate stays above 98%, making{" "}
            {SITE_NAME} one of the most reliable coupon platforms in the
            Middle East.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our technology team has built a robust platform that automatically
            checks code validity, tracks expiration dates, and sends instant
            alerts when a code is about to expire. We also use data analytics to
            identify the best performing codes and surface them prominently on
            our site. This combination of human expertise and smart technology
            means that when you visit {SITE_NAME}, you&apos;re always seeing the
            most current, most valuable deals available — no sorting through
            expired junk required.
          </p>
        </section>

        {/* Trust Signals */}
        <section className="bg-emerald-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Shoppers Trust Us
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Users className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
                <p className="text-2xl font-black text-gray-900">200K+</p>
                <p className="text-sm text-gray-600">Monthly Shoppers</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
                <p className="text-2xl font-black text-gray-900">98%+</p>
                <p className="text-sm text-gray-600">Code Accuracy</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Shield className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
                <p className="text-2xl font-black text-gray-900">100+</p>
                <p className="text-sm text-gray-600">Partner Stores</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Zap className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
                <p className="text-2xl font-black text-gray-900">Daily</p>
                <p className="text-sm text-gray-600">Code Verification</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Start Saving Today
          </h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Browse our verified coupon codes for top UAE stores and start saving
            on your next purchase. No sign-up required.
          </p>
          <Link
            href="/stores/"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Browse All Stores
          </Link>
        </section>

        {/* Parent Company */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Operated by TC Digital Media FZ-LLC</h2>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              That Coupon is operated by TC Digital Media FZ-LLC, a digital media company registered in Dubai, UAE.
              Our mission is to help consumers make smarter purchasing decisions across the Middle East by providing
              accurate, verified, and up-to-date coupon codes and savings guides.
            </p>
          </div>
        </section>
      </main>
  );
}
