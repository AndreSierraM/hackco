"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Users,
  Code2,
  Check,
  Clock,
  Save,
} from "lucide-react";
import confetti from "canvas-confetti";
import { clsx } from "clsx";

export default function HackathonApplyPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const { programs, updateApplicationStatus } = usePlatform();

  const program = programs.find((p) => p.slug === slug) || programs[0];

  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const totalSteps = 7;

  // Form State with intelligent defaults
  const [formData, setFormData] = useState({
    name: "Mateo Valencia",
    email: "mateo@valencia.tech",
    headline: "Senior Fullstack & AI Systems Builder",
    city: "Bogotá",
    github: "https://github.com/mateo-valencia",
    linkedin: "https://linkedin.com/in/mateovalencia",
    role: "Fullstack",
    experienceYears: "5 años",
    eligibilityAccepted: true,
    preferredTrack: program.challenges[0]?.id || "ch-01",
    skills: ["TypeScript", "Next.js", "Python", "LangChain", "FastAPI"],
    hasTeam: "looking", // "existing" | "looking" | "solo"
    teamName: "",
    agreedToTerms: true,
    agreedToConduct: true,
  });

  const availableRoles = [
    "Fullstack",
    "Frontend",
    "Backend",
    "AI/ML Engineer",
    "Product Designer (UX)",
    "Product Manager",
    "Data Scientist",
  ];

  const availableSkills = [
    "TypeScript",
    "Next.js",
    "Python",
    "FastAPI",
    "PyTorch",
    "LangChain",
    "Figma",
    "PostgreSQL",
    "Docker",
    "Go",
    "Tailwind CSS",
  ];

  const toggleSkill = (skill: string) => {
    if (formData.skills.includes(skill)) {
      setFormData({ ...formData, skills: formData.skills.filter((s) => s !== skill) });
    } else {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete Registration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setIsSuccess(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full text-left">
        {!isSuccess ? (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-12 space-y-8">
            {/* Top Stepper Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-blue-600">
                  {program.title}
                </span>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-0.5">
                  Formulario de Postulación
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                  Paso {currentStep} de {totalSteps}
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Save className="w-3 h-3 text-emerald-600" /> Autoguardado
                </span>
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-slate-900 h-full transition-all duration-300 rounded-full"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>

            {/* STEP 1: PROFILE */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">1. Tu Identidad de Builder</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Información base que verá el comité de admisión y potenciales compañeros de equipo.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Nombre Completo"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    label="Correo Electrónico"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <Input
                  label="Titular Profesional / Headline"
                  value={formData.headline}
                  onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                  placeholder="Ej. Senior Fullstack Engineer"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Ciudad de Residencia"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                  <Input
                    label="Perfil de GitHub"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  />
                </div>
              </div>
            )}

            {/* STEP 2: ELIGIBILITY */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">2. Criterios de Elegibilidad</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Confirma que cumples con los requisitos operativos del reto.
                  </p>
                </div>
                <div className="space-y-3 text-xs text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <p className="font-semibold text-slate-900">Requisitos indispensables:</p>
                    <ul className="space-y-1.5 text-slate-600">
                      <li>• Mayor de 18 años o autorización legal válida.</li>
                      <li>• Disponibilidad durante las fechas oficiales: {program.startDate} al {program.endDate}.</li>
                      <li>• Capacidad para entregar código reproducible en un repositorio público o privado.</li>
                    </ul>
                  </div>
                  <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={formData.eligibilityAccepted}
                      onChange={(e) => setFormData({ ...formData, eligibilityAccepted: e.target.checked })}
                      className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs text-slate-800 font-medium">
                      Confirmo que cumplo con los criterios de elegibilidad y tengo disponibilidad para participar activamente.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* STEP 3: INTERESTS */}
            {currentStep === 3 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">3. Track de Preferencia</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    ¿Cuál de los desafíos de {program.title} te interesa resolver principalmente?
                  </p>
                </div>
                <div className="space-y-3">
                  {program.challenges.map((ch) => (
                    <label
                      key={ch.id}
                      className={clsx(
                        "flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all",
                        formData.preferredTrack === ch.id
                          ? "border-blue-600 bg-blue-50/50"
                          : "border-slate-200 hover:bg-slate-50"
                      )}
                    >
                      <input
                        type="radio"
                        name="preferredTrack"
                        checked={formData.preferredTrack === ch.id}
                        onChange={() => setFormData({ ...formData, preferredTrack: ch.id })}
                        className="mt-1 text-blue-600"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-blue-700">{ch.trackNumber}</span>
                          <span className="font-bold text-xs text-slate-900">{ch.title}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{ch.shortDescription}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: SKILLS & ROLE */}
            {currentStep === 4 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">4. Tu Rol Principal & Habilidades</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Esto alimenta el algoritmo de cobertura de habilidades para matchmaking.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700">Rol Principal:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableRoles.map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setFormData({ ...formData, role })}
                        className={clsx(
                          "p-2.5 rounded-xl border text-xs font-semibold text-center transition-all",
                          formData.role === role
                            ? "bg-slate-950 text-white border-slate-950 shadow-xs"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                        )}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-700">Habilidades Técnicas:</label>
                  <div className="flex flex-wrap gap-2">
                    {availableSkills.map((skill) => {
                      const isSelected = formData.skills.includes(skill);
                      return (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => toggleSkill(skill)}
                          className={clsx(
                            "px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5",
                            isSelected
                              ? "bg-blue-50 text-blue-700 border-blue-200 font-semibold"
                              : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                          )}
                        >
                          {isSelected && <Check className="w-3 h-3 text-blue-600" />}
                          <span>{skill}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: TEAM STATUS */}
            {currentStep === 5 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">5. Situación de Equipo</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Puedes aplicar con un equipo ya armado o utilizar nuestra herramienta de matchmaking.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      id: "looking",
                      title: "Busco compañeros de equipo (Matchmaking)",
                      desc: "La plataforma te sugerirá perfiles complementarios una vez seas admitido.",
                    },
                    {
                      id: "existing",
                      title: "Ya tengo equipo formado",
                      desc: "Te asignaremos un código de invitación para unirlos a tu workspace.",
                    },
                    {
                      id: "solo",
                      title: "Participación individual",
                      desc: "Prefiero construir y entregar la solución de manera independiente.",
                    },
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      className={clsx(
                        "flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all",
                        formData.hasTeam === opt.id
                          ? "border-blue-600 bg-blue-50/50"
                          : "border-slate-200 hover:bg-slate-50"
                      )}
                    >
                      <input
                        type="radio"
                        name="hasTeam"
                        checked={formData.hasTeam === opt.id}
                        onChange={() => setFormData({ ...formData, hasTeam: opt.id })}
                        className="mt-1 text-blue-600"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900">{opt.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{opt.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {formData.hasTeam === "existing" && (
                  <Input
                    label="Nombre provisional del equipo"
                    placeholder="Ej. DocuFlow AI"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  />
                )}
              </div>
            )}

            {/* STEP 6: CONSENT */}
            {currentStep === 6 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">6. Consentimiento & Código de Conducta</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Garantizamos un espacio seguro, ético y de libre competencia técnica.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                  <p className="font-bold text-slate-900">Resumen de Términos:</p>
                  <p>
                    • Tu código es tuyo. No cedes propiedad intelectual a menos que se estipule expresamente en contratos de piloto remunerado.
                  </p>
                  <p>
                    • Respeto absoluto a la diversidad de todos los participantes y jurados. Cero tolerancia al acoso o plagio deliberado.
                  </p>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreedToTerms}
                      onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                      className="mt-0.5 rounded text-blue-600"
                    />
                    <span className="text-xs text-slate-700">
                      He leído y acepto las bases de participación de {program.title}.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreedToConduct}
                      onChange={(e) => setFormData({ ...formData, agreedToConduct: e.target.checked })}
                      className="mt-0.5 rounded text-blue-600"
                    />
                    <span className="text-xs text-slate-700">
                      Me comprometo a cumplir con el Código de Conducta y juego limpio de la plataforma.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* STEP 7: REVIEW */}
            {currentStep === 7 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">7. Revisión Final</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Verifica tus datos antes de enviar tu postulación.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                  <div className="flex justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Nombre & Headline:</span>
                    <span className="font-bold text-slate-900">{formData.name} · {formData.headline}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Correo Electrónico:</span>
                    <span className="font-bold text-slate-900">{formData.email}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Rol & Ciudad:</span>
                    <span className="font-bold text-slate-900">{formData.role} ({formData.city})</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-200">
                    <span className="text-slate-500">Track Seleccionado:</span>
                    <span className="font-bold text-blue-700">{formData.preferredTrack}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Habilidades ({formData.skills.length}):</span>
                    <span className="font-semibold text-slate-800">{formData.skills.join(", ")}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tu postulación será evaluada por el comité en menos de 24 horas.</span>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              {currentStep > 1 ? (
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  leftIcon={<ArrowLeft className="w-4 h-4" />}
                >
                  Anterior
                </Button>
              ) : (
                <Link href={`/hackathons/${program.slug}`}>
                  <Button variant="ghost" size="sm">
                    Cancelar
                  </Button>
                </Link>
              )}

              <Button
                size="md"
                className="bg-slate-950 hover:bg-blue-600 text-white font-semibold"
                onClick={handleNext}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                {currentStep === totalSteps ? "Enviar Postulación" : "Continuar"}
              </Button>
            </div>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <Badge variant="success" size="sm">
                Postulación Registrada con Éxito
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                ¡Bienvenido a {program.title}!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Hemos guardado tu perfil de builder. Puedes ingresar de inmediato a tu Participant Workspace para explorar equipos o comenzar a invitar compañeros.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/app/hackathons/bogota-ai-operations/people">
                <Button size="lg" className="w-full sm:w-auto bg-slate-950 hover:bg-blue-600 text-white font-semibold" rightIcon={<Users className="w-4 h-4" />}>
                  Buscar compañeros (Matchmaking)
                </Button>
              </Link>
              <Link href="/app">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                  Ir a mi Home Personal
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
