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
    <div className="relative w-full max-w-5xl mx-auto mt-12">
      {/* Surrounding contextual status indicators (anchored, not bouncing) */}
      <div className="hidden lg:flex items-center justify-between px-2 mb-3 text-xs font-mono text-[#71717A]">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F4F4F1] border border-[#E8E8E4] text-[#141517] font-sans font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            Live Instance: Bogota Hub
          </span>
          <span>Latency: 24ms</span>
          <span>·</span>
          <span>428 Participantes verificados</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Jury OS Consensus: 94.2%</span>
        </div>
      </div>

      {/* Main Window Box */}
      <div className="bg-white rounded-2xl border border-[#DCDCD5] shadow-editorial-elevated overflow-hidden text-left">
        {/* Window Topbar */}
        <div className="px-5 py-3 bg-[#141517] text-white flex items-center justify-between border-b border-[#252830]">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#3F424E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#3F424E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#3F424E]" />
            </div>
            <div className="h-4 w-px bg-[#2B2D36] mx-1" />
            <span className="text-[11px] font-mono text-[#9CA3AF] tracking-tight">
              kamino.co/org/northstar/programs/bogota-ai-operations
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#10B981]/20 text-[#6EE7B7] text-[10px] font-mono font-medium border border-[#10B981]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              SPRINT ACTIVO
            </span>
          </div>
        </div>

        {/* Window Inner Nav */}
        <div className="px-6 py-2.5 bg-[#F9F9F8] border-b border-[#E8E8E4] flex items-center justify-between text-xs overflow-x-auto">
          <div className="flex items-center gap-5 font-medium text-[#71717A]">
            <button
              onClick={() => setActiveTab("funnel")}
              className={clsx(
                "py-1 border-b-2 font-semibold transition-all text-xs cursor-pointer",
                activeTab === "funnel"
                  ? "border-[#141517] text-[#141517]"
                  : "border-transparent text-[#71717A] hover:text-[#141517]"
              )}
            >
              Pipeline & Conversión
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={clsx(
                "py-1 border-b-2 font-semibold transition-all text-xs cursor-pointer",
                activeTab === "pipeline"
                  ? "border-[#141517] text-[#141517]"
                  : "border-transparent text-[#71717A] hover:text-[#141517]"
              )}
            >
              Proyectos Entregados (26)
            </button>
            <button
              onClick={() => setActiveTab("scoring")}
              className={clsx(
                "py-1 border-b-2 font-semibold transition-all text-xs cursor-pointer",
                activeTab === "scoring"
                  ? "border-[#141517] text-[#141517]"
                  : "border-transparent text-[#71717A] hover:text-[#141517]"
              )}
            >
              Rúbrica Ponderada (Jury OS)
            </button>
          </div>
          <Link
            href="/org/northstar"
            className="text-[11px] font-semibold text-[#1846A3] hover:text-[#141517] flex items-center gap-1 shrink-0 font-mono"
          >
            Open Command Center →
          </Link>
        </div>

        {/* Tab 1: Funnel & Health */}
        {activeTab === "funnel" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <span className="text-[11px] text-[#71717A] font-mono uppercase tracking-wider block">Postulaciones</span>
                <p className="text-2xl font-bold text-[#141517] font-mono mt-1">428</p>
                <span className="text-[10px] text-[#059669] font-medium flex items-center gap-1 mt-1 font-mono">
                  <TrendingUp className="w-3 h-3" /> +34% vs meta
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <span className="text-[11px] text-[#71717A] font-mono uppercase tracking-wider block">Aceptados</span>
                <p className="text-2xl font-bold text-[#141517] font-mono mt-1">140</p>
                <span className="text-[10px] text-[#71717A] mt-1 block font-mono">Admisión: 32.7%</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <span className="text-[11px] text-[#71717A] font-mono uppercase tracking-wider block">Equipos Activos</span>
                <p className="text-2xl font-bold text-[#141517] font-mono mt-1">34</p>
                <span className="text-[10px] text-[#059669] font-medium mt-1 block font-mono">Matchmaking 98%</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <span className="text-[11px] text-[#71717A] font-mono uppercase tracking-wider block">Entregas Finales</span>
                <p className="text-2xl font-bold text-[#141517] font-mono mt-1">26</p>
                <span className="text-[10px] text-[#1846A3] font-medium mt-1 block font-mono">Completitud 88%</span>
              </div>
            </div>

            {/* Funnel visual bar */}
            <div className="space-y-2 text-left pt-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#141517]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#71717A]">Embudo de Conversión</span>
                <span className="text-[#71717A] text-[11px] font-mono">428 Postulados → 26 Entregas → 8 Finalistas → 1 Piloto</span>
              </div>
              <div className="h-2.5 w-full bg-[#EFEFEA] rounded-full overflow-hidden flex gap-0.5 p-0.5">
                <div className="h-full bg-[#1846A3] rounded-full w-[45%]" title="Postulados" />
                <div className="h-full bg-[#3B82F6] rounded-full w-[25%]" title="Aceptados" />
                <div className="h-full bg-[#10B981] rounded-full w-[18%]" title="Equipos" />
                <div className="h-full bg-[#D97706] rounded-full w-[12%]" title="Finalistas" />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Project Pipeline */}
        {activeTab === "pipeline" && (
          <div className="p-6 sm:p-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl border border-[#E8E8E4] bg-[#F9F9F8]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#71717A]">En Evaluación (8)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EEF4FF] text-[#1846A3] font-mono font-medium border border-[#D3E2FE]">
                    Jury OS
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-[#E8E8E4] shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#141517]">DocuFlow AI</p>
                    <span className="text-[10px] font-mono font-semibold text-[#059669]">9.4 / 10</span>
                  </div>
                  <p className="text-[11px] text-[#71717A] line-clamp-2">
                    Extracción de contratos y conciliación con salvaguardas legales.
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-[#71717A] pt-1 border-t border-[#F4F4F1] font-mono">
                    <span>3 evaluaciones</span>
                    <span className="text-[#059669]">Consenso alto</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#E8E8E4] bg-[#F9F9F8]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#71717A]">Finalistas (3)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF5FF] text-[#6B21A8] font-mono font-medium border border-[#E9D5FF]">
                    Pitch Day
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-[#E8E8E4] shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#141517]">Neural Andes</p>
                    <span className="text-[10px] font-mono font-semibold text-[#6B21A8]">9.1 / 10</span>
                  </div>
                  <p className="text-[11px] text-[#71717A] line-clamp-2">
                    Agentes multimodales con memoria a largo plazo para atención al cliente.
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-[#71717A] pt-1 border-t border-[#F4F4F1] font-mono">
                    <span>Finalista Track 02</span>
                    <span className="text-[#6B21A8]">Demo aprobada</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#A7F3D0] bg-[#ECFDF5]/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#065F46]">Piloto Corporativo (1)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#065F46] font-mono font-medium border border-[#A7F3D0]">
                    Post-Evento
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-[#A7F3D0] shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#141517]">DocuFlow Enterprise</p>
                    <span className="text-[10px] font-mono font-semibold text-[#065F46]">Q4 2026</span>
                  </div>
                  <p className="text-[11px] text-[#52535A]">
                    Implementación en infraestructura Northstar Labs (Octubre - Diciembre).
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#065F46] font-medium pt-1 border-t border-[#E8E8E4] font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" /> En validación de seguridad de datos
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Scoring */}
        {activeTab === "scoring" && (
          <div className="p-6 sm:p-8 text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E4] text-xs">
              <span className="font-semibold text-[#141517]">Rúbrica de Evaluación Ponderada Northstar Labs</span>
              <span className="text-[#065F46] font-mono font-semibold bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0] text-[11px]">
                Suma Ponderada: 100.0% Válida
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="flex justify-between font-bold text-[#141517]">
                  <span>Impacto y Viabilidad de Negocio</span>
                  <span className="font-mono text-[#1846A3]">25%</span>
                </div>
                <p className="text-[11px] text-[#71717A] mt-1 leading-relaxed">Potencial medible de ROI para piloto corporativo.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="flex justify-between font-bold text-[#141517]">
                  <span>Ejecución Técnica & Arquitectura</span>
                  <span className="font-mono text-[#1846A3]">25%</span>
                </div>
                <p className="text-[11px] text-[#71717A] mt-1 leading-relaxed">Solidez del stack, reproducibilidad y seguridad.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="flex justify-between font-bold text-[#141517]">
                  <span>Innovación y Originalidad</span>
                  <span className="font-mono text-[#1846A3]">20%</span>
                </div>
                <p className="text-[11px] text-[#71717A] mt-1 leading-relaxed">Uso diferenciado de IA y salvaguardas agénticas.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="flex justify-between font-bold text-[#141517]">
                  <span>Experiencia de Usuario + Pitch</span>
                  <span className="font-mono text-[#1846A3]">30%</span>
                </div>
                <p className="text-[11px] text-[#71717A] mt-1 leading-relaxed">Facilidad de adopción y síntesis de demostración.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
