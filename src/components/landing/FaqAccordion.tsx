"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "¿Por qué no contratar una consultora tradicional?",
    a: "Las consultoras cobran meses por diagnósticos y diapositivas teóricas con un único equipo asignado. Con Kamino obtienes entre 6 y 10 equipos de ingeniería compitiendo en paralelo con arquitecturas distintas, entregándote prototipos ejecutables con código real en 4 semanas.",
  },
  {
    q: "¿Por qué no construirlo internamente con nuestro equipo?",
    a: "Tus desarrolladores ya están al 100% manteniendo el core del negocio. Explorar tecnologías nuevas suele estancarse 6 a 12 meses en la cola de TI. Kamino absorbe toda la carga técnica y te entrega soluciones probadas sin distraer a tu equipo.",
  },
  {
    q: "¿Quién es dueño del código fuente y de la propiedad intelectual?",
    a: "Tu empresa. Todo el código fuente, contenedores Docker y documentación técnica se entregan bajo cesión de derechos o licencias comerciales exclusivas acordadas previamente en las bases del reto.",
  },
  {
    q: "¿Qué datos tenemos que compartir con los desarrolladores?",
    a: "Ningún dato productivo ni sensible. Trabajamos con datasets sintéticos o anonimizados y entornos sandbox aislados, respaldados por acuerdos de confidencialidad (NDA) vinculantes.",
  },
  {
    q: "¿Cuánto tiempo exige de nuestro equipo de tecnología?",
    a: "Solo 2 horas para la sesión de discovery inicial, 1 hora semanal para feedback técnico y la deliberación en el Demo Day. Nosotros gestionamos toda la metodología, logística y supervisión técnica.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto text-left">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-[#1846A3]/40 shadow-xs ring-1 ring-[#1846A3]/10"
                : "bg-[#FBFBFA] border-[#E8E8E4] hover:border-[#D0D0C8]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer min-h-[48px]"
            >
              <span className="text-xs sm:text-sm font-bold text-[#141517] flex items-center gap-2.5">
                <HelpCircle
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isOpen ? "text-[#1846A3]" : "text-[#71717A]"
                  }`}
                />
                <span>{faq.q}</span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#71717A] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#1846A3]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-[#52535A] pl-10 sm:pl-11 leading-relaxed animate-in fade-in duration-150">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
