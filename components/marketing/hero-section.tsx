"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Star, Zap, X } from "lucide-react"
import { AutomationVisual } from "./automation-visual"

export function HeroSection() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    phone: "",
    usesIdealistaTools: "",
    weeklyLeadVolume: "",
    usesCrm: "",
  })

  useEffect(() => {
    if (!isDemoOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsDemoOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isDemoOpen])

  const mailtoHref = useMemo(() => {
    const subject = "Reserva de demo - RentAFlow"
    const lines = [
      `Nombre: ${demoForm.name}`,
      `Email: ${demoForm.email}`,
      `Teléfono: ${demoForm.phone || "-"}`,
      "",
      `¿Usas idealista tools?: ${demoForm.usesIdealistaTools || "-"}`,
      `Volumen semanal de leads/inquilinos: ${demoForm.weeklyLeadVolume || "-"}`,
      `¿Usáis CRM?: ${demoForm.usesCrm || "-"}`,
    ]

    const body = lines.join("\n")
    return `mailto:demo@rentaflow.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [demoForm])

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
            onClick={() => setIsDemoOpen(true)}
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

      {isDemoOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={() => setIsDemoOpen(false)}
            aria-label="Cerrar"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="w-full max-w-lg rounded-2xl border border-border bg-background shadow-2xl">
              <div className="flex items-start justify-between gap-4 p-6 border-b border-border">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">Reservar demo</h3>
                  <p className="text-sm text-muted-foreground">
                    Cuéntanos un poco sobre tu agencia y te proponemos una reunión.
                  </p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsDemoOpen(false)} aria-label="Cerrar">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <form
                className="p-6 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault()
                  window.location.href = mailtoHref
                  setIsDemoOpen(false)
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-sm font-medium text-foreground">Nombre</label>
                    <input
                      className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      value={demoForm.name}
                      onChange={(e) => setDemoForm((s) => ({ ...s, name: e.target.value }))}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm((s) => ({ ...s, email: e.target.value }))}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-sm font-medium text-foreground">Teléfono (opcional)</label>
                  <input
                    className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={demoForm.phone}
                    onChange={(e) => setDemoForm((s) => ({ ...s, phone: e.target.value }))}
                    autoComplete="tel"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-sm font-medium text-foreground">¿Usas idealista tools?</label>
                  <select
                    className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={demoForm.usesIdealistaTools}
                    onChange={(e) => setDemoForm((s) => ({ ...s, usesIdealistaTools: e.target.value }))}
                    required
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                    <option value="No lo sé">No lo sé</option>
                  </select>
                  <p className="text-xs text-muted-foreground">
                    Nuestro sistema está optimizado para gestionar los leads de idealista.
                  </p>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-sm font-medium text-foreground">
                    ¿Qué volumen de leads/inquilinos atendéis semanalmente (media)?
                  </label>
                  <select
                    className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={demoForm.weeklyLeadVolume}
                    onChange={(e) => setDemoForm((s) => ({ ...s, weeklyLeadVolume: e.target.value }))}
                    required
                  >
                    <option value="" disabled>
                      Selecciona un rango
                    </option>
                    <option value="0–10">0–10</option>
                    <option value="11–25">11–25</option>
                    <option value="26–50">26–50</option>
                    <option value="51–100">51–100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-sm font-medium text-foreground">¿Usáis CRM?</label>
                  <select
                    className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    value={demoForm.usesCrm}
                    onChange={(e) => setDemoForm((s) => ({ ...s, usesCrm: e.target.value }))}
                    required
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                    <option value="En proceso">En proceso</option>
                  </select>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:justify-end">
                  <Button type="button" variant="outline" onClick={() => setIsDemoOpen(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Enviar solicitud</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
