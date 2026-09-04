"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Clock,
  Sparkles,
  ShieldCheck,
  FileText,
  Code2,
  Share2,
} from "lucide-react";
import { DEMO_SCHEDULE, DEMO_MENTORS } from "@/lib/demo-data";
import { clsx } from "clsx";

export default function HackathonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const { programs } = usePlatform();

  const program = programs.find((p) => p.slug === slug) || programs[0];

  const [activeTab, setActiveTab] = useState<
    "overview" | "challenges" | "schedule" | "prizes" | "mentors" | "faq"
  >("overview");

  const [selectedDay, setSelectedDay] = useState<number>(1);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "challenges", label: `Challenges (${program.challenges.length})` },
    { id: "schedule", label: "Agenda" },
    { id: "prizes", label: "Premios" },
    { id: "mentors", label: "Mentores & Jurados" },
    { id: "faq", label: "FAQ & Bases" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION WITH DYNAMIC THEME */}
        <section className="relative text-left">
          {/* Cover background */}
          <div className="h-64 sm:h-80 w-full overflow-hidden relative bg-slate-900">
            <img
              src={program.coverImage}
              alt={program.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFA] via-black/40 to-black/60" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="primary" size="sm" dot>
                  {program.status === "BUILDING" ? "EN CONSTRUCCIÓN" : "POSTULACIONES ABIERTAS"}
                </Badge>
                <span className="text-white/80 text-xs font-semibold">
                  Organizado por {program.organizationName}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
                {program.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-200 mt-2 max-w-2xl drop-shadow-xs">
                {program.oneLiner}
              </p>
            </div>
          </div>

          {/* Key Facts Bar & Sticky CTA */}
          <div className="bg-white border-b border-slate-200/90 py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Fechas del programa</span>
                    <span className="font-semibold text-slate-900">
                      {program.startDate} al {program.endDate}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Modalidad & Sede</span>
                    <span className="font-semibold text-slate-900">
                      {program.city} · {program.format}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Bolsa de Premios</span>
                    <span className="font-bold text-slate-900">{program.prizePool}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-rose-500" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Cierre de aplicaciones</span>
                    <span className="font-semibold text-rose-600">
                      {program.applicationDeadline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5">
                <Link href={`/hackathons/${program.slug}/apply`}>
                  <Button size="md" className="bg-slate-950 hover:bg-blue-600 text-white font-semibold shadow-sm">
                    Aplicar al reto
                  </Button>
                </Link>
                <Link href="/app">
                  <Button variant="outline" size="md">
                    Mi Workspace
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STICKY NAVIGATION TABS */}
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-1 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={clsx(
                  "py-3.5 px-4 text-xs font-semibold whitespace-nowrap border-b-2 transition-all select-none",
                  activeTab === tab.id
                    ? "border-slate-950 text-slate-950"
                    : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENTS */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-left">
          {/* TAB: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column (Content) */}
              <div className="lg:col-span-8 space-y-10">
                {/* About */}
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-slate-900">Sobre el Reto</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Why Participate */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">¿Por qué participar?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {program.whyParticipate.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Eligibility */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">¿Quién puede participar?</h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {program.eligibility.map((el, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges Sneak Peek */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">Tracks & Desafíos</h3>
                    <button
                      onClick={() => setActiveTab("challenges")}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800"
                    >
                      Ver especificaciones completas →
                    </button>
                  </div>
                  <div className="space-y-3">
                    {program.challenges.map((ch) => (
                      <div key={ch.id} className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-mono">
                            {ch.trackNumber}
                          </span>
                          <span className="text-xs font-bold text-emerald-600">{ch.prizePool}</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">{ch.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{ch.shortDescription}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (Organizer & Sponsors) */}
              <div className="lg:col-span-4 space-y-6">
                {/* Organization Card */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Organizador Principal
                  </span>
                  <div className="flex items-center gap-3">
                    <img
                      src={program.logo}
                      alt={program.organizationName}
                      className="w-12 h-12 rounded-2xl object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{program.organizationName}</h4>
                      <p className="text-xs text-slate-500">{program.city}, {program.country}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Líderes en infraestructura y agentes de IA para operaciones de gran escala en LATAM.
                  </p>
                  <Link href={`/organizations/${program.organizationId}`}>
                    <Button variant="outline" size="sm" className="w-full text-xs">
                      Ver perfil de la organización
                    </Button>
                  </Link>
                </div>

                {/* Sponsors */}
                {program.sponsors.length > 0 && (
                  <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Sponsors & Aliados
                    </span>
                    <div className="space-y-3">
                      {program.sponsors.map((sp) => (
                        <div key={sp.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900">{sp.name}</span>
                            <span className="text-[10px] text-blue-600 font-semibold">{sp.tier}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1">{sp.perks}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: CHALLENGES */}
          {activeTab === "challenges" && (
            <div className="space-y-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-slate-900">Tracks & Desafíos del Programa</h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Elige el reto que mejor se alinee con las habilidades técnicas de tu equipo.
                </p>
              </div>

              <div className="space-y-6">
                {program.challenges.map((ch) => (
                  <div
                    key={ch.id}
                    className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-mono font-bold text-xs">
                          {ch.trackNumber}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">{ch.title}</h3>
                      </div>
                      <div className="text-xs font-bold text-emerald-600 px-3 py-1 bg-emerald-50 rounded-xl border border-emerald-200 shrink-0">
                        Bolsa: {ch.prizePool}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
                      <div className="space-y-2">
                        <span className="font-bold text-slate-900 text-xs uppercase tracking-wide">
                          El Problema Real:
                        </span>
                        <p className="leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                          {ch.problem}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <span className="font-bold text-slate-900 text-xs uppercase tracking-wide">
                          Objetivo del Reto:
                        </span>
                        <p className="leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                          {ch.objective}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <span className="font-bold text-slate-900">Entregables Requeridos:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ch.deliverables.map((del, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
                      <span className="font-semibold text-slate-500">Tecnologías recomendadas:</span>
                      {ch.recommendedTech.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex justify-end">
                      <Link href={`/hackathons/${program.slug}/apply`}>
                        <Button size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                          Aplicar a este track
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SCHEDULE */}
          {activeTab === "schedule" && (
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Cronograma & Agenda</h2>
                  <p className="text-xs text-slate-500">Horarios en zona horaria de Bogotá (GMT-5)</p>
                </div>
                {/* Day selector */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
                  {[1, 2, 5, 6].map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={clsx(
                        "px-3 py-1 rounded-lg text-xs font-semibold transition-colors",
                        selectedDay === day
                          ? "bg-white text-slate-900 shadow-xs"
                          : "text-slate-500 hover:text-slate-900"
                      )}
                    >
                      Día {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Events List */}
              <div className="space-y-3">
                {DEMO_SCHEDULE.map((event) => (
                  <div
                    key={event.id}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 font-mono font-bold text-xs shrink-0">
                        {event.time}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="neutral" size="sm">
                            {event.type}
                          </Badge>
                          {event.isLive && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" /> EN VIVO
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">{event.title}</h4>
                        <p className="text-xs text-slate-500 flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{event.location}</span>
                          {event.speaker && <span>· Ponente: {event.speaker}</span>}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0 text-xs">
                      Añadir al calendario
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: PRIZES */}
          {activeTab === "prizes" && (
            <div className="space-y-8 max-w-4xl mx-auto text-left">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Bolsa de Premios & Acompañamiento</h2>
                <p className="text-xs text-slate-500">
                  Premios en efectivo + paso a piloto corporativo formal con Northstar Labs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-300 shadow-xs space-y-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase tracking-wide">
                    1er Puesto Absoluto
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-950">$20,000 USD</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Efectivo sin retención de IP + Contrato de piloto remunerado de 3 meses con Northstar Labs.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-100 border border-slate-300 shadow-xs space-y-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800 uppercase tracking-wide">
                    2do Puesto
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-950">$10,000 USD</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Efectivo + Mentoría de escalamiento con Andes Cloud Partners y créditos GPU.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-amber-700/10 border border-amber-600/30 shadow-xs space-y-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 uppercase tracking-wide">
                    3er Puesto
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-950">$5,000 USD</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Efectivo + Fast-track a entrevistas técnicas y espacio de coworking en Bogotá.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB: MENTORS & JURY */}
          {activeTab === "mentors" && (
            <div className="space-y-8 max-w-4xl mx-auto text-left">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Mentores Técnicos</h2>
                <p className="text-xs text-slate-500">
                  Líderes de ingeniería y producto que acompañan a los equipos durante la construcción.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {DEMO_MENTORS.map((m) => (
                  <div key={m.id} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={m.avatar}
                        alt={m.name}
                        className="w-12 h-12 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{m.name}</h4>
                        <p className="text-xs text-slate-500">{m.role}</p>
                        <p className="text-[11px] font-semibold text-blue-600">{m.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {m.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: FAQ & BASES */}
          {activeTab === "faq" && (
            <div className="space-y-6 max-w-3xl mx-auto text-left">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Bases Legales & Preguntas</h2>
                <p className="text-xs text-slate-500">Términos claros y sin ambigüedad para todos los participantes.</p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm">Propiedad Intelectual (IP)</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Todo el código desarrollado pertenece a los participantes. Northstar Labs conserva la opción de primer contacto para negociar un piloto formal remunerado.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm">Composición de Equipos</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Equipos de 2 a 5 integrantes. Si aplicas de forma individual, la plataforma habilitará la herramienta de matchmaking para conectarte con otros participantes aceptados.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm">Uso de Inteligencia Artificial</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Se permite el uso de APIs comerciales y modelos open source. En la entrega final debe especificarse la arquitectura y salvaguardas implementadas.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
