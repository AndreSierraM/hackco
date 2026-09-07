import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Lock,
  FileCode2,
  Database,
  Users,
  Eye,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function TrustPage() {
  const policies = [
    {
      icon: FileCode2,
      title: "Gobernanza de Propiedad Intelectual (IP)",
      desc: "La propiedad intelectual, licencias y derechos sobre entregables se definen contractualmente para cada challenge antes de iniciar. En los programas corporativos estándar, los participantes otorgan a la empresa una licencia comercial exclusiva para desplegar el piloto o la opción prioritaria de adquisición.",
    },
    {
      icon: Lock,
      title: "Acuerdos de Confidencialidad (NDAs)",
      desc: "Todos los participantes, mentores y jurados aceptan términos vinculantes de confidencialidad antes de acceder a la plataforma y a las especificaciones del reto.",
    },
    {
      icon: Database,
      title: "Aislamiento de Datos & Datasets Sintéticos",
      desc: "Ningún dato productivo sensible de tu empresa necesita salir de tus servidores. Diseñamos datasets de muestra anonimizados o sintéticos con la misma estructura y volumen requeridos para validar la solución.",
    },
    {
      icon: Eye,
      title: "Control de Acceso & Entornos Sandbox",
      desc: "Proveemos entornos aislados para pruebas de APIs con credenciales temporales revocables y monitoreo continuo de tráfico para prevenir abusos.",
    },
    {
      icon: Users,
      title: "Trazabilidad de Repositorios & Código",
      desc: "Exigimos que todo el código se entregue en repositorios de GitHub con historial de commits transparente, licencias de dependencias declaradas y escaneo de vulnerabilidades básicas.",
    },
    {
      icon: ShieldCheck,
      title: "Retención & Eliminación de Datos Post-Reto",
      desc: "Una vez concluido el reto y completada la deliberación, los accesos a los sandboxes son revocados y los datasets temporales se eliminan de acuerdo con el calendario acordado.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] selection:bg-[#E2ECFE] selection:text-[#0E357E]">
      <Header />

      <main className="flex-1 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16 text-left">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DCDCD5] text-[#1846A3] text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Trust Center & Enterprise Readiness</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141517] tracking-tight">
              Seguridad, datos y propiedad intelectual con rigor corporativo.
            </h1>
            <p className="text-base sm:text-lg text-[#52535A] leading-relaxed">
              Sabemos que la innovación abierta en empresas medianas y grandes exige certezas absolutas de compliance legal y seguridad de la información. Aquí detallamos cómo protegemos a tu organización en cada fase.
            </p>
          </div>

          {/* Core Policies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-7 rounded-3xl bg-white border border-[#E8E8E4] shadow-xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] text-[#1846A3] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#141517]">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-[#52535A] leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Legal IP Deep Dive */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#141517] text-white border border-[#2B2D33] shadow-editorial space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#60A5FA] block">
              Política de Propiedad Intelectual
            </span>
            <h3 className="text-2xl font-bold">¿Quién es dueño del software construido?</h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed max-w-3xl">
              En Kamino no dejamos zonas grises legales:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D1D5DB] pt-2 max-w-3xl">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Bases previas:</strong> Antes de abrir cualquier convocatoria, tu equipo legal y Kamino definen el modelo de licencia (cesión completa o licencia exclusiva para piloto).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Aceptación obligatoria:</strong> Los builders aceptan contractualmente estas condiciones al registrarse en el challenge.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Acompañamiento en el traspaso:</strong> Al seleccionar al ganador, Kamino facilita la firma del acuerdo formal de transferencia y confidencialidad para el inicio del piloto.</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link href="/start">
                <Button className="bg-white text-[#141517] hover:bg-[#F4F4EE] font-semibold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Consultar términos para tu empresa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
