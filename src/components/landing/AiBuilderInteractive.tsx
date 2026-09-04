"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, Clock, Users, Layers, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AiBuilderInteractive() {
  const [prompt, setPrompt] = useState(
    "Queremos reducir en un 30% los tiempos de atención de nuestras solicitudes complejas y auditoría documental usando IA."
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(true);

  const handleSimulate = (text: string) => {
    setPrompt(text);
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 600);
  };

  const samplePrompts = [
    "Reducir tiempos de atención y auditoría con IA",
    "Modelos de micro-crédito para pequeños comercios",
    "Monitoreo de micro-redes y eficiencia energética",
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#DCDCD5] shadow-editorial-elevated overflow-hidden text-left">
      {/* Top Banner */}
      <div className="p-6 md:p-8 bg-[#141517] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#252830]">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#252830] text-[#93C5FD] text-xs font-mono mb-2">
            <Sparkles className="w-3 h-3 text-[#60A5FA]" />
            <span>AI CHALLENGE ARCHITECT · SIMULADOR</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
            De un dolor operativo a una arquitectura de reto en segundos
          </h3>
          <p className="text-xs md:text-sm text-[#9CA3AF] mt-1 font-normal">
            Escribe el problema de tu organización y nuestra metodología estructura tracks, perfiles y rúbrica ponderada.
          </p>
        </div>
        <Link href="/org/northstar/programs/new">
          <Button size="sm" className="bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold shrink-0 shadow-xs">
            Abrir Builder Completo
          </Button>
        </Link>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Input */}
        <div className="lg:col-span-5 space-y-4">
          <label className="block text-[11px] font-mono font-semibold text-[#71717A] uppercase tracking-wider">
            ¿Qué problema u objetivo quieres resolver?
          </label>
          <div className="relative">
            <textarea
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe el reto de tu organización..."
              className="w-full rounded-xl border border-[#DCDCD5] bg-[#F9F9F8] p-4 text-xs sm:text-sm text-[#141517] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#141517] focus:bg-white transition-all resize-none shadow-xs font-sans"
            />
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">Ejemplos reales:</span>
            <div className="flex flex-wrap gap-1.5">
              {samplePrompts.map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => handleSimulate(sample)}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-[#F4F4F1] text-[#52535A] hover:bg-[#E8E8E4] hover:text-[#141517] transition-colors text-left border border-[#E8E8E4] cursor-pointer"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={() => handleSimulate(prompt)}
            isLoading={isGenerating}
            className="w-full bg-[#141517] text-white hover:bg-[#252830] font-semibold shadow-editorial"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Re-estructurar programa con IA
          </Button>
        </div>

        {/* Right Generated Preview */}
        <div className="lg:col-span-7 bg-[#F9F9F8] rounded-xl border border-[#E8E8E4] p-5 md:p-6 space-y-5">
          {isGenerating ? (
            <div className="h-64 flex flex-col items-center justify-center space-y-3 text-[#71717A]">
              <Loader2 className="w-7 h-7 animate-spin text-[#1846A3]" />
              <p className="text-xs font-mono">Analizando restricciones y calculando rúbrica ponderada...</p>
            </div>
          ) : hasGenerated ? (
            <>
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#E8E8E4]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold text-[#1846A3] uppercase tracking-wider">
                      Arquitectura Sugerida
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#065F46] font-mono font-medium border border-[#A7F3D0]">
                      Formato Híbrido
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#141517] mt-1 tracking-tight">
                    AI Operations & Automation Challenge
                  </h4>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    Diseñado para 4 semanas con validación técnica y pase a piloto corporativo.
                  </p>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">Duración</span>
                  </div>
                  <p className="font-bold text-slate-900">4 Semanas</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                    <Users className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">Equipo</span>
                  </div>
                  <p className="font-bold text-slate-900">3 - 5 builders</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">Perfiles Clave</span>
                  </div>
                  <p className="font-bold text-slate-900">AI / UX / Back</p>
                </div>
              </div>

              {/* Suggested Tracks */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-700">Tracks de Solución Sugeridos:</span>
                <div className="space-y-1.5">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2 text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">Extracción y Conciliación Multimodal</p>
                      <p className="text-[11px] text-slate-500">
                        Procesar contratos y facturas con detección de discrepancias y salvaguardas.
                      </p>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2 text-xs">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">Agentes Autónomos con Memoria Auditada</p>
                      <p className="text-[11px] text-slate-500">
                        Resolución de casos atípicos sin alucinaciones mediante RAG y validación de reglas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deliverables & Rubric */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Rúbrica de 5 criterios ponderada al 100%
                </span>
                <Link
                  href="/start"
                  className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  Diseñar mi reto con este formato <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
