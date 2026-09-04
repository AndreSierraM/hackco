import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Building2,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileCheck2,
  Trophy,
  Scale,
  FolderKanban,
  HelpCircle,
} from "lucide-react";

export default function EmpresasPage() {
  const models = [
    {
      title: "AI Innovation Challenge",
      tag: "Adopción de IA",
      desc: "Convierte problemas operativos en agentes y modelos de IA probados en entornos controlados con tus propios datasets anonimizados.",
      timeline: "4 semanas",
      outcome: "3 a 5 prototipos con arquitectura documentada y evaluación de latencia.",
    },
    {
      title: "Corporate Hackathon Signature",
      tag: "Innovación Abierta",
      desc: "El formato insignia: convocatoria regional, filtro técnico de cientos de postulantes y un sprint intensivo de construcción y pitch.",
      timeline: "3 a 5 semanas",
      outcome: "15 a 30 soluciones funcionales evaluadas por comités directivos.",
    },
    {
      title: "Internal Challenge (Silos Cero)",
      tag: "Cultura & Talento Interno",
      desc: "Activa a los colaboradores de diferentes áreas de tu empresa (tecnología, producto, operaciones y legal) para resolver ineficiencias internas.",
      timeline: "3 días inmersivos",
      outcome: "Proyectos viables nacidos de quienes conocen el negocio por dentro.",
    },
    {
      title: "Talent Scouting & Hiring Hack",
      tag: "Reclutamiento Técnico",
      desc: "Evalúa cómo resuelven problemas técnicos bajo presión y en equipo, identificando a los mejores ingenieros de LATAM sin sesgos de CV.",
      timeline: "48 horas",
      outcome: "Contratación directa con portafolio de código verificado.",
    },
  ];

  const enterpriseFaqs = [
    {
      q: "¿Quién conserva la propiedad intelectual (IP) de las soluciones?",
      a: "Tu organización define las condiciones en las bases del reto. En modelos corporativos habituales, los participantes conservan la propiedad de su código base y otorgan a la empresa una licencia exclusiva para desarrollar un piloto o la primera opción de adquisición comercial.",
    },
    {
      q: "¿Necesitamos tener el reto técnico 100% definido antes de empezar?",
      a: "No. Nuestro equipo metodológico realiza sesiones de inmersión con tus líderes de negocio para transformar un dolor operativo difuso en especificaciones técnicas claras, rúbricas y datasets de prueba.",
    },
    {
      q: "¿Cómo garantizan la seguridad de nuestros datos si compartimos APIs?",
      a: "Proveemos entornos de sandbox aislados, datasets sintéticos y acuerdos de confidencialidad estrictos para todos los participantes aceptados.",
    },
    {
      q: "¿Qué sucede después de la premiación?",
      a: "Acompañamos la fase de piloto durante 60 a 90 días a través de nuestro Project Pipeline, estructurando hitos de entrega y facilitando la integración con tu infraestructura.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION B2B */}
        <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
          <Badge variant="primary" size="md">
            Soluciones Corporativas & Desafíos Técnicos
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1]">
            Tienes el problema de negocio claro. Te ayudamos a tener el software funcionando.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tu equipo interno no da abasto y las consultorías tradicionales cobran fortunas por diagnósticos teóricos. Te ayudamos a transformar tus cuellos de botella en retos técnicos y recibir entre 5 y 10 prototipos de software probados, listos para tu próximo piloto en 4 semanas.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/start">
              <Button size="lg" className="w-full sm:w-auto bg-slate-950 hover:bg-blue-600 text-white font-semibold">
                Diseñar un reto para mi empresa
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                Ver Demo de la Plataforma
              </Button>
            </Link>
          </div>
          <p className="text-xs text-slate-400">
            Menos PowerPoints. Más productos funcionando. Cero desgaste operativo para tu equipo interno.
          </p>
        </section>

        {/* METRICS & RIGOR */}
        <section className="py-12 bg-white border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="p-4 border-l-2 border-slate-900">
              <span className="text-xs text-slate-500 font-medium">Metodología de Retos</span>
              <p className="text-2xl font-bold text-slate-900 mt-1">100% Operativa</p>
              <p className="text-[11px] text-slate-500 mt-0.5">De dolor de negocio a código ejecutable</p>
            </div>
            <div className="p-4 border-l-2 border-blue-600">
              <span className="text-xs text-slate-500 font-medium">Filtro de Admisión</span>
              <p className="text-2xl font-bold text-slate-900 mt-1">~30% Tasa</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Solo builders con habilidades comprobadas</p>
            </div>
            <div className="p-4 border-l-2 border-emerald-600">
              <span className="text-xs text-slate-500 font-medium">Evaluación Objetiva</span>
              <p className="text-2xl font-bold text-slate-900 mt-1">Jury OS</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Rúbricas ponderadas sin sesgos humanos</p>
            </div>
            <div className="p-4 border-l-2 border-purple-600">
              <span className="text-xs text-slate-500 font-medium">Post-Hackathon</span>
              <p className="text-2xl font-bold text-slate-900 mt-1">Piloto Real</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Acompañamiento a producción de 90 días</p>
            </div>
          </div>
        </section>

        {/* CHALLENGE MODELS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Modelos de Programa
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Diseñado según el objetivo estratégico de tu organización
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {models.map((m) => (
              <div
                key={m.title}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="neutral" size="sm">
                      {m.tag}
                    </Badge>
                    <span className="text-xs font-semibold text-slate-500">{m.timeline}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-800">Resultado esperado:</span>
                    <p className="text-slate-600 mt-0.5">{m.outcome}</p>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href="/start" className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    Configurar este modelo <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GOVERNANCE & PLATFORM HIGHLIGHTS */}
        <section className="py-20 bg-slate-900 text-white border-y border-slate-800 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-2xl text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Gobernanza & Operación
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight mt-1">
                La plataforma que tu equipo de innovación necesita
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Olvídate de coordinar por correos dispersos y spreadsheets que nadie actualiza.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold">Command Center Centralizado</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Supervisa aplicaciones, equipos, mentors y jurados con diagnósticos en tiempo real de salud del evento.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold">Jury OS sin Hojas de Cálculo</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Rúbrica ponderada que suma exactamente 100%, interfaz dividida para jurados, notas confidenciales y alertas de sesgo.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                  <FolderKanban className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold">Project Pipeline Post-Evento</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Tablero Kanban para llevar los proyectos ganadores a validación de seguridad, acuerdos de piloto y despliegue real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ENTERPRISE FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Preguntas Frecuentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Dudas comunes de líderes de innovación y tecnología
            </h2>
          </div>

          <div className="space-y-4">
            {enterpriseFaqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* B2B FINAL CTA */}
        <section className="py-20 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              ¿Listo para estructurar el reto de tu organización?
            </h2>
            <p className="text-sm text-slate-400">
              Agenda una llamada con nuestros directores de programa para evaluar alcance y calendario.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/start">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold">
                  Diseñar mi reto ahora
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-700 text-white hover:bg-slate-900 font-semibold">
                  Explorar demo interactiva
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
