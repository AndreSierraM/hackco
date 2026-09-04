/**
 * Centralized Brand Configuration
 * All references to [BRAND] originate here so it can be customized or renamed in a single place.
 */

export const BRAND = {
  name: "Kamino",
  shortName: "Kamino",
  legalName: "Kamino Innovation Labs S.A.S.",
  tagline: "Innovation, built.",
  claim: "Convierte retos en soluciones que sí se construyen.",
  description:
    "Diseñamos y operamos hackathons y programas de innovación de principio a fin: estrategia, convocatoria, plataforma, talento, evaluación y seguimiento.",
  origin: "Nacida en Colombia · Diseñada para LATAM",
  contactEmail: "hola@kamino.co",
  salesEmail: "empresas@kamino.co",
  socials: {
    twitter: "https://twitter.com/kamino_latam",
    linkedin: "https://linkedin.com/company/kamino-innovation",
    github: "https://github.com/kamino-latam",
  },
  demoOrg: {
    name: "Northstar Labs",
    slug: "northstar",
    tagline: "Inteligencia artificial aplicada a operaciones de alta escala",
    location: "Bogotá, Colombia",
  },
} as const;

export type BrandConfig = typeof BRAND;
