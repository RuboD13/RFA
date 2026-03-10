import { FileText, ListFilter, MousePointerClick } from "lucide-react"

export function OperationalContext() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden border-b border-white/10">
      {/* Background Grid - White/Light for contrast on dark background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Radial Glow for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 rounded-full blur-3xl -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance tracking-tight mb-6 leading-[1.1]">
            Toda la información de los posibles inquilinos listo para avanzar
          </h2>
          <p className="text-lg sm:text-xl font-normal text-white/60 text-pretty max-w-2xl mx-auto leading-relaxed">
            RentAFlow captura la consulta, reúne la información clave y deja claro qué hacer después: revisar, pedir un dato, programar una visita o seguir avanzando.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Item 1: Wide Card (Span 2 cols on md) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 h-full flex flex-col justify-between">
              <div className="mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-white">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Todo en una sola ficha</h3>
                <p className="text-white/60 leading-relaxed text-pretty max-w-md">
                  Datos del interesado, inmueble, origen del lead y comunicaciones reunidos en un mismo lugar. Sin pestañas infinitas.
                </p>
              </div>
              
              {/* Abstract UI Visual - File Card */}
              <div className="relative w-full h-32 bg-black/40 rounded-t-xl border-t border-x border-white/10 overflow-hidden mask-linear-fade">
                <div className="p-4 space-y-3 opacity-80">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20" />
                    <div className="space-y-1.5">
                      <div className="h-2 w-24 bg-white/20 rounded-full" />
                      <div className="h-2 w-16 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full" />
                  <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Tall Card (Span 1 col) */}
          <div className="md:row-span-2 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 flex-1 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-white">
                <ListFilter className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Documentación y estado</h3>
              <p className="text-white/60 leading-relaxed text-pretty mb-8">
                Consulta qué falta, qué está completo y en qué punto se encuentra cada candidato.
              </p>
              
              {/* Abstract UI Visual - Checklist Status */}
              <div className="mt-auto space-y-3 bg-black/20 p-4 rounded-xl border border-white/5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-500' : i === 2 ? 'bg-yellow-500' : 'bg-white/20'}`} />
                      <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                    </div>
                    <div className="h-1.5 w-8 bg-white/5 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Item 3: Wide Card (Span 2 cols on md) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-white">
                  <MousePointerClick className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Tú tienes la última palabra</h3>
                <p className="text-white/60 leading-relaxed text-pretty">
                  La IA automatiza el trabajo pesado, pero <strong className="text-white font-medium">tú decides</strong> quién visita y quién alquila. Mantén el control total.
                </p>
              </div>
              
              {/* Abstract UI Visual - Decision Button */}
              <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto md:h-32 bg-black/40 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
                <div className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] transform group-hover:scale-105 transition-transform">
                  Aprobar Visita
                </div>
                {/* Cursor */}
                <svg className="absolute bottom-1/3 right-1/3 w-6 h-6 text-white drop-shadow-lg transform translate-x-2 translate-y-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.5 3.21l10.8 5.4a1 1 0 01.12 1.74l-4.5 2.5a1 1 0 00-.46.46l-2.5 4.5a1 1 0 01-1.74.12l-5.4-10.8a1 1 0 011.68-1.68z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
