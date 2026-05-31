"use client";

import Link from "next/link";
import { useCopyCode } from "./hooks";
import { ExternalLink, Flame, Sparkles, Coins, Percent, CheckCircle2, Copy, ArrowRight } from "lucide-react";

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
    <article
      id={id}
      className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-1 relative"
    >
      {/* Badge */}
      {(isHot || isNew) && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-red-500 to-rose-500 text-white px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-lg shadow-red-500/25">
          {isHot ? <><Flame className="w-3 h-3" /> HOT</> : <><Sparkles className="w-3 h-3" /> NEW</>}
        </div>
      )}

      {/* Top: Store Info */}
      <div
        className="px-6 pt-6 pb-4 relative z-[1]"
        style={{ background: `linear-gradient(135deg, ${cardBg}, ${cardBg}dd)` }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-[9px] shadow-md shrink-0"
            style={{ background: logoBg, color: logoColor }}
          >
            {logoText}
          </div>
          <div>
            <div className="text-xl font-black tracking-tight" style={{ color: cardTextColor }}>
              {store}
            </div>
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold w-fit"
              style={{ background: badgeColor, color: badgeText }}
            >
              <BadgeIcon className="w-3 h-3" style={{ color: "#F59E0B" }} />
              {badgeLabel}
            </div>
          </div>
        </div>
        <p className="text-sm opacity-90 leading-relaxed" style={{ color: cardTextColor }}>
          {description}
        </p>
      </div>

      {/* Bottom: Code + Actions */}
      <div className="px-6 py-5 bg-white">
        <div className="flex items-center gap-4 mb-4">
          {/* Discount */}
          <div className="shrink-0">
            <span className="text-3xl font-black text-emerald-700 leading-none">{discount}</span>
          </div>

          {/* Code Box */}
          <div className="flex-1 bg-gray-50 border-2 border-dashed rounded-xl py-3 text-center relative overflow-hidden">
            <span
              className="font-mono font-black text-base tracking-[0.2em] block"
              style={{ color: borderColor }}
            >
              {code}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => copyCode(code, id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 border-none cursor-pointer ${
              isCopied
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
                : "text-white hover:shadow-lg"
            }`}
            style={!isCopied ? { background: copyBtnBg } : {}}
          >
            {isCopied ? (
              <><CheckCircle2 className="w-4 h-4" /> COPIED!</>
            ) : (
              <><Copy className="w-4 h-4" /> COPY CODE</>
            )}
          </button>

          <a
            href={outboundUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-emerald-700 rounded-xl text-sm font-semibold transition-all no-underline border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            Visit <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between mt-3.5 text-[11px] text-gray-400">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            <span>Verified today</span>
          </div>
          <Link
            href={`/${storeSlug}/`}
            className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-medium no-underline transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            All {store} codes <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
