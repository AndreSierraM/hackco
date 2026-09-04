"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { OrganizerSidebar } from "@/components/organizer/OrganizerSidebar";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Scale,
  CheckCircle2,
  AlertCircle,
  Plus,
  Users,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { clsx } from "clsx";

export default function JuryOsAdminPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "northstar";
  const id = (params?.id as string) || "bogota-ai-operations";
  const { programs } = usePlatform();
  const program = programs[0];

  const [rubricCriteria, setRubricCriteria] = useState(program.rubric);

  const totalWeight = rubricCriteria.reduce((acc, curr) => acc + curr.weight, 0);
  const isValid100 = totalWeight === 100;

  const mockJudges = [
    {
      id: "j-1",
      name: "Dra. Carolina Martínez",
      role: "Lead AI Researcher",
      company: "VectorAI Labs",
      assignedProjects: 8,
      completedCount: 3,
      hasConflict: false,
    },
    {
      id: "j-2",
      name: "Ing. Roberto Silva",
      role: "VP de Tecnología",
      company: "Andes Digital",
      assignedProjects: 8,
      completedCount: 4,
      hasConflict: false,
    },
    {
      id: "j-3",
      name: "Valeria Gómez",
      role: "Investment Associate",
      company: "Northstar Ventures",
      assignedProjects: 8,
      completedCount: 2,
      hasConflict: true, // Conflict declared
    },
  ];

  return (
    <div className="min-h-screen flex bg-[#FBFBFA]">
      <OrganizerSidebar orgSlug={slug} />

      <main className="flex-1 p-6 sm:p-10 overflow-y-auto text-left space-y-8 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <Link href={`/org/${slug}/programs/${id}`} className="text-xs font-semibold text-blue-600 hover:text-blue-800">
                ← Volver al Command Center
              </Link>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-950 tracking-tight mt-1">
              Jury OS — Sistema de Evaluación Objetiva
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Administración de rúbricas ponderadas, asignación de jurados y mitigación de sesgos.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/judge">
              <Button size="sm" className="bg-slate-950 hover:bg-blue-600 text-white font-semibold">
                Simular vista del Jurado
              </Button>
            </Link>
          </div>
        </div>

        {/* RUBRIC BUILDER WITH 100% SUM VALIDATION */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">Rúbrica Ponderada Oficial</h2>
                <Badge variant={isValid100 ? "success" : "danger"} size="sm">
                  {isValid100 ? "100% Válida" : "Inconsistencia en suma"}
                </Badge>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                La suma de los pesos relativos de todos los criterios debe ser exactamente igual a 100%.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-600">
                Total Ponderado: <strong className={isValid100 ? "text-emerald-700" : "text-rose-600"}>{totalWeight}%</strong>
              </span>
            </div>
          </div>

          {/* Criteria Cards */}
          <div className="space-y-3">
            {rubricCriteria.map((crit, idx) => (
              <div
                key={crit.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] font-mono">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-slate-900">{crit.name}</h3>
                  </div>
                  <p className="text-slate-500 pl-7">{crit.description}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0 pl-7 sm:pl-0">
                  <span className="text-slate-400">Escala: 1 - 10</span>
                  <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 font-mono font-bold text-slate-900">
                    {crit.weight}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JUDGE ASSIGNMENT MATRIX */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Panel de Jurados Oficiales ({mockJudges.length})</h2>
              <p className="text-xs text-slate-500">Supervisión de carga de evaluación y avance de calificaciones.</p>
            </div>
            <Button variant="outline" size="sm" className="text-xs">
              Auto-asignar proyectos
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {mockJudges.map((j) => (
              <div key={j.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900">{j.name}</h3>
                  {j.hasConflict && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">
                      Conflicto declarado
                    </span>
                  )}
                </div>
                <p className="text-slate-500">{j.role} · {j.company}</p>

                <div className="space-y-1 pt-2 border-t border-slate-200">
                  <div className="flex justify-between text-slate-600">
                    <span>Avance de evaluación:</span>
                    <span className="font-bold text-slate-900">{j.completedCount} de {j.assignedProjects} proyectos</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: `${(j.completedCount / j.assignedProjects) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
