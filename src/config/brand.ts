/**
 * Centralized Brand Configuration
 * All references to [BRAND] originate here so it can be customized or renamed in a single place.
 */

export const BRAND = {
  name: "Kamino",
  shortName: "Kamino",
  legalName: "Kamino Innovation Labs S.A.S.",
  tagline: "Tú tienes un reto. Nosotros hacemos que cientos de personas quieran resolverlo.",
  claim: "Convierte los problemas de tu empresa en soluciones que sí se construyen.",
  description:
    "Diseñamos y operamos hackathons de principio a fin: reto, convocatoria, talento, plataforma, jurados y acompañamiento hasta convertir las mejores ideas en pilotos reales.",
  origin: "Hecho en Colombia · Para América Latina",
  contactEmail: "hola@kamino.co",
  salesEmail: "empresas@kamino.co",
  socials: {
    twitter: "https://twitter.com/kamino_latam",
    linkedin: "https://linkedin.com/company/kamino-innovation",
    github: "https://github.com/kamino-latam",
  },
  demoOrg: {
    name: "Demo Corporativo",
    slug: "demo",
    tagline: "Entorno interactivo para visualización de programas de innovación",
    location: "Bogotá, Colombia",
  },
} as const;

export type BrandConfig = typeof BRAND;
