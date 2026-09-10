"use client";

import React, { useState } from "react";
import { ChevronDown, ShieldCheck, FileCheck, Users2, Clock, GitPullRequest, Laptop } from "lucide-react";

interface FaqItem {
  icon: React.ElementType;
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    icon: ShieldCheck,
    q: "¿Quién conserva la propiedad intelectual (IP) del software desarrollado?",
    a: "Tu organización conserva el control total. Las bases del reto estipulan de forma vinculante que los participantes otorgan a tu empresa la cesión de derechos de autor patrimoniales o la licencia comercial exclusiva para operar el piloto. Todos los repositorios, Dockerfiles y documentación técnica son transferidos directamente a las cuentas corporativas de tu empresa.",
  },
  {
    icon: FileCheck,
    q: "¿Qué datos tenemos que compartir y cómo garantizan la seguridad de la información?",
    a: "Nunca se exponen bases de datos de producción ni datos personales de tus clientes. Nuestro equipo de arquitectura diseña datasets sintéticos anonimizados que replican la distribución estadística y los casos límite del negocio sin ningún riesgo. Además, todos los participantes aceptados firman acuerdos de confidencialidad (NDA) estrictos antes de acceder al entorno de competencia.",
  },
  {
    icon: Clock,
    q: "¿Cuánto tiempo y esfuerzo le exige este proceso a nuestro equipo interno?",
    a: "Cero desgaste operativo. Kamino absorbe el 95% de la carga: estructuración del reto, diseño de rúbricas, convocatoria, filtro técnico, plataforma, logística y moderación. Tu equipo de tecnología solo participa en 2 horas de discovery inicial, breves checkpoints de mentoría técnica y la deliberación como jurados en el Demo Day.",
  },
  {
    icon: GitPullRequest,
    q: "¿En qué se diferencia un Hackathon con Kamino de un hackathon universitario o informal?",
    a: "Los hackathons tradicionales son eventos de fin de semana con problemas vagos donde los participantes entregan presentaciones en PowerPoint y prototipos a medio terminar que terminan archivados. Un Hackathon Corporativo con Kamino es un sprint de ingeniería riguroso: con especificaciones OpenAPI, pruebas automatizadas, rúbrica matemática al 100% y acompañamiento técnico posterior para que el código ganador se convierta en un piloto en producción.",
  },
  {
    icon: Laptop,
    q: "¿Qué sucede después del Demo Day con la solución ganadora?",
    a: "El Demo Day no es la meta: el objetivo es el piloto. Durante 60 a 90 días posteriores al evento, nuestro Project Pipeline acompaña a tu equipo de ingeniería en la fase de staging, resolución de vulnerabilidades, auditoría de código y despliegue controlado en la infraestructura de tu organización.",
  },
  {
    icon: Users2,
    q: "¿El hackathon se realiza en modalidad presencial, remota o híbrida?",
    a: "Adaptamos el formato a los objetivos de tu empresa. Podemos operar hackathons 100% remotos con cobertura en toda América Latina, o formatos híbridos y presenciales en ciudades como Bogotá, Medellín, Ciudad de México o Santiago de Chile, con cobertura audiovisual profesional para tu comité directivo.",
  },
];

export function EmpresasFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className="space-y-3 max-w-4xl mx-auto text-left">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const Icon = faq.icon;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-[#1846A3]/30 shadow-xs ring-1 ring-[#1846A3]/10"
                : "bg-[#FBFBFA] border-[#E8E8E4] hover:bg-white hover:border-[#D0D0C8]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer min-h-[48px]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isOpen ? "bg-[#EEF4FF] text-[#1846A3]" : "bg-[#F4F4EE] text-[#71717A]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#141517]">
                  {faq.q}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#71717A] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#1846A3]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#52535A] leading-relaxed border-t border-[#F4F4EE] animate-in fade-in duration-150">
                <p className="pl-11">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
