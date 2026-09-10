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

export const metadata = {
  title: "Hackathons Corporativos | Kamino",
  description:
    "Transforma los problemas de tu empresa en software funcionando y listo para piloto a través de hackathons técnicos.",
};

export default function EmpresasPage() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Datasets",
      time: "Semanas 1 y 2",
      desc: "Traducimos el problema de negocio en requerimientos técnicos, datasets sintéticos y bases legales bajo estricto NDA.",
    },
    {
      num: "02",
      title: "48 Horas de Hacking",
      time: "Semana 3",
      desc: "Múltiples equipos compiten programando en vivo con sprints de retroalimentación de tus líderes técnicos.",
    },
    {
      num: "03",
      title: "Pase a Piloto",
      time: "Semanas 4 a 8",
      desc: "Demo Day con evaluación objetiva, entrega de repositorios en GitHub y 60 días de acompañamiento a producción.",
    },
  ];

  const formats = [
    {
      title: "Hackathon Express",
      tag: "48 Horas",
      desc: "Validación ágil de nuevas tecnologías, modelos de IA o APIs en un sprint de fin de semana.",
      deliverable: "3 a 5 prototipos funcionales con código en GitHub.",
      popular: false,
    },
    {
      title: "Hackathon Insignia",
      tag: "4 Semanas",
      desc: "Programa integral con convocatoria regional abierta, múltiples tracks técnicos y pase formal a piloto.",
      deliverable: "8 a 15 soluciones de software completas + 60 días de acompañamiento.",
      popular: true,
    },
    {
      title: "Hackathon Interno",
      tag: "In-house",
      desc: "Activa a tus propios colaboradores de ingeniería, producto y operaciones para hackear ineficiencias internas.",
      deliverable: "Prototipos viables construidos por quienes conocen tu negocio.",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "¿Quién conserva la propiedad intelectual (IP) del código?",
      a: "Tu organización. Las bases del reto estipulan la cesión de derechos o licenciamiento comercial exclusivo a favor de tu empresa. Todos los repositorios se transfieren directamente a tus cuentas corporativas.",
    },
    {
      q: "¿Qué datos tenemos que compartir con los participantes?",
      a: "Ningún dato sensible ni de producción. Creamos datasets sintéticos y entornos sandbox aislados, y todos los participantes firman acuerdos de confidencialidad (NDA) vinculantes.",
    },
    {
      q: "¿Cuánto tiempo requiere este proceso de nuestro equipo de TI?",
      a: "Solo 2 horas para la sesión de discovery inicial, breves checkpoints de mentoría técnica y la deliberación en el Demo Day. Kamino absorbe toda la carga operativa y técnica.",
    },
    {
      q: "¿Qué sucede después del evento con la solución ganadora?",
      a: "Acompañamos durante 60 días el despliegue del prototipo en ambiente de staging para resolver dudas de arquitectura y facilitar su pase a producción.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1">
        {/* =========================================================
            HERO SIMPLE & AIRY
            ========================================================= */}
        <section className="pt-20 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E8E4] text-[#141517] text-xs font-mono font-medium shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#1846A3]" />
            <span>Hackathons Corporativos B2B</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#141517] tracking-tight leading-[1.08]">
            Convierte los problemas de tu empresa en{" "}
            <span className="text-[#1846A3]">software funcionando.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#52535A] max-w-2xl mx-auto leading-relaxed">
            Menos diapositivas teóricas, más código ejecutable. Diseñamos y operamos hackathons donde múltiples equipos de ingenieros compiten por construir la mejor solución para tu negocio en 4 semanas.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto sm:max-w-none">
            <Link href="/start" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#141517] hover:bg-[#252830] text-white font-semibold shadow-editorial px-7 py-3 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <span>Cotizar un Hackathon</span>
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
                className="w-full sm:w-auto border-[#DCDCD5] bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#1846A3]" />
                <span>Agendar llamada técnica</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
              </Button>
            </a>
          </div>

          {/* Simple Clean Milestone Preview Card */}
          <div className="pt-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E8E4]">
                <div>
                  <span className="text-xs font-mono uppercase text-[#71717A] tracking-wider block">
                    El Modelo Kamino
                  </span>
                  <h3 className="text-lg font-bold text-[#141517]">
                    De un cuello de botella a un piloto en 4 semanas
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0] text-xs font-mono font-medium">
                  Cero Desgaste de TI
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold text-[#1846A3] block">
                    01 · DEFINICIÓN
                  </span>
                  <h4 className="text-sm font-bold text-[#141517]">
                    Especificación de Ingeniería
                  </h4>
                  <p className="text-xs text-[#52535A] leading-relaxed">
                    Convertimos el dolor en contratos de API, datasets sintéticos y rúbrica ponderada.
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
                    Múltiples equipos explorando arquitecturas distintas con guía de tus líderes técnicos.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold text-[#1846A3] block">
                    03 · RESULTADO
                  </span>
                  <h4 className="text-sm font-bold text-[#141517]">
                    Software en Producción
                  </h4>
                  <p className="text-xs text-[#52535A] leading-relaxed">
                    Repositorios Git en tus servidores y 60 días de acompañamiento hasta el piloto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3 VALORES CLAVE (LIMPIO Y SENCILLO)
            ========================================================= */}
        <section className="py-16 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                ¿Por qué resolver retos con un hackathon?
              </h2>
              <p className="text-sm text-[#52535A] mt-2">
                Un método ágil para validar soluciones técnicas sin sobrecargar a tu equipo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#E8E8E4] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] text-[#1846A3] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141517]">Velocidad Real</h3>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                  En 4 semanas obtienes lo que a una consultora le toma 6 meses de diagnósticos teóricos en diapositivas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#E8E8E4] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#065F46] flex items-center justify-center font-bold">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141517]">Múltiples Opciones</h3>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                  En vez de apostar por una sola hipótesis interna, comparas de 3 a 5 arquitecturas construidas en paralelo.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FBFBFA] border border-[#E8E8E4] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FDF4FF] text-[#86198F] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141517]">Cero Riesgo Legal</h3>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                  Propiedad intelectual 100% de tu empresa, datasets sintéticos y acuerdos de confidencialidad estrictos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CÓMO FUNCIONA (3 PASOS)
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-left space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase text-[#1846A3] tracking-wider block mb-1">
              Paso a Paso
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
              Un proceso simple, riguroso y predecible
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
            FORMATOS DE SERVICIO (TARJETAS LIMPIAS)
            ========================================================= */}
        <section className="py-20 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                Formatos según la urgencia de tu reto
              </h2>
              <p className="text-sm text-[#52535A] mt-2">
                Elige el modelo que mejor se adapte al tamaño de tu desafío técnico.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {formats.map((f) => (
                <div
                  key={f.title}
                  className={`p-6 rounded-2xl border flex flex-col justify-between space-y-5 transition-all ${
                    f.popular
                      ? "bg-white border-[#1846A3] shadow-md ring-1 ring-[#1846A3]"
                      : "bg-[#FBFBFA] border-[#E8E8E4]"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase text-[#1846A3]">
                        {f.tag}
                      </span>
                      {f.popular && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1846A3] text-white font-bold">
                          Recomendado
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-[#141517]">{f.title}</h3>
                    <p className="text-xs text-[#52535A] leading-relaxed">{f.desc}</p>
                    <div className="pt-3 border-t border-[#E8E8E4] text-xs">
                      <span className="text-[#71717A] block font-mono text-[10px] uppercase">
                        Entregable:
                      </span>
                      <span className="font-semibold text-[#141517]">{f.deliverable}</span>
                    </div>
                  </div>

                  <Link href="/start" className="block pt-2">
                    <Button
                      size="sm"
                      className={`w-full font-bold text-xs py-2.5 rounded-xl ${
                        f.popular
                          ? "bg-[#1846A3] hover:bg-[#133882] text-white"
                          : "bg-[#141517] hover:bg-[#252830] text-white"
                      }`}
                    >
                      Cotizar este formato
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            COMPARATIVA CONCISA
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
              Kamino vs. Otros Métodos
            </h2>
            <p className="text-xs sm:text-sm text-[#52535A] mt-1.5">
              Por qué un sprint técnico estructurado entrega mejores resultados.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E8E8E4] bg-white overflow-hidden shadow-xs text-xs">
            <div className="grid grid-cols-3 p-4 bg-[#F4F4EE] border-b border-[#E8E8E4] font-mono font-bold text-[#141517]">
              <span>Criterio</span>
              <span>Consultora Tradicional</span>
              <span className="text-[#1846A3]">Hackathon Kamino</span>
            </div>

            <div className="divide-y divide-[#E8E8E4] text-[#52535A]">
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-bold text-[#141517]">Tiempo a software</span>
                <span>4 a 6 meses</span>
                <span className="font-bold text-[#10B981]">4 semanas</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-bold text-[#141517]">Entregable</span>
                <span>Diapositivas y reportes PDF</span>
                <span className="font-bold text-[#10B981]">Código real en GitHub + Docker</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-bold text-[#141517]">Opciones evaluadas</span>
                <span>1 sola hipótesis cerrada</span>
                <span className="font-bold text-[#10B981]">3 a 5 arquitecturas en paralelo</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-bold text-[#141517]">Carga de tu equipo</span>
                <span>Comités desgastantes</span>
                <span className="font-bold text-[#10B981]">Solo 2h semanales de feedback</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ CONCISO
            ========================================================= */}
        <section className="py-16 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((f, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FBFBFA] border border-[#E8E8E4] space-y-2"
                >
                  <h3 className="text-sm font-bold text-[#141517]">{f.q}</h3>
                  <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA FINAL SENCILLO
            ========================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141517] tracking-tight">
            ¿Listo para estructurar el reto de tu empresa?
          </h2>
          <p className="text-sm text-[#52535A] max-w-xl mx-auto leading-relaxed">
            Analizamos tu problema técnico y te entregamos una propuesta preliminar de formato sin costo en 48 horas.
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
