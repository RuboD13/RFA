"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useDemoModal } from "./demo-modal-context"
import { trackEvent, useTrackedHref } from "@/lib/tracking"

export function CTASection() {
  const { openDemoModal } = useDemoModal()
  const demoHref = useTrackedHref("/demo")

  const handleBookDemoClick = () => {
    trackEvent("cta_hero_book", { source: "cta_section" })
    openDemoModal()
  }

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
          ¿Listo para automatizar tus leads de alquileres de todos tus portales inmobiliarios?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
          Únete a las +50 agencias en toda España que ya usan RentAFlow. Primer mes gratis, sin compromiso.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {["Sin tarjeta requerida", "Configuración inicial muy sencilla", "Cancela cuando quieras"].map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-sm text-primary-foreground/90">
              <CheckCircle2 className="w-4 h-4" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button size="lg" variant="secondary" className="text-base px-8" onClick={handleBookDemoClick}>
            Reservar Demo Gratuita
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href={demoHref}>Ver Demo Interactiva</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
