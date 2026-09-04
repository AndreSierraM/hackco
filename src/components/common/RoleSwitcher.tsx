"use client";

import React, { useState } from "react";
import { usePlatform } from "@/context/PlatformContext";
import { UserRole } from "@/types";
import { useRouter } from "next/navigation";
import { Users, Building2, Scale, Compass, Shield, ChevronUp, ChevronDown, Check } from "lucide-react";
import { clsx } from "clsx";

export function RoleSwitcher() {
  const { role, setRole } = usePlatform();
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const roleConfigs: Array<{
    role: UserRole;
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
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
        <div className="mb-3 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-editorial-elevated border border-[#DCDCD5] p-3 animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#E8E8E4] px-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#71717A]">
              Demo Persona Switcher
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#F4F4F1] text-[#141517] font-mono font-semibold border border-[#E0E0D8]">
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
                    "w-full flex items-start gap-2.5 p-2 rounded-xl text-left transition-all cursor-pointer",
                    isCurrent
                      ? "bg-[#141517] text-white shadow-xs"
                      : "hover:bg-[#F4F4EE] text-[#141517]"
                  )}
                >
                  <div
                    className={clsx(
                      "p-1.5 rounded-lg shrink-0 mt-0.5",
                      isCurrent ? "bg-[#252830] text-white" : "bg-[#F4F4F1] text-[#52535A]"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold truncate">{cfg.label}</p>
                      {isCurrent && <Check className="w-3.5 h-3.5 text-[#60A5FA] shrink-0 ml-1" />}
                    </div>
                    <p
                      className={clsx(
                        "text-[10px] truncate mt-0.5",
                        isCurrent ? "text-[#9CA3AF]" : "text-[#71717A]"
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
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141517] text-white text-xs font-medium shadow-editorial-elevated hover:bg-[#222429] border border-[#2B2D33] transition-transform active:scale-95 group cursor-pointer"
        title="Cambiar perspectiva de usuario"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
        <span className="text-[#9CA3AF] font-mono text-[11px]">Rol:</span>
        <span className="text-white font-semibold">{currentCfg.label.split("/")[0].trim()}</span>
        {isExpanded ? (
          <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF] ml-0.5" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 text-[#9CA3AF] ml-0.5" />
        )}
      </button>
    </div>
  );
}
