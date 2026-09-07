"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/config/brand";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Search, Menu, X } from "lucide-react";
import { clsx } from "clsx";

export function Header() {
  const pathname = usePathname();
  const { setIsCommandPaletteOpen } = usePlatform();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Cómo funciona", href: "/#como-funciona" },
    { label: "Para empresas", href: "/empresas" },
    { label: "Precios", href: "/pricing" },
    { label: "Builders", href: "/builders" },
  ];

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 w-full transition-all duration-200 border-b",
        isScrolled
          ? "bg-[#FBFBFA]/95 backdrop-blur-md border-[#E8E8E4] shadow-xs py-3"
          : "bg-[#FBFBFA] border-[#ECECE6] py-3.5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark & Monogram */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-[#141517] text-white flex items-center justify-center font-bold text-xs tracking-tighter border border-[#2B2D33] shadow-xs group-hover:bg-[#1846A3] transition-colors">
              <span className="font-mono">K</span>
            </div>
            <span className="text-base font-bold tracking-tight text-[#141517] leading-none">
              {BRAND.name}
            </span>
          </Link>

          {/* Desktop Nav - Focused 4 items */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={clsx(
                    "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                    isActive
                      ? "text-[#141517] bg-[#EFEFEA] font-semibold"
                      : "text-[#52535A] hover:text-[#141517] hover:bg-[#F4F4EE]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Search Button */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-[#DCDCD5] bg-white text-[#52535A] hover:text-[#141517] hover:border-[#141517] transition-all text-xs shadow-xs"
            title="Buscar (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-[#71717A]" />
            <span className="text-[#71717A] text-[11px]">Buscar</span>
            <kbd className="px-1 py-0.2 rounded bg-[#F4F4F1] text-[9px] font-mono text-[#52535A] border border-[#E0E0D8]">
              ⌘K
            </kbd>
          </button>

          {/* Secondary Link: Explorar Retos */}
          <Link
            href="/hackathons"
            className="hidden sm:inline-block text-xs font-medium text-[#52535A] hover:text-[#141517] px-2 py-1.5 transition-colors"
          >
            Explorar retos
          </Link>

          {/* Primary CTA: Evaluar mi reto */}
          <Link href="/start">
            <Button
              size="sm"
              className="bg-[#141517] hover:bg-[#252830] text-white transition-all shadow-editorial font-semibold px-4"
            >
              Evaluar mi reto
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#141517] hover:bg-[#F4F4EE] transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E8E4] bg-[#FBFBFA] p-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-[#141517] hover:bg-[#F4F4EE]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E8E8E4] flex flex-col gap-2">
            <Link 
              href="/builders" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-medium text-[#52535A] hover:text-[#141517]"
            >
              ¿Quieres competir? Comunidad de builders →
            </Link>
            <Link href="/start" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="w-full bg-[#141517] text-white font-semibold">
                Evaluar mi reto
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
