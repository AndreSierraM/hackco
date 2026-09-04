"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { OrganizerSidebar } from "@/components/organizer/OrganizerSidebar";
import { usePlatform } from "@/context/PlatformContext";
import { ProgramFormat } from "@/types";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Users,
  Layers,
  FileText,
  Loader2,
  Check,
  Save,
  Trophy,
  Calendar,
  Building2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { clsx } from "clsx";

export default function NewProgramWizardPage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) || "northstar";
  const { addProgram } = usePlatform();

  // Mode: "AI_PROMPT" | "WIZARD" | "PUBLISHED"
  const [viewMode, setViewMode] = useState<"AI_PROMPT" | "WIZARD" | "PUBLISHED">("AI_PROMPT");
  const [aiLoading, setAiLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  // AI Prompt State
  const [aiPrompt, setAiPrompt] = useState(
    "Queremos reducir en un 30% el tiempo que tarda nuestro equipo en conciliar y auditar contratos mercantiles usando modelos de lenguaje e inteligencia artificial agéntica."
  );

  // Wizard 10-step state
  const [wizardStep, setWizardStep] = useState(1);
  const wizardSteps = [
    { num: 1, label: "Objetivo de Negocio" },
    { num: 2, label: "Tipo de Programa" },
    { num: 3, label: "Información Básica" },
    { num: 4, label: "Tracks & Retos" },
    { num: 5, label: "Participantes & Admisión" },
    { num: 6, label: "Cronograma & Fases" },
    { num: 7, label: "Rúbrica de Evaluación" },
    { num: 8, label: "Bolsa de Premios" },
    { num: 9, label: "Identidad & Branding" },
    { num: 10, label: "Revisión & Publicación" },
  ];

  const [formData, setFormData] = useState({
    title: "AI Operations & Automation Challenge",
    oneLiner: "Construye pipelines agénticos para transformar la auditoría de contratos y procesos operativos.",
    format: "HIBRIDO" as ProgramFormat,
    category: "AI",
    city: "Bogotá",
    durationWeeks: "4 semanas",
    teamSize: "3 a 5 builders",
    prizePool: "$30,000 USD + Piloto",
    startDate: "2026-11-01",
    endDate: "2026-11-28",
    challengeTrack: "Automatización de auditoría documental con IA multimodal",
  });

  const loadingMessages = [
    "Comprendiendo objetivo operativo de negocio...",
    "Seleccionando formato óptimo y restricciones de tiempo...",
    "Definiendo fases y perfiles técnicos complementarios...",
    "Construyendo rúbrica de evaluación ponderada al 100%...",
    "Estructurando bases y entregables técnicos...",
  ];

  const handleRunAi = () => {
    setAiLoading(true);
    setLoadingStep(0);

    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setAiLoading(false);
          return prev;
        }
      });
    }, 450);
  };

  const handleApplyAiStructure = () => {
    setViewMode("WIZARD");
    setWizardStep(1);
  };

  const handlePublishProgram = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setViewMode("PUBLISHED");
  };

  return (
    <div className="min-h-screen flex bg-[#FBFBFA]">
      <OrganizerSidebar orgSlug={slug} />

      <main className="flex-1 p-6 sm:p-10 overflow-y-auto text-left space-y-8 max-w-5xl">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <Link href={`/org/${slug}`} className="text-xs font-semibold text-blue-600 hover:text-blue-800">
                ← Volver al Dashboard
              </Link>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-950 tracking-tight mt-1">
              {viewMode === "AI_PROMPT" ? "AI Challenge Builder" : "Configurador del Programa"}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            {viewMode === "WIZARD" && (
              <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                Paso {wizardStep} de 10
              </span>
            )}
          </div>
        </div>

        {/* 1. CONVERSATIONAL AI CHALLENGE BUILDER MODE */}
        {viewMode === "AI_PROMPT" && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
              <div className="space-y-2">
                <Badge variant="primary" size="sm">
                  Feature Estrella · Arquitectura Asistida
                </Badge>
                <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                  ¿Qué problema u objetivo quieres resolver?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  Escribe en lenguaje natural el dolor de tu organización. El motor de {BRAND.name} propondrá formato, perfiles técnicos necesarios, entregables y la rúbrica de evaluación.
                </p>
              </div>

              <div className="space-y-3">
                <Textarea
                  rows={4}
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Ej. Queremos reducir en un 30% el tiempo que tarda nuestro equipo en clasificar documentos..."
                  className="text-sm p-4 rounded-2xl"
                />

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] text-slate-400">
                    Sugerencia: Incluye métricas deseadas o restricciones de integración.
                  </span>
                  <Button
                    size="md"
                    onClick={handleRunAi}
                    isLoading={aiLoading}
                    className="bg-slate-950 hover:bg-blue-600 text-white font-semibold shadow-sm"
                    rightIcon={<Sparkles className="w-4 h-4 text-amber-400" />}
                  >
                    Diseñar mi challenge con IA
                  </Button>
                </div>
              </div>

              {/* Simulation Progress States */}
              {aiLoading && (
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center gap-3">
                    <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                    <p className="text-xs font-semibold text-slate-800">
                      {loadingMessages[loadingStep]}
                    </p>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                      style={{ width: `${((loadingStep + 1) / loadingMessages.length) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* AI Result Card */}
            {!aiLoading && (
              <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6 animate-in slide-in-from-bottom-3 duration-200 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                        Estructura Recomendada
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono font-bold">
                        Formato Híbrido
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mt-1 text-white">
                      AI Operations & Automation Challenge
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      4 semanas · 3 tracks de solución · Orientado a piloto formal
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="md"
                      onClick={handleApplyAiStructure}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-bold"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Usar esta estructura en el Wizard
                    </Button>
                  </div>
                </div>

                {/* Recommendations Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <span className="text-slate-400 text-[11px]">Duración Recomendada</span>
                    <p className="font-bold text-white mt-1">4 Semanas</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <span className="text-slate-400 text-[11px]">Tamaño de Equipo</span>
                    <p className="font-bold text-white mt-1">3 a 5 integrantes</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <span className="text-slate-400 text-[11px]">Perfiles Requeridos</span>
                    <p className="font-bold text-white mt-1">AI / UX / Backend</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                    <span className="text-slate-400 text-[11px]">Entregable Final</span>
                    <p className="font-bold text-emerald-400 mt-1">MVP + Código + Pitch</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-xs text-slate-300 space-y-2">
                  <span className="font-bold text-white block">Rúbrica Generada (100%):</span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-slate-400">
                    <span>Impacto: <strong>25%</strong></span>
                    <span>Arquitectura: <strong>25%</strong></span>
                    <span>Innovación: <strong>20%</strong></span>
                    <span>UX / Usabilidad: <strong>15%</strong></span>
                    <span>Pitch & Demo: <strong>15%</strong></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 2. 10-STEP WIZARD MODE */}
        {viewMode === "WIZARD" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Rail Step Navigation */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 space-y-2 text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2 block">
                Pasos de Creación
              </span>
              {wizardSteps.map((st) => (
                <button
                  key={st.num}
                  onClick={() => setWizardStep(st.num)}
                  className={clsx(
                    "w-full flex items-center gap-3 p-2.5 rounded-xl text-left font-medium transition-colors",
                    wizardStep === st.num
                      ? "bg-slate-900 text-white font-semibold"
                      : st.num < wizardStep
                      ? "text-emerald-700 bg-emerald-50/50"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <span
                    className={clsx(
                      "w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold shrink-0",
                      wizardStep === st.num
                        ? "bg-blue-500 text-white"
                        : st.num < wizardStep
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    )}
                  >
                    {st.num < wizardStep ? "✓" : st.num}
                  </span>
                  <span className="truncate">{st.label}</span>
                </button>
              ))}
            </div>

            {/* Main Form Fields */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {wizardSteps[wizardStep - 1].num}. {wizardSteps[wizardStep - 1].label}
              </h2>

              {wizardStep === 1 && (
                <div className="space-y-4">
                  <Input
                    label="Nombre del Programa / Hackathon"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                  <Textarea
                    label="One-Liner / Propuesta de Valor"
                    rows={2}
                    value={formData.oneLiner}
                    onChange={(e) => setFormData({ ...formData, oneLiner: e.target.value })}
                  />
                </div>
              )}

              {wizardStep === 2 && (
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-slate-700">Modalidad Operativa:</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["HIBRIDO", "PRESENCIAL", "ONLINE"].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setFormData({ ...formData, format: m as ProgramFormat })}
                        className={clsx(
                          "p-3 rounded-2xl border text-xs font-semibold text-center transition-all",
                          formData.format === m
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                        )}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {wizardStep >= 3 && wizardStep <= 9 && (
                <div className="space-y-4 text-xs">
                  <p className="text-slate-600 leading-relaxed">
                    Los parámetros del paso <strong>{wizardSteps[wizardStep - 1].label}</strong> han sido pre-configurados por el AI Challenge Builder.
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex justify-between font-medium">
                      <span>Ciudad / Sede:</span>
                      <span className="font-bold text-slate-900">{formData.city}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Bolsa de Premios:</span>
                      <span className="font-bold text-emerald-600">{formData.prizePool}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Rúbrica de Jurados:</span>
                      <span className="font-bold text-slate-900">5 Criterios · 100% Ponderado</span>
                    </div>
                  </div>
                </div>
              )}

              {wizardStep === 10 && (
                <div className="space-y-4 text-xs">
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
                    <h3 className="font-bold text-sm">Resumen Listo para Publicar</h3>
                    <p>• Reto: {formData.title}</p>
                    <p>• Formato: {formData.format} ({formData.city})</p>
                    <p>• Bolsa: {formData.prizePool}</p>
                  </div>
                  <Button
                    size="lg"
                    onClick={handlePublishProgram}
                    className="w-full bg-slate-950 hover:bg-blue-600 text-white font-semibold"
                  >
                    Publicar Convocatoria en Vivo
                  </Button>
                </div>
              )}

              {/* Stepper Navigation Buttons */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                {wizardStep > 1 ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setWizardStep(wizardStep - 1)}
                    leftIcon={<ArrowLeft className="w-4 h-4" />}
                  >
                    Anterior
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" onClick={() => setViewMode("AI_PROMPT")}>
                    Volver a AI Builder
                  </Button>
                )}

                {wizardStep < 10 && (
                  <Button
                    size="sm"
                    className="bg-slate-950 text-white font-semibold"
                    onClick={() => setWizardStep(wizardStep + 1)}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Siguiente paso
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 3. PUBLISHED CONFIRMATION */}
        {viewMode === "PUBLISHED" && (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl text-center space-y-6 max-w-xl mx-auto animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <Badge variant="success" size="sm">
                Convocatoria Publicada
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                ¡Tu reto ya está listo para recibir talento!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hemos generado la landing oficial de <strong className="text-slate-900">{formData.title}</strong> y habilitado el Command Center para supervisar aplicaciones.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href={`/org/${slug}/programs/bogota-ai-operations`}>
                <Button size="lg" className="w-full sm:w-auto bg-slate-950 text-white font-semibold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Abrir Command Center
                </Button>
              </Link>
              <Link href="/hackathons/bogota-ai-operations" target="_blank">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                  Ver Landing Pública
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
