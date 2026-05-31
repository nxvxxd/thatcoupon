"use client";

import Link from "next/link";
import { useCopyCode } from "./hooks";
import { ExternalLink, Copy, CheckCircle2, ArrowRight } from "lucide-react";

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
    <article className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl border border-gray-100 hover:border-emerald-200 cursor-pointer">
      {/* Top */}
      <div className="p-5 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-[9px] shadow-md shrink-0"
            style={{ background: logoBg, color: logoColor }}
          >
            {logoText}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-gray-900 text-[15px] truncate">{store}</div>
            <div className="text-xs text-gray-500 truncate">{label}</div>
          </div>
        </div>
        <div className="text-2xl font-black text-teal-600 mb-1">{amount}</div>
      </div>

      {/* Code + Actions */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 bg-gray-50 border-2 border-dashed rounded-xl py-2.5 font-mono font-extrabold tracking-[0.15em] text-center text-sm text-emerald-800">
            {code}
          </div>
          <button
            type="button"
            onClick={() => copyCode(code, `cb-${id}`)}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all duration-300 border-none cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              isCopied
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "bg-teal-600 text-white hover:bg-teal-700"
            }`}
          >
            {isCopied ? <><CheckCircle2 className="w-3 h-3" /> DONE</> : <><Copy className="w-3 h-3" /> COPY</>}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <a
            href={outboundUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-xs text-gray-400 hover:text-emerald-700 transition-colors flex items-center gap-1 no-underline"
            onClick={(e) => e.stopPropagation()}
          >
            Visit store <ExternalLink className="w-3 h-3" />
          </a>
          <Link
            href={`/${storeSlug}/`}
            className="text-xs text-emerald-600 hover:text-emerald-700 font-medium no-underline flex items-center gap-1 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            All codes <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
