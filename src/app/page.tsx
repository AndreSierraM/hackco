import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroProductWindow } from "@/components/landing/HeroProductWindow";
import { FormatSelector } from "@/components/landing/FormatSelector";
import { ChaosToKamino } from "@/components/landing/ChaosToKamino";
import { ProjectToPilotPipeline } from "@/components/landing/ProjectToPilotPipeline";
import { Button } from "@/components/ui/Button";
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
  Compass,
  Code2,
  Eye,
  Target,
  Sparkle,
  Terminal,
} from "lucide-react";

export default function HomePage() {
  const steps = [
    {
      num: "01",
      title: "Estructuramos tu problema de negocio",
      subtitle: "Traducimos tu necesidad a código",
      desc: "Nos reunimos con tus líderes y convertimos ese cuello de botella en un reto técnico con reglas claras, datasets seguros y criterios de éxito medibles para tu empresa.",
      tag: "Estrategia",
      image: "/images/hackathon-whiteboard.jpg",
      highlight: "Especificación técnica y métricas de éxito",
    },
    {
      num: "02",
      title: "Te conseguimos el talento técnico ideal",
      subtitle: "Especialistas filtrados para tu caso",
      desc: "Atraemos y seleccionamos a los mejores programadores, ingenieros de IA y diseñadores de la región para que compitan por construir la solución que necesitas.",
      tag: "Convocatoria",
      image: "/images/hackathon-builders.jpg",
      highlight: "Equipos multidisciplinarios listos",
    },
    {
      num: "03",
      title: "Supervisamos toda la construcción",
      subtitle: "Sprints enfocados en tu arquitectura",
      desc: "Nos encargamos de toda la operación, el cronograma y las mentorías técnicas para asegurar que el código cumpla con tus restricciones de seguridad y negocio.",
      tag: "Operación",
      image: "/images/hackathon-mentoring.jpg",
      highlight: "Código ejecutable verificado en GitHub",
    },
    {
      num: "04",
      title: "Te entregamos soluciones listas para piloto",
      subtitle: "Evaluación objetiva y traspaso",
      desc: "Tus jurados califican prototipos en vivo con nuestra plataforma y te acompañamos en el traspaso legal y técnico para iniciar el piloto en tu empresa.",
      tag: "Resultados",
      image: "/images/hackathon-pitch.jpg",
      highlight: "Prototipos listos para producción",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1">
        {/* =========================================================
            SECCIÓN 01 — HERO EDITORIAL
            Ocupa gran parte del viewport inicial, copy dominante,
            mucho espacio negativo, fotografía documental auténtica.
            ========================================================= */}
        <section className="relative pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            {/* Dominant Headline (56-84px desktop / 40-52px mobile) */}
            <h1 className="text-[42px] sm:text-6xl lg:text-[76px] font-extrabold tracking-[-0.035em] text-[#141517] leading-[1.04] max-w-4xl mx-auto">
              Convierte los problemas de tu empresa en soluciones que{" "}
              <span className="font-serif-italic font-normal text-[#1846A3] tracking-tight">
                sí se construyen.
              </span>
            </h1>

            {/* Supporting Copy: 100% Client Centric */}
            <p className="text-base sm:text-xl text-[#52535A] max-w-3xl mx-auto leading-relaxed font-normal">
              Tu equipo interno no da abasto y las consultoras tradicionales cobran fortunas por diagnósticos teóricos. Te ayudamos a estructurar tu reto, convocar al mejor talento técnico de la región y entregarte entre 5 y 10 prototipos de software funcionando, listos para tu próximo piloto en 4 semanas.
            </p>

            {/* Action CTAs: Primary B2B + Secondary "Cómo te ayudamos" */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link href="/start" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#141517] hover:bg-[#252830] text-white shadow-editorial font-semibold px-7 text-sm sm:text-base py-3.5"
                >
                  Diseñar un reto para mi empresa
                </Button>
              </Link>
              <a href="#como-funciona" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#DCDCD5] text-[#141517] hover:bg-[#F4F4EE] font-medium px-6 text-sm sm:text-base py-3.5"
                >
                  Ver cómo te ayudamos
                </Button>
              </a>
            </div>

            {/* Secondary Builder Access Link */}
            <div className="pt-1">
              <Link
                href="/hackathons"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#71717A] hover:text-[#1846A3] transition-colors"
              >
                <span>¿Quieres competir como builder?</span>
                <span className="font-semibold underline underline-offset-4 text-[#141517] hover:text-[#1846A3]">
                  Explorar hackathons abiertos →
                </span>
              </Link>
            </div>

            {/* Hero Visual: Asymmetric Editorial Documentary Composition */}
            <div className="pt-6 sm:pt-10 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch text-left">
                {/* Main Dominant Photo: Builders in deep collaboration */}
                <div className="md:col-span-8 relative rounded-2xl overflow-hidden border border-[#DCDCD5] shadow-editorial bg-[#EFEFEA] min-h-[340px] sm:min-h-[420px] group">
                  <Image
                    src="/images/hackathon-builders.jpg"
                    alt="Equipos multidisciplinarios construyendo soluciones tecnológicas en un hackathon"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Floating Contextual Labels */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[#141517] text-[11px] font-mono font-semibold uppercase tracking-wider shadow-xs">
                      Sprint de Construcción
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono shadow-xs">
                      Talento Técnico · IA · Producto
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs sm:text-sm font-mono text-[#D1D5DB] tracking-tight">
                      Metodología & Operación Kamino
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight mt-0.5 text-white">
                      Desarrolladores, diseñadores e ingenieros de IA trabajando en retos reales.
                    </h3>
                  </div>
                </div>

                {/* Secondary Editorial Photos (Mentoring & Demo Day) */}
                <div className="md:col-span-4 flex flex-col gap-4">
                  {/* Photo 2: Mentoring */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#DCDCD5] shadow-editorial bg-[#EFEFEA] flex-1 min-h-[180px] group">
                    <Image
                      src="/images/hackathon-mentoring.jpg"
                      alt="Sesión de mentoría técnica individual con líderes de industria"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/90 text-[#141517] text-[10px] font-mono font-semibold uppercase tracking-wider">
                      Mentoría Especializada
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-semibold">Arquitectura y viabilidad técnica guiada paso a paso.</p>
                    </div>
                  </div>

                  {/* Photo 3: Pitch & Evaluation */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#DCDCD5] shadow-editorial bg-[#EFEFEA] flex-1 min-h-[180px] group">
                    <Image
                      src="/images/hackathon-pitch.jpg"
                      alt="Presentación final de proyectos ante el comité de jurados"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/90 text-[#141517] text-[10px] font-mono font-semibold uppercase tracking-wider">
                      Demo Day & Evaluación
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-semibold">Demos en vivo evaluadas con rúbricas objetivas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 02 — EL PROBLEMA (Caos vs. Solución Kamino)
            Visual: CAOS TRADICIONAL -> KAMINO UNIFICADO -> RESULTADOS
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl text-left mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                ¿Te suena familiar?
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141517]">
                La innovación en tu empresa no se frena por falta de ideas, sino por falta de manos que las construyan.
              </h2>
              <p className="text-sm sm:text-base text-[#52535A] mt-2 leading-relaxed">
                Tu equipo de tecnología está 100% ocupado manteniendo la operación. Las consultorías tradicionales te cobran fortunas por diagnósticos de 80 páginas que nadie programa. Y los eventos internos solo dejan pizzas y fotos. Te ayudamos a romper ese cuello de botella y recibir entre 5 y 10 prototipos de software probados sin distraer a tu equipo interno.
              </p>
            </div>

            <ChaosToKamino />
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 03 — CÓMO FUNCIONA (4 Grandes Momentos)
            4 fases operacionales con visuales reales.
            ========================================================= */}
        <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
              Cómo te ayudamos
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141517]">
              Cuatro pasos para pasar de un problema que te quita el sueño a software listo para piloto.
            </h2>
            <p className="text-sm sm:text-base text-[#52535A] mt-2 leading-relaxed">
              Nosotros absorbemos toda la carga metodológica, técnica y operativa. Tu organización solo participa en definir los criterios de éxito, revisar avances y elegir las soluciones ganadoras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl border border-[#E8E8E4] overflow-hidden shadow-editorial hover:border-[#141517] transition-all flex flex-col justify-between group"
              >
                <div className="relative h-48 sm:h-56 w-full bg-[#EFEFEA] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#141517] text-white flex items-center justify-center font-mono font-bold text-xs">
                      {step.num}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-white/90 text-[#141517] text-[11px] font-mono font-semibold uppercase tracking-wider">
                      {step.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-mono text-[#D1D5DB] block">
                      Entregable para tu empresa:
                    </span>
                    <p className="text-xs font-semibold text-[#A7F3D0]">
                      ✓ {step.highlight}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-2">
                  <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider">
                    {step.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-[#141517]">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 04 — MOSTRAR LA EXPERIENCIA (Producto en contexto)
            "Así supervisas las soluciones que se construyen para ti."
            Estudio interactivo de capacidades Kamino.
            ========================================================= */}
        <section id="experiencia" className="py-24 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-6xl mx-auto space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block">
              Control Total para tu Empresa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141517] max-w-3xl mx-auto">
              Así supervisas las soluciones que se construyen para ti.
            </h2>
            <p className="text-sm sm:text-base text-[#52535A] max-w-2xl mx-auto leading-relaxed">
              Sin hojas de cálculo dispersas ni chats caóticos: monitorea en tiempo real los equipos postulados, el avance de código en GitHub, las sesiones con mentores y la calificación matemática de tus jurados.
            </p>

            {/* Showcase Studio Component with Integrated 4 Capabilities */}
            <div className="pt-6">
              <HeroProductWindow />
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 05 — EXPERIENCIA HUMANA (Pausa Documental)
            Rompe completamente con la estética SaaS.
            Fotografía documental, tensión, comunidad, celebración.
            ========================================================= */}
        <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden bg-[#141517]">
          {/* Full-width documentary background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hackathon-celebration.jpg"
              alt="Comunidad tecnológica reunida en un hackathon presencial en América Latina"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141517] via-[#141517]/70 to-[#141517]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#93C5FD] text-xs font-mono border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
              <span>La energía de construir juntos</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              “Tu empresa no necesita más comités para debatir ideas. Necesita ver software funcionando en manos de sus usuarios.”
            </h2>

            <p className="text-sm sm:text-base text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
              Menos PowerPoints. Más productos funcionando. Te ayudamos a acortar la distancia entre un cuello de botella operativo y una solución que tu equipo pueda desplegar en producción.
            </p>

            <div className="pt-4">
              <Link href="/start">
                <Button size="lg" className="bg-white hover:bg-[#F4F4EE] text-[#141517] font-semibold px-6 shadow-sm">
                  Cuéntanos qué problema quieres resolver
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 06 — PARA QUÉ USAR KAMINO (Selector de Objetivos)
            No cards homogéneas: Selector interactivo elegante.
            ========================================================= */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <FormatSelector />
        </section>

        {/* =========================================================
            SECCIÓN 07 — SOCIAL PROOF & CREDIBILIDAD HONESTA
            Garantías concretas para el cliente corporativo.
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block">
                  Garantías para tu Empresa
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141517]">
                  Eliminamos los riesgos que habitualmente frenan la innovación corporativa.
                </h2>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                  Sabemos que abrir un reto genera dudas sobre confidencialidad, calidad de código y desgaste de tu equipo interno. Diseñamos cada proceso para darte certeza total y control desde el primer día:
                </p>
                <div className="pt-2 text-xs font-mono text-[#71717A]">
                  <span>Sede en Bogotá, Colombia · Operación híbrida en toda América Latina</span>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                  <div className="w-8 h-8 rounded-lg bg-[#141517] text-white flex items-center justify-center mb-3">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#141517]">Cero Desgaste Operativo</h4>
                  <p className="text-xs text-[#52535A] mt-1.5 leading-relaxed">
                    Nosotros absorbemos toda la logística, admisiones y soporte a builders. Tu equipo solo invierte 2 horas semanales en revisar avances y dar feedback.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                  <div className="w-8 h-8 rounded-lg bg-[#141517] text-white flex items-center justify-center mb-3">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#141517]">Código Real, No Maquetas</h4>
                  <p className="text-xs text-[#52535A] mt-1.5 leading-relaxed">
                    Exigimos repositorios de GitHub verificados, APIs integradas y demos en vivo para que no pagues por conceptos abstractos en diapositivas.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                  <div className="w-8 h-8 rounded-lg bg-[#141517] text-white flex items-center justify-center mb-3">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#141517]">Blindaje Legal & Propiedad (IP)</h4>
                  <p className="text-xs text-[#52535A] mt-1.5 leading-relaxed">
                    Términos claros desde la postulación: acuerdos de confidencialidad (NDA), cesión de derechos sobre prototipos y datasets protegidos para tu empresa.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                  <div className="w-8 h-8 rounded-lg bg-[#141517] text-white flex items-center justify-center mb-3">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#141517]">Evaluación Objetiva con tus Criterios</h4>
                  <p className="text-xs text-[#52535A] mt-1.5 leading-relaxed">
                    Tus líderes técnicos califican con rúbricas cuantitativas calibradas al 100%; nada se decide por simpatía, sino por viabilidad técnica y valor comercial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 08 — EL DIFERENCIADOR: DE PROTOTIPO A PILOTO
            "El Demo Day no es la meta"
            Visual: IDEA -> MVP -> FINALISTA -> PILOTO
            ========================================================= */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <ProjectToPilotPipeline />
        </section>

        {/* =========================================================
            SECCIÓN 09 — DOS PUERTAS (Separación nítida de audiencias)
            Para organizaciones vs Para builders.
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Door 1: Organizations */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#141517] text-white border border-[#2B2D33] shadow-editorial flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-white font-mono text-[11px] font-semibold uppercase tracking-wider border border-white/20 inline-block">
                    Para tu Organización o Empresa
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    ¿Tienes un problema de negocio que necesitas resolver rápido?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    Cuéntanos tu cuello de botella. En 48 horas estructuramos las bases del reto y ponemos a decenas de desarrolladores senior a construir soluciones para ti.
                  </p>
                  <ul className="space-y-2 pt-2 text-xs text-[#D1D5DB]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>Formulación técnica y datasets de prueba estructurados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>Operación completa sin desgaste para tu equipo interno</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>Acompañamiento hasta el piloto con los proyectos ganadores</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link href="/start">
                    <Button className="w-full sm:w-auto bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Diseñar un reto para mi empresa
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Door 2: Builders */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#FBFBFA] border border-[#E8E8E4] shadow-editorial flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#EEF4FF] text-[#1846A3] font-mono text-[11px] font-semibold uppercase tracking-wider border border-[#D3E2FE] inline-block">
                    Para Builders & Desarrolladores
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141517]">
                    ¿Quieres construir soluciones para problemas reales?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                    Encuentra retos técnicos patrocinados por empresas líderes, compite por bolsas de premios, recibe mentoría de alto nivel y construye prototipos que sí se usan.
                  </p>
                  <ul className="space-y-2 pt-2 text-xs text-[#52535A]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1846A3] shrink-0" />
                      <span>Retos reales con premios y oportunidades de contratación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1846A3] shrink-0" />
                      <span>Matchmaking inteligente para armar equipos de frontend, backend e IA</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1846A3] shrink-0" />
                      <span>Portafolio con código probado para validar tu carrera profesional</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link href="/hackathons">
                    <Button variant="outline" className="w-full sm:w-auto font-medium" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Explorar hackathons abiertos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 10 — CTA FINAL EMOCIONAL
            Cierre memorable y directo.
            ========================================================= */}
        <section className="py-24 sm:py-32 bg-[#141517] text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              ¿Qué problema de tu empresa resolverías si tuvieras a 100 expertos programando en él este mes?
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
              Agenda una llamada técnica de 30 minutos. Analizamos tu cuello de botella sin costo y te mostramos cómo te ayudamos a tener prototipos de software funcionando antes de que termine el mes.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/start" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold px-8 py-3.5 shadow-xs">
                  Cuéntanos tu reto
                </Button>
              </Link>
              <Link href="/empresas" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#2B2D36] text-white hover:bg-[#22242C] font-medium px-6 py-3.5">
                  Ver cómo ayudamos a tu empresa
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
