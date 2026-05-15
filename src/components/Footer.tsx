import Link from "next/link";
import { stores, SITE_NAME } from "@/lib/store-data";
import { Shield, CheckCircle, Banknote, Headphones } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-emerald-800 rounded-md flex items-center justify-center">
                <span className="text-white text-sm font-bold">TC</span>
              </div>
              <span className="text-xl font-bold">{SITE_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              The leading coupon and cashback platform in the UAE and GCC. We provide verified, tested promo codes for top regional brands, helping shoppers save money every day.
            </p>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-white/8 rounded-md flex items-center justify-center" title="Verified Coupons">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="w-10 h-10 bg-white/8 rounded-md flex items-center justify-center" title="Secure">
                <Shield className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="w-10 h-10 bg-white/8 rounded-md flex items-center justify-center" title="Cashback Guaranteed">
                <Banknote className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="w-10 h-10 bg-white/8 rounded-md flex items-center justify-center" title="24/7 Support">
                <Headphones className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4">Top Stores</h3>
            <ul className="space-y-2">
              {stores.map(store => (
                <li key={store.slug}>
                  <Link href={`/${store.slug}/`} className="text-gray-400 text-sm hover:text-white transition-colors no-underline">
                    {store.name} Coupons
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/about/" className="text-gray-400 text-sm hover:text-white transition-colors no-underline">About Us</Link></li>
              <li><Link href="/contact/" className="text-gray-400 text-sm hover:text-white transition-colors no-underline">Contact Us</Link></li>
              <li><Link href="/privacy-policy/" className="text-gray-400 text-sm hover:text-white transition-colors no-underline">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="text-gray-400 text-sm hover:text-white transition-colors no-underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-sm">&copy; 2026 {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
