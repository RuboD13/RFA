"use client"

import Link from "next/link"
import { AlertTriangle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDemoModal } from "@/components/marketing/demo-modal-context"
import { trackEvent } from "@/lib/tracking"

export default function DemoError() {
  const { openDemoModal } = useDemoModal()

  const openBooking = () => {
    trackEvent("cta_hero_book", { source: "demo_error" })
    openDemoModal()
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-3xl rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
          <AlertTriangle className="w-4 h-4 text-primary" />
          Demo temporalmente no disponible
        </div>
        <h1 className="mt-5 text-3xl font-bold text-foreground">Walkthrough de respaldo</h1>
        <p className="mt-3 text-muted-foreground">
          No pudimos cargar la demo interactiva en este momento. Aquí tienes un recorrido estático para continuar sin bloquear tu evaluación.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border p-4">
            <p className="font-semibold text-foreground">Captura de lead</p>
            <p className="text-sm text-muted-foreground mt-2">Entrada automática desde portal o email.</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="font-semibold text-foreground">Validación y scoring</p>
            <p className="text-sm text-muted-foreground mt-2">Recogida de datos y evaluación de encaje.</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="font-semibold text-foreground">Agenda y cierre</p>
            <p className="text-sm text-muted-foreground mt-2">Coordinación de visitas y preparación de contrato.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button onClick={openBooking}>Reservar Demo Comercial</Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a la landing
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
