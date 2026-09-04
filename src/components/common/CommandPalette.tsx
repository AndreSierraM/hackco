"use client";

import React, { useState, useEffect, useMemo } from "react";
import { usePlatform } from "@/context/PlatformContext";
import { useRouter } from "next/navigation";
import { Search, Compass, FolderGit2, Building2, User, ArrowRight, Sparkles, X } from "lucide-react";
import { DEMO_BUILDERS } from "@/lib/demo-data";
import { clsx } from "clsx";

export function CommandPalette() {
  const { isCommandPaletteOpen, setIsCommandPaletteOpen, programs, submissions } = usePlatform();
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setQuery("");
    }
  }, [isCommandPaletteOpen]);

  const filteredPrograms = useMemo(() => {
    if (!query) return programs.slice(0, 3);
    return programs.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.city.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [programs, query]);

  const filteredProjects = useMemo(() => {
    if (!query) return submissions.slice(0, 2);
    return submissions.filter(
      (s) =>
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.teamName.toLowerCase().includes(query.toLowerCase()) ||
        s.stack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    );
  }, [submissions, query]);

  const filteredBuilders = useMemo(() => {
    if (!query) return DEMO_BUILDERS.slice(0, 3);
    return DEMO_BUILDERS.filter(
      (b) =>
        b.name.toLowerCase().includes(query.toLowerCase()) ||
        b.role.toLowerCase().includes(query.toLowerCase()) ||
        b.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]);

  const quickActions = [
    { label: "Diseñar reto con IA", href: "/org/northstar/programs/new", icon: Sparkles },
    { label: "Explorar hackathons abiertas", href: "/hackathons", icon: Compass },
    { label: "Ver pipeline de proyectos", href: "/org/northstar/projects", icon: FolderGit2 },
    { label: "Portal del Jurado", href: "/judge", icon: ArrowRight },
  ];

  if (!isCommandPaletteOpen) return null;

  const handleNavigate = (url: string) => {
    setIsCommandPaletteOpen(false);
    router.push(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
        onClick={() => setIsCommandPaletteOpen(false)}
      />

      {/* Palette container */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in zoom-in-95 duration-150">
        <div className="flex items-center px-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            autoFocus
            type="text"
            placeholder="Buscar hackathons, proyectos, talento, organizaciones..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 text-xs">
          {/* Quick Actions */}
          {!query && (
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2.5 mb-1.5">
                Acciones Rápidas
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.label}
                      onClick={() => handleNavigate(action.href)}
                      className="flex items-center gap-2 p-2 rounded-xl text-left hover:bg-slate-50 transition-colors text-slate-700 font-medium"
                    >
                      <div className="p-1.5 rounded-lg bg-slate-100 text-slate-900">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Programs */}
          {filteredPrograms.length > 0 && (
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2.5 mb-1.5">
                Programas & Hackathons
              </p>
              <div className="space-y-1">
                {filteredPrograms.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleNavigate(`/hackathons/${p.slug}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
                        {p.category.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {p.title}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {p.city} · {p.prizePool}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2.5 mb-1.5">
                Proyectos
              </p>
              <div className="space-y-1">
                {filteredProjects.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleNavigate(`/projects/${s.id}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                        <FolderGit2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {s.title}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Equipo: {s.teamName} · {s.pipelineStage}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Builders */}
          {filteredBuilders.length > 0 && (
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2.5 mb-1.5">
                Talento & Builders
              </p>
              <div className="space-y-1">
                {filteredBuilders.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => handleNavigate(`/u/${b.handle}`)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={b.avatar}
                        alt={b.name}
                        className="w-8 h-8 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <p className="text-xs font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                          {b.name}{" "}
                          <span className="text-[11px] text-slate-400 font-normal">
                            @{b.handle}
                          </span>
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {b.role} · {b.city}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-4">
          <span>
            Navega con <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono text-[10px]">↓</kbd>
          </span>
          <span>
            Presiona <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono text-[10px]">ESC</kbd> para salir
          </span>
        </div>
      </div>
    </div>
  );
}
