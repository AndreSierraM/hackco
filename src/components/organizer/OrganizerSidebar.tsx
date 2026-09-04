"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/config/brand";
import {
  LayoutDashboard,
  FolderGit2,
  Users,
  Building2,
  Workflow,
  Radio,
  FileSpreadsheet,
  Settings,
  Scale,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  TrendingUp,
  FileCheck2,
} from "lucide-react";
import { clsx } from "clsx";

interface OrganizerSidebarProps {
  orgSlug: string;
}

export function OrganizerSidebar({ orgSlug }: OrganizerSidebarProps) {
  const pathname = usePathname();

  const mainNav = [
    { label: "Home", href: `/org/${orgSlug}`, icon: LayoutDashboard },
    { label: "Command Center", href: `/org/${orgSlug}/programs/bogota-ai-operations`, icon: Workflow },
    { label: "Live Event Mode", href: `/org/${orgSlug}/programs/bogota-ai-operations/live`, icon: Radio, badge: "LIVE" },
    { label: "Postulaciones (CRM)", href: `/org/${orgSlug}/programs/bogota-ai-operations/applications`, icon: FileSpreadsheet, count: "42" },
    { label: "Equipos", href: `/org/${orgSlug}/programs/bogota-ai-operations/teams`, icon: Users },
    { label: "Jury OS (Jurados)", href: `/org/${orgSlug}/programs/bogota-ai-operations/judges`, icon: Scale },
    { label: "Project Pipeline", href: `/org/${orgSlug}/projects`, icon: FolderGit2, highlight: true },
    { label: "Talent Graph", href: `/org/${orgSlug}/talent`, icon: Users },
    { label: "Reportes de Impacto", href: `/org/${orgSlug}/programs/bogota-ai-operations/reports`, icon: FileCheck2 },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200/90 flex flex-col justify-between shrink-0 min-h-screen text-xs select-none">
      <div>
        {/* Org Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-slate-950 text-white flex items-center justify-center font-bold text-sm">
              NL
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-sm">{BRAND.demoOrg.name}</h2>
              <span className="text-[10px] text-slate-400 font-mono">Organization OS</span>
            </div>
          </div>
        </div>

        {/* Create Challenge Quick Action */}
        <div className="p-3 border-b border-slate-100">
          <Link
            href={`/org/${orgSlug}/programs/new`}
            className="flex items-center justify-between w-full p-2.5 rounded-xl bg-blue-50 text-blue-800 font-semibold hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>+ Nuevo Programa (IA)</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
          </Link>
        </div>

        {/* Navigation items */}
        <nav className="p-3 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1 block">
            Operación
          </span>
          {mainNav.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center justify-between px-3 py-2 rounded-xl font-medium transition-colors",
                  isActive
                    ? "bg-slate-900 text-white font-semibold shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Icon className={clsx("w-4 h-4 shrink-0", isActive ? "text-white" : "text-slate-400")} />
                  <span className="truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-1.5 py-0.5 rounded bg-rose-500 text-white font-mono text-[9px] font-bold">
                    {item.badge}
                  </span>
                )}
                {item.count && (
                  <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Org Info */}
      <div className="p-4 border-t border-slate-100 space-y-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-[11px] text-slate-500 hover:text-slate-900 transition-colors px-2 py-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Volver al sitio público
        </Link>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-700">Laura Gómez</span>
          </div>
          <span className="text-[10px] text-slate-400">Admin</span>
        </div>
      </div>
    </aside>
  );
}
