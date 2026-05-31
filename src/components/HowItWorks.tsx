"use client";

import { Search, Copy, ShoppingBag } from "lucide-react";

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
      icon: Copy,
      title: "Copy Code",
      description: 'Click the "COPY CODE" button. The code is instantly saved to your clipboard.'
    },
    {
      icon: ShoppingBag,
      title: "Paste & Save",
      description: "Paste the code at checkout to apply your discount or cashback instantly."
    }
  ];

  return (
    <section className={`py-16 ${dark ? "bg-gradient-to-br from-gray-900 via-emerald-900 to-emerald-800 text-white relative overflow-hidden" : "bg-gray-50"}`}>
      {dark && (
        <>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[80px]" />
        </>
      )}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 ${dark ? "relative z-10" : ""}`}>
        <div className="text-center mb-12">
          <h2 className={`text-2xl md:text-3xl font-black mb-3 ${dark ? "text-white" : "text-gray-900"}`}>
            How To Use These Coupon Codes
          </h2>
          <p className={`text-sm ${dark ? "text-white/70" : "text-gray-500"}`}>
            Three simple steps to start saving on every purchase
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 relative">
          {/* Connector Line */}
          <div className={`hidden md:block absolute top-16 left-[22%] right-[22%] h-[2px] ${dark ? "bg-white/10" : "bg-emerald-200"}`} />

          {steps.map((step, i) => (
            <div key={i} className="text-center relative z-10 flex-1">
              {/* Step Number */}
              <div className={`text-[11px] font-bold uppercase tracking-widest mb-4 ${dark ? "text-emerald-400/60" : "text-emerald-600/60"}`}>
                Step {i + 1}
              </div>
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform hover:scale-110 ${
                dark
                  ? "bg-white/10 backdrop-blur-sm text-white shadow-lg shadow-black/20"
                  : "bg-emerald-700 text-white shadow-lg shadow-emerald-700/20"
              }`}>
                <step.icon className="w-7 h-7" />
              </div>
              <div className={`text-lg font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>{step.title}</div>
              <div className={`text-sm max-w-[220px] mx-auto leading-relaxed ${dark ? "text-white/70" : "text-gray-500"}`}>
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
