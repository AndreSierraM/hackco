"use client";

import React, { useState, useTransition } from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Layers,
  ShieldAlert,
  FileCode2,
  Send,
  Building,
  Mail,
  User,
  Phone,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/leads";
import { trackEvent } from "@/lib/analytics";
import { BRAND } from "@/config/brand";

interface AssessmentResult {
  problemSummary: string;
  potentialImpact: string;
  suggestedChallenge: string;
  recommendedScale: string;
  requiredData: string;
  duration: string;
  keyProfiles: string[];
  deliverables: string[];
  risksAndMitigation: string;
  nextStep: string;
}

const PRESET_PROBLEMS = [
  {
    label: "Conciliación manual de facturas y contratos",
    tag: "Operaciones & Finanzas",
    text: "Tenemos más de 150 personas revisando contratos mercantiles y conciliando facturas contra órdenes de compra de forma manual, lo que genera retrasos de hasta 6 días y discrepancias contables.",
    result: {
      problemSummary: "Cuello de botella operativo en cotejo documental y validación de cláusulas comerciales con alto costo de horas/hombre.",
      potentialImpact: "Reducción estimada del 75% en tiempos de auditoría y detección preventiva de discrepancias antes del cierre de mes.",
      suggestedChallenge: "Challenge de Conciliación Agéntica & Visión Artificial para Documentos Financieros",
      recommendedScale: "6 a 8 equipos multidisciplinarios (24 a 32 builders especializados)",
      requiredData: "Muestra de 100 a 200 contratos y facturas con datos sensibles anonimizados o sintéticos en formato PDF/JSON.",
      duration: "4 semanas (1 semana diseño + 2 semanas sprint + 1 semana evaluación)",
      keyProfiles: ["Ingeniero de IA / LLMs / OCR", "Backend Developer (Python/FastAPI)", "Product Designer B2B", "Especialista en Datos"],
      deliverables: ["Pipeline ejecutable de extracción y cotejo", "Dashboard de auditoría con alertas de discrepancia", "Repositorio en GitHub con documentación técnica", "Video demo y benchmarks de latencia/precisión"],
      risksAndMitigation: "Riesgo de alucinación en extracción: Mitigado mediante reglas determinísticas de validación cruzada y scores de confianza mínimos exigidos en la rúbrica.",
      nextStep: "Estructuración del Challenge Blueprint: definición de datasets seguros y rúbrica ponderada en 48 horas.",
    },
  },
  {
    label: "Detección de fraude en onboarding digital",
    tag: "Fintech & Riesgo",
    text: "Nuestro flujo de onboarding de clientes sufre suplantaciones de identidad y fraudes con cédulas adulteradas que los filtros biométricos actuales no logran capturar a tiempo.",
    result: {
      problemSummary: "Vulnerabilidad en verificación de identidad y riesgo reputacional/regulatorio en captación digital masiva.",
      potentialImpact: "Disminución proyectada del 60% en cuentas fraudulentas sin incrementar la fricción del usuario legítimo.",
      suggestedChallenge: "Challenge de Inteligencia Biométrica Forense & Análisis Comportamental en Tiempo Real",
      recommendedScale: "8 a 10 equipos (30 a 40 ingenieros de visión y ciberseguridad)",
      requiredData: "Logs de intentos de registro históricos anonimizados y lote de imágenes de prueba con adulteraciones sintéticas.",
      duration: "4 semanas con validación en entorno sandbox seguro.",
      keyProfiles: ["Computer Vision Specialist", "Data Scientist (Anomaly Detection)", "Mobile/Web Security Engineer", "UX Researcher"],
      deliverables: ["SDK de validación de documento vivo", "Modelo de scoring de riesgo multicriterio", "Contenedor Docker listo para pruebas en staging", "Reporte de tasa de falsos positivos vs falsos negativos"],
      risksAndMitigation: "Riesgo de falsos positivos en clientes legítimos: Evaluado con métricas estrictas de recall y fallbacks de verificación asistida.",
      nextStep: "Llamada de discovery técnico para definir los vectores de ataque prioritarios a someter a prueba.",
    },
  },
  {
    label: "Atención automatizada a clientes sin frustración",
    tag: "Customer Experience & BPO",
    text: "Nuestros canales de WhatsApp y mesa de ayuda reciben 50.000 solicitudes mensuales repetitivas; los chatbots tradicionales frustran a los usuarios y el equipo humano está desbordado.",
    result: {
      problemSummary: "Saturación del equipo de soporte de primer nivel debido a chatbots basados en árboles rígidos sin comprensión contextual.",
      potentialImpact: "Resolución autónoma de hasta el 55% de consultas complejas de primer contacto y derivación inteligente al agente humano.",
      suggestedChallenge: "Challenge de Asistentes Agénticos Integrados con Memoria y Conexión a Sistemas Core",
      recommendedScale: "8 equipos especializados en arquitecturas RAG y APIs transaccionales",
      requiredData: "Histórico anonimizado de preguntas frecuentes, manuales de servicio y documentación de endpoints de consulta.",
      duration: "3 a 4 semanas",
      keyProfiles: ["Prompt & Retrieval Engineer", "Fullstack Developer", "Conversational UX Designer", "Integrations Specialist"],
      deliverables: ["Agente conversacional con recuperación sobre base de conocimiento propia", "Fallback transparente a agentes humanos", "Trazabilidad de respuestas y salvaguardas éticas", "Prueba de carga con 1.000 conversaciones concurrentes"],
      risksAndMitigation: "Riesgo de respuestas fuera de política: Implementación de guardrails de seguridad y validación de esquema en cada respuesta generada.",
      nextStep: "Selección de los 3 casos de uso de soporte más frecuentes para calibrar las especificaciones del reto.",
    },
  },
];

export function ChallengeAssessment() {
  const [isPending, startTransition] = useTransition();
  const [problemText, setProblemText] = useState(PRESET_PROBLEMS[0].text);
  const [currentResult, setCurrentResult] = useState<AssessmentResult>(PRESET_PROBLEMS[0].result);
  const [activeTab, setActiveTab] = useState<"architecture" | "deliverables" | "form">("architecture");

  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    workEmail: "",
    phone: "",
  });

  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSelectPreset = (preset: typeof PRESET_PROBLEMS[0]) => {
    setProblemText(preset.text);
    setCurrentResult(preset.result);
    trackEvent("assessment_preset_selected", { preset: preset.label });
  };

  const handleCustomAnalyze = () => {
    if (!problemText.trim()) return;

    startTransition(() => {
      trackEvent("assessment_started", { length: problemText.length });

      // Generate dynamic assessment based on keywords in custom input
      const lower = problemText.toLowerCase();
      let genChallenge = "Challenge de Optimización Operativa & Soluciones de Software a Medida";
      let genImpact = "Reducción significativa de tiempos de ciclo y automatización de puntos de fricción.";
      let genProfiles = ["AI Engineer", "Fullstack Developer", "Product Designer", "Data Analyst"];

      if (lower.includes("crédito") || lower.includes("banc") || lower.includes("financ") || lower.includes("pago")) {
        genChallenge = "Challenge de Algoritmos Financieros & Evaluación Alternativa de Riesgo";
        genImpact = "Aumento en la velocidad de desembolso y precisión en scoring sin elevar tasa de mora.";
        genProfiles = ["Fintech Data Scientist", "Risk Engineer", "Backend Developer", "Security Auditor"];
      } else if (lower.includes("ia") || lower.includes("agente") || lower.includes("llm") || lower.includes("document")) {
        genChallenge = "Challenge de IA Aplicada y Pipelines Autónomos de Negocio";
        genImpact = "Automatización de flujos no estructurados con salvaguardas de auditoría permanente.";
        genProfiles = ["AI/LLM Engineer", "Machine Learning Specialist", "UX/UI Designer", "Backend Developer"];
      } else if (lower.includes("logístic") || lower.includes("inventario") || lower.includes("ruta") || lower.includes("entrega")) {
        genChallenge = "Challenge de Optimización Logística y Visibilidad en Tiempo Real";
        genImpact = "Disminución de costos por entrega y trazabilidad punta a punta de órdenes.";
        genProfiles = ["Operations Researcher", "Algorithms Engineer", "Fullstack Developer", "Data Visualization"];
      }

      setCurrentResult({
        problemSummary: `Dolor operativo formulado: ${problemText.slice(0, 140)}...`,
        potentialImpact: genImpact,
        suggestedChallenge: genChallenge,
        recommendedScale: "6 a 10 equipos en competencia (20 a 40 profesionales)",
        requiredData: "Datasets históricos de muestra, reglas de negocio documentadas y endpoints de prueba.",
        duration: "4 semanas estructuradas de diseño, ejecución y evaluación.",
        keyProfiles: genProfiles,
        deliverables: [
          "Múltiples prototipos funcionales comparables",
          "Código fuente ejecutable con documentación en GitHub",
          "Demos interactivas evaluadas con rúbrica ciega",
          "Ruta de transferencia técnica hacia piloto en producción",
        ],
        risksAndMitigation: "Protección de IP y datos mediante acuerdos de confidencialidad estrictos y entornos de prueba anonimizados.",
        nextStep: "Sesión de calibración técnica de 30 minutos con un Director de Metodología de Kamino.",
      });

      trackEvent("assessment_completed", { challenge: genChallenge });
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.workEmail || !problemText) {
      setErrorMessage("Por favor completa los campos requeridos para enviar la evaluación.");
      setFormState("error");
      return;
    }

    setFormState("loading");
    setErrorMessage("");
    trackEvent("lead_started", { company: formData.company });

    try {
      const res = await submitLead({
        name: formData.name,
        company: formData.company,
        role: formData.role,
        workEmail: formData.workEmail,
        phone: formData.phone,
        problemDescription: problemText,
        selectedGoal: currentResult.suggestedChallenge,
        sourcePage: "challenge-assessment",
        assessmentData: currentResult as unknown as Record<string, unknown>,
      });

      if (res.success) {
        setFormState("success");
        trackEvent("lead_submitted", { company: formData.company, leadId: res.leadId });
      } else {
        setFormState("error");
        setErrorMessage("Hubo un inconveniente enviando tu solicitud. Por favor intenta de nuevo.");
      }
    } catch {
      setFormState("error");
      setErrorMessage("Error de conexión. Tus datos quedaron guardados localmente para reintentar.");
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-[#DCDCD5] shadow-editorial-elevated overflow-hidden text-left">
      {/* Top Header */}
      <div className="p-5 sm:p-7 bg-[#141517] text-white border-b border-[#252830]">
        <div className="max-w-3xl space-y-1.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#252830] text-[#93C5FD] text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider border border-[#3B82F6]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>Challenge Assessment · Diagnóstico Técnico</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
            Escribe un problema de tu empresa. Observa la arquitectura en segundos.
          </h3>
          <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
            Describe el cuello de botella en tus propias palabras o selecciona un reto típico para generar la propuesta técnica:
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Problem Input & Presets */}
        <div className="lg:col-span-5 space-y-3.5">
          <div>
            <label htmlFor="assessment-problem-input" className="block text-[11px] font-mono font-bold text-[#141517] uppercase tracking-wider mb-1.5">
              1. Describe el dolor o proceso a optimizar
            </label>
            <textarea
              id="assessment-problem-input"
              rows={4}
              value={problemText}
              onChange={(e) => setProblemText(e.target.value)}
              placeholder="Ej. Tumbamos 4 días en conciliar facturas contra órdenes de compra por ser un proceso manual..."
              className="w-full rounded-xl sm:rounded-2xl border border-[#DCDCD5] bg-[#FBFBFA] p-3 text-xs sm:text-sm text-[#141517] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#141517] focus:bg-white transition-all resize-none shadow-xs font-sans leading-relaxed"
            />
          </div>

          {/* Quick Presets */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">
              O selecciona un reto predefinido:
            </span>
            <div className="flex flex-col gap-1.5">
              {PRESET_PROBLEMS.map((preset) => {
                const isSelected = problemText === preset.text;
                return (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => handleSelectPreset(preset)}
                    className={`min-h-[44px] p-2.5 rounded-xl text-left text-xs transition-all duration-150 border cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? "bg-[#EEF4FF] border-[#3B82F6] text-[#0E357E] font-semibold ring-1 ring-[#3B82F6]/20"
                        : "bg-[#F9F9F8] border-[#E8E8E4] text-[#52535A] hover:bg-white hover:text-[#141517]"
                    }`}
                  >
                    <span className="truncate">{preset.label}</span>
                    <span className="text-[9px] font-mono text-[#71717A] shrink-0">{preset.tag}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <Button
            onClick={handleCustomAnalyze}
            disabled={isPending || !problemText.trim()}
            className="w-full min-h-[44px] bg-[#141517] text-white hover:bg-[#252830] active:scale-[0.98] font-bold py-3 text-xs sm:text-sm shadow-editorial transition-all"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            {isPending ? "Calculando diagnóstico..." : "Estructurar reto con esta información"}
          </Button>

          <p className="text-[11px] text-[#71717A] flex items-center gap-1.5 pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
            <span>Sin compromiso · Datos protegidos bajo confidencialidad comercial</span>
          </p>
        </div>

        {/* Right Column: Dynamic Diagnosis & Lead Capture */}
        <div className="lg:col-span-7 bg-[#F9F9F8] rounded-2xl border border-[#E8E8E4] p-5 sm:p-7 space-y-6">
          {/* Tabs Selector */}
          <div className="flex items-center justify-between border-b border-[#E8E8E4] pb-3 gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("architecture")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === "architecture"
                    ? "bg-[#141517] text-white"
                    : "text-[#52535A] hover:text-[#141517] bg-white border border-[#E8E8E4]"
                }`}
              >
                Arquitectura del Reto
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("deliverables")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === "deliverables"
                    ? "bg-[#141517] text-white"
                    : "text-[#52535A] hover:text-[#141517] bg-white border border-[#E8E8E4]"
                }`}
              >
                Entregables & Salvaguardas
              </button>
            </div>

            <button
              type="button"
              onClick={() => setActiveTab("form")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                activeTab === "form"
                  ? "bg-[#1846A3] text-white shadow-xs"
                  : "bg-[#EEF4FF] text-[#1846A3] hover:bg-[#D3E2FE]"
              }`}
            >
              <span>Solicitar propuesta</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* TAB 1: ARQUITECTURA */}
          {activeTab === "architecture" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-white border border-[#E8E8E4] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#1846A3] font-bold block">
                  Challenge Sugerido
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#141517] leading-tight">
                  {currentResult.suggestedChallenge}
                </h4>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  {currentResult.potentialImpact}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-white border border-[#E8E8E4]">
                  <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">Duración</span>
                  <p className="font-bold text-[#141517] mt-0.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#1846A3]" />
                    {currentResult.duration}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8E8E4]">
                  <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">Escala</span>
                  <p className="font-bold text-[#141517] mt-0.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#1846A3]" />
                    {currentResult.recommendedScale}
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white border border-[#E8E8E4]">
                  <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">Modalidad</span>
                  <p className="font-bold text-[#141517] mt-0.5 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-[#1846A3]" />
                    Híbrido / Remoto
                  </p>
                </div>
              </div>

              {/* Profiles */}
              <div className="p-3.5 rounded-xl bg-white border border-[#E8E8E4] space-y-1.5">
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">
                  Perfiles Técnicos Seleccionados para el Sprint:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentResult.keyProfiles.map((prof) => (
                    <span
                      key={prof}
                      className="px-2 py-0.5 rounded-md bg-[#F4F4F1] text-[#141517] text-[11px] font-mono font-medium border border-[#E8E8E4]"
                    >
                      {prof}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#EEF4FF] border border-[#D3E2FE] text-xs text-[#0E357E] flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1846A3] shrink-0 mt-0.5" />
                <div>
                  <strong>Siguiente paso recomendado:</strong> {currentResult.nextStep}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ENTREGABLES & RIESGOS */}
          {activeTab === "deliverables" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-white border border-[#E8E8E4] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#059669] font-bold block">
                  Entregables Concretos que Recibe tu Empresa:
                </span>
                <ul className="space-y-2 text-xs text-[#52535A]">
                  {currentResult.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FileCode2 className="w-4 h-4 text-[#1846A3] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E8E4] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#DC2626] font-bold flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#DC2626]" />
                  Mitigación de Riesgos & Datos Requeridos:
                </span>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  <strong>Datasets:</strong> {currentResult.requiredData}
                </p>
                <p className="text-xs text-[#52535A] leading-relaxed">
                  <strong>Salvaguardas:</strong> {currentResult.risksAndMitigation}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3 / DIRECT FORM: CONVERSION */}
          {activeTab === "form" && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {formState === "success" ? (
                <div className="p-6 rounded-2xl bg-white border border-[#A7F3D0] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#141517]">Assessment Enviado con Éxito</h4>
                    <p className="text-xs sm:text-sm text-[#52535A] mt-1 max-w-md mx-auto">
                      Hemos recibido tu problema. Un Director de Programa de Kamino revisará la viabilidad técnica y te contactará en menos de 24 horas hábiles a <strong>{formData.workEmail}</strong>.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                    <a
                      href={BRAND.calendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button size="sm" className="w-full sm:w-auto bg-[#141517] text-white">
                        Agendar revisión técnica directa →
                      </Button>
                    </a>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setFormState("idle");
                        setActiveTab("architecture");
                      }}
                    >
                      Volver al diagnóstico
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div className="p-3 rounded-xl bg-white border border-[#E8E8E4]">
                    <span className="text-[10px] font-mono uppercase text-[#71717A] block">Reto a evaluar:</span>
                    <p className="text-xs font-bold text-[#141517] truncate mt-0.5">
                      {currentResult.suggestedChallenge}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="lead-name" className="text-[11px] font-mono text-[#52535A] block mb-1">Nombre completo *</label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ej. Ana María Gómez"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#DCDCD5] text-xs text-[#141517] focus:outline-none focus:ring-2 focus:ring-[#141517]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="lead-company" className="text-[11px] font-mono text-[#52535A] block mb-1">Empresa u Organización *</label>
                      <div className="relative">
                        <Building className="w-3.5 h-3.5 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Ej. Banco / Seguros / Retail"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#DCDCD5] text-xs text-[#141517] focus:outline-none focus:ring-2 focus:ring-[#141517]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="lead-role" className="text-[11px] font-mono text-[#52535A] block mb-1">Cargo o Área *</label>
                      <div className="relative">
                        <Briefcase className="w-3.5 h-3.5 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-role"
                          type="text"
                          required
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          placeholder="Ej. VP Innovación / CTO / Head of AI"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#DCDCD5] text-xs text-[#141517] focus:outline-none focus:ring-2 focus:ring-[#141517]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="lead-email" className="text-[11px] font-mono text-[#52535A] block mb-1">Email Corporativo *</label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="lead-email"
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="ana@empresa.com"
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#DCDCD5] text-xs text-[#141517] focus:outline-none focus:ring-2 focus:ring-[#141517]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead-phone" className="text-[11px] font-mono text-[#52535A] block mb-1">Teléfono o WhatsApp (Opcional)</label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="lead-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+57 300 123 4567"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#DCDCD5] text-xs text-[#141517] focus:outline-none focus:ring-2 focus:ring-[#141517]"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                      {errorMessage}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full bg-[#1846A3] hover:bg-[#133882] text-white font-semibold py-3 text-xs sm:text-sm"
                    rightIcon={<Send className="w-3.5 h-3.5" />}
                  >
                    {formState === "loading" ? "Enviando reto a Kamino..." : "Enviar este assessment y agendar revisión técnica"}
                  </Button>
                </form>
              )}
            </div>
          )}

          {/* Action Bar Footer */}
          {activeTab !== "form" && (
            <div className="pt-4 border-t border-[#E8E8E4] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-[#71717A]">
                ¿Quieres que nuestro equipo evalúe este reto sin costo?
              </span>
              <Button
                size="sm"
                onClick={() => setActiveTab("form")}
                className="w-full sm:w-auto bg-[#141517] text-white hover:bg-[#252830] font-semibold"
                rightIcon={<ChevronRight className="w-3.5 h-3.5" />}
              >
                Solicitar evaluación técnica formal
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
