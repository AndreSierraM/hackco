import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/config/brand";
import {
  Code2,
  Cpu,
  ArrowRight,
  Terminal,
  FileCode2,
  Workflow,
} from "lucide-react";

export default function DevRelPage() {
  const outcomes = [
    {
      title: "Adopción Real de APIs & SDKs",
      desc: "Cientos de desarrolladores integrando tus endpoints en aplicaciones de producción reales, no en tutoriales pasivos.",
      icon: Terminal,
    },
    {
      title: "Pruebas de Estrés & Documentación",
      desc: "Feedback técnico directo sobre la calidad de tus SDKs, límites de tasa y claridad de guías para desarrolladores.",
      icon: FileCode2,
    },
    {
      title: "Casos de Uso & Ejemplos Públicos",
      desc: "Decenas de repositorios de código abiertos en GitHub listos para servir como plantillas y referencias para futuros clientes.",
      icon: Code2,
    },
    {
      title: "Comunidad Técnica Activa",
      desc: "Creación de defensores de tu tecnología que impulsan la adopción de tu herramienta dentro de sus propias empresas.",
      icon: Workflow,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1">
        {/* HERO DEVREL */}
        <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCDCD5] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>Developer Relations & Infraestructura</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#141517] tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Convierte tu API o SDK en proyectos reales construidos por developers.
          </h1>

          <p className="text-base sm:text-xl text-[#52535A] max-w-3xl mx-auto leading-relaxed font-normal">
            Pon tu tecnología, modelos de IA o servicios de infraestructura en manos de cientos de programadores senior. Genera adopción orgánica, librerías de integración y casos de uso públicos en semanas.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link href="/start" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-[#141517] hover:bg-[#252830] text-white font-semibold shadow-editorial px-8 py-3.5" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Diseñar un DevRel Challenge
              </Button>
            </Link>
            <a
              href={BRAND.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#DCDCD5] text-[#141517] hover:bg-[#F4F4EE] font-semibold px-6 py-3.5">
                Agendar llamada con un director
              </Button>
            </a>
          </div>
        </section>

        {/* RESULTADOS DEVREL */}
        <section className="py-16 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                Resultados Tangibles
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                Qué obtiene tu equipo de Developer Relations
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {outcomes.map((o) => {
                const Icon = o.icon;
                return (
                  <div key={o.title} className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-[#141517] text-white flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#141517]">{o.title}</h4>
                    <p className="text-xs text-[#52535A] leading-relaxed">{o.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA DEVREL */}
        <section className="py-20 bg-[#141517] text-white px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              ¿Listo para ver tu API en acción con talento senior?
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF]">
              Estructuramos tracks técnicos, documentación y premios para maximizar la adopción de tu plataforma.
            </p>
            <div className="pt-2">
              <Link href="/start">
                <Button size="lg" className="bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold">
                  Estructurar programa DevRel →
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
