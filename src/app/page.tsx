import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Zap,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const values = [
    {
      icon: Zap,
      title: "De Problema a Código Real",
      desc: "Menos PowerPoints y diagnósticos teóricos. Recibes prototipos de software ejecutables listos para probar en tu infraestructura.",
    },
    {
      icon: GitBranch,
      title: "Múltiples Soluciones en Paralelo",
      desc: "En lugar de apostar por una sola hipótesis interna, comparas de 3 a 5 arquitecturas construidas por equipos senior en competencia.",
    },
    {
      icon: ShieldCheck,
      title: "Cero Desgaste de TI",
      desc: "Kamino absorbe el 95% de la carga técnica y logística. Tus líderes de tecnología solo aportan feedback y evalúan el resultado final.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Discovery & Datasets",
      time: "Semanas 1 y 2",
      desc: "Convertimos el cuello de botella en especificaciones de ingeniería con datasets sintéticos seguros y contratos de API.",
    },
    {
      num: "02",
      title: "Sprint de Hacking",
      time: "Semana 3",
      desc: "Equipos de élite compiten programando en vivo con sprints de retroalimentación de tus líderes técnicos.",
    },
    {
      num: "03",
      title: "Pase a Piloto",
      time: "Semanas 4 a 8",
      desc: "Evaluación objetiva, transferencia de repositorios en GitHub y acompañamiento técnico durante 60 días.",
    },
  ];

  const comparison = [
    {
      factor: "Tiempo hasta ver software",
      consultora: "4 a 6 meses",
      kamino: "4 semanas",
    },
    {
      factor: "Entregable tangible",
      consultora: "Diapositivas y reportes PDF",
      kamino: "Código en GitHub + Docker",
    },
    {
      factor: "Arquitecturas probadas",
      consultora: "1 propuesta cerrada",
      kamino: "3 a 5 enfoques en paralelo",
    },
    {
      factor: "Dedicación de tu equipo",
      consultora: "Comités semanales lentos",
      kamino: "2h semanales de feedback",
    },
  ];

  const faqs = [
    {
      q: "¿Por qué un hackathon y no una consultora tradicional?",
      a: "Las consultoras cobran meses por análisis teóricos con un único equipo. Con Kamino obtienes múltiples equipos compitiendo por construir la solución más eficiente con código real en 4 semanas.",
    },
    {
      q: "¿Quién conserva la propiedad intelectual (IP)?",
      a: "Tu empresa. Todo el código fuente, contenedores Docker y documentación técnica se transfieren bajo cesión total de derechos o licencias comerciales exclusivas acordadas previamente.",
    },
    {
      q: "¿Qué datos tenemos que compartir con los participantes?",
      a: "Ningún dato productivo ni sensible. Diseñamos datasets sintéticos o anonimizados y entornos sandbox aislados bajo acuerdos de confidencialidad (NDA) vinculantes.",
    },
    {
      q: "¿Cuánto tiempo le exige este proceso a nuestro equipo?",
      a: "Solo 2 horas de inmersión inicial, breves checkpoints de mentoría y la sesión de deliberación en el Demo Day. Nosotros gestionamos toda la operación técnica y logística.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1">
        {/* =========================================================
            HERO SIMPLE, ELEGANTE Y ESPACIOSO
            ========================================================= */}
        <section className="pt-20 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E8E4] text-[#141517] text-xs font-mono font-medium shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#1846A3]" />
            <span>Kamino · Innovación Abierta & Hackathons B2B</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#141517] tracking-tight leading-[1.08]">
            Convierte los problemas de tu empresa en{" "}
            <span className="text-[#1846A3]">software que sí se construye.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#52535A] max-w-2xl mx-auto leading-relaxed">
            Tu equipo interno no da abasto con el backlog y las consultoras tradicionales cobran fortunas por diapositivas teóricas. Operamos hackathons técnicos donde múltiples equipos compiten por entregarte prototipos funcionales en 4 semanas.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto sm:max-w-none">
            <Link href="/start" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#141517] hover:bg-[#252830] text-white font-semibold shadow-editorial px-7 py-3 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <span>Evaluar un reto para mi empresa</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/empresas" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[#DCDCD5] bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <span>Cómo funciona</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#71717A]" />
              </Button>
            </Link>
          </div>

          {/* Simple Clean Milestone Preview Card */}
          <div className="pt-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E8E4]">
                <div>
                  <span className="text-xs font-mono uppercase text-[#71717A] tracking-wider block">
                    Metodología de 4 Semanas
                  </span>
                  <h3 className="text-lg font-bold text-[#141517]">
                    De un problema de negocio a un piloto productivo
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] text-xs font-mono font-medium">
                  Resultados Tangibles
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold text-[#1846A3] block">
                    01 · DEFINICIÓN
                  </span>
                  <h4 className="text-sm font-bold text-[#141517]">
                    Reto Técnico & Datos
                  </h4>
                  <p className="text-xs text-[#52535A] leading-relaxed">
                    Convertimos el cuello de botella en especificaciones de API y datasets sintéticos seguros.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold text-[#1846A3] block">
                    02 · COMPETENCIA
                  </span>
                  <h4 className="text-sm font-bold text-[#141517]">
                    Hacking con Mentoría
                  </h4>
                  <p className="text-xs text-[#52535A] leading-relaxed">
                    Múltiples equipos compiten programando con retroalimentación de tus líderes técnicos.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold text-[#1846A3] block">
                    03 · RESULTADO
                  </span>
                  <h4 className="text-sm font-bold text-[#141517]">
                    Código en Producción
                  </h4>
                  <p className="text-xs text-[#52535A] leading-relaxed">
                    Repositorios transferidos a tu empresa y 60 días de soporte hacia el piloto productivo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/builders"
              className="inline-flex items-center gap-1.5 text-xs text-[#71717A] hover:text-[#1846A3] transition-colors"
            >
              <span>¿Quieres competir como programador o diseñador?</span>
              <span className="font-semibold underline underline-offset-4 text-[#141517] hover:text-[#1846A3]">
                Explorar hackathons abiertos →
              </span>
            </Link>
          </div>
        </section>

        {/* =========================================================
            3 PILARES CLAVE (SENCILLO Y MODERNO)
            ========================================================= */}
        <section className="py-16 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                ¿Por qué innovar con un hackathon estructurado?
              </h2>
              <p className="text-sm text-[#52535A] mt-2">
                Una alternativa más rápida que consultoras tradicionales y sin saturar a tu equipo de TI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#E8E8E4] space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] text-[#1846A3] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#141517]">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            CÓMO FUNCIONA (3 PASOS)
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-left space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase text-[#1846A3] tracking-wider block mb-1">
              La Metodología
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
              Cómo te entregamos software en 4 semanas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="p-6 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-[#141517] text-white flex items-center justify-center font-mono font-bold text-xs">
                    {s.num}
                  </span>
                  <span className="text-xs font-mono text-[#71717A]">{s.time}</span>
                </div>
                <h3 className="text-base font-bold text-[#141517]">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            COMPARATIVA DIRECTA
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                Kamino vs. Consultora Tradicional
              </h2>
              <p className="text-xs sm:text-sm text-[#52535A] mt-1.5">
                Comparativa de tiempos, entregables y riesgos al validar nuevas soluciones.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E8E8E4] bg-white overflow-hidden shadow-xs text-xs">
              <div className="grid grid-cols-3 p-4 bg-[#F4F4EE] border-b border-[#E8E8E4] font-mono font-bold text-[#141517]">
                <span>Dimensión</span>
                <span>Consultora Tradicional</span>
                <span className="text-[#1846A3]">Kamino Challenge</span>
              </div>

              <div className="divide-y divide-[#E8E8E4] text-[#52535A]">
                {comparison.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 p-4 items-center">
                    <span className="font-bold text-[#141517]">{row.factor}</span>
                    <span>{row.consultora}</span>
                    <span className="font-bold text-[#10B981]">{row.kamino}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ CONCISO
            ========================================================= */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-left space-y-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs space-y-2"
              >
                <h3 className="text-sm font-bold text-[#141517]">{f.q}</h3>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            CTA FINAL SENCILLO
            ========================================================= */}
        <section className="py-20 bg-white border-t border-[#E8E8E4] px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141517] tracking-tight">
            ¿Tienes un reto técnico en tu empresa?
          </h2>
          <p className="text-sm text-[#52535A] max-w-xl mx-auto leading-relaxed">
            Analizamos tu cuello de botella y te proponemos la arquitectura y formato adecuado sin costo.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto sm:max-w-none">
            <Link href="/start" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#1846A3] hover:bg-[#133882] text-white font-semibold px-8 py-3 rounded-xl text-sm"
              >
                Diseñar mi reto ahora
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
                className="w-full sm:w-auto border-[#DCDCD5] bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold px-7 py-3 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#1846A3]" />
                <span>Agendar llamada técnica</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
