"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  FolderGit2,
  CheckCircle2,
  ArrowRight,
  Scale,
  Workflow,
  Clock,
  FileCode
} from "lucide-react";
import { clsx } from "clsx";

export function HeroProductWindow() {
  const [activeCapability, setActiveCapability] = useState<0 | 1 | 2 | 3>(1); // Default to Equipos & Proyectos

  const capabilities = [
    {
      id: 0,
      num: "01",
      title: "Convocatoria & Filtro",
      subtitle: "Admisión técnica y verificación",
      detail: "Landing de registro, validación de habilidades y formación de equipos equilibrados sin vacíos de rol.",
      icon: Users,
    },
    {
      id: 1,
      num: "02",
      title: "Equipos & Proyectos",
      subtitle: "Construcción y repositorios",
      detail: "Seguimiento en tiempo real de commits, entregas de código ejecutable, demos en video y arquitecturas.",
      icon: FolderGit2,
    },
    {
      id: 2,
      num: "03",
      title: "Mentoría & Operación",
      subtitle: "Acompañamiento en vivo",
      detail: "Agendamiento 1:1 con mentores técnicos, cronograma de sprints, anuncios y soporte continuo.",
      icon: Workflow,
    },
    {
      id: 3,
      num: "04",
      title: "Jury OS & Resultados",
      subtitle: "Evaluación y camino a piloto",
      detail: "Rúbricas ponderadas al 100%, calibración de jurados sin sesgos y selección transparente para piloto.",
      icon: Scale,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto text-left">
      {/* 4 Capabilities as Interactive Controller Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {capabilities.map((cap) => {
          const Icon = cap.icon;
          const isActive = activeCapability === cap.id;
          return (
            <button
              key={cap.id}
              onClick={() => setActiveCapability(cap.id as 0 | 1 | 2 | 3)}
              className={clsx(
                "p-4 rounded-xl text-left transition-all border cursor-pointer relative flex flex-col justify-between group",
                isActive
                  ? "bg-[#141517] text-white border-[#141517] shadow-md ring-1 ring-[#141517]"
                  : "bg-white border-[#E8E8E4] text-[#52535A] hover:border-[#141517] hover:bg-[#FBFBFA]"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span
                    className={clsx(
                      "text-[11px] font-mono font-bold uppercase tracking-wider",
                      isActive ? "text-[#93C5FD]" : "text-[#71717A]"
                    )}
                  >
                    Capacidad {cap.num}
                  </span>
                  <div
                    className={clsx(
                      "p-1.5 rounded-md",
                      isActive ? "bg-[#252830] text-[#60A5FA]" : "bg-[#F4F4F1] text-[#141517]"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4
                  className={clsx(
                    "text-sm font-bold tracking-tight",
                    isActive ? "text-white" : "text-[#141517]"
                  )}
                >
                  {cap.title}
                </h4>
                <p
                  className={clsx(
                    "text-[11px] mt-1 line-clamp-2 leading-relaxed",
                    isActive ? "text-[#9CA3AF]" : "text-[#71717A]"
                  )}
                >
                  {cap.detail}
                </p>
              </div>

              {/* Active Indicator Bar */}
              <div
                className={clsx(
                  "h-1 w-full rounded-full mt-3 transition-all",
                  isActive ? "bg-[#3B82F6]" : "bg-transparent"
                )}
              />
            </button>
          );
        })}
      </div>

      {/* Main Showcase Studio Window */}
      <div className="bg-white rounded-2xl border border-[#DCDCD5] shadow-editorial-elevated overflow-hidden">
        {/* Window Top Chrome */}
        <div className="px-5 py-3.5 bg-[#141517] text-white flex flex-wrap items-center justify-between gap-3 border-b border-[#252830]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#3F424E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#3F424E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#3F424E]" />
            </div>
            <div className="h-4 w-px bg-[#2B2D36]" />
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-white tracking-tight">
                AI for Financial Inclusion Hackathon
              </span>
              <span className="hidden md:inline-block text-[11px] font-mono text-[#9CA3AF]">
                kamino.co/programs/ai-for-financial-inclusion
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#10B981]/20 text-[#6EE7B7] text-[10px] font-mono font-medium border border-[#10B981]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              SPRINT ACTIVO · HORA 28 DE 48
            </span>
            <span className="px-2 py-0.5 rounded bg-[#252830] text-[10px] font-mono text-[#9CA3AF] border border-[#3F424E]">
              Vista Demostrativa
            </span>
          </div>
        </div>

        {/* Global Challenge Stage Tracker */}
        <div className="px-6 py-2.5 bg-[#F9F9F8] border-b border-[#E8E8E4] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#71717A]">
            <span>Fase Actual:</span>
            <span className="font-semibold text-[#141517]">Construcción & Mentorías Técnicas</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-[#71717A]">
            <span>182 Postulados</span>
            <span>·</span>
            <span>18 Equipos Activos</span>
            <span>·</span>
            <span>12 Mentores</span>
            <span>·</span>
            <span className="text-[#059669] font-semibold">100% Repos Conectados</span>
          </div>
        </div>

        {/* Dynamic Studio Body based on Active Capability */}
        <div className="p-6 sm:p-8">
          {/* VIEW 01: CONVOCATORIA & FILTRO */}
          {activeCapability === 0 && (
            <div className="space-y-6 animate-in fade-in-50 duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E8E4]">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#1846A3] uppercase tracking-wider block">
                    Módulo de Admisión & Matchmaking
                  </span>
                  <h3 className="text-lg font-bold text-[#141517] mt-0.5">
                    Convocatoria focalizada y selección basada en código real
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs font-mono font-semibold border border-[#A7F3D0]">
                    Filtro: 74 admitidos de 182 postulantes (40.6%)
                  </span>
                </div>
              </div>

              {/* Real Applicant Cards Queue */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#EEF4FF] text-[#1846A3] font-semibold">
                      Admitido · 98% Match
                    </span>
                    <span className="text-[10px] font-mono text-[#059669]">Github Verificado</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#141517]">Santiago Silva</h4>
                    <p className="text-xs text-[#52535A]">AI Engineer · Bogotá</p>
                    <p className="text-[11px] text-[#71717A] mt-1.5 leading-snug">
                      Especializado en modelos de lenguaje, embeddings y pipelines de RAG para auditoría de documentos.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#E8E8E4] flex flex-wrap gap-1 text-[10px] font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-white border border-[#E8E8E4]">Python</span>
                    <span className="px-1.5 py-0.5 rounded bg-white border border-[#E8E8E4]">LangChain</span>
                    <span className="px-1.5 py-0.5 rounded bg-white border border-[#E8E8E4]">FastAPI</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#EEF4FF] text-[#1846A3] font-semibold">
                      Admitida · 95% Match
                    </span>
                    <span className="text-[10px] font-mono text-[#059669]">Portafolio UX</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#141517]">Valeria Restrepo</h4>
                    <p className="text-xs text-[#52535A]">Product Designer · Medellín</p>
                    <p className="text-[11px] text-[#71717A] mt-1.5 leading-snug">
                      Diseño de interfaces financieras, sistemas de diseño accesibles y prototipado rápido en Figma.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#E8E8E4] flex flex-wrap gap-1 text-[10px] font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-white border border-[#E8E8E4]">Figma</span>
                    <span className="px-1.5 py-0.5 rounded bg-white border border-[#E8E8E4]">Design Systems</span>
                    <span className="px-1.5 py-0.5 rounded bg-white border border-[#E8E8E4]">Fintech UX</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#FAF5FF] text-[#7E22CE] font-semibold">
                      Asignado a Equipo 04
                    </span>
                    <span className="text-[10px] font-mono text-[#059669]">Matchmaking OK</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#141517]">Mateo Gómez</h4>
                    <p className="text-xs text-[#52535A]">Fullstack Developer · Cali</p>
                    <p className="text-[11px] text-[#71717A] mt-1.5 leading-snug">
                      Desarrollo de frontends reactivos y conexión de servicios backend con PostgreSQL y Next.js.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#E8E8E4] flex flex-wrap gap-1 text-[10px] font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-white border border-[#E8E8E4]">Next.js</span>
                    <span className="px-1.5 py-0.5 rounded bg-white border border-[#E8E8E4]">TypeScript</span>
                    <span className="px-1.5 py-0.5 rounded bg-white border border-[#E8E8E4]">PostgreSQL</span>
                  </div>
                </div>
              </div>

              {/* Radar Metric Bar */}
              <div className="p-4 rounded-xl bg-[#F4F4F1] border border-[#E8E8E4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="font-bold text-[#141517]">Balance de Equipos en Tiempo Real</span>
                  <p className="text-[11px] text-[#71717A]">
                    Garantizamos que ningún equipo quede sin capacidad técnica de desarrollo o de diseño.
                  </p>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px] text-[#141517]">
                  <span>42% Fullstack</span>
                  <span>·</span>
                  <span>34% AI Engineers</span>
                  <span>·</span>
                  <span>24% Product UX</span>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 02: EQUIPOS & PROYECTOS (SUBMISSIONS) */}
          {activeCapability === 1 && (
            <div className="space-y-6 animate-in fade-in-50 duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E8E4]">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#1846A3] uppercase tracking-wider block">
                    Monitoreo de Construcción & Repositorios
                  </span>
                  <h3 className="text-lg font-bold text-[#141517] mt-0.5">
                    Proyectos en marcha con código verificable en Git
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#EEF4FF] text-[#1846A3] text-xs font-mono font-semibold border border-[#D3E2FE]">
                    18 Equipos · 32 Repositorios Vinculados
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {/* Project 1 */}
                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] hover:border-[#141517] transition-all space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        Repo Verificado
                      </span>
                      <span className="text-[10px] font-mono text-[#71717A]">Equipo 04 · 4 integrantes</span>
                    </div>
                    <h4 className="text-base font-bold text-[#141517]">DocuAudit Multimodal</h4>
                    <p className="text-xs text-[#52535A] leading-relaxed">
                      Extracción automática de cláusulas en pólizas mercantiles y cruce contra normativas financieras en tiempo real.
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-[#E8E8E4] text-[11px] font-mono">
                    <div className="flex items-center justify-between text-[#71717A]">
                      <span className="flex items-center gap-1.5 text-[#141517]">
                        <FileCode className="w-3.5 h-3.5 text-[#1846A3]" /> Next.js + FastAPI + Llama 3
                      </span>
                      <span className="text-emerald-700 font-semibold">6 commits hoy</span>
                    </div>
                    <div className="flex items-center justify-between text-[#71717A]">
                      <span className="flex items-center gap-1 text-[#059669]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Video Demo 3:20 min
                      </span>
                      <span className="text-[#1846A3] font-semibold">Sandbox Listo</span>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] hover:border-[#141517] transition-all space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                        Demo Funcional
                      </span>
                      <span className="text-[10px] font-mono text-[#71717A]">Equipo 09 · 3 integrantes</span>
                    </div>
                    <h4 className="text-base font-bold text-[#141517]">CreditFlow PyME Agent</h4>
                    <p className="text-xs text-[#52535A] leading-relaxed">
                      Scoring alternativo para pequeñas empresas analizando extractos bancarios en PDF y facturas electrónicas de la DIAN.
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-[#E8E8E4] text-[11px] font-mono">
                    <div className="flex items-center justify-between text-[#71717A]">
                      <span className="flex items-center gap-1.5 text-[#141517]">
                        <FileCode className="w-3.5 h-3.5 text-[#1846A3]" /> Python + PostgreSQL + React
                      </span>
                      <span className="text-emerald-700 font-semibold">Branch main OK</span>
                    </div>
                    <div className="flex items-center justify-between text-[#71717A]">
                      <span className="flex items-center gap-1 text-[#059669]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Pitch Slides Subidas
                      </span>
                      <span className="text-[#1846A3] font-semibold">API Probada</span>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] hover:border-[#141517] transition-all space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                        En Calibración
                      </span>
                      <span className="text-[10px] font-mono text-[#71717A]">Equipo 14 · 4 integrantes</span>
                    </div>
                    <h4 className="text-base font-bold text-[#141517]">Sentinel Fraud Engine</h4>
                    <p className="text-xs text-[#52535A] leading-relaxed">
                      Detección de patrones anómalos en transacciones bancarias utilizando redes neuronales de grafos con latencia sub-20ms.
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-[#E8E8E4] text-[11px] font-mono">
                    <div className="flex items-center justify-between text-[#71717A]">
                      <span className="flex items-center gap-1.5 text-[#141517]">
                        <FileCode className="w-3.5 h-3.5 text-[#1846A3]" /> Go + PyTorch + GraphDB
                      </span>
                      <span className="text-purple-700 font-semibold">Latencia: 14ms</span>
                    </div>
                    <div className="flex items-center justify-between text-[#71717A]">
                      <span className="flex items-center gap-1 text-[#059669]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Arquitectura Docker
                      </span>
                      <span className="text-[#1846A3] font-semibold">En Evaluación</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 03: MENTORÍA & OPERACIÓN */}
          {activeCapability === 2 && (
            <div className="space-y-6 animate-in fade-in-50 duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E8E4]">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#1846A3] uppercase tracking-wider block">
                    Centro de Comando Operacional
                  </span>
                  <h3 className="text-lg font-bold text-[#141517] mt-0.5">
                    Mentoría 1:1 agendada y acompañamiento en vivo
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs font-mono font-semibold border border-[#A7F3D0]">
                    12 Mentores Activos en Turno
                  </span>
                </div>
              </div>

              {/* Mentoring Schedule Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-semibold text-[#1846A3] flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 14:00 - 14:45
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px]">
                      En Curso
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#141517]">Revisión de Arquitectura & Modelos</h4>
                  <p className="text-xs text-[#52535A]">
                    Mentor: <strong>Dr. Camilo Rocha</strong> (Lead AI Architect)
                  </p>
                  <p className="text-[11px] text-[#71717A] pt-2 border-t border-[#E8E8E4]">
                    Asignado a: <strong>Equipo 04 (DocuAudit)</strong> · Optimización de inferencia en CPU/GPU.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-semibold text-[#71717A] flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 15:30 - 16:15
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#EEF4FF] text-[#1846A3] text-[10px]">
                      Próxima Sesión
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#141517]">Seguridad & Gobernanza de Datos</h4>
                  <p className="text-xs text-[#52535A]">
                    Mentora: <strong>Ana María Morales</strong> (CISO Advisor)
                  </p>
                  <p className="text-[11px] text-[#71717A] pt-2 border-t border-[#E8E8E4]">
                    Asignado a: <strong>Equipo 14 (Sentinel)</strong> · Manejo de tokens y cumplimiento de privacidad.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-semibold text-[#71717A] flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 17:00 - 17:45
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#FAF5FF] text-[#7E22CE] text-[10px]">
                      Pitch Lab
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#141517]">Storytelling & Demostración de Negocio</h4>
                  <p className="text-xs text-[#52535A]">
                    Mentor: <strong>Javier Echeverri</strong> (Director de Innovación)
                  </p>
                  <p className="text-[11px] text-[#71717A] pt-2 border-t border-[#E8E8E4]">
                    Asignado a: <strong>Equipo 09 (CreditFlow)</strong> · Claridad en el ROI del caso corporativo.
                  </p>
                </div>
              </div>

              {/* Operational Live Feed Bar */}
              <div className="p-3.5 rounded-xl bg-[#141517] text-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="font-mono text-[#9CA3AF]">Canal de Operación:</span>
                  <span className="text-white font-medium">
                    Sandbox de pruebas actualizado con datasets sintéticos v2. Todos los equipos tienen acceso verificado.
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#71717A] shrink-0">Hace 12 min</span>
              </div>
            </div>
          )}

          {/* VIEW 04: JURY OS & RESULTADOS */}
          {activeCapability === 3 && (
            <div className="space-y-6 animate-in fade-in-50 duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E8E4]">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#1846A3] uppercase tracking-wider block">
                    Jury OS · Calificación Ponderada
                  </span>
                  <h3 className="text-lg font-bold text-[#141517] mt-0.5">
                    Evaluación matemática transparente y transición directa a piloto
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs font-mono font-semibold border border-[#A7F3D0]">
                    Consenso de Jurados: 94.8% · Sin Sesgo Detectado
                  </span>
                </div>
              </div>

              {/* Rubric Breakdown Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1.5">
                  <div className="flex justify-between font-bold text-[#141517]">
                    <span>Impacto en Negocio</span>
                    <span className="font-mono text-[#1846A3]">30%</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-[#141517]">9.4 / 10</div>
                  <p className="text-[11px] text-[#71717A] leading-relaxed">
                    Alineación con el dolor de reducción de tiempos del sponsor.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1.5">
                  <div className="flex justify-between font-bold text-[#141517]">
                    <span>Ejecución Técnica</span>
                    <span className="font-mono text-[#1846A3]">30%</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-[#141517]">9.2 / 10</div>
                  <p className="text-[11px] text-[#71717A] leading-relaxed">
                    Arquitectura reproducible, manejo de excepciones y latencia.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1.5">
                  <div className="flex justify-between font-bold text-[#141517]">
                    <span>Innovación en IA</span>
                    <span className="font-mono text-[#1846A3]">20%</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-[#141517]">9.5 / 10</div>
                  <p className="text-[11px] text-[#71717A] leading-relaxed">
                    Uso de modelos multimodales y agentes de verificación cruzada.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1.5">
                  <div className="flex justify-between font-bold text-[#141517]">
                    <span>Demo Funcional</span>
                    <span className="font-mono text-[#1846A3]">20%</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-[#141517]">9.0 / 10</div>
                  <p className="text-[11px] text-[#71717A] leading-relaxed">
                    Demostración fluida en vivo con documentos de prueba reales.
                  </p>
                </div>
              </div>

              {/* Selected Pilot Transition Panel */}
              <div className="p-5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#065F46] text-white text-[10px] font-mono font-bold uppercase">
                      Proyecto Seleccionado
                    </span>
                    <h4 className="text-sm font-bold text-[#065F46]">
                      DocuAudit Multimodal avanza a Piloto Corporativo
                    </h4>
                  </div>
                  <p className="text-xs text-[#065F46] leading-relaxed">
                    Puntaje final calibrado: <strong>9.32 / 10</strong>. Habilitado para prueba de concepto (POC) de 60 días con presupuesto del sponsor.
                  </p>
                </div>
                <Link href="/start" className="shrink-0">
                  <button className="px-4 py-2 rounded-lg bg-[#065F46] hover:bg-[#044E3A] text-white font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer">
                    Diseñar reto para tu empresa <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
