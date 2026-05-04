"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-5 py-4 text-left font-bold text-sm text-gray-800 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer border-none"
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`w-4 h-4 text-emerald-800 transition-transform duration-300 shrink-0 ml-2 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[500px] px-5" : "max-h-0 px-5"
            }`}
          >
            <div className="py-4 text-sm text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
