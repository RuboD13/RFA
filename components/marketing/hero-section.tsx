"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Star, Zap } from "lucide-react"
import { AutomationVisual } from "./automation-visual"
import { useDemoModal } from "./demo-modal-context"

export function HeroSection() {
  const { openDemoModal } = useDemoModal()

  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-background">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-background to-transparent z-10" />
      
      {/* Radial Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-20">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="font-medium text-foreground">v2.0 Disponible</span>
          <span className="text-xs text-muted-foreground hidden sm:inline-block">| Gestión de leads de alquiler</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance max-w-5xl leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Gestión completa de leads de inquilinos <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
            para alquileres con IA
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl text-pretty mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          RentAFlow atiende tus leads en WhatsApp, pide datos y documentación, y coordina visitas mientras tú cierras tratos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <Button
            size="lg"
            className="h-12 px-8 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
            onClick={openDemoModal}
          >
            Reservar Demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full bg-background/50 backdrop-blur-sm hover:bg-secondary/50 transition-all" asChild>
            <Link href="#demo">
              <Zap className="mr-2 w-4 h-4 text-yellow-500" />
              Ver Demo Interactiva
            </Link>
          </Button>
        </div>

        {/* Trust Stack Integrated */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left leading-tight">
              <span className="block font-bold text-foreground">+500 Agencias</span>
              <span className="text-xs">Confían en nosotros</span>
            </div>
          </div>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium text-foreground ml-1">4.9/5</span>
          </div>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span>RGPD Compliant</span>
          </div>
        </div>

        {/* Automation Visual Pipeline */}
        <div className="relative w-full max-w-6xl mx-auto perspective-1000 animate-in fade-in zoom-in-95 duration-1000 delay-500">
          <AutomationVisual />
        </div>

      </div>
    </section>
  )
}
