import { Badge } from "@/components/ui/badge"

export function IntegrationsSection() {
  return (
    <section className="py-16 sm:py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Copy & Portals List */}
          <div className="space-y-6 sm:space-y-8 order-1">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-[1.1]">
                Sincronización total con tu ecosistema
              </h2>
              <p className="text-base sm:text-lg font-normal text-muted-foreground leading-normal">
                No cambies tu forma de trabajar, mejórala. RentAFlow se integra donde ya estás operando para que no pierdas ni un solo lead.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-secondary/30 border border-border/50">
                <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  Recepción Universal de Leads
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-normal font-normal">
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
          <div className="order-2">
            <div className="relative transform hover:scale-[1.01] transition-transform duration-500">
              {/* Glow effect - Subtle */}
              <div className="absolute inset-0 bg-[#dcfc03] blur-[120px] opacity-10" />
              
              <div className="relative bg-[#dcfc03] rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-xl overflow-hidden border border-black/5">
                
                <div className="relative z-10 flex flex-col items-start text-left h-full">
                  
                  {/* Eyebrow - Logo at top right */}
                  <div className="absolute top-0 right-0 flex items-center gap-1 opacity-80">
                    <span className="font-bold text-lg text-black tracking-tighter">idealista</span>
                    <span className="font-light text-lg text-black/70 tracking-tighter">/tools</span>
                  </div>

                  {/* Headline & Copy */}
                  <div className="space-y-4 mb-10 sm:mb-14 max-w-full mt-8 sm:mt-10 w-full">
                    <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight tracking-tight text-balance">
                      Optimizado para idealista
                    </h3>
                    <p className="text-black/75 font-normal text-base leading-relaxed text-pretty w-full max-w-none">
                      Responde en minutos con nuestra integración con idealista/tools y mantente entre las mejores agencias
                    </p>
                  </div>

                  {/* UI Mockup Element - Replica Idealista Inbox */}
                  <div className="w-full bg-white rounded-lg shadow-sm border border-black/5 p-4 md:p-5 mb-10">
                    <div className="grid grid-cols-3 gap-4 divide-x divide-black/5">
                      {/* Metric 1 */}
                      <div className="flex flex-col gap-1 pr-2">
                        <span className="text-[10px] text-black/60 font-medium truncate">Contactos recibidos por chat</span>
                        <div className="flex items-baseline gap-1">
                           <span className="text-lg md:text-xl font-bold text-black tabular-nums">28</span>
                           <span className="text-xs text-black/60">en las últimas 24 horas</span>
                        </div>
                      </div>
                      
                      {/* Metric 2 - Main Focus */}
                      <div className="flex flex-col gap-1 px-2 md:px-4 relative">
                        <span className="text-[10px] text-black/60 font-medium">Respondidos</span>
                        <div className="flex items-center gap-2 mb-1">
                           <span className="text-lg md:text-xl font-bold text-emerald-600 tabular-nums">28/28</span>
                           <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold border border-emerald-200">100%</span>
                        </div>
                         <div className="flex items-center gap-1">
                            <span className="text-xs">🏆</span>
                            <span className="text-[10px] font-medium text-black/80 leading-tight">Estáis entre las mejores agencias</span>
                         </div>
                         <div className="absolute -bottom-5 left-2 right-4 h-1 bg-emerald-500 rounded-t-sm" />
                      </div>
                      
                      {/* Metric 3 */}
                      <div className="flex flex-col gap-1 pl-2 md:pl-4">
                        <span className="text-[10px] text-black/60 font-medium">Por responder</span>
                         <div className="flex items-start gap-1.5 pt-1">
                            <span className="text-xs">🎉</span>
                            <span className="text-[10px] font-medium text-black/80 leading-tight">Todo respondido en las últ. 24h</span>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Mini Footer */}
                  <div className="w-full text-center mt-auto">
                    <p className="text-black/50 font-medium text-xs uppercase tracking-wide">
                      Operativa constante • Respuesta rápida • Mejor señal comercial
                    </p>
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
