"use client";

import React, { useState } from "react";
import { usePlatform } from "@/context/PlatformContext";
import { UserRole } from "@/types";
import { useRouter, usePathname } from "next/navigation";
import { Sparkles, Users, Building2, Scale, Compass, Shield, ChevronUp, ChevronDown, Check } from "lucide-react";
import { clsx } from "clsx";

export function RoleSwitcher() {
  const { role, setRole } = usePlatform();
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const roleConfigs: Array<{
    role: UserRole;
    label: string;
    description: string;
    icon: any;
    targetRoute: string;
    badgeColor: string;
  }> = [
    {
      role: "PARTICIPANT",
      label: "Builder / Participante",
      description: "Workspace, equipo, matchmaking y entrega",
      icon: Users,
      targetRoute: "/app",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      role: "ORG_ADMIN",
      label: "Organizador (Northstar Labs)",
      description: "Command Center, CRM postulantes y jurados",
      icon: Building2,
      targetRoute: "/org/northstar",
      badgeColor: "bg-indigo-100 text-indigo-800",
    },
    {
      role: "JUDGE",
      label: "Jurado Evaluador",
      description: "Portal de evaluación y rúbrica dividida",
      icon: Scale,
      targetRoute: "/judge",
      badgeColor: "bg-purple-100 text-purple-800",
    },
    {
      role: "MENTOR",
      label: "Mentor Técnico",
      description: "Sesiones 1:1 y notas de acompañamiento",
      icon: Compass,
      targetRoute: "/mentor",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
    {
      role: "PLATFORM_ADMIN",
      label: "Super Admin",
      description: "Gobernanza de la plataforma y métricas",
      icon: Shield,
      targetRoute: "/admin",
      badgeColor: "bg-rose-100 text-rose-800",
    },
  ];

  const handleSelect = (cfg: typeof roleConfigs[0]) => {
    setRole(cfg.role);
    setIsExpanded(false);
    router.push(cfg.targetRoute);
  };

  const currentCfg = roleConfigs.find((r) => r.role === role) || roleConfigs[0];

  return (
    <div className="fixed bottom-5 right-5 z-50 select-none">
      {isExpanded && (
        <div className="mb-3 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/90 p-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 px-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Demo Switcher · Cambiar Rol
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 font-semibold border border-amber-200">
              MODO DEMO
            </span>
          </div>
          <div className="space-y-1">
            {roleConfigs.map((cfg) => {
              const Icon = cfg.icon;
              const isCurrent = cfg.role === role;
              return (
                <button
                  key={cfg.role}
                  onClick={() => handleSelect(cfg)}
                  className={clsx(
                    "w-full flex items-start gap-2.5 p-2.5 rounded-xl text-left transition-all",
                    isCurrent
                      ? "bg-slate-900 text-white shadow-xs"
                      : "hover:bg-slate-100 text-slate-800"
                  )}
                >
                  <div
                    className={clsx(
                      "p-1.5 rounded-lg shrink-0 mt-0.5",
                      isCurrent ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-700"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold truncate">{cfg.label}</p>
                      {isCurrent && <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 ml-1" />}
                    </div>
                    <p
                      className={clsx(
                        "text-[11px] truncate mt-0.5",
                        isCurrent ? "text-slate-300" : "text-slate-500"
                      )}
                    >
                      {cfg.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Pill Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-950 text-white text-xs font-semibold shadow-xl hover:bg-slate-900 border border-slate-700 transition-transform active:scale-95 group"
        title="Cambiar rol para demo rápida"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
        <span className="text-slate-300">Rol:</span>
        <span className="text-white font-bold">{currentCfg.label.split("/")[0].trim()}</span>
        {isExpanded ? (
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
        )}
      </button>
    </div>
  );
}
