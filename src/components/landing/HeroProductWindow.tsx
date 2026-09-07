"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Scale,
  GitBranch,
  FileText,
  Activity,
  ArrowRight,
} from "lucide-react";

export function HeroProductWindow() {
  const [activeTab, setActiveTab] = useState<"benchmarks" | "brief" | "jury" | "handoff">("benchmarks");

  const teams = [
    {
      name: "Equipo Alpha (Ganador)",
      placement: "1er Lugar · Pase a Piloto",
      architecture: "Go 1.22 + Micro-LLM Local (Llama 3 8B) + Redis Cache + Qdrant",
      latency: "68 ms",
      costPer1k: "$0.02 USD (On-prem)",
      accuracy: "99.4% precisión",
      dockerSize: "38 MB",
      memoryUsage: "1.4 GB RAM",
      repoCommitCount: "142 commits",
      verdict: "Arquitectura óptima para despliegue on-premise con cero fuga de datos fuera del perímetro corporativo.",
      highlight: true,
    },
    {
      name: "Equipo Beta (Finalista)",
      placement: "2do Lugar",
      architecture: "FastAPI + Claude 3.5 Sonnet + PostgreSQL pgvector",
      latency: "280 ms",
      costPer1k: "$1.45 USD (API)",
      accuracy: "98.8% precisión",
      dockerSize: "185 MB",
      memoryUsage: "512 MB RAM",
      repoCommitCount: "98 commits",
      verdict: "Excelente extracción de cláusulas complejas; costo de inferencia elevado para volúmenes mayores a 100k transacciones/mes.",
      highlight: false,
    },
    {
      name: "Equipo Gamma (Finalista)",
      placement: "3er Lugar",
      architecture: "Node.js 20 + Python RAG Pipeline + ChromaDB",
      latency: "1.250 ms",
      costPer1k: "$0.80 USD",
      accuracy: "92.1% precisión",
      dockerSize: "1.1 GB",
      memoryUsage: "3.8 GB RAM",
      repoCommitCount: "76 commits",
      verdict: "Latencia alta en procesamiento por lotes; interfaz de usuario destacada pero arquitectura monolítica pesada.",
      highlight: false,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto text-left">
      {/* Outer Terminal Container */}
      <div className="bg-[#141517] rounded-2xl sm:rounded-3xl border border-[#2B2D33] shadow-editorial-elevated overflow-hidden transition-all duration-300">
        {/* Terminal Header Chrome */}
        <div className="px-3.5 sm:px-6 py-2.5 sm:py-3 bg-[#1C1E24] border-b border-[#2B2D36] flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            </div>
            <div className="h-3.5 w-px bg-[#2B2D36] shrink-0" />
            <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-[#9CA3AF] truncate">
              <span className="text-white font-semibold shrink-0">RETO:</span>
              <span className="truncate text-[#D1D5DB]">conciliacion-facturas-dian-v2</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[9px] sm:text-[10px] shrink-0">
            <span className="px-2 py-0.5 rounded bg-[#10B981]/15 text-[#6EE7B7] border border-[#10B981]/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="hidden sm:inline">BENCHMARK EN VIVO</span>
              <span className="sm:hidden">EN VIVO</span>
            </span>
            <span className="hidden md:inline-block px-2 py-0.5 rounded bg-[#252830] text-[#9CA3AF] border border-[#3F424E]">
              Vista Demostrativa
            </span>
          </div>
        </div>

        {/* Tab Navigation with touch scroll & fluid indicators */}
        <div className="px-2 sm:px-6 bg-[#181A20] border-b border-[#2B2D36] flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none snap-x">
          <button
            type="button"
            onClick={() => setActiveTab("benchmarks")}
            className={`min-h-[44px] py-2.5 px-3 text-[11px] sm:text-xs font-mono font-bold flex items-center gap-1.5 sm:gap-2 border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap snap-start ${
              activeTab === "benchmarks"
                ? "border-[#3B82F6] text-white bg-[#1E222B]/40"
                : "border-transparent text-[#71717A] hover:text-[#D1D5DB] hover:bg-[#1E222B]/20"
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
            <span>01. Comparativa (3 Finalistas)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("brief")}
            className={`min-h-[44px] py-2.5 px-3 text-[11px] sm:text-xs font-mono font-bold flex items-center gap-1.5 sm:gap-2 border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap snap-start ${
              activeTab === "brief"
                ? "border-[#3B82F6] text-white bg-[#1E222B]/40"
                : "border-transparent text-[#71717A] hover:text-[#D1D5DB] hover:bg-[#1E222B]/20"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
            <span>02. Pliego & Datasets</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("jury")}
            className={`min-h-[44px] py-2.5 px-3 text-[11px] sm:text-xs font-mono font-bold flex items-center gap-1.5 sm:gap-2 border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap snap-start ${
              activeTab === "jury"
                ? "border-[#3B82F6] text-white bg-[#1E222B]/40"
                : "border-transparent text-[#71717A] hover:text-[#D1D5DB] hover:bg-[#1E222B]/20"
            }`}
          >
            <Scale className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
            <span>03. Rúbrica Jury OS</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("handoff")}
            className={`min-h-[44px] py-2.5 px-3 text-[11px] sm:text-xs font-mono font-bold flex items-center gap-1.5 sm:gap-2 border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap snap-start ${
              activeTab === "handoff"
                ? "border-[#3B82F6] text-white bg-[#1E222B]/40"
                : "border-transparent text-[#71717A] hover:text-[#D1D5DB] hover:bg-[#1E222B]/20"
            }`}
          >
            <GitBranch className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
            <span>04. Handoff de Piloto</span>
          </button>
        </div>

        {/* Tab 1: Benchmarks */}
        {activeTab === "benchmarks" && (
          <div className="p-4 sm:p-6 space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-1 text-xs">
              <span className="text-[#9CA3AF] font-mono text-[11px]">
                Dataset ciego: <strong>14.200 documentos (Facturas + XML DIAN)</strong>
              </span>
              <span className="text-[#34D399] font-mono text-[11px] flex items-center gap-1">
                <span>✓</span> Repositorios Git verificados
              </span>
            </div>

            <div className="space-y-3">
              {teams.map((t, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-200 text-xs space-y-2.5 ${
                    t.highlight
                      ? "bg-[#1E222B] border-[#3B82F6] shadow-sm"
                      : "bg-[#16181E] border-[#2B2D36] hover:border-[#3F424E]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{t.name}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                          t.highlight
                            ? "bg-[#10B981]/20 text-[#6EE7B7] border border-[#10B981]/30"
                            : "bg-[#252830] text-[#9CA3AF]"
                        }`}
                      >
                        {t.placement}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#60A5FA]">
                      {t.repoCommitCount}
                    </span>
                  </div>

                  <p className="text-[11px] font-mono text-[#D1D5DB] break-words">
                    <strong className="text-white">Stack:</strong> {t.architecture}
                  </p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-0.5 font-mono text-[11px]">
                    <div className="p-2 rounded bg-[#141517] border border-[#252830]">
                      <span className="text-[#71717A] block text-[9px] uppercase">Latencia</span>
                      <span className="font-bold text-white">{t.latency}</span>
                    </div>
                    <div className="p-2 rounded bg-[#141517] border border-[#252830]">
                      <span className="text-[#71717A] block text-[9px] uppercase">Costo x 1k</span>
                      <span className="font-bold text-white">{t.costPer1k}</span>
                    </div>
                    <div className="p-2 rounded bg-[#141517] border border-[#252830]">
                      <span className="text-[#71717A] block text-[9px] uppercase">Precisión</span>
                      <span className="font-bold text-[#10B981]">{t.accuracy}</span>
                    </div>
                    <div className="p-2 rounded bg-[#141517] border border-[#252830]">
                      <span className="text-[#71717A] block text-[9px] uppercase">Imagen Docker</span>
                      <span className="font-bold text-white">{t.dockerSize} · {t.memoryUsage}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#252830] text-[11px] text-[#9CA3AF] flex flex-col sm:flex-row sm:items-start gap-1">
                    <span className="text-white font-bold shrink-0">Evaluación:</span>
                    <span className="leading-relaxed">{t.verdict}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-[#1C1E24] border border-[#2B2D36] text-[11px] text-[#9CA3AF] leading-relaxed">
              <strong className="text-white">Impacto Económico:</strong> El ganador entrega un costo marginal de \$0.02 USD frente a alternativas en nube de \$1.45 USD por transacción, ahorrando miles de dólares en inferencia recurrente.
            </div>
          </div>
        )}

        {/* Tab 2: Challenge Brief */}
        {activeTab === "brief" && (
          <div className="p-4 sm:p-6 space-y-4 animate-in fade-in duration-200 text-xs text-[#9CA3AF]">
            <div className="p-4 rounded-xl bg-[#16181E] border border-[#2B2D36] space-y-1.5">
              <span className="text-[10px] font-mono text-[#F59E0B] uppercase font-bold block">
                Pliego de Requerimientos Técnicos (Muestra)
              </span>
              <h4 className="text-white font-bold text-sm">
                Pipeline Autónomo de Conciliación: Facturas vs Órdenes SAP
              </h4>
              <p className="text-[11px] text-[#D1D5DB] leading-relaxed">
                Automatizar el cotejo de 12.000 facturas mensuales contra órdenes de compra para eliminar moras y pagos duplicados.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#16181E] border border-[#2B2D36] space-y-1">
                <span className="text-[#71717A] font-mono text-[10px] uppercase block font-bold">Datasets</span>
                <p className="text-white font-mono text-[11px] leading-relaxed">
                  • 2.500 facturas sintéticas<br />
                  • 1.000 órdenes anonimizadas<br />
                  • Schema JSON de reglas DIAN
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#16181E] border border-[#2B2D36] space-y-1">
                <span className="text-[#71717A] font-mono text-[10px] uppercase block font-bold">Restricciones</span>
                <p className="text-white font-mono text-[11px] leading-relaxed">
                  • Latencia máx: &lt;500ms/doc<br />
                  • Docker reproducible<br />
                  • Cero datos enviados a terceros
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#16181E] border border-[#2B2D36] space-y-1">
                <span className="text-[#71717A] font-mono text-[10px] uppercase block font-bold">Criterio de Éxito</span>
                <p className="text-[#10B981] font-mono text-[11px] font-bold leading-relaxed">
                  Precisión F1 &gt; 98% en discrepancias con costo mínimo de cómputo por documento.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Jury OS */}
        {activeTab === "jury" && (
          <div className="p-4 sm:p-6 space-y-4 animate-in fade-in duration-200 text-xs">
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#16181E] border border-[#2B2D36] flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono text-[#10B981] uppercase font-bold block">
                  Rúbrica Ponderada al 100%
                </span>
                <h4 className="text-white font-bold text-sm mt-0.5">
                  Consola de Evaluación a Ciegas (Jury OS)
                </h4>
              </div>
              <span className="px-2 py-1 rounded bg-[#252830] text-[10px] font-mono text-[#9CA3AF] shrink-0">
                5 Jurados Calibrados
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 font-mono text-[11px]">
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36]">
                <span className="text-[#71717A] block text-[10px]">Arquitectura</span>
                <span className="font-bold text-white text-base">30%</span>
                <span className="text-[10px] text-[#9CA3AF] block mt-0.5">Código limpio & CI/CD</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36]">
                <span className="text-[#71717A] block text-[10px]">Precisión F1</span>
                <span className="font-bold text-white text-base">25%</span>
                <span className="text-[10px] text-[#9CA3AF] block mt-0.5">Acierto documental</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36]">
                <span className="text-[#71717A] block text-[10px]">Costo Infra</span>
                <span className="font-bold text-white text-base">20%</span>
                <span className="text-[10px] text-[#9CA3AF] block mt-0.5">TCO a 1 año</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36]">
                <span className="text-[#71717A] block text-[10px]">Operabilidad</span>
                <span className="font-bold text-white text-base">15%</span>
                <span className="text-[10px] text-[#9CA3AF] block mt-0.5">Manejo de excepciones</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#141517] border border-[#2B2D36]">
                <span className="text-[#71717A] block text-[10px]">Seguridad & IP</span>
                <span className="font-bold text-white text-base">10%</span>
                <span className="text-[10px] text-[#9CA3AF] block mt-0.5">Aislamiento de datos</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#1C1E24] border border-[#2B2D36] text-[11px] text-[#9CA3AF]">
              <strong className="text-white">Anti-Sesgo:</strong> Evaluación sin nombres ni marcas visibles hasta consolidar el ranking final.
            </div>
          </div>
        )}

        {/* Tab 4: Handoff */}
        {activeTab === "handoff" && (
          <div className="p-4 sm:p-6 space-y-4 animate-in fade-in duration-200 text-xs text-[#9CA3AF]">
            <div className="p-4 rounded-xl bg-[#16181E] border border-[#2B2D36] space-y-1">
              <span className="text-[10px] font-mono text-[#A78BFA] uppercase font-bold block">
                Ruta hacia Piloto Productivo (60 a 90 Días)
              </span>
              <h4 className="text-white font-bold text-sm">
                Traspaso directo a los servidores de tu empresa
              </h4>
              <p className="text-[11px] text-[#D1D5DB] leading-relaxed">
                El objetivo no es ganar un trofeo: es dejar software funcionando en tu infraestructura.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#141517] border border-[#2B2D36] space-y-1">
                <span className="text-white font-bold block text-xs">Fase 1 · Días 1 a 15</span>
                <p className="text-[11px] text-[#D1D5DB]">Handoff de repositorios Git, documentación técnica y cesión de licencias IP.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#141517] border border-[#2B2D36] space-y-1">
                <span className="text-white font-bold block text-xs">Fase 2 · Días 16 a 45</span>
                <p className="text-[11px] text-[#D1D5DB]">Despliegue en staging corporativo con monitoreo de rendimiento y pruebas de estrés.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#141517] border border-[#2B2D36] space-y-1">
                <span className="text-[#10B981] font-bold block text-xs">Fase 3 · Días 46 a 90</span>
                <p className="text-[11px] text-[#D1D5DB]">Pase a producción con métricas de ROI y acompañamiento de ingeniería.</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA bar */}
        <div className="px-3.5 sm:px-6 py-3 bg-[#1C1E24] border-t border-[#2B2D36] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 text-xs">
          <span className="text-[#9CA3AF] text-[11px] font-mono text-center sm:text-left">
            ¿Tienes un cuello de botella técnico similar en tu empresa?
          </span>
          <Link href="/start" className="w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto min-h-[44px] px-4 py-2 rounded-lg bg-white text-[#141517] hover:bg-[#F4F4EE] active:scale-[0.98] font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Estructurar un reto similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
