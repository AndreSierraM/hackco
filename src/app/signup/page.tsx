"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "Mateo Valencia",
    email: "mateo@valencia.tech",
    password: "••••••••",
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/app");
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
          Crea tu cuenta de builder
        </h1>
        <p className="text-xs text-slate-500">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-800">
            Iniciar sesión
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6 text-left">
          <div className="space-y-2">
            <Button
              variant="outline"
              size="md"
              className="w-full text-xs font-semibold"
              leftIcon={<GithubIcon className="w-4 h-4" />}
              onClick={() => router.push("/app")}
            >
              Registrarse con GitHub
            </Button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              O con correo
            </span>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
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
            <Input
              label="Contraseña"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            <Button
              type="submit"
              size="md"
              className="w-full bg-slate-950 hover:bg-blue-600 text-white font-semibold"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Crear cuenta y comenzar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
