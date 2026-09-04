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
  title: `${BRAND.name} — ${BRAND.claim}`,
  description: BRAND.description,
  keywords: ["hackathons", "innovacion abierta", "colombia", "latam", "desafios de ia", "bounties", "startups"],
  openGraph: {
    title: `${BRAND.name} — ${BRAND.claim}`,
    description: BRAND.description,
    type: "website",
    locale: "es_CO",
  },
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
