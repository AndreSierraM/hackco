import React from "react";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { Globe, Heart, Shield, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#141517] text-[#9CA3AF] border-t border-[#252830] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 text-left">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white text-[#141517] flex items-center justify-center font-bold text-sm font-mono">
                {BRAND.name.charAt(0)}
              </div>
              <span className="text-base font-bold text-white tracking-tight">{BRAND.name}</span>
            </div>
            <p className="text-[#9CA3AF] text-xs max-w-sm leading-relaxed">
              {BRAND.claim} Operación de retos, hackathons e innovación abierta de principio a fin.
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
                  Explorar retos
                </Link>
              </li>
              <li>
                <Link href="/start" className="hover:text-white transition-colors">
                  Organizar reto
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Proyectos & Portafolio
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-white transition-colors flex items-center gap-1">
                  Sales Demo Interactiva <ArrowUpRight className="w-3 h-3 text-[#60A5FA]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <p className="text-white font-semibold text-xs tracking-wider uppercase">Soluciones</p>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/empresas" className="hover:text-white transition-colors">
                  Empresas & B2B
                </Link>
              </li>
              <li>
                <Link href="/empresas#universidades" className="hover:text-white transition-colors">
                  Universidades
                </Link>
              </li>
              <li>
                <Link href="/empresas#govtech" className="hover:text-white transition-colors">
                  Sector Público / GovTech
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Precios & Alcances
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div className="space-y-3">
            <p className="text-white font-semibold text-xs tracking-wider uppercase">Compañía & FAQ</p>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Portal de Acceso
                </Link>
              </li>
              <li>
                <a href={`mailto:${BRAND.contactEmail}`} className="hover:text-white transition-colors">
                  Contacto: {BRAND.contactEmail}
                </a>
              </li>
              <li>
                <span className="text-slate-500">Términos & Privacidad</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {BRAND.legalName}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>Español (Colombia / LATAM)</span>
            </span>
            <span>·</span>
            <span>Estándar WCAG AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
