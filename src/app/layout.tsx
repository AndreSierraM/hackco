import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PlatformProvider } from "@/context/PlatformContext";
import { CommandPalette } from "@/components/common/CommandPalette";
import { NotificationDrawer } from "@/components/common/NotificationDrawer";
import { RoleSwitcher } from "@/components/common/RoleSwitcher";
import { BRAND } from "@/config/brand";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#FBFBFA] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
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
