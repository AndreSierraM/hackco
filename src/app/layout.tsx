import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Instrument_Serif } from "next/font/google";
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

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kamino.co"),
  title: `${BRAND.name} — ${BRAND.claim}`,
  description: BRAND.description,
  keywords: [
    "organizar hackathon",
    "organizar hackathon Colombia",
    "plataforma de hackathons",
    "hackathons Colombia",
    "hackathon empresarial",
    "hackathon corporativo",
    "hackathon universitario",
    "innovación abierta Colombia",
    "retos de innovación",
    "plataforma innovación abierta",
    "organizar reto de innovación",
    "hackathons para empresas",
    "corporate hackathon LATAM",
    "Kamino"
  ],
  authors: [{ name: "Kamino Innovation Labs" }],
  creator: "Kamino Innovation Labs",
  openGraph: {
    title: `${BRAND.name} — ${BRAND.claim}`,
    description: BRAND.description,
    type: "website",
    locale: "es_CO",
    siteName: BRAND.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — ${BRAND.claim}`,
    description: BRAND.description,
  },
  alternates: {
    canonical: "https://hackco.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://hackco.vercel.app/#organization",
      name: BRAND.name,
      legalName: BRAND.legalName,
      url: "https://hackco.vercel.app",
      description: BRAND.description,
      email: BRAND.contactEmail,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bogotá",
        addressCountry: "CO",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://hackco.vercel.app/#website",
      url: "https://hackco.vercel.app",
      name: BRAND.name,
      description: BRAND.description,
      publisher: {
        "@id": "https://hackco.vercel.app/#organization",
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
      className={`${jakarta.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} h-full antialiased`}
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
