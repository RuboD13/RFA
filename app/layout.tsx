import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { DemoModalProvider } from "@/components/marketing/demo-modal-context"
import { DemoModal } from "@/components/marketing/demo-modal"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "RentAFlow | Automatiza tu Gestión de Alquileres con IA",
  description:
    "Convierte leads de alquiler en contratos automáticamente. Automatiza respuestas, validaciones, visitas y documentación con inteligencia artificial.",
  keywords: [
    "gestión alquileres",
    "automatización inmobiliaria",
    "IA inmobiliaria",
    "CRM alquileres",
    "leads inmobiliarios",
  ],
  authors: [{ name: "RentAFlow" }],
  openGraph: {
    title: "RentAFlow | Automatiza tu Gestión de Alquileres con IA",
    description: "Convierte leads de alquiler en contratos automáticamente.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <DemoModalProvider>
          {children}
          <DemoModal />
        </DemoModalProvider>
      </body>
    </html>
  )
}
