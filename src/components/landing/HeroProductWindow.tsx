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
      <div className="bg-[#141517] rounded-2xl border border-[#2B2D33] shadow-editorial-elevated overflow-hidden">
        {/* Terminal Header Chrome */}
        <div className="px-4 sm:px-6 py-3 bg-[#1C1E24] border-b border-[#2B2D36] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            </div>
            <div className="h-4 w-px bg-[#2B2D36]" />
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#9CA3AF]">
              <span className="text-white font-semibold">RETO ACTIVO:</span>
              <span>conciliacion-facturacion-dian-v2</span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px]">
            <span className="px-2 py-0.5 rounded bg-[#10B981]/20 text-[#6EE7B7] border border-[#10B981]/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              BENCHMARK TÉCNICO EN VIVO
            </span>
            <span className="px-2 py-0.5 rounded bg-[#252830] text-[#9CA3AF] border border-[#3F424E]">
              Vista Demostrativa de Entregable
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-4 sm:px-6 pt-3 bg-[#181A20] border-b border-[#2B2D36] flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("benchmarks")}
            className={`pb-3 px-3 text-xs font-mono font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "benchmarks"
                ? "border-[#3B82F6] text-white"
                : "border-transparent text-[#71717A] hover:text-[#D1D5DB]"
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>01. Comparativa de Código (3 Finalistas)</span>
          </button>

          <button
            onClick={() => setActiveTab("brief")}
            className={`pb-3 px-3 text-xs font-mono font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "brief"
                ? "border-[#3B82F6] text-white"
                : "border-transparent text-[#71717A] hover:text-[#D1D5DB]"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>02. Challenge Brief & Datasets</span>
          </button>

          <button
            onClick={() => setActiveTab("jury")}
            className={`pb-3 px-3 text-xs font-mono font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "jury"
                ? "border-[#3B82F6] text-white"
                : "border-transparent text-[#71717A] hover:text-[#D1D5DB]"
            }`}
          >
            <Scale className="w-3.5 h-3.5 text-[#10B981]" />
            <span>03. Scorecard Rúbrica Jury OS</span>
          </button>

          <button
            onClick={() => setActiveTab("handoff")}
            className={`pb-3 px-3 text-xs font-mono font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "handoff"
                ? "border-[#3B82F6] text-white"
                : "border-transparent text-[#71717A] hover:text-[#D1D5DB]"
            }`}
          >
            <GitBranch className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>04. Handoff & Acuerdo de Piloto</span>
          </button>
        </div>

        {/* Tab 1: Benchmarks */}
        {activeTab === "benchmarks" && (
          <div className="p-4 sm:p-6 space-y-4 animate-in fade-in duration-150">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 text-xs">
              <span className="text-[#9CA3AF] font-mono text-[11px]">
                Prueba sobre dataset ciego: <strong>14.200 documentos no estructurados (Facturas + Pagarés + Contratos)</strong>
              </span>
              <span className="text-[#34D399] font-mono text-[11px]">
                ✓ Repositorios de GitHub auditados
              </span>
            </div>

            <div className="space-y-3">
              {teams.map((t, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-xl border transition-all text-xs space-y-3 ${
                    t.highlight
                      ? "bg-[#1E222B] border-[#3B82F6] shadow-sm"
                      : "bg-[#16181E] border-[#2B2D36]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
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

                  <p className="text-[11px] font-mono text-[#D1D5DB]">
                    <strong>Stack Técnico:</strong> {t.architecture}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
                    <div className="p-2 rounded bg-[#141517] border border-[#252830]">
                      <span className="text-[#71717A] block text-[9px] uppercase">Latencia Inferencia</span>
                      <span className="font-bold text-white">{t.latency}</span>
                    </div>
                    <div className="p-2 rounded bg-[#141517] border border-[#252830]">
                      <span className="text-[#71717A] block text-[9px] uppercase">Costo x 1.000 Docs</span>
                      <span className="font-bold text-white">{t.costPer1k}</span>
                    </div>
                    <div className="p-2 rounded bg-[#141517] border border-[#252830]">
                      <span className="text-[#71717A] block text-[9px] uppercase">Precisión Cotejo</span>
                      <span className="font-bold text-[#10B981]">{t.accuracy}</span>
                    </div>
                    <div className="p-2 rounded bg-[#141517] border border-[#252830]">
                      <span className="text-[#71717A] block text-[9px] uppercase">Docker Image / RAM</span>
                      <span className="font-bold text-white">{t.dockerSize} · {t.memoryUsage}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#252830] text-[11px] text-[#9CA3AF] flex items-start gap-2">
                    <span className="text-white font-bold shrink-0">Evaluación del Comité:</span>
                    <span>{t.verdict}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-[#1C1E24] border border-[#2B2D36] text-[11px] text-[#9CA3AF] flex items-center justify-between">
              <span>
                <strong>Por qué importa:</strong> Sin este challenge, la empresa habría contratado a ciegas una solución basada únicamente en API de nube con un costo recurrente de \$1.450 USD por cada 100k documentos, en lugar de la solución on-premise de \$20 USD de costo marginal.
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Challenge Brief */}
        {activeTab === "brief" && (
          <div className="p-4 sm:p-6 space-y-4 animate-in fade-in duration-150 text-xs text-[#9CA3AF]">
            <div className="p-4 rounded-xl bg-[#16181E] border border-[#2B2D36] space-y-2">
              <span className="text-[10px] font-mono text-[#F59E0B] uppercase font-bold block">
                Technical Challenge Specification Document (Fragmento Real)
              </span>
              <h4 className="text-white font-bold text-sm">
                Reto: Pipeline Autónomo de Conciliación de Cuentas por Pagar vs Órdenes de Compra
              </h4>
              <p className="text-[11px] text-[#D1D5DB] leading-relaxed">
                <strong>Problema Operativo:</strong> El equipo de contabilidad tarda 4.2 días hábiles en verificar 12.000 facturas electrónicas mensuales contra contratos en SAP y órdenes de compra en PDF, generando pérdidas por pagos dobles y moras en descuentos financieros.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#16181E] border border-[#2B2D36] space-y-1">
                <span className="text-[#71717A] font-mono text-[10px] uppercase block">Datasets Provistos</span>
                <p className="text-white font-mono text-[11px]">
                  • 2.500 facturas DIAN sintéticas (XML + PDF)<br />
                  • 1.000 órdenes de compra anonimizadas<br />
                  • Schema JSON de restricciones fiscales
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#16181E] border border-[#2B2D36] space-y-1">
                <span className="text-[#71717A] font-mono text-[10px] uppercase block">Restricciones de Arquitectura</span>
                <p className="text-white font-mono text-[11px]">
                  • Latencia máxima por doc: 500 ms<br />
                  • Contenedor Docker reproducible<br />
                  • Cero datos sensibles enviados a modelos de entrenamiento
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#16181E] border border-[#2B2D36] space-y-1">
                <span className="text-[#71717A] font-mono text-[10px] uppercase block">Criterio de Victoria</span>
                <p className="text-[#10B981] font-mono text-[11px] font-bold">
                  Mayor tasa de detección de discrepancias con precisión F1 &gt; 98% y costo de inferencia mínimo.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Jury OS */}
        {activeTab === "jury" && (
          <div className="p-4 sm:p-6 space-y-4 animate-in fade-in duration-150 text-xs">
            <div className="p-4 rounded-xl bg-[#16181E] border border-[#2B2D36] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#10B981] uppercase font-bold block">
                  Rúbrica Ponderada al 100% · Evaluación a Ciegas
                </span>
                <h4 className="text-white font-bold text-sm mt-0.5">
                  Consola de Calificación del Comité (Jury OS)
                </h4>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#252830] text-[10px] font-mono text-[#9CA3AF]">
                5 Jurados Calibrados
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 font-mono text-[11px]">
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36]">
                <span className="text-[#71717A] block text-[10px]">1. Viabilidad Técnica</span>
                <span className="font-bold text-white text-base">30%</span>
                <span className="text-[10px] text-[#9CA3AF] block mt-1">Arquitectura y código limpio</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36]">
                <span className="text-[#71717A] block text-[10px]">2. Precisión &amp; F1</span>
                <span className="font-bold text-white text-base">25%</span>
                <span className="text-[10px] text-[#9CA3AF] block mt-1">Tasa de acierto documental</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36]">
                <span className="text-[#71717A] block text-[10px]">3. Costo Infraestructura</span>
                <span className="font-bold text-white text-base">20%</span>
                <span className="text-[10px] text-[#9CA3AF] block mt-1">Cálculo de TCO a 1 año</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36]">
                <span className="text-[#71717A] block text-[10px]">4. Experiencia Operativa</span>
                <span className="font-bold text-white text-base">15%</span>
                <span className="text-[10px] text-[#9CA3AF] block mt-1">Claridad de excepciones</span>
              </div>
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36]">
                <span className="text-[#71717A] block text-[10px]">5. Seguridad &amp; IP</span>
                <span className="font-bold text-white text-base">10%</span>
                <span className="text-[10px] text-[#9CA3AF] block mt-1">Aislamiento de datos</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#1C1E24] border border-[#2B2D36] text-[11px] text-[#9CA3AF]">
              <strong>Control Anti-Sesgo:</strong> Los jurados califican sin ver nombres ni afiliaciones de los builders hasta consolidar la deliberación matemática.
            </div>
          </div>
        )}

        {/* Tab 4: Handoff */}
        {activeTab === "handoff" && (
          <div className="p-4 sm:p-6 space-y-4 animate-in fade-in duration-150 text-xs text-[#9CA3AF]">
            <div className="p-4 rounded-xl bg-[#16181E] border border-[#2B2D36] space-y-2">
              <span className="text-[10px] font-mono text-[#A78BFA] uppercase font-bold block">
                Fase de Integración en Piloto (60 a 90 Días)
              </span>
              <h4 className="text-white font-bold text-sm">
                Del Demo Day al Despliegue en Staging Corporativo
              </h4>
              <p className="text-[11px] leading-relaxed text-[#D1D5DB]">
                El valor comercial de Kamino radica en que el proyecto no se muere en el podio. Estructuramos el contrato de piloto, la cesión de licencias y el roadmap de implementación:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36] space-y-1">
                <span className="text-white font-bold block">Día 1 a 15: Transferencia Técnica</span>
                <p className="text-[11px]">Handoff de repositorios en GitHub, firma de acuerdos de confidencialidad y cesión de IP para piloto.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36] space-y-1">
                <span className="text-white font-bold block">Día 16 a 45: Staging &amp; Pruebas</span>
                <p className="text-[11px]">Despliegue en servidores de staging de la empresa con carga controlada y monitoreo de latencias.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#141517] border border-[#2B2D36] space-y-1">
                <span className="text-[#10B981] font-bold block">Día 46 a 90: Piloto Productivo</span>
                <p className="text-[11px]">Integración con el ERP/Core de negocio y métricas de ROI presentadas al comité directivo.</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#1C1E24] border-t border-[#2B2D36] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-[#9CA3AF] text-[11px] font-mono">
            ¿Tienes un cuello de botella interno similar en tu empresa?
          </span>
          <Link href="/start">
            <button className="px-4 py-2 rounded-lg bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-xs">
              <span>Estructurar un reto similar para mi empresa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
