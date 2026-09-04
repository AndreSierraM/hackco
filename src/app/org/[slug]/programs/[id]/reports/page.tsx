"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { OrganizerSidebar } from "@/components/organizer/OrganizerSidebar";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  FileText,
  Download,
  Printer,
  CheckCircle2,
  TrendingUp,
  Trophy,
  Users,
  Building2,
  Share2,
} from "lucide-react";

export default function ProgramExecutiveReportPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "northstar";
  const id = (params?.id as string) || "bogota-ai-operations";
  const { programs, submissions } = usePlatform();

  const program = programs[0];
  const winningProject = submissions[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex bg-[#FBFBFA]">
      <OrganizerSidebar orgSlug={slug} />

      <main className="flex-1 p-6 sm:p-10 overflow-y-auto text-left space-y-8 max-w-5xl">
        {/* Header with Export Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <Link href={`/org/${slug}/programs/${id}`} className="text-xs font-semibold text-blue-600 hover:text-blue-800">
                ← Volver al Command Center
              </Link>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-950 tracking-tight mt-1">
              Reporte Ejecutivo de Resultados
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Documento estructurado para comités de dirección, inversionistas y áreas de negocio.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              leftIcon={<Printer className="w-4 h-4" />}
            >
              Imprimir / Guardar PDF
            </Button>
          </div>
        </div>

        {/* PRINTABLE EXECUTIVE SUMMARY PAPER */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12 space-y-8 text-xs text-slate-700">
          {/* Document Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                Informe de Impacto & Retorno de Innovación
              </span>
              <h2 className="text-2xl font-bold text-slate-950 mt-1">
                {program.title}
              </h2>
              <p className="text-slate-500 mt-0.5">
                Organizado por {program.organizationName} · {program.city}, {program.country}
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold">
                ESTADO: PILOTO EN CURSO
              </span>
              <p className="text-[11px] text-slate-400 mt-1">Fecha de emisión: Octubre 2026</p>
            </div>
          </div>

          {/* 1. Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              1. Resumen Ejecutivo
            </h3>
            <p className="leading-relaxed text-slate-600">
              El programa convocó a <strong>428 postulantes</strong> de Colombia y América Latina con el objetivo de explorar soluciones agénticas para la auditoría y conciliación de contratos mercantiles. De las 26 soluciones completadas, el jurado seleccionó como ganador a <strong>DocuFlow AI</strong>, proyecto que demostró una reducción de tiempos de auditoría de 4.5 días a 18 segundos por documento, iniciando formalmente su fase de integración en piloto corporativo con Northstar Labs.
            </p>
          </div>

          {/* 2. Key Metrics Grid */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              2. Métricas Clave de Participación
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400">Postulantes Totales</span>
                <p className="text-xl font-bold text-slate-900 mt-0.5">428</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400">Tasa de Admisión</span>
                <p className="text-xl font-bold text-slate-900 mt-0.5">32.7% (140 admitidos)</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400">Equipos Formados</span>
                <p className="text-xl font-bold text-slate-900 mt-0.5">34 escuadras</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400">Proyectos Evaluados</span>
                <p className="text-xl font-bold text-emerald-600 mt-0.5">26 funcionales</p>
              </div>
            </div>
          </div>

          {/* 3. Winning Project Spotlight */}
          <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              3. Proyecto Ganador: DocuFlow AI
            </h3>
            <p className="leading-relaxed text-slate-600">
              Desarrollado por Mateo Valencia y Andrés Echeverry. Pipeline agéntico multimodal con OCR, pgvector y LLMs comerciales con salvaguardas legales que logró una precisión de conciliación del 99.2% sobre documentos anonimizados del banco de pruebas.
            </p>
            <div className="pt-2 flex justify-between items-center text-slate-500 text-[11px]">
              <span>Puntaje Jury OS: 9.4/10 (3 evaluaciones unánimes)</span>
              <span>Bolsa: $15,000 USD + Piloto de 90 días</span>
            </div>
          </div>

          {/* 4. Next Steps */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              4. Hoja de Ruta Post-Hackathon (Próximos 90 días)
            </h3>
            <ul className="space-y-1.5 text-slate-600">
              <li>• <strong>Octubre 28:</strong> Firma del acuerdo de piloto remunerado y NDA extendido.</li>
              <li>• <strong>Noviembre 15:</strong> Despliegue en entorno sandbox de Northstar Labs con datos reales.</li>
              <li>• <strong>Diciembre 20:</strong> Evaluación de ROI y comité directivo para contrato de licencia o adquisición.</li>
            </ul>
          </div>

          {/* Signoff */}
          <div className="pt-8 border-t border-slate-200 flex justify-between items-center text-slate-400 text-[11px]">
            <span>Emitido a través de la infraestructura de Kamino</span>
            <span>Estándares de Gobernanza e IP Verificados</span>
          </div>
        </div>
      </main>
    </div>
  );
}
