"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, CheckCircle2, ArrowRight, Calendar, Building, Mail, User, ShieldCheck } from "lucide-react";

export default function StartPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    objective: "Queremos explorar agentes de IA autónomos para automatizar la auditoría de contratos mercantiles.",
    company: "Northstar Labs",
    name: "Laura Gómez",
    email: "laura.gomez@northstarlabs.demo",
    timeline: "En los próximos 2 meses",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-12 text-left space-y-8">
              <div>
                <Badge variant="primary" size="sm" className="mb-2">
                  Paso 1 de 2 · Contexto Inicial
                </Badge>
                <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                  Diseñemos el reto de tu organización
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  No necesitas tener todos los detalles técnicos listos. Cuéntanos tu necesidad y prepararemos una propuesta con tracks sugeridos, duración y perfiles clave.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <Textarea
                  label="1. ¿Qué problema u objetivo buscas resolver?"
                  rows={4}
                  required
                  value={formData.objective}
                  onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  placeholder="Ej. Queremos reducir los tiempos de respuesta de reclamos complejos utilizando modelos de lenguaje..."
                  helperText="Sé tan específico como desees. Nuestro equipo y herramientas de IA estructurarán las bases técnicas."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="2. Nombre de la Organización o Empresa"
                    leftIcon={<Building className="w-4 h-4" />}
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ej. Banco / Startup / Entidad"
                  />
                  <Input
                    label="3. Tu Nombre Completo"
                    leftIcon={<User className="w-4 h-4" />}
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Laura Gómez"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="4. Correo Electrónico Corporativo"
                    type="email"
                    leftIcon={<Mail className="w-4 h-4" />}
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu.nombre@empresa.com"
                  />
                  <Input
                    label="5. ¿Cuándo proyectas realizarlo? (Opcional)"
                    leftIcon={<Calendar className="w-4 h-4" />}
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="Ej. Q3 2026 / 1 mes / Por definir"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Privacidad garantizada. La información compartida se mantiene bajo estricta confidencialidad.
                  </span>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-slate-950 hover:bg-blue-600 text-white font-semibold shadow-sm"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Diseñar mi reto
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <Badge variant="success" size="sm">
                  Contexto Recibido con Éxito
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                  Ya tenemos el contexto inicial de tu reto
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Gracias, <strong className="text-slate-900">{formData.name}</strong>. Hemos generado una pre-estructura técnica para <strong className="text-slate-900">{formData.company}</strong>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>Organización:</span>
                  <span className="text-slate-900">{formData.company}</span>
                </div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>Correo de Contacto:</span>
                  <span className="text-slate-900">{formData.email}</span>
                </div>
                <div className="flex justify-between font-semibold text-slate-700">
                  <span>Plazo Estimado:</span>
                  <span className="text-slate-900">{formData.timeline}</span>
                </div>
                <div className="pt-2 border-t border-slate-200 text-slate-600 text-[11px]">
                  <strong>Objetivo sintetizado:</strong> {formData.objective}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/org/northstar/programs/new">
                  <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold" rightIcon={<Sparkles className="w-4 h-4" />}>
                    Explorar propuesta en AI Builder
                  </Button>
                </Link>
                <Link href="/empresas">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                    Volver a empresas
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
