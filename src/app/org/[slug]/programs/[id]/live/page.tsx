"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { usePlatform } from "@/context/PlatformContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Textarea, Input } from "@/components/ui/Input";
import {
  Radio,
  Clock,
  QrCode,
  Users,
  Megaphone,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Search,
  Check,
} from "lucide-react";

export default function LiveEventModePage() {
  const params = useParams();
  const slug = (params?.slug as string) || "northstar";
  const id = (params?.id as string) || "bogota-ai-operations";
  const { programs, applications, updateApplicationStatus } = usePlatform();
  const program = programs[0];

  const [isAnnounceModalOpen, setIsAnnounceModalOpen] = useState(false);
  const [announcementText, setAnnouncementText] = useState("");
  const [announcementSent, setAnnouncementSent] = useState(false);

  // Check-in quick search state
  const [checkInSearch, setCheckInSearch] = useState("");

  const checkedInCount = applications.filter((a) => a.status === "CHECKED_IN" || a.status === "ACCEPTED").length;

  const handleSendAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    setAnnouncementSent(true);
    setTimeout(() => {
      setIsAnnounceModalOpen(false);
      setAnnouncementSent(false);
      setAnnouncementText("");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col select-none">
      {/* Live Topbar */}
      <header className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href={`/org/${slug}/programs/${id}`}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-rose-400">
                LIVE EVENT MODE · DÍA DEL RETO
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold">{program.title}</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="md"
            className="bg-rose-600 hover:bg-rose-500 text-white font-bold"
            leftIcon={<Megaphone className="w-4 h-4" />}
            onClick={() => setIsAnnounceModalOpen(true)}
          >
            Enviar Anuncio en Vivo
          </Button>
        </div>
      </header>

      {/* Main Live Dashboard */}
      <main className="flex-1 p-4 sm:p-8 max-w-7xl mx-auto w-full text-left space-y-6">
        {/* Countdown & Live Progress Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Conteo Regresivo de Entregas
            </span>
            <p className="text-4xl sm:text-5xl font-mono font-extrabold text-white">
              47:18:22
            </p>
            <span className="text-xs text-rose-400 font-semibold">
              Cierre estricto en la plataforma
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Actividad en Curso
            </span>
            <h3 className="text-lg font-bold text-emerald-400">
              Workshop: Guardrails en Agentes Autónomos
            </h3>
            <p className="text-xs text-slate-400">Auditorio Principal & Streaming · Sala 1</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Siguiente Actividad (15:30)
            </span>
            <h3 className="text-base font-bold text-white">
              Sesiones 1:1 de Mentoría de Arquitectura
            </h3>
            <p className="text-xs text-slate-400">3 mentores activos en salas privadas</p>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-slate-400">Check-in de Asistencia</span>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-1">128 / 140</p>
            <span className="text-emerald-400 text-[11px] font-semibold">91.4% Acreditados</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-slate-400">Equipos Conectados</span>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-1">34 / 34</p>
            <span className="text-blue-400 text-[11px] font-semibold">100% de escuadras</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-slate-400">Solicitudes de Soporte</span>
            <p className="text-2xl sm:text-3xl font-bold text-amber-400 mt-1">2</p>
            <span className="text-slate-400 text-[11px]">API credits & VPN</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-slate-400">Jurados Conectados</span>
            <p className="text-2xl sm:text-3xl font-bold text-purple-400 mt-1">3</p>
            <span className="text-slate-400 text-[11px]">Listos para pitch</span>
          </div>
        </div>

        {/* Quick Check-in Module (Tablet-optimized) */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-white">Módulo Rápido de Check-in</h2>
              <p className="text-xs text-slate-400">
                Acredita participantes en recepción mediante búsqueda o código.
              </p>
            </div>
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nombre para check-in..."
                value={checkInSearch}
                onChange={(e) => setCheckInSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {applications.slice(0, 6).map((app) => (
              <div
                key={app.id}
                className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <img src={app.avatar} alt={app.name} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-white">{app.name}</p>
                    <p className="text-[11px] text-slate-400">{app.teamName}</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateApplicationStatus(app.id, "CHECKED_IN")}
                  className="text-xs border-slate-600 text-slate-200 hover:bg-slate-700"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Acreditar
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Broadcast Announcement Modal */}
      <Modal
        isOpen={isAnnounceModalOpen}
        onClose={() => setIsAnnounceModalOpen(false)}
        title="Emitir Anuncio en Vivo a Todos los Participantes"
        description="El mensaje aparecerá instantáneamente en el header de todos los workspaces y dispositivos móviles."
      >
        <form onSubmit={handleSendAnnouncement} className="space-y-4 text-left text-xs">
          {announcementSent ? (
            <div className="p-6 rounded-2xl bg-emerald-50 text-emerald-900 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <p className="font-bold text-sm">¡Anuncio emitido a 128 builders en vivo!</p>
            </div>
          ) : (
            <>
              <Textarea
                label="Texto del Comunicado Urgente"
                rows={3}
                required
                placeholder="Ej. Quedan 30 minutos para el workshop de RAG en la Sala 1..."
                value={announcementText}
                onChange={(e) => setAnnouncementText(e.target.value)}
              />
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500">
                Canales: Notificación en WebApp + Alerta Push simulada.
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <Button variant="ghost" size="sm" type="button" onClick={() => setIsAnnounceModalOpen(false)}>
                  Cancelar
                </Button>
                <Button size="sm" type="submit" className="bg-rose-600 text-white font-bold">
                  Transmitir anuncio ahora
                </Button>
              </div>
            </>
          )}
        </form>
      </Modal>
    </div>
  );
}
