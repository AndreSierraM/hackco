import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroProductWindow } from "@/components/landing/HeroProductWindow";
import { AiBuilderInteractive } from "@/components/landing/AiBuilderInteractive";
import { FormatSelector } from "@/components/landing/FormatSelector";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Users,
  Layers,
  ShieldCheck,
  Trophy,
  Sparkles,
  Workflow,
  Scale,
  FolderGit2,
  Building2,
  Cpu,
  GraduationCap,
  Landmark,
  Compass,
  Code2,
} from "lucide-react";

export default function HomePage() {
  const timelineSteps = [
    { num: "01", title: "Define el reto", desc: "Alineamos el dolor de negocio con tecnología viable." },
    { num: "02", title: "Diseñamos el programa", desc: "Reglas, rúbrica, perfiles y cronograma a medida." },
    { num: "03", title: "Convocamos talento", desc: "Filtrado técnico y matchmaking entre builders." },
    { num: "04", title: "Construyen", desc: "Sprints intensivos con mentoría técnica directa." },
    { num: "05", title: "Evaluamos", desc: "Jury OS con rúbrica balanceada y sin sesgos." },
    { num: "06", title: "Seleccionamos", desc: "Calibración de jurados y demo day de finalistas." },
    { num: "07", title: "Acompañamos el piloto", desc: "Transición estructurada de prototipo a entorno real." },
    { num: "08", title: "Medimos resultados", desc: "Reporte ejecutivo con KPIs de adopción y ROI." },
  ];

  const useCases = [
    {
      title: "Innovación Corporativa",
      problem: "Procesos lentos de I+D y falta de validación externa.",
      format: "Corporate Challenge (4 semanas)",
      outcome: "3 a 5 prototipos funcionales evaluados por líderes de negocio.",
      icon: Building2,
    },
    {
      title: "Adopción de IA Aplicada",
      problem: "Incertidumbre sobre cómo integrar modelos generativos en flujos reales.",
      format: "AI Innovation Sprint",
      outcome: "Pipelines agénticos con pruebas de concepto y métricas de latencia.",
      icon: Cpu,
    },
    {
      title: "Atracción de Talento Técnico",
      problem: "Procesos de selección tradicionales desconectados de habilidades prácticas.",
      format: "Talent Hackathon",
      outcome: "Contratación de ingenieros y diseñadores validados en acción real.",
      icon: Users,
    },
    {
      title: "Sector Público (GovTech)",
      problem: "Trámites complejos y falta de interoperabilidad de cara al ciudadano.",
      format: "Civic Open Innovation",
      outcome: "Herramientas de servicio cívico con diseño centrado en personas.",
      icon: Landmark,
    },
    {
      title: "Universidades & Academia",
      problem: "Brecha entre la investigación teórica y el impacto productivo.",
      format: "University Challenge",
      outcome: "Patentes y proyectos de investigación convertidos en MVPs.",
      icon: GraduationCap,
    },
    {
      title: "Developer Relations (DevRel)",
      problem: "Baja adopción de APIs, SDKs o infraestructuras tecnológicas.",
      format: "Global Developer Bounty",
      outcome: "Ecosistema de integraciones y casos de uso construidos por la comunidad.",
      icon: Code2,
    },
  ];

  const serviceMap = [
    "Estrategia",
    "Diseño del Reto",
    "Reglas & Términos",
    "Identidad Visual",
    "Landing de Convocatoria",
    "Reclutamiento Técnico",
    "Comunidad & Filtro",
    "Mentores Especializados",
    "Logística & Venue",
    "Comunicaciones",
    "Operación del Evento",
    "Jury OS & Calificación",
    "Premiación",
    "Reportes Ejecutivos",
    "Acompañamiento a Piloto",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION WITH EDITORIAL DISTINCTION */}
        <section className="relative pt-16 sm:pt-22 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden editorial-glow bg-dot-grid">
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            {/* Eyebrow / Origin indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#E8E8E4] shadow-xs text-xs font-medium text-[#141517]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1846A3]" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#71717A]">Metodología & Operación</span>
              <span className="text-[#D0D0C8]">/</span>
              <span className="text-[#141517] font-semibold">{BRAND.origin}</span>
            </div>

            {/* H1 Headline with Editorial Distinction */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-[-0.035em] text-[#141517] leading-[1.05]">
              Convierte retos en soluciones que{" "}
              <span className="font-serif-italic font-normal text-[#1846A3] tracking-tight">
                sí se construyen.
              </span>
            </h1>

            {/* Subtitle with High Substance */}
            <p className="text-base sm:text-lg text-[#52535A] max-w-2xl mx-auto leading-relaxed font-normal">
              Tú traes el problema de negocio. Nosotros nos encargamos de la estrategia, el talento técnico, la plataforma y el acompañamiento hasta el piloto en producción.
            </p>

            {/* CTAs with Distinctive Visual Hierarchy */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/start">
                <Button size="lg" className="w-full sm:w-auto bg-[#141517] hover:bg-[#252830] text-white shadow-editorial font-semibold px-6">
                  Lanzar un reto en tu empresa
                </Button>
              </Link>
              <Link href="/hackathons">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium px-6 text-[#141517]">
                  Explorar convocatorias
                </Button>
              </Link>
            </div>

            {/* Microcopy / Operational Guarantee */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-[#71717A] pt-1 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#10B981]" /> Presencial · Híbrido · Remoto
              </span>
              <span>·</span>
              <span>Gobernanza de IP para sponsors</span>
              <span>·</span>
              <span>Sin hojas de cálculo caóticas</span>
            </div>
          </div>

          {/* Product Window Component */}
          <HeroProductWindow />
        </section>

        {/* SECTION: DEL RETO AL RESULTADO (EDITORIAL TIMELINE) */}
        <section id="metodologia" className="py-24 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl text-left mb-14">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                Ciclo de Vida del Reto
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141517]">
                Un solo sistema desde el dolor de negocio hasta la solución en producción.
              </h2>
              <p className="text-sm text-[#52535A] mt-2 leading-relaxed">
                Sin saltos en el vacío ni eventos que quedan en el olvido. Cada etapa tiene entregables técnicos y criterios de aceptación verificados.
              </p>
            </div>

            {/* Horizontal Timeline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {timelineSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-5 rounded-xl bg-[#FBFBFA] border border-[#E8E8E4] hover:border-[#141517] transition-all text-left group shadow-editorial"
                >
                  <span className="text-xs font-mono font-bold text-[#71717A] group-hover:text-[#1846A3] transition-colors">
                    Fase {step.num}
                  </span>
                  <h3 className="text-sm font-bold text-[#141517] mt-2">{step.title}</h3>
                  <p className="text-xs text-[#52535A] mt-1 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: DOS AUDIENCIAS (SPLIT EDITORIAL) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Organizations Card */}
            <div className="bg-[#141517] text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between text-left relative overflow-hidden border border-[#2B2D33] shadow-editorial-elevated">
              <div className="space-y-4">
                <Badge variant="primary" size="sm">
                  Para Organizaciones & Corporaciones
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Encuentra soluciones reales, no diapositivas vacías.
                </h3>
                <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                  Lanza retos abiertos o internos, convoca al mejor talento especializado de LATAM y acelera la adopción de tecnologías como inteligencia artificial en tus procesos clave.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs text-[#D1D5DB]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Metodología probada para formular retos de alto valor técnico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Command Center unificado para toda la operación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>Acompañamiento directo a pilotos e incubación post-evento</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link href="/empresas">
                  <Button className="w-full sm:w-auto bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Organizar un challenge
                  </Button>
                </Link>
              </div>
            </div>

            {/* Builders Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between text-left border border-[#E8E8E4] shadow-editorial">
              <div className="space-y-4">
                <Badge variant="purple" size="sm">
                  Para Builders, Developers & Diseñadores
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141517]">
                  Construye proyectos que realmente importen.
                </h3>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                  Compite en hackathons de primer nivel, forma equipos multidisciplinarios con matchmaking inteligente, recibe mentoría de líderes de industria y gana premios sin ceder tu IP.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs text-[#52535A]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1846A3] shrink-0" />
                    <span>Retos con datasets y problemáticas reales de empresas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1846A3] shrink-0" />
                    <span>Herramientas de equipo para encontrar frontend, IA o diseño</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1846A3] shrink-0" />
                    <span>Portafolio verificado que respalda tu carrera profesional</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link href="/hackathons">
                  <Button variant="outline" className="w-full sm:w-auto font-medium" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Ver convocatorias abiertas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: PRODUCT SHOWCASE STORIES */}
        <section className="py-20 bg-white border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-2xl text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Infraestructura de Producto
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
                Construido para operar innovación con rigor
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                No somos una empresa de eventos ni un tablón estático de anuncios. Proveemos el sistema operativo completo.
              </p>
            </div>

            {/* Story 1: AI Challenge Builder */}
            <div>
              <AiBuilderInteractive />
            </div>

            {/* Stories Grid (Modules 2, 3, 4, 5) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {/* Module 2 */}
              <div className="p-6 rounded-xl bg-white border border-[#E8E8E4] shadow-editorial hover:border-[#141517] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#F4F4F1] text-[#141517] border border-[#E8E8E4] flex items-center justify-center mb-4">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">Módulo 02</span>
                  <h4 className="text-sm font-bold text-[#141517] mt-0.5">Command Center Unificado</h4>
                  <p className="text-xs text-[#52535A] mt-2 leading-relaxed">
                    Métricas de salud del evento, admisiones, equipos activos y comunicaciones en un solo tablero en tiempo real.
                  </p>
                </div>
                <Link href="/org/northstar" className="mt-5 text-xs font-semibold text-[#1846A3] hover:text-[#141517] inline-flex items-center gap-1 font-mono">
                  Abrir Command Center <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Module 3 */}
              <div className="p-6 rounded-xl bg-white border border-[#E8E8E4] shadow-editorial hover:border-[#141517] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#F4F4F1] text-[#141517] border border-[#E8E8E4] flex items-center justify-center mb-4">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">Módulo 03</span>
                  <h4 className="text-sm font-bold text-[#141517] mt-0.5">Radar de Matchmaking</h4>
                  <p className="text-xs text-[#52535A] mt-2 leading-relaxed">
                    Detecta vacíos de habilidades en los equipos (ej. falta UX o backend) y recomienda perfiles para asegurar entregas completas.
                  </p>
                </div>
                <Link href="/app/hackathons/bogota-ai-operations/people" className="mt-5 text-xs font-semibold text-[#1846A3] hover:text-[#141517] inline-flex items-center gap-1 font-mono">
                  Ver Matchmaking <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Module 4 */}
              <div className="p-6 rounded-xl bg-white border border-[#E8E8E4] shadow-editorial hover:border-[#141517] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#F4F4F1] text-[#141517] border border-[#E8E8E4] flex items-center justify-center mb-4">
                    <Scale className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">Módulo 04</span>
                  <h4 className="text-sm font-bold text-[#141517] mt-0.5">Jury OS & Calibración</h4>
                  <p className="text-xs text-[#52535A] mt-2 leading-relaxed">
                    Rúbricas ponderadas al 100%, vista dividida para jurados, detección de conflictos de interés y cálculo de varianza sin hojas de cálculo.
                  </p>
                </div>
                <Link href="/judge" className="mt-5 text-xs font-semibold text-[#1846A3] hover:text-[#141517] inline-flex items-center gap-1 font-mono">
                  Abrir Jury OS <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Module 5 */}
              <div className="p-6 rounded-xl bg-white border border-[#E8E8E4] shadow-editorial hover:border-[#141517] transition-all flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#F4F4F1] text-[#141517] border border-[#E8E8E4] flex items-center justify-center mb-4">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">Módulo 05</span>
                  <h4 className="text-sm font-bold text-[#141517] mt-0.5">Project Pipeline</h4>
                  <p className="text-xs text-[#52535A] mt-2 leading-relaxed">
                    Seguimiento post-hackathon: tablero Kanban para gestionar validaciones técnicas, pilotos remunerados e integración empresarial.
                  </p>
                </div>
                <Link href="/org/northstar/projects" className="mt-5 text-xs font-semibold text-[#1846A3] hover:text-[#141517] inline-flex items-center gap-1 font-mono">
                  Ver Pipeline <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CASOS DE USO */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Casos de Aplicación
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
              Diseñado para responder a diferentes momentos de innovación
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <div
                  key={uc.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{uc.title}</h4>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Dolor habitual:
                      </span>
                      <p className="text-xs text-slate-600 mt-0.5">{uc.problem}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        Formato y Resultado:
                      </span>
                      <p className="text-xs text-slate-800 font-medium mt-0.5">{uc.outcome}</p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-blue-600">{uc.format}</span>
                    <Link href="/start" className="text-xs text-slate-400 hover:text-slate-900">
                      Cotizar →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION: FORMAT SELECTOR INTERACTIVE */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <FormatSelector />
        </section>

        {/* SECTION: NOS ENCARGAMOS DE TODO */}
        <section className="py-24 bg-[#F4F4F1] border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block">
              Operación Integral End-to-End
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141517]">
              La plataforma es solo una parte. Operamos el programa completo.
            </h2>
            <p className="text-sm text-[#52535A] max-w-2xl mx-auto leading-relaxed">
              Si tu equipo no cuenta con el ancho de banda para formular bases técnicas, convocar a cientos de ingenieros, coordinar jurados o moderar un demo day de alta tensión, nos encargamos de la misión de principio a fin.
            </p>

            {/* Service Map Badges */}
            <div className="pt-4 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {serviceMap.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E8E8E4] text-xs font-medium text-[#141517] shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1846A3]" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/start">
                <Button size="lg" className="bg-[#141517] hover:bg-[#252830] text-white font-semibold shadow-editorial">
                  Hablar con nuestro equipo de operaciones
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: CASE STUDY (EXAMPLE PROGRAM) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#E8E8E4] p-8 sm:p-12 text-left shadow-editorial">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E8E8E4] gap-4">
              <div>
                <span className="text-[11px] font-mono font-semibold text-[#71717A] uppercase tracking-wider block">
                  Caso Real de Referencia · {BRAND.name} OS
                </span>
                <h3 className="text-2xl font-bold text-[#141517] mt-1 tracking-tight">
                  Bogotá AI Operations Challenge
                </h3>
                <p className="text-xs text-[#71717A] mt-0.5">
                  Northstar Labs · Formato Híbrido · Retos de Auditoría Documental y Agentes Multimodales
                </p>
              </div>
              <Link href="/hackathons/bogota-ai-operations">
                <Button variant="outline" size="sm" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                  Ver Reto Completo
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-[#E8E8E4] text-xs">
              <div>
                <span className="text-[#71717A] font-mono text-[11px] block">Convocatoria</span>
                <p className="text-lg font-bold text-[#141517] font-mono mt-0.5">428 postulantes</p>
              </div>
              <div>
                <span className="text-[#71717A] font-mono text-[11px] block">Equipos & MVPs</span>
                <p className="text-lg font-bold text-[#141517] font-mono mt-0.5">34 equipos · 26 entregas</p>
              </div>
              <div>
                <span className="text-[#71717A] font-mono text-[11px] block">Ganador 1er Puesto</span>
                <p className="text-lg font-bold text-[#141517] mt-0.5">DocuFlow AI</p>
              </div>
              <div>
                <span className="text-[#71717A] font-mono text-[11px] block">Resultado Post-Hackathon</span>
                <p className="text-lg font-bold text-[#059669] mt-0.5">Piloto Corporativo</p>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-[#52535A]">
              <div>
                <h4 className="font-bold text-[#141517] mb-1.5 font-mono text-[11px] uppercase tracking-wider">El Dolor Inicial:</h4>
                <p className="leading-relaxed">
                  Northstar Labs perdía más de 18 horas semanales en la verificación manual de contratos mercantiles y pólizas con salvaguardas legales complejas.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#141517] mb-1.5 font-mono text-[11px] uppercase tracking-wider">El Resultado Tangible:</h4>
                <p className="leading-relaxed">
                  El equipo ganador construyó un pipeline multimodal con OCR e indexación vectorial que redujo el tiempo de auditoría a 18 segundos. Hoy se encuentra en fase de integración formal con presupuesto asignado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FINAL CTA */}
        <section className="py-24 bg-[#141517] text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-t border-[#252830]">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em]">
              ¿Tienes un problema que podría convertirse en un reto?
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
              Cuéntanos tu objetivo y te mostraremos cómo nuestra metodología y plataforma lo transforman en prototipos funcionales y talento contratado.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/start">
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold px-6 shadow-xs">
                  Diseñar mi challenge
                </Button>
              </Link>
              <Link href="/empresas">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#2B2D36] text-white hover:bg-[#22242C] font-medium px-6">
                  Hablar con un consultor
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
