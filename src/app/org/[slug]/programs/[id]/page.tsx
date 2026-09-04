"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { OrganizerSidebar } from "@/components/organizer/OrganizerSidebar";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Workflow,
  ExternalLink,
  Users,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Clock,
  ArrowRight,
  Radio,
  FileSpreadsheet,
  Scale,
  FolderGit2,
  FileCheck2,
} from "lucide-react";

export default function ProgramCommandCenterPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "northstar";
  const id = (params?.id as string) || "bogota-ai-operations";
  const { programs, applications } = usePlatform();

  const program = programs[0];
  const pendingCount = applications.filter((a) => a.status === "UNDER_REVIEW").length;

  const funnelSteps = [
    { label: "Visitas", count: 1420, conv: "100%" },
    { label: "Postulaciones", count: 428, conv: "30.1%" },
    { label: "Aceptados", count: 140, conv: "32.7%" },
    { label: "Acreditados (Check-in)", count: 128, conv: "91.4%" },
    { label: "Equipos", count: 34, conv: "100%" },
    { label: "Entregas", count: 26, conv: "76.4%" },
    { label: "Finalistas", count: 8, conv: "30.7%" },
    { label: "Ganador / Piloto", count: 1, conv: "12.5%" },
  ];

  const healthItems = [
    { label: "Convocatoria & Admisión", status: "Saludable", desc: "+34% sobre la meta de 300 builders", state: "healthy" },
    { label: "Formación de Equipos", status: "Requiere Atención", desc: "4 equipos aún buscan rol de UX o AI", state: "attention" },
    { label: "Jury OS & Asignaciones", status: "Listo", desc: "3 jurados asignados por proyecto", state: "ready" },
    { label: "Comunicaciones", status: "Programadas", desc: "Anuncio de deadline agendado para 18:00", state: "ready" },
  ];

  return (
    <div className="min-h-screen flex bg-[#FBFBFA]">
      <OrganizerSidebar orgSlug={slug} />

      <main className="flex-1 p-6 sm:p-10 overflow-y-auto text-left space-y-8 max-w-6xl">
        {/* Top Header */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="primary" size="sm" dot>
                  FASE DE CONSTRUCCIÓN
                </Badge>
                <span className="text-xs text-slate-400">
                  Día 2 de 14 · Quedan 12 días para Pitch Final
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                Command Center: {program.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Panel operativo unificado para la supervisión de talento, jurados y entregas.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <Link href={`/hackathons/${program.slug}`} target="_blank">
                <Button variant="outline" size="sm" className="text-xs" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                  Ver landing pública
                </Button>
              </Link>
              <Link href={`/org/${slug}/programs/${id}/live`}>
                <Button size="sm" className="bg-rose-600 hover:bg-rose-700 text-white font-semibold" leftIcon={<Radio className="w-3.5 h-3.5 animate-pulse" />}>
                  Live Mode
                </Button>
              </Link>
            </div>
          </div>

          {/* NEXT ACTION BANNER */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-200 text-amber-900 font-bold">
                ACCIÓN 1
              </div>
              <div>
                <p className="font-bold text-slate-900">
                  Revisar {pendingCount} postulaciones pendientes en el CRM
                </p>
                <p className="text-slate-600 text-[11px]">
                  Candidatos de alta prioridad esperan confirmación para sumarse a equipos existentes.
                </p>
              </div>
            </div>
            <Link href={`/org/${slug}/programs/${id}/applications`}>
              <Button size="sm" className="bg-slate-950 text-white font-semibold text-xs shrink-0">
                Abrir CRM de postulantes →
              </Button>
            </Link>
          </div>
        </div>

        {/* FUNNEL DE CONVERSIÓN COMPLETO */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Embudo de Conversión en Tiempo Real</h2>
              <p className="text-xs text-slate-500">Métricas reales del programa con tasas de paso por etapa.</p>
            </div>
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> Conversión saludable
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-2 text-xs">
            {funnelSteps.map((step) => (
              <div key={step.label} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-[10px] text-slate-400 block truncate">{step.label}</span>
                <p className="text-lg font-bold text-slate-900">{step.count}</p>
                <span className="text-[10px] text-blue-600 font-semibold block">{step.conv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* EVENT HEALTH (DIAGNÓSTICO DEL RETO) */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Diagnóstico de Salud Operativa (Event Health)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {healthItems.map((h) => (
              <div
                key={h.label}
                className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{h.label}</span>
                    {h.state === "healthy" || h.state === "ready" ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                    )}
                  </div>
                  <span
                    className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded ${
                      h.state === "healthy" || h.state === "ready"
                        ? "bg-emerald-50 text-emerald-800"
                        : "bg-amber-50 text-amber-800"
                    }`}
                  >
                    {h.status}
                  </span>
                  <p className="text-slate-500 text-[11px] leading-relaxed pt-1">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODULES SHORTCUTS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <Link href={`/org/${slug}/programs/${id}/applications`} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors flex items-center gap-3 group">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-700">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">CRM de Postulantes</p>
              <span className="text-slate-500 text-[11px]">428 registros · Filtros y bulk actions</span>
            </div>
          </Link>

          <Link href={`/org/${slug}/programs/${id}/judges`} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors flex items-center gap-3 group">
            <div className="p-3 rounded-xl bg-purple-50 text-purple-700">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Jury OS & Rúbricas</p>
              <span className="text-slate-500 text-[11px]">Calibración de jurados al 100%</span>
            </div>
          </Link>

          <Link href={`/org/${slug}/projects`} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors flex items-center gap-3 group">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Project Pipeline</p>
              <span className="text-slate-500 text-[11px]">Seguimiento a pilotos corporativos</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
