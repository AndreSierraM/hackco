import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/config/brand";
import {
  Compass,
  MapPin,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { LinkedinIcon } from "@/components/common/Icons";

export default function AboutPage() {
  const principles = [
    {
      title: "Código Real sobre Diapositivas",
      desc: "Creemos que la innovación no se demuestra en presentaciones de PowerPoint de 80 páginas, sino en software ejecutable probado en manos de usuarios.",
    },
    {
      title: "Múltiples Enfoques sobre Hipótesis Únicas",
      desc: "Los problemas complejos no tienen una única respuesta técnica. Comparar varias arquitecturas en paralelo reduce el riesgo de inversión.",
    },
    {
      title: "El Piloto es el Retorno Real",
      desc: "El Demo Day no es el final del proceso: es el inicio de la transferencia técnica hacia los servidores de producción de la empresa.",
    },
    {
      title: "Transparencia & Rigor de Ingeniería",
      desc: "Evaluaciones a ciegas con rúbricas matemáticas calibradas al 100%, datasets seguros y cero improvisación operativa.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1">
        {/* HERO ABOUT */}
        <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCDCD5] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>Nuestra Misión & Filosofía</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#141517] tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Ayudamos a las empresas a construir software para sus problemas más difíciles.
          </h1>

          <p className="text-base sm:text-xl text-[#52535A] max-w-3xl mx-auto leading-relaxed font-normal">
            Kamino nació en Colombia con una convicción clara: la innovación corporativa en América Latina estaba atrapada entre consultorías teóricas costosas y hackathons universitarios que morían el lunes en fotos y post-its. Creamos la plataforma y el operador que une ambos mundos con rigor de ingeniería.
          </p>
        </section>

        {/* ORIGEN & COMPROMISO */}
        <section className="py-16 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block">
                Por Qué Existimos
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                El puente entre cuellos de botella empresariales y el talento técnico de la región.
              </h2>
              <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                Las organizaciones medianas y grandes enfrentan una avalancha de demandas de automatización e inteligencia artificial, mientras que los mejores desarrolladores y científicos de datos buscan resolver problemas con impacto real.
              </p>
              <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">
                En Kamino diseñamos la infraestructura metodológica y el software propio para que esa colaboración ocurra con acuerdos de confidencialidad, propiedad intelectual protegida y métricas cuantitativas.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#71717A]">
                <MapPin className="w-4 h-4 text-[#1846A3] shrink-0" />
                <span>{BRAND.origin}</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#141517] text-white border border-[#2B2D33] shadow-editorial space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA] block">
                Nuestra Promesa Operativa
              </span>
              <h3 className="text-xl font-bold">Menos PowerPoints. Más productos funcionando.</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                No dejamos ningún reto en diapositivas teóricas. Cada programa operado por Kamino entrega código ejecutable en GitHub, benchmarks auditables y acompañamiento de 60 a 90 días para convertir el prototipo ganador en un piloto en producción.
              </p>
              <div className="pt-2">
                <Link href="/start">
                  <Button size="sm" className="bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold">
                    Estructurar un reto con nosotros →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPIOS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
              Principios de Ingeniería
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
              Los pilares detrás de cada reto que operamos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#EEF4FF] text-[#1846A3] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#141517]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO INSTITUCIONAL */}
        <section className="py-16 bg-white border-t border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
              Conversemos sobre los retos de tu organización
            </h2>
            <p className="text-xs sm:text-sm text-[#52535A] max-w-xl mx-auto leading-relaxed">
              Ya sea para estructurar un reto corporativo confidencial o aliarte como sponsor tecnológico, nuestro equipo de directores de programa está a tu disposición.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs">
              <a
                href={`mailto:${BRAND.salesEmail}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] text-[#141517] hover:border-[#141517] transition-all font-semibold"
              >
                <Mail className="w-4 h-4 text-[#1846A3]" />
                <span>{BRAND.salesEmail}</span>
              </a>
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] text-[#141517] hover:border-[#141517] transition-all font-semibold"
              >
                <LinkedinIcon className="w-4 h-4 text-[#1846A3]" />
                <span>Kamino en LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
