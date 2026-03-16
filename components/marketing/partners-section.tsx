import { Badge } from "@/components/ui/badge"

export function PartnersSection() {
  return (
    <section className="py-20 lg:py-32 border-b border-border bg-gradient-to-b from-secondary/20 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content Side */}
          <div className="flex-1 space-y-8 lg:pr-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20 shadow-sm px-4 py-1.5 text-sm">
                Respuesta inmediata 24/7
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Tu operativa en WhatsApp <br/>
                <span className="text-green-600">siempre activa</span>
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Tu asistente virtual gestiona todo el ciclo de vida del lead directamente en WhatsApp, manteniendo a todos informados en tiempo real sin que tengas que levantar un dedo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: "Cualificación automática", desc: "Pide datos automáticamente a cada inquilino y los organiza" },
                { title: "Centralización de mensajes", desc: "Mantiene informados a inquilinos y agentes paso a paso" },
                { title: "Resolución de dudas", desc: "Responde preguntas básicas sobre el inmueble al instante" },
                { title: "Coordinación de agenda", desc: "Gestiona citas y notifica cambios en las reservas a todos" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-card border border-border/50 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
                  <div className="mt-1 h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="flex-1 w-full max-w-md lg:max-w-full relative">
            <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-green-500/20 blur-[80px] rounded-full opacity-60 animate-pulse" />
              
              <div className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-[#25D366] to-[#128C7E] p-1 shadow-2xl shadow-green-500/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                
                {/* Large WhatsApp Logo */}
                <svg viewBox="0 0 24 24" className="w-64 h-64 text-white fill-current drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl border border-border animate-bounce delay-100">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-semibold">Respuesta en &lt; 1 min</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl border border-border animate-bounce delay-300">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-bold text-xs">24/7</span>
                    </div>
                    <div className="text-sm font-semibold">
                      <p>Siempre disponible</p>
                      <p className="text-xs text-muted-foreground font-normal">Incluso festivos</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
