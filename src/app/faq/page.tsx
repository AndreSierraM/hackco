import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HelpCircle, ArrowRight } from "lucide-react";

export default function FaqPage() {
  const faqs = [
    {
      q: "¿Qué es una hackathon o challenge de innovación en esta plataforma?",
      a: "Es una experiencia intensiva y estructurada donde organizaciones plantean retos operativos reales y equipos multidisciplinarios de builders (ingenieros de software, especialistas en IA, diseñadores UX y estrategas) construyen prototipos y soluciones funcionales en un marco de tiempo definido.",
    },
    {
      q: "¿Necesito tener el reto técnico 100% definido antes de acercarme a ustedes?",
      a: "No. Ayudamos a tu organización desde la inmersión inicial. Transformamos un dolor de negocio difuso (ej. 'gastamos mucho tiempo auditando documentos') en especificaciones técnicas, datasets de prueba, perfiles requeridos y rúbricas ponderadas.",
    },
    {
      q: "¿Ustedes se encargan de convocar y filtrar a los participantes?",
      a: "Sí. Gestionamos la convocatoria técnica a través de nuestra red de talento y comunidades universitarias en Colombia y LATAM, aplicando filtros de admisión basados en experiencia y portafolios de código real.",
    },
    {
      q: "¿Puede ser un reto 100% interno para nuestros colaboradores?",
      a: "Totalmente. Operamos retos corporativos cerrados diseñados para romper silos entre áreas de negocio, tecnología y operaciones, fomentando la cultura de innovación dentro de la misma organización.",
    },
    {
      q: "¿El formato puede ser presencial, híbrido o 100% online?",
      a: "Operamos en las tres modalidades. Diseñamos dinámicas de networking presenciales en sedes físicas (Bogotá, Medellín, Cali, Barranquilla) o transmisiones de alta fidelidad para participación remota regional.",
    },
    {
      q: "¿Quién conserva la propiedad intelectual (IP) de las soluciones construidas?",
      a: "Por defecto, los participantes conservan la propiedad de su código y otorgan a la empresa organizadora el derecho preferente a desarrollar un piloto remunerado o acordar una licencia comercial. Si la empresa requiere cesión total de IP, se explicita en las bases desde el inicio.",
    },
    {
      q: "¿Cómo se seleccionan y preparan los jurados?",
      a: "La organización designa a sus líderes de negocio y nosotros aportamos evaluadores técnicos neutrales. Todos utilizan Jury OS con rúbricas balanceadas que suman exactamente 100%, eliminando hojas de cálculo caóticas y sesgos.",
    },
    {
      q: "¿Qué pasa después de que se entrega el premio a los ganadores?",
      a: "El proyecto no termina en el podio. A través de nuestro Project Pipeline acompañamos la transición a piloto durante 60 a 90 días, estructurando acuerdos de prueba de concepto e integración en infraestructura real.",
    },
    {
      q: "¿Cuánto tiempo dura típicamente un programa?",
      a: "Depende del objetivo: desde un sprint intensivo de fin de semana (48 horas), hasta retos de innovación abierta de 4 a 6 semanas con fases de ideación, mentoría y demo day.",
    },
    {
      q: "¿Pueden operar en ciudades fuera de Bogotá o en otros países de LATAM?",
      a: "Sí. Nacimos en Colombia y contamos con capacidad de despliegue en las principales ciudades del país y plataformas adaptadas para participantes de toda América Latina.",
    },
    {
      q: "¿La plataforma puede usar la marca de mi empresa (White-Label)?",
      a: "Sí. Cada reto cuenta con su propio esquema cromático, portadas, logotipos y assets de sponsors, manteniendo la solidez operativa de nuestro sistema bajo tu propia identidad de marca.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="primary" size="md">
            Centro de Ayuda & Respuestas Clave
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            Preguntas Frecuentes
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Todo lo que organizadores y participantes necesitan saber sobre la metodología, plataforma y gobernanza de {BRAND.name}.
          </p>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 pl-7.5 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-slate-950 text-white text-center space-y-4">
          <h4 className="text-xl font-bold">¿Tienes una pregunta específica para tu empresa?</h4>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Conversa directamente con nuestro equipo de diseño de programas.
          </p>
          <div className="pt-2">
            <Link href="/start">
              <Button size="md" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Agendar una llamada
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
