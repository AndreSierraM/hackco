"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lightbulb, Wrench, ShieldAlert, Rocket, UserCheck, Flame, Globe2, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";

export function FormatSelector() {
  const [selectedGoal, setSelectedGoal] = useState<string>("prototypes");

  const goals = [
    {
      id: "prototypes",
      label: "Construir prototipos funcionales",
      icon: Wrench,
      recommendation: {
        title: "Signature Tech Hackathon",
        description: "Enfoque intensivo para pasar de especificación técnica a código ejecutable y demo en vivo.",
        duration: "3 a 5 días o 2 semanas híbridas",
        participants: "80 - 250 builders seleccionados",
        format: "Híbrido o Presencial",
        phases: ["Convocatoria técnica", "Briefing de arquitectura", "Construcción guiada", "Pitch y evaluación"],
        outcome: "15 a 30 repositorios funcionando con frontend y APIs",
      },
    },
    {
      id: "problem",
      label: "Resolver un reto operativo específico",
      icon: ShieldAlert,
      recommendation: {
        title: "Corporate Innovation Challenge",
        description: "Desafío estructurado con datos reales y validación directa por líderes de área.",
        duration: "4 a 6 semanas",
        participants: "30 - 60 equipos calificados",
        format: "Remoto con final presencial",
        phases: ["Inmersión en el dolor", "Mentorías técnicas", "Validación con usuarios", "Comité de piloto"],
        outcome: "3 a 5 soluciones listas para integración en piloto corporativo",
      },
    },
    {
      id: "talent",
      label: "Contratar talento validado en acción",
      icon: UserCheck,
      recommendation: {
        title: "Talent Hiring Hackathon",
        description: "Evalúa cómo resuelven problemas reales bajo presión en lugar de basarte en un CV estático.",
        duration: "48 horas intensivas",
        participants: "100 - 180 candidatos pre-filtrados",
        format: "Presencial o Remoto",
        phases: ["Prueba de código", "Reto en equipo", "Revisión de pull requests", "Ofertas directas"],
        outcome: "Pipeline de contratación verificado con métricas de colaboración",
      },
    },
    {
      id: "startups",
      label: "Scouting de startups y alianzas",
      icon: Rocket,
      recommendation: {
        title: "Open Innovation Bounty Program",
        description: "Conecta con startups maduras capaces de integrar soluciones con APIs empresariales.",
        duration: "6 a 8 semanas",
        participants: "25 - 50 startups validadas",
        format: "Remoto con demo day",
        phases: ["Scouting y filtrado", "Integración técnica", "Prueba de concepto", "Acuerdo comercial"],
        outcome: "Contratos de POC (Proof of Concept) o inversión semilla",
      },
    },
    {
      id: "internal",
      label: "Activar e integrar colaboradores internos",
      icon: Flame,
      recommendation: {
        title: "Internal Corporate Hackathon",
        description: "Rompe silos internos uniendo equipos de tecnología, operaciones y negocio en un solo sprint.",
        duration: "3 días inmersivos",
        participants: "50 - 300 colaboradores",
        format: "Presencial corporativo",
        phases: ["Identificación de dolores internos", "Formación cross-funcional", "Construcción", "Votación ejecutiva"],
        outcome: "Soluciones de eficiencia creadas por quienes conocen el negocio por dentro",
      },
    },
    {
      id: "community",
      label: "Crear comunidad y posicionar marca técnica",
      icon: Globe2,
      recommendation: {
        title: "Developer Relations (DevRel) Challenge",
        description: "Genera adopción de tu API, SDK o modelo fundacional en la comunidad técnica más activa.",
        duration: "3 semanas abiertas",
        participants: "300 - 1,000 developers",
        format: "Online global / regional",
        phases: ["Lanzamiento de documentación", "Workshops de producto", "Construcción abierta", "Showcase público"],
        outcome: "Cientos de aplicaciones construidas sobre tu infraestructura técnica",
      },
    },
  ];

  const current = goals.find((g) => g.id === selectedGoal) || goals[0];

  return (
    <div className="bg-[#141517] text-white rounded-2xl p-6 sm:p-10 md:p-12 border border-[#2B2D33] shadow-editorial-elevated text-left">
      <div className="max-w-2xl">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#93C5FD]">
          Selector Metodológico Interactivo
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-white">
          ¿Qué objetivo busca tu organización?
        </h3>
        <p className="text-sm text-[#9CA3AF] mt-2">
          Selecciona tu meta principal y el sistema definirá el formato, duración, perfiles y entregable adecuado.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Goals Selector */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
          {goals.map((goal) => {
            const Icon = goal.icon;
            const isSelected = goal.id === selectedGoal;
            return (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={clsx(
                  "w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all border cursor-pointer",
                  isSelected
                    ? "bg-[#1E2026] border-[#3B82F6] text-white shadow-xs"
                    : "bg-[#1C1E24]/60 border-[#2B2D36] text-[#9CA3AF] hover:bg-[#22242C] hover:text-white"
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={clsx(
                      "p-2 rounded-lg",
                      isSelected ? "bg-[#3B82F6]/20 text-[#60A5FA]" : "bg-[#141517] text-[#71717A]"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold">{goal.label}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-white shrink-0 ml-2" />}
              </button>
            );
          })}
        </div>

        {/* Dynamic Recommendation Box */}
        <div className="lg:col-span-7 bg-[#1C1E24] rounded-xl border border-[#2B2D36] p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-mono font-semibold text-[#60A5FA] uppercase tracking-wider">
                Recomendación Metodológica
              </span>
              <h4 className="text-xl font-bold text-white mt-1 tracking-tight">
                {current.recommendation.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 leading-relaxed">
                {current.recommendation.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#2B2D36] text-xs">
              <div>
                <span className="text-[11px] font-mono text-[#71717A] block">Duración</span>
                <p className="font-semibold text-white mt-0.5">{current.recommendation.duration}</p>
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#71717A] block">Escala de Talento</span>
                <p className="font-semibold text-white mt-0.5">{current.recommendation.participants}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[11px] font-mono text-[#71717A] block">Modalidad</span>
                <p className="font-semibold text-white mt-0.5">{current.recommendation.format}</p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#2B2D36]">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9CA3AF]">Fases operativas:</span>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#9CA3AF]">
                {current.recommendation.phases.map((phase, idx) => (
                  <div key={phase} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-md bg-[#252830] text-[#93C5FD] flex items-center justify-center font-mono text-[10px] font-bold border border-[#2B2D36]">
                      {idx + 1}
                    </span>
                    <span>{phase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#141517] border border-[#2B2D36] text-xs">
              <span className="text-[#71717A] font-mono text-[11px] block">Entregable tangible:</span>
              <p className="font-medium text-[#6EE7B7] mt-0.5 font-sans">{current.recommendation.outcome}</p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#2B2D36] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#71717A]">
              Personalizable para tu presupuesto y calendario.
            </span>
            <Link href="/start" className="w-full sm:w-auto">
              <Button size="sm" className="w-full sm:w-auto bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold">
                Cotizar este programa
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
