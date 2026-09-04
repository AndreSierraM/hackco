"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DEMO_BUILDERS } from "@/lib/demo-data";
import { BuilderProfile } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Search,
  Filter,
  MapPin,
  Sparkles,
  Users,
  Check,
  X,
  ExternalLink,
} from "lucide-react";
import { clsx } from "clsx";

export default function TeamMatchmakingPage() {
  const params = useParams();
  const id = params?.id as string;

  const [query, setQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("ALL");
  const [selectedCity, setSelectedCity] = useState("ALL");
  const [activeDrawerBuilder, setActiveDrawerBuilder] = useState<BuilderProfile | null>(null);
  const [invitedIds, setInvitedIds] = useState<string[]>([]);

  const roles = ["ALL", "UX/Design", "Product", "Backend", "AI/ML", "Fullstack", "Data Science"];
  const cities = ["ALL", "Bogotá", "Medellín", "Cali", "Bucaramanga"];

  const filteredBuilders = useMemo(() => {
    return DEMO_BUILDERS.filter((b) => {
      if (selectedRole !== "ALL" && b.role !== selectedRole) return false;
      if (selectedCity !== "ALL" && b.city !== selectedCity) return false;
      if (
        query &&
        !b.name.toLowerCase().includes(query.toLowerCase()) &&
        !b.headline.toLowerCase().includes(query.toLowerCase()) &&
        !b.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()))
      ) {
        return false;
      }
      return true;
    });
  }, [query, selectedRole, selectedCity]);

  const handleInvite = (builderId: string) => {
    if (!invitedIds.includes(builderId)) {
      setInvitedIds([...invitedIds, builderId]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-left space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <Link href={`/app/hackathons/${id}/team`} className="text-xs font-semibold text-blue-600 hover:text-blue-800">
                ← Volver al equipo DocuFlow AI
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
              Matchmaking de Participantes
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Conecta con builders admitidos en el reto y completa las habilidades de tu equipo.
            </p>
          </div>
        </div>

        {/* RECOMMENDED TEAMMATES WITH RATIONALE */}
        <div className="p-6 sm:p-8 rounded-3xl bg-blue-50/60 border border-blue-200 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h2 className="text-base font-bold text-slate-900">
                Compañeros Recomendados para DocuFlow AI
              </h2>
            </div>
            <Badge variant="primary" size="sm">
              Algoritmo de Cobertura
            </Badge>
          </div>
          <p className="text-xs text-slate-600">
            A tu equipo le falta cubrir las áreas de <strong>Product Design (UX)</strong> y <strong>Estrategia de Producto</strong>. Estos builders tienen disponibilidad y alta compatibilidad:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {DEMO_BUILDERS.filter((b) => b.role === "UX/Design" || b.role === "Product").map((b) => {
              const isInvited = invitedIds.includes(b.id);
              return (
                <div
                  key={b.id}
                  className="p-4 rounded-2xl bg-white border border-blue-200 shadow-xs flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <img src={b.avatar} alt={b.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-slate-900">{b.name}</h4>
                      <p className="text-[11px] text-blue-700 font-semibold">{b.role} · {b.city}</p>
                      <p className="text-[10px] text-slate-400">Compatible con el Reto 01</p>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    onClick={() => handleInvite(b.id)}
                    disabled={isInvited}
                    className={clsx(
                      "text-xs py-1 px-3 shrink-0",
                      isInvited ? "bg-emerald-600 text-white" : "bg-slate-950 text-white"
                    )}
                  >
                    {isInvited ? "Invitado ✓" : "Invitar al equipo"}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar builders por nombre, rol o tecnologías..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none"
            >
              <option value="ALL">Todos los roles</option>
              {roles.slice(1).map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none"
            >
              <option value="ALL">Todas las ciudades</option>
              {cities.slice(1).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* BUILDERS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBuilders.map((b) => {
            const isInvited = invitedIds.includes(b.id);
            return (
              <div
                key={b.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-all text-left space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <img
                      src={b.avatar}
                      alt={b.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-slate-200"
                    />
                    <Badge variant={b.lookingForTeam ? "success" : "neutral"} size="sm">
                      {b.lookingForTeam ? "Busca equipo" : "Con equipo"}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">{b.name}</h3>
                    <p className="text-xs text-blue-600 font-semibold">{b.role}</p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      {b.headline}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <MapPin className="w-3 h-3" />
                    <span>{b.city}, {b.country}</span>
                    <span>·</span>
                    <span>{b.stats.hackathons} hackathons</span>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {b.skills.slice(0, 4).map((sk) => (
                      <span key={sk} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveDrawerBuilder(b)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Ver detalle
                  </button>
                  <Button
                    size="sm"
                    onClick={() => handleInvite(b.id)}
                    disabled={isInvited}
                    className={clsx(
                      "text-xs font-semibold",
                      isInvited ? "bg-emerald-600 text-white" : "bg-slate-950 text-white"
                    )}
                  >
                    {isInvited ? "Invitado ✓" : "Invitar al equipo"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* PROFILE QUICK VIEW DRAWER */}
        {activeDrawerBuilder && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
              onClick={() => setActiveDrawerBuilder(null)}
            />
            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <div className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col p-6 space-y-6 overflow-y-auto text-left">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900">Perfil del Participante</h3>
                  <button
                    onClick={() => setActiveDrawerBuilder(null)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={activeDrawerBuilder.avatar}
                    alt={activeDrawerBuilder.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-slate-200"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{activeDrawerBuilder.name}</h2>
                    <p className="text-xs font-semibold text-blue-600">{activeDrawerBuilder.role}</p>
                    <p className="text-xs text-slate-500 font-mono">@{activeDrawerBuilder.handle}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeDrawerBuilder.headline}
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400">Ciudad:</span>
                    <p className="font-semibold text-slate-900">{activeDrawerBuilder.city}</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Hackathons:</span>
                    <p className="font-semibold text-slate-900">{activeDrawerBuilder.stats.hackathons} participaciones</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Proyectos:</span>
                    <p className="font-semibold text-slate-900">{activeDrawerBuilder.stats.projects} entregas</p>
                  </div>
                  <div>
                    <span className="text-slate-400">Victorias:</span>
                    <p className="font-semibold text-amber-600">{activeDrawerBuilder.stats.wins} podios</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700">Todas las Habilidades:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDrawerBuilder.skills.map((sk) => (
                      <span key={sk} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link href={`/u/${activeDrawerBuilder.handle}`} className="text-xs font-semibold text-blue-600 hover:text-blue-800">
                    Ver perfil público completo →
                  </Link>
                  <Button
                    size="sm"
                    onClick={() => {
                      handleInvite(activeDrawerBuilder.id);
                      setActiveDrawerBuilder(null);
                    }}
                    className="bg-slate-950 text-white text-xs font-semibold"
                  >
                    Invitar al equipo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
