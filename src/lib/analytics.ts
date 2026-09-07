/**
 * Lightweight B2B Analytics & Event Tracking
 * Dispatches key conversion events to dataLayer / window analytics if present,
 * and logs in development for verification.
 */

export type AnalyticsEvent =
  | "hero_cta_clicked"
  | "assessment_started"
  | "assessment_preset_selected"
  | "assessment_completed"
  | "lead_started"
  | "lead_submitted"
  | "pricing_viewed"
  | "case_study_viewed"
  | "enterprise_contact_clicked"
  | "builder_cta_clicked";

export interface EventProperties {
  [key: string]: string | number | boolean | undefined | null;
}

export function trackEvent(event: AnalyticsEvent, properties?: EventProperties): void {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    properties: properties || {},
    timestamp: new Date().toISOString(),
    url: window.location.pathname,
  };

  // 1. Dispatch custom DOM event for any embedded listener
  window.dispatchEvent(new CustomEvent("kamino:track", { detail: payload }));

  // 2. Google Tag Manager / GTM dataLayer if present
  const win = window as unknown as { dataLayer?: unknown[] };
  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push(payload);
  }

  // 3. Development logging
  if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics] ${event}`, payload.properties);
  }
}
