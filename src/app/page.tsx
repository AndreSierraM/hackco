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
        {/* HERO SECTION */}
        <section className="relative pt-12 sm:pt-18 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{BRAND.tagline}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">{BRAND.origin}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08]">
              {BRAND.claim}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {BRAND.description}
            </p>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/start">
                <Button size="lg" className="w-full sm:w-auto bg-slate-950 hover:bg-blue-600 text-white font-semibold">
                  Quiero lanzar un reto
                </Button>
              </Link>
              <Link href="/hackathons">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                  Explorar hackathons
                </Button>
              </Link>
            </div>

            {/* Microcopy */}
            <p className="text-xs text-slate-500 font-medium tracking-wide">
              Presencial · Híbrido · Remoto · Gobernanza de IP garantizada
            </p>
          </div>

          {/* Product Storytelling Window */}
          <HeroProductWindow />
        </section>

        {/* SECTION: DEL RETO AL RESULTADO */}
        <section id="metodologia" className="py-20 bg-white border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl text-left mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Metodología End-to-End
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mt-1">
                Del reto al resultado: Un solo sistema integrado
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Un solo sistema desde el problema inicial hasta la solución implementable.
              </p>
            </div>

            {/* Horizontal Timeline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {timelineSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all text-left group"
                >
                  <span className="text-xl font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    {step.num}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: DOS AUDIENCIAS (SPLIT) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Organizations Card */}
            <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between text-left relative overflow-hidden border border-slate-800">
              <div className="space-y-4">
                <Badge variant="primary" size="sm">
                  Para Organizaciones
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Encuentra soluciones reales, no diapositivas.
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Lanza retos abiertos o internos, convoca al mejor talento especializado de LATAM y acelera la adopción de tecnologías como inteligencia artificial en tus procesos clave.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Metodología probada para formular retos de alto valor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Command Center unificado para toda la operación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Acompañamiento directo a pilotos e incubación</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link href="/empresas">
                  <Button className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-100 font-semibold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Organizar un challenge
                  </Button>
                </Link>
              </div>
            </div>

            {/* Builders Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between text-left border border-slate-200/90 shadow-xs">
              <div className="space-y-4">
                <Badge variant="purple" size="sm">
                  Para Builders & Developers
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                  Construye algo que realmente importe.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Compite en hackathons de primer nivel, forma equipos multidisciplinarios con matchmaking inteligente, recibe mentoría de líderes de industria y gana premios sin ceder tu IP.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Retos con datasets y problemáticas reales de empresas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Herramientas de equipo para encontrar frontend, IA o diseño</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Portafolio verificado que respalda tu carrera</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link href="/hackathons">
                  <Button variant="outline" className="w-full sm:w-auto font-semibold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Ver oportunidades abiertas
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

            {/* Stories Grid (Stories 2, 3, 4, 5) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {/* Story 2 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Story 2: Command Center</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Toda la operación en un solo lugar: métricas de salud del evento, postulaciones, participantes, jurados y canales de comunicación sin cambiar de pestaña.
                  </p>
                </div>
                <Link href="/org/northstar" className="mt-4 text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
                  Ver Command Center <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Story 3 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Story 3: Matchmaking</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Detecta automáticamente vacíos de habilidades en los equipos (ej. falta backend o diseño) y recomienda perfiles complementarios para asegurar entregas completas.
                  </p>
                </div>
                <Link href="/app/hackathons/bogota-ai-operations/people" className="mt-4 text-xs font-bold text-purple-600 hover:text-purple-800 inline-flex items-center gap-1">
                  Ver Matchmaking <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Story 4 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Story 4: Jury OS</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Evalúa sin hojas de cálculo caóticas. Rúbricas ponderadas al 100%, vista dividida para jurados, detección de conflictos de interés y cálculo de varianza en tiempo real.
                  </p>
                </div>
                <Link href="/judge" className="mt-4 text-xs font-bold text-emerald-600 hover:text-emerald-800 inline-flex items-center gap-1">
                  Abrir Portal Jurado <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Story 5 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Story 5: Project Pipeline</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    El proyecto no termina cuando entregas el premio. Tablero Kanban para dar seguimiento post-evento: desde la validación técnica hasta pilotos remunerados e incubación.
                  </p>
                </div>
                <Link href="/org/northstar/projects" className="mt-4 text-xs font-bold text-amber-600 hover:text-amber-800 inline-flex items-center gap-1">
                  Ver Pipeline Post-Hackathon <ArrowRight className="w-3.5 h-3.5" />
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
        <section className="py-20 bg-slate-50 border-y border-slate-200/80 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Operación Integral de Principio a Fin
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
              La plataforma es solo una parte. También podemos operar todo el programa.
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              Si tu equipo no cuenta con el tiempo o la experiencia para estructurar bases, convocar cientos de builders, coordinar jurados o moderar un evento de alta tensión, nuestro equipo se encarga de la ejecución completa.
            </p>

            {/* Service Map Badges */}
            <div className="pt-4 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {serviceMap.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/start">
                <Button size="lg" className="bg-slate-950 hover:bg-blue-600 text-white font-semibold">
                  Hablar con nuestro equipo de operaciones
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: CASE STUDY (EXAMPLE PROGRAM) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 text-left shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Ejemplo de Programa Ejecutado en {BRAND.name}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Caso Demo: Bogotá AI Operations Challenge
                </h3>
                <p className="text-xs text-slate-500">
                  Organizado por Northstar Labs · Formato Híbrido · Retos de Automatización y Auditoría
                </p>
              </div>
              <Link href="/hackathons/bogota-ai-operations">
                <Button variant="outline" size="sm" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                  Ver Reto Completo
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-slate-100 text-xs">
              <div>
                <span className="text-slate-400">Participantes Convocados</span>
                <p className="text-lg font-bold text-slate-900 mt-0.5">428 builders</p>
              </div>
              <div>
                <span className="text-slate-400">Equipos & Proyectos</span>
                <p className="text-lg font-bold text-slate-900 mt-0.5">34 equipos · 26 MVPs</p>
              </div>
              <div>
                <span className="text-slate-400">Proyecto Ganador</span>
                <p className="text-lg font-bold text-slate-900 mt-0.5">DocuFlow AI</p>
              </div>
              <div>
                <span className="text-slate-400">Estado Post-Evento</span>
                <p className="text-lg font-bold text-emerald-600 mt-0.5">Piloto en Ejecución</p>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">El Desafío Inicial:</h4>
                <p className="leading-relaxed">
                  Northstar Labs requería reducir más de 18 horas semanales de verificación manual de contratos mercantiles sin comprometer la precisión legal.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">El Resultado Operativo:</h4>
                <p className="leading-relaxed">
                  El equipo ganador desarrolló un pipeline agéntico con OCR e indexación vectorial que redujo el tiempo de auditoría a 18 segundos, pasando de la hackathon a un piloto formal con presupuesto asignado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FINAL CTA */}
        <section className="py-20 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              ¿Tienes un problema que podría convertirse en un reto?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
              Cuéntanos tu objetivo y te mostraremos cómo nuestra metodología y plataforma lo transforman en soluciones funcionales.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/start">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold">
                  Diseñar mi challenge
                </Button>
              </Link>
              <Link href="/empresas">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-700 text-white hover:bg-slate-900 font-semibold">
                  Agendar una conversación
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
