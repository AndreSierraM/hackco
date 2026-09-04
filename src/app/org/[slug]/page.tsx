"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { OrganizerSidebar } from "@/components/organizer/OrganizerSidebar";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Users,
  Workflow,
  Radio,
  FolderGit2,
  FileSpreadsheet,
  TrendingUp,
} from "lucide-react";

export default function OrganizationHomePage() {
  const params = useParams();
  const slug = (params?.slug as string) || "northstar";
  const { programs, applications } = usePlatform();

  const program = programs[0];
  const pendingApps = applications.filter((a) => a.status === "UNDER_REVIEW").length;

  return (
    <div className="min-h-screen flex bg-[#FBFBFA]">
      <OrganizerSidebar orgSlug={slug} />

      <main className="flex-1 p-6 sm:p-10 overflow-y-auto text-left space-y-8 max-w-6xl">
        {/* Personalized Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Organization Dashboard
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-0.5">
              Buenos días, Laura
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              <strong>{program.title}</strong> se encuentra en fase activa de construcción. Faltan 12 días para el demo day.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Link href={`/org/${slug}/programs/new`}>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold" leftIcon={<Sparkles className="w-3.5 h-3.5" />}>
                + Crear nuevo programa
              </Button>
            </Link>
            <Link href={`/org/${slug}/programs/${program.slug}`}>
              <Button size="sm" className="bg-slate-950 text-white font-semibold">
                Abrir Command Center
              </Button>
            </Link>
          </div>
        </div>

        {/* PENDING ACTIONS CARDS (CRITICAL OPERATIONAL VALUE) */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Acciones que Requieren Atención
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <Link href={`/org/${slug}/programs/${program.slug}/applications`} className="group">
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-300 shadow-xs space-y-1 hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-950">42 Postulaciones</span>
                  <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                </div>
                <p className="text-slate-600 text-[11px]">Pendientes por revisión en el CRM de admisión.</p>
                <span className="text-amber-800 font-bold text-[10px] block pt-1 group-hover:underline">
                  Revisar candidatos →
                </span>
              </div>
            </Link>

            <Link href="/mentor" className="group">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1 hover:border-slate-300 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">3 Mentores</span>
                  <span className="text-[10px] text-slate-400">Hoy</span>
                </div>
                <p className="text-slate-500 text-[11px]">Confirmación de horarios para sesiones 1:1.</p>
                <span className="text-blue-600 font-bold text-[10px] block pt-1 group-hover:underline">
                  Ver agenda de mentores →
                </span>
              </div>
            </Link>

            <Link href={`/org/${slug}/programs/${program.slug}/judges`} className="group">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1 hover:border-slate-300 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">Rúbrica de Jurados</span>
                  <span className="text-emerald-600 text-[10px] font-bold">100% OK</span>
                </div>
                <p className="text-slate-500 text-[11px]">Ponderación equilibrada sin alertas de inconsistencia.</p>
                <span className="text-blue-600 font-bold text-[10px] block pt-1 group-hover:underline">
                  Configurar Jury OS →
                </span>
              </div>
            </Link>

            <Link href={`/org/${slug}/programs/${program.slug}/live`} className="group">
              <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-xs space-y-1 hover:bg-slate-800 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Live Event Mode</span>
                  <Radio className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <p className="text-slate-400 text-[11px]">Consola operativa para tablets y check-in del evento.</p>
                <span className="text-blue-400 font-bold text-[10px] block pt-1 group-hover:underline">
                  Abrir consola en vivo →
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* ACTIVE PROGRAM CARD (HIGH IMPACT) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div className="flex items-center gap-4">
              <img
                src={program.coverImage}
                alt={program.title}
                className="w-16 h-16 rounded-2xl object-cover border border-slate-200"
              />
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm" dot>
                    PROGRAMA ACTIVO
                  </Badge>
                  <span className="text-xs text-slate-500">{program.city} · {program.format}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{program.title}</h3>
                <p className="text-xs text-slate-500">
                  {program.startDate} al {program.endDate} · Bolsa: <strong>{program.prizePool}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link href={`/hackathons/${program.slug}`} target="_blank">
                <Button variant="outline" size="sm" className="text-xs">
                  Ver landing pública
                </Button>
              </Link>
              <Link href={`/org/${slug}/programs/${program.slug}`}>
                <Button size="sm" className="bg-slate-950 text-white font-semibold">
                  Command Center
                </Button>
              </Link>
            </div>
          </div>

          {/* Program Funnel & Stats Snapshot */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400">Total Postulaciones</span>
              <p className="text-2xl font-bold text-slate-900 mt-1">{program.stats.applications}</p>
              <span className="text-[10px] text-emerald-600 font-semibold">+34% sobre la meta</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400">Builders Admitidos</span>
              <p className="text-2xl font-bold text-slate-900 mt-1">{program.stats.accepted}</p>
              <span className="text-[10px] text-slate-500">Tasa de aceptación: 32.7%</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400">Equipos Armados</span>
              <p className="text-2xl font-bold text-slate-900 mt-1">{program.stats.teams}</p>
              <span className="text-[10px] text-blue-600 font-semibold">34 escuadras activas</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400">Proyectos Entregados</span>
              <p className="text-2xl font-bold text-emerald-600 mt-1">{program.stats.submissions}</p>
              <span className="text-[10px] text-slate-500">Listos para Jury OS</span>
            </div>
          </div>
        </div>

        {/* POST-HACKATHON PIPELINE PREVIEW */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                Diferenciador Exclusivo
              </span>
              <h3 className="text-lg font-bold mt-0.5">Project Pipeline Post-Evento</h3>
              <p className="text-xs text-slate-400">
                1 proyecto ganador en validación de seguridad para piloto corporativo formal.
              </p>
            </div>
            <Link href={`/org/${slug}/projects`}>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Abrir Tablero Kanban
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
