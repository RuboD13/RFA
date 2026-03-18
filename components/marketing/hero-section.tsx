"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { useDemoModal } from "./demo-modal-context"


export function HeroSection() {
  const { openDemoModal } = useDemoModal()

  // Use the same href as the original secondary button (which pointed to #demo or similar)
  // Assuming it was pointing to the demo page or opening the demo modal.
  // Wait, in the original file (Tool Call #16), line 54 was: <Link href="#demo">
  // But the user said "No cambiar el destino del botón. Debe seguir abriendo la demo actual."
  // So I keep href="#demo" or whatever it was.
  // Wait, in my Turn 1 changes, I didn't change the href.
  // In Tool Call #16: <Link href="#demo">.
  // So I'll keep href="#demo".

  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-background">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-background to-transparent z-10" />
      
      {/* Radial Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-20">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-50">
          Más de 50 agencias ya automatizan la gestión de alquileres con RentAFlow
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance max-w-5xl leading-[0.95] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Filtra automáticamente los{" "}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
            leads de alquiler
          </span>
          <br className="hidden sm:block" />
          antes de enseñar el piso
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl font-normal text-muted-foreground max-w-2xl text-pretty mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          RentAFlow responde a cada interesado, solicita y valida la documentación y agenda visitas por WhatsApp. Tú
          solo te centras en enseñar el piso a candidatos que realmente pueden alquilar.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Button
              size="lg"
              className="h-12 px-8 text-base font-medium rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
              onClick={openDemoModal}
            >
              Reservar Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-medium rounded-full bg-background/50 backdrop-blur-sm hover:bg-secondary/50 transition-all" asChild>
              <Link href="/demo">
                <Zap className="mr-2 w-4 h-4 text-yellow-500" />
                Ver cómo se trabaja
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-xs font-normal text-muted-foreground text-center max-w-md">
            Explora una demo funcional con leads ficticios y recorre las vistas clave del producto.
          </p>
        </div>



      </div>
    </section>
  )
}
