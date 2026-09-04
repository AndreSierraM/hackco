"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Briefcase,
  FolderGit2,
  Trophy,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { clsx } from "clsx";

export function HeroProductWindow() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "scoring" | "funnel">("funnel");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10">
      {/* Surrounding floating stat pills */}
      <div className="hidden lg:block absolute -top-5 -left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/90 shadow-lg text-xs animate-bounce duration-1000">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-slate-900">428 Participantes</p>
            <p className="text-[10px] text-slate-500">Bogotá · Medellín · Cali · Remoto</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -top-6 -right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/90 shadow-lg text-xs">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-slate-900">94 Equipos Activos</p>
            <p className="text-[10px] text-slate-500">100% Cobertura de habilidades</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -bottom-5 -left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/90 shadow-lg text-xs">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-50 text-purple-700">
            <Star className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-slate-900">Jury OS: 9.4 Promedio</p>
            <p className="text-[10px] text-slate-500">Rúbrica ponderada al 100%</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute -bottom-6 -right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/90 shadow-lg text-xs">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-slate-900">Piloto Corporativo</p>
            <p className="text-[10px] text-slate-500">3 meses de implementación</p>
          </div>
        </div>
      </div>

      {/* Main Window Box */}
      <div className="bg-white rounded-3xl border border-slate-300/80 shadow-2xl overflow-hidden">
        {/* Window Topbar */}
        <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-xs font-mono text-slate-400">
              kamino.co/org/northstar/programs/bogota-ai-operations
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Badge variant="success" size="sm" dot>
              EVENTO EN CURSO
            </Badge>
          </div>
        </div>

        {/* Window Inner Nav */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between text-xs overflow-x-auto">
          <div className="flex items-center gap-4 font-medium text-slate-600">
            <button
              onClick={() => setActiveTab("funnel")}
              className={clsx(
                "pb-1 border-b-2 font-semibold transition-all",
                activeTab === "funnel"
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              )}
            >
              Conversión & Funnel
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={clsx(
                "pb-1 border-b-2 font-semibold transition-all",
                activeTab === "pipeline"
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              )}
            >
              Pipeline de Proyectos
            </button>
            <button
              onClick={() => setActiveTab("scoring")}
              className={clsx(
                "pb-1 border-b-2 font-semibold transition-all",
                activeTab === "scoring"
                  ? "border-blue-600 text-blue-700"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              )}
            >
              Jury OS (Rúbrica)
            </button>
          </div>
          <Link
            href="/org/northstar"
            className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0"
          >
            Abrir Command Center real <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Tab 1: Funnel & Health */}
        {activeTab === "funnel" && (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] text-slate-500 font-medium">Postulaciones</span>
                <p className="text-xl font-bold text-slate-900 mt-0.5">428</p>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5 mt-1">
                  <TrendingUp className="w-2.5 h-2.5" /> +34% vs meta inicial
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] text-slate-500 font-medium">Aceptados</span>
                <p className="text-xl font-bold text-slate-900 mt-0.5">140</p>
                <span className="text-[10px] text-slate-500 mt-1 block">Tasa admisión: 32.7%</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] text-slate-500 font-medium">Equipos Armados</span>
                <p className="text-xl font-bold text-slate-900 mt-0.5">34</p>
                <span className="text-[10px] text-emerald-600 font-semibold mt-1 block">Matchmaking 98%</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] text-slate-500 font-medium">Proyectos Entregados</span>
                <p className="text-xl font-bold text-slate-900 mt-0.5">26</p>
                <span className="text-[10px] text-blue-600 font-semibold mt-1 block">Completitud 88%</span>
              </div>
            </div>

            {/* Funnel visual bar */}
            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span>Embudo de Conversión del Programa</span>
                <span className="text-slate-500 text-[11px]">428 Aplicados → 26 Entregas → 8 Finalistas → 1 Piloto</span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex gap-1 p-0.5">
                <div className="h-full bg-blue-600 rounded-full w-[45%]" title="Postulados" />
                <div className="h-full bg-indigo-500 rounded-full w-[25%]" title="Aceptados" />
                <div className="h-full bg-teal-500 rounded-full w-[18%]" title="Equipos" />
                <div className="h-full bg-amber-500 rounded-full w-[12%]" title="Finalistas" />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Project Pipeline */}
        {activeTab === "pipeline" && (
          <div className="p-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700">EN EVALUACIÓN (8)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                    Jury OS
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <p className="text-xs font-bold text-slate-900">DocuFlow AI</p>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    Extracción de contratos y conciliación con salvaguardas legales.
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                    <span>Puntaje: 9.4/10</span>
                    <span className="text-emerald-600 font-semibold">3 evaluaciones</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700">FINALISTAS (3)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-semibold">
                    Pitch Ready
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                  <p className="text-xs font-bold text-slate-900">Neural Andes</p>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    Agentes multimodales con memoria a largo plazo para atención al cliente.
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                    <span>Puntaje: 9.1/10</span>
                    <span className="text-purple-600 font-semibold">Finalista</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl border border-emerald-200 bg-emerald-50/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-900">PILOTO CORPORATIVO (1)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                    Post-Evento
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-emerald-300 shadow-xs space-y-1.5">
                  <p className="text-xs font-bold text-slate-900">DocuFlow Enterprise</p>
                  <p className="text-[11px] text-slate-500">
                    Implementación en infraestructura Northstar Labs (Octubre - Diciembre).
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-semibold pt-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> En validación de seguridad
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Scoring */}
        {activeTab === "scoring" && (
          <div className="p-6 text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
              <span className="font-semibold text-slate-800">Rúbrica de Evaluación Northstar Labs (100%)</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Suma Ponderada: 100% Válida
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Impacto y Viabilidad de Negocio</span>
                  <span>25%</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Potencial medible de ROI para piloto corporativo.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Ejecución Técnica & Arquitectura</span>
                  <span>25%</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Solidez del stack, reproducibilidad y seguridad.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Innovación y Originalidad</span>
                  <span>20%</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Uso diferenciado de IA y salvaguardas agénticas.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Experiencia de Usuario + Pitch</span>
                  <span>30%</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Facilidad de adopción y síntesis de demostración.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
