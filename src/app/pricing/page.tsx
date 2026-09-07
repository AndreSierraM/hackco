import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/config/brand";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export default function PricingPage() {
  const tiers = [
    {
      name: "Challenge Blueprint",
      badge: "Entrada de Bajo Riesgo",
      featured: false,
      target: "Para empresas que tienen un dolor operativo identificado pero necesitan definir requerimientos técnicos, datasets y viabilidad antes de convocar builders.",
      timeline: "1 a 2 semanas",
      scale: "Inmersión estratégica con tus líderes técnicos",
      deliverable: "Documento de especificación técnica de arquitectura + datasets de prueba + rúbrica calibrada al 100%.",
      pricingNote: "Inversión fija de consultoría previa",
      includes: [
        "Discovery técnico con stakeholders de negocio y TI",
        "Formulación de bases técnicas y criterios de aceptación",
        "Estructuración de datasets sintéticos y anonimizados",
        "Diseño de rúbrica cuantitativa de 5 dimensiones para Jury OS",
        "Matriz de riesgos técnicos y salvaguardas de seguridad",
        "Roadmap de ejecución y presupuesto estimado de convocatoria",
      ],
      cta: "Diseñar Blueprint",
      route: "/start",
    },
    {
      name: "Pilot Challenge",
      badge: "Validación Rápida",
      featured: true,
      target: "Para validar una tecnología o API específica en un sprint ágil con entre 6 y 10 equipos compitiendo por la mejor arquitectura.",
      timeline: "3 a 4 semanas",
      scale: "Hasta 60 builders · 6 a 10 equipos seleccionados",
      deliverable: "3 a 5 prototipos funcionales con código probado en GitHub y benchmarks de latencia.",
      pricingNote: "Estructurado según alcance y bolsa de premios",
      includes: [
        "Todo lo incluido en el Challenge Blueprint",
        "Convocatoria y filtro técnico de ingenieros senior en Colombia/LATAM",
        "Plataforma completa (workspace, matchmaking, seguimiento de repositorios)",
        "Operación de sprint y mentoría técnica continua",
        "Jury OS con evaluación a ciegas para tu comité",
        "Reporte ejecutivo de resultados y código fuente verificado",
        "Acompañamiento a piloto de 30 días para el equipo ganador",
      ],
      cta: "Cotizar Pilot Challenge",
      route: "/start",
    },
    {
      name: "Signature Challenge",
      badge: "Más Solicitado",
      featured: false,
      target: "El programa insignia de innovación abierta corporativa: convocatoria regional masiva, múltiples tracks simultáneos y alto impacto de marca empleadora.",
      timeline: "4 a 6 semanas",
      scale: "Hasta 250 builders · 20 a 40 equipos multidisciplinarios",
      deliverable: "10 a 20 soluciones de alto nivel evaluadas con pase formal a piloto corporativo.",
      pricingNote: "Cotización personalizada según sedes y tracks",
      includes: [
        "Estrategia multi-track departamental (ej. IA + Fintech + CX)",
        "Landing page personalizada con identidad visual de la empresa",
        "Campaña regional de atracción en Bogotá, Medellín y LATAM",
        "Operación en vivo presencial, híbrida o 100% remota",
        "Red de mentores de industria y workshops de alineación técnica",
        "Jury OS avanzado y calibración de jurados directivos",
        "Gestión de bolsa de premios y contratos de transferencia de IP",
        "Acompañamiento a piloto de 60 a 90 días con Project Pipeline",
      ],
      cta: "Cotizar Signature Program",
      route: "/start",
    },
    {
      name: "Enterprise Innovation Program",
      badge: "Programa Anual",
      featured: false,
      target: "Para organizaciones con múltiples divisiones de negocio que requieren un flujo continuo de retos y pilotos durante todo el año.",
      timeline: "6 a 12 meses (2 a 4 challenges al año)",
      scale: "Ilimitados builders · Múltiples tracks y sedes simultáneas",
      deliverable: "Pipeline permanente de software y alianzas con startups técnicas.",
      pricingNote: "Acuerdo anual corporativo",
      includes: [
        "Consola Enterprise White-label con gobernanza centralizada",
        "Hasta 4 retos corporativos durante el año",
        "Integración con entornos sandbox y APIs propietarias seguras",
        "Scouting activo de startups y talento técnico de alto nivel",
        "Project Pipeline con seguimiento semestral de pilotos desplegados",
        "Acuerdos marco de confidencialidad, auditoría y compliance legal",
        "Executive Review trimestral con métricas de ROI y adopción",
      ],
      cta: "Cotizar Enterprise Anual",
      route: "/start",
    },
  ];

  const pricingFactors = [
    {
      title: "Escala & Número de Equipos",
      desc: "El volumen de builders convocados y equipos que ingresan a la fase de construcción (de 6 a más de 40 equipos en paralelo).",
    },
    {
      title: "Bolsa de Premios para Builders",
      desc: "Los incentivos económicos otorgados a los equipos finalistas, gestionados y transferidos con total transparencia.",
    },
    {
      title: "Modalidad (Presencial vs. Remoto)",
      desc: "Programas 100% remotos o con componentes presenciales inmersivos en Bogotá, Medellín o sedes corporativas.",
    },
    {
      title: "Soporte al Piloto Post-Evento",
      desc: "El nivel de acompañamiento técnico de Kamino (de 30 a 90 días) para estructurar la integración del código en tu infraestructura.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCDCD5] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
              <span>Modelos de Inversión B2B</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141517] tracking-tight">
              Inversión estructurada según el alcance de tu reto.
            </h1>
            <p className="text-base sm:text-lg text-[#52535A] leading-relaxed">
              No vendemos licencias SaaS genéricas vacías de contenido. Diseñamos, convocamos y operamos cada programa de innovación como una misión de ingeniería con entregables de software medibles y acompañamiento a piloto.
            </p>
          </div>

          {/* Pricing Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`p-7 rounded-3xl bg-white border flex flex-col justify-between transition-all ${
                  t.featured
                    ? "border-[#141517] shadow-editorial-elevated ring-2 ring-[#141517] relative"
                    : "border-[#E8E8E4] shadow-xs hover:border-[#141517]"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full bg-[#141517] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    {t.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    {!t.featured && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#1846A3] bg-[#EEF4FF] px-2 py-0.5 rounded font-bold inline-block mb-2">
                        {t.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-[#141517]">{t.name}</h3>
                    <p className="text-xs text-[#52535A] mt-2 leading-relaxed">{t.target}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#71717A]">Duración:</span>
                      <span className="font-bold text-[#141517]">{t.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71717A]">Escala:</span>
                      <span className="font-bold text-[#141517]">{t.scale}</span>
                    </div>
                    <div className="pt-1 border-t border-[#E8E8E4]">
                      <span className="text-[11px] font-mono text-[#1846A3] block">
                        {t.pricingNote}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono uppercase text-[#71717A] font-bold block">
                      Qué incluye la operación:
                    </span>
                    <ul className="space-y-2 text-xs text-[#52535A]">
                      {t.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E8E4]">
                  <Link href={t.route}>
                    <Button
                      size="sm"
                      className={`w-full font-semibold ${
                        t.featured
                          ? "bg-[#141517] hover:bg-[#252830] text-white shadow-editorial"
                          : "bg-[#F4F4F1] hover:bg-[#E8E8E4] text-[#141517] border border-[#DCDCD5]"
                      }`}
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      {t.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Explanation of Cost Variables */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E8E4] shadow-xs text-left space-y-6">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                Transparencia Comercial
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#141517] tracking-tight">
                ¿Qué factores determinan la inversión en un reto con Kamino?
              </h3>
              <p className="text-xs sm:text-sm text-[#52535A] mt-2 leading-relaxed">
                Cada programa es una misión de ingeniería a la medida. El presupuesto se desglosa transparentemente entre costos de operación técnica y la bolsa de premios para los participantes:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pricingFactors.map((fact) => (
                <div key={fact.title} className="p-4 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1.5 text-xs">
                  <h4 className="font-bold text-[#141517] text-sm">{fact.title}</h4>
                  <p className="text-[#52535A] leading-relaxed">{fact.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#141517] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left border border-[#2B2D33] shadow-editorial">
            <div className="space-y-2 max-w-xl">
              <h4 className="text-xl sm:text-2xl font-bold">¿Necesitas una propuesta económica detallada?</h4>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                Cuéntanos el reto u objetivo de tu empresa y te entregamos un estimado de inversión y cronograma en menos de 24 horas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link href="/start" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#1846A3] hover:bg-[#133882] text-white font-semibold px-6">
                  Evaluar mi reto
                </Button>
              </Link>
              <a
                href={BRAND.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" className="w-full sm:w-auto border-[#2B2D36] text-white hover:bg-[#22242C] font-semibold">
                  Agendar llamada <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
