"use client";

import { LAST_UPDATED, getAllCoupons } from "@/lib/store-data";
import { ExternalLink, Flame } from "lucide-react";
import { useCopyCode } from "./hooks";

export function LatestCodes() {
  const { copiedId, copyCode } = useCopyCode();
  const allCoupons = getAllCoupons();

  return (
    <section className="py-12 bg-white" aria-label="Latest Working Coupon Codes">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-2">
          <Flame className="w-6 h-6 text-red-500" />
          <h2 className="text-2xl font-extrabold text-emerald-800">Latest Working Coupon Codes Today</h2>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Updated hourly based on user success rate. Last verified: <strong>{LAST_UPDATED}</strong>.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-bold text-gray-700">Store</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">Code</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">Discount</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">Category</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {allCoupons.map((coupon) => (
                <tr key={coupon.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center text-[9px] font-extrabold shrink-0"
                        style={{ background: coupon.logoBg, color: coupon.logoColor }}
                      >
                        {coupon.logoText}
                      </div>
                      <span className="font-semibold text-gray-800">{coupon.store}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <code className="bg-gray-100 text-emerald-800 px-2 py-1 rounded font-mono font-bold text-xs">
                      {coupon.code}
                    </code>
                  </td>
                  <td className="py-3 px-4 font-bold text-emerald-700">{coupon.discount}</td>
                  <td className="py-3 px-4 text-gray-600">{coupon.category}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Verified
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyCode(coupon.code, coupon.id)}
                        className="px-3 py-1.5 bg-emerald-800 text-white text-xs font-bold rounded-md border-none cursor-pointer transition-colors hover:bg-emerald-700"
                        style={copiedId === coupon.id ? { background: "#14B8A6" } : {}}
                      >
                        {copiedId === coupon.id ? "COPIED!" : "COPY"}
                      </button>
                      <a
                        href={coupon.outboundUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-700 transition-colors"
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
