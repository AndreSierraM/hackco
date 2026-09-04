"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DEMO_MENTOR_SESSIONS, DEMO_MENTORS } from "@/lib/demo-data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Textarea } from "@/components/ui/Input";
import {
  Compass,
  Clock,
  Video,
  Users,
  CheckCircle2,
  ExternalLink,
  Save,
  MessageSquare,
} from "lucide-react";

export default function MentorPortalPage() {
  const mentor = DEMO_MENTORS[0]; // Carlos Peña
  const [sessions, setSessions] = useState(DEMO_MENTOR_SESSIONS);
  const [activeSessionNotes, setActiveSessionNotes] = useState(sessions[0]?.notes || "");

  const handleSaveNotes = (sessionId: string) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === sessionId ? { ...s, notes: activeSessionNotes } : s))
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-left space-y-8">
        {/* Top Mentor Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              className="w-16 h-16 rounded-2xl object-cover border border-slate-200"
            />
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="success" size="sm">
                  Mentor Técnico Asignado
                </Badge>
                <span className="text-xs text-slate-400 font-mono">{mentor.company}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mt-0.5">
                Hola, {mentor.name}
              </h1>
              <p className="text-xs text-slate-500">{mentor.role} · Especialista en arquitectura y backend</p>
            </div>
          </div>

          <div className="text-right text-xs">
            <span className="text-slate-400 block">Sesiones para hoy</span>
            <strong className="text-base text-slate-900">{sessions.length} reuniones 1:1</strong>
          </div>
        </div>

        {/* Sessions List */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900">Agenda de Sesiones de Mentoría</h2>

          <div className="space-y-4">
            {sessions.map((ses) => (
              <div
                key={ses.id}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 font-mono font-bold text-xs">
                      {ses.time}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Equipo: {ses.teamName}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Tema: {ses.topic}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link href="/app/hackathons/bogota-ai-operations/team">
                      <Button variant="outline" size="sm" className="text-xs">
                        Ver equipo
                      </Button>
                    </Link>
                    <Button size="sm" className="bg-slate-950 text-white text-xs" leftIcon={<Video className="w-3.5 h-3.5" />}>
                      Abrir videollamada
                    </Button>
                  </div>
                </div>

                {/* Mentor Notes */}
                <div className="space-y-2 text-xs">
                  <label className="font-bold text-slate-700 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                    Notas de retroalimentación para el equipo:
                  </label>
                  <Textarea
                    rows={2}
                    value={activeSessionNotes}
                    onChange={(e) => setActiveSessionNotes(e.target.value)}
                    placeholder="Escribe recomendaciones de arquitectura, seguridad o código para este equipo..."
                  />
                  <div className="flex justify-end">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-600 text-xs font-bold"
                      onClick={() => handleSaveNotes(ses.id)}
                      leftIcon={<Save className="w-3.5 h-3.5" />}
                    >
                      Guardar notas
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
