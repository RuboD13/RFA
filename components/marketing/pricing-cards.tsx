"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useDemoModal } from "./demo-modal-context"

const plans = [
  {
    name: "Mini",
    description: "Para empezar a automatizar",
    price: "49",
    period: "/mes",
    features: [
      "1 usuario",
      "150 leads/mes",
      "3 anuncios simultáneos",
      "Respuestas automáticas por email",
      { text: "WhatsApp no incluido", isGift: true, giftText: "50 mensajes de WhatsApp/mes" },
    ],
    cta: "Seleccionar",
    popular: false,
  },
  {
    name: "Starter",
    description: "Para operar tu negocio de alquileres",
    price: "99",
    period: "/mes",
    features: [
      "2 usuarios",
      "400 leads/mes",
      "6 anuncios simultáneos",
      "Automatización completa del proceso",
      "Calendario inteligente de visitas",
      "WhatsApp integrado con tu marca",
      { text: "Mensajes de WhatsApp no incluidos", isGift: true, giftText: "400 mensajes de WhatsApp/mes" },
      "Soporte prioritario",
    ],
    cta: "Comenzar Ahora",
    popular: true,
  },
  {
    name: "Agency",
    description: "Para gestionar equipos y operaciones",
    price: "249",
    period: "/mes",
    features: [
      "6 usuarios",
      "1000 leads/mes",
      "10 anuncios simultáneos",
      "Roles y permisos personalizados",
      "Multi-agencia / oficinas",
      "Facturación a medida",
      "WhatsApp integrado con tu marca",
      { text: "Mensajes de WhatsApp no incluidos", isGift: true, giftText: "850 mensajes de WhatsApp/mes" },
      "Métricas avanzadas",
    ],
    cta: "Seleccionar",
    popular: false,
  },
  {
    name: "Corporate",
    description: "Soluciones confeccionadas a medida",
    price: "A medida",
    period: "",
    features: [
      "Usuarios ilimitados",
      "Leads ilimitados",
      "Anuncios ilimitados",
      "Todo en Agency +",
      "WhatsApp integrado con tu marca",
      "Conversaciones WhatsApp personalizadas",
      "Soporte 24/7",
    ],
    cta: "Contactar",
    popular: false,
  },
]

export function PricingCards() {
  const { openDemoModal } = useDemoModal()

  return (
    <section id="precios" className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            Primer mes gratis para early-adopters
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Elige cómo quieres <span className="text-primary">automatizar tus alquileres</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Todos los planes incluyen automatización, soporte y control total de tus leads.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
          {plans.filter(p => p.name !== "Corporate").map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-6 sm:p-8 flex flex-col transition-all duration-500",
                plan.popular 
                  ? "bg-card/50 rounded-3xl shadow-[0_0_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-primary/20 lg:scale-105 z-10" 
                  : "bg-transparent border border-border/50 hover:border-foreground/20 lg:border-t-0 lg:border-l first:border-l-0"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Recomendado
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-foreground tracking-tight">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-3 min-h-[2.5rem] sm:h-10 text-pretty font-light">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-light tracking-tighter text-foreground">{plan.price}€</span>
                  <span className="text-sm text-muted-foreground font-medium">{plan.period}</span>
                </div>
              </div>

              {/* CTA */}
              <Button 
                variant={plan.popular ? "default" : "secondary"} 
                className={cn(
                  "w-full mb-10 h-12 rounded-xl text-sm font-medium transition-all",
                  !plan.popular && "bg-secondary/40 hover:bg-secondary/80 text-secondary-foreground"
                )} 
                onClick={openDemoModal}
              >
                {plan.cta}
              </Button>

              {/* Features (Refined typography) */}
              <div className="flex-grow">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-6">
                  Incluye
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => {
                    const isGift = typeof feature === 'object' && feature.isGift;
                    const text = typeof feature === 'object' ? feature.text : feature;
                    const giftText = typeof feature === 'object' ? feature.giftText : undefined;
                    
                    return (
                      <li key={i} className="flex flex-col">
                        {isGift ? (
                          <div className="flex flex-col gap-1.5 mt-1 mb-2 bg-primary/5 p-3 rounded-lg border border-primary/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl -mr-8 -mt-8 pointer-events-none"></div>
                            
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-[10px] px-2 py-0.5 uppercase tracking-wider font-bold border-primary/20 flex items-center gap-1">
                                🎁 Regalo Early Adopter <span className="normal-case font-medium opacity-80">(Para siempre)</span>
                              </Badge>
                            </div>
                            
                            <div className="flex flex-col gap-0.5 relative z-10">
                              {giftText ? (
                                <>
                                  <span className="text-[13px] font-medium text-muted-foreground/50 line-through">{text}</span>
                                  <span className="text-[14px] font-semibold text-primary">{giftText}</span>
                                </>
                              ) : (
                                <span className="text-[14px] font-semibold text-primary">{text}</span>
                              )}
                            </div>
                          </div>
                        ) : (
                          <span className="text-[13px] font-medium text-foreground/80 leading-relaxed">{text}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Plan (Elegant distinct styling) */}
        {plans.filter(p => p.name === "Corporate").map((plan) => (
          <div 
            key={plan.name}
            className="max-w-6xl mx-auto mt-8 bg-gradient-to-br from-primary/10 via-background to-background rounded-[2rem] ring-1 ring-primary/20 p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row gap-8 sm:gap-10 items-start lg:items-center justify-between overflow-hidden relative"
          >
            {/* Abstract background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="lg:w-1/3 relative z-10">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary mb-6">
                Para grandes volúmenes
              </div>
              <h3 className="text-3xl font-light text-foreground mb-3 tracking-tight">{plan.name}</h3>
              <p className="text-muted-foreground text-sm font-light text-pretty mb-6">{plan.description}</p>
              <div className="text-2xl font-light text-foreground">{plan.price}</div>
            </div>
            
            <div className="lg:w-2/3 flex flex-col sm:flex-row gap-8 sm:gap-10 items-start sm:items-center justify-between w-full relative z-10">
              <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-[13px] font-medium text-foreground/80 flex items-start gap-3">
                    <span className="text-primary/50 mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full sm:w-auto shrink-0 h-14 px-10 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-medium transition-all" onClick={openDemoModal}>
                {plan.cta}
              </Button>
            </div>
          </div>
        ))}

        {/* Additional Info */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-sm text-muted-foreground">
            Todos los precios en EUR. IVA no incluido. Cancela cuando quieras.
          </p>
          <p className="text-xs text-muted-foreground/70 max-w-2xl mx-auto text-balance">
            * Una conversación de WhatsApp equivale a una ventana de 24h por lead. La bolsa de mensajes de WhatsApp es un regalo exclusivo para early-adopters (quienes contraten ahora mantendrán este beneficio gratis para siempre). El exceso se gestiona mediante add-ons sin interrumpir el servicio.
          </p>
        </div>
      </div>
    </section>
  )
}
