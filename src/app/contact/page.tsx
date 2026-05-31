import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, User } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, SITE_URL } from "@/lib/store-data";

export const metadata: Metadata = {
  title: "Contact Us – That Coupon",
  description:
    "Contact the That Coupon team for questions about coupon codes, partnerships, or feedback. We typically respond within 24 hours. Email support@thatcoupon.com or use our contact form.",
  keywords: [
    "contact That Coupon",
    "That Coupon support",
    "coupon code help UAE",
    "partnership inquiry",
  ],
  openGraph: {
    title: "Contact Us – That Coupon",
    description:
      "Have a question about a coupon code or want to partner with us? Get in touch with the That Coupon team.",
    url: `${SITE_URL}/contact/`,
    siteName: SITE_NAME,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white">
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Breadcrumbs items={[{ label: "Contact" }]} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Contact Us
            </h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
              Have a question, suggestion, or partnership inquiry? We&apos;d love
              to hear from you. Our team typically responds within 24 hours.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you&apos;re a shopper with a question about a coupon
                code, a store looking to partner with us, or a brand wanting to
                reach UAE consumers, we&apos;re here to help. Choose the method
                that works best for you and we&apos;ll get back to you as soon
                as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 text-sm">
                      support@thatcoupon.com
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      For general inquiries and support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Partnerships
                    </h3>
                    <p className="text-gray-600 text-sm">
                      partners@thatcoupon.com
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      For store partnerships and affiliate inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Social Media</h3>
                    <div className="flex gap-3 mt-2">
                      <a href="https://instagram.com/thatcoupon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-emerald-700 hover:underline">
                        Instagram
                      </a>
                      <a href="https://twitter.com/thatcoupon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-emerald-700 hover:underline">
                        Twitter / X
                      </a>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">
                      Follow us for daily deal alerts
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                <h3 className="font-semibold text-emerald-900 mb-2">
                  FAQ &amp; Help
                </h3>
                <p className="text-sm text-emerald-800">
                  Looking for quick answers? Check our store pages for detailed
                  FAQ sections about using coupon codes on{" "}
                  <Link
                    href="/noon-coupon-code/"
                    className="underline font-medium"
                  >
                    Noon
                  </Link>
                  ,{" "}
                  <Link
                    href="/namshi-coupon-code/"
                    className="underline font-medium"
                  >
                    Namshi
                  </Link>
                  , and more. Most questions are answered there!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
  );
}
