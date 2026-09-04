import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, Rocket, Users } from "lucide-react";

export default function PricingPage() {
  const tiers = [
    {
      name: "Pilot Challenge",
      badge: "Inmersión Rápida",
      target: "Para validar una tecnología o API específica en un sprint ágil.",
      timeline: "2 a 3 semanas",
      scale: "Hasta 80 builders · 15 equipos",
      deliverable: "5 a 10 prototipos funcionales",
      includes: [
        "Diseño metodológico y formulación de bases técnicas",
        "Convocatoria curada de talento especializado",
        "Plataforma completa (workspace, matchmaking, entregas)",
        "Jury OS con rúbrica estándar",
        "Reporte ejecutivo de resultados y código fuente",
      ],
      cta: "Cotizar Pilot Challenge",
    },
    {
      name: "Signature Hackathon",
      badge: "Más Solicitado",
      featured: true,
      target: "El programa completo de innovación abierta con impacto de marca y captación de talento.",
      timeline: "4 a 6 semanas",
      scale: "Hasta 350 builders · 40+ equipos",
      deliverable: "15 a 25 soluciones de alto nivel",
      includes: [
        "Estrategia de retos con tracks múltiples",
        "Landing page personalizada con identidad de marca",
        "Campaña de reclutamiento regional (Colombia & LATAM)",
        "Operación en vivo presencial, híbrida o remota",
        "Red de mentores y workshops técnicos",
        "Jury OS avanzado y calibración de jurados",
        "Gestión de bolsa de premios y contratos de IP",
        "Acompañamiento a piloto de 60 días para el ganador",
      ],
      cta: "Cotizar Signature Program",
    },
    {
      name: "Enterprise Multi-Track Program",
      badge: "Gran Escala",
      target: "Programas corporativos multi-sede o convocatorias públicas de alta escala.",
      timeline: "8 a 12 semanas",
      scale: "500+ builders · Ilimitados equipos",
      deliverable: "Pipeline continuo de innovación y startups",
      includes: [
        "White-label completo de plataforma",
        "Múltiples tracks departamentales o temáticos",
        "Scouting activo de startups en etapa temprana",
        "Integración con entornos sandbox y APIs propietarias",
        "Operación logística en múltiples ciudades simultáneas",
        "Project Pipeline con seguimiento de 6 meses",
        "Acuerdos de confidencialidad y gobernanza legal enterprise",
      ],
      cta: "Cotizar Enterprise",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-4">
            <Badge variant="primary" size="md">
              Programas Gestionados & Alcance
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
              Inversión estructurada según el alcance de tu reto
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              No vendemos suscripciones SaaS genéricas sin soporte. Diseñamos, convocamos y operamos cada programa de innovación como una misión de ingeniería con resultados medibles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`p-8 rounded-3xl bg-white border flex flex-col justify-between transition-all ${
                  t.featured
                    ? "border-slate-900 shadow-xl ring-2 ring-slate-950 relative"
                    : "border-slate-200/90 shadow-xs hover:border-slate-300"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3.5 left-8 px-3 py-1 rounded-full bg-slate-950 text-white text-[10px] font-bold uppercase tracking-wider">
                    {t.badge}
                  </div>
                )}
                <div className="space-y-4">
                  <div>
                    {!t.featured && (
                      <Badge variant="neutral" size="sm" className="mb-2">
                        {t.badge}
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold text-slate-900">{t.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{t.target}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Duración:</span>
                      <span className="font-bold text-slate-900">{t.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Escala:</span>
                      <span className="font-bold text-slate-900">{t.scale}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Entregables:</span>
                      <span className="font-bold text-emerald-600">{t.deliverable}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs font-bold text-slate-700">Qué incluye la operación:</p>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {t.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <Link href="/start">
                    <Button
                      size="md"
                      className={`w-full font-semibold ${
                        t.featured
                          ? "bg-slate-950 hover:bg-blue-600 text-white"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                      }`}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      {t.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 text-white max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-left border border-slate-800">
            <div>
              <h4 className="text-lg font-bold">¿Necesitas una modalidad a la medida?</h4>
              <p className="text-xs text-slate-400 mt-1">
                Combinamos componentes presenciales en Bogotá, Medellín, Cali, Barranquilla o modalidades 100% online para LATAM.
              </p>
            </div>
            <Link href="/start" className="shrink-0">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold">
                Hablar con un director
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
