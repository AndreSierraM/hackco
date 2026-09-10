"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  TrendingUp,
  Code2,
  ArrowRight,
  ShieldAlert,
  Coins,
} from "lucide-react";

interface TrackConfig {
  name: string;
  desc: string;
  icon: React.ElementType;
}

const TRACKS: Record<string, TrackConfig> = {
  ai_agents: {
    name: "Agentes IA & Automatización",
    desc: "Extracción documental, automatización de backoffice, copilotos y agentes autónomos.",
    icon: Sparkles,
  },
  api_core: {
    name: "Modernización de Core & APIs",
    desc: "Migración de monolitos, integración de pasarelas, microservicios y arquitectura cloud.",
    icon: Code2,
  },
  digital_product: {
    name: "Nuevo Producto o Canal Digital",
    desc: "Nuevas experiencias web/mobile para clientes, onboarding digital y autoservicio.",
    icon: Zap,
  },
  fraud_risk: {
    name: "Fraude, Riesgo & Compliance",
    desc: "Modelos predictivos, validación KYC, conciliación de saldos y auditoría regulatoria.",
    icon: ShieldAlert,
  },
};

export function EmpresasRoiCalculator() {
  const [track, setTrack] = useState<string>("ai_agents");
  const [format, setFormat] = useState<"express" | "signature">("signature");

  const isSignature = format === "signature";

  const stats = {
    prototypes: isSignature ? "8 a 15 prototipos" : "3 a 5 prototipos",
    teamsCount: isSignature ? "20 a 40 equipos" : "8 a 12 equipos",
    buildersCount: isSignature ? "80 a 160 builders" : "30 a 50 builders",
    timeToPrototypes: isSignature ? "4 semanas" : "48 horas",
    inHouseEquivalent: isSignature ? "6 a 9 meses" : "2 a 3 meses",
    consultingCostSaved: isSignature ? "$60,000+ USD" : "$25,000+ USD",
    architecturesExplored: isSignature ? "5 a 8 enfoques técnicos distintos" : "3 a 4 enfoques técnicos",
  };

  return (
    <div className="w-full max-w-5xl mx-auto text-left">
      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E8E8E4] shadow-editorial ring-1 ring-black/[0.03] space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E8E4]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Simulador de Retorno de Inversión</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
              Calcula el impacto de un Hackathon en tu empresa
            </h3>
            <p className="text-xs sm:text-sm text-[#52535A] mt-1">
              Compara el resultado de explorar soluciones con Kamino frente a desarrollo interno o consultoría.
            </p>
          </div>

          {/* Format Toggle */}
          <div className="inline-flex p-1 rounded-xl bg-[#F4F4EE] border border-[#E4E4DC] self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setFormat("signature")}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                isSignature
                  ? "bg-white text-[#141517] shadow-xs"
                  : "text-[#71717A] hover:text-[#141517]"
              }`}
            >
              Reto Insignia (4 Semanas)
            </button>
            <button
              type="button"
              onClick={() => setFormat("express")}
              className={`px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                !isSignature
                  ? "bg-white text-[#141517] shadow-xs"
                  : "text-[#71717A] hover:text-[#141517]"
              }`}
            >
              Hackathon Express (48 Horas)
            </button>
          </div>
        </div>

        {/* Track Selector */}
        <div className="space-y-3">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#71717A]">
            1. Selecciona el área técnica de tu desafío:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.entries(TRACKS).map(([key, item]) => {
              const Icon = item.icon;
              const isSelected = track === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTrack(key)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                    isSelected
                      ? "bg-[#EEF4FF]/50 border-[#1846A3] ring-1 ring-[#1846A3] shadow-xs"
                      : "bg-[#FBFBFA] border-[#E8E8E4] hover:bg-white hover:border-[#D0D0C8]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? "bg-[#1846A3] text-white" : "bg-[#F4F4EE] text-[#52535A]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#1846A3]" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#141517]">{item.name}</h4>
                    <p className="text-[11px] text-[#71717A] line-clamp-2 mt-0.5">{item.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Grid */}
        <div className="space-y-3 pt-2">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#71717A]">
            2. Lo que tu empresa obtiene al finalizar:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-[#71717A] block">
                Prototipos Funcionales
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#141517]">
                {stats.prototypes}
              </span>
              <span className="text-[11px] text-[#52535A] block">
                Con repositorios en GitHub y Docker
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-[#71717A] block">
                Tiempo de Entrega
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#1846A3]">
                {stats.timeToPrototypes}
              </span>
              <span className="text-[11px] text-[#52535A] block">
                Vs {stats.inHouseEquivalent} in-house
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-[#71717A] block">
                Talento Involucrado
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#141517]">
                {stats.buildersCount}
              </span>
              <span className="text-[11px] text-[#52535A] block">
                {stats.teamsCount} seleccionados
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#EEF4FF]/40 border border-[#D3E2FE] space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-[#1846A3] block flex items-center gap-1">
                <Coins className="w-3 h-3" />
                Ahorro Estimado R&D
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#1846A3]">
                {stats.consultingCostSaved}
              </span>
              <span className="text-[11px] text-[#52535A] block">
                Frente a consultoría tradicional
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Banner with Action */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#141517] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">
              ¿Quieres una estimación exacta para el desafío de tu empresa?
            </h4>
            <p className="text-xs text-[#9CA3AF]">
              Analizamos la viabilidad técnica y te proponemos la rúbrica y formato sin costo.
            </p>
          </div>

          <Link
            href="/start"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1846A3] hover:bg-[#1E56C8] text-white font-semibold text-xs transition-all text-center flex items-center justify-center gap-2 shrink-0 shadow-xs"
          >
            <span>Evaluar Reto Técnico</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
