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
  Workflow,
  Layers,
  FileCode2,
  Clock,
  Building2,
  Cpu,
  Database,
  Users,
  Sparkles,
  HelpCircle,
  ArrowUpRight,
  Lock,
  GitBranch,
} from "lucide-react";

export default function HomePage() {
  const useCases = [
    {
      category: "Automatización & Operaciones",
      title: "Reducción de procesos manuales de backoffice",
      description:
        "Cotejo de órdenes de compra, conciliación de facturas y auditoría de expedientes que consumen cientos de horas operativas cada semana.",
      deliverable: "Pipeline de extracción y conciliación con dashboard de excepciones en tiempo real.",
      icon: Workflow,
    },
    {
      category: "IA Aplicada & Agentes",
      title: "Agentes autónomos sobre flujos de negocio reales",
      description:
        "Implementación de arquitecturas RAG, asistentes con memoria y validación de reglas para atención al cliente y análisis legal sin alucinaciones.",
      deliverable: "Modelos con guardrails éticos, métricas de latencia y pruebas de carga documentadas.",
      icon: Cpu,
    },
    {
      category: "Datos & Analítica Predictiva",
      title: "De información dispersa a motores de decisión",
      description:
        "Unificación de datos transaccionales para predicción de fuga de clientes, scoring de riesgo crediticio o detección de anomalías.",
      deliverable: "Modelos calibrados con datasets de validación y API de inferencia desplegable.",
      icon: Database,
    },
    {
      category: "Fintech & Servicios Financieros",
      title: "Onboarding seguro y prevención de fraude",
      description:
        "Detección forense de adulteración documental, biometría multicriterio y enrutamiento inteligente de pagos.",
      deliverable: "SDK de verificación con tolerancia a ataques sintéticos y cumplimiento regulatorio.",
      icon: ShieldCheck,
    },
    {
      category: "Experiencia de Cliente & Canales",
      title: "Rediseño de journeys complejos de autoatención",
      description:
        "Digitalización de solicitudes de seguros, reclamos complejos y atención omnicanal sincronizada con sistemas core.",
      deliverable: "Interfaces frontend reactivas probadas con usuarios y conectadas a microservicios.",
      icon: Layers,
    },
    {
      category: "Logística & Cadena de Suministro",
      title: "Optimización de despachos y ruteo dinámico",
      description:
        "Algoritmos de asignación de capacidad de flota, predicción de inventario y alertas tempranas de disrupción logística.",
      deliverable: "Motor heurístico de optimización con visualización geoespacial interactiva.",
      icon: Building2,
    },
  ];

  const targetIndustries = [
    { name: "Banca & Fintech", focus: "Scoring, prevención de fraude, onboarding y conciliación contable." },
    { name: "Seguros", focus: "Liquidación ágil de siniestros, auditoría médica y suscripción automatizada." },
    { name: "Telecomunicaciones", focus: "Atención al cliente autónoma, gestión de incidencias y churn prediction." },
    { name: "Retail & E-commerce", focus: "Visibilidad de inventarios, personalización y detección de devoluciones anómalas." },
    { name: "BPO & Servicios", focus: "Automatización de mesas de ayuda, procesamiento documental y QA de agentes." },
    { name: "Salud Privada", focus: "Agendamiento asistido, validación de autorizaciones y análisis de historias clínicas." },
  ];

  const steps = [
    {
      step: "01",
      name: "Discovery & Estructuración del Reto",
      duration: "Semana 1",
      description:
        "Nos reunimos con tus líderes de negocio y tecnología para traducir cuellos de botella en requerimientos de ingeniería, métricas cuantitativas y datasets de prueba seguros.",
      responsible: "Kamino (85%) · Cliente (15% feedback)",
      highlight: "Challenge Blueprint con criterios de éxito medibles",
    },
    {
      step: "02",
      name: "Convocatoria & Filtro Técnico de Builders",
      duration: "Semana 2",
      description:
        "Convocamos a ingenieros de IA, desarrolladores backend y diseñadores de producto senior de Colombia y LATAM. Filtramos mediante validación de repositorios de GitHub.",
      responsible: "Kamino (100% de la operación)",
      highlight: "Equipos equilibrados sin vacíos técnicos",
    },
    {
      step: "03",
      name: "Build Sprint & Mentorías Técnicas",
      duration: "Semanas 3 a 4",
      description:
        "Los equipos construyen prototipos funcionales bajo supervisión técnica continua. Tu equipo de tecnología solo invierte 2 horas a la semana en sesiones de alineación.",
      responsible: "Builders (Construcción) · Kamino (Operación)",
      highlight: "Código verificado en GitHub y commits diarios",
    },
    {
      step: "04",
      name: "Demo Day & Camino Hacia Piloto",
      duration: "Semana 5+",
      description:
        "Evaluación objetiva con Jury OS bajo rúbrica cuantitativa. Acompañamos el traspaso técnico y legal del código ganador para iniciar su integración en tu infraestructura.",
      responsible: "Cliente (Jurado) · Kamino (Acompañamiento a piloto)",
      highlight: "Acuerdo de piloto y transferencia de código",
    },
  ];

  const faqs = [
    {
      q: "¿Por qué no contratar una consultora de tecnología tradicional?",
      a: "Una consultora tradicional asigna un único equipo cerrado con una sola hipótesis técnica y cobra durante meses antes de escribir una línea de código. Con Kamino obtienes entre 5 y 10 equipos compitiendo con arquitecturas y enfoques distintos, entregándote prototipos de software funcionando en 4 semanas para que decidas con base en código real, no en presentaciones teóricas.",
    },
    {
      q: "¿Por qué no construir la solución con nuestro equipo interno?",
      a: "Tu equipo de tecnología ya tiene un backlog saturado manteniendo la operación crítica del negocio. Destinar recursos internos a explorar nuevas tecnologías o automatizaciones suele tomar de 6 a 12 meses. Kamino actúa como tu brazo de exploración acelerada: absorbe toda la carga y te entrega soluciones probadas sin distraer a tus ingenieros.",
    },
    {
      q: "¿Quién es el dueño del código fuente y de la propiedad intelectual (IP)?",
      a: "La propiedad intelectual y las licencias de uso se definen contractualmente en las bases del reto antes de iniciar. El modelo habitual corporativo garantiza a tu empresa la licencia exclusiva o la opción prioritaria de adquisición para desplegar la solución en producción como piloto.",
    },
    {
      q: "¿Qué datos e información sensible tenemos que compartir?",
      a: "Ninguna información confidencial necesita salir de tu empresa. Trabajamos con datasets sintéticos, datos anonimizados y entornos de sandbox aislados diseñados específicamente para el reto, respaldados por acuerdos de confidencialidad (NDA) vinculantes para todos los participantes.",
    },
    {
      q: "¿Cuánto tiempo y esfuerzo exige de nuestro equipo interno?",
      a: "Cero desgaste logístico. Nosotros gestionamos las admisiones, la plataforma, las mentorías y la operación diaria. Tu equipo directivo y técnico únicamente participa en la sesión de discovery inicial (2 horas), sesiones semanales de alineación técnica (1 hora) y la deliberación del Demo Day.",
    },
    {
      q: "¿Qué sucede después del Demo Day con el equipo ganador?",
      a: "El objetivo de Kamino no termina en la entrega de premios. Acompañamos durante 60 a 90 días el Project Pipeline para estructurar el piloto formal, definir el contrato comercial de implementación y asegurar la transferencia técnica hacia tus entornos de staging.",
    },
    {
      q: "¿Puede participar nuestro propio talento interno en el reto?",
      a: "Sí. Ofrecemos la modalidad de Retos Internos o Híbridos, donde equipos de colaboradores de tu empresa compiten o colaboran con builders externos para romper silos entre áreas de tecnología, operaciones y negocio.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1">
        {/* =========================================================
            SECCIÓN 01 — HERO EDITORIAL B2B
            Propuesta de valor clara en <5 segundos.
            Tesis: Problema -> Challenge -> Prototipos -> Piloto.
            ========================================================= */}
        <section className="relative pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center space-y-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCDCD5] text-[#141517] text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1846A3] animate-pulse" />
              <span>INNOVACIÓN APLICADA B2B</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-[40px] sm:text-6xl lg:text-[74px] font-extrabold tracking-[-0.035em] text-[#141517] leading-[1.05] max-w-4xl mx-auto">
              Tus problemas de negocio merecen{" "}
              <span className="font-serif-italic font-normal text-[#1846A3] tracking-tight">
                más de una solución.
              </span>
            </h1>

            {/* Subheadline & Value Proposition */}
            <p className="text-base sm:text-xl text-[#52535A] max-w-3xl mx-auto leading-relaxed font-normal">
              Convierte un reto operativo en múltiples prototipos tecnológicos construidos y evaluados en semanas. Kamino diseña el challenge, reúne talento técnico especializado, opera el programa y acompaña la mejor solución hasta el piloto en producción.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a href="#assessment" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#141517] hover:bg-[#252830] text-white shadow-editorial font-semibold px-8 text-sm sm:text-base py-3.5 cursor-pointer"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Cuéntanos qué quieres resolver
                </Button>
              </a>
              <a href="#como-funciona" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-[#DCDCD5] text-[#141517] hover:bg-[#F4F4EE] font-medium px-6 text-sm sm:text-base py-3.5 cursor-pointer"
                >
                  Ver cómo funciona
                </Button>
              </a>
            </div>

            {/* Microcopy Trust Anchor */}
            <p className="text-xs text-[#71717A] font-mono">
              Sin compromiso · Diagnóstico preliminar de viabilidad en 48 horas · Operación en Colombia y LATAM
            </p>

            {/* Visual Process Map: Problema -> Challenge -> Prototipos -> Ganador -> Piloto */}
            <div className="pt-6 max-w-4xl mx-auto">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs">
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-3 text-center sm:text-left">
                  Flujo de Entrega de Soluciones:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-left text-xs">
                  <div className="p-2.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                    <span className="text-[10px] font-mono text-[#DC2626] font-bold block">1. ENTRADA</span>
                    <p className="font-bold text-[#141517] mt-0.5">Problema de Negocio</p>
                    <p className="text-[11px] text-[#71717A] mt-0.5 leading-tight">Dolor operativo o cuello de botella</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                    <span className="text-[10px] font-mono text-[#1846A3] font-bold block">2. ESTRUCTURA</span>
                    <p className="font-bold text-[#141517] mt-0.5">Challenge Técnico</p>
                    <p className="text-[11px] text-[#71717A] mt-0.5 leading-tight">Bases, datasets y rúbricas claras</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                    <span className="text-[10px] font-mono text-[#7C3AED] font-bold block">3. EJECUCIÓN</span>
                    <p className="font-bold text-[#141517] mt-0.5">Múltiples Prototipos</p>
                    <p className="text-[11px] text-[#71717A] mt-0.5 leading-tight">5 a 10 equipos construyendo código</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4]">
                    <span className="text-[10px] font-mono text-[#D97706] font-bold block">4. EVALUACIÓN</span>
                    <p className="font-bold text-[#141517] mt-0.5">Solución Ganadora</p>
                    <p className="text-[11px] text-[#71717A] mt-0.5 leading-tight">Calificación objetiva en vivo</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-[#EEF4FF] border border-[#B9D2FE]">
                    <span className="text-[10px] font-mono text-[#059669] font-bold block">5. RETORNO</span>
                    <p className="font-bold text-[#0E357E] mt-0.5">Piloto en Producción</p>
                    <p className="text-[11px] text-[#1E40AF] mt-0.5 leading-tight">Transferencia técnica y despliegue</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Supply-Side Builder Notice */}
            <div className="pt-2">
              <Link
                href="/builders"
                className="inline-flex items-center gap-1.5 text-xs text-[#71717A] hover:text-[#1846A3] transition-colors"
              >
                <span>¿Quieres competir como desarrollador o diseñador?</span>
                <span className="font-semibold underline underline-offset-4 text-[#141517] hover:text-[#1846A3]">
                  Explorar comunidad de builders →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 02 — TRUSTED / CREDIBILIDAD HONESTA
            Cero fake logos. Rigor de ingeniería probado.
            ========================================================= */}
        <section className="py-12 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                Garantías del Modelo Operativo
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#141517] tracking-tight">
                Diseñado para líderes corporativos que no pueden arriesgar tiempo ni presupuesto.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="w-8 h-8 rounded-lg bg-[#141517] text-white flex items-center justify-center mb-3">
                  <FileCode2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-[#1846A3] font-bold">100% Ejecutable</span>
                <h4 className="text-sm font-bold text-[#141517] mt-0.5">Código en GitHub, No PPT</h4>
                <p className="text-xs text-[#52535A] mt-1 leading-relaxed">
                  Cada entrega incluye repositorio verificado, documentación técnica y demo en vivo funcional.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="w-8 h-8 rounded-lg bg-[#141517] text-white flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-[#1846A3] font-bold">Velocidad 4 Semanas</span>
                <h4 className="text-sm font-bold text-[#141517] mt-0.5">De la Hipótesis al Piloto</h4>
                <p className="text-xs text-[#52535A] mt-1 leading-relaxed">
                  Sprints intensivos que entregan prototipos en semanas, evitando comités de debate de varios meses.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="w-8 h-8 rounded-lg bg-[#141517] text-white flex items-center justify-center mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-[#1846A3] font-bold">Diversidad de Enfoque</span>
                <h4 className="text-sm font-bold text-[#141517] mt-0.5">Múltiples Soluciones</h4>
                <p className="text-xs text-[#52535A] mt-1 leading-relaxed">
                  Entre 5 y 10 equipos exploran distintas tecnologías y arquitecturas para que elijas la más eficiente.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4]">
                <div className="w-8 h-8 rounded-lg bg-[#141517] text-white flex items-center justify-center mb-3">
                  <Lock className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-[#1846A3] font-bold">Seguridad Enterprise</span>
                <h4 className="text-sm font-bold text-[#141517] mt-0.5">Blindaje Legal & IP</h4>
                <p className="text-xs text-[#52535A] mt-1 leading-relaxed">
                  Acuerdos de confidencialidad estrictos, datasets anonimizados y derechos de uso definidos por contrato.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 03 — EL PROBLEMA REAL
            Por qué la innovación se atasca en la empresa.
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
              El Cuello de Botella
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141517]">
              Tienes decenas de oportunidades de automatización e IA. Pero las rutas habituales fallan.
            </h2>
            <p className="text-sm sm:text-base text-[#52535A] mt-3 leading-relaxed">
              Las empresas grandes y medianas no sufren por falta de ideas. Sufren por la lentitud para convertirlas en software probado sin colapsar al equipo interno:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                <XCircle className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#141517]">TI Interno Saturado</h3>
              <p className="text-xs text-[#52535A] leading-relaxed">
                Tus desarrolladores e ingenieros de datos están 100% ocupados manteniendo los sistemas core. Cualquier proyecto nuevo queda en un backlog de 6 a 12 meses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                <XCircle className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#141517]">Consultoría Teórica en Diapositivas</h3>
              <p className="text-xs text-[#52535A] leading-relaxed">
                Pagas decenas de miles de dólares por diagnósticos de 80 páginas. Al final de meses de reuniones, nadie en tu empresa tiene tiempo para programar lo sugerido.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                <XCircle className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-[#141517]">PoCs que Mueren sin Producción</h3>
              <p className="text-xs text-[#52535A] leading-relaxed">
                Se crean prototipos aislados en eventos de post-its que nadie mantiene el lunes. Falta un camino estructurado de transferencia técnica para llegar al piloto.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 04 — LA ALTERNATIVA KAMINO
            Comparativa de Modelo: 1 Problema -> Múltiples Enfoques
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                La Alternativa de Ejecución
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141517]">
                No te cases con una sola hipótesis. Haz que múltiples equipos compitan por resolverlo.
              </h2>
              <p className="text-sm sm:text-base text-[#52535A] mt-2 leading-relaxed">
                En lugar de contratar un único proveedor que cobra por meses de exploración a ciegas, Kamino pone a competir en paralelo a diferentes equipos técnicos con enfoques arquitectónicos diversos:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Modelo tradicional */}
              <div className="p-7 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#DC2626] block mb-2">
                    Consultoría o Desarrollo Tradicional
                  </span>
                  <h3 className="text-lg font-bold text-[#141517]">1 Problema → 1 Enfoque Único</h3>
                  <ul className="space-y-3 mt-4 text-xs text-[#52535A]">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                      <span>Un solo equipo interno o externo propone una única arquitectura.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                      <span>Meses de discovery cobrados antes de ver código ejecutándose.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                      <span>Alto costo de equivocarse si la tecnología elegida no escala o rinde.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E8E8E4] text-[11px] font-mono text-[#71717A]">
                  Resultado: Inversión alta, cero comparabilidad y riesgo operativo total.
                </div>
              </div>

              {/* Modelo Kamino */}
              <div className="p-7 rounded-2xl bg-[#141517] text-white border border-[#2B2D33] shadow-editorial flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA] block mb-2">
                    Modelo Kamino de Innovación Aplicada
                  </span>
                  <h3 className="text-lg font-bold text-white">1 Problema → 8 Equipos → 3 Finalistas → 1 Piloto</h3>
                  <ul className="space-y-3 mt-4 text-xs text-[#9CA3AF]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>Ocho enfoques técnicos distintos resuelven el mismo cuello de botella simultáneamente.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>Comparación objetiva de latencia, precisión, experiencia y costo de infraestructura.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>Decisión gerencial informada en semanas, seleccionando el mejor software para piloto.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2B2D36] text-[11px] font-mono text-[#34D399]">
                  ✓ Resultado: Menor riesgo, código funcional comprobado y aceleración real.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 05 — CÓMO FUNCIONA & MATRIZ DE RESPONSABILIDADES
            Paso a paso con asignación transparente de carga.
            ========================================================= */}
        <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
              Metodología & Operación
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141517]">
              Cuatro fases estructuradas sin desgastar a tu equipo de tecnología.
            </h2>
            <p className="text-sm sm:text-base text-[#52535A] mt-2 leading-relaxed">
              Kamino absorbe el 90% del trabajo pesado (convocatoria, admisiones, plataforma, mentoría técnica y logística). Tu empresa se enfoca únicamente en definir los criterios de éxito y evaluar resultados:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {steps.map((st) => (
              <div
                key={st.step}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs flex flex-col justify-between hover:border-[#141517] transition-all space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-7 h-7 rounded-lg bg-[#141517] text-white flex items-center justify-center font-mono font-bold text-xs">
                      {st.step}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#1846A3] bg-[#EEF4FF] px-2.5 py-0.5 rounded-md border border-[#D3E2FE]">
                      {st.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#141517]">{st.name}</h3>
                  <p className="text-xs sm:text-sm text-[#52535A] mt-2 leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E8E4] space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-[#71717A] font-mono text-[11px]">
                    <span>Carga:</span>
                    <span className="text-[#141517] font-semibold">{st.responsible}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#059669] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{st.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Responsibility Matrix */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] text-xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#1846A3] font-bold block mb-3">
              Matriz de Responsabilidades del Programa:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-xl bg-white border border-[#E8E8E4]">
                <span className="font-bold text-[#141517] block mb-1">KAMINO (Operador & Plataforma)</span>
                <ul className="space-y-1 text-[#52535A] text-[11px]">
                  <li>• Formulación técnica y bases del reto</li>
                  <li>• Convocatoria y filtro de builders senior</li>
                  <li>• Plataforma completa y soporte 24/7</li>
                  <li>• Calibración de jurados y Jury OS</li>
                  <li>• Acompañamiento post-evento al piloto</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E8E4]">
                <span className="font-bold text-[#141517] block mb-1">TU EMPRESA (Sponsor & Jurado)</span>
                <ul className="space-y-1 text-[#52535A] text-[11px]">
                  <li>• Contexto del problema y criterios de éxito</li>
                  <li>• Datasets anonimizados o sintéticos</li>
                  <li>• 1 hora semanal de feedback a finalistas</li>
                  <li>• Jurado decisor en el Demo Day</li>
                  <li>• Despliegue del piloto con el ganador</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E8E4]">
                <span className="font-bold text-[#141517] block mb-1">LOS BUILDERS (Equipos Técnicos)</span>
                <ul className="space-y-1 text-[#52535A] text-[11px]">
                  <li>• Desarrollo frontend, backend e IA</li>
                  <li>• Repositorio limpio con README</li>
                  <li>• Demos en video y arquitectura</li>
                  <li>• Pitch técnico ante el jurado</li>
                  <li>• Soporte en la fase de piloto</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 06 — QUÉ RECIBE LA EMPRESA
            Entregables tangibles y verificables.
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                Resultados Tangibles
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141517]">
                Qué recibe tu organización al finalizar el programa.
              </h2>
              <p className="text-sm sm:text-base text-[#52535A] mt-2 leading-relaxed">
                Nada queda en el aire ni se reduce a diplomas. Cada entrega está lista para ser auditada por tus equipos de ciberseguridad, arquitectura y operaciones:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                <FileCode2 className="w-5 h-5 text-[#1846A3]" />
                <h4 className="text-sm font-bold text-[#141517]">Repositorios de Código en GitHub</h4>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  Código fuente limpio, modular y documentado con licencias de uso claras y dependencias auditadas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                <Workflow className="w-5 h-5 text-[#1846A3]" />
                <h4 className="text-sm font-bold text-[#141517]">Diagramas de Arquitectura & APIs</h4>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  Especificación de microservicios, bases de datos y endpoints listos para integrarse con tus sistemas legacy.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                <Cpu className="w-5 h-5 text-[#1846A3]" />
                <h4 className="text-sm font-bold text-[#141517]">Benchmarks de Rendimiento & IA</h4>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  Métricas de precisión, latencia por inferencia, costo estimado de tokens y tasa de acierto cuantitativa.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#1846A3]" />
                <h4 className="text-sm font-bold text-[#141517]">Scoring Consolidado con Jury OS</h4>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  Rúbricas matemáticas ponderadas al 100% que eliminan sesgos personales y documentan la deliberación.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                <Users className="w-5 h-5 text-[#1846A3]" />
                <h4 className="text-sm font-bold text-[#141517]">Talento Técnico Evaluado en Vivo</h4>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  Conoce de primera mano cómo resuelven problemas bajo presión los mejores ingenieros de la región.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-2">
                <GitBranch className="w-5 h-5 text-[#1846A3]" />
                <h4 className="text-sm font-bold text-[#141517]">Roadmap de Piloto en Producción</h4>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  Plan de 60 a 90 días con hitos de staging, validación de seguridad y contrato de implementación formal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 07 — CASOS DE USO EMPRESARIALES
            Tarjetas orientadas a problemas reales de negocio.
            ========================================================= */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
              Aplicaciones de Negocio
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141517]">
              ¿Qué tipo de retos estructuramos habitualmente?
            </h2>
            <p className="text-sm sm:text-base text-[#52535A] mt-2 leading-relaxed">
              Desde cuellos de botella en operaciones manuales hasta pilotos de IA generativa con salvaguardas corporativas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <div
                  key={uc.title}
                  className="p-6 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs flex flex-col justify-between hover:border-[#141517] transition-all space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1846A3] bg-[#EEF4FF] px-2 py-0.5 rounded">
                        {uc.category}
                      </span>
                      <Icon className="w-4 h-4 text-[#71717A]" />
                    </div>
                    <h3 className="text-base font-bold text-[#141517]">{uc.title}</h3>
                    <p className="text-xs text-[#52535A] leading-relaxed">{uc.description}</p>
                  </div>

                  <div className="pt-3 border-t border-[#E8E8E4] text-xs">
                    <span className="text-[10px] font-mono text-[#71717A] uppercase block">Entregable:</span>
                    <p className="text-[#0E357E] font-medium text-[11px] mt-0.5">{uc.deliverable}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 08 — INDUSTRIAS PRIORITARIAS
            Beachhead financiero y sectores intensivos en operación.
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                Foco Sectorial
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141517]">
                Industrias con mayor retorno en retos de innovación técnica.
              </h2>
              <p className="text-xs sm:text-sm text-[#52535A] mt-2 leading-relaxed">
                Priorizamos organizaciones con altos volúmenes operativos y necesidad de aceleración tecnológica:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {targetIndustries.map((ind) => (
                <div key={ind.name} className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] text-xs space-y-1">
                  <h4 className="font-bold text-[#141517] text-sm">{ind.name}</h4>
                  <p className="text-[#52535A] leading-relaxed">{ind.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 09 — ASÍ FUNCIONA EN LA PRÁCTICA (CASO DEMOSTRATIVO)
            Marcado inequívoco como simulación/demo.
            ========================================================= */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="p-6 sm:p-10 rounded-3xl bg-[#141517] text-white border border-[#2B2D33] shadow-editorial-elevated space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#2B2D36]">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#252830] text-[#93C5FD] text-[11px] font-mono font-semibold uppercase tracking-wider mb-2 border border-[#3B82F6]/30">
                  <span>CASO DEMOSTRATIVO · SIMULACIÓN ILUSTRATIVA</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
                  Así funciona un challenge en la práctica: Conciliación Documental
                </h3>
              </div>
              <span className="px-3 py-1 rounded-lg bg-[#1C1E24] text-[#9CA3AF] text-xs font-mono border border-[#2B2D36] shrink-0">
                Entorno Simulado de Referencia
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs text-[#9CA3AF]">
              <div className="lg:col-span-4 p-4 rounded-xl bg-[#1C1E24] border border-[#2B2D36] space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#DC2626] font-bold block">1. Problema de Negocio</span>
                <h4 className="text-sm font-bold text-white">4.5 Días para Auditar Contratos</h4>
                <p className="leading-relaxed">
                  Una entidad financiera tardaba días en revisar manualmente acuerdos mercantiles contra facturas, generando multas y fricción con proveedores.
                </p>
              </div>

              <div className="lg:col-span-4 p-4 rounded-xl bg-[#1C1E24] border border-[#2B2D36] space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#60A5FA] font-bold block">2. Challenge Estructurado</span>
                <h4 className="text-sm font-bold text-white">8 Equipos · 3 Tracks Técnicos</h4>
                <p className="leading-relaxed">
                  Kamino estructuró un reto de 4 semanas con datasets sintéticos de contratos, rúbrica ponderada al 100% y mentores de IA aplicada.
                </p>
              </div>

              <div className="lg:col-span-4 p-4 rounded-xl bg-[#1C1E24] border border-[#2B2D36] space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#34D399] font-bold block">3. Resultado Hacia Piloto</span>
                <h4 className="text-sm font-bold text-white">Prototipo Redujo Tiempo a 18 Segundos</h4>
                <p className="leading-relaxed">
                  El equipo ganador desarrolló un pipeline con OCR y LLM local verificando cláusulas con 99% de precisión, pasando formalmente a fase de piloto.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#2B2D36]">
              <span className="text-xs text-[#71717A]">
                ¿Quieres explorar la consola de supervisión completa de este caso demostrativo?
              </span>
              <Link href="/demo">
                <Button size="sm" className="bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold">
                  Explorar demo interactiva en vivo →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 10 — PLATAFORMA TECNOLÓGICA
            Explicada como evidencia tras el valor comercial.
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-6xl mx-auto space-y-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block">
              Infraestructura Propia de Operación
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141517] max-w-3xl mx-auto">
              Así supervisa tu organización los prototipos que se construyen.
            </h2>
            <p className="text-sm sm:text-base text-[#52535A] max-w-2xl mx-auto leading-relaxed">
              Sin hojas de cálculo desordenadas ni mensajes de chat dispersos: un entorno unificado para administrar postulaciones, repositorios en GitHub, deliberaciones ciegas y el pipeline hacia producción.
            </p>

            <div className="pt-6">
              <HeroProductWindow />
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 11 — ENTERPRISE READINESS & GOBERNANZA
            IP, confidencialidad, sandbox y datos seguros.
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block">
                Seguridad & Blindaje Legal
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141517]">
                Tus datos y tu propiedad intelectual permanecen 100% protegidos.
              </h2>
              <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                Entendemos los requerimientos de compliance de corporaciones medianas y grandes. Diseñamos cada challenge con salvaguardas operativas y legales desde el día uno:
              </p>
              <div className="pt-2">
                <Link href="/trust">
                  <Button variant="outline" size="sm" className="font-semibold text-xs">
                    Ver Trust Center & Políticas de Datos →
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white border border-[#E8E8E4] shadow-xs space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#10B981]" />
                <h4 className="text-sm font-bold text-[#141517]">Acuerdos de Confidencialidad (NDA)</h4>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  Todo participante y mentor firma acuerdos vinculantes antes de acceder a las especificaciones y datasets del reto.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E8E4] shadow-xs space-y-2">
                <FileCode2 className="w-5 h-5 text-[#10B981]" />
                <h4 className="text-sm font-bold text-[#141517]">Propiedad Intelectual Clara</h4>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  Las bases del programa estipulan licencias exclusivas o cesión de derechos para que tu empresa desarrolle el piloto con total tranquilidad.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E8E4] shadow-xs space-y-2">
                <Database className="w-5 h-5 text-[#10B981]" />
                <h4 className="text-sm font-bold text-[#141517]">Datasets Sintéticos & Anonimizados</h4>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  Estructuramos datos de prueba representativos pero completamente desprovistos de información personal o sensible.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E8E4] shadow-xs space-y-2">
                <Lock className="w-5 h-5 text-[#10B981]" />
                <h4 className="text-sm font-bold text-[#141517]">Entornos Sandbox Aislados</h4>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  Acceso controlado a APIs simuladas sin conexión a tus bases de datos productivas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 12 — FAQ ESTRATÉGICO
            Objeciones directas de CIOs y Directores de Innovación.
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block">
                Preguntas Frecuentes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                Respuestas claras a las dudas habituales de líderes empresariales.
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#E8E8E4] shadow-xs space-y-2">
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

            <div className="text-center pt-4">
              <Link href="/faq" className="text-xs font-semibold text-[#1846A3] hover:underline">
                Ver todas las preguntas frecuentes de propiedad intelectual y operación →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECCIÓN 13 — LEAD MAGNET & CTA FINAL
            Herramienta interactiva ChallengeAssessment embebida.
            ========================================================= */}
        <section id="assessment" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider border border-[#D3E2FE]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diagnóstico Técnico Sin Costo</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141517] leading-tight">
              ¿Qué problema de tu empresa quieres resolver este mes?
            </h2>
            <p className="text-sm sm:text-base text-[#52535A] max-w-2xl mx-auto leading-relaxed">
              Utiliza el calculador de retos a continuación para obtener un diagnóstico inmediato de tracks, perfiles técnicos y entregables, o envíanos tu caso para una llamada técnica de viabilidad.
            </p>
          </div>

          <div className="pt-2">
            <ChallengeAssessment />
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#71717A]">
            <span>¿Prefieres hablar directamente con un director técnico de Kamino?</span>
            <a
              href={BRAND.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#1846A3] hover:underline flex items-center gap-1"
            >
              Agendar llamada de 30 minutos <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
