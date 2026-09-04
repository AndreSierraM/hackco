"use client";

import React from "react";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { Globe, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#141517] text-[#9CA3AF] border-t border-[#252830] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 text-left">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white text-[#141517] flex items-center justify-center font-bold text-xs font-mono">
                K
              </div>
              <span className="text-base font-bold text-white tracking-tight">{BRAND.name}</span>
            </div>
            <p className="text-[#9CA3AF] text-xs max-w-sm leading-relaxed">
              Diseñamos y operamos hackathons y retos de innovación de principio a fin: desde el dolor de negocio hasta pilotos reales con código probado.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1C1E24] border border-[#2B2D36] text-[11px] text-[#9CA3AF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="font-mono">{BRAND.origin}</span>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-3">
            <p className="text-white font-mono text-[11px] font-semibold tracking-wider uppercase">Plataforma</p>
            <ul className="space-y-2 text-[#9CA3AF]">
              <li>
                <Link href="/hackathons" className="hover:text-white transition-colors">
                  Explorar hackathons
                </Link>
              </li>
              <li>
                <Link href="/start" className="hover:text-white transition-colors">
                  Diseñar un reto
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Galería de proyectos
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-white transition-colors flex items-center gap-1">
                  Vista demostrativa <ArrowUpRight className="w-3 h-3 text-[#60A5FA]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <p className="text-white font-mono text-[11px] font-semibold tracking-wider uppercase">Soluciones</p>
            <ul className="space-y-2 text-[#9CA3AF]">
              <li>
                <Link href="/empresas" className="hover:text-white transition-colors">
                  Para empresas
                </Link>
              </li>
              <li>
                <Link href="/#como-funciona" className="hover:text-white transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Formatos y alcances
                </Link>
              </li>
              <li>
                <Link href="/judge" className="hover:text-white transition-colors">
                  Jury OS
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Contact */}
          <div className="space-y-3">
            <p className="text-white font-mono text-[11px] font-semibold tracking-wider uppercase">Contacto & FAQ</p>
            <ul className="space-y-2 text-[#9CA3AF]">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <a href={`mailto:${BRAND.contactEmail}`} className="hover:text-white transition-colors">
                  {BRAND.contactEmail}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.salesEmail}`} className="hover:text-white transition-colors">
                  {BRAND.salesEmail}
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Acceso a plataforma
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#252830] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#71717A]">
          <p>© {new Date().getFullYear()} {BRAND.legalName}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#9CA3AF]" />
              <span>Español (Colombia · LATAM)</span>
            </span>
            <span>·</span>
            <span>Estándar WCAG AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
