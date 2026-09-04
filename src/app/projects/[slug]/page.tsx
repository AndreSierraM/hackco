"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  FolderGit2,
  ExternalLink,
  Trophy,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { submissions } = usePlatform();

  const project = submissions.find((s) => s.id === slug) || submissions[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-left">
        {/* Project Hero */}
        <div className="space-y-6 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider font-mono">
                {project.pipelineStage}
              </span>
              {project.awardPlacement && (
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  {project.awardPlacement}
                </span>
              )}
            </div>
            <div className="text-xs text-slate-500">
              Evaluación consolidada: <strong className="text-slate-900">★ {project.scores.averageScore}/10</strong> ({project.scores.evaluationsCount} jurados)
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed max-w-3xl">
              {project.oneLinePitch}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span>Equipo: <strong className="text-slate-900">{project.teamName}</strong></span>
              <span>·</span>
              <span>Completitud de entrega: <strong className="text-emerald-600">{project.completenessPercent}%</strong></span>
            </div>

            <div className="flex items-center gap-2.5">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <Button size="sm" className="bg-slate-950 hover:bg-blue-600 text-white font-semibold" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                    Abrir Demo en Vivo
                  </Button>
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  <Button size="sm" variant="outline" leftIcon={<GithubIcon className="w-3.5 h-3.5" />}>
                    Código en GitHub
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Gallery / Screenshot Preview */}
        {project.screenshots.length > 0 && (
          <div className="py-8">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 max-h-[420px]">
              <img
                src={project.screenshots[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Structured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-6">
          {/* Main Story Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Problem & Solution */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  El Problema Atacado
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                  La Solución Desarrollada
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-2">
              <h3 className="text-sm font-bold text-slate-900">Validación de Impacto</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.impact}
              </p>
            </div>

            {/* Architecture Description */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900">Arquitectura Técnica</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-mono bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {project.architecture}
              </p>
            </div>

            {/* AI Disclosure */}
            {project.aiDisclosure && (
              <div className="p-6 rounded-3xl bg-blue-50/60 border border-blue-200 text-xs text-slate-700 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-blue-900">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Declaración de Uso de Inteligencia Artificial:</span>
                </div>
                <p className="leading-relaxed text-slate-600">
                  {project.aiDisclosure}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Stack de Tecnologías
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Post-Hackathon Pipeline Status */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xs space-y-3">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                Pipeline Post-Evento
              </span>
              <h4 className="text-base font-bold">Estado: {project.pipelineStage}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Este proyecto se encuentra actualmente en fase de integración con los servidores y equipos de Northstar Labs.
              </p>
              <Link href="/org/northstar/projects">
                <Button size="sm" variant="outline" className="w-full text-white border-slate-700 hover:bg-slate-800 text-xs mt-2">
                  Ver en Project Pipeline Kanban
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
