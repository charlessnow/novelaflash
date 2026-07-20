"use client";

import React, { useState, useEffect } from "react";
import Link from "@/components/ui/InternalLink";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Platforms", href: "/platforms" },
    { name: "Rankings", href: "/rankings" },
    { name: "Industry", href: "/industry" },
    { name: "Guides", href: "/guides" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/guides") return pathname === "/guides";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="relative z-10 group">
          <span className="font-display font-black text-2xl tracking-tight text-white uppercase italic">
            REELPULSE
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rp-coral transition-all duration-300 group-hover:w-full" />
        </Link>

        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <div className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${
            isScrolled ? "bg-white/[0.07] border border-white/[0.08] backdrop-blur-xl shadow-lg" : "bg-transparent"
          }`}>
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-[11px] font-bold tracking-[0.1em] transition-colors uppercase ${
                    active ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {link.name}
                  {active && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rp-coral" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 relative z-10">
          <Link href="/newsletter" className="px-6 py-2 rounded-full border border-white/20 bg-transparent text-white text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-white/10 transition-all flex items-center gap-2">
            Subscribe
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <button
          className="md:hidden relative z-10 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      <div className={`md:hidden fixed inset-0 z-40 bg-rp-bg-primary/95 backdrop-blur-xl transition-all duration-500 ${
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-3xl font-display font-black uppercase tracking-tight transition-colors ${
                  active ? "text-rp-coral" : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/newsletter" className="mt-4 px-10 py-4 rounded-full border border-white/20 bg-transparent text-white font-bold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
};
