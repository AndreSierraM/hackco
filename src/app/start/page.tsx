"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { 
  CheckCircle2, 
  ArrowRight, 
  Building, 
  Mail, 
  User, 
  ShieldCheck, 
  Sparkles,
  ArrowLeft 
} from "lucide-react";
import { clsx } from "clsx";

export default function StartPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState("Resolver un problema");
  const [formData, setFormData] = useState({
    objective: "",
    company: "",
    name: "",
    email: "",
  });

  const goals = [
    "Resolver un problema",
    "Adoptar IA",
    "Encontrar talento",
    "Activar empleados",
    "Lanzar una tecnología",
    "Otro",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.objective.trim() || !formData.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          {!submitted ? (
            <div className="bg-white rounded-2xl border border-[#E8E8E4] shadow-editorial p-6 sm:p-10 text-left space-y-7">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EEF4FF] text-[#1846A3] text-[11px] font-mono font-semibold uppercase tracking-wider mb-3 border border-[#D3E2FE]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1846A3]" />
                  Diseñar un reto
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                  Cuéntanos qué quieres resolver.
                </h1>
                <p className="text-xs sm:text-sm text-[#52535A] mt-2 leading-relaxed">
                  No necesitas un documento técnico complejo. Escribe el problema en tus propias palabras y nosotros diseñamos cómo convertirlo en un hackathon o programa de innovación.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: El Dolor / Objetivo */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#141517] block">
                    1. ¿Qué quieres resolver?
                  </label>
                  <Textarea
                    rows={4}
                    required
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    placeholder="Ej. Queremos reducir el tiempo que tarda nuestro equipo en revisar solicitudes de crédito, o queremos explorar cómo usar agentes de IA para clasificar incidencias de clientes..."
                    className="text-xs sm:text-sm leading-relaxed"
                  />
                  <span className="text-[11px] text-[#71717A] block">
                    Explica el dolor o la oportunidad. Nosotros estructuramos los requerimientos técnicos.
                  </span>
                </div>

                {/* Step 2: Objetivo principal (Pills) */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#141517] block">
                    2. ¿Qué buscas prioritariamente? (Opcional)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {goals.map((goal) => {
                      const isSelected = selectedGoal === goal;
                      return (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => setSelectedGoal(goal)}
                          className={clsx(
                            "px-3 py-1.5 rounded-lg text-xs font-medium transition-all border cursor-pointer",
                            isSelected
                              ? "bg-[#141517] text-white border-[#141517] shadow-xs"
                              : "bg-[#FBFBFA] border-[#E8E8E4] text-[#52535A] hover:border-[#141517] hover:text-[#141517]"
                          )}
                        >
                          {goal}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Datos de contacto mínimos */}
                <div className="space-y-4 pt-2 border-t border-[#E8E8E4]">
                  <span className="text-xs font-bold text-[#141517] block">
                    3. ¿Con quién conversamos?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <Input
                      label="Tu Nombre"
                      leftIcon={<User className="w-4 h-4 text-[#71717A]" />}
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Carlos Martínez"
                    />
                    <Input
                      label="Empresa u Organización"
                      leftIcon={<Building className="w-4 h-4 text-[#71717A]" />}
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Bancolombia / Startup / Entidad"
                    />
                  </div>
                  <Input
                    label="Correo Electrónico Corporativo"
                    type="email"
                    leftIcon={<Mail className="w-4 h-4 text-[#71717A]" />}
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="carlos@empresa.com"
                  />
                </div>

                <div className="p-3 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] text-[11px] text-[#71717A] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>
                    Confidencialidad total. Respondemos en menos de 24 horas con una propuesta preliminar de formato.
                  </span>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#141517] hover:bg-[#252830] text-white font-semibold shadow-editorial"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Enviar reto y recibir propuesta
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-[#E8E8E4] shadow-editorial-elevated p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto border border-[#A7F3D0]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#059669]">
                  Mensaje Recibido
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141517] tracking-tight">
                  Ya tenemos tu reto en el radar
                </h2>
                <p className="text-xs sm:text-sm text-[#52535A] max-w-md mx-auto leading-relaxed">
                  Gracias, <strong>{formData.name || "por tu contacto"}</strong>. Nuestro equipo de diseño de retos revisará el contexto para <strong>{formData.company || "tu organización"}</strong> y te responderá a <strong>{formData.email}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F9F9F8] border border-[#E8E8E4] text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between font-mono text-[11px] text-[#71717A]">
                  <span>Objetivo:</span>
                  <span className="text-[#141517] font-sans font-semibold">{selectedGoal}</span>
                </div>
                <div className="pt-2 border-t border-[#E8E8E4] text-[11px] text-[#52535A] leading-relaxed">
                  <strong>Tu reto:</strong> {formData.objective}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/">
                  <Button variant="outline" className="w-full sm:w-auto font-medium">
                    Volver a la portada
                  </Button>
                </Link>
                <Link href="/hackathons">
                  <Button className="w-full sm:w-auto bg-[#141517] text-white font-medium">
                    Ver convocatorias abiertas
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
