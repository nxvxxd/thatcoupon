"use client";

import { useState } from "react";
import { Mail, Bell, CheckCircle2 } from "lucide-react";

interface NewsletterProps {
  variant?: "amber" | "emerald";
}

export function Newsletter({ variant = "amber" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = () => {
    if (!email || !email.includes("@")) return;
    if (whatsapp && !/^\+\d{8,15}$/.test(phone)) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setEmail("");
      setPhone("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const bgClass = variant === "amber"
    ? "bg-gradient-to-br from-amber-500 via-amber-500 to-orange-500"
    : "bg-gradient-to-br from-emerald-700 via-emerald-700 to-teal-700";

  return (
    <section className={`py-16 ${bgClass} text-white relative overflow-hidden`} aria-label="Newsletter signup">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <Mail className="w-4 h-4 text-white/80" />
          <span className="text-xs font-medium text-white/90 uppercase tracking-wider">Newsletter</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black mb-3">Never Miss a Deal</h2>
        <p className="text-sm text-white/80 mb-8 max-w-md mx-auto">
          Get the latest UAE coupon codes and exclusive offers sent directly to your inbox.
        </p>

        <div className="bg-white/[0.08] backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full py-3.5 px-5 rounded-xl text-gray-800 text-sm outline-none border-none bg-white placeholder-gray-400"
              required
              aria-label="Email address"
            />
            {whatsapp && (
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="WhatsApp Number (e.g. +971501234567)"
                className="w-full py-3.5 px-5 rounded-xl text-gray-800 text-sm outline-none border-none bg-white placeholder-gray-400"
                aria-label="WhatsApp number"
              />
            )}
            <div className="flex justify-center gap-6 flex-wrap">
              <label className="flex items-center gap-2 text-sm cursor-pointer text-white/90">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded accent-white" />
                <Mail className="w-3.5 h-3.5 text-white/60" />
                Email
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer text-white/90">
                <input
                  type="checkbox"
                  checked={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.checked)}
                  className="w-4 h-4 rounded accent-white"
                />
                <Bell className="w-3.5 h-3.5 text-white/60" />
                WhatsApp
              </label>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "sending" || status === "sent"}
              className={`w-full py-3.5 px-8 font-bold text-sm rounded-xl border-none cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 ${
                status === "sent"
                  ? "bg-emerald-500 text-white"
                  : "bg-white text-gray-900 hover:bg-gray-50 hover:shadow-lg"
              } disabled:opacity-70`}
            >
              {status === "sending" ? (
                <><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25"/><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75"/></svg> SUBSCRIBING...</>
              ) : status === "sent" ? (
                <><CheckCircle2 className="w-4 h-4" /> SUBSCRIBED!</>
              ) : (
                "Subscribe Now"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
