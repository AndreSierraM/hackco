"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  Users,
  Clock,
  CheckCircle2,
  Calendar,
  ArrowRight,
  FolderGit2,
  Compass,
  Trophy,
  Mail,
  UserCheck,
} from "lucide-react";
import { DEMO_BUILDERS } from "@/lib/demo-data";

export default function ParticipantHomePage() {
  const { programs, teams, notifications } = usePlatform();

  const activeProgram = programs[0]; // Bogotá AI Operations
  const activeTeam = teams[0]; // DocuFlow AI

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-left space-y-10">
        {/* Personal Greeting */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Participant Home
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1">
              Hola, Mateo 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Tienes 1 reto en fase activa de construcción y 1 invitación de mentoría pendiente.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/hackathons">
              <Button variant="outline" size="sm" leftIcon={<Compass className="w-4 h-4" />}>
                Explorar más retos
              </Button>
            </Link>
            <Link href="/u/mateo_dev">
              <Button size="sm" className="bg-slate-950 text-white">
                Ver mi perfil
              </Button>
            </Link>
          </div>
        </div>

        {/* SECTION: CONTINUE WHERE YOU LEFT OFF (FLAGSHIP CARD) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Continúa donde lo dejaste
            </h2>
            <Badge variant="primary" size="sm" dot>
              FASE ACTIVA
            </Badge>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-blue-600">
                  {activeProgram.organizationName}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {activeProgram.title}
                </h3>
                <p className="text-xs text-slate-500">{activeProgram.city} · Modalidad {activeProgram.format}</p>
              </div>

              <Link href={`/app/hackathons/${activeProgram.slug}`}>
                <Button size="md" className="bg-slate-950 hover:bg-blue-600 text-white font-semibold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Abrir Workspace del Reto
                </Button>
              </Link>
            </div>

            {/* Quick Status Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-slate-400 block text-[11px]">Fase Actual</span>
                <p className="font-bold text-slate-900">Construcción Guiada</p>
                <span className="text-[10px] text-blue-600 font-semibold">Día 2 de 14</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-slate-400 block text-[11px]">Próximo Deadline</span>
                <p className="font-bold text-rose-600">Cierre de Entregas</p>
                <span className="text-[10px] text-slate-500">En 48 horas (16 Oct)</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-slate-400 block text-[11px]">Tu Equipo</span>
                <p className="font-bold text-slate-900">{activeTeam.name}</p>
                <span className="text-[10px] text-amber-700 font-semibold">Falta rol de UX</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-slate-400 block text-[11px]">Entrega del Proyecto</span>
                <p className="font-bold text-emerald-600">82% Completado</p>
                <span className="text-[10px] text-slate-500">Falta video pitch</span>
              </div>
            </div>

            {/* Next Agenda Event Alert */}
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/80 flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold shrink-0">
                  15:30
                </div>
                <div>
                  <p className="font-bold text-slate-900">Sesión 1:1 de Mentoría de Arquitectura</p>
                  <p className="text-slate-600 text-[11px]">Con Carlos Peña (VP of Engineering, Northstar Labs)</p>
                </div>
              </div>
              <Link href={`/app/hackathons/${activeProgram.slug}`}>
                <Button size="sm" variant="outline" className="shrink-0 bg-white">
                  Ingresar a la sala
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION: YOUR HACKATHONS */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900">Tus Programas & Retos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between text-left space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="primary" size="sm">
                    EN CURSO
                  </Badge>
                  <span className="text-xs font-bold text-slate-900">$35,000 USD</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Bogotá AI Operations Challenge</h3>
                <p className="text-xs text-slate-500">Equipo: DocuFlow AI · Reto 01</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500">Track: Auditoría Multimodal</span>
                <Link href="/app/hackathons/bogota-ai-operations">
                  <Button size="sm" variant="ghost" className="text-blue-600 font-bold" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Ir al espacio
                  </Button>
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between text-left space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="neutral" size="sm">
                    FINALIZADA
                  </Badge>
                  <span className="text-xs font-bold text-amber-600">1er Puesto 🏆</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Fintech Inclusion Cup Colombia</h3>
                <p className="text-xs text-slate-500">Medellín · Proyecto: CrediInclusión</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500">Premio: $25,000 USD</span>
                <Link href="/projects/proj-docuflow">
                  <Button size="sm" variant="ghost" className="text-slate-700 font-bold" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Ver certificado
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: INVITATIONS & MATCHMAKING */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Teammate Matchmaking */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900">Compañeros Recomendados</h3>
              </div>
              <Link href="/app/hackathons/bogota-ai-operations/people" className="text-xs font-bold text-blue-600 hover:text-blue-800">
                Ver todos →
              </Link>
            </div>
            <p className="text-xs text-slate-500">
              Perfiles con habilidades de UX y Producto que encajan con las necesidades de DocuFlow AI:
            </p>

            <div className="space-y-2.5">
              {DEMO_BUILDERS.slice(1, 3).map((b) => (
                <div key={b.id} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <img src={b.avatar} alt={b.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-slate-900">{b.name}</p>
                      <p className="text-[11px] text-slate-500">{b.role} · {b.city}</p>
                    </div>
                  </div>
                  <Link href={`/u/${b.handle}`}>
                    <Button size="sm" variant="outline" className="text-xs py-1 px-2.5">
                      Invitar
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Invitations */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900">Invitaciones Pendientes</h3>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 font-bold">
                1 nueva
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-2 text-xs">
              <div className="flex items-start justify-between">
                <span className="font-bold text-amber-950">Invitación a equipo: Neural Andes</span>
                <span className="text-[10px] text-amber-700 font-mono">Hace 4 horas</span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                Camila Restrepo te invitó a sumarte a su equipo como Lead Developer para el Reto 02.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <Button size="sm" className="bg-slate-950 text-white text-xs">
                  Aceptar invitación
                </Button>
                <Button size="sm" variant="ghost" className="text-xs">
                  Declinar
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
