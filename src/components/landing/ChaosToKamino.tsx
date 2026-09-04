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
  const clientPains = [
    { 
      icon: HelpCircle, 
      label: "Backlog de TI saturado a meses", 
      detail: "Tus ingenieros están 100% ocupados con el core del negocio; cualquier desarrollo nuevo queda en espera de 6 a 9 meses." 
    },
    { 
      icon: FileText, 
      label: "Consultorías teóricas en PowerPoint", 
      detail: "Pagas decenas de miles de dólares por diagnósticos de 80 páginas que nadie en tu equipo tiene tiempo de programar." 
    },
    { 
      icon: MessageSquare, 
      label: "Comités que debaten sin probar", 
      detail: "Meses en reuniones analizando 'hipótesis' abstractas sin tener una sola pantalla de software real para validar con usuarios." 
    },
    { 
      icon: FileSpreadsheet, 
      label: "Iniciativas que mueren en fotos", 
      detail: "Talleres o hackathons donde se proponen ideas en post-its, pero el lunes nadie da continuidad técnica y el código se pierde." 
    },
    { 
      icon: HardDrive, 
      label: "Dificultad para explorar IA sin riesgo", 
      detail: "Quieres probar automatizaciones o modelos con tus procesos, pero no cuentas con el talento técnico especializado in-house." 
    },
    { 
      icon: Mail, 
      label: "Alto costo de equivocarse", 
      detail: "Comprometer presupuestos millonarios en desarrollos a ciegas sin antes haber probado un prototipo funcional en tus manos." 
    },
  ];

  const clientSolutions = [
    {
      num: "01",
      title: "Formulamos tu Reto Técnico",
      detail: "Traducimos tu dolor de negocio en especificaciones claras, reglas y datasets controlados para que los builders construyan justo lo que necesitas.",
      tag: "Estrategia",
    },
    {
      num: "02",
      title: "Te Conseguimos el Talento Exacto",
      detail: "Convocamos y filtramos a desarrolladores senior, especialistas en IA y diseñadores de producto listos para enfocarse en tu problema.",
      tag: "Convocatoria",
    },
    {
      num: "03",
      title: "Supervisamos Toda la Construcción",
      detail: "Nos encargamos de los sprints, mentorías y validaciones técnicas. Tu equipo directivo solo invierte 2 horas semanales en supervisar avances.",
      tag: "Cero Desgaste",
    },
    {
      num: "04",
      title: "Te Entregamos Prototipos Listos",
      detail: "Tus líderes evalúan demos en vivo con rúbricas objetivas y te quedas con el código en GitHub, la documentación y vía libre a piloto.",
      tag: "Piloto Real",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Lo que le pasa a tu empresa hoy */}
        <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-[#F4F4F0] border border-[#E5E5DE] flex flex-col justify-between text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-100/70 text-red-700 text-[11px] font-mono font-semibold uppercase tracking-wider mb-4 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Lo que vive tu empresa hoy
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#141517] tracking-tight">
              Tus problemas se acumulan entre el backlog de TI y consultorías teóricas.
            </h3>
            <p className="text-xs sm:text-sm text-[#52535A] mt-2 leading-relaxed">
              Sabes exactamente qué optimizar en tu negocio, pero los métodos tradicionales no entregan software y tu equipo interno no da abasto.
            </p>

            <div className="mt-6 space-y-3">
              {clientPains.map((tool, idx) => {
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
              Resultado: Meses de espera, presupuestos quemados y tus problemas siguen sin resolverse.
            </span>
          </div>
        </div>

        {/* Right: Cómo te ayudamos a solucionarlo */}
        <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-[#141517] text-white border border-[#2B2D33] shadow-editorial-elevated flex flex-col justify-between text-left relative overflow-hidden">
          {/* Subtle architectural background detail */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1846A3]/30 text-[#93C5FD] text-[11px] font-mono font-semibold uppercase tracking-wider mb-4 border border-[#1846A3]/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              Cómo te ayudamos a solucionarlo
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Software funcionando y probado en 4 semanas, sin desgastar a tu equipo.
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2 leading-relaxed max-w-xl">
              Nosotros absorbemos toda la carga técnica, metodológica y operativa. Tu organización solo participa en validar avances y elegir la mejor solución para implementar.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {clientSolutions.map((step) => (
                <div 
                  key={step.num}
                  className="p-4 rounded-xl bg-[#1C1E24] border border-[#2B2D36] hover:border-[#3B82F6]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#60A5FA]">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-white border border-[#2B2D36]">
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
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#2B2D36] flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
            <span className="text-xs text-emerald-400 font-medium">
              ✓ Tu resultado: De 5 a 10 prototipos funcionales listos para tu empresa en 4 semanas.
            </span>
            <a 
              href="#experiencia" 
              className="text-xs font-semibold text-[#60A5FA] hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              Ver cómo supervisas el avance <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
