"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  FolderGit2,
  Trophy,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Star,
  Scale,
  Workflow,
  Calendar,
  Layers,
  Sparkles
} from "lucide-react";
import { clsx } from "clsx";

export function HeroProductWindow() {
  const [activeTab, setActiveTab] = useState<"convocatoria" | "equipos" | "evaluacion" | "piloto">("equipos");

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Honest demonstrative indicator */}
      <div className="flex flex-wrap items-center justify-between px-3 mb-3 text-xs font-mono text-[#71717A] gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#E8E8E4] text-[#141517] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            Entorno Demostrativo en Vivo
          </span>
          <span className="hidden sm:inline">· AI for Financial Inclusion Hackathon</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-[#F4F4F1] border border-[#E8E8E4] text-[10px] uppercase tracking-wider text-[#52535A]">
            Vista demostrativa
          </span>
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
              kamino.co/programs/ai-for-financial-inclusion
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#10B981]/20 text-[#6EE7B7] text-[10px] font-mono font-medium border border-[#10B981]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              SPRINT EN CURSO
            </span>
          </div>
        </div>

        {/* Window Inner Nav */}
        <div className="px-6 py-2.5 bg-[#F9F9F8] border-b border-[#E8E8E4] flex items-center justify-between text-xs overflow-x-auto gap-4">
          <div className="flex items-center gap-4 sm:gap-6 font-medium text-[#71717A] shrink-0">
            <button
              onClick={() => setActiveTab("convocatoria")}
              className={clsx(
                "py-1 border-b-2 font-semibold transition-all text-xs cursor-pointer",
                activeTab === "convocatoria"
                  ? "border-[#141517] text-[#141517]"
                  : "border-transparent text-[#71717A] hover:text-[#141517]"
              )}
            >
              1. Convocatoria & Filtro
            </button>
            <button
              onClick={() => setActiveTab("equipos")}
              className={clsx(
                "py-1 border-b-2 font-semibold transition-all text-xs cursor-pointer",
                activeTab === "equipos"
                  ? "border-[#141517] text-[#141517]"
                  : "border-transparent text-[#71717A] hover:text-[#141517]"
              )}
            >
              2. Equipos & Entregables
            </button>
            <button
              onClick={() => setActiveTab("evaluacion")}
              className={clsx(
                "py-1 border-b-2 font-semibold transition-all text-xs cursor-pointer",
                activeTab === "evaluacion"
                  ? "border-[#141517] text-[#141517]"
                  : "border-transparent text-[#71717A] hover:text-[#141517]"
              )}
            >
              3. Jury OS (Evaluación)
            </button>
            <button
              onClick={() => setActiveTab("piloto")}
              className={clsx(
                "py-1 border-b-2 font-semibold transition-all text-xs cursor-pointer",
                activeTab === "piloto"
                  ? "border-[#141517] text-[#141517]"
                  : "border-transparent text-[#71717A] hover:text-[#141517]"
              )}
            >
              4. Pipeline a Piloto
            </button>
          </div>
          <Link
            href="/start"
            className="text-[11px] font-semibold text-[#1846A3] hover:text-[#141517] flex items-center gap-1 shrink-0 font-mono"
          >
            Diseñar Reto →
          </Link>
        </div>

        {/* Tab 1: Convocatoria y Selección */}
        {activeTab === "convocatoria" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <span className="text-[11px] text-[#71717A] font-mono uppercase tracking-wider block">Postulaciones</span>
                <p className="text-xl sm:text-2xl font-bold text-[#141517] font-mono mt-1">182</p>
                <span className="text-[10px] text-[#059669] font-medium flex items-center gap-1 mt-1 font-mono">
                  Perfiles verificados
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <span className="text-[11px] text-[#71717A] font-mono uppercase tracking-wider block">Admitidos</span>
                <p className="text-xl sm:text-2xl font-bold text-[#141517] font-mono mt-1">74</p>
                <span className="text-[10px] text-[#71717A] mt-1 block font-mono">Filtro técnico 40%</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <span className="text-[11px] text-[#71717A] font-mono uppercase tracking-wider block">Equipos Formados</span>
                <p className="text-xl sm:text-2xl font-bold text-[#141517] font-mono mt-1">18</p>
                <span className="text-[10px] text-[#059669] font-medium mt-1 block font-mono">Matchmaking activo</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <span className="text-[11px] text-[#71717A] font-mono uppercase tracking-wider block">Mentores Asignados</span>
                <p className="text-xl sm:text-2xl font-bold text-[#141517] font-mono mt-1">12</p>
                <span className="text-[10px] text-[#1846A3] font-medium mt-1 block font-mono">Sesiones 1:1</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFEFEA] text-[#141517] flex items-center justify-center font-mono font-bold text-xs">
                  IA
                </div>
                <div>
                  <p className="font-bold text-[#141517]">Distribución de Habilidades</p>
                  <p className="text-[11px] text-[#71717A]">42% Fullstack & Backend · 34% AI Engineers · 24% Product Designers</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] font-mono text-[11px] font-semibold border border-[#A7F3D0]">
                Equipos 100% Equilibrados
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Equipos y Proyectos */}
        {activeTab === "equipos" && (
          <div className="p-6 sm:p-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl border border-[#E8E8E4] bg-[#F9F9F8] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#71717A]">Equipo 04</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EEF4FF] text-[#1846A3] font-mono font-medium border border-[#D3E2FE]">
                    Repo Verificado
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#141517]">DocuAudit Multimodal</h4>
                <p className="text-[11px] text-[#52535A] leading-relaxed">
                  Extracción automatizada de pólizas y validación contra normativas financieras locales.
                </p>
                <div className="pt-2 border-t border-[#E8E8E4] flex items-center justify-between text-[10px] text-[#71717A] font-mono">
                  <span>Stack: Next.js + FastAPI + Llama</span>
                  <span className="text-[#059669]">4 commits hoy</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#E8E8E4] bg-[#F9F9F8] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#71717A]">Equipo 09</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EEF4FF] text-[#1846A3] font-mono font-medium border border-[#D3E2FE]">
                    Demo Lista
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#141517]">CreditFlow Agent</h4>
                <p className="text-[11px] text-[#52535A] leading-relaxed">
                  Scoring alternativo para PyMEs analizando extractos bancarios e historiales de facturación electrónica.
                </p>
                <div className="pt-2 border-t border-[#E8E8E4] flex items-center justify-between text-[10px] text-[#71717A] font-mono">
                  <span>Stack: Python + PostgreSQL + React</span>
                  <span className="text-[#059669]">Video subido</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#E8E8E4] bg-[#F9F9F8] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#71717A]">Equipo 14</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF5FF] text-[#7E22CE] font-mono font-medium border border-[#E9D5FF]">
                    En Mentoría
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#141517]">Sentinel Fraud Detection</h4>
                <p className="text-[11px] text-[#52535A] leading-relaxed">
                  Detección en tiempo real de patrones anómalos en transacciones con modelos de grafos.
                </p>
                <div className="pt-2 border-t border-[#E8E8E4] flex items-center justify-between text-[10px] text-[#71717A] font-mono">
                  <span>Stack: Go + PyTorch + GraphDB</span>
                  <span className="text-[#7E22CE]">Revisión de latencia</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Evaluación y Rúbricas (Jury OS) */}
        {activeTab === "evaluacion" && (
          <div className="p-6 sm:p-8 text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E4] text-xs">
              <span className="font-semibold text-[#141517]">Rúbrica de Calificación Ponderada (Sin Hojas de Cálculo)</span>
              <span className="text-[#065F46] font-mono font-semibold bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0] text-[11px]">
                100% Calibrada
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="flex justify-between font-bold text-[#141517]">
                  <span>Impacto & Viabilidad de Negocio</span>
                  <span className="font-mono text-[#1846A3]">30%</span>
                </div>
                <p className="text-[11px] text-[#71717A] mt-1 leading-relaxed">¿Resuelve el problema real planteado por el sponsor?</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="flex justify-between font-bold text-[#141517]">
                  <span>Ejecución Técnica & Arquitectura</span>
                  <span className="font-mono text-[#1846A3]">30%</span>
                </div>
                <p className="text-[11px] text-[#71717A] mt-1 leading-relaxed">Calidad de código, reproducibilidad y uso de APIs.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="flex justify-between font-bold text-[#141517]">
                  <span>Innovación en Enfoque</span>
                  <span className="font-mono text-[#1846A3]">20%</span>
                </div>
                <p className="text-[11px] text-[#71717A] mt-1 leading-relaxed">Originalidad frente a soluciones convencionales.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="flex justify-between font-bold text-[#141517]">
                  <span>Demo Funcional & UX</span>
                  <span className="font-mono text-[#1846A3]">20%</span>
                </div>
                <p className="text-[11px] text-[#71717A] mt-1 leading-relaxed">Claridad de la demostración y facilidad de uso.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Pipeline a Piloto */}
        {activeTab === "piloto" && (
          <div className="p-6 sm:p-8 text-left">
            <div className="p-5 rounded-xl bg-[#ECFDF5]/40 border border-[#A7F3D0] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#065F46]">
                  Proyecto Seleccionado para Piloto Corporativo
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                  Fase Post-Evento
                </span>
              </div>
              <h4 className="text-base font-bold text-[#141517]">DocuAudit Multimodal — Piloto de Validación</h4>
              <p className="text-xs text-[#52535A] leading-relaxed">
                El equipo ganador avanza a un entorno de pruebas controlado de 60 días con datos anonimizados de la organización patrocinadora.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-[11px] font-mono text-[#065F46]">
                <div className="p-2 rounded bg-white border border-[#A7F3D0]">
                  ✓ Acuerdo de IP firmado
                </div>
                <div className="p-2 rounded bg-white border border-[#A7F3D0]">
                  ✓ Sandbox con datos de prueba
                </div>
                <div className="p-2 rounded bg-white border border-[#A7F3D0]">
                  ✓ Sesión semanal de seguimiento
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
