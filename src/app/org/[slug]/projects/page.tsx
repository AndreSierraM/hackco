"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { OrganizerSidebar } from "@/components/organizer/OrganizerSidebar";
import { usePlatform } from "@/context/PlatformContext";
import { ProjectPipelineStage } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  FolderGit2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { clsx } from "clsx";

export default function ProjectPipelineKanbanPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "northstar";
  const { submissions, updateSubmissionStage } = usePlatform();

  // Kanban Columns matching prompt's exact state machine
  const stages: Array<{ id: ProjectPipelineStage; label: string; badgeColor: string }> = [
    { id: "BUILDING", label: "En Construcción", badgeColor: "bg-blue-100 text-blue-800" },
    { id: "SUBMITTED", label: "Entregado", badgeColor: "bg-slate-100 text-slate-800" },
    { id: "FINALIST", label: "Finalista", badgeColor: "bg-purple-100 text-purple-800" },
    { id: "WINNER", label: "Ganador", badgeColor: "bg-amber-100 text-amber-900" },
    { id: "VALIDATION", label: "Validación de Seguridad", badgeColor: "bg-indigo-100 text-indigo-800" },
    { id: "PILOT", label: "Piloto Corporativo", badgeColor: "bg-emerald-100 text-emerald-800" },
    { id: "INCUBATION", label: "Incubación & Escala", badgeColor: "bg-teal-100 text-teal-800" },
  ];

  const handleMoveStage = (projId: string, currentStage: ProjectPipelineStage, direction: "next" | "prev") => {
    const currentIndex = stages.findIndex((s) => s.id === currentStage);
    if (direction === "next" && currentIndex < stages.length - 1) {
      updateSubmissionStage(projId, stages[currentIndex + 1].id);
    } else if (direction === "prev" && currentIndex > 0) {
      updateSubmissionStage(projId, stages[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#FBFBFA]">
      <OrganizerSidebar orgSlug={slug} />

      <main className="flex-1 p-6 sm:p-10 overflow-y-auto text-left space-y-6 max-w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 uppercase tracking-wider font-mono">
                DIFERENCIADOR ESTRATÉGICO
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
              Project Pipeline Post-Hackathon
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              El proyecto no termina al entregar el premio: acompaña los MVPs a pruebas de concepto, pilotos corporativos e integración real.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="success" size="md">
              1 Piloto Activo en Northstar Labs
            </Badge>
          </div>
        </div>

        {/* KANBAN BOARD */}
        <div className="flex gap-4 overflow-x-auto pb-6 pt-2">
          {stages.map((stage) => {
            const projectsInStage = submissions.filter((s) => s.pipelineStage === stage.id);

            return (
              <div
                key={stage.id}
                className="w-80 shrink-0 bg-slate-100/70 rounded-3xl p-4 border border-slate-200/90 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <span className="font-bold text-slate-900 text-xs">{stage.label}</span>
                    <span className="w-5 h-5 rounded-full bg-white text-slate-700 flex items-center justify-center font-bold text-[11px] border border-slate-200 shadow-xs">
                      {projectsInStage.length}
                    </span>
                  </div>

                  <div className="space-y-3 min-h-[300px]">
                    {projectsInStage.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5 text-xs text-left"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold text-slate-900 leading-snug">{proj.title}</h3>
                          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">
                            ★ {proj.scores.averageScore}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-500 line-clamp-2">
                          {proj.oneLinePitch}
                        </p>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                          <span>Equipo: {proj.teamName}</span>
                          <Link href={`/projects/${proj.id}`} className="font-bold text-blue-600 hover:text-blue-800">
                            Detalle →
                          </Link>
                        </div>

                        {/* Transition Arrows */}
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                          <button
                            onClick={() => handleMoveStage(proj.id, stage.id, "prev")}
                            className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
                            title="Mover a etapa anterior"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <span className="text-[10px] font-semibold text-slate-400 uppercase">
                            Mover etapa
                          </span>
                          <button
                            onClick={() => handleMoveStage(proj.id, stage.id, "next")}
                            className="p-1 rounded-lg hover:bg-slate-100 text-slate-700"
                            title="Avanzar etapa"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}

                    {projectsInStage.length === 0 && (
                      <div className="h-32 border-2 border-dashed border-slate-200/80 rounded-2xl flex items-center justify-center text-slate-400 text-xs">
                        Sin proyectos en esta etapa
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
