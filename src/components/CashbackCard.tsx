"use client";

import Link from "next/link";
import { useCopyCode } from "./hooks";
import { ExternalLink } from "lucide-react";

interface CashbackCardProps {
  id: string;
  store: string;
  storeSlug: string;
  code: string;
  label: string;
  amount: string;
  outboundUrl: string;
  logoText: string;
  logoBg: string;
  logoColor: string;
}

export function CashbackCard({
  id, store, storeSlug, code, label, amount, outboundUrl, logoText, logoBg, logoColor
}: CashbackCardProps) {
  const { copiedId, copyCode } = useCopyCode();
  const isCopied = copiedId === `cb-${id}`;

  return (
    <article className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2 border-transparent hover:border-teal-400 cursor-pointer">
      <div className="p-5 pt-5 flex items-center gap-3">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0"
          style={{ background: logoBg, color: logoColor }}
        >
          {logoText}
        </div>
        <div>
          <div className="font-bold text-base">{store}</div>
          <div className="text-xs text-gray-500">{label}</div>
        </div>
      </div>
      <div className="px-5 pb-1">
        <div className="text-2xl font-black text-teal-600">{amount}</div>
      </div>
      <div className="px-5 pb-5 flex items-center gap-2">
        <div className="flex-1 bg-gray-50 py-2.5 rounded-md font-mono font-extrabold tracking-widest text-center text-sm text-emerald-800">
          {code}
        </div>
        <button
          onClick={() => copyCode(code, `cb-${id}`)}
          className="px-4 py-2.5 bg-teal-600 text-white border-none rounded-md cursor-pointer font-bold text-xs tracking-wide transition-colors hover:bg-teal-700 whitespace-nowrap"
          style={isCopied ? { background: "#065F46" } : {}}
        >
          {isCopied ? "COPIED!" : "COPY"}
        </button>
      </div>
      <div className="px-5 pb-4">
        <a
          href={outboundUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-xs text-gray-400 hover:text-emerald-700 transition-colors flex items-center gap-1 no-underline"
          onClick={(e) => e.stopPropagation()}
        >
          Visit {store} <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
}
