"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { stores } from "@/lib/store-data";
import { Search, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/stores/", label: "All Stores" },
  { href: "/categories/fashion/", label: "Fashion" },
  { href: "/categories/electronics/", label: "Electronics" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/[0.04] border-b border-gray-200/60"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 no-underline group" aria-label="That Coupon Home">
              <img src="/logo.svg" alt="That Coupon Logo" width={38} height={38} className="w-9 h-9 transition-transform group-hover:scale-105" />
              <span className="text-[22px] font-black tracking-tight bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                That Coupon
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href.replace(/\/$/, ""));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 no-underline ${
                      isActive
                        ? "text-emerald-700 bg-emerald-50"
                        : "text-gray-600 hover:text-emerald-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5">
              {/* Search Toggle */}
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  searchOpen
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-500 hover:text-emerald-700 hover:bg-gray-50"
                }`}
                aria-label="Search stores"
              >
                {searchOpen ? <X className="w-[18px] h-[18px]" /> : <Search className="w-[18px] h-[18px]" />}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                className="lg:hidden p-2.5 rounded-xl text-gray-500 hover:text-emerald-700 hover:bg-gray-50 transition-all duration-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar (slides down) */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            searchOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search stores or codes (e.g. Noon, FOREVER)..."
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all"
                  aria-label="Search stores or coupon codes"
                />
              </div>
            </form>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 w-[280px] h-full bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <span className="font-bold text-gray-900">Menu</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href.replace(/\/$/, ""));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-all no-underline ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 -rotate-90 text-gray-300 transition-transform ${isActive ? "text-emerald-500" : ""}`} />
                </Link>
              );
            })}
            <Link
              href="/team/"
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-all no-underline ${
                pathname === "/team/" ? "bg-emerald-50 text-emerald-700" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Our Team
              <ChevronDown className={`w-4 h-4 -rotate-90 text-gray-300 transition-transform ${pathname === "/team/" ? "text-emerald-500" : ""}`} />
            </Link>
          </nav>

          {/* Panel Footer */}
          <div className="px-5 py-4 border-t border-gray-100">
            <Link
              href="/contact/"
              className="block w-full text-center bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm px-4 py-3 rounded-xl transition-colors no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
