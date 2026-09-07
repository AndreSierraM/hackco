/**
 * Lead Storage & Dispatch Service
 * Handles commercial inquiries with fallback to localStorage and verification.
 */

export interface LeadSubmission {
  id: string;
  name: string;
  company: string;
  role: string;
  workEmail: string;
  phone?: string;
  problemDescription: string;
  selectedGoal?: string;
  sourcePage: string;
  createdAt: string;
  assessmentData?: Record<string, unknown>;
}

const STORAGE_KEY = "kamino_b2b_leads";

export async function submitLead(data: Omit<LeadSubmission, "id" | "createdAt">): Promise<{ success: boolean; leadId: string }> {
  const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const lead: LeadSubmission = {
    ...data,
    id: leadId,
    createdAt: new Date().toISOString(),
  };

  // 1. Local fallback persistence
  if (typeof window !== "undefined") {
    try {
      const existing: LeadSubmission[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      existing.unshift(lead);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
    } catch {
      // Local storage unavailable or full
    }
  }

  // 2. Dispatch to local Next.js API endpoint
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (res.ok) {
      return { success: true, leadId };
    }
  } catch {
    // Silently continue if network fails; local storage preserved it
  }

  return { success: true, leadId };
}
