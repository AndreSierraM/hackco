"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/config/brand";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Search, Bell, Menu, X, ArrowUpRight, Sparkles, LayoutDashboard } from "lucide-react";
import { clsx } from "clsx";

export function Header() {
  const pathname = usePathname();
  const { notifications, setIsCommandPaletteOpen, setIsNotificationDrawerOpen, role } = usePlatform();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const navLinks = [
    { label: "Explorar", href: "/hackathons" },
    { label: "Para empresas", href: "/empresas" },
    { label: "Proyectos", href: "/projects" },
    { label: "Metodología", href: "/#metodologia" },
    { label: "Precios & Alcance", href: "/pricing" },
  ];

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 w-full transition-all duration-200 border-b",
        isScrolled
          ? "bg-[#FBFBFA]/90 backdrop-blur-md border-[#E8E8E4] shadow-xs py-3"
          : "bg-[#FBFBFA]/75 backdrop-blur-xs border-[#ECECE6] py-3.5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-[#141517] text-white flex items-center justify-center font-bold text-sm tracking-tighter border border-[#2B2D33] shadow-xs group-hover:bg-[#1846A3] transition-colors">
              <span className="font-mono">{BRAND.name.charAt(0)}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold tracking-tight text-[#141517] leading-none">
                {BRAND.name}
              </span>
              <span className="text-[10px] text-[#71717A] font-mono tracking-wider uppercase mt-0.5">
                Open Innovation OS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
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
        <div className="flex items-center gap-2.5">
          {/* Quick Search Button (⌘K) */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[#DCDCD5] bg-white text-[#52535A] hover:text-[#141517] hover:border-[#141517] transition-all text-xs shadow-xs"
            title="Buscar (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-[#71717A]" />
            <span className="text-[#71717A]">Buscar...</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[#F4F4F1] text-[10px] font-mono text-[#52535A] border border-[#E0E0D8]">
              ⌘K
            </kbd>
          </button>

          {/* Notifications */}
          <button
            onClick={() => setIsNotificationDrawerOpen(true)}
            className="relative p-2 rounded-xl border border-[#DCDCD5] bg-white text-[#52535A] hover:text-[#141517] hover:border-[#141517] transition-all shadow-xs"
            title="Notificaciones"
          >
            <Bell className="w-3.5 h-3.5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#1846A3] ring-2 ring-white" />
            )}
          </button>


          {/* Action CTAs */}
          <Link
            href="/login"
            className="hidden sm:inline-block text-xs font-medium text-[#52535A] hover:text-[#141517] px-2 py-1.5 transition-colors"
          >
            Ingresar
          </Link>

          {/* Primary CTA */}
          <Link href="/start">
            <Button
              size="sm"
              className="bg-[#141517] hover:bg-[#252830] text-white transition-all shadow-editorial"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF]" />}
            >
              Lanzar un reto
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white p-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCommandPaletteOpen(true);
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-xs font-medium text-slate-600"
            >
              <span>Buscar en {BRAND.name}...</span>
              <Search className="w-4 h-4 text-slate-400" />
            </button>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">
                  Ingresar
                </Button>
              </Link>
              <Link href="/start" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full">
                  Lanzar un reto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
