import { CheckCircle2, Circle, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

type RoadmapItem = {
  id: string
  quarter: string
  year: string
  title: string
  description: string
  status: "completed" | "active" | "upcoming"
}

const roadmapItems: RoadmapItem[] = [
  {
    id: "q4-2025",
    quarter: "Q4",
    year: "2025",
    title: "Primer MVP",
    description: "Fase inicial de desarrollo completa y lanzamiento del primer Producto Mínimo Viable.",
    status: "completed",
  },
  {
    id: "q1-2026",
    quarter: "Q1",
    year: "2026",
    title: "Citas Automáticas",
    description: "Sistema automático de citas y recordatorios para posible inquilino y agente.",
    status: "completed",
  },
  {
    id: "q2-2026",
    quarter: "Q2",
    year: "2026",
    title: "Agentes IA Inmobiliarios",
    description: "Agentes IA que contestan sobre cualquier pregunta de tu inmueble de forma autónoma.",
    status: "active",
  },
  {
    id: "q3-2026",
    quarter: "Q3",
    year: "2026",
    title: "Análisis de Documentos",
    description: "Reconocimiento y lectura de documentos necesarios para la firma del contrato.",
    status: "upcoming",
  },
  {
    id: "q4-2026",
    quarter: "Q4",
    year: "2026",
    title: "Scoring de Riesgo",
    description: "Scoring de valoración de riesgo automático del inquilino basado en IA.",
    status: "upcoming",
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-[1.1]">
            Nuestra Hoja de Ruta
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            El futuro de Rent<span className="font-bold">AFlow</span>: cómo vamos a seguir revolucionando la gestión de alquileres trimestre a trimestre.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-[40px] bottom-[40px] w-px bg-border" />
          
          {/* Vertical Line Progress Overlay (Approximate height for Q2 Active) */}
          <div 
            className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-[40px] w-[2px] bg-primary z-0 transition-all duration-1000 shadow-[0_0_10px_rgba(var(--primary),0.8)]" 
            style={{ height: '45%' }}
          />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => {
              const isEven = index % 2 === 0
              const isCompleted = item.status === "completed"
              const isActive = item.status === "active"
              
              return (
                <div key={item.id} className={cn("relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0", isEven ? "md:flex-row-reverse" : "")}>
                  
                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 bg-background rounded-full z-10">
                    <div className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors",
                      isCompleted ? "bg-primary/20 border-primary text-primary" : 
                      isActive ? "bg-primary border-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)]" : 
                      "bg-muted border-muted-foreground/30 text-muted-foreground"
                    )}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : 
                       isActive ? <Clock className="w-5 h-5 animate-pulse" /> : 
                       <Circle className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className={cn("w-full md:w-1/2 pl-16 md:pl-0", isEven ? "md:pl-12" : "md:pr-12 md:text-right")}>
                    <div className={cn(
                      "p-6 rounded-2xl border transition-all duration-300 text-left",
                      isEven ? "md:text-left" : "md:text-right",
                      isActive ? "bg-primary/5 border-primary/30 shadow-[0_0_30px_-5px_rgba(var(--primary),0.15)]" : "bg-card border-border",
                      isCompleted && "border-primary/20"
                    )}>
                      <div className={cn("inline-flex items-center gap-2 mb-3", !isEven && "md:flex-row-reverse")}>
                        <span className={cn(
                          "px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                          isActive ? "bg-primary text-primary-foreground" : 
                          isCompleted ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                        )}>
                          {item.quarter} {item.year}
                        </span>
                        {isActive && (
                          <span className="text-[10px] text-primary font-medium px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10">
                            Actual
                          </span>
                        )}
                      </div>
                      
                      <h3 className={cn("text-xl font-semibold mb-2", isActive ? "text-primary" : "text-foreground")}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Empty space for the other half */}
                  <div className="hidden md:block w-1/2" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}