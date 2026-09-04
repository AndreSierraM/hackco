"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, Clock, Users, FileText, Layers, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

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
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden text-left">
      {/* Top Banner */}
      <div className="p-6 md:p-8 bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>AI Challenge Builder · Simulación en Vivo</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
            De un dolor operativo a una arquitectura de reto en segundos
          </h3>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Escribe el problema de tu organización y nuestra metodología estructura tracks, perfiles y rúbrica.
          </p>
        </div>
        <Link href="/org/northstar/programs/new">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white shrink-0">
            Abrir Builder Completo
          </Button>
        </Link>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Input */}
        <div className="lg:col-span-5 space-y-4">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            ¿Qué problema u objetivo quieres resolver?
          </label>
          <div className="relative">
            <textarea
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe el reto de tu organización..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none shadow-xs"
            />
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-slate-400">Ejemplos rápidos:</span>
            <div className="flex flex-wrap gap-1.5">
              {samplePrompts.map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => handleSimulate(sample)}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-left"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={() => handleSimulate(prompt)}
            isLoading={isGenerating}
            className="w-full bg-slate-950 text-white font-semibold"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Re-estructurar programa con IA
          </Button>
        </div>

        {/* Right Generated Preview */}
        <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200/90 p-5 md:p-6 space-y-5">
          {isGenerating ? (
            <div className="h-64 flex flex-col items-center justify-center space-y-3 text-slate-500">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              <p className="text-xs font-semibold">Analizando restricciones operativas y estructurando tracks...</p>
            </div>
          ) : hasGenerated ? (
            <>
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                      Programa Recomendado
                    </span>
                    <Badge variant="primary" size="sm">
                      Formato Híbrido
                    </Badge>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mt-1">
                    AI Operations & Automation Challenge
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Diseñado para 4 semanas con validación de prototipo y paso a piloto.
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
