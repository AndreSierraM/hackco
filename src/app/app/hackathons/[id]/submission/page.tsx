"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import {
  FolderGit2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ExternalLink,
  Save,
  ArrowRight,
  ShieldCheck,
  Video,
  Eye,
  Check,
} from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";
import confetti from "canvas-confetti";
import { clsx } from "clsx";

export default function SubmissionExperiencePage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const { submissions, addSubmission } = usePlatform();

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);

  // Initial mock submission state at 82%
  const [formData, setFormData] = useState({
    title: "DocuFlow AI: Pipeline Autónomo de Conciliación Documental",
    oneLinePitch: "Extracción agéntica multimodal de contratos y conciliación automática con verificación de cláusulas de riesgo.",
    problem: "Las empresas dedican 4.5 días hábiles a cotejar manualmente contratos marco contra órdenes y facturas fiscales con formatos dispersos.",
    solution: "DocuFlow combina visión artificial y LLMs especializados en legislación comercial para descomponer contratos en grafos de conocimiento verificables.",
    impact: "Reduce el tiempo de auditoría a 18 segundos por legajo con 99.2% de precisión demostrada en pruebas.",
    architecture: "Frontend en Next.js conectado vía gRPC/REST a FastAPI con pgvector y agentes de orquestación en Python.",
    stack: "TypeScript, Next.js, FastAPI, Python, LangChain, PostgreSQL, pgvector, Docker",
    demoUrl: "https://docuflow.demo.kamino.co",
    repoUrl: "https://github.com/northstar-demo/docuflow-ai",
    videoUrl: "", // Missing item for 82%
    deckUrl: "https://speakerdeck.com/docuflow-pitch",
    aiDisclosure: "Se utilizaron modelos Claude 3.5 y GPT-4o vía API con embeddings text-embedding-3-large para clasificación y extracción.",
    finalDeclaration: true,
  });

  // Calculate completeness dynamically
  const checklist = [
    { label: "Nombre del Proyecto", filled: !!formData.title },
    { label: "Pitch de una línea", filled: !!formData.oneLinePitch },
    { label: "Problema & Solución", filled: !!formData.problem && !!formData.solution },
    { label: "Impacto validado", filled: !!formData.impact },
    { label: "Arquitectura técnica", filled: !!formData.architecture },
    { label: "Repositorio de código (GitHub)", filled: !!formData.repoUrl },
    { label: "Demo interactiva desplegada", filled: !!formData.demoUrl },
    { label: "Video pitch (3 min)", filled: !!formData.videoUrl },
    { label: "Declaración de uso de IA", filled: !!formData.aiDisclosure },
    { label: "Declaración final y autoría", filled: formData.finalDeclaration },
  ];

  const completedCount = checklist.filter((c) => c.filled).length;
  const completenessPercent = Math.round((completedCount / checklist.length) * 100);

  const handleSubmitFinal = () => {
    setIsConfirmModalOpen(false);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
    });
    setIsSubmittedSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-left space-y-8">
        {!isSubmittedSuccess ? (
          <>
            {/* Header & Sticky Completeness Bar */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <Link href={`/app/hackathons/${id}`} className="text-xs font-semibold text-blue-600 hover:text-blue-800">
                      ← Volver al Workspace
                    </Link>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                    Entrega del Proyecto
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Este entregable será evaluado por los jurados oficiales en Jury OS.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Save className="w-3.5 h-3.5 text-emerald-600" /> Autoguardado activo
                  </span>
                  <Button
                    size="md"
                    className="bg-slate-950 hover:bg-blue-600 text-white font-semibold"
                    onClick={() => setIsConfirmModalOpen(true)}
                  >
                    Enviar entrega final
                  </Button>
                </div>
              </div>

              {/* Completeness Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <span>Nivel de completitud:</span>
                    <span className="text-blue-600 font-mono text-sm">{completenessPercent}% listo</span>
                  </span>
                  <span className="text-slate-400 font-normal">
                    {completedCount} de {checklist.length} requisitos cubiertos
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={clsx(
                      "h-full rounded-full transition-all duration-300",
                      completenessPercent >= 80 ? "bg-emerald-600" : "bg-blue-600"
                    )}
                    style={{ width: `${completenessPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Main Form Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Form Fields (8 Cols) */}
              <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
                <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Especificaciones del Proyecto
                </h2>

                <Input
                  label="Nombre del Proyecto / Solución"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />

                <Input
                  label="One-line pitch (Síntesis de impacto)"
                  value={formData.oneLinePitch}
                  onChange={(e) => setFormData({ ...formData, oneLinePitch: e.target.value })}
                />

                <Textarea
                  label="Problema que resuelve"
                  rows={3}
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                />

                <Textarea
                  label="Solución técnica desarrollada"
                  rows={3}
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                />

                <Textarea
                  label="Validación de impacto y métricas de prueba"
                  rows={2}
                  value={formData.impact}
                  onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
                />

                <Textarea
                  label="Arquitectura técnica del sistema"
                  rows={3}
                  value={formData.architecture}
                  onChange={(e) => setFormData({ ...formData, architecture: e.target.value })}
                />

                <Input
                  label="Stack de tecnologías (Separado por comas)"
                  value={formData.stack}
                  onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="URL de la Demo Desplegada"
                    leftIcon={<ExternalLink className="w-4 h-4" />}
                    value={formData.demoUrl}
                    onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                  />
                  <Input
                    label="Repositorio de Código (GitHub)"
                    leftIcon={<GithubIcon className="w-4 h-4" />}
                    value={formData.repoUrl}
                    onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Enlace a Video Pitch (YouTube / Loom)"
                    leftIcon={<Video className="w-4 h-4" />}
                    placeholder="https://loom.com/share/..."
                    value={formData.videoUrl}
                    onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                    helperText="Recomendado: 3 minutos máximo."
                  />
                  <Input
                    label="Presentación / Deck (PDF / Slide)"
                    value={formData.deckUrl}
                    onChange={(e) => setFormData({ ...formData, deckUrl: e.target.value })}
                  />
                </div>

                <Textarea
                  label="Declaración de Uso de Inteligencia Artificial"
                  rows={2}
                  value={formData.aiDisclosure}
                  onChange={(e) => setFormData({ ...formData, aiDisclosure: e.target.value })}
                  helperText="Transparencia ética sobre modelos, APIs y salvaguardas implementadas."
                />

                <div className="pt-2 border-t border-slate-100">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.finalDeclaration}
                      onChange={(e) => setFormData({ ...formData, finalDeclaration: e.target.checked })}
                      className="mt-0.5 rounded text-blue-600"
                    />
                    <span className="text-xs text-slate-700">
                      Declaro bajo fe de juramento que todo el código base y la arquitectura presentada fueron desarrollados por los integrantes de nuestro equipo durante las fechas del reto.
                    </span>
                  </label>
                </div>
              </div>

              {/* Checklist Sidebar (4 Cols) */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Checklist de Entrega
                  </h3>
                  <div className="space-y-2.5 text-xs">
                    {checklist.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className={item.filled ? "text-slate-800" : "text-slate-400"}>
                          {item.label}
                        </span>
                        {item.filled ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link href="/projects/proj-docuflow" target="_blank">
                      <Button variant="outline" size="sm" className="w-full text-xs" leftIcon={<Eye className="w-3.5 h-3.5" />}>
                        Previsualizar página pública
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-blue-50/60 border border-blue-200 text-xs text-slate-700 space-y-2">
                  <span className="font-bold text-blue-900 block">Recordatorio del Jurado:</span>
                  <p className="leading-relaxed text-slate-600">
                    Puedes actualizar tu entrega tantas veces como sea necesario hasta la hora límite del cierre oficial.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* CELEBRATION MODERATE STATE */
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <Badge variant="success" size="sm">
                Entrega Registrada con Éxito
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                ¡Tu proyecto está listo para ser evaluado!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                El jurado de Northstar Labs revisará <strong className="text-slate-900">{formData.title}</strong> a través de Jury OS en las próximas sesiones programadas.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/projects/proj-docuflow">
                <Button size="lg" className="w-full sm:w-auto bg-slate-950 hover:bg-blue-600 text-white font-semibold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Ver proyecto en el Showcase
                </Button>
              </Link>
              <Link href="/judge">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                  Simular evaluación como Jurado
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        <Modal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          title="Confirmar Entrega de Proyecto"
          description="Asegúrate de que tus enlaces de demo y repositorio sean accesibles para el jurado."
        >
          <div className="space-y-4 text-left text-xs">
            <p className="text-slate-600 leading-relaxed">
              Estás a punto de enviar formalmente la postulación de <strong className="text-slate-900">{formData.title}</strong> con un nivel de completitud del <strong className="text-emerald-700">{completenessPercent}%</strong>.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-slate-600">
              <p>• Repositorio: {formData.repoUrl}</p>
              <p>• Demo: {formData.demoUrl}</p>
            </div>
            <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
              <Button variant="ghost" size="sm" onClick={() => setIsConfirmModalOpen(false)}>
                Seguir editando
              </Button>
              <Button size="sm" className="bg-slate-950 text-white font-semibold" onClick={handleSubmitFinal}>
                Confirmar y enviar
              </Button>
            </div>
          </div>
        </Modal>
      </main>

      <Footer />
    </div>
  );
}
