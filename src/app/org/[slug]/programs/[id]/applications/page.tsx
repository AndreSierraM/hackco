"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { OrganizerSidebar } from "@/components/organizer/OrganizerSidebar";
import { usePlatform } from "@/context/PlatformContext";
import { DemoApplication, ApplicationStatus } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  FileSpreadsheet,
  Download,
  Filter,
  Users,
  X,
  Check,
  ChevronDown,
} from "lucide-react";
import { clsx } from "clsx";

export default function ApplicationsCrmPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "northstar";
  const id = (params?.id as string) || "bogota-ai-operations";
  const { applications, updateApplicationStatus } = usePlatform();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [activeApplicant, setActiveApplicant] = useState<DemoApplication | null>(null);

  const filtered = useMemo(() => {
    return applications.filter((app) => {
      if (statusFilter !== "ALL" && app.status !== statusFilter) return false;
      if (
        search &&
        !app.name.toLowerCase().includes(search.toLowerCase()) &&
        !app.email.toLowerCase().includes(search.toLowerCase()) &&
        !app.role.toLowerCase().includes(search.toLowerCase()) &&
        !app.city.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [applications, statusFilter, search]);

  const toggleSelectAll = () => {
    if (selectedIds.length === filtered.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filtered.map((a) => a.id));
    }
  };

  const toggleSelectOne = (appId: string) => {
    if (selectedIds.includes(appId)) {
      setSelectedIds(selectedIds.filter((i) => i !== appId));
    } else {
      setSelectedIds([...selectedIds, appId]);
    }
  };

  const handleBulkAction = (status: ApplicationStatus) => {
    selectedIds.forEach((appId) => updateApplicationStatus(appId, status));
    setSelectedIds([]);
  };

  const statusBadgeConfigs: Record<ApplicationStatus, { label: string; variant: "success" | "warning" | "danger" | "neutral" | "primary" }> = {
    ACCEPTED: { label: "Aceptado", variant: "success" },
    UNDER_REVIEW: { label: "En Revisión", variant: "warning" },
    WAITLISTED: { label: "Lista de Espera", variant: "neutral" },
    REJECTED: { label: "Rechazado", variant: "danger" },
    CHECKED_IN: { label: "Acreditado", variant: "primary" },
    DRAFT: { label: "Borrador", variant: "neutral" },
    SUBMITTED: { label: "Postulado", variant: "warning" },
    WITHDRAWN: { label: "Retirado", variant: "neutral" },
  };

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
              CRM de Postulaciones ({applications.length})
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Administra y califica a los candidatos para Bogotá AI Operations Challenge.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" leftIcon={<Download className="w-4 h-4" />}>
              Exportar CSV
            </Button>
          </div>
        </div>

        {/* Filter & Bulk Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 w-full">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nombre, correo, rol o ciudad..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none"
            >
              <option value="ALL">Todos los estados</option>
              <option value="UNDER_REVIEW">En Revisión</option>
              <option value="ACCEPTED">Aceptados</option>
              <option value="WAITLISTED">Lista de Espera</option>
              <option value="REJECTED">Rechazados</option>
            </select>
          </div>

          {/* Bulk Selection Actions */}
          {selectedIds.length > 0 && (
            <div className="flex items-center gap-2 p-1 bg-slate-900 text-white rounded-xl px-3 py-1.5 text-xs animate-in fade-in">
              <span className="font-bold">{selectedIds.length} seleccionados</span>
              <div className="h-4 w-px bg-slate-700 mx-1" />
              <button
                onClick={() => handleBulkAction("ACCEPTED")}
                className="hover:text-emerald-400 font-semibold px-1"
              >
                Aceptar
              </button>
              <button
                onClick={() => handleBulkAction("WAITLISTED")}
                className="hover:text-amber-400 font-semibold px-1"
              >
                Lista de Espera
              </button>
              <button
                onClick={() => handleBulkAction("REJECTED")}
                className="hover:text-rose-400 font-semibold px-1"
              >
                Rechazar
              </button>
            </div>
          )}
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                  <th className="p-4 w-10 text-center">
                    <input
                      type="checkbox"
                      checked={selectedIds.length === filtered.length && filtered.length > 0}
                      onChange={toggleSelectAll}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th className="p-4">Candidato</th>
                  <th className="p-4">Estado</th>
                  <th className="p-4">Rol & Ciudad</th>
                  <th className="p-4">Habilidades</th>
                  <th className="p-4">Equipo</th>
                  <th className="p-4">Postulado</th>
                  <th className="p-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((app) => {
                  const cfg = statusBadgeConfigs[app.status] || { label: app.status, variant: "neutral" };
                  const isSelected = selectedIds.includes(app.id);

                  return (
                    <tr
                      key={app.id}
                      className={clsx(
                        "hover:bg-slate-50/80 transition-colors",
                        isSelected && "bg-blue-50/40"
                      )}
                    >
                      <td className="p-4 text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelectOne(app.id)}
                          className="rounded text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => setActiveApplicant(app)}
                          className="flex items-center gap-3 text-left group"
                        >
                          <img
                            src={app.avatar}
                            alt={app.name}
                            className="w-8 h-8 rounded-full object-cover border border-slate-200"
                          />
                          <div>
                            <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {app.name}
                            </p>
                            <p className="text-[11px] text-slate-400">{app.email}</p>
                          </div>
                        </button>
                      </td>
                      <td className="p-4">
                        <Badge variant={cfg.variant} size="sm" dot>
                          {cfg.label}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-slate-800">{app.role}</span>
                        <span className="text-slate-400 block text-[11px]">{app.city}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {app.skills.map((s) => (
                            <span
                              key={s}
                              className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 font-medium text-slate-700">
                        {app.teamName}
                      </td>
                      <td className="p-4 text-slate-400 text-[11px]">
                        {app.appliedAt}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          {app.status === "UNDER_REVIEW" && (
                            <>
                              <button
                                onClick={() => updateApplicationStatus(app.id, "ACCEPTED")}
                                className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                                title="Aceptar postulante"
                              >
                                <Check className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => updateApplicationStatus(app.id, "REJECTED")}
                                className="p-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100"
                                title="Rechazar postulante"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setActiveApplicant(app)}
                            className="text-xs"
                          >
                            Detalle
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* APPLICANT QUICK VIEW DRAWER */}
        {activeApplicant && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
              onClick={() => setActiveApplicant(null)}
            />
            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <div className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col p-6 space-y-6 overflow-y-auto text-left">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900">Detalle de Postulación</h3>
                  <button
                    onClick={() => setActiveApplicant(null)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={activeApplicant.avatar}
                    alt={activeApplicant.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-slate-200"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{activeApplicant.name}</h2>
                    <p className="text-xs text-blue-600 font-semibold">{activeApplicant.role}</p>
                    <p className="text-xs text-slate-500">{activeApplicant.email}</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Ciudad:</span>
                    <span className="font-semibold text-slate-900">{activeApplicant.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Equipo Asignado:</span>
                    <span className="font-semibold text-slate-900">{activeApplicant.teamName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Experiencia Declarada:</span>
                    <span className="font-semibold text-slate-900">{activeApplicant.experience}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700">Habilidades Técnicas:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeApplicant.skills.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      updateApplicationStatus(activeApplicant.id, "WAITLISTED");
                      setActiveApplicant(null);
                    }}
                  >
                    Mover a Espera
                  </Button>
                  <Button
                    size="sm"
                    className="bg-slate-950 text-white font-semibold"
                    onClick={() => {
                      updateApplicationStatus(activeApplicant.id, "ACCEPTED");
                      setActiveApplicant(null);
                    }}
                  >
                    Aceptar Postulante
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
