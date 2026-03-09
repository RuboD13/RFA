"use client"

import { useMemo, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, CheckCircle2 } from "lucide-react"
import { useDemoModal } from "./demo-modal-context"
import { cn } from "@/lib/utils"
import { getAttributionForPayload } from "@/lib/tracking"

export function DemoModal() {
  const { isOpen, closeDemoModal } = useDemoModal()
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    phone: "",
    usesIdealistaTools: "",
    weeklyLeadVolume: "",
    usesCrm: "",
  })

  // Reset step when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setStep(1)
      }, 0)
      return () => clearTimeout(timer)
    } else {
      // Small delay to reset form after transition
      const timer = setTimeout(() => {
        setStep(1)
        setDemoForm({
          name: "",
          email: "",
          phone: "",
          usesIdealistaTools: "",
          weeklyLeadVolume: "",
          usesCrm: "",
        })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDemoModal()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen, closeDemoModal])

  const mailtoHref = useMemo(() => {
    const attribution = getAttributionForPayload()
    const subject = "Reserva de demo - RentAFlow"
    const lines = [
      `Nombre: ${demoForm.name}`,
      `Email: ${demoForm.email}`,
      `Teléfono: ${demoForm.phone || "-"}`,
      "",
      `¿Usas idealista tools?: ${demoForm.usesIdealistaTools || "-"}`,
      `Volumen semanal de leads/inquilinos (agencia inmobiliaria): ${demoForm.weeklyLeadVolume || "-"}`,
      `¿Usáis CRM?: ${demoForm.usesCrm || "-"}`,
      "",
      `UTM Source: ${attribution.utm_source || "-"}`,
      `UTM Medium: ${attribution.utm_medium || "-"}`,
      `UTM Campaign: ${attribution.utm_campaign || "-"}`,
      `UTM Content: ${attribution.utm_content || "-"}`,
      `UTM Term: ${attribution.utm_term || "-"}`,
      `Referrer: ${attribution.referrer || "-"}`,
    ]

    const body = lines.join("\n")
    return `mailto:demo@rentaflow.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [demoForm])

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      // Basic validation for step 1
      if (demoForm.name && demoForm.email) {
        setStep(2)
      }
    } else if (step === 2) {
      // Submit
      window.location.href = mailtoHref
      setStep(3)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md" 
        onClick={closeDemoModal}
        aria-hidden="true"
      />
      <div 
        className={cn(
          "relative w-full max-w-lg rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden transition-colors",
          step >= 2 ? "bg-foreground text-background" : "bg-background text-foreground border border-border"
        )}
      >
        {/* Header with Close Button */}
        <div className={cn(
          "flex items-start justify-between gap-4 p-6 border-b transition-colors",
          step >= 2 ? "border-background/20" : "border-border"
        )}>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">
              {step === 1 && "Reservar demo"}
              {step === 2 && "Unos detalles más..."}
              {step === 3 && "¡Todo listo!"}
            </h3>
            {step === 1 && (
              <p className="text-sm text-muted-foreground">
                Para personalizar tu demo, necesitamos conocerte un poco mejor. Solo te llevará un minuto.
              </p>
            )}
            {step === 2 && (
              <p className="text-sm text-background/70">
                Ayúdanos a preparar mejor la reunión respondiendo estas 3 preguntas rápidas.
              </p>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={closeDemoModal} 
            aria-label="Cerrar"
            className={cn(step >= 2 && "text-background hover:bg-background/20 hover:text-background")}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {step === 3 ? (
          // Success Step
          <div className="p-8 flex flex-col items-center text-center space-y-8 animate-in zoom-in-95 fade-in duration-500">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full animate-pulse" />
              <div className="relative w-20 h-20 rounded-full bg-background/10 flex items-center justify-center ring-1 ring-background/20 shadow-lg shadow-green-500/20">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-2xl font-bold tracking-tight">¡Solicitud recibida!</h4>
              <p className="text-background/80 max-w-[280px] sm:max-w-sm mx-auto leading-relaxed text-pretty">
                Nuestro equipo ya está analizando tu perfil. Te contactaremos muy pronto para agendar tu demo personalizada.
              </p>
            </div>

            <div className="w-full pt-6 border-t border-background/10">
              <p className="text-sm text-background/60 mb-2 font-medium">¿Dudas urgentes?</p>
              <a 
                href="mailto:info@rentaflow.es" 
                className="text-lg font-semibold hover:text-green-400 transition-colors inline-flex items-center gap-2"
              >
                info@rentaflow.es
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            </div>

            <Button 
              onClick={closeDemoModal} 
              className="w-full sm:w-auto min-w-[160px] bg-background text-foreground hover:bg-background/90 font-medium"
            >
              Entendido, gracias
            </Button>
          </div>
        ) : (
          // Form Steps
          <form className="p-6 space-y-6" onSubmit={handleNextStep}>
            {step === 1 && (
              <div className="space-y-4 animate-in slide-in-from-right-8 duration-300">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-sm font-medium">Nombre</label>
                    <input
                      type="text"
                      className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground"
                      placeholder="Tu nombre"
                      required
                      value={demoForm.name}
                      onChange={(e) => setDemoForm((s) => ({ ...s, name: e.target.value }))}
                      autoFocus
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground"
                      placeholder="tu@email.com"
                      required
                      value={demoForm.email}
                      onChange={(e) => setDemoForm((s) => ({ ...s, email: e.target.value }))}
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5 text-left">
                  <label className="text-sm font-medium">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full h-11 rounded-md border border-border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground"
                    placeholder="+34 600 000 000"
                    value={demoForm.phone}
                    onChange={(e) => setDemoForm((s) => ({ ...s, phone: e.target.value }))}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in slide-in-from-right-8 duration-300">
                <div className="space-y-1.5 text-left">
                  <label className="text-sm font-medium">
                    ¿Usas idealista tools? <span className="text-background/60 font-normal">(optimizado para leads de idealista)</span>
                  </label>
                  <select
                    className="w-full h-11 rounded-md border border-transparent bg-background/10 text-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 placeholder:text-background/50"
                    value={demoForm.usesIdealistaTools}
                    onChange={(e) => setDemoForm((s) => ({ ...s, usesIdealistaTools: e.target.value }))}
                    required
                    style={{ colorScheme: 'dark' }} // Force dark scrollbar/options if supported
                  >
                    <option value="" disabled className="text-foreground bg-background">Selecciona una opción</option>
                    <option value="Sí" className="text-foreground bg-background">Sí</option>
                    <option value="No" className="text-foreground bg-background">No</option>
                    <option value="No sé qué es" className="text-foreground bg-background">No sé qué es</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-sm font-medium">
                    ¿Qué volumen de leads/inquilinos suele atender vuestra agencia inmobiliaria semanalmente de media?
                  </label>
                  <select
                    className="w-full h-11 rounded-md border border-transparent bg-background/10 text-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50"
                    value={demoForm.weeklyLeadVolume}
                    onChange={(e) => setDemoForm((s) => ({ ...s, weeklyLeadVolume: e.target.value }))}
                    required
                  >
                    <option value="" disabled className="text-foreground bg-background">Selecciona un rango</option>
                    <option value="0–10" className="text-foreground bg-background">0–10</option>
                    <option value="11–25" className="text-foreground bg-background">11–25</option>
                    <option value="26–50" className="text-foreground bg-background">26–50</option>
                    <option value="51–100" className="text-foreground bg-background">51–100</option>
                    <option value="100+" className="text-foreground bg-background">100+</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-sm font-medium">¿Usáis CRM?</label>
                  <select
                    className="w-full h-11 rounded-md border border-transparent bg-background/10 text-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50"
                    value={demoForm.usesCrm}
                    onChange={(e) => setDemoForm((s) => ({ ...s, usesCrm: e.target.value }))}
                    required
                  >
                    <option value="" disabled className="text-foreground bg-background">Selecciona una opción</option>
                    <option value="Sí" className="text-foreground bg-background">Sí</option>
                    <option value="No" className="text-foreground bg-background">No</option>
                    <option value="En proceso" className="text-foreground bg-background">En proceso</option>
                  </select>
                </div>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:justify-end">
              {step === 1 ? (
                <>
                  <Button type="button" variant="outline" onClick={closeDemoModal}>
                    Cancelar
                  </Button>
                  <Button type="submit">
                    Siguiente
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={() => setStep(1)}
                    className="text-background hover:bg-background/20 hover:text-background"
                  >
                    Atrás
                  </Button>
                  <Button 
                    type="submit" 
                    variant="secondary"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    Enviar solicitud
                  </Button>
                </>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
