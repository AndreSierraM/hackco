"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePlatform } from "@/context/PlatformContext";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  FolderGit2,
  ExternalLink,
  Star,
  Trophy,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";

export default function ProjectsGalleryPage() {
  const { submissions } = usePlatform();
  const [query, setQuery] = useState("");
  const [selectedStage, setSelectedStage] = useState("ALL");

  const filtered = submissions.filter((proj) => {
    if (selectedStage !== "ALL" && proj.pipelineStage !== selectedStage) return false;
    if (
      query &&
      !proj.title.toLowerCase().includes(query.toLowerCase()) &&
      !proj.teamName.toLowerCase().includes(query.toLowerCase()) &&
      !proj.stack.some((s) => s.toLowerCase().includes(query.toLowerCase()))
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-left">
        <div className="space-y-3 mb-8">
          <Badge variant="primary" size="sm">
            Showcase de Resultados
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Proyectos Construidos en Hackathons
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Explora las soluciones, prototipos y arquitecturas técnicas construidas por equipos multidisciplinarios en nuestros retos.
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por tecnología, nombre o problema resuelto..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {["ALL", "PILOT", "INCUBATION", "SUBMITTED"].map((stage) => (
              <button
                key={stage}
                onClick={() => setSelectedStage(stage)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all ${
                  selectedStage === stage
                    ? "bg-slate-950 text-white border-slate-950"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {stage === "ALL" ? "Todos los estados" : stage}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wider font-mono">
                    {proj.pipelineStage}
                  </span>
                  {proj.awardPlacement && (
                    <span className="text-xs font-semibold text-amber-600 flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      {proj.awardPlacement}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Equipo: <strong className="text-slate-700">{proj.teamName}</strong>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {proj.oneLinePitch}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-semibold text-slate-900">
                    ★ {proj.scores.averageScore}/10
                  </span>
                  <span>·</span>
                  <span>{proj.scores.evaluationsCount} evaluaciones de jurados</span>
                </div>
                <Link href={`/projects/${proj.id}`}>
                  <Button size="sm" variant="ghost" className="font-bold text-blue-600" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Ver proyecto
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
