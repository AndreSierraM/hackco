import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PlatformProvider } from "@/context/PlatformContext";
import { CommandPalette } from "@/components/common/CommandPalette";
import { NotificationDrawer } from "@/components/common/NotificationDrawer";
import { RoleSwitcher } from "@/components/common/RoleSwitcher";
import { BRAND } from "@/config/brand";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: `${BRAND.name} — ${BRAND.tagline}`,
  description: BRAND.description,
  keywords: [
    "hackathon corporativo Colombia",
    "innovación abierta Colombia",
    "retos de innovación empresas",
    "challenge de innovación empresarial",
    "prototipos IA empresas",
    "corporate hackathon LATAM",
    "soluciones tecnológicas a medida",
    "validación técnica de software",
    "Kamino",
  ],
  authors: [{ name: "Kamino Innovation Labs" }],
  creator: "Kamino Innovation Labs",
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    type: "website",
    locale: "es_CO",
    siteName: BRAND.name,
    url: BRAND.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
  },
  alternates: {
    canonical: BRAND.siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BRAND.siteUrl}/#organization`,
      name: BRAND.name,
      legalName: BRAND.legalName,
      url: BRAND.siteUrl,
      description: BRAND.description,
      email: BRAND.salesEmail,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bogotá",
        addressCountry: "CO",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BRAND.siteUrl}/#website`,
      url: BRAND.siteUrl,
      name: BRAND.name,
      description: BRAND.description,
      publisher: {
        "@id": `${BRAND.siteUrl}/#organization`,
      },
      inLanguage: "es-CO",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FBFBFA] text-[#141517] selection:bg-[#E9F0FE] selection:text-[#1846A3]">
        <PlatformProvider>
          {children}
          <CommandPalette />
          <NotificationDrawer />
          <RoleSwitcher />
        </PlatformProvider>
      </body>
    </html>
  );
}
