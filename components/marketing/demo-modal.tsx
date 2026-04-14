"use client"

import { useMemo, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, CheckCircle2, Gift } from "lucide-react"
import { useDemoModal } from "./demo-modal-context"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { PrivacyContent } from "@/components/marketing/privacy-content"

const modalPlans = [
  {
    name: "Mini",
    description: "Para empezar a automatizar",
    price: "49€",
    period: "/mes",
    features: ["1 usuario", "100 leads/mes", "3 anuncios simultáneos", "Respuestas automáticas por email"],
    whatsapp: "50 mensajes de WhatsApp/mes",
  },
  {
    name: "Starter",
    description: "Para operar tu negocio de alquileres",
    price: "99€",
    period: "/mes",
    features: [
      "2 usuarios",
      "400 leads/mes",
      "6 anuncios simultáneos",
      "Automatización completa del proceso",
      "Calendario inteligente de visitas",
      "WhatsApp integrado con tu marca",
    ],
    whatsapp: "400 mensajes de WhatsApp/mes",
    popular: true,
  },
  {
    name: "Agency",
    description: "Para gestionar equipos y operaciones",
    price: "249€",
    period: "/mes",
    features: [
      "6 usuarios",
      "850 leads/mes",
      "10 anuncios simultáneos",
      "Roles y permisos personalizados",
      "Multi-agencia / oficinas",
      "Facturación a medida",
      "WhatsApp integrado con tu marca",
      "Métricas avanzadas",
    ],
    whatsapp: "850 mensajes de WhatsApp/mes",
  },
  {
    name: "Corporate",
    description: "Para grandes volúmenes",
    price: "A medida",
    period: "",
    features: ["Volumen alto", "Desarrollo a medida", "Soporte prioritario 24/7"],
    whatsapp: "Volumen a medida",
  },
]

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
    plan: "",
    acceptsRgpd: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  // Reset step when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setStep(1)
        setIsSubmitting(false)
      }, 0)
      return () => clearTimeout(timer)
    } else {
      // Small delay to reset form after transition
      const timer = setTimeout(() => {
        setStep(1)
        setIsSubmitting(false)
        setDemoForm({
          name: "",
          email: "",
          phone: "",
          usesIdealistaTools: "",
          weeklyLeadVolume: "",
          usesCrm: "",
          plan: "",
          acceptsRgpd: false,
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

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      // Basic validation for step 1
      if (demoForm.name && demoForm.email) {
        setStep(2)
      }
    } else if (step === 2) {
      if (!demoForm.acceptsRgpd) {
        alert("Debes aceptar la Política de Privacidad para continuar.")
        return
      }
      // Submit via webhook
      setIsSubmitting(true)
      try {
        await fetch("https://acesalquiler-n8n.igc7oi.easypanel.host/webhook/ccbc1523-d0d2-4807-ae6e-146fe18f1b52", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(demoForm),
        })
        setStep(3)
      } catch (error) {
        console.error("Error al enviar el formulario:", error)
        // Aunque falle la petición por red, avanzamos al paso 3 para no bloquear al usuario
        // o se podría añadir un manejo de errores visible.
        setStep(3)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md" 
        onClick={closeDemoModal}
        aria-hidden="true"
      />
      <div 
        className={cn(
          "relative my-auto w-full max-w-lg max-h-[calc(100svh-2rem)] sm:max-h-[calc(100svh-3rem)] rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden transition-colors flex flex-col",
          step >= 2 ? "bg-foreground text-background" : "bg-background text-foreground border border-border"
        )}
      >
        {/* Header with Close Button */}
        <div className={cn(
          "flex items-start justify-between gap-4 p-6 border-b transition-colors",
          step >= 2 ? "border-background/20" : "border-border"
        )}>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={closeDemoModal} 
            aria-label="Cerrar"
            className={cn(step >= 2 && "text-background hover:bg-background/20 hover:text-background", "-ml-2")}
          >
            <X className="w-5 h-5" />
          </Button>
          <div className="space-y-1 text-right">
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
        </div>

        {step === 3 ? (
          // Success Step
          <div className="p-8 overflow-y-auto flex flex-col items-center text-center space-y-8 animate-in zoom-in-95 fade-in duration-500">
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
                target="_blank"
                rel="noopener noreferrer"
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
          <form className="p-6 space-y-6 overflow-y-auto" onSubmit={handleNextStep}>
            {step === 1 && (
              <div className="space-y-6 animate-in slide-in-from-right-8 duration-300">
                <div className="space-y-4 text-left">
                  {demoForm.plan && (
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                        Plan seleccionado: <span className="text-foreground font-bold">{demoForm.plan}</span>
                      </label>
                    </div>
                  )}

                  {/* Plan Selector Grid (Always visible) */}
                  <div className="grid grid-cols-2 gap-3">
                    {modalPlans.map((plan) => (
                      <label 
                        key={plan.name} 
                        className={cn(
                          "relative flex flex-col p-3.5 border rounded-xl cursor-pointer transition-all text-left group",
                          demoForm.plan === plan.name 
                            ? "border-foreground bg-secondary/20 ring-1 ring-foreground shadow-sm" 
                            : "border-border hover:border-foreground/50 hover:bg-secondary/10"
                        )}
                      >
                        <input
                          type="radio"
                          name="plan"
                          value={plan.name}
                          className="sr-only"
                          checked={demoForm.plan === plan.name}
                          onChange={(e) => setDemoForm((s) => ({ ...s, plan: e.target.value }))}
                        />
                        <div className="flex justify-between items-start gap-2">
                          <span className={cn(
                            "font-semibold text-sm leading-none",
                            demoForm.plan === plan.name ? "text-foreground" : "text-muted-foreground group-hover:text-foreground transition-colors"
                          )}>{plan.name}</span>
                          <span className="text-[11px] font-medium text-foreground whitespace-nowrap leading-none">
                            {plan.price}{plan.period}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>

                  {/* Selected Plan Summary (Beautiful Design) */}
                  {demoForm.plan && (
                    <div className={cn(
                      "relative rounded-2xl border bg-background text-left transition-all mt-2 mb-2 overflow-hidden",
                      modalPlans.find(p => p.name === demoForm.plan)?.popular ? "border-foreground shadow-md" : "border-border shadow-sm"
                    )}>
                      {modalPlans.find(p => p.name === demoForm.plan)?.popular && (
                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-foreground text-background text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider z-10">
                          Recomendado
                        </span>
                      )}

                      <div className="p-4">
                        <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start">
                          <div className="min-w-0">
                            <h3 className="text-lg font-medium text-foreground leading-none">{demoForm.plan}</h3>
                            <p className="text-[11px] text-muted-foreground mt-1 text-pretty">
                              {modalPlans.find(p => p.name === demoForm.plan)?.description}
                            </p>
                          </div>
                          <div className="flex items-baseline gap-1 text-left sm:text-right">
                            <span className="text-xl sm:text-2xl font-light tracking-tight text-foreground leading-none">
                              {modalPlans.find(p => p.name === demoForm.plan)?.price}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                              {modalPlans.find(p => p.name === demoForm.plan)?.period}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2.5">
                          <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Incluye</p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-3">
                            {modalPlans.find(p => p.name === demoForm.plan)?.features.map((feature, i) => (
                              <li key={i} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                                <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                                <span className="leading-tight">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {modalPlans.find(p => p.name === demoForm.plan)?.whatsapp && (
                            <div className="mt-3 p-2.5 rounded-lg bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border/50">
                              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between mb-1.5">
                                <div className="inline-flex items-center gap-1 bg-background border border-border px-1.5 py-0.5 rounded text-[9px]">
                                  <Gift className="w-3 h-3 text-[#E65100]" />
                                  <span className="font-bold uppercase text-foreground">Regalo Early Adopter</span>
                                </div>
                                <span className="text-[9px] text-muted-foreground">(Para siempre)</span>
                              </div>
                              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-end">
                                <p className="text-[10px] text-muted-foreground line-through">Msjs no incluidos</p>
                                <p className="text-xs font-bold text-foreground">
                                  {modalPlans.find(p => p.name === demoForm.plan)?.whatsapp}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

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

                <div className="flex items-start gap-2 pt-4 border-t border-background/20">
                  <input
                    type="checkbox"
                    id="rgpd"
                    className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary bg-background/10 border-transparent"
                    checked={demoForm.acceptsRgpd}
                    onChange={(e) => setDemoForm((s) => ({ ...s, acceptsRgpd: e.target.checked }))}
                    required
                  />
                  <label htmlFor="rgpd" className="text-xs text-background/80 leading-tight">
                    He leído y acepto la{" "}
                    <button 
                      type="button"
                      className="underline hover:text-background transition-colors font-medium" 
                      onClick={() => setShowPrivacyModal(true)}
                    >
                      Política de Privacidad
                    </button>{" "}
                    y consiento el tratamiento de mis datos para la gestión de esta solicitud.
                  </label>
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

      {/* Privacy Policy Modal Overlay */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setShowPrivacyModal(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-2xl bg-background text-foreground border border-border rounded-2xl shadow-2xl flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-border flex items-center justify-between shrink-0">
              <h3 className="text-lg font-semibold">Política de Privacidad</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowPrivacyModal(false)} className="h-8 w-8">
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="p-6 overflow-y-auto text-sm text-muted-foreground space-y-4 prose prose-sm prose-invert max-w-none">
              <PrivacyContent />
            </div>

            <div className="p-5 border-t border-border flex justify-end gap-3 bg-secondary/10 shrink-0 rounded-b-2xl">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  setDemoForm(s => ({ ...s, acceptsRgpd: false }))
                  setShowPrivacyModal(false)
                }}
              >
                Rechazo
              </Button>
              <Button 
                type="button" 
                onClick={() => {
                  setDemoForm(s => ({ ...s, acceptsRgpd: true }))
                  setShowPrivacyModal(false)
                }}
              >
                Acepto
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
