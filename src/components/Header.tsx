"use client";

import Link from "next/link";
import { useState } from "react";
import { stores, categories } from "@/lib/store-data";
import { Tags } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 no-underline" aria-label="That Coupon Home">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 to-amber-500 rounded-xl -rotate-3" />
              <div className="relative z-10 text-white"><Tags className="w-5 h-5" /></div>
            </div>
            <span className="text-2xl font-black tracking-tight bg-gradient-to-br from-emerald-900 to-emerald-600 bg-clip-text text-transparent">
              That Coupon
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/stores" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
              All Stores
            </Link>
            <Link href="/categories/fashion" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
              Fashion
            </Link>
            <Link href="/categories/electronics" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
              Electronics
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
              Blog
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-4 flex flex-col gap-3">
            <Link href="/stores" className="text-sm font-medium text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>All Stores</Link>
            <Link href="/categories/fashion" className="text-sm font-medium text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>Fashion</Link>
            <Link href="/categories/electronics" className="text-sm font-medium text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>Electronics</Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>Blog</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
