"use client";

import { LAST_UPDATED, getAllCoupons } from "@/lib/store-data";
import { ExternalLink, Flame, Copy, CheckCircle2 } from "lucide-react";
import { useCopyCode } from "./hooks";

export function LatestCodes() {
  const { copiedId, copyCode } = useCopyCode();
  const allCoupons = getAllCoupons();

  return (
    <section className="py-16 bg-white" aria-label="Latest Working Coupon Codes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
            <Flame className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Latest Working Coupon Codes</h2>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-8 ml-[52px]">
          Updated hourly based on user success rate. Last verified: <strong className="text-gray-700">{LAST_UPDATED}</strong>.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3.5 px-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Store</th>
                <th className="text-left py-3.5 px-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Code</th>
                <th className="text-left py-3.5 px-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Discount</th>
                <th className="text-left py-3.5 px-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Category</th>
                <th className="text-left py-3.5 px-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Status</th>
                <th className="text-left py-3.5 px-4 font-bold text-gray-500 text-xs uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {allCoupons.map((coupon) => (
                <tr key={coupon.id} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-[9px] font-extrabold shrink-0 shadow-sm"
                        style={{ background: coupon.logoBg, color: coupon.logoColor }}
                      >
                        {coupon.logoText}
                      </div>
                      <span className="font-semibold text-gray-800">{coupon.store}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <code className="bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg font-mono font-bold text-xs border border-emerald-100">
                      {coupon.code}
                    </code>
                  </td>
                  <td className="py-4 px-4 font-bold text-emerald-700">{coupon.discount}</td>
                  <td className="py-4 px-4 text-gray-500">{coupon.category}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-100">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      Verified
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => copyCode(coupon.code, coupon.id)}
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg border-none cursor-pointer transition-all duration-200 ${
                          copiedId === coupon.id
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                            : "bg-gray-900 text-white hover:bg-gray-800"
                        }`}
                      >
                        {copiedId === coupon.id ? <><CheckCircle2 className="w-3 h-3" /> COPIED!</> : <><Copy className="w-3 h-3" /> COPY</>}
                      </button>
                      <a
                        href={coupon.outboundUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-emerald-700 transition-colors rounded-lg hover:bg-gray-100"
                        aria-label={`Visit ${coupon.store}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
