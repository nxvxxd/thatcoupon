"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { stores } from "@/lib/store-data";
import { Search } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;
    const matchStore = stores.find((s) => s.name.toLowerCase().includes(q));
    if (matchStore) {
      router.push(`/${matchStore.slug}/`);
    } else {
      router.push(`/stores/`);
    }
    setSearchOpen(false);
    setSearchQuery("");
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 no-underline" aria-label="That Coupon Home">
            <img src="/logo.svg" alt="That Coupon Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-black tracking-tight bg-gradient-to-br from-emerald-900 to-emerald-600 bg-clip-text text-transparent">
              That Coupon
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/stores/" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
              All Stores
            </Link>
            <Link href="/categories/fashion/" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
              Fashion
            </Link>
            <Link href="/categories/electronics/" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
              Electronics
            </Link>
            <Link href="/about/" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
              About
            </Link>
            <Link href="/blog/" className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors">
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-emerald-700 transition-colors rounded-lg hover:bg-gray-100"
              aria-label="Search stores"
            >
              <Search className="w-5 h-5" />
            </button>
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
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="pb-4 border-t border-gray-100 pt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stores or codes (e.g. Noon, FOREVER)..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </form>
        )}

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-4 flex flex-col gap-3">
            <Link href="/stores/" className="text-sm font-medium text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>All Stores</Link>
            <Link href="/categories/fashion/" className="text-sm font-medium text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>Fashion</Link>
            <Link href="/categories/electronics/" className="text-sm font-medium text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>Electronics</Link>
            <Link href="/about/" className="text-sm font-medium text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/blog/" className="text-sm font-medium text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/team/" className="text-sm font-medium text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>Our Team</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
