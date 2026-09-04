"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Textarea } from "@/components/ui/Input";
import {
  Scale,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Check,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";
import confetti from "canvas-confetti";
import { clsx } from "clsx";

export default function JudgePortalPage() {
  const { submissions, evaluations, saveEvaluation, programs } = usePlatform();
  const program = programs[0];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = submissions[currentProjectIndex] || submissions[0];

  // Scoring state for current project
  const [scores, setScores] = useState<Record<string, number>>({
    "rub-impact": 10,
    "rub-tech": 9,
    "rub-inno": 9,
    "rub-ux": 9,
    "rub-pitch": 10,
  });

  const [comments, setComments] = useState(
    "Excepcional planteamiento de arquitectura. La validación con documentos reales es muy convincente y el pipeline multimodal demuestra alta solidez."
  );
  const [privateNotes, setPrivateNotes] = useState(
    "Fuerte candidato a 1er puesto. Verificar compatibilidad de licencias con el equipo legal del sponsor."
  );
  const [hasConflict, setHasConflict] = useState(false);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleScoreChange = (criterionId: string, value: number) => {
    setScores((prev) => ({ ...prev, [criterionId]: value }));
  };

  const handleSaveAndNext = () => {
    saveEvaluation({
      id: `eval-${currentProject.id}`,
      judgeId: "judge-01",
      judgeName: "Dra. Carolina Martínez",
      projectId: currentProject.id,
      programId: program.id,
      scores,
      comments,
      privateNotes,
      hasConflict,
      submittedAt: new Date().toISOString(),
      isCompleted: true,
    });

    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.7 },
    });

    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      if (currentProjectIndex < submissions.length - 1) {
        setCurrentProjectIndex(currentProjectIndex + 1);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-left space-y-6">
        {/* Minimal Judge Topbar */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="purple" size="sm">
                Portal del Jurado Oficial
              </Badge>
              <span className="text-xs text-slate-400 font-mono">
                {program.title}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mt-1">
              Tienes {submissions.length} proyectos asignados para calificar
            </h1>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="font-bold text-slate-700">
              Progreso: {currentProjectIndex + 1} de {submissions.length}
            </span>
            <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full"
                style={{ width: `${((currentProjectIndex + 1) / submissions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* SPLIT LAYOUT DESKTOP (CRITICAL UX REQUIREMENT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: PROJECT INFORMATION (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Proyecto en Evaluación ({currentProjectIndex + 1}/{submissions.length})
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  {currentProject.title}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Equipo: <strong className="text-slate-800">{currentProject.teamName}</strong> · Completitud: {currentProject.completenessPercent}%
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                  {currentProject.oneLinePitch}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {currentProject.demoUrl && (
                  <a href={currentProject.demoUrl} target="_blank" rel="noreferrer">
                    <Button size="sm" className="bg-slate-950 text-white font-semibold text-xs" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                      Probar Demo en Vivo
                    </Button>
                  </a>
                )}
                {currentProject.repoUrl && (
                  <a href={currentProject.repoUrl} target="_blank" rel="noreferrer">
                    <Button size="sm" variant="outline" className="text-xs" leftIcon={<GithubIcon className="w-3.5 h-3.5" />}>
                      Ver Repositorio
                    </Button>
                  </a>
                )}
              </div>

              {/* Problem & Solution Briefing */}
              <div className="space-y-4 pt-4 border-t border-slate-100 text-xs">
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Problema planteado:</h3>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    {currentProject.problem}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Solución implementada:</h3>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    {currentProject.solution}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Arquitectura técnica:</h3>
                  <p className="text-slate-600 leading-relaxed font-mono bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    {currentProject.architecture}
                  </p>
                </div>
              </div>

              {/* Stack Chips */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700">Stack Tecnológico:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.stack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: PERSISTENT SCORING FORM (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 lg:sticky lg:top-24">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900">Rúbrica de Calificación</h3>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Escala 1 a 10
                </span>
              </div>

              {/* Criteria Sliders / Buttons */}
              <div className="space-y-4 text-xs">
                {program.rubric.map((crit) => {
                  const currentScore = scores[crit.id] || 8;
                  return (
                    <div key={crit.id} className="space-y-1.5 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">{crit.name}</span>
                        <span className="font-mono font-bold text-blue-700 text-sm bg-white px-2 py-0.5 rounded border border-slate-200">
                          {currentScore} / 10
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500">{crit.description}</p>
                      {/* 1-10 Scale Buttons */}
                      <div className="grid grid-cols-10 gap-1 pt-1.5">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => handleScoreChange(crit.id, num)}
                            className={clsx(
                              "h-7 rounded-lg font-mono font-semibold text-[11px] transition-all",
                              currentScore === num
                                ? "bg-slate-950 text-white shadow-xs"
                                : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                            )}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Feedback Comments */}
              <div className="space-y-3 pt-2 text-xs">
                <Textarea
                  label="Retroalimentación para el equipo (Visible post-evento)"
                  rows={2}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
                <Textarea
                  label="Notas Privadas (Solo visibles para el comité de jurados)"
                  rows={2}
                  value={privateNotes}
                  onChange={(e) => setPrivateNotes(e.target.value)}
                />

                {/* Conflict checkbox */}
                <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasConflict}
                    onChange={(e) => setHasConflict(e.target.checked)}
                    className="mt-0.5 rounded text-rose-600"
                  />
                  <span className="text-[11px] text-slate-600">
                    Declaro un potencial conflicto de interés con los integrantes de este equipo.
                  </span>
                </label>
              </div>

              {/* Submit Evaluation Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                {currentProjectIndex > 0 ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentProjectIndex(currentProjectIndex - 1)}
                    leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
                  >
                    Anterior
                  </Button>
                ) : (
                  <span />
                )}

                <Button
                  size="md"
                  onClick={handleSaveAndNext}
                  className="bg-slate-950 hover:bg-blue-600 text-white font-semibold flex-1"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {submittedFeedback ? "¡Guardado!" : "Guardar y avanzar"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
