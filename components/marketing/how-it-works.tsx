import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, UserCheck, CalendarCheck, Bell, FileSignature } from "lucide-react"

type Step = {
  id: string
  number: string
  icon: typeof MessageSquare
  label: string
  badge: "IA" | "IA/Tú"
  badgeAria: string
  text: string
}

const steps: Step[] = [
  {
    id: "capture",
    number: "01",
    icon: MessageSquare,
    label: "Captura",
    badge: "IA",
    badgeAria: "Acción de IA",
    text: "Detecta leads de portales y email.",
  },
  {
    id: "request",
    number: "02",
    icon: Bell,
    label: "Pide datos",
    badge: "IA",
    badgeAria: "Acción de IA",
    text: "DNI, ingresos y contacto, todo en un link.",
  },
  {
    id: "verify",
    number: "03",
    icon: UserCheck,
    label: "Valida",
    badge: "IA",
    badgeAria: "Acción de IA",
    text: "Extrae y comprueba requisitos del anuncio.",
  },
  {
    id: "schedule",
    number: "04",
    icon: CalendarCheck,
    label: "Agenda",
    badge: "IA/Tú",
    badgeAria: "Acción conjunta",
    text: "3 horarios sugeridos; confirmación automática.",
  },
  {
    id: "docs",
    number: "05",
    icon: FileSignature,
    label: "Documenta",
    badge: "IA/Tú",
    badgeAria: "Acción conjunta",
    text: "Recoge archivos y deja todo listo para firmar.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-secondary/30">
      <div id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-[1.1]">
            Cómo funciona (en 45 s)
          </h2>
          <p className="mt-4 text-lg font-normal text-muted-foreground text-pretty leading-normal">
            La IA hace el trabajo repetitivo. Tú decides lo importante.
          </p>
        </div>

        <ol className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-4" aria-label="Pasos del sistema de alquiler">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <li key={step.id} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                  </div>
                )}

                <div className="bg-card rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium text-foreground">{step.label}</h3>
                    <span
                      className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
                      aria-label={step.badgeAria}
                    >
                      {step.badge}
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground leading-normal">{step.text}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/signup?seedLead=true">Probar con un lead de ejemplo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
