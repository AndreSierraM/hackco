"use client";

import React from "react";
import { 
  FileSpreadsheet, 
  MessageSquare, 
  Mail, 
  HardDrive, 
  HelpCircle, 
  FileText, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

export function ChaosToKamino() {
  const chaosTools = [
    { icon: FileSpreadsheet, label: "Google Sheets desactualizados", detail: "3 versiones distintas con links rotos a repos" },
    { icon: MessageSquare, label: "Grupos caóticos de WhatsApp", detail: "200 personas preguntando fechas límite y accesos" },
    { icon: Mail, label: "Hilos interminables de correo", detail: "Feedback de mentores perdido en bandejas de entrada" },
    { icon: HardDrive, label: "Carpetas de Drive sin permisos", detail: "Videos de pitch en formatos que los jurados no pueden abrir" },
    { icon: FileText, label: "Rúbricas impresas o en PDF", detail: "Calificaciones subjetivas y notas que no cuadran al 100%" },
    { icon: HelpCircle, label: "El lunes post-hackathon", detail: "Los ganadores se van a casa con una foto y nada pasa" },
  ];

  const kaminoFlow = [
    {
      num: "01",
      title: "Un Reto Construible",
      detail: "Formulamos el dolor de negocio con requerimientos técnicos, datasets y criterios de éxito claros.",
      tag: "Estrategia",
    },
    {
      num: "02",
      title: "Talento Pre-filtrado",
      detail: "Convocamos builders comprobados en software, IA y diseño, agrupados en equipos equilibrados.",
      tag: "Convocatoria",
    },
    {
      num: "03",
      title: "Operación & Evaluación Sin Fricción",
      detail: "Cronograma en vivo, mentoría estructurada y Jury OS con ponderaciones matemáticas transparentes.",
      tag: "Plataforma",
    },
    {
      num: "04",
      title: "Acompañamiento hasta el Piloto",
      detail: "Seguimiento directo post-evento para probar los mejores prototipos en la infraestructura de la empresa.",
      tag: "Resultados",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: El Caos Tradicional */}
        <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-[#F4F4F0] border border-[#E5E5DE] flex flex-col justify-between text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-100/70 text-red-700 text-[11px] font-mono font-semibold uppercase tracking-wider mb-4 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              El Enfoque Tradicional
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#141517] tracking-tight">
              Coordinar 12 herramientas para un evento que se olvida en 48 horas.
            </h3>
            <p className="text-xs sm:text-sm text-[#52535A] mt-2 leading-relaxed">
              La mayoría de hackathons corporativos fracasan antes de empezar: el equipo organizador termina agotado por la logística y sin soluciones viables.
            </p>

            <div className="mt-6 space-y-3">
              {chaosTools.map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-3 rounded-xl bg-white/80 border border-[#E5E5DE] text-left transition-all hover:bg-white flex items-start gap-3"
                  >
                    <div className="p-1.5 rounded-lg bg-red-50 text-red-600 shrink-0 mt-0.5 border border-red-100">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#141517]">{tool.label}</h4>
                      <p className="text-[11px] text-[#71717A] mt-0.5 leading-snug">{tool.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E5E5DE] text-left">
            <span className="text-[11px] font-mono text-[#71717A]">
              Resultado típico: Mucho esfuerzo, bonitas fotos, cero código en producción.
            </span>
          </div>
        </div>

        {/* Right: El Sistema Kamino */}
        <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-[#141517] text-white border border-[#2B2D33] shadow-editorial-elevated flex flex-col justify-between text-left relative overflow-hidden">
          {/* Subtle architectural background detail */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1846A3]/30 text-[#93C5FD] text-[11px] font-mono font-semibold uppercase tracking-wider mb-4 border border-[#1846A3]/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              Con Kamino
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Un solo programa integral. Desde la formulación hasta el piloto.
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 leading-relaxed max-w-xl">
              Nosotros asumimos la carga operativa, diseñamos el challenge técnico, aportamos la plataforma y acompañamos a los equipos hasta que tu empresa pueda probar los prototipos.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {kaminoFlow.map((step) => (
                <div 
                  key={step.num}
                  className="p-4 rounded-xl bg-[#1C1E24] border border-[#2B2D36] hover:border-[#3B82F6]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#60A5FA]">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#141517] text-[#9CA3AF] border border-[#2B2D36]">
                        {step.tag}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#93C5FD] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#9CA3AF] mt-1.5 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-[#252830] flex items-center gap-1.5 text-[11px] text-[#34D399] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Resuelto por Kamino</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#2B2D36] flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
            <span className="text-xs text-[#9CA3AF]">
              Ventaja real: Metodología + Operación + Plataforma + Talento calificado.
            </span>
            <a 
              href="#experiencia" 
              className="text-xs font-semibold text-[#60A5FA] hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              Explorar la plataforma <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
