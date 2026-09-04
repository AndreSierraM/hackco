"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/config/brand";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Shield,
  Building2,
  Users,
  Workflow,
  FolderGit2,
  Sliders,
  Sparkles,
  ToggleLeft,
  ToggleRight,
  CheckCircle2,
} from "lucide-react";

export default function PlatformAdminPage() {
  const { programs, submissions } = usePlatform();

  const [featureFlags, setFeatureFlags] = useState({
    aiBuilderV2: true,
    instantMatchmaking: true,
    videoUploadDirect: false,
    whiteLabelCustomDomains: true,
    stripePayoutsColombia: false,
  });

  const toggleFlag = (key: keyof typeof featureFlags) => {
    setFeatureFlags({ ...featureFlags, [key]: !featureFlags[key] });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full text-left space-y-8">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="danger" size="sm">
                Super Admin Console
              </Badge>
              <span className="text-xs text-slate-400 font-mono">
                {BRAND.legalName}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
              Gobernanza de la Plataforma
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Administración global de organizaciones, programas, banderas de características y moderación.
            </p>
          </div>
        </div>

        {/* Global Platform Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <span className="text-slate-400">Organizaciones Activas</span>
            <p className="text-2xl font-bold text-slate-900 mt-1">12</p>
            <span className="text-slate-500 text-[10px]">Northstar Labs, Andes Hub...</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <span className="text-slate-400">Programas Creados</span>
            <p className="text-2xl font-bold text-slate-900 mt-1">{programs.length}</p>
            <span className="text-blue-600 text-[10px] font-semibold">1 en construcción en vivo</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <span className="text-slate-400">Builders Registrados</span>
            <p className="text-2xl font-bold text-slate-900 mt-1">428</p>
            <span className="text-emerald-600 text-[10px] font-semibold">Bogotá, Medellín, Cali</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-1">
            <span className="text-slate-400">Proyectos en Pipeline</span>
            <p className="text-2xl font-bold text-slate-900 mt-1">{submissions.length}</p>
            <span className="text-purple-600 text-[10px] font-semibold">1 piloto en curso</span>
          </div>
        </div>

        {/* Feature Flags Management */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Banderas de Características (Feature Flags)</h2>
              <p className="text-xs text-slate-500">Habilita o deshabilita módulos sin redespliegue de código.</p>
            </div>
            <Badge variant="primary" size="sm">
              Control Dinámico
            </Badge>
          </div>

          <div className="space-y-3 pt-2 text-xs divide-y divide-slate-100">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-bold text-slate-900">AI Challenge Builder Conversacional v2</p>
                <p className="text-[11px] text-slate-500">Generación de rúbricas y fases con modelos LLM en vivo.</p>
              </div>
              <button onClick={() => toggleFlag("aiBuilderV2")} className="text-blue-600">
                {featureFlags.aiBuilderV2 ? <ToggleRight className="w-7 h-7" /> : <ToggleLeft className="w-7 h-7 text-slate-300" />}
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-bold text-slate-900">Matchmaking de Habilidades en Tiempo Real</p>
                <p className="text-[11px] text-slate-500">Detección de vacíos de roles en equipos.</p>
              </div>
              <button onClick={() => toggleFlag("instantMatchmaking")} className="text-blue-600">
                {featureFlags.instantMatchmaking ? <ToggleRight className="w-7 h-7" /> : <ToggleLeft className="w-7 h-7 text-slate-300" />}
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-bold text-slate-900">Dominios White-Label Personalizados para Empresas</p>
                <p className="text-[11px] text-slate-500">Permite subdominios propios de organizadores.</p>
              </div>
              <button onClick={() => toggleFlag("whiteLabelCustomDomains")} className="text-blue-600">
                {featureFlags.whiteLabelCustomDomains ? <ToggleRight className="w-7 h-7" /> : <ToggleLeft className="w-7 h-7 text-slate-300" />}
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-bold text-slate-900">Desembolso Automático de Premios en Colombia</p>
                <p className="text-[11px] text-slate-500">Integración con transferencias bancarias ACH.</p>
              </div>
              <button onClick={() => toggleFlag("stripePayoutsColombia")} className="text-blue-600">
                {featureFlags.stripePayoutsColombia ? <ToggleRight className="w-7 h-7" /> : <ToggleLeft className="w-7 h-7 text-slate-300" />}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
