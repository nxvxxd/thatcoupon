"use client";

import { useState } from "react";

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

  const bgClass = variant === "amber" ? "bg-gradient-to-br from-amber-500 to-amber-600" : "bg-gradient-to-br from-emerald-700 to-emerald-800";

  return (
    <section className={`py-14 ${bgClass} text-white`} aria-label="Newsletter signup">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-2">Never Miss a Deal</h2>
        <p className="text-sm opacity-90 mb-6">Get the latest UAE coupon codes sent directly to you.</p>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="py-3 px-5 rounded-md text-gray-800 text-sm outline-none border-none bg-white"
            required
          />
          {whatsapp && (
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="WhatsApp Number (e.g. +971501234567)"
              className="py-3 px-5 rounded-md text-gray-800 text-sm outline-none border-none bg-white"
            />
          )}
          <div className="flex justify-center gap-6 flex-wrap">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-white" />
              Email Notifications
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={whatsapp}
                onChange={(e) => setWhatsapp(e.target.checked)}
                className="accent-white"
              />
              WhatsApp Notifications
            </label>
          </div>
          <button
            onClick={handleSubmit}
            disabled={status === "sending" || status === "sent"}
            className="py-3 px-8 bg-white font-bold text-sm rounded-md border-none cursor-pointer transition-all hover:bg-emerald-800 hover:text-white disabled:opacity-70"
            style={status === "sent" ? { background: "#14B8A6", color: "white" } : variant === "amber" ? { color: "#D97706" } : { color: "#065F46" }}
          >
            {status === "sending" ? "SENDING..." : status === "sent" ? "SUBSCRIBED" : "Subscribe Now"}
          </button>
        </div>
      </div>
    </section>
  );
}
