import { Clock, Database, Calendar, FileCheck, BarChart3, MessageSquare } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Evita perseguir leads",
    description:
      "Automatiza respuestas y recordatorios. Olvídate de perseguir documentación por email o teléfono. Ahorra cientos de horas anuales con cero solicitudes sin respuesta.",
    highlight: "49 minutos ahorrados por anuncio al día",
  },
  {
    icon: Database,
    title: "Expediente único por candidato",
    description:
      "Ingresos, documentos y scoring en un solo lugar. Ten todo claro antes de agendar la visita.",
    highlight: "Un panel, toda la info",
  },
  {
    icon: MessageSquare,
    title: "Filtro previo a la visita",
    description:
      "El sistema solicita y valida requisitos automáticamente antes de que pierdas tiempo enseñando el piso.",
    highlight: "Verificación humana final",
  },
  {
    icon: Calendar,
    title: "Agenda solo visitas de calidad",
    description:
      "Coordina horarios automáticamente, pero solo con quien tú decidas que merece la pena.",
    highlight: "Cero llamadas sin contestar",
  },
  {
    icon: BarChart3,
    title: "Control total de tu cartera",
    description:
      "Visualiza en tiempo real quién cumple requisitos y quién no. Toma decisiones informadas.",
    highlight: "Los datos que necesitas para tomar decisiones",
  },
  {
    icon: FileCheck,
    title: "Scoring financiero automático",
    description:
      "Calcula el esfuerzo financiero al instante para descartar o avanzar rápido.",
    highlight: "Tasa de esfuerzo clara y disponible continuamente",
  },
]

export function BenefitsGrid() {
  return (
    <section id="beneficios" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-[1.1]">
            Automatización que te devuelve el control
          </h2>
          <p className="mt-4 text-lg font-normal text-muted-foreground text-pretty leading-normal">
            Deja que la tecnología filtre y gestione para que tú puedas cerrar operaciones.
          </p>
        </div>

        {/* Benefits Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <div
                key={benefit.title}
                className="group relative bg-card rounded-2xl border border-border p-6 lg:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-normal mb-6 font-normal whitespace-pre-line flex-1">{benefit.description}</p>

                {/* Highlight Badge */}
                <div className="mt-auto">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-sm font-medium text-foreground">
                    {benefit.highlight}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
