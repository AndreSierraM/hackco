import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChallengeAssessment } from "@/components/common/ChallengeAssessment";
import { HeroProductWindow } from "@/components/landing/HeroProductWindow";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/config/brand";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  FileCode2,
  ArrowUpRight,
  Lock,
  Zap,
  GitBranch,
} from "lucide-react";

export default function HomePage() {
  const caseStudies = [
    {
      sector: "Finanzas & Retail",
      title: "Conciliación de 40.000 Facturas DIAN vs ERP",
      problem: "4 auditores dedicaban 6 días al mes a conciliar manualmente órdenes de compra y facturas XML con alta tasa de error.",
      solution: "10 equipos compitieron con modelos OCR y reglas fiscales. El ganador redujo el ciclo a minutos con arquitectura on-premise.",
      impact: "-75% tiempo de cierre mensual",
      metric: "68ms latencia · $0.02 USD x 1k docs · Docker 38MB",
      badge: "En Staging Corporativo",
    },
    {
      sector: "Fintech & Crédito",
      title: "Detección Forense de Cédulas Adulteradas",
      problem: "Pérdidas de 3.8% por suplantación en microcréditos digitales no detectadas por biometrías estándar.",
      solution: "Modelos de visión artificial que analizan artefactos de compresión y micro-tipografía en documentos de identidad.",
      impact: "-62% cuentas fraudulentas",
      metric: "210ms inferencia · 98.6% recall · API REST",
      badge: "Piloto en Producción",
    },
    {
      sector: "Seguros & Salud",
      title: "Triaje Automatizado de Reclamaciones Médicas",
      problem: "Auditores saturados revisando diagnósticos y exclusiones en 14 pólizas de salud distintas.",
      solution: "Pipeline RAG con guardrails éticos que clasifica reclamos ambulatorios y deriva anomalías con notas explicativas.",
      impact: "1.200h liberadas al mes",
      metric: "350ms respuesta · 97.9% consistencia · Sin fuga de datos",
      badge: "Integración Core",
    },
  ];

  const comparisonRows = [
    {
      factor: "Tiempo a software probado",
      consultora: "5 a 8 meses",
      interno: "6 a 12 meses en backlog",
      kamino: "4 semanas de sprint",
    },
    {
      factor: "Arquitecturas evaluadas",
      consultora: "1 propuesta cerrada",
      interno: "1 única hipótesis interna",
      kamino: "3 a 5 arquitecturas en paralelo",
    },
    {
      factor: "Entregables tangibles",
      consultora: "Diapositivas y reportes PDF",
      interno: "Código parcial sin validar",
      kamino: "Repositorios Git + Docker + Demo en vivo",
    },
    {
      factor: "Riesgo de inversión",
      consultora: "Alto: pagas antes de ver código",
      interno: "Alto: desvías recursos del core",
      kamino: "Bajo: pagas sobre prototipos verificados",
    },
    {
      factor: "Dedicación de tu equipo",
      consultora: "Comités semanales desgastantes",
      interno: "Sobrecarga de ingenieros senior",
      kamino: "Solo 2h semanales de feedback",
    },
  ];

  const phases = [
    {
      num: "01",
      week: "Semana 1",
      title: "Discovery Técnico",
      desc: "Convertimos tu cuello de botella en un pliego técnico con restricciones, datasets sintéticos y rúbrica ponderada.",
      time: "2h de tu equipo",
    },
    {
      num: "02",
      week: "Semana 2",
      title: "Filtro de Builders",
      desc: "Convocamos ingenieros de IA, backend y producto. Validamos habilidades en GitHub antes de admitirlos.",
      time: "0h (100% Kamino)",
    },
    {
      num: "03",
      week: "Semanas 3 a 4",
      title: "Sprint Supervisado",
      desc: "Los equipos construyen repositorios ejecutables con commits diarios y mentoría de industria continua.",
      time: "1h feedback semanal",
    },
    {
      num: "04",
      week: "Semana 5+",
      title: "Demo Day & Piloto",
      desc: "Evaluación a ciegas con Jury OS y acompañamiento técnico durante 60 a 90 días para el pase a staging.",
      time: "Deliberación + Piloto",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1">
        {/* =========================================================
            HERO B2B — CONCISO, ALTO IMPACTO, 2 FUENTES
            ========================================================= */}
        <section className="relative pt-10 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            {/* Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCDCD5] text-[#141517] text-[11px] font-mono font-semibold tracking-wider uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1846A3] animate-pulse" />
              <span>Innovación Abierta B2B · Bogotá & LATAM</span>
            </div>

            {/* Punchy Headline (2 fonts only: Plus Jakarta Sans bold) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#141517] leading-[1.1] max-w-4xl mx-auto">
              Tu equipo no da abasto con el backlog.{" "}
              <span className="text-[#1846A3] block mt-1 sm:mt-2">
                Te entregamos 5 prototipos funcionando en 4 semanas.
              </span>
            </h1>

            {/* Subtitle - 1 concise sentence */}
            <p className="text-sm sm:text-base text-[#52535A] max-w-2xl mx-auto leading-relaxed">
              Estructuramos retos técnicos reales, convocamos a los mejores ingenieros de IA y software para competir construyendo soluciones y acompañamos la arquitectura ganadora hasta el piloto en tus servidores.
            </p>

            {/* CTAs with responsive touch targets */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#assessment" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-h-[48px] bg-[#141517] hover:bg-[#252830] active:scale-[0.98] text-white shadow-editorial font-bold px-7 text-sm sm:text-base cursor-pointer transition-all"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Evaluar un reto para mi empresa
                </Button>
              </a>
              <a href="#benchmarks" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto min-h-[48px] border-[#DCDCD5] text-[#141517] hover:bg-[#F4F4EE] active:scale-[0.98] font-semibold px-6 text-sm sm:text-base cursor-pointer transition-all"
                >
                  Ver comparativa de código
                </Button>
              </a>
            </div>

            {/* Value Highlights */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-[#71717A]">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#1846A3]" /> 4 semanas de ejecución
              </span>
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-[#10B981]" /> Repositorios Git auditados
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1846A3]" /> Código 100% de tu empresa
              </span>
            </div>

            {/* TERMINAL & SPECIMEN WINDOW */}
            <div id="benchmarks" className="pt-6">
              <HeroProductWindow />
            </div>

            {/* Builders secondary link */}
            <div className="pt-2">
              <Link
                href="/builders"
                className="inline-flex items-center gap-1.5 text-xs text-[#71717A] hover:text-[#1846A3] transition-colors"
              >
                <span>¿Eres programador o diseñador?</span>
                <span className="font-semibold underline underline-offset-4 text-[#141517] hover:text-[#1846A3]">
                  Comunidad de builders →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 02 — TABLA DE DECISIÓN DEL CTO (RESPONSIVE)
            ========================================================= */}
        <section className="py-14 sm:py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                La Ecuación de Decisión
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141517]">
                ¿Por qué un challenge técnico supera al modelo tradicional?
              </h2>
              <p className="text-xs sm:text-sm text-[#52535A] mt-1.5">
                Comparativa directa de tiempos, entregables y riesgos al validar nuevas soluciones:
              </p>
            </div>

            {/* Desktop Table View (>= 768px) */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-[#E8E8E4] shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#141517] text-white font-mono text-[11px]">
                    <th className="p-4 font-bold uppercase tracking-wider w-1/4">Dimensión</th>
                    <th className="p-4 font-medium text-[#9CA3AF] w-1/4">Consultoría Tradicional</th>
                    <th className="p-4 font-medium text-[#9CA3AF] w-1/4">Esperar a TI Interno</th>
                    <th className="p-4 font-bold text-[#60A5FA] bg-[#1E222B] w-1/4">Kamino Challenge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E8E4] text-[#52535A]">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F9F9F8] transition-colors">
                      <td className="p-4 font-bold text-[#141517] bg-[#FBFBFA]">{row.factor}</td>
                      <td className="p-4 text-red-700 bg-red-50/20">
                        <div className="flex items-center gap-1.5">
                          <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span>{row.consultora}</span>
                        </div>
                      </td>
                      <td className="p-4 text-amber-800 bg-amber-50/20">
                        <div className="flex items-center gap-1.5">
                          <XCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{row.interno}</span>
                        </div>
                      </td>
                      <td className="p-4 font-bold text-[#0E357E] bg-[#EEF4FF]/40">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1846A3] shrink-0" />
                          <span>{row.kamino}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card-Based View (< 768px) */}
            <div className="md:hidden space-y-3">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FBFBFA] border border-[#E8E8E4] space-y-2.5 text-xs">
                  <span className="font-bold text-[#141517] text-xs block">{row.factor}</span>
                  <div className="space-y-1.5 font-mono text-[11px]">
                    <div className="flex items-center justify-between p-2 rounded bg-white border border-[#E8E8E4]">
                      <span className="text-[#71717A]">Consultora:</span>
                      <span className="text-red-700 font-semibold">{row.consultora}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-white border border-[#E8E8E4]">
                      <span className="text-[#71717A]">TI Interno:</span>
                      <span className="text-amber-800 font-semibold">{row.interno}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-[#EEF4FF] border border-[#3B82F6]/30 text-[#0E357E] font-bold">
                      <span>Kamino:</span>
                      <span>{row.kamino}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] text-xs text-[#52535A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>
                <strong>Resultado:</strong> Reduces el ciclo de validación de 6 meses a 4 semanas comparando código real.
              </span>
              <a href="#assessment" className="font-bold text-[#1846A3] hover:underline shrink-0">
                Evaluar viabilidad →
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 03 — CASOS DE ESTUDIO TÉCNICOS (CONCISOS)
            ========================================================= */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-left">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
              Casos Reales de Estudio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141517]">
              De problemas de negocio a software funcionando.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs flex flex-col justify-between hover:border-[#141517] hover:-translate-y-1 hover:shadow-md transition-all duration-200 space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1846A3] bg-[#EEF4FF] px-2 py-0.5 rounded">
                      {cs.sector}
                    </span>
                    <span className="text-[10px] font-mono text-[#059669] font-bold">
                      {cs.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#141517] leading-snug">
                    {cs.title}
                  </h3>

                  <div className="p-2.5 rounded-xl bg-[#FFF5F5] border border-red-100 text-xs text-red-900 space-y-0.5">
                    <span className="font-bold text-[10px] font-mono uppercase text-red-700 block">Dolor:</span>
                    <p className="text-[11px] leading-relaxed">{cs.problem}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#F0FDF4] border border-emerald-100 text-xs text-emerald-900 space-y-0.5">
                    <span className="font-bold text-[10px] font-mono uppercase text-emerald-700 block">Solución:</span>
                    <p className="text-[11px] leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8E8E4] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#71717A] uppercase">Impacto:</span>
                    <span className="font-extrabold text-[#141517] text-xs font-mono">{cs.impact}</span>
                  </div>
                  <div className="p-2 rounded bg-[#F9F9F8] border border-[#E8E8E4] font-mono text-[10px] text-[#52535A] truncate">
                    {cs.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 04 — CÓMO OPERA EL PROGRAMA (4 PASOS VISUALES)
            ========================================================= */}
        <section className="py-14 sm:py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                La Mecánica Operativa
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141517]">
                Cómo te entregamos software en 4 semanas sin desgastarte
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {phases.map((ph, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] hover:border-[#141517] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-md bg-[#141517] text-white flex items-center justify-center font-mono font-bold text-xs">
                        {ph.num}
                      </span>
                      <span className="text-[10px] font-mono text-[#1846A3] font-bold">
                        {ph.week}
                      </span>
                    </div>
                    <h4 className="font-bold text-[#141517] text-sm">{ph.title}</h4>
                    <p className="text-[#52535A] leading-relaxed text-xs">{ph.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono text-[#059669] font-bold pt-2 border-t border-[#E8E8E4]">
                    Carga: {ph.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 05 — ENTERPRISE SECURITY & GOBERNANZA IP
            ========================================================= */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-left">
          <div className="p-6 sm:p-9 rounded-3xl bg-[#141517] text-white border border-[#2B2D33] shadow-editorial space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#2B2D36]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA] block mb-1">
                  Compliance & Blindaje Legal
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Tus datos en tu perímetro. Tu IP 100% protegida.
                </h3>
              </div>
              <Link href="/trust">
                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-lg bg-[#252830] text-[#93C5FD] hover:bg-[#2F343E] font-mono text-xs border border-[#3B82F6]/30 transition-colors cursor-pointer shrink-0"
                >
                  Trust Center →
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-[#9CA3AF]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Acuerdos de IP Previos</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  Licencias comerciales exclusivas o cesión total de derechos pactadas antes de escribir la primera línea de código.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Lock className="w-4 h-4 text-[#10B981]" />
                  <span>NDAs Vinculantes</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  Cada desarrollador y mentor firma acuerdos legales de confidencialidad antes de acceder al pliego técnico.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <FileCode2 className="w-4 h-4 text-[#10B981]" />
                  <span>Datasets Sintéticos</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  Datos anonimizados y entornos sandbox aislados: ningún dato real de tus clientes se comparte externamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 06 — FAQ INTERACTIVO (ACCORDION)
            ========================================================= */}
        <section className="py-14 sm:py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-1.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block">
                Preguntas Frecuentes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                Respuestas directas para líderes técnicos
              </h2>
            </div>

            <FaqAccordion />
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 07 — EVALUADOR INTERACTIVO & CTA FINAL
            ========================================================= */}
        <section id="assessment" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider border border-[#D3E2FE]">
              <span>Diagnóstico de Viabilidad Técnica</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141517]">
              ¿Qué problema operativo quieres resolver este mes?
            </h2>
            <p className="text-xs sm:text-sm text-[#52535A] max-w-xl mx-auto leading-relaxed">
              Describe tu cuello de botella en el evaluador interactivo para obtener arquitectura sugerida, perfiles técnicos y entregables esperados en segundos:
            </p>
          </div>

          <div className="pt-2">
            <ChallengeAssessment />
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#71717A]">
            <span>¿Prefieres agendar una llamada técnica directa de 30 minutos?</span>
            <a
              href={BRAND.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#1846A3] hover:underline flex items-center gap-1"
            >
              Agendar en Google Meet / Teams <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
