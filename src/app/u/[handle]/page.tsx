"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DEMO_BUILDERS, DEMO_PROJECTS } from "@/lib/demo-data";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

export default function BuilderProfilePage() {
  const params = useParams();
  const handle = params?.handle as string;

  const builder =
    DEMO_BUILDERS.find((b) => b.handle === handle) || DEMO_BUILDERS[0];

  const builderProjects = DEMO_PROJECTS;

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-left space-y-10">
        {/* Profile Header Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src={builder.avatar}
                alt={builder.name}
                className="w-20 h-20 rounded-3xl object-cover border-2 border-white shadow-md ring-2 ring-slate-100"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    {builder.name}
                  </h1>
                  <span className="text-xs text-slate-400 font-mono">@{builder.handle}</span>
                </div>
                <p className="text-sm font-medium text-slate-600">{builder.headline}</p>
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{builder.city}, {builder.country}</span>
                  <span>·</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Disponible para retos
                  </span>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {builder.github && (
                <a href={builder.github} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" leftIcon={<GithubIcon className="w-4 h-4" />}>
                    GitHub
                  </Button>
                </a>
              )}
              {builder.linkedin && (
                <a href={builder.linkedin} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" leftIcon={<LinkedinIcon className="w-4 h-4" />}>
                    LinkedIn
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Stats Bar (No childish gamification) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100 text-xs">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400">Hackathons Participadas</span>
              <p className="text-xl font-bold text-slate-900 mt-0.5">{builder.stats.hackathons}</p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400">Proyectos Entregados</span>
              <p className="text-xl font-bold text-slate-900 mt-0.5">{builder.stats.projects}</p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400">Finalista</span>
              <p className="text-xl font-bold text-blue-600 mt-0.5">{builder.stats.finalist}</p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-slate-400">Primeros Puestos</span>
              <p className="text-xl font-bold text-amber-600 mt-0.5">{builder.stats.wins}</p>
            </div>
          </div>

          {/* Skills Chips */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-slate-700">Habilidades Técnicas Verificadas:</span>
            <div className="flex flex-wrap gap-1.5">
              {builder.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 text-xs font-mono font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Badges */}
          {builder.verifiedBadges.length > 0 && (
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-700">Reconocimientos de Plataforma:</span>
              <div className="flex flex-wrap gap-2">
                {builder.verifiedBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="p-2.5 px-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2"
                  >
                    <Trophy className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>
                      <strong>{badge.label}</strong> en {badge.programTitle} ({badge.year})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Builder Projects Portfolio */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Portafolio de Proyectos en Hackathons</h2>
            <span className="text-xs text-slate-500">Historial validado por jurados</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {builderProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono">
                      {proj.pipelineStage}
                    </span>
                    <span className="text-xs font-semibold text-amber-600">
                      ★ {proj.scores.averageScore}/10
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {proj.oneLinePitch}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.stack.slice(0, 4).map((st) => (
                      <span key={st} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono">
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Equipo: {proj.teamName}</span>
                  <Link href={`/projects/${proj.id}`} className="font-bold text-blue-600 flex items-center gap-1">
                    Ver demo <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
