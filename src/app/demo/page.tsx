"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Users,
  Building2,
  Scale,
  FolderGit2,
  FileCheck2,
  Trophy,
  Play,
  RotateCcw,
  ExternalLink,
} from "lucide-react";

export default function SalesDemoPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      num: 1,
      tag: "El Dolor Inicial",
      title: "1. La organización llega con una necesidad real",
      description:
        "Una empresa líder como Northstar Labs enfrenta un problema operativo: 'Gastamos 18 horas por semana cotejando contratos mercantiles manualmente y queremos resolverlo usando IA'.",
      actionLabel: "Ver cómo estructuramos el reto",
      preview: {
        title: "Problema no estructurado",
        content: "Procesos manuales, dispersión en formatos PDF/imágenes, riesgo de incumplimiento legal y cuellos de botella en operaciones.",
        badge: "INPUT DE NEGOCIO",
      },
    },
    {
      num: 2,
      tag: "AI Challenge Builder",
      title: "2. Convertimos el dolor en especificaciones técnicas",
      description:
        "Nuestra metodología y herramientas de IA estructuran objetivos medibles, tracks de solución, requisitos de entrega, perfiles técnicos necesarios y la rúbrica de evaluación.",
      actionLabel: "Avanzar a la convocatoria",
      route: "/org/northstar/programs/new",
      preview: {
        title: "Reto Generado: Bogotá AI Operations",
        content: "3 Tracks definidos: Auditoría documental multimodal, Agentes de resolución en tiempo real y Optimización logística urbana.",
        badge: "METODOLOGÍA + IA",
      },
    },
    {
      num: 3,
      tag: "Lanzamiento & Marca",
      title: "3. Publicamos la landing del reto con identidad visual",
      description:
        "Cada hackathon vive en una página de estándar mundial con fechas, agenda interactiva, premios y bases claras, respetando la identidad cromática del sponsor.",
      actionLabel: "Convocatoria y postulaciones",
      route: "/hackathons/bogota-ai-operations",
      preview: {
        title: "Página de Descubrimiento Activa",
        content: "$35,000 USD en premios + Piloto Corporativo. Modalidad híbrida en Bogotá con transmisión para toda la región.",
        badge: "LANDING DE ALTO IMPACTO",
      },
    },
    {
      num: 4,
      tag: "Filtro de Talento",
      title: "4. Convocamos y filtramos al mejor talento técnico",
      description:
        "Recepción de cientos de aplicaciones individuales y de equipo. El CRM de organizadores permite filtrar por habilidades, ciudad y experiencia real para admitir a los más preparados.",
      actionLabel: "Formación de equipos",
      route: "/org/northstar/programs/bogota-ai-operations/applications",
      preview: {
        title: "428 Postulaciones → 140 Builders Aceptados",
        content: "Tasa de admisión del 32.7%. Desarrolladores fullstack, especialistas en NLP/LLMs, ingenieros de datos y diseñadores UX.",
        badge: "FILTRO TÉCNICO",
      },
    },
    {
      num: 5,
      tag: "Matchmaking",
      title: "5. Matchmaking inteligente para balancear equipos",
      description:
        "Los participantes que no tienen equipo o necesitan un rol clave (ej. diseñador o backend) utilizan el radar de cobertura para encontrarse y formar escuadras equilibradas.",
      actionLabel: "Fase de construcción",
      route: "/app/hackathons/bogota-ai-operations/people",
      preview: {
        title: "34 Equipos Multidisciplinarios",
        content: "Detección de vacíos: 'Falta UX' o 'Falta AI'. Cobertura completa del 98% antes del inicio del hackathon.",
        badge: "EQUIPOS BALANCEADOS",
      },
    },
    {
      num: 6,
      tag: "Construcción Guiada",
      title: "6. Sprints intensivos con mentoría técnica directa",
      description:
        "Durante el evento, los equipos reciben retroalimentación 1:1 de directores de ingeniería y expertos de negocio para no desviarse del objetivo.",
      actionLabel: "Llegada al jurado",
      route: "/mentor",
      preview: {
        title: "Mentor OS Activo",
        content: "14 sesiones de mentoría completadas. Acompañamiento en optimización de latencia, salvaguardas de seguridad y modelo de negocio.",
        badge: "MENTORÍA DIRECTA",
      },
    },
    {
      num: 7,
      tag: "Jury OS",
      title: "7. Evaluación rigurosa con rúbrica sin hojas de cálculo",
      description:
        "El jurado califica en una interfaz dividida (proyecto a la izquierda, rúbrica a la derecha) con criterios ponderados al 100%, comentarios y verificación de conflictos.",
      actionLabel: "Anuncio de ganadores",
      route: "/judge",
      preview: {
        title: "Rúbrica Ponderada al 100%",
        content: "Impacto (25%), Arquitectura (25%), Innovación (20%), UX (15%) y Pitch (15%). Cálculo de promedio y varianza en tiempo real.",
        badge: "EVALUACIÓN OBJETIVA",
      },
    },
    {
      num: 8,
      tag: "Selección de Ganadores",
      title: "8. Publicación de ganadores basada en datos",
      description:
        "El comité de organización revisa el leaderboard consolidado y declara los ganadores con transparencia y sin deliberaciones interminables.",
      actionLabel: "Paso al piloto real",
      route: "/projects/proj-docuflow",
      preview: {
        title: "Ganador Absoluto: DocuFlow AI",
        content: "Puntaje consolidado: 9.4/10 con 3 evaluaciones favorables. MVP probado con 99.2% de precisión en contratos reales.",
        badge: "GANADOR VALIDADO",
      },
    },
    {
      num: 9,
      tag: "Project Pipeline",
      title: "9. El proyecto no termina al entregar el premio: Piloto",
      description:
        "El mayor diferencial: un tablero Kanban para llevar la solución a pruebas de seguridad, integración en infraestructura corporativa y contrato de piloto.",
      actionLabel: "Revisar reporte ejecutivo",
      route: "/org/northstar/projects",
      preview: {
        title: "Fase de Piloto en Northstar Labs",
        content: "Integración con servidores de staging de Northstar durante 90 días con presupuesto de implementación formal.",
        badge: "POST-HACKATHON PIPELINE",
      },
    },
    {
      num: 10,
      tag: "Reporte de Impacto",
      title: "10. Reporte ejecutivo con métricas de ROI y adopción",
      description:
        "Generación de reportes detallados listos para presentar al directorio, inversionistas y áreas de negocio con el retorno del programa.",
      actionLabel: "Lanzar mi propio reto",
      route: "/org/northstar/programs/bogota-ai-operations/reports",
      preview: {
        title: "Reporte Ejecutivo Completo",
        content: "428 participantes, 26 prototipos, 1 piloto corporativo en marcha, ahorro proyectado de 18 horas/semana en auditoría.",
        badge: "RESULTADO MEDIBLE",
      },
    },
  ];

  const current = steps[currentStep];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Top Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="primary" size="sm">
                Sales Walkthrough Interactivo
              </Badge>
              <span className="text-xs text-slate-500 font-mono">
                Paso {currentStep + 1} de {steps.length}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
              Recorrido Comercial del Producto
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Anterior
            </Button>
            <Button
              size="sm"
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Siguiente
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentStep(0)}
              title="Reiniciar recorrido"
            >
              <RotateCcw className="w-4 h-4 text-slate-500" />
            </Button>
          </div>
        </div>

        {/* Stepper Progress Indicator */}
        <div className="py-6 overflow-x-auto">
          <div className="flex items-center gap-1.5 min-w-[600px]">
            {steps.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setCurrentStep(idx)}
                className={`flex-1 h-2 rounded-full transition-all ${
                  idx === currentStep
                    ? "bg-blue-600 ring-2 ring-blue-200"
                    : idx < currentStep
                    ? "bg-slate-900"
                    : "bg-slate-200"
                }`}
                title={`Paso ${s.num}: ${s.tag}`}
              />
            ))}
          </div>
        </div>

        {/* Main Step Detail Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-12 text-left space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {current.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              {current.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              {current.description}
            </p>
          </div>

          {/* Interactive Preview Box */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-white font-bold tracking-wider uppercase font-mono">
                {current.preview.badge}
              </span>
              {current.route && (
                <Link
                  href={current.route}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  Abrir pantalla real en plataforma <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{current.preview.title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {current.preview.content}
            </p>
          </div>

          {/* Step Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <div className="text-xs text-slate-500">
              Demuestra cómo {BRAND.name} unifica estrategia, talento y software.
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {current.route && (
                <Link href={current.route} className="w-full sm:w-auto">
                  <Button variant="outline" size="md" className="w-full font-semibold">
                    Ver módulo en vivo
                  </Button>
                </Link>
              )}
              {currentStep < steps.length - 1 ? (
                <Button
                  size="md"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="w-full sm:w-auto bg-slate-950 hover:bg-blue-600 text-white font-semibold"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {current.actionLabel}
                </Button>
              ) : (
                <Link href="/start" className="w-full sm:w-auto">
                  <Button size="md" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold">
                    Diseñar mi reto ahora
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
