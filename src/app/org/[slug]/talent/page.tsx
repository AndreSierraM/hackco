"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { OrganizerSidebar } from "@/components/organizer/OrganizerSidebar";
import { DEMO_BUILDERS } from "@/lib/demo-data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Search, MapPin, Trophy, Users, CheckCircle2, ArrowRight } from "lucide-react";

export default function TalentGraphPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "northstar";

  const [query, setQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("ALL");
  const [onlyFinalists, setOnlyFinalists] = useState(false);

  const filtered = useMemo(() => {
    return DEMO_BUILDERS.filter((b) => {
      if (selectedRole !== "ALL" && b.role !== selectedRole) return false;
      if (onlyFinalists && b.stats.finalist === 0) return false;
      if (
        query &&
        !b.name.toLowerCase().includes(query.toLowerCase()) &&
        !b.city.toLowerCase().includes(query.toLowerCase()) &&
        !b.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()))
      ) {
        return false;
      }
      return true;
    });
  }, [query, selectedRole, onlyFinalists]);

  return (
    <div className="min-h-screen flex bg-[#FBFBFA]">
      <OrganizerSidebar orgSlug={slug} />

      <main className="flex-1 p-6 sm:p-10 overflow-y-auto text-left space-y-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-950 tracking-tight">
              Talent Graph — Talento Técnico Verificado
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Búsqueda de ingenieros y diseñadores respaldados por su desempeño real en hackathons de la plataforma.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Ej. AI engineer, Bogotá, Python, Next.js..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700"
            >
              <option value="ALL">Todos los roles</option>
              <option value="Fullstack">Fullstack</option>
              <option value="AI/ML">AI / Machine Learning</option>
              <option value="UX/Design">UX / Product Design</option>
              <option value="Backend">Backend</option>
              <option value="Product">Product Manager</option>
            </select>

            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer whitespace-nowrap">
              <input
                type="checkbox"
                checked={onlyFinalists}
                onChange={(e) => setOnlyFinalists(e.target.checked)}
                className="rounded text-blue-600"
              />
              <span>Solo finalistas o ganadores</span>
            </label>
          </div>
        </div>

        {/* Builders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((b) => (
            <div
              key={b.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={b.avatar}
                    alt={b.name}
                    className="w-12 h-12 rounded-2xl object-cover border border-slate-200"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{b.name}</h3>
                    <p className="text-xs text-blue-600 font-semibold">{b.role}</p>
                    <span className="text-[11px] text-slate-400 font-mono">{b.city}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {b.headline}
                </p>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-3 gap-1 text-center text-[10px]">
                  <div>
                    <span className="text-slate-400 block">Retos</span>
                    <strong className="text-slate-900">{b.stats.hackathons}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Finalista</span>
                    <strong className="text-blue-600">{b.stats.finalist}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Podios</span>
                    <strong className="text-amber-600">{b.stats.wins}</strong>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {b.skills.slice(0, 4).map((sk) => (
                    <span key={sk} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link href={`/u/${b.handle}`} className="text-xs font-bold text-blue-600 hover:text-blue-800">
                  Ver perfil completo →
                </Link>
                <Button size="sm" variant="outline" className="text-xs">
                  Contactar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
