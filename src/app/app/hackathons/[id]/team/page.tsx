"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Users,
  Copy,
  Check,
  Plus,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { clsx } from "clsx";

export default function TeamWorkspacePage() {
  const params = useParams();
  const id = params?.id as string;
  const { teams } = usePlatform();
  const team = teams[0]; // DocuFlow AI

  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(team.inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const coverageItems = [
    { key: "backend", label: "Backend Engineering", covered: true, holder: "Mateo Valencia" },
    { key: "frontend", label: "Frontend & Web Apps", covered: true, holder: "Mateo Valencia" },
    { key: "ai", label: "AI / Machine Learning", covered: true, holder: "Andrés Echeverry" },
    { key: "design", label: "UX / Product Design", covered: false, holder: "FALTANTE" },
    { key: "product", label: "Product & Business Strategy", covered: false, holder: "FALTANTE" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-left space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <Link href={`/app/hackathons/${id}`} className="text-xs font-semibold text-blue-600 hover:text-blue-800">
                ← Volver al Workspace
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
              Equipo: {team.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Reto: {team.challengeTitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-mono font-semibold text-slate-800 hover:bg-slate-50 transition-all shadow-xs"
              title="Copiar código de invitación"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>Código: {team.inviteCode}</span>
            </button>
            <Link href={`/app/hackathons/${id}/people`}>
              <Button size="sm" className="bg-slate-950 hover:bg-blue-600 text-white font-semibold" rightIcon={<Sparkles className="w-3.5 h-3.5" />}>
                Buscar compañeros
              </Button>
            </Link>
          </div>
        </div>

        {/* SKILLS COVERAGE RADAR (CRITICAL UX REQUIREMENT) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Cobertura de Habilidades en el Equipo
              </h2>
              <p className="text-xs text-slate-500">
                Un equipo multidisciplinario aumenta la tasa de éxito y calificación del jurado.
              </p>
            </div>
            {!team.skillsCoverage.design && (
              <Link href={`/app/hackathons/${id}/people`}>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white font-bold" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Buscar Diseñador UX
                </Button>
              </Link>
            )}
          </div>

          {/* Coverage Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {coverageItems.map((item) => (
              <div
                key={item.key}
                className={clsx(
                  "p-4 rounded-2xl border flex items-center justify-between transition-all",
                  item.covered
                    ? "bg-emerald-50/50 border-emerald-200 text-emerald-950"
                    : "bg-amber-50/50 border-amber-300 text-amber-950"
                )}
              >
                <div className="space-y-0.5">
                  <span className="font-bold block">{item.label}</span>
                  <span className="text-[11px] text-slate-500">
                    {item.covered ? `Cubierto por ${item.holder}` : "Rol sin cubrir"}
                  </span>
                </div>
                {item.covered ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* TEAM MEMBERS ROSTER */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">
              Integrantes Actuales ({team.members.length})
            </h2>
            <span className="text-xs text-slate-500">Máximo 5 miembros por equipo</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.members.map((member) => (
              <div
                key={member.builderId}
                className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-bold text-slate-900">{member.name}</h3>
                      {member.isLead && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                          Lead
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">{member.role}</p>
                    <span className="text-[11px] text-slate-400 font-mono">@{member.handle}</span>
                  </div>
                </div>

                <Link href={`/u/${member.handle}`}>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Ver perfil
                  </Button>
                </Link>
              </div>
            ))}

            {/* Invite Teammate Card */}
            <Link
              href={`/app/hackathons/${id}/people`}
              className="p-6 rounded-3xl border-2 border-dashed border-slate-200 hover:border-blue-400 bg-white/50 hover:bg-blue-50/20 flex flex-col items-center justify-center text-center space-y-2 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Sumar nuevo integrante</p>
                <p className="text-[11px] text-slate-500">Explorar participantes con roles afines</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Assigned Mentor */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-3">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Mentor Asignado a tu Equipo
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-slate-900">{team.mentorAssigned}</h4>
              <p className="text-xs text-slate-500">Acompañamiento en arquitectura y seguridad de APIs</p>
            </div>
            <Link href="/mentor">
              <Button variant="outline" size="sm" className="text-xs">
                Ver notas y sesión
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
