"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDemoModal } from "@/components/marketing/demo-modal-context"
import { trackEvent, useTrackedHref } from "@/lib/tracking"
import { AutomationVisual } from "@/components/marketing/automation-visual"

const DashboardPreview = dynamic(
  () => import("@/components/marketing/dashboard-preview").then((module) => module.DashboardPreview),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-2xl border border-border bg-card p-8">
        <div className="h-5 w-48 rounded bg-secondary/70 animate-pulse mb-6" />
        <div className="space-y-3">
          <div className="h-16 rounded-lg bg-secondary/70 animate-pulse" />
          <div className="h-16 rounded-lg bg-secondary/70 animate-pulse" />
          <div className="h-16 rounded-lg bg-secondary/70 animate-pulse" />
        </div>
      </div>
    ),
  },
)

export default function DemoPage() {
  const { openDemoModal } = useDemoModal()
  const trackedLoginHref = useTrackedHref("https://app.rentaflow.es/login")

  const openBooking = () => {
    trackEvent("cta_hero_book", { source: "demo_page" })
    openDemoModal()
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <section className="border-b border-border bg-secondary/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a la landing
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={trackedLoginHref}>Iniciar Sesión</Link>
          </Button>
        </div>
      </section>

      <div className="relative w-full perspective-1000 animate-in fade-in zoom-in-95 duration-1000 delay-500 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AutomationVisual />
      </div>

      <section className="py-12 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-6">
              <PlayCircle className="w-4 h-4 text-primary" />
              Demo guiada de producto
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Mira cómo RentAFlow convierte leads en contratos
            </h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Esta demo está preparada para simular un flujo real de agencia inmobiliaria, de captación a validación.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" onClick={openBooking}>
                Reservar Demo Comercial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#walkthrough">Ver walkthrough estático</Link>
              </Button>
            </div>
          </div>

          <DashboardPreview hideHeader />

          <section id="walkthrough" className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-foreground">Walkthrough rápido</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-border p-4">
                <p className="text-sm font-semibold text-foreground">1. Captura automática</p>
                <p className="text-sm text-muted-foreground mt-2">RentAFlow detecta leads entrantes desde portales y correo.</p>
              </div>
              <div className="rounded-xl border border-border p-4">
                <p className="text-sm font-semibold text-foreground">2. Cualificación inteligente</p>
                <p className="text-sm text-muted-foreground mt-2">Solicita documentación y calcula encaje del candidato.</p>
              </div>
              <div className="rounded-xl border border-border p-4">
                <p className="text-sm font-semibold text-foreground">3. Acción comercial</p>
                <p className="text-sm text-muted-foreground mt-2">Agenda visitas y deja todo listo para la firma del contrato.</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
