import { Badge } from "@/components/ui/badge"

export function IntegrationsSection() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Copy & Portals List */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Sincronización total con tu ecosistema
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No cambies tu forma de trabajar, mejórala. RentAFlow se integra donde ya estás operando para que no pierdas ni un solo lead.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  Recepción Universal de Leads
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Compatible con <span className="text-foreground font-medium">cualquier portal</span> que envíe notificaciones por email. Si llega a tu bandeja, RentAFlow lo procesa.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["pisos.com", "yaencontre", "Habitaclia", "Fotocasa", "Indomio"].map((portal) => (
                    <span key={portal} className="px-3 py-1 rounded-md bg-background border border-border text-xs font-medium text-muted-foreground">
                      {portal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Idealista Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#dcfc03] blur-[100px] opacity-20" />
              
              <div className="relative bg-[#dcfc03] rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                  
                  {/* Logo idealista/tools */}
                  <div className="flex items-center justify-center gap-1">
                    <span className="font-bold text-4xl md:text-5xl text-black tracking-tighter">idealista</span>
                    <span className="font-light text-4xl md:text-5xl text-black/60 tracking-tighter">/tools</span>
                  </div>

                  <div className="space-y-4 max-w-md mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
                      Te posiciona automáticamente entre las mejores agencias
                    </h3>
                    <p className="text-black/70 font-medium text-lg">
                      Respuesta inmediata = Mejor posicionamiento. <br/>
                      Tu reputación en idealista, al máximo nivel.
                    </p>
                  </div>

                  {/* UI Mockup Element */}
                  <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-black/5 mt-4">
                    <div className="flex items-center justify-between mb-3 border-b border-black/5 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                        <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-[10px] font-mono text-black/40">ESTADO DE RESPUESTA</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs border border-green-200">
                        100%
                      </div>
                      <div className="flex-1 text-left">
                        <div className="h-2 w-24 bg-black/10 rounded-full mb-1.5"></div>
                        <div className="h-1.5 w-16 bg-black/5 rounded-full"></div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold border border-green-200">
                        Top Agencia
                      </div>
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
