import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { EmpresasHeroShowcase } from "@/components/empresas/EmpresasHeroShowcase";
import { EmpresasRoiCalculator } from "@/components/empresas/EmpresasRoiCalculator";
import { EmpresasFaq } from "@/components/empresas/EmpresasFaq";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  Users,
  Layers,
  ShieldCheck,
  Award,
  Calendar,
  Terminal,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "Hackathons Corporativos e Innovación Abierta | Kamino",
  description:
    "Transforma los problemas de tu empresa en prototipos de software funcionando y pilotos productivos a través de hackathons técnicos estructurados.",
};

export default function EmpresasPage() {
  const features = [
    {
      icon: Terminal,
      color: "bg-[#EEF4FF] text-[#1846A3] border-[#D3E2FE]",
      title: "Discovery & Diseño del Reto",
      desc: "No más problemas vagos. Traducimos cuellos de botella operativos en especificaciones OpenAPI, datasets sintéticos y rúbrica ponderada.",
    },
    {
      icon: Users,
      color: "bg-[#ECFDF5] text-[#065F46] border-[#A7F3D0]",
      title: "Convocatoria de Élite",
      desc: "Curamos y filtramos a más de 100+ programadores senior, arquitectos de IA y diseñadores que compiten por construir la mejor solución.",
    },
    {
      icon: Layers,
      color: "bg-[#FDF4FF] text-[#86198F] border-[#F5D0FE]",
      title: "Operación Llave en Mano",
      desc: "Nos encargamos de toda la plataforma, logística presencial o híbrida, streaming profesional, control de repositorios y soporte continuo.",
    },
    {
      icon: Cpu,
      color: "bg-[#FFFBEB] text-[#92400E] border-[#FDE68A]",
      title: "Mentoría con tus Líderes Técnicos",
      desc: "Tus directores guían a los equipos en sprints de retroalimentación para calibrar las soluciones con la realidad y los sistemas de tu empresa.",
    },
    {
      icon: Award,
      color: "bg-[#F0FDF4] text-[#166534] border-[#BBF7D0]",
      title: "Jury OS & Evaluación Objetiva",
      desc: "Rúbrica matemática que suma 100%, evaluación a ciegas para tu comité de dirección y deliberación transparente sin hojas de cálculo confusas.",
    },
    {
      icon: ShieldCheck,
      color: "bg-[#F8FAFC] text-[#334155] border-[#E2E8F0]",
      title: "Propiedad Intelectual & Piloto Seguro",
      desc: "Bases legales blindadas, cesión de derechos de autor/licenciamiento de IP, entornos sandbox sin fuga de datos y 60 días de soporte post-evento.",
    },
  ];

  const formats = [
    {
      title: "Hackathon Express (48 Horas)",
      tag: "Validación Rápida & IA",
      tagColor: "bg-[#F4F4EE] text-[#52535A] border-[#E8E8E4]",
      desc: "Sprint ágil de fin de semana para validar nuevas tecnologías, APIs, modelos de lenguaje o automatizaciones críticas.",
      timeline: "2 semanas de preparación + 48h de evento",
      teams: "8 a 15 equipos multidisciplinarios",
      outcome: "3 a 5 prototipos funcionales con código en GitHub y benchmarks de rendimiento.",
      popular: false,
      cta: "Cotizar Hackathon Express",
    },
    {
      title: "Hackathon de Innovación Insignia",
      tag: "El Formato Más Elegido",
      tagColor: "bg-[#1846A3] text-white border-[#1846A3]",
      desc: "Programa integral con convocatoria regional masiva, múltiples tracks técnicos simultáneos, jurado directivo y pase formal a piloto.",
      timeline: "4 semanas de reto + 60 días de acompañamiento",
      teams: "20 a 40 equipos en competencia (100+ builders)",
      outcome: "8 a 15 soluciones de software completas, transferencia de repositorios y roadmap de piloto.",
      popular: true,
      cta: "Diseñar Hackathon Insignia",
    },
    {
      title: "Hackathon Interno (Silos Cero)",
      tag: "Cultura & Talento In-house",
      tagColor: "bg-[#ECFDF5] text-[#065F46] border-[#A7F3D0]",
      desc: "Activa a colaboradores de distintas áreas (tecnología, producto, operaciones, riesgo y legal) para hackear ineficiencias internas.",
      timeline: "3 días inmersivos con formación técnica",
      teams: "Equipos cruzados de tu propia organización",
      outcome: "Proyectos viables construidos por quienes conocen el negocio por dentro.",
      popular: false,
      cta: "Cotizar Reto Interno",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1 overflow-hidden">
        {/* =========================================================
            HERO SECTION (CRUIP OPEN REACT TEMPLATE STYLE)
            ========================================================= */}
        <section className="relative pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#1846A3]/10 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCDCD5] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider shadow-xs hover:border-[#1846A3]/40 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#1846A3] animate-pulse" />
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operador Integral de Hackathons Corporativos & Innovación Abierta</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#141517] tracking-tight leading-[1.06] max-w-5xl mx-auto">
            Transforma los problemas de tu empresa en{" "}
            <span className="text-[#1846A3]">software funcionando</span> y listo para piloto.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#52535A] max-w-3xl mx-auto leading-relaxed font-normal">
            Tu equipo interno no da abasto y las consultoras tradicionales cobran fortunas por diapositivas teóricas. Diseñamos, convocamos y operamos hackathons técnicos donde múltiples equipos de élite compiten por construir la mejor solución para tu negocio en 4 semanas.
          </p>

          {/* Dual Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto sm:max-w-none">
            <Link href="/start" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#141517] hover:bg-[#252830] text-white font-bold shadow-editorial px-8 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <span>Diseñar Reto de Innovación</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <a
              href={BRAND.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[#DCDCD5] bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold px-7 py-3.5 rounded-xl text-sm shadow-2xs flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#1846A3]" />
                <span>Agendar llamada técnica de 30 min</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
              </Button>
            </a>
          </div>

          {/* Trust points line */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-[#71717A]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Múltiples prototipos con código en GitHub</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>IP y código blindados bajo NDA</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Acompañamiento a piloto de 60 días</span>
            </span>
          </div>

          {/* Cruip Interactive Hero Window Showcase */}
          <div className="pt-8">
            <EmpresasHeroShowcase />
          </div>
        </section>

        {/* =========================================================
            TRUST / SECTOR RIBBON
            ========================================================= */}
        <section className="py-12 border-y border-[#E8E8E4] bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#71717A]">
              Diseñado para comités de tecnología e innovación en sectores de alta exigencia
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-mono font-medium text-[#52535A]">
              {[
                "Fintech & Banca",
                "Retail & E-commerce",
                "Logística & Supply Chain",
                "Seguros & Insurtech",
                "Energía & Minería",
                "Salud & BioTech",
                "Telecomunicaciones",
              ].map((sector) => (
                <span
                  key={sector}
                  className="px-3 py-1.5 rounded-lg bg-[#F8F8F6] border border-[#E8E8E4] text-[#141517] hover:border-[#141517] transition-colors"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CRUIP OPEN FEATURES TILES (6 PILARES METODOLÓGICOS)
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="max-w-3xl mb-14 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#1846A3] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <span>Metodología Llave en Mano</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141517] tracking-tight">
              Todo lo que necesitas para ejecutar un hackathon sin desgastar a tu equipo
            </h2>
            <p className="text-sm sm:text-base text-[#52535A] mt-3 leading-relaxed">
              Absorbemos el 95% de la carga técnica, legal y operativa. Tu empresa solo participa en la definición del problema, mentorías puntuales y la selección de la solución ganadora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-7 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs hover:border-[#141517] hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border ${feat.color} transition-transform group-hover:scale-105 duration-200`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#141517] tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            CRUIP OPEN FEATURES ZIG-ZAG (EL CICLO DE VIDA DEL HACKATHON)
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Section Header */}
            <div className="max-w-3xl text-center mx-auto">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1846A3] block mb-2">
                Paso a Paso
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141517] tracking-tight">
                Cómo transformamos un cuello de botella en un piloto productivo
              </h2>
              <p className="text-sm text-[#52535A] mt-2">
                Un modelo estructurado que garantiza código auditable, evaluación matemática y adopción real en tu infraestructura.
              </p>
            </div>

            {/* STEP 1: SPECIFICATION & DISCOVERY */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#EEF4FF] text-[#1846A3] font-mono text-xs font-bold border border-[#D3E2FE]">
                  <span>FASE 01 · SEMANAS 1 A 2</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                  Estructuración con rigor de ingeniería y convocatoria selectiva
                </h3>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                  La mayoría de hackathons fallan porque plantean retos vagos (&quot;Crea una idea innovadora de IA&quot;). En Kamino traducimos tu problema de negocio en un pliego de ingeniería con endpoints, datasets de prueba y rúbricas ponderadas.
                </p>
                <ul className="space-y-2.5 text-xs text-[#52535A]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Diseño de contratos de API OpenAPI v3 y datasets sintéticos seguros.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Filtro de aplicantes: solo el 15% de los mejores perfiles técnicos son aceptados.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Firma vinculante de acuerdos de confidencialidad (NDA) y cesión de IP.</span>
                  </li>
                </ul>
              </div>

              {/* Visual Card 1 */}
              <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#E8E8E4] shadow-xs space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E4]">
                  <span className="font-bold text-[#141517]">CHALLENGE_SPEC.json</span>
                  <span className="text-[#10B981] font-semibold">VALIDADO POR CTO</span>
                </div>
                <div className="space-y-2 text-[#52535A] bg-white p-4 rounded-xl border border-[#E8E8E4]">
                  <p><span className="text-[#1846A3] font-bold">RETO:</span> Extracción y Conciliación Inteligente</p>
                  <p><span className="text-[#1846A3] font-bold">INPUTS:</span> 100k facturas PDF/XML sintéticas</p>
                  <p><span className="text-[#1846A3] font-bold">SLA:</span> Latencia &lt; 200ms · Precisión &gt; 98.5%</p>
                  <p><span className="text-[#1846A3] font-bold">STACK SUGERIDO:</span> Go, Rust, Python, Qdrant, Llama-3</p>
                  <p><span className="text-[#1846A3] font-bold">SEGURIDAD:</span> Entorno Sandbox aislado en AWS</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#EEF4FF] text-[#1846A3] text-[11px]">
                  ✓ Los participantes empiezan a codificar en la dirección correcta desde la hora cero.
                </div>
              </div>
            </div>

            {/* STEP 2: 48H HACKING & DIRECTORS MENTORSHIP */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Visual Card 2 (Left) */}
              <div className="order-2 lg:order-1 p-6 rounded-2xl bg-[#141517] text-white border border-[#2B2D33] shadow-editorial space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#2B2D36]">
                  <span className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    LIVE_COMPETITION_FEED
                  </span>
                  <span className="text-[#9CA3AF] text-[11px]">8 EQUIPOS ACTIVOS</span>
                </div>
                <div className="space-y-2.5 text-[#9CA3AF]">
                  <div className="p-2.5 rounded-lg bg-[#1C1E24] border border-[#2B2D36] flex items-center justify-between">
                    <div>
                      <span className="text-white font-bold block">Equipo 04 · FinAgents</span>
                      <span className="text-[11px] text-[#34D399]">Commit 42: micro-RAG local integrado</span>
                    </div>
                    <span className="text-xs text-white font-bold">99.1% prec.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#1C1E24] border border-[#2B2D36] flex items-center justify-between">
                    <div>
                      <span className="text-white font-bold block">Equipo 07 · DataVault</span>
                      <span className="text-[11px] text-[#60A5FA]">Commit 29: pipeline async en FastAPI</span>
                    </div>
                    <span className="text-xs text-white font-bold">97.8% prec.</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#252830] text-[#D1D5DB] text-[11px]">
                  💡 Tus directores entran a mentoría, prueban las soluciones y descartan opciones inviables en horas.
                </div>
              </div>

              {/* Copy 2 (Right) */}
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#EEF4FF] text-[#1846A3] font-mono text-xs font-bold border border-[#D3E2FE]">
                  <span>FASE 02 · SEMANA 3 (HACKING)</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                  48 horas de hacking con tus líderes técnicos guiando la arquitectura
                </h3>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                  Tus equipos de TI no tienen que programar horas extras. Actúan como mentores y evaluadores, observando en vivo cómo múltiples equipos prueban diferentes arquitecturas para tu problema.
                </p>
                <ul className="space-y-2.5 text-xs text-[#52535A]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Múltiples equipos explorando modelos de IA, microservicios y bases de datos en paralelo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Checkpoints continuos con pruebas automáticas de tests unitarios y latencia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Cero dispersión: los mentores corrigen desvíos arquitectónicos en tiempo real.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* STEP 3: DEMO DAY & PILOT HANDOFF */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#ECFDF5] text-[#065F46] font-mono text-xs font-bold border border-[#A7F3D0]">
                  <span>FASE 03 · SEMANAS 4 A 8 (PILOTO)</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                  Demo Day con código ejecutable y pase directo a producción
                </h3>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                  El Demo Day no es un concurso de oratoria; es una sesión de prueba técnica ante tu comité directivo. Al finalizar, tu empresa recibe el repositorio de GitHub y acompañamiento directo para poner el piloto en marcha.
                </p>
                <ul className="space-y-2.5 text-xs text-[#52535A]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Evaluación con Jury OS: rúbrica matemática al 100% sin favoritismos ni sesgos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Transferencia inmediata de repositorios privados de GitHub y Dockerfiles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>60 a 90 días de soporte de Kamino en staging para llevar la solución a producción.</span>
                  </li>
                </ul>
              </div>

              {/* Visual Card 3 */}
              <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#E8E8E4] shadow-xs space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E4]">
                  <span className="font-bold text-[#141517]">PILOT_HANDOFF_REPORT</span>
                  <span className="text-[#1846A3] font-bold">ESTADO: TRANSFERIDO</span>
                </div>
                <div className="space-y-2 bg-white p-4 rounded-xl border border-[#E8E8E4]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#71717A]">REPOSITORIO:</span>
                    <span className="text-[#141517] font-bold">github.com/empresa/conciliacion-v1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#71717A]">DOCKER CONTAINER:</span>
                    <span className="text-[#10B981] font-bold">Passed (38 MB Image)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#71717A]">TEST COVERAGE:</span>
                    <span className="text-[#141517] font-bold">94.2% unit / integration</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#71717A]">CONTRATO IP:</span>
                    <span className="text-[#10B981] font-bold">Cesión 100% Firmada</span>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#ECFDF5] text-[#065F46] text-[11px] font-semibold">
                  🚀 Tu empresa no empieza desde cero: arranca con un prototipo probado y funcional.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FORMATOS DE HACKATHON CORPORATIVO (TIERS / PRODUCT CARDS)
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="max-w-3xl mb-12 text-center sm:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1846A3] block mb-2">
              Formatos de Servicio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141517] tracking-tight">
              Diseñado según la escala y urgencia de tu reto
            </h2>
            <p className="text-sm text-[#52535A] mt-2">
              Elige el formato adecuado para validar una nueva tecnología o para resolver un problema crítico de negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {formats.map((m) => (
              <div
                key={m.title}
                className={`p-7 rounded-3xl bg-white border flex flex-col justify-between transition-all duration-300 relative ${
                  m.popular
                    ? "border-[#1846A3] shadow-editorial-elevated ring-2 ring-[#1846A3]/20"
                    : "border-[#E8E8E4] shadow-xs hover:border-[#141517]"
                }`}
              >
                {m.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#1846A3] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs">
                    Más Elegido por Empresas
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${m.tagColor}`}
                    >
                      {m.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#141517] tracking-tight">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                    {m.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E8E8E4] text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1">
                      <span className="block text-[10px] text-[#71717A] uppercase font-bold">DURACIÓN</span>
                      <span className="text-[#141517] font-semibold">{m.timeline}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1">
                      <span className="block text-[10px] text-[#71717A] uppercase font-bold">ESCALA</span>
                      <span className="text-[#141517] font-semibold">{m.teams}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#EEF4FF]/50 border border-[#D3E2FE] space-y-1">
                      <span className="block text-[10px] text-[#1846A3] uppercase font-bold">ENTREGABLE</span>
                      <span className="text-[#141517] font-semibold">{m.outcome}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#E8E8E4]">
                  <Link href="/start" className="block w-full">
                    <Button
                      size="md"
                      className={`w-full font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 ${
                        m.popular
                          ? "bg-[#1846A3] hover:bg-[#133882] text-white shadow-xs"
                          : "bg-[#141517] hover:bg-[#252830] text-white"
                      }`}
                    >
                      <span>{m.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            COMPARATIVA DIRECTA: CONSULTORA VS INTERNO VS HACKATHON
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1846A3] block mb-2">
                Comparativa Radical
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141517] tracking-tight">
                ¿Por qué un Hackathon con Kamino supera los métodos tradicionales?
              </h2>
              <p className="text-sm text-[#52535A] mt-2">
                Menos informes teóricos, más código probado y cero meses de espera innecesaria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Consultora Tradicional */}
              <div className="p-7 rounded-3xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E4]">
                  <span className="text-xs font-mono font-bold uppercase text-[#DC2626]">
                    Consultora Tradicional
                  </span>
                  <XCircle className="w-4 h-4 text-[#DC2626]" />
                </div>
                <ul className="space-y-3 text-xs text-[#52535A]">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>
                      <strong>4 a 6 meses</strong> de reuniones y presentaciones de diapositivas sin código ejecutable.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>
                      <strong>Un solo equipo</strong> explorando una única hipótesis cerrada de solución.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>
                      <strong>Costos astronómicos</strong> que pagan horas de consultores júnior en lugar de software.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>
                      <strong>Entregable final:</strong> Un documento PDF que suele terminar archivado.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Desarrollo Interno In-House */}
              <div className="p-7 rounded-3xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E4]">
                  <span className="text-xs font-mono font-bold uppercase text-[#D97706]">
                    Desarrollo Interno
                  </span>
                  <XCircle className="w-4 h-4 text-[#D97706]" />
                </div>
                <ul className="space-y-3 text-xs text-[#52535A]">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>
                      <strong>Backlog saturado:</strong> Tu equipo técnico está apagando incendios del core de negocio.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>
                      <strong>Riesgo de costo de oportunidad:</strong> Frenar proyectos críticos para explorar nuevas tecnologías.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>
                      <strong>Tiempos lentos:</strong> Prototipar algo nuevo toma entre 6 y 12 meses por prioridades de TI.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>
                      <strong>Sesgo cognitivo:</strong> Tendencia a usar las mismas herramientas de siempre.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Modelo Hackathon Kamino */}
              <div className="p-7 rounded-3xl bg-[#141517] text-white border border-[#2B2D33] shadow-editorial space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#2B2D36]">
                  <span className="text-xs font-mono font-bold uppercase text-[#60A5FA]">
                    Hackathon con Kamino
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                </div>
                <ul className="space-y-3 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">4 semanas llave en mano:</strong> De problema abstracto a prototipos ejecutables listos para probar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">8 a 20 equipos compitiendo:</strong> Comparas múltiples arquitecturas (Go, Python, LLMs locales, RAG) simultáneamente.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Cero desgaste de TI:</strong> Tu equipo solo aporta criterio técnico y evalúa prototipos finales.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Entregable real:</strong> Repositorios en GitHub, Dockerfiles, métricas de latencia y acompañamiento a piloto.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SIMULADOR INTERACTIVO DE ROI DE INNOVACIÓN
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <EmpresasRoiCalculator />
        </section>

        {/* =========================================================
            PREGUNTAS FRECUENTES (FAQ EMPRESARIAL)
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1846A3] block">
                Preguntas Frecuentes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141517] tracking-tight">
                Respuestas para directores de innovación, tecnología y legal
              </h2>
              <p className="text-xs sm:text-sm text-[#52535A]">
                Claridad absoluta sobre propiedad intelectual, seguridad de datos y operación post-evento.
              </p>
            </div>

            <EmpresasFaq />
          </div>
        </section>

        {/* =========================================================
            CRUIP OPEN FINAL CTA BANNER
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#141517] text-white border border-[#2B2D33] shadow-editorial-elevated relative overflow-hidden space-y-6">
            {/* Background Glow */}
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#1846A3]/25 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-semibold uppercase tracking-wider border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Innovación con Resultados Medibles</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              Deja de pagar por diapositivas teóricas. Construye soluciones que funcionen.
            </h2>

            <p className="text-xs sm:text-base text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              Agenda una sesión técnica de 30 minutos sin costo con nuestros directores de metodología. Analizamos tu cuello de botella y te entregamos una propuesta preliminar de reto en 48 horas.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto sm:max-w-none">
              <Link href="/start" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#1846A3] hover:bg-[#1E56C8] text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Diseñar mi Reto de Innovación</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <a
                href={BRAND.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#3F424E] bg-[#1C1E24] text-white hover:bg-[#252830] font-semibold px-7 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#60A5FA]" />
                  <span>Agendar en Calendario</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
                </Button>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-[#9CA3AF]">
              <span>Garantía de código auditable</span>
              <span>•</span>
              <span>Acuerdos de confidencialidad NDA</span>
              <span>•</span>
              <span>Acompañamiento hasta el piloto en producción</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
