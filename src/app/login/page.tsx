"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("mateo@valencia.tech");
  const [password, setPassword] = useState("••••••••");

  const handleLogin = (e: React.FormEvent) => {
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
          Ingresa a tu cuenta
        </h1>
        <p className="text-xs text-slate-500">
          ¿No tienes una cuenta de builder?{" "}
          <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-800">
            Crear cuenta gratis
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6 text-left">
          {/* SSO Buttons */}
          <div className="space-y-2">
            <Button
              variant="outline"
              size="md"
              className="w-full text-xs font-semibold"
              leftIcon={<GithubIcon className="w-4 h-4" />}
              onClick={() => router.push("/app")}
            >
              Continuar con GitHub
            </Button>
            <Button
              variant="outline"
              size="md"
              className="w-full text-xs font-semibold"
              onClick={() => router.push("/app")}
            >
              Continuar con Google
            </Button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              O con correo
            </span>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Correo Electrónico"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-700">Contraseña</label>
                <Link href="/forgot-password" className="text-[11px] text-blue-600 hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              size="md"
              className="w-full bg-slate-950 hover:bg-blue-600 text-white font-semibold"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Ingresar a la plataforma
            </Button>
          </form>
        </div>

        <div className="mt-6 text-center text-xs text-slate-500">
          ¿Eres una empresa u organizador?{" "}
          <Link href="/org/northstar" className="font-semibold text-slate-900 underline">
            Entrar a Northstar Labs OS
          </Link>
        </div>
      </div>
    </div>
  );
}
