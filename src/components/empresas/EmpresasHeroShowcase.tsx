"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileCode2,
  Activity,
  Scale,
  Rocket,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ArrowRight,
  Database,
  Terminal,
} from "lucide-react";

export function EmpresasHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"brief" | "hacking" | "jury" | "pilot">("hacking");

  return (
    <div className="w-full max-w-5xl mx-auto text-left">
      {/* Outer Browser/Window Container with Cruip-style elevated shadow and subtle borders */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#DCDCD5] shadow-editorial-elevated overflow-hidden transition-all duration-300 ring-1 ring-black/[0.04]">
        {/* Browser Top Window Bar */}
        <div className="px-4 sm:px-6 py-3 bg-[#F4F4EE] border-b border-[#E4E4DC] flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 min-w-0">
            {/* macOS window dots */}
            <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
            </div>
            <div className="h-3.5 w-px bg-[#D0D0C8] shrink-0" />
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#52535A] truncate">
              <span className="text-[#141517] font-semibold shrink-0">HACKATHON CORPORATIVO:</span>
              <span className="truncate text-[#1846A3] font-medium">Agentes IA & Conciliación de Pagos</span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] shrink-0">
            <span className="px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#065F46] border border-[#10B981]/30 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>HACKING EN VIVO</span>
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#EAEAE4] text-[#52535A] border border-[#DCDCD5] font-medium">
              VISTA DEMOSTRATIVA
            </span>
          </div>
        </div>

        {/* Tab Navigation (Cruip Open Style) */}
        <div className="px-3 sm:px-6 bg-[#FAFAF8] border-b border-[#E8E8E4] flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab("brief")}
            className={`py-3 px-3.5 text-xs font-mono font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "brief"
                ? "border-[#1846A3] text-[#1846A3] bg-white shadow-2xs"
                : "border-transparent text-[#71717A] hover:text-[#141517] hover:bg-black/[0.02]"
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5 shrink-0" />
            <span>01 · Brief & Datasets</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("hacking")}
            className={`py-3 px-3.5 text-xs font-mono font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "hacking"
                ? "border-[#1846A3] text-[#1846A3] bg-white shadow-2xs"
                : "border-transparent text-[#71717A] hover:text-[#141517] hover:bg-black/[0.02]"
            }`}
          >
            <Activity className="w-3.5 h-3.5 shrink-0" />
            <span>02 · 48h Hacking & Commits</span>
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("jury")}
            className={`py-3 px-3.5 text-xs font-mono font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "jury"
                ? "border-[#1846A3] text-[#1846A3] bg-white shadow-2xs"
                : "border-transparent text-[#71717A] hover:text-[#141517] hover:bg-black/[0.02]"
            }`}
          >
            <Scale className="w-3.5 h-3.5 shrink-0" />
            <span>03 · Jury OS & Evaluación</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("pilot")}
            className={`py-3 px-3.5 text-xs font-mono font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "pilot"
                ? "border-[#1846A3] text-[#1846A3] bg-white shadow-2xs"
                : "border-transparent text-[#71717A] hover:text-[#141517] hover:bg-black/[0.02]"
            }`}
          >
            <Rocket className="w-3.5 h-3.5 shrink-0" />
            <span>04 · Traspaso a Piloto</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-4 sm:p-7 bg-[#FCFCFA]">
          {/* TAB 1: BRIEF & DATASETS */}
          {activeTab === "brief" && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E8E4]">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1846A3]">
                    Fase 1 · Especificación del Desafío
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#141517]">
                    Dolor de Negocio Convertido en Especificación de Ingeniería
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EEF4FF] border border-[#D3E2FE] text-[11px] font-mono text-[#1846A3] font-semibold self-start sm:self-auto">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Sandbox Seguro & NDA</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-[#E8E8E4] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#141517]">
                    <Database className="w-4 h-4 text-[#1846A3]" />
                    <span>Dataset Sintético</span>
                  </div>
                  <p className="text-xs text-[#52535A] leading-relaxed">
                    100,000 transacciones y 1,500 facturas anonimizadas generadas con distribuciones reales para pruebas rigurosas.
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-[#71717A]">
                    Estado: <span className="text-[#10B981] font-semibold">Listo en S3 aislado</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8E8E4] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#141517]">
                    <Terminal className="w-4 h-4 text-[#1846A3]" />
                    <span>Contrato de API</span>
                  </div>
                  <p className="text-xs text-[#52535A] leading-relaxed">
                    Especificación OpenAPI v3 con mocks de autenticación OAuth2 y webhooks para que los equipos integren sin fricción.
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-[#71717A]">
                    Endpoints: <span className="text-[#1846A3] font-semibold">POST /v1/reconcile</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8E8E4] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#141517]">
                    <Clock className="w-4 h-4 text-[#1846A3]" />
                    <span>Criterio de Aceptación</span>
                  </div>
                  <p className="text-xs text-[#52535A] leading-relaxed">
                    Precisión superior al 98.5%, latencia menor a 200 ms por lote y costo por inferencia menor a $0.05 USD.
                  </p>
                  <div className="pt-2 text-[11px] font-mono text-[#71717A]">
                    Meta: <span className="text-[#141517] font-semibold">Piloto en 30 días</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F4F4EE] border border-[#E8E8E4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <p className="text-[#52535A]">
                  <strong className="text-[#141517]">Beneficio para tu empresa:</strong> Los participantes no pierden horas adivinando el problema; construyen sobre requerimientos técnicos exactos desde el minuto 1.
                </p>
                <Link
                  href="/start"
                  className="shrink-0 text-xs font-bold text-[#1846A3] hover:underline flex items-center gap-1 font-mono"
                >
                  Diseñar reto similar <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* TAB 2: 48H HACKING & COMMITS */}
          {activeTab === "hacking" && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E8E8E4]">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1846A3]">
                    Fase 2 · Competencia en Vivo
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#141517]">
                    12 Equipos de Ingeniería Compitiendo con Distintas Arquitecturas
                  </h3>
                </div>
                <div className="text-xs font-mono text-[#71717A]">
                  Tiempo restante: <span className="font-bold text-[#141517]">14h 22m · Checkpoint #3</span>
                </div>
              </div>

              <div className="space-y-3">
                {/* Team Alpha */}
                <div className="p-4 rounded-xl bg-white border-2 border-[#1846A3]/30 shadow-xs hover:border-[#1846A3] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-[#EEF4FF] text-[#1846A3] font-mono text-xs font-bold border border-[#D3E2FE]">
                        Equipo 01 · Alpha
                      </span>
                      <span className="text-xs font-bold text-[#141517]">Agente Go 1.22 + Llama-3 Local + Qdrant</span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0]">
                      Líder en Precisión (99.4%)
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-[#52535A]">
                    <div className="bg-[#FBFBFA] p-2 rounded border border-[#E8E8E4]">
                      <span className="block text-[10px] text-[#71717A]">LATENCIA</span>
                      <span className="font-bold text-[#141517]">68 ms</span>
                    </div>
                    <div className="bg-[#FBFBFA] p-2 rounded border border-[#E8E8E4]">
                      <span className="block text-[10px] text-[#71717A]">COSTO X 1K</span>
                      <span className="font-bold text-[#10B981]">$0.02 USD</span>
                    </div>
                    <div className="bg-[#FBFBFA] p-2 rounded border border-[#E8E8E4]">
                      <span className="block text-[10px] text-[#71717A]">COMMITS</span>
                      <span className="font-bold text-[#141517]">142 commits</span>
                    </div>
                    <div className="bg-[#FBFBFA] p-2 rounded border border-[#E8E8E4]">
                      <span className="block text-[10px] text-[#71717A]">TESTS PASSING</span>
                      <span className="font-bold text-[#10B981]">48/48 (100%)</span>
                    </div>
                  </div>
                </div>

                {/* Team Beta */}
                <div className="p-4 rounded-xl bg-white border border-[#E8E8E4] shadow-xs hover:border-[#D0D0C8] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-[#F4F4EE] text-[#52535A] font-mono text-xs font-bold border border-[#E8E8E4]">
                        Equipo 02 · Beta
                      </span>
                      <span className="text-xs font-bold text-[#141517]">Python FastAPI + Claude 3.5 Sonnet + pgvector</span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#71717A]">Precisión 98.8%</span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-[#52535A]">
                    <div className="bg-[#FBFBFA] p-2 rounded border border-[#E8E8E4]">
                      <span className="block text-[10px] text-[#71717A]">LATENCIA</span>
                      <span className="font-bold text-[#141517]">280 ms</span>
                    </div>
                    <div className="bg-[#FBFBFA] p-2 rounded border border-[#E8E8E4]">
                      <span className="block text-[10px] text-[#71717A]">COSTO X 1K</span>
                      <span className="font-bold text-[#D97706]">$1.45 USD</span>
                    </div>
                    <div className="bg-[#FBFBFA] p-2 rounded border border-[#E8E8E4]">
                      <span className="block text-[10px] text-[#71717A]">COMMITS</span>
                      <span className="font-bold text-[#141517]">98 commits</span>
                    </div>
                    <div className="bg-[#FBFBFA] p-2 rounded border border-[#E8E8E4]">
                      <span className="block text-[10px] text-[#71717A]">TESTS PASSING</span>
                      <span className="font-bold text-[#10B981]">46/48 (95%)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#EEF4FF] border border-[#D3E2FE] flex items-center justify-between text-xs">
                <span className="text-[#1846A3] font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#1846A3]" />
                  <span>Tu equipo técnico no programa nada: observa las soluciones y descarta hipótesis en 48 horas.</span>
                </span>
              </div>
            </div>
          )}

          {/* TAB 3: JURY OS & EVALUATION */}
          {activeTab === "jury" && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E8E8E4]">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1846A3]">
                    Fase 3 · Deliberación del Comité Directivo
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#141517]">
                    Rúbrica Matemática Ponderada al 100% · Cero Hojas de Cálculo
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F4F4EE] border border-[#E8E8E4] text-[11px] font-mono text-[#52535A]">
                  <Scale className="w-3.5 h-3.5 text-[#1846A3]" />
                  <span>Evaluación a Ciegas</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-[#E8E8E4] space-y-1">
                  <div className="flex items-center justify-between font-mono">
                    <span className="font-bold text-[#141517]">Arquitectura & Código</span>
                    <span className="text-[#1846A3] font-bold">35%</span>
                  </div>
                  <p className="text-[11px] text-[#71717A]">
                    Calidad de código en GitHub, dockerización limpia y modularidad del stack.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E8E8E4] space-y-1">
                  <div className="flex items-center justify-between font-mono">
                    <span className="font-bold text-[#141517]">Factibilidad de Piloto</span>
                    <span className="text-[#1846A3] font-bold">35%</span>
                  </div>
                  <p className="text-[11px] text-[#71717A]">
                    Facilidad para desplegar en tu nube corporativa sin reescribir la solución.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E8E8E4] space-y-1">
                  <div className="flex items-center justify-between font-mono">
                    <span className="font-bold text-[#141517]">Impacto en Negocio</span>
                    <span className="text-[#1846A3] font-bold">30%</span>
                  </div>
                  <p className="text-[11px] text-[#71717A]">
                    Ahorro de costos medible y resolución del cuello de botella original.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E8E4] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#141517]">Consenso del Jurado (CTO + VP Innovación)</span>
                  <span className="text-[#10B981] font-bold">Veredicto Unánime</span>
                </div>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  «El Equipo Alpha no solo cumplió los criterios de precisión; su arquitectura en Go y Llama 3 local permite ejecutar la conciliación completamente on-premise sin exponer información financiera a APIs externas.»
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: PILOT HANDOFF */}
          {activeTab === "pilot" && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E8E8E4]">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#10B981]">
                    Fase 4 · Traspaso a Producción
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#141517]">
                    El Demo Day No Es la Meta: Tu Empresa Recibe el Piloto Listo
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#ECFDF5] border border-[#A7F3D0] text-[11px] font-mono text-[#065F46] font-bold">
                  <span>Pase a Piloto Aprobado</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-[#E8E8E4] space-y-3">
                  <span className="text-xs font-mono font-bold text-[#141517] block">
                    Entregables de Ingeniería Incluidos:
                  </span>
                  <ul className="space-y-2 text-xs text-[#52535A]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>Repositorio de GitHub privado transferido a tu organización</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>Dockerfile optimizado y manifiestos de Kubernetes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>Documentación de arquitectura técnica y diagramas C4</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>Cesión formal de derechos de autor y licencias comerciales</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E8E8E4] space-y-3">
                  <span className="text-xs font-mono font-bold text-[#141517] block">
                    Roadmap de Acompañamiento (60 días):
                  </span>
                  <div className="space-y-2 text-xs text-[#52535A]">
                    <div className="p-2 rounded bg-[#FBFBFA] border border-[#E8E8E4] flex items-center justify-between">
                      <span className="font-semibold text-[#141517]">Día 01 a 15:</span>
                      <span>Despliegue en ambiente Staging interno</span>
                    </div>
                    <div className="p-2 rounded bg-[#FBFBFA] border border-[#E8E8E4] flex items-center justify-between">
                      <span className="font-semibold text-[#141517]">Día 16 a 45:</span>
                      <span>Pruebas de estrés y seguridad de la información</span>
                    </div>
                    <div className="p-2 rounded bg-[#FBFBFA] border border-[#E8E8E4] flex items-center justify-between">
                      <span className="font-semibold text-[#141517]">Día 46 a 60:</span>
                      <span>Pase a producción con usuarios controlados</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141517] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="font-medium text-[#E4E4DC]">
                  ¿Tienes un problema de negocio que necesita una solución de software real?
                </span>
                <Link
                  href="/start"
                  className="px-4 py-2 rounded-lg bg-[#1846A3] hover:bg-[#1E56C8] text-white font-bold transition-all shrink-0 font-mono"
                >
                  Evaluar mi reto ahora →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
