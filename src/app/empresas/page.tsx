import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import {
  Building2,
  Workflow,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Scale,
  FolderKanban,
  HelpCircle,
  ArrowUpRight,
} from "lucide-react";

export default function EmpresasPage() {
  const models = [
    {
      title: "Challenge Blueprint",
      tag: "Entrada de Bajo Riesgo",
      desc: "Discovery técnico profundo para transformar dolores operativos difusos en especificaciones de ingeniería, reglas de negocio, datasets de prueba sintéticos y rúbrica ponderada.",
      timeline: "1 a 2 semanas",
      teams: "Trabajo directo Kamino + Líderes de tu empresa",
      outcome: "Documento de especificación técnica de arquitectura listo para ejecución.",
      cta: "Diseñar Blueprint",
    },
    {
      title: "Pilot Challenge",
      tag: "Validación Rápida",
      desc: "Sprint ágil enfocado en validar una tecnología, API o automatización específica con entre 6 y 10 equipos compitiendo por entregar la solución más eficiente.",
      timeline: "3 a 4 semanas",
      teams: "6 a 10 equipos multidisciplinarios",
      outcome: "3 a 5 prototipos ejecutables con código en GitHub y benchmarks de rendimiento.",
      cta: "Cotizar Pilot Challenge",
    },
    {
      title: "Signature Corporate Hackathon",
      tag: "Programa Insignia",
      desc: "Convocatoria regional masiva, múltiples tracks simultáneos, operación presencial o híbrida en Bogotá/Medellín y acompañamiento de 60 a 90 días hacia el piloto.",
      timeline: "4 a 6 semanas",
      teams: "20 a 40 equipos en competencia",
      outcome: "10 a 20 soluciones evaluadas por directores con pase formal a piloto corporativo.",
      cta: "Cotizar Signature",
    },
    {
      title: "Internal Challenge (Silos Cero)",
      tag: "Cultura & Talento Interno",
      desc: "Activa a colaboradores de distintas áreas (tecnología, producto, operaciones, riesgo y legal) para construir soluciones sobre ineficiencias internas.",
      timeline: "3 días inmersivos",
      teams: "Equipos cruzados de tu organización",
      outcome: "Proyectos viables nacidos de quienes conocen el negocio por dentro.",
      cta: "Cotizar Reto Interno",
    },
  ];

  const enterpriseFaqs = [
    {
      q: "¿Quién conserva la propiedad intelectual (IP) de las soluciones desarrolladas?",
      a: "Tu organización define las condiciones legales en las bases del reto antes de la convocatoria. En el modelo corporativo habitual, los participantes otorgan a la empresa patrocinadora la licencia exclusiva para desarrollar el piloto o la opción prioritaria de adquisición comercial.",
    },
    {
      q: "¿Necesitamos tener el problema 100% especificado antes de contactar a Kamino?",
      a: "No. Nuestro equipo metodológico realiza sesiones de inmersión y discovery técnico para traducir un cuello de botella general en especificaciones claras de ingeniería, datasets seguros y criterios cuantitativos de éxito.",
    },
    {
      q: "¿Cómo garantizan la seguridad y privacidad si compartimos información o APIs?",
      a: "Proveemos entornos de sandbox aislados, datasets sintéticos y acuerdos de confidencialidad estrictos (NDA) vinculantes para todos los participantes aceptados. Ningún dato sensible de producción es expuesto.",
    },
    {
      q: "¿Qué sucede después del Demo Day?",
      a: "Acompañamos durante 60 a 90 días la fase de piloto a través de nuestro Project Pipeline: establecemos hitos de staging, acuerdos de integración y facilitamos la transferencia del código hacia los servidores de tu empresa.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1">
        {/* =========================================================
            HERO B2B PROFUNDO — PARA CIO, VP INNOVACIÓN, CTO
            ========================================================= */}
        <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCDCD5] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
            <Building2 className="w-3.5 h-3.5" />
            <span>Innovación Abierta B2B para Medianas y Grandes Empresas</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#141517] tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Transforma cuellos de botella de tu empresa en software funcionando y listo para piloto.
          </h1>

          <p className="text-base sm:text-xl text-[#52535A] max-w-3xl mx-auto leading-relaxed font-normal">
            Tu equipo interno no da abasto y las consultoras tradicionales cobran fortunas por diagnósticos teóricos de meses. Te ayudamos a estructurar el reto, convocar al mejor talento técnico y entregarte múltiples prototipos de software probados en 4 semanas.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link href="/start" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-[#141517] hover:bg-[#252830] text-white font-semibold shadow-editorial px-8 py-3.5">
                Evaluar un reto para mi empresa
              </Button>
            </Link>
            <a
              href={BRAND.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#DCDCD5] text-[#141517] hover:bg-[#F4F4EE] font-semibold px-6 py-3.5">
                Agendar llamada técnica de 30 min
              </Button>
            </a>
          </div>

          <p className="text-xs text-[#71717A] font-mono">
            Menos PowerPoints. Más productos funcionando. Cero desgaste logístico para tu equipo interno.
          </p>
        </section>

        {/* =========================================================
            COMPARATIVA DE MODELO: CONSULTORÍA VS INTERNO VS KAMINO
            ========================================================= */}
        <section className="py-16 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                Comparativa de Métodos
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                ¿Por qué un challenge estructurado es más eficiente para explorar soluciones?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Consultoría */}
              <div className="p-6 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#DC2626] block">
                  Consultora Tradicional
                </span>
                <ul className="space-y-2.5 text-xs text-[#52535A]">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>Un solo equipo con una única visión cerrada.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>Meses de presentaciones teóricas sin código ejecutable.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span>Honorarios elevados que pagan horas de reuniones, no prototipos.</span>
                  </li>
                </ul>
              </div>

              {/* Desarrollo Interno */}
              <div className="p-6 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D97706] block">
                  Desarrollo Interno (In-house)
                </span>
                <ul className="space-y-2.5 text-xs text-[#52535A]">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Backlog saturado atendiendo el día a día del negocio.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Dificultad para destinar talento senior a explorar nuevas tecnologías.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                    <span>Tiempos de entrega de 6 a 12 meses por prioridades operativas.</span>
                  </li>
                </ul>
              </div>

              {/* Kamino */}
              <div className="p-6 rounded-2xl bg-[#141517] text-white border border-[#2B2D33] shadow-editorial space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA] block">
                  Modelo Kamino
                </span>
                <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Múltiples equipos explorando arquitecturas y modelos distintos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Prototipos de software ejecutables entregados en 4 semanas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>Cero desgaste para tu equipo y acompañamiento hasta el piloto.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FORMATOS Y ALCANCE DE SERVICIO
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
              Formatos de Programa
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
              Diseñado según la madurez y urgencia de tu reto
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {models.map((m) => (
              <div
                key={m.title}
                className="p-7 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs flex flex-col justify-between hover:border-[#141517] transition-all space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EEF4FF] text-[#1846A3] border border-[#D3E2FE]">
                      {m.tag}
                    </span>
                    <span className="text-xs font-semibold text-[#71717A]">{m.timeline}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#141517]">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">{m.desc}</p>
                  
                  <div className="p-3.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-1 text-xs">
                    <p className="text-[#71717A]"><strong className="text-[#141517]">Escala:</strong> {m.teams}</p>
                    <p className="text-[#71717A]"><strong className="text-[#141517]">Entregable:</strong> {m.outcome}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E8E4] flex items-center justify-between">
                  <Link href="/start" className="text-xs font-bold text-[#1846A3] hover:underline flex items-center gap-1">
                    {m.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            GOBERNANZA, PLATAFORMA & JURY OS
            ========================================================= */}
        <section className="py-20 bg-[#141517] text-white border-y border-[#2B2D33] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#60A5FA] block mb-1">
                Gobernanza & Operación
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                La plataforma que tu comité de tecnología necesita para supervisar
              </h2>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-2">
                Monitorea postulaciones, código en GitHub, deliberación de jurados y el traspaso a piloto desde una única consola.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#1C1E24] border border-[#2B2D36] space-y-3">
                <Workflow className="w-6 h-6 text-[#60A5FA]" />
                <h4 className="text-base font-bold">Consola de Control del Reto</h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Supervisa aplicaciones, equipos formados, estado de repositorios y sesiones de mentoría con alertas automáticas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1C1E24] border border-[#2B2D36] space-y-3">
                <Scale className="w-6 h-6 text-[#34D399]" />
                <h4 className="text-base font-bold">Jury OS sin Hojas de Cálculo</h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Rúbrica ponderada que suma exactamente 100%, evaluación a ciegas para evitar sesgos y notas confidenciales para el comité.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1C1E24] border border-[#2B2D36] space-y-3">
                <FolderKanban className="w-6 h-6 text-[#A78BFA]" />
                <h4 className="text-base font-bold">Project Pipeline Post-Evento</h4>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Tablero Kanban para llevar los prototipos ganadores a validación de seguridad, acuerdos de IP y despliegue real en producción.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ EMPRESARIAL
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
          <div className="mb-10 text-center">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
              Preguntas Frecuentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
              Dudas comunes de líderes de innovación y tecnología
            </h2>
          </div>

          <div className="space-y-4">
            {enterpriseFaqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs space-y-2">
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
        </section>

        {/* =========================================================
            CTA FINAL B2B
            ========================================================= */}
        <section className="py-20 bg-[#141517] text-white px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              ¿Listo para estructurar el reto de tu organización?
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Agenda una sesión técnica de 30 minutos sin costo con nuestros directores de metodología. Analizamos tu problema y te entregamos una propuesta preliminar de formato.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/start" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-[#1846A3] hover:bg-[#133882] text-white font-semibold">
                  Evaluar mi reto ahora
                </Button>
              </Link>
              <a
                href={BRAND.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#2B2D36] text-white hover:bg-[#1F2228] font-semibold">
                  Agendar en calendario <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
