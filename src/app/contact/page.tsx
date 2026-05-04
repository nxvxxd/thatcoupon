"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Mail, MessageSquare, User, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white">
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
                      <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                        Instagram
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                        Twitter / X
                      </span>
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
                    href="/noon-coupon-code"
                    className="underline font-medium"
                  >
                    Noon
                  </Link>
                  ,{" "}
                  <Link
                    href="/namshi-coupon-code"
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
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours. In the meantime, feel free to browse our{" "}
                      <Link
                        href="/stores"
                        className="text-emerald-700 underline"
                      >
                        latest deals
                      </Link>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors text-gray-900"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors text-gray-900"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors text-gray-900 bg-white"
                      >
                        <option>General Inquiry</option>
                        <option>Report a Broken Code</option>
                        <option>Partnership / Business</option>
                        <option>Feedback / Suggestion</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us how we can help..."
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors text-gray-900 resize-vertical"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
