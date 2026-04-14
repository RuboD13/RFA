"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useDemoModal } from "./demo-modal-context"

export function CTASection() {
  const { openDemoModal } = useDemoModal()

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance tracking-tight leading-[1.1]">
          ¿Listo para automatizar tus leads de alquileres de todos tus portales inmobiliarios?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty font-normal leading-relaxed">
          Delega la atención y cualificación de leads a tu propio asistente virtual y recupera tu tiempo desde hoy mismo.
        </p>

        {/* Benefits */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-center gap-3 sm:gap-4 mt-8 max-w-sm sm:max-w-none mx-auto">
          {["Agente IA en WhatsApp con tu marca", "Onboarding guiado", "Cancela cuando quieras"].map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-sm text-primary-foreground/90 font-normal">
              <CheckCircle2 className="w-4 h-4" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 max-w-md sm:max-w-none mx-auto">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base px-8 font-medium" onClick={openDemoModal}>
            Reservar Demo Gratuita
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-base px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium"
            asChild
          >
            <Link href="#precios">Ver Planes y Precios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
