"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { usePlatform } from "@/context/PlatformContext";
import { Program, ProgramFormat, ProgramStatus } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Search,
  SlidersHorizontal,
  Calendar,
  MapPin,
  Trophy,
  Users,
  ArrowRight,
  Sparkles,
  X,
  RotateCcw,
  Check,
} from "lucide-react";
import { clsx } from "clsx";

export default function HackathonsDiscoveryPage() {
  const { programs } = usePlatform();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Advanced Filters
  const [selectedFormat, setSelectedFormat] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [selectedCity, setSelectedCity] = useState<string>("ALL");

  const categories = [
    "Todos",
    "AI",
    "Fintech",
    "Climate",
    "GovTech",
    "Health",
    "Data",
    "Social Impact",
  ];

  const cities = ["ALL", "Bogotá", "Medellín", "Barranquilla", "Cali", "Remoto / Online"];

  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      // Category filter
      if (selectedCategory !== "Todos" && p.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (
        searchQuery &&
        !p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.oneLiner.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.city.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.organizationName.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      // Format filter
      if (selectedFormat !== "ALL" && p.format !== selectedFormat) {
        return false;
      }
      // Status filter
      if (selectedStatus !== "ALL" && p.status !== selectedStatus) {
        return false;
      }
      // City filter
      if (selectedCity !== "ALL") {
        if (selectedCity === "Remoto / Online" && p.format !== "ONLINE") return false;
        if (selectedCity !== "Remoto / Online" && p.city !== selectedCity) return false;
      }
      return true;
    });
  }, [programs, selectedCategory, searchQuery, selectedFormat, selectedStatus, selectedCity]);

  const resetFilters = () => {
    setSelectedCategory("Todos");
    setSelectedFormat("ALL");
    setSelectedStatus("ALL");
    setSelectedCity("ALL");
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedCategory !== "Todos" ||
    selectedFormat !== "ALL" ||
    selectedStatus !== "ALL" ||
    selectedCity !== "ALL" ||
    searchQuery !== "";

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Header />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Compact Hero */}
        <div className="text-left space-y-3 mb-8">
          <Badge variant="primary" size="sm">
            Marketplace de Retos Abiertos
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Encuentra tu próximo reto.
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Compite con los mejores builders de América Latina en desafíos corporativos, open innovation y hackathons con impacto real.
          </p>
        </div>

        {/* Search & Action Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar hackathons, empresas, tecnologías o ciudades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <Button
            variant="outline"
            size="md"
            onClick={() => setIsFilterDrawerOpen(true)}
            leftIcon={<SlidersHorizontal className="w-4 h-4 text-slate-500" />}
            className="w-full sm:w-auto shrink-0 font-medium"
          >
            <span>Filtros avanzados</span>
            {hasActiveFilters && (
              <span className="w-2 h-2 rounded-full bg-blue-600 ml-1" />
            )}
          </Button>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={clsx(
                "px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all select-none border",
                selectedCategory === cat
                  ? "bg-slate-950 text-white border-slate-950 shadow-xs"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <span>
            Mostrando <strong>{filteredPrograms.length}</strong> {filteredPrograms.length === 1 ? "reto" : "retos"} disponibles
          </span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Restablecer filtros
            </button>
          )}
        </div>

        {/* Hackathon Cards Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => {
              const statusBadges: Record<ProgramStatus, { label: string; variant: "success" | "primary" | "warning" | "neutral" }> = {
                BUILDING: { label: "En Construcción", variant: "primary" },
                APPLICATIONS_OPEN: { label: "Postulaciones Abiertas", variant: "success" },
                TEAM_FORMATION: { label: "Armando Equipos", variant: "warning" },
                SUBMISSIONS_OPEN: { label: "Entregas Abiertas", variant: "warning" },
                JUDGING: { label: "En Evaluación", variant: "warning" },
                FINALISTS: { label: "Finalistas", variant: "primary" },
                COMPLETED: { label: "Finalizado", variant: "neutral" },
                DRAFT: { label: "Borrador", variant: "neutral" },
                ARCHIVED: { label: "Archivado", variant: "neutral" },
              };

              const currentBadge = statusBadges[program.status] || {
                label: program.status,
                variant: "neutral",
              };

              return (
                <div
                  key={program.id}
                  className="bg-white rounded-2xl border border-[#E8E8E4] shadow-editorial overflow-hidden flex flex-col justify-between hover:border-[#141517] hover:shadow-editorial-hover transition-all text-left group"
                >
                  <div>
                    {/* Cover Image & Category */}
                    <div className="relative h-44 w-full overflow-hidden bg-[#141517]">
                      <img
                        src={program.coverImage}
                        alt={program.title}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white font-mono font-medium text-[10px] tracking-wider uppercase border border-white/10">
                          {program.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge variant={currentBadge.variant} size="sm" dot>
                          {currentBadge.label}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <img
                          src={program.logo}
                          alt={program.organizationName}
                          className="w-6 h-6 rounded-md object-cover border border-white/20"
                        />
                        <span className="text-white text-xs font-semibold drop-shadow-xs">
                          {program.organizationName}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {program.oneLiner}
                      </p>

                      {/* Metadata Chips */}
                      <div className="pt-2 space-y-1.5 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>
                            {program.city} · {program.format}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>
                            {program.startDate} al {program.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span className="font-bold text-slate-900">{program.prizePool}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer & Action */}
                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                    <span className="text-[11px] text-slate-400">
                      Cierre: {program.applicationDeadline}
                    </span>
                    <Link href={`/hackathons/${program.slug}`}>
                      <Button size="sm" variant="ghost" className="font-bold text-blue-600 hover:text-blue-800" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                        Ver reto
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">No encontramos retos con esos filtros</h3>
              <p className="text-xs text-slate-500 mt-1">
                Prueba ajustando los términos de búsqueda o restableciendo los filtros avanzados.
              </p>
            </div>
            <Button size="sm" variant="outline" onClick={resetFilters}>
              Restablecer todos los filtros
            </Button>
          </div>
        )}

        {/* Filter Drawer / Bottom Sheet */}
        {isFilterDrawerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
              onClick={() => setIsFilterDrawerOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <div className="w-screen max-w-sm bg-white border-l border-slate-200 shadow-2xl flex flex-col">
                <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-slate-700" />
                    <h3 className="text-sm font-bold text-slate-900">Filtros Avanzados</h3>
                  </div>
                  <button
                    onClick={() => setIsFilterDrawerOpen(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5 space-y-6 text-xs text-left">
                  {/* Format Filter */}
                  <div className="space-y-2">
                    <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                      Modalidad
                    </span>
                    <div className="space-y-1">
                      {[
                        { id: "ALL", label: "Todas las modalidades" },
                        { id: "HIBRIDO", label: "Híbrido" },
                        { id: "PRESENCIAL", label: "Presencial" },
                        { id: "ONLINE", label: "100% Online" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedFormat(item.id)}
                          className={clsx(
                            "w-full flex items-center justify-between p-2 rounded-xl text-left font-medium",
                            selectedFormat === item.id
                              ? "bg-blue-50 text-blue-700 font-bold"
                              : "hover:bg-slate-50 text-slate-700"
                          )}
                        >
                          <span>{item.label}</span>
                          {selectedFormat === item.id && <Check className="w-3.5 h-3.5" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Status Filter */}
                  <div className="space-y-2">
                    <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                      Estado del Programa
                    </span>
                    <div className="space-y-1">
                      {[
                        { id: "ALL", label: "Todos los estados" },
                        { id: "APPLICATIONS_OPEN", label: "Postulaciones Abiertas" },
                        { id: "BUILDING", label: "En Curso / Construcción" },
                        { id: "COMPLETED", label: "Finalizado" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedStatus(item.id)}
                          className={clsx(
                            "w-full flex items-center justify-between p-2 rounded-xl text-left font-medium",
                            selectedStatus === item.id
                              ? "bg-blue-50 text-blue-700 font-bold"
                              : "hover:bg-slate-50 text-slate-700"
                          )}
                        >
                          <span>{item.label}</span>
                          {selectedStatus === item.id && <Check className="w-3.5 h-3.5" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* City Filter */}
                  <div className="space-y-2">
                    <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                      Ciudad / Región
                    </span>
                    <div className="space-y-1">
                      {cities.map((city) => (
                        <button
                          key={city}
                          onClick={() => setSelectedCity(city)}
                          className={clsx(
                            "w-full flex items-center justify-between p-2 rounded-xl text-left font-medium",
                            selectedCity === city
                              ? "bg-blue-50 text-blue-700 font-bold"
                              : "hover:bg-slate-50 text-slate-700"
                          )}
                        >
                          <span>{city === "ALL" ? "Todas las ciudades" : city}</span>
                          {selectedCity === city && <Check className="w-3.5 h-3.5" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={resetFilters}
                  >
                    Restablecer
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-slate-950 text-white"
                    onClick={() => setIsFilterDrawerOpen(false)}
                  >
                    Ver {filteredPrograms.length} retos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
