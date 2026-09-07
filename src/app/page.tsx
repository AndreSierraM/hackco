import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChallengeAssessment } from "@/components/common/ChallengeAssessment";
import { HeroProductWindow } from "@/components/landing/HeroProductWindow";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/config/brand";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  FileCode2,
  HelpCircle,
  ArrowUpRight,
  Lock,
} from "lucide-react";

export default function HomePage() {
  const caseStudies = [
    {
      sector: "Finanzas & Retail Masivo",
      title: "Conciliación Automática de 40.000 Facturas DIAN contra ERP",
      problem:
        "El equipo contable tardaba 4.5 días hábiles cada fin de mes en cruzar facturas electrónicas en XML/PDF contra órdenes de compra en SAP, acumulando $180M COP en multas por retrasos y pagos dobles.",
      solution:
        "Challenge de 4 semanas con 8 equipos. El equipo ganador construyó un pipeline en Go con OCR local y Llama 3 8B que extrae cláusulas, retenciones y montos con 99.4% de precisión en 68ms por factura.",
      impact: "Reducción del tiempo de ciclo de 4.5 días a 18 minutos de proceso por lotes.",
      status: "Fase de Staging & Piloto On-Premise",
      codeMetrics: "68ms latencia · $0.02 USD x 1k docs · Docker 38MB",
    },
    {
      sector: "Fintech & Crédito Digital",
      title: "Detección Forense de Fraude en Onboarding y Cédulas Adulteradas",
      problem:
        "Una entidad de crédito digital sufría un 3.8% de pérdidas por suplantación de identidad en microcréditos; los filtros biométricos comerciales no detectaban cédulas manipuladas digitalmente.",
      solution:
        "Challenge técnico con 10 equipos de visión artificial e IA. Los finalistas desarrollaron modelos de detección de artefactos en imágenes y coherencia tipográfica que analizan el documento antes de emitir crédito.",
      impact: "Disminución del 62% en cuentas fraudulentas en pruebas de estrés con 8.000 solicitudes simuladas.",
      status: "Piloto en Servidores de Pruebas",
      codeMetrics: "210ms respuesta · 98.6% recall en fraudes · API REST",
    },
    {
      sector: "Aseguradoras & Salud Privada",
      title: "Triaje y Auditoría Automatizada de Reclamaciones Médicas",
      problem:
        "40 auditores médicos dedicaban el 80% de su tiempo a verificar si facturas y diagnósticos ambulatorios cumplían con las exclusiones de 14 tipos de pólizas de salud distintas.",
      solution:
        "Challenge enfocado en arquitecturas RAG con memoria sobre manuales de suscripción médica. El prototipo ganador clasifica el 65% de casos sencillos de forma autónoma y deriva con notas explicativas los casos complejos.",
      impact: "Liberación de 1.200 horas de auditoría médica al mes para casos de alta complejidad.",
      status: "Integración con Sistema Core",
      codeMetrics: "350ms inferencia · 97.9% consistencia en reglas · Guardrails éticos",
    },
  ];

  const comparisonRows = [
    {
      factor: "Tiempo hasta tener software probado",
      consultora: "5 a 8 meses de reuniones y diagnósticos",
      interno: "6 a 12 meses de espera en cola de TI",
      kamino: "4 semanas de sprint intensivo",
      winner: "kamino",
    },
    {
      factor: "Enfoques y arquitecturas probadas",
      consultora: "1 único enfoque cerrado propuesto por la firma",
      interno: "1 única hipótesis interna sin tiempo de iterar",
      kamino: "Entre 6 y 10 equipos explorando tecnologías distintas",
      winner: "kamino",
    },
    {
      factor: "Entregable al finalizar el proceso",
      consultora: "Presentación en PowerPoint de 80 diapositivas",
      interno: "Código en desarrollo parcial sin probar con usuarios",
      kamino: "Repositorios en GitHub + Contenedores Docker + Demos en vivo",
      winner: "kamino",
    },
    {
      factor: "Riesgo de inversión económica",
      consultora: "Alto: pagas honorarios antes de ver una pantalla",
      interno: "Alto: desvías recursos críticos del core del negocio",
      kamino: "Bajo: comparas 3 finalistas con métricas antes de invertir en producción",
      winner: "kamino",
    },
    {
      factor: "Carga de trabajo para tu equipo interno",
      consultora: "Decenas de entrevistas y comités semanales",
      interno: "Desgaste total de tus ingenieros líderes",
      kamino: "Solo 2 horas semanales para validar avances y dar feedback",
      winner: "kamino",
    },
  ];

  const faqs = [
    {
      q: "¿Por qué no contratar una consultora tradicional?",
      a: "Una consultora tradicional asigna un único equipo cerrado y cobra meses por diagnósticos teóricos antes de programar una sola línea. Con Kamino obtienes entre 6 y 10 equipos de ingeniería senior compitiendo con arquitecturas distintas, entregándote prototipos de software ejecutables en 4 semanas para que decidas con base en benchmarks reales.",
    },
    {
      q: "¿Por qué no construirlo internamente con nuestros desarrolladores?",
      a: "Tu equipo de tecnología ya está al 100% manteniendo la operación crítica del negocio. Destinar recursos internos a explorar nuevas tecnologías suele tardar de 6 a 12 meses por prioridades de backlog. Kamino actúa como tu brazo de exploración acelerada: absorbe toda la carga y te entrega soluciones probadas sin distraer a tus ingenieros.",
    },
    {
      q: "¿Quién es dueño del código fuente y de la propiedad intelectual?",
      a: "La propiedad intelectual y las licencias se definen contractualmente en las bases del reto antes de iniciar. En los programas corporativos, los participantes otorgan a tu empresa la licencia exclusiva para desarrollar el piloto o la opción prioritaria de adquisición comercial.",
    },
    {
      q: "¿Qué datos tenemos que compartir con los participantes?",
      a: "Ninguna información sensible o productiva sale de tus servidores. Trabajamos con datasets sintéticos o anonimizados y entornos sandbox aislados, respaldados por acuerdos de confidencialidad (NDA) vinculantes para todos los participantes.",
    },
    {
      q: "¿Cuánto tiempo exige de nuestro equipo de tecnología?",
      a: "Nosotros absorbemos toda la carga metodológica, logística y técnica. Tu equipo únicamente participa en la sesión de discovery inicial (2 horas), 1 hora semanal de feedback técnico a finalistas y la deliberación en el Demo Day.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1">
        {/* =========================================================
            HERO B2B DIRECTO & SIN CLICHÉS
            Golpe de realidad: Backlog lleno vs Diapositivas vs Software
            ========================================================= */}
        <section className="relative pt-12 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center space-y-7">
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCDCD5] text-[#141517] text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1846A3] animate-pulse" />
              <span>INNOVACIÓN APLICADA · BOGOTÁ · MEDELLÍN · LATAM</span>
            </div>

            {/* Dominant Visceral Headline */}
            <h1 className="text-[38px] sm:text-5xl lg:text-[68px] font-extrabold tracking-[-0.035em] text-[#141517] leading-[1.06] max-w-5xl mx-auto">
              Tus ingenieros tienen el backlog lleno.{" "}
              <span className="text-[#52535A] font-normal block sm:inline">
                Las consultoras te cobran meses por diapositivas.
              </span>{" "}
              <span className="font-serif-italic font-normal text-[#1846A3] tracking-tight block mt-1">
                Kamino te entrega 5 prototipos funcionando en 4 semanas.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#52535A] max-w-3xl mx-auto leading-relaxed font-normal">
              Estructuramos tu reto operativo, convocamos a los mejores ingenieros de IA y desarrolladores de la región para que compitan construyendo soluciones, y acompañamos la mejor arquitectura hasta el piloto en tus servidores.
            </p>

            {/* Action CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a href="#assessment" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#141517] hover:bg-[#252830] text-white shadow-editorial font-semibold px-8 text-sm sm:text-base py-3.5 cursor-pointer"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Evaluar un reto para mi empresa
                </Button>
              </a>
              <a href="#terminal-benchmarks" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#DCDCD5] text-[#141517] hover:bg-[#F4F4EE] font-medium px-6 text-sm sm:text-base py-3.5 cursor-pointer"
                >
                  Ver comparativa de código real
                </Button>
              </a>
            </div>

            <p className="text-xs text-[#71717A] font-mono">
              Sin compromiso · Primer diagnóstico técnico en 48 horas · Operación en Colombia y LATAM
            </p>

            {/* IMMERSIVE LIVE ARTIFACT TERMINAL */}
            <div id="terminal-benchmarks" className="pt-6 max-w-5xl mx-auto">
              <HeroProductWindow />
            </div>

            {/* Builder route anchor */}
            <div className="pt-2">
              <Link
                href="/builders"
                className="inline-flex items-center gap-1.5 text-xs text-[#71717A] hover:text-[#1846A3] transition-colors"
              >
                <span>¿Quieres competir como programador o diseñador?</span>
                <span className="font-semibold underline underline-offset-4 text-[#141517] hover:text-[#1846A3]">
                  Comunidad de builders →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 02 — TABLA COMPARATIVA DE DECISIÓN ECONÓMICA (CTO)
            Sin retórica: números, tiempos, riesgos y entregables.
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                La Ecuación de Decisión de un CTO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141517]">
                Comparativa de Métodos: ¿Por qué un challenge técnico supera al modelo tradicional?
              </h2>
              <p className="text-xs sm:text-sm text-[#52535A] mt-2 leading-relaxed">
                Cuando necesitas validar si una nueva tecnología o automatización resuelve un dolor de negocio real, comprometer presupuestos a ciegas es el mayor riesgo:
              </p>
            </div>

            {/* Responsive Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-[#E8E8E4] shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#141517] text-white font-mono text-[11px]">
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider w-1/4">Dimensión de Evaluación</th>
                    <th className="p-4 sm:p-5 font-medium text-[#9CA3AF] w-1/4">Consultoría Tradicional</th>
                    <th className="p-4 sm:p-5 font-medium text-[#9CA3AF] w-1/4">Esperar a TI Interno</th>
                    <th className="p-4 sm:p-5 font-bold text-[#60A5FA] bg-[#1E222B] w-1/4">Kamino Challenge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E8E4] text-[#52535A]">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F9F9F8] transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-[#141517] bg-[#FBFBFA]">
                        {row.factor}
                      </td>
                      <td className="p-4 sm:p-5 text-red-700 bg-red-50/30">
                        <div className="flex items-start gap-1.5">
                          <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{row.consultora}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-amber-800 bg-amber-50/30">
                        <div className="flex items-start gap-1.5">
                          <XCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{row.interno}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-[#0E357E] bg-[#EEF4FF]/50">
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#1846A3] shrink-0 mt-0.5" />
                          <span>{row.kamino}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] text-xs text-[#52535A] flex items-center justify-between">
              <span>
                <strong>Conclusión:</strong> Kamino te permite reducir el ciclo de exploración de 6 meses a 4 semanas, comparando arquitecturas reales antes de firmar cualquier contrato de producción.
              </span>
              <a href="#assessment" className="text-xs font-bold text-[#1846A3] hover:underline shrink-0 ml-4">
                Evaluar viabilidad de mi reto →
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 03 — CASOS DE ESTUDIO TÉCNICOS DETALLADOS
            Datos concretos, problemas reales, métricas de código.
            ========================================================= */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
              Casos Reales de Estudio
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141517]">
              Así se traduce un dolor de negocio en software funcionando.
            </h2>
            <p className="text-sm sm:text-base text-[#52535A] mt-2 leading-relaxed">
              Problemas con impacto en pérdidas económicas o cuellos de botella de personal, estructurados bajo nuestra metodología técnica:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs flex flex-col justify-between hover:border-[#141517] transition-all space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1846A3] bg-[#EEF4FF] px-2 py-0.5 rounded">
                      {cs.sector}
                    </span>
                    <span className="text-[10px] font-mono text-[#059669] font-bold">
                      {cs.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#141517] leading-snug">
                    {cs.title}
                  </h3>

                  <div className="p-3 rounded-xl bg-[#FFF5F5] border border-red-100 text-xs text-red-900 space-y-1">
                    <span className="font-bold text-[10px] font-mono uppercase text-red-700 block">El Dolor Inicial:</span>
                    <p className="leading-relaxed text-[11px]">{cs.problem}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F0FDF4] border border-emerald-100 text-xs text-emerald-900 space-y-1">
                    <span className="font-bold text-[10px] font-mono uppercase text-emerald-700 block">Qué construyeron los builders:</span>
                    <p className="leading-relaxed text-[11px]">{cs.solution}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8E8E4] space-y-2">
                  <div className="text-xs">
                    <span className="text-[10px] font-mono text-[#71717A] uppercase block">Impacto de Negocio:</span>
                    <p className="font-bold text-[#141517] text-xs mt-0.5">{cs.impact}</p>
                  </div>
                  <div className="p-2 rounded bg-[#F9F9F8] border border-[#E8E8E4] font-mono text-[10px] text-[#52535A]">
                    {cs.codeMetrics}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 04 — CÓMO OPERA EL PROGRAMA (4 MOMENTOS)
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                La Mecánica Operativa
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141517]">
                Cómo te entregamos prototipos de software en 4 semanas sin desgastarte
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                <span className="w-6 h-6 rounded-md bg-[#141517] text-white flex items-center justify-center font-mono font-bold text-xs">
                  1
                </span>
                <span className="text-[10px] font-mono text-[#1846A3] font-bold block">Semana 1</span>
                <h4 className="font-bold text-[#141517] text-sm">Challenge Discovery</h4>
                <p className="text-[#52535A] leading-relaxed">
                  Traducimos tu cuello de botella en un pliego técnico con restricciones, datasets sintéticos y rúbrica ponderada al 100%.
                </p>
                <span className="text-[10px] font-mono text-[#059669] block pt-1">Carga: 2h de tu equipo</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                <span className="w-6 h-6 rounded-md bg-[#141517] text-white flex items-center justify-center font-mono font-bold text-xs">
                  2
                </span>
                <span className="text-[10px] font-mono text-[#1846A3] font-bold block">Semana 2</span>
                <h4 className="font-bold text-[#141517] text-sm">Filtro de Talento Senior</h4>
                <p className="text-[#52535A] leading-relaxed">
                  Convocamos ingenieros de IA, backend y diseñadores de producto. Validamos habilidades en GitHub antes de admitirlos.
                </p>
                <span className="text-[10px] font-mono text-[#059669] block pt-1">Carga: 0h (100% Kamino)</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                <span className="w-6 h-6 rounded-md bg-[#141517] text-white flex items-center justify-center font-mono font-bold text-xs">
                  3
                </span>
                <span className="text-[10px] font-mono text-[#1846A3] font-bold block">Semanas 3 a 4</span>
                <h4 className="font-bold text-[#141517] text-sm">Build Sprint Supervisado</h4>
                <p className="text-[#52535A] leading-relaxed">
                  Los equipos construyen repositorios ejecutables con commits diarios y mentoría técnica continua de industria.
                </p>
                <span className="text-[10px] font-mono text-[#059669] block pt-1">Carga: 1h semanal de feedback</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                <span className="w-6 h-6 rounded-md bg-[#141517] text-white flex items-center justify-center font-mono font-bold text-xs">
                  4
                </span>
                <span className="text-[10px] font-mono text-[#1846A3] font-bold block">Semana 5+</span>
                <h4 className="font-bold text-[#141517] text-sm">Demo Day &amp; Piloto</h4>
                <p className="text-[#52535A] leading-relaxed">
                  Tus jurados evalúan demos en vivo con Jury OS a ciegas y acompañamos durante 60 a 90 días el traspaso técnico a producción.
                </p>
                <span className="text-[10px] font-mono text-[#059669] block pt-1">Carga: Deliberación + Piloto</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 05 — ENTERPRISE SECURITY & GOBERNANZA IP
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#141517] text-white border border-[#2B2D33] shadow-editorial space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2B2D36]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA] block mb-1">
                  Compliance &amp; Blindaje Legal
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Tus datos nunca salen de tu perímetro. Tu IP está 100% protegida.
                </h3>
              </div>
              <Link href="/trust">
                <button className="px-4 py-2 rounded-lg bg-[#252830] text-[#93C5FD] hover:bg-[#2F343E] font-mono text-xs border border-[#3B82F6]/30 transition-colors cursor-pointer shrink-0">
                  Ver Trust Center Completo →
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#9CA3AF]">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Acuerdos de IP Previos</span>
                </div>
                <p className="leading-relaxed">
                  Las bases del reto estipulan licencias comerciales exclusivas o cesión de derechos antes de admitir al primer participante.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Lock className="w-4 h-4 text-[#10B981]" />
                  <span>NDAs Vinculantes</span>
                </div>
                <p className="leading-relaxed">
                  Cada desarrollador y mentor firma acuerdos de confidencialidad y secreto comercial antes de ver las especificaciones técnicas.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <FileCode2 className="w-4 h-4 text-[#10B981]" />
                  <span>Datasets Sintéticos</span>
                </div>
                <p className="leading-relaxed">
                  Construimos lotes de datos anonimizados para pruebas; ningún dato de clientes reales se comparte con builders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 06 — FAQ ESTRATÉGICO
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block">
                Preguntas Frecuentes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                Respuestas sin rodeos para directores de tecnología e innovación.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#E8E8E4] shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-[#141517] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#1846A3] shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52535A] pl-6 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 07 — LEAD MAGNET INTERACTIVO & CTA FINAL
            ========================================================= */}
        <section id="assessment" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider border border-[#D3E2FE]">
              <span>Diagnóstico de Viabilidad Técnica</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141517] leading-tight">
              ¿Qué problema operativo quieres resolver en tu empresa este mes?
            </h2>
            <p className="text-sm sm:text-base text-[#52535A] max-w-2xl mx-auto leading-relaxed">
              Describe tu cuello de botella en el evaluador interactivo a continuación para obtener la arquitectura sugerida, perfiles técnicos y entregables esperados en segundos:
            </p>
          </div>

          <div className="pt-2">
            <ChallengeAssessment />
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#71717A]">
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
