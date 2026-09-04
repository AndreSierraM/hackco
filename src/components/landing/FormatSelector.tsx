"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Cpu, 
  UserCheck, 
  Flame, 
  Code2, 
  Rocket, 
  Target 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";

export function FormatSelector() {
  const [selectedGoal, setSelectedGoal] = useState<string>("business_problem");

  const goals = [
    {
      id: "business_problem",
      label: "Resolver un dolor operativo o de negocio",
      icon: Building2,
      recommendation: {
        title: "Corporate Innovation Challenge",
        tag: "Solución de Cuello de Botella",
        description: "Te ayudamos a transformar un proceso lento, costoso o manual en un desafío técnico con especificaciones claras, entregándote prototipos de software probados.",
        duration: "4 semanas",
        participants: "50 - 150 builders seleccionados",
        format: "Híbrido (Remoto con Demo Day presencial)",
        outcome: "De 5 a 10 prototipos funcionales evaluados con tus criterios y listos para pasar a piloto.",
      },
    },
    {
      id: "adopt_ai",
      label: "Explorar IA aplicada a tus procesos sin riesgo",
      icon: Cpu,
      recommendation: {
        title: "AI Innovation Sprint",
        tag: "IA Aplicada a tu Empresa",
        description: "Sprint intensivo con ingenieros de IA para validar automatizaciones, agentes autónomos y análisis documental sobre tus propios flujos de trabajo sin comprometer la seguridad.",
        duration: "3 semanas",
        participants: "40 - 100 especialistas en IA y datos",
        format: "Remoto con acompañamiento técnico continuo",
        outcome: "Modelos y pipelines agénticos probados con métricas de latencia, precisión y costo para tu empresa.",
      },
    },
    {
      id: "tech_talent",
      label: "Contratar talento técnico viéndolos programar",
      icon: UserCheck,
      recommendation: {
        title: "Talent Hiring Hackathon",
        tag: "Reclutamiento Práctico",
        description: "Te ahorramos meses de entrevistas tradicionales: observa cómo programan bajo presión real, resuelven problemas de arquitectura y colaboran en equipo en lugar de filtrar por un CV.",
        duration: "48 horas intensivas",
        participants: "80 - 150 desarrolladores pre-evaluados",
        format: "Presencial o Remoto",
        outcome: "Pipeline de contratación verificado con código visible en repositorios y referencias técnicas reales.",
      },
    },
    {
      id: "internal_employees",
      label: "Activar la innovación de tus propios colaboradores",
      icon: Flame,
      recommendation: {
        title: "Internal Challenge (Silos Cero)",
        tag: "Cultura & Eficiencia Interna",
        description: "Te ayudamos a romper los silos entre tecnología, operaciones, producto y legal, creando soluciones desde adentro con quienes mejor conocen tu negocio.",
        duration: "3 días inmersivos",
        participants: "40 - 200 colaboradores internos",
        format: "Presencial en oficinas corporativas",
        outcome: "Soluciones de eficiencia y proyectos internos con alta viabilidad de adopción inmediata.",
      },
    },
    {
      id: "launch_tech",
      label: "Acelerar la adopción de tu API, SDK o producto",
      icon: Code2,
      recommendation: {
        title: "Developer Relations (DevRel) Hackathon",
        tag: "Adopción de Infraestructura",
        description: "Ponemos a cientos de desarrolladores a crear integraciones, librerías y aplicaciones sobre tu plataforma, validando tu documentación en el mundo real.",
        duration: "3 semanas abiertas",
        participants: "200 - 800 desarrolladores",
        format: "Online regional / global",
        outcome: "Decenas de integraciones públicas, feedback técnico sobre documentación y posicionamiento de marca.",
      },
    },
    {
      id: "connect_startups",
      label: "Conectar con startups tecnológicas maduras",
      icon: Rocket,
      recommendation: {
        title: "Open Innovation Bounty Program",
        tag: "Scouting & Alianzas",
        description: "Filtramos y convocamos a startups tecnológicas con soluciones listas para integrarse como proveedores o aliados de tu empresa mediante pruebas de concepto rápidas.",
        duration: "6 semanas estructuradas",
        participants: "20 - 40 startups validadas",
        format: "Remoto con sesiones de pitch ejecutivo",
        outcome: "Acuerdos de prueba de concepto (POC) comerciales y acuerdos de integración tecnológica.",
      },
    },
  ];

  const current = goals.find((g) => g.id === selectedGoal) || goals[0];

  return (
    <div className="w-full bg-[#141517] text-white rounded-2xl p-6 sm:p-10 md:p-12 border border-[#2B2D33] shadow-editorial-elevated text-left">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1E2026] text-[#93C5FD] text-[11px] font-mono font-semibold uppercase tracking-wider mb-2 border border-[#2B2D36]">
          <Target className="w-3.5 h-3.5" />
          Soluciones a tu Medida
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          ¿Qué cuello de botella necesitas destrabar en tu empresa hoy?
        </h3>
        <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 leading-relaxed">
          Selecciona el reto que enfrenta tu organización. Te mostramos exactamente cómo te ayudamos a estructurarlo y qué resultado de software te entregamos en 4 semanas:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-8 items-stretch">
        {/* Buttons List */}
        <div className="lg:col-span-5 flex flex-col gap-2">
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
                      "p-2 rounded-lg shrink-0",
                      isSelected ? "bg-[#3B82F6]/20 text-[#60A5FA]" : "bg-[#141517] text-[#71717A]"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold">{goal.label}</span>
                </div>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#3B82F6] shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Card */}
        <div className="lg:col-span-7 bg-[#1C1E24] rounded-xl border border-[#2B2D36] p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#252830] text-[#93C5FD] border border-[#2B2D36]">
                {current.recommendation.tag}
              </span>
              <span className="text-xs text-[#71717A] font-mono">Diseño a medida</span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white tracking-tight">
                {current.recommendation.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 leading-relaxed">
                {current.recommendation.description}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#2B2D36] text-xs">
              <div className="p-3 rounded-lg bg-[#141517] border border-[#252830]">
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">Duración</span>
                <p className="font-semibold text-white mt-1">{current.recommendation.duration}</p>
              </div>
              <div className="p-3 rounded-lg bg-[#141517] border border-[#252830]">
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">Participantes</span>
                <p className="font-semibold text-white mt-1">{current.recommendation.participants}</p>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-lg bg-[#141517] border border-[#252830]">
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">Modalidad</span>
                <p className="font-semibold text-white mt-1">{current.recommendation.format}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#141517] border border-[#252830] text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">
                Resultado Concreto Esperado:
              </span>
              <p className="font-medium text-[#34D399] mt-1 text-xs sm:text-sm leading-relaxed">
                {current.recommendation.outcome}
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#2B2D36] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#71717A]">
              Estructuramos las bases, el filtro y la operación para tu calendario.
            </span>
            <Link href="/start" className="w-full sm:w-auto">
              <Button size="sm" className="w-full sm:w-auto bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold">
                Diseñar este programa →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
