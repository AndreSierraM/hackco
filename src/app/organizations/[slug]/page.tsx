"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePlatform } from "@/context/PlatformContext";
import { BRAND } from "@/config/brand";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Building2, MapPin, Globe, Trophy, ArrowRight, FolderGit2 } from "lucide-react";

export default function OrganizationPublicPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { programs, submissions } = usePlatform();

  const orgPrograms = programs.filter(
    (p) => p.organizationId === slug || slug.includes("northstar")
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-left space-y-10">
        {/* Brand Header */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src={BRAND.demoOrg.name ? "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80" : ""}
                alt={BRAND.demoOrg.name}
                className="w-20 h-20 rounded-2xl object-cover border border-slate-200 shadow-sm"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    {BRAND.demoOrg.name}
                  </h1>
                  <Badge variant="primary" size="sm">
                    Organización Verificada
                  </Badge>
                </div>
                <p className="text-sm text-slate-600">{BRAND.demoOrg.tagline}</p>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{BRAND.demoOrg.location}</span>
                </p>
              </div>
            </div>

            <Link href="/org/northstar">
              <Button size="sm" className="bg-slate-950 hover:bg-blue-600 text-white font-semibold">
                Abrir Command Center
              </Button>
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl pt-2 border-t border-slate-100">
            Northstar Labs es una organización pionera en ingeniería de software y agentes de inteligencia artificial aplicados a operaciones críticas. A través de la plataforma convoca a la comunidad técnica más competitiva de América Latina para construir soluciones de alto impacto.
          </p>
        </div>

        {/* Active & Past Hackathons */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Programas de Innovación & Hackathons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orgPrograms.map((prog) => (
              <div
                key={prog.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="primary" size="sm" dot>
                      {prog.status}
                    </Badge>
                    <span className="text-xs font-bold text-slate-900">{prog.prizePool}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{prog.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {prog.oneLiner}
                  </p>
                  <p className="text-xs text-slate-400">
                    {prog.city} · {prog.startDate} al {prog.endDate}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {prog.stats.applications} postulaciones
                  </span>
                  <Link href={`/hackathons/${prog.slug}`}>
                    <Button size="sm" variant="ghost" className="font-bold text-blue-600" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                      Ver reto
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Created Under Org */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Soluciones en Pipeline & Piloto</h2>
            <Link href="/org/northstar/projects" className="text-xs font-bold text-blue-600 hover:text-blue-800">
              Ver tablero Kanban completo →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {submissions.map((sub) => (
              <div key={sub.id} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono">
                    {sub.pipelineStage}
                  </span>
                  <span className="text-xs font-semibold text-slate-700">★ {sub.scores.averageScore}/10</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{sub.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{sub.oneLinePitch}</p>
                <div className="pt-2 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Equipo: {sub.teamName}</span>
                  <Link href={`/projects/${sub.id}`} className="font-bold text-blue-600">
                    Ver proyecto →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
