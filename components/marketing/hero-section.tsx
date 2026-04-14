"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { useDemoModal } from "./demo-modal-context"


export function HeroSection() {
  const { openDemoModal } = useDemoModal()

  return (
    <section className="relative min-h-[100svh] pt-14 sm:pt-16 lg:pt-20 overflow-hidden bg-background">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-background to-transparent z-10" />
      
      {/* Radial Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-5rem)] flex flex-col items-center justify-center text-center z-20">
        
        <div className="inline-flex max-w-fit items-center justify-center gap-2 rounded-full border border-border/80 bg-background/80 px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium text-muted-foreground mb-6 sm:mb-7 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-50">
          Deja de perder horas filtrando solicitudes de alquiler a mano
        </div>
        <h1 className="text-[2.7rem] sm:text-5xl lg:text-7xl font-bold tracking-[-0.04em] text-foreground text-balance max-w-4xl leading-[0.92] sm:leading-[0.95] mb-5 sm:mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Filtra automáticamente los{" "}
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
            leads de alquiler
          </span>
          <br className="hidden sm:block" />
          {" "}
          antes de enseñar el piso
        </h1>

        {/* Subheadline */}
        <p className="text-[15px] sm:text-xl font-normal text-muted-foreground max-w-md sm:max-w-2xl text-pretty mb-8 sm:mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Rent<span className="font-bold">AFlow</span> responde a cada interesado, solicita y valida la documentación y agenda visitas por WhatsApp. Tú
          solo te centras en enseñar el piso a candidatos que realmente pueden alquilar.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 w-full">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none justify-center">
            <Button
              size="lg"
              className="h-12 w-full sm:w-auto px-8 text-base font-medium rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
              onClick={openDemoModal}
            >
              Reservar Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 w-full sm:w-auto px-8 text-base font-medium rounded-full bg-background/50 backdrop-blur-sm hover:bg-secondary/50 transition-all" asChild>
              <Link href="/demo">
                <Zap className="mr-2 w-4 h-4 text-yellow-500" />
                Ver cómo se trabaja
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-xs font-normal text-muted-foreground text-center max-w-sm sm:max-w-md px-2">
            Explora una demo funcional con leads ficticios y recorre las vistas clave del producto.
          </p>
        </div>



      </div>
    </section>
  )
}
