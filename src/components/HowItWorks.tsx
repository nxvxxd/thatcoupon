"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface HowItWorksProps {
  dark?: boolean;
}

export function HowItWorks({ dark = false }: HowItWorksProps) {
  const steps = [
    {
      icon: Search,
      title: "Browse Codes",
      description: "Find your store and choose the best coupon or cashback code from our verified list."
    },
    {
      icon: () => (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Copy Code",
      description: 'Click the "COPY CODE" button. The code is instantly saved to your clipboard.'
    },
    {
      icon: () => (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Paste & Save",
      description: "Paste the code at checkout to apply your discount or cashback instantly."
    }
  ];

  return (
    <section className={`py-14 ${dark ? "bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-600 text-white" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`text-2xl font-extrabold mb-10 text-center ${dark ? "text-white" : "text-emerald-800"}`}>
          How To Use These Coupon Codes
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative">
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-white/20 z-0" />
          {steps.map((step, i) => (
            <div key={i} className="text-center relative z-10 flex-1">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg ${dark ? "bg-white text-emerald-800" : "bg-emerald-800 text-white"}`}>
                <step.icon />
              </div>
              <div className="text-lg font-bold mb-2">{step.title}</div>
              <div className={`text-xs max-w-[200px] mx-auto ${dark ? "text-white/85" : "text-gray-600"}`}>
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
