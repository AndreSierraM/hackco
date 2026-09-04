"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[#FBFBFA]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-slate-950 text-white flex items-center justify-center font-bold text-sm font-mono">
            {BRAND.name.charAt(0)}
          </div>
          <span className="text-xl font-extrabold text-slate-950 tracking-tight">
            {BRAND.name}
          </span>
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Recupera tu contraseña
        </h1>
        <p className="text-xs text-slate-500">
          Ingresa tu correo y te enviaremos un enlace de restablecimiento.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6 text-left">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Correo Electrónico"
                type="email"
                required
                placeholder="tu.correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button
                type="submit"
                size="md"
                className="w-full bg-slate-950 hover:bg-blue-600 text-white font-semibold"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Enviar enlace de recuperación
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hemos enviado un correo a <strong>{email}</strong> con instrucciones para restablecer tu contraseña.
              </p>
            </div>
          )}

          <div className="pt-2 border-t border-slate-100 text-center">
            <Link href="/login" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900">
              <ArrowLeft className="w-3.5 h-3.5" /> Volver al inicio de sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
