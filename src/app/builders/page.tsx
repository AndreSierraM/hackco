import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import {
  Trophy,
  FolderGit2,
  Users,
  ArrowRight,
  Code2,
  Building2,
} from "lucide-react";

export default function BuildersPage() {
  const benefits = [
    {
      icon: Trophy,
      title: "Bolsas de Premios en Efectivo",
      desc: "Compite por premios reales sin cesión injusta de propiedad intelectual sobre tu código base original.",
    },
    {
      icon: Building2,
      title: "Problemas Empresariales Reales",
      desc: "Olvida los proyectos de juguete. Trabajas con retos de negocio y datasets provistos por empresas líderes.",
    },
    {
      icon: FolderGit2,
      title: "Portafolio Verificado en GitHub",
      desc: "Valida tu experiencia con código ejecutable, commits registrados y proyectos calificados por comités de industria.",
    },
    {
      icon: Users,
      title: "Oportunidades de Contratación & Piloto",
      desc: "Las empresas anfitrionas buscan activamente contratar talento senior y llevar las mejores soluciones a producción.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Postúlate al Reto",
      desc: "Crea tu perfil en Kamino y vincula tu cuenta de GitHub o portafolio de diseño para validar tus habilidades técnicas.",
    },
    {
      num: "02",
      title: "Forma tu Escuadra con Matchmaking",
      desc: "Únete a un equipo existente o utiliza nuestro radar de habilidades para encontrar compañeros de backend, frontend o IA.",
    },
    {
      num: "03",
      title: "Sprint de Construcción & Mentoría",
      desc: "Accede a sesiones 1:1 con mentores técnicos de industria, datasets de prueba y soporte metodológico durante todo el sprint.",
    },
    {
      num: "04",
      title: "Demo Day & Evaluación con Jury OS",
      desc: "Presenta tu software en vivo ante líderes de tecnología y comités directivos bajo rúbricas objetivas sin sesgos.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1">
        {/* HERO BUILDERS */}
        <section className="pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCDCD5] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
            <Code2 className="w-3.5 h-3.5" />
            <span>Comunidad de Builders & Desarrolladores</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#141517] tracking-tight leading-[1.08] max-w-4xl mx-auto">
            Construye software real para retos de empresas líderes.
          </h1>

          <p className="text-base sm:text-xl text-[#52535A] max-w-3xl mx-auto leading-relaxed font-normal">
            Compite con los mejores ingenieros de IA, desarrolladores y diseñadores de América Latina. Resuelve cuellos de botella reales, gana premios en efectivo y lleva tus prototipos a contratos de piloto.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link href="/hackathons" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-[#141517] hover:bg-[#252830] text-white font-semibold shadow-editorial px-8 py-3.5" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explorar retos y hackathons abiertos
              </Button>
            </Link>
            <Link href="/signup" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#DCDCD5] text-[#141517] hover:bg-[#F4F4EE] font-semibold px-6 py-3.5">
                Crear perfil de builder
              </Button>
            </Link>
          </div>

          <p className="text-xs text-[#71717A] font-mono">
            Sin costo de participación · Admisión basada en código y habilidades · Evaluaciones transparentes
          </p>
        </section>

        {/* BENEFICIOS */}
        <section className="py-16 bg-white border-y border-[#E8E8E4] px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
                Por qué competir en Kamino
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                El estándar más serio de retos técnicos en la región.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="p-5 rounded-2xl bg-[#F9F9F8] border border-[#E8E8E4] space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-[#141517] text-white flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#141517]">{b.title}</h4>
                    <p className="text-xs text-[#52535A] leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CÓMO PARTICIPAR */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-left">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1846A3] block mb-1">
              Paso a Paso
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
              Cómo funciona el proceso de participación
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="p-6 rounded-2xl bg-white border border-[#E8E8E4] shadow-xs space-y-2">
                <span className="w-7 h-7 rounded-lg bg-[#141517] text-white flex items-center justify-center font-mono font-bold text-xs">
                  {s.num}
                </span>
                <h3 className="text-base font-bold text-[#141517] pt-1">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL BUILDERS */}
        <section className="py-20 bg-[#141517] text-white px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              ¿Listo para demostrar tus habilidades en el próximo reto?
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF]">
              Revisa la lista de hackathons activos o regístrate para recibir invitaciones a retos privados.
            </p>
            <div className="pt-2">
              <Link href="/hackathons">
                <Button size="lg" className="bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold">
                  Explorar hackathons abiertos →
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
