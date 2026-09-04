"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Users,
  CheckCircle2,
  Clock,
  FolderGit2,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  FileText,
  HelpCircle,
} from "lucide-react";
import { clsx } from "clsx";

export default function ParticipantWorkspacePage() {
  const params = useParams();
  const id = params?.id as string;
  const { programs, teams, submissions } = usePlatform();

  const program = programs[0];
  const team = teams[0];
  const submission = submissions[0];

  const steps = [
    { label: "Registrado", completed: true },
    { label: "Equipo Formado", completed: true },
    { label: "Reto Seleccionado", completed: true },
    { label: "Construcción", active: true },
    { label: "Entrega Final", percent: "82%" },
    { label: "Evaluación Jurados", completed: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-left space-y-8">
        {/* Workspace Top Header */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="primary" size="sm" dot>
                  FASE DE CONSTRUCCIÓN
                </Badge>
                <span className="text-xs text-slate-400">
                  Cierre de entregas: {program.applicationDeadline}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                {program.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Workspace de Trabajo para el Equipo: <strong className="text-slate-900">{team.name}</strong>
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <Link href={`/app/hackathons/${id}/submission`}>
                <Button size="md" className="bg-slate-950 hover:bg-blue-600 text-white font-semibold">
                  Continuar entrega (82%)
                </Button>
              </Link>
            </div>
          </div>

          {/* Stepper of Phases */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Progreso en el Reto</span>
              <span className="text-slate-400">Paso 4 de 6</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-xs">
              {steps.map((st, idx) => (
                <div
                  key={st.label}
                  className={clsx(
                    "p-3 rounded-2xl border text-center transition-all",
                    st.completed
                      ? "bg-slate-900 text-white border-slate-900"
                      : st.active
                      ? "bg-blue-50 text-blue-800 border-blue-300 font-bold ring-2 ring-blue-100"
                      : "bg-slate-50 text-slate-400 border-slate-200"
                  )}
                >
                  <p className="text-[11px] truncate">{st.label}</p>
                  <span className="text-[10px] block mt-0.5 font-normal">
                    {st.completed ? "✓ Listo" : st.active ? "En curso" : st.percent || "Pendiente"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workspace Quick Nav Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href={`/app/hackathons/${id}/team`} className="group">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold">
                  Falta UX
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Tu Equipo ({team.members.length} miembros)
              </h3>
              <p className="text-xs text-slate-500">
                Gestiona integrantes, código de acceso y vacíos de habilidades.
              </p>
            </div>
          </Link>

          <Link href={`/app/hackathons/${id}/people`} className="group">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-[10px] text-purple-600 font-bold">Matchmaking</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                Buscar Compañeros
              </h3>
              <p className="text-xs text-slate-500">
                Encuentra diseñadores y desarrolladores compatibles con tu equipo.
              </p>
            </div>
          </Link>

          <Link href={`/app/hackathons/${id}/submission`} className="group">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <FolderGit2 className="w-5 h-5 text-emerald-600" />
                <span className="text-[10px] text-emerald-700 font-bold">82% listo</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Entrega del Proyecto
              </h3>
              <p className="text-xs text-slate-500">
                Checklist de repositorios, demo URL, arquitectura y pitch.
              </p>
            </div>
          </Link>

          <Link href="/mentor" className="group">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <Clock className="w-5 h-5 text-amber-600" />
                <span className="text-[10px] text-amber-700 font-bold">Hoy 15:30</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                Sesiones de Mentoría
              </h3>
              <p className="text-xs text-slate-500">
                Revisa comentarios y notas de arquitectos de Northstar Labs.
              </p>
            </div>
          </Link>
        </div>

        {/* Challenge Briefing Box */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Desafío Asignado a tu Equipo
            </span>
            <span className="text-xs font-bold text-emerald-600">$15,000 USD</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            {program.challenges[0]?.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            {program.challenges[0]?.objective}
          </p>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">Entregables clave:</span>
              <span className="text-slate-500">API documentada, Frontend de validación y Video pitch</span>
            </div>
            <Link href={`/hackathons/${program.slug}`} className="font-bold text-blue-600 hover:text-blue-800">
              Ver bases completas del reto →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
