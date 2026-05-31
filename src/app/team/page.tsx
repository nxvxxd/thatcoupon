import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, SITE_URL } from "@/lib/store-data";
import {
  Search,
  FileCheck,
  BookOpen,
  TestTube,
  Building2,
  Eye,
  PenLine,
  ClipboardCheck,
  Users,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team – Meet the Experts Behind That Coupon",
  description:
    "Meet the team behind That Coupon. Our UAE-based experts verify coupon codes daily, hunt the best deals, and create savings guides to help you save money on every purchase across the Middle East.",
  openGraph: {
    title: "Our Team – Meet the Experts Behind That Coupon",
    description:
      "Meet the team behind That Coupon. Our UAE-based experts verify coupon codes daily, hunt the best deals, and create savings guides to help you save money.",
    url: `${SITE_URL}/team/`,
    siteName: SITE_NAME,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/team/`,
  },
};

const teamMembers = [
  {
    name: "Ahmad Al Rashid",
    role: "Founder & CEO",
    initials: "AR",
    color: "from-emerald-700 to-emerald-900",
    bio: "Ahmad founded That Coupon in 2022 after years of frustration with unreliable coupon sites in the UAE. With a background in digital marketing and e-commerce, he set out to build the region's most trustworthy savings platform. Ahmad oversees the company's strategic direction and partnerships with leading retailers across the GCC.",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Content & SEO",
    initials: "SM",
    color: "from-teal-600 to-emerald-800",
    bio: "Sarah brings over 10 years of content strategy and SEO experience to That Coupon. She leads the editorial team in creating savings guides, deal roundups, and store reviews that help shoppers make informed decisions. Her data-driven approach to content has helped That Coupon become a top-ranked coupon platform in the UAE.",
  },
  {
    name: "Omar Khalil",
    role: "Deal Verification Lead",
    initials: "OK",
    color: "from-emerald-600 to-teal-700",
    bio: "Omar heads the deal verification team, ensuring every coupon code on That Coupon is tested and working before it goes live. With a meticulous approach and a passion for detail, he has built a verification process that maintains a 98%+ accuracy rate. Omar previously worked in quality assurance for a major e-commerce platform in Dubai.",
  },
  {
    name: "Fatima Al Suwaidi",
    role: "Community Manager",
    initials: "FA",
    color: "from-teal-700 to-emerald-600",
    bio: "Fatima manages the That Coupon community across social media, email, and our website. She gathers user feedback, coordinates deal submissions from our community of bargain hunters, and ensures that shopper questions are answered promptly. Her deep understanding of UAE consumer culture helps shape the deals and content we feature.",
  },
];

export default function TeamPage() {
  const teamSchema = teamMembers.map(member => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "description": member.bio,
    "worksFor": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo.svg`
    },
    "knowsAbout": ["coupon codes", "promo codes", "UAE shopping", "online savings"]
  }));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Person Schema for each team member */}
      {teamSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />

      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Breadcrumbs items={[{ label: "Team" }]} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Meet Our Team
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
              The people behind {SITE_NAME} — UAE-based experts dedicated to
              finding, verifying, and sharing the best coupon codes and deals
              across the Middle East.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            What We Do
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Our team works daily to ensure you always have access to the most
            reliable savings opportunities. Here&apos;s how we help you save:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4 p-5 bg-emerald-50 rounded-xl">
              <div className="flex-shrink-0 w-11 h-11 bg-emerald-700 rounded-lg flex items-center justify-center">
                <ClipboardCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Coupon Verification
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Every coupon code is tested directly on the retailer&apos;s
                  website before publishing. Expired codes are removed within 24
                  hours, and our verification status is updated daily.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-emerald-50 rounded-xl">
              <div className="flex-shrink-0 w-11 h-11 bg-emerald-700 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Deal Hunting</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our team scours the web for the best promotions, flash sales,
                  and exclusive offers from top UAE and GCC retailers. We
                  negotiate exclusive codes you won&apos;t find anywhere else.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-emerald-50 rounded-xl">
              <div className="flex-shrink-0 w-11 h-11 bg-emerald-700 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Savings Guides</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We create in-depth shopping guides, seasonal deal roundups, and
                  money-saving tips tailored specifically for UAE shoppers during
                  events like Ramadan, Eid, and Dubai Shopping Festival.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-emerald-50 rounded-xl">
              <div className="flex-shrink-0 w-11 h-11 bg-emerald-700 rounded-lg flex items-center justify-center">
                <TestTube className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Code Testing</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our multi-step testing process checks each code on desktop and
                  mobile, across different account types, and at various cart
                  values to ensure consistent reliability for all users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
              The {SITE_NAME} Team
            </h2>
            <p className="text-gray-600 mb-10 text-center max-w-xl mx-auto">
              A dedicated group of professionals based in the UAE, united by a
              shared mission to help shoppers save money.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-lg">
                        {member.initials}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {member.name}
                      </h3>
                      <p className="text-emerald-700 text-sm font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parent Company */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-emerald-700" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Parent Company
            </h2>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              {SITE_NAME} is operated by{" "}
              <span className="font-semibold text-gray-900">
                TC Digital Media FZ-LLC
              </span>
              , a digital media company registered in Dubai, UAE. Our mission is
              to help consumers make smarter purchasing decisions across the
              Middle East.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a UAE-registered business, we are committed to maintaining the
              highest standards of transparency, accuracy, and consumer trust.
              Our operations are headquartered in Dubai, where our team works
              closely with regional retailers to secure exclusive deals and ensure
              that every coupon code we publish meets our strict quality
              guidelines.
            </p>
          </div>
        </section>

        {/* Editorial Process */}
        <section className="bg-emerald-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
              Our Editorial Process
            </h2>
            <p className="text-gray-600 mb-10 text-center max-w-xl mx-auto">
              Every piece of content and every coupon code on {SITE_NAME} goes
              through a rigorous process before publication.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div className="bg-white rounded-xl p-5 flex-1 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4 text-emerald-700" />
                    <h3 className="font-bold text-gray-900">
                      Research &amp; Discovery
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our team monitors retailer websites, affiliate networks, and
                    community submissions around the clock. New coupon codes and
                    promotions are identified and added to our review queue as
                    soon as they become available.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div className="bg-white rounded-xl p-5 flex-1 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <TestTube className="w-4 h-4 text-emerald-700" />
                    <h3 className="font-bold text-gray-900">
                      Testing &amp; Verification
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Each coupon code is tested on the retailer&apos;s website in
                    real checkout scenarios. We test on both desktop and mobile,
                    for new and existing accounts, and at various cart values to
                    confirm the code works as described.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div className="bg-white rounded-xl p-5 flex-1 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <PenLine className="w-4 h-4 text-emerald-700" />
                    <h3 className="font-bold text-gray-900">Content Creation</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our content team writes clear, accurate descriptions for each
                    coupon code and store page. Savings guides and deal roundups
                    are crafted by experienced writers with expertise in
                    e-commerce and consumer savings, following our editorial
                    guidelines.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div className="bg-white rounded-xl p-5 flex-1 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <FileCheck className="w-4 h-4 text-emerald-700" />
                    <h3 className="font-bold text-gray-900">Editorial Review</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Before publication, all content is reviewed by our editorial
                    team for accuracy, clarity, and compliance with our quality
                    standards. We verify that all claims about discounts and
                    savings are truthful and properly sourced.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  5
                </div>
                <div className="bg-white rounded-xl p-5 flex-1 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="w-4 h-4 text-emerald-700" />
                    <h3 className="font-bold text-gray-900">
                      Ongoing Monitoring
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Published coupon codes are re-tested daily. Expired or broken
                    codes are promptly removed or updated. We also monitor user
                    feedback through{" "}
                    <Link
                      href="/contact/"
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      our contact page
                    </Link>{" "}
                    and community channels to catch issues early.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-7 h-7 text-emerald-700" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ready to Save?
            </h2>
          </div>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Our team has verified thousands of coupon codes across top UAE
            stores. Browse our curated deals and start saving on your next
            purchase today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/stores/"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Browse All Stores
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
