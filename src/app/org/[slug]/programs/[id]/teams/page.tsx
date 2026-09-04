"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { OrganizerSidebar } from "@/components/organizer/OrganizerSidebar";
import { usePlatform } from "@/context/PlatformContext";
import { Team } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Users,
  Search,
  AlertCircle,
  CheckCircle2,
  FolderGit2,
  X,
  Compass,
} from "lucide-react";

export default function TeamsAdminPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "northstar";
  const id = (params?.id as string) || "bogota-ai-operations";
  const { teams } = usePlatform();

  const [activeDrawerTeam, setActiveDrawerTeam] = useState<Team | null>(null);

  return (
    <div className="min-h-screen flex bg-[#FBFBFA]">
      <OrganizerSidebar orgSlug={slug} />

      <main className="flex-1 p-6 sm:p-10 overflow-y-auto text-left space-y-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <Link href={`/org/${slug}/programs/${id}`} className="text-xs font-semibold text-blue-600 hover:text-blue-800">
                ← Volver al Command Center
              </Link>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-950 tracking-tight mt-1">
              Administración de Equipos ({teams.length})
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Supervisión de escuadras, vacíos de habilidades y asignación de mentores.
            </p>
          </div>
        </div>

        {/* Teams Table */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                  <th className="p-4">Equipo</th>
                  <th className="p-4">Integrantes</th>
                  <th className="p-4">Reto Asignado</th>
                  <th className="p-4">Roles Faltantes</th>
                  <th className="p-4">Estado Entrega</th>
                  <th className="p-4">Mentor Asignado</th>
                  <th className="p-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {teams.map((team) => {
                  const hasMissing = team.lookingForRoles.length > 0;
                  return (
                    <tr key={team.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4">
                        <button
                          onClick={() => setActiveDrawerTeam(team)}
                          className="font-bold text-slate-900 hover:text-blue-600 transition-colors text-left"
                        >
                          {team.name}
                        </button>
                        <span className="text-[10px] text-slate-400 block font-mono">
                          {team.inviteCode}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex -space-x-2">
                          {team.members.map((m) => (
                            <img
                              key={m.builderId}
                              src={m.avatar}
                              alt={m.name}
                              title={`${m.name} (${m.role})`}
                              className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs"
                            />
                          ))}
                        </div>
                      </td>
                      <td className="p-4 max-w-xs truncate text-slate-700">
                        {team.challengeTitle}
                      </td>
                      <td className="p-4">
                        {hasMissing ? (
                          <div className="flex flex-wrap gap-1">
                            {team.lookingForRoles.map((role) => (
                              <span
                                key={role}
                                className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-semibold"
                              >
                                Falta {role}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <Badge variant="success" size="sm">
                            Completo
                          </Badge>
                        )}
                      </td>
                      <td className="p-4">
                        {team.submissionId ? (
                          <Badge variant="primary" size="sm">
                            En Borrador (82%)
                          </Badge>
                        ) : (
                          <Badge variant="neutral" size="sm">
                            Sin entrega
                          </Badge>
                        )}
                      </td>
                      <td className="p-4 text-slate-600">
                        {team.mentorAssigned || "Sin asignar"}
                      </td>
                      <td className="p-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setActiveDrawerTeam(team)}
                          className="text-xs"
                        >
                          Detalle
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* TEAM DETAIL DRAWER */}
        {activeDrawerTeam && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
              onClick={() => setActiveDrawerTeam(null)}
            />
            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <div className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col p-6 space-y-6 overflow-y-auto text-left">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{activeDrawerTeam.name}</h3>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Código: {activeDrawerTeam.inviteCode}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveDrawerTeam(null)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Miembros Registrados ({activeDrawerTeam.members.length})
                  </h4>
                  <div className="space-y-2">
                    {activeDrawerTeam.members.map((m) => (
                      <div key={m.builderId} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5">
                          <img src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full object-cover" />
                          <div>
                            <p className="font-bold text-slate-900">{m.name}</p>
                            <p className="text-[11px] text-slate-500">{m.role}</p>
                          </div>
                        </div>
                        {m.isLead && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                            Lead
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Reto Seleccionado
                  </h4>
                  <p className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    {activeDrawerTeam.challengeTitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Mentor: <strong>{activeDrawerTeam.mentorAssigned}</strong>
                  </span>
                  <Button size="sm" className="bg-slate-950 text-white text-xs">
                    Reasignar Mentor
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
