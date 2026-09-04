"use client";

import React, { useState } from "react";
import { 
  Lightbulb, 
  Code2, 
  Trophy, 
  Rocket, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";
import { clsx } from "clsx";

export function ProjectToPilotPipeline() {
  const [activeStage, setActiveStage] = useState<number>(3); // Default to stage 4 (Piloto) to show the end value

  const stages = [
    {
      id: 0,
      badge: "Etapa 01",
      name: "Problema & Idea",
      icon: Lightbulb,
      time: "Día 1",
      description: "Alineamos una necesidad corporativa con un enunciado técnico con datasets de prueba.",
      deliverable: "Brief técnico y criterios de aceptación validados con los sponsors.",
      status: "Inmersión",
    },
    {
      id: 1,
      badge: "Etapa 02",
      name: "MVP Funcional",
      icon: Code2,
      time: "Día 2-14",
      description: "Los builders construyen la arquitectura técnica: frontend, APIs, modelos y bases de datos reales.",
      deliverable: "Repositorio de código ejecutable, README y video de demostración.",
      status: "Construcción",
    },
    {
      id: 2,
      badge: "Etapa 03",
      name: "Finalista & Pitch",
      icon: Trophy,
      time: "Demo Day",
      description: "Evaluación con Jury OS bajo rúbrica ponderada y deliberación transparente de los comités.",
      deliverable: "Puntaje calibrado, retroalimentación técnica y selección de proyectos viables.",
      status: "Evaluación",
    },
    {
      id: 3,
      badge: "Etapa 04",
      name: "Piloto en Producción",
      icon: Rocket,
      time: "30-90 Días",
      description: "Acompañamiento post-hackathon para probar la solución en la infraestructura real de la empresa.",
      deliverable: "Prueba de concepto (POC) con acuerdos de IP, seguridad de datos y KPIs de negocio.",
      status: "Implementación",
    },
  ];

  const current = stages[activeStage];

  return (
    <div className="w-full bg-white rounded-2xl border border-[#E8E8E4] p-6 sm:p-10 shadow-editorial text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#E8E8E4]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-[11px] font-mono font-semibold uppercase tracking-wider mb-2 border border-[#A7F3D0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            El Mayor Diferenciador
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
            El Demo Day no es la meta. Es el punto de partida.
          </h3>
          <p className="text-xs sm:text-sm text-[#52535A] mt-2 leading-relaxed">
            Deja de buscar ideas. Haz que las construyan. La mayoría de iniciativas mueren después de entregar el premio; en Kamino acompañamos a los mejores equipos para convertir prototipos en pilotos reales dentro de tu organización.
          </p>
        </div>
        <div className="shrink-0 text-right">
          <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider block">
            Gobernanza & IP
          </span>
          <span className="text-xs font-semibold text-[#141517] flex items-center gap-1 mt-0.5 justify-end">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            Licenciamiento seguro para sponsors
          </span>
        </div>
      </div>

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 pb-6">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isSelected = activeStage === idx;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={clsx(
                "p-4 rounded-xl text-left transition-all border cursor-pointer relative flex flex-col justify-between",
                isSelected
                  ? "bg-[#141517] text-white border-[#141517] shadow-sm"
                  : "bg-[#FBFBFA] border-[#E8E8E4] text-[#52535A] hover:border-[#141517] hover:text-[#141517]"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={clsx(
                      "text-[10px] font-mono uppercase tracking-wider font-semibold",
                      isSelected ? "text-[#93C5FD]" : "text-[#71717A]"
                    )}
                  >
                    {stage.badge}
                  </span>
                  <span
                    className={clsx(
                      "text-[10px] font-mono px-1.5 py-0.5 rounded",
                      isSelected ? "bg-[#252830] text-[#E5E7EB]" : "bg-[#ECECE6] text-[#52535A]"
                    )}
                  >
                    {stage.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={clsx(
                      "p-1.5 rounded-lg",
                      isSelected ? "bg-[#252830] text-[#60A5FA]" : "bg-white text-[#141517] border border-[#E8E8E4]"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold tracking-tight">{stage.name}</h4>
                </div>
              </div>

              {/* Step indicator bar */}
              <div
                className={clsx(
                  "h-1 w-full rounded-full mt-4 transition-all",
                  isSelected ? "bg-[#3B82F6]" : "bg-[#E8E8E4]"
                )}
              />
            </button>
          );
        })}
      </div>

      {/* Detail panel of selected stage */}
      <div className="p-6 sm:p-7 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] mt-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1846A3]">
                {current.badge} — {current.status}
              </span>
              <span className="text-[#D0D0C8]">·</span>
              <span className="text-xs text-[#71717A] font-mono">Horizonte: {current.time}</span>
            </div>
            <h4 className="text-lg font-bold text-[#141517]">{current.name}</h4>
            <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
              {current.description}
            </p>
            <div className="pt-2 flex items-start gap-2 text-xs text-[#141517]">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
              <span>
                <strong>Entregable clave:</strong> {current.deliverable}
              </span>
            </div>
          </div>

          <div className="md:col-span-4 p-4 rounded-xl bg-white border border-[#E8E8E4] shadow-xs text-xs space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">
              Rol de Kamino en esta fase:
            </span>
            <p className="text-[#141517] font-medium leading-relaxed">
              {activeStage === 0 && "Inmersión metodológica para transformar dolores corporativos en challenges con métricas cuantitativas."}
              {activeStage === 1 && "Operación continua, sesiones diarias de mentoría técnica y seguimiento de commits en repositorios."}
              {activeStage === 2 && "Gestión de jurados mediante Jury OS con rúbrica ciega, detección de sesgos y moderación del Demo Day."}
              {activeStage === 3 && "Estructuración de acuerdos de prueba de concepto (POC), validación de seguridad de datos e integración con el sponsor."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
