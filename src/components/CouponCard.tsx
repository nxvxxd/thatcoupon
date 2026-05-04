"use client";

import Link from "next/link";
import { useCopyCode } from "./hooks";
import { ExternalLink, Flame, Sparkles, Coins, Percent } from "lucide-react";

interface CouponCardProps {
  id: string;
  store: string;
  storeSlug: string;
  code: string;
  title: string;
  description: string;
  discount: string;
  category: string;
  isNew?: boolean;
  isHot?: boolean;
  outboundUrl: string;
  logoText: string;
  logoBg: string;
  logoColor: string;
  cardBg: string;
  cardTextColor: string;
  badgeColor: string;
  badgeText: string;
  borderColor: string;
  copyBtnBg: string;
}

export function CouponCard({
  id, store, storeSlug, code, title, description, discount,
  category, isNew, isHot, outboundUrl, logoText, logoBg, logoColor,
  cardBg, cardTextColor, badgeColor, badgeText, borderColor, copyBtnBg
}: CouponCardProps) {
  const { copiedId, copyCode } = useCopyCode();
  const isCopied = copiedId === id;

  const BadgeIcon = category.toLowerCase().includes("cashback") ? Coins : Percent;
  const badgeLabel = category.toLowerCase().includes("cashback") ? category : `${discount} — ${category}`;

  return (
    <article id={id} className="rounded-2xl overflow-hidden flex cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative min-h-[200px]">
      {(isHot || isNew) && (
        <div className="absolute top-4 right-[170px] bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold z-10 flex items-center gap-1">
          {isHot ? <><Flame className="w-3 h-3" /> HOT</> : <><Sparkles className="w-3 h-3" /> NEW</>}
        </div>
      )}
      <div
        className="flex-1 p-6 flex flex-col justify-center relative z-[1]"
        style={{ background: cardBg, color: cardTextColor }}
      >
        <div className="text-2xl font-black mb-3 tracking-tight">{store}</div>
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-1.5 w-fit"
          style={{ background: badgeColor, color: badgeText }}
        >
          <BadgeIcon className="w-3 h-3" style={{ color: "#F59E0B" }} />
          {badgeLabel}
        </div>
        <p className="text-xs opacity-80 mt-1">{description}</p>
        <div className="mt-2 opacity-100">
          <span className="text-xs font-semibold" style={{ color: cardTextColor }}>
            Use code at checkout • {category}
          </span>
        </div>
      </div>
      <div className="w-[160px] bg-white flex flex-col items-center justify-center p-5 gap-3 shrink-0">
        <div className="text-center">
          <span className="text-3xl font-black text-emerald-800 leading-tight">{discount}</span>
        </div>
        <div
          className="w-full bg-gray-50 border-2 border-dashed rounded-md py-2.5 text-center font-mono font-black text-sm tracking-widest"
          style={{ color: borderColor, borderColor }}
        >
          {code}
        </div>
        <button
          onClick={() => copyCode(code, id)}
          className="w-full py-2.5 text-white border-none rounded-md text-xs font-bold cursor-pointer transition-all tracking-wide"
          style={{ background: isCopied ? "#14B8A6" : copyBtnBg }}
        >
          {isCopied ? "COPIED!" : "COPY CODE"}
        </button>
        <a
          href={outboundUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-xs text-gray-500 hover:text-emerald-700 transition-colors flex items-center gap-1 no-underline mt-1"
          onClick={(e) => e.stopPropagation()}
        >
          Shop {store} <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
}
