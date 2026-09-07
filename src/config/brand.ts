/**
 * Centralized Brand Configuration
 * All references to [BRAND] originate here so it can be customized or renamed in a single place.
 */

export const BRAND = {
  name: "Kamino",
  shortName: "Kamino",
  legalName: "Kamino Innovation Labs S.A.S.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://kamino.co",
  tagline: "Tus problemas de negocio merecen más de una solución.",
  claim: "Convierte un reto operativo en múltiples prototipos tecnológicos construidos y evaluados en semanas.",
  description:
    "Plataforma y operador de innovación abierta B2B. Diseñamos retos técnicos, convocamos talento especializado, operamos sprints de construcción y acompañamos la mejor solución hasta el piloto en producción.",
  origin: "Bogotá, Colombia · Para América Latina",
  contactEmail: "hola@kamino.co",
  salesEmail: "empresas@kamino.co",
  socials: {
    linkedin: "https://linkedin.com/company/kamino-innovation",
    github: "https://github.com/kamino-latam",
    twitter: "https://twitter.com/kamino_latam",
  },
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || "https://cal.com/kamino/evaluar-reto",
  demoOrg: {
    name: "Demo Corporativo",
    slug: "demo",
    tagline: "Entorno interactivo para visualización de programas de innovación",
    location: "Bogotá, Colombia",
  },
} as const;

export type BrandConfig = typeof BRAND;
