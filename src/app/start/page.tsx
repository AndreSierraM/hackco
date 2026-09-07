import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChallengeAssessment } from "@/components/common/ChallengeAssessment";
import { BRAND } from "@/config/brand";
import { ShieldCheck, ArrowUpRight, HelpCircle } from "lucide-react";

export default function StartPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="space-y-10">
          {/* Header */}
          <div className="max-w-3xl text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider border border-[#D3E2FE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1846A3]" />
              <span>Diagnóstico de Viabilidad Técnica</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#141517] tracking-tight">
              Estructura el reto de tu empresa en minutos.
            </h1>
            <p className="text-sm sm:text-base text-[#52535A] leading-relaxed">
              No necesitas un pliego de condiciones formal. Describe el problema en tus propias palabras o selecciona un caso típico para generar la arquitectura del reto, perfiles requeridos y entregables esperados.
            </p>
          </div>

          {/* Assessment Tool */}
          <ChallengeAssessment />

          {/* Direct Support & Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-xs">
            <div className="p-5 rounded-2xl bg-white border border-[#E8E8E4] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#141517]">Confidencialidad Total & Tratamiento de Datos</h4>
                <p className="text-[#52535A] mt-1 leading-relaxed">
                  Toda la información compartida a través de este diagnóstico está amparada bajo secreto profesional comercial. No compartimos ningún dato con terceros sin tu autorización expresa.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E8E4] flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-[#1846A3] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#141517]">¿Prefieres una llamada exploratoria?</h4>
                <p className="text-[#52535A] mt-1 leading-relaxed">
                  Si tu reto requiere un acuerdo previo de confidencialidad (NDA firmado) antes de discutirlo, puedes agendar una sesión preliminar directamente.
                </p>
                <a
                  href={BRAND.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#1846A3] hover:underline inline-flex items-center gap-1 mt-2"
                >
                  Agendar llamada en Google Meet / Teams <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
