import { FileText, ListFilter, MousePointerClick } from "lucide-react"

export function OperationalContext() {
  return (
    <section className="py-24 lg:py-32 bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance tracking-tight">
            Tu equipo no necesita más leads. Necesita contexto para actuar rápido.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            RentAFlow no solo responde y recopila información: deja cada lead listo para revisar, documentar, programar y decidir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center mb-2">
              <ListFilter className="w-6 h-6 text-foreground/70" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Cada lead llega con contexto</h3>
            <p className="text-base text-muted-foreground leading-relaxed text-pretty">
              Datos personales, inmueble, origen y comunicaciones en una sola vista.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center mb-2">
              <FileText className="w-6 h-6 text-foreground/70" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Documentación y estado, sin perseguir a nadie</h3>
            <p className="text-base text-muted-foreground leading-relaxed text-pretty">
              DNI, justificantes, incidencias y validaciones visibles desde la ficha del candidato.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center mb-2">
              <MousePointerClick className="w-6 h-6 text-foreground/70" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Siguiente acción clara</h3>
            <p className="text-base text-muted-foreground leading-relaxed text-pretty">
              Aprueba, solicita más información o programa la visita desde el panel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
