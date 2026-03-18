import { FileText, MousePointerClick, AlertCircle } from "lucide-react"

export function OperationalContext() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden border-b border-white/10">
      {/* Background Grid - White/Light for contrast on dark background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Radial Glow for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 rounded-full blur-3xl -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-20 lg:mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-white/70 mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              El problema de publicar en portales
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance tracking-tight mb-6 leading-[1.05]">
              Gestionar alquileres <br className="hidden sm:block" /><span className="text-white/40">puede convertirse en un caos</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed text-pretty">
              Entran decenas de interesados, pero pocos llegan realmente listos para
              visitar y alquilar. El filtrado manual te roba horas cada día.
            </p>
          </div>

          {/* Comparison Section */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* El proceso tradicional */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#111111] p-8 sm:p-10 group transition-colors duration-500 hover:bg-[#151515]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-red-500/10 transition-colors duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white/90">
                    El proceso tradicional
                  </h3>
                </div>
                <ul className="space-y-5">
                  {[
                    "Decenas de leads sin datos cualificados",
                    "Horas pidiendo documentación por email y teléfono",
                    "Visitas con personas que no cumplen requisitos",
                    "Mensajes y llamadas constantes interrumpiendo"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/60 leading-relaxed">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500/40 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Con RentAFlow */}
            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.05] to-transparent p-8 sm:p-10 group transition-all duration-500 hover:border-emerald-500/40 hover:bg-emerald-500/[0.08]">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Con RentAFlow</h3>
                </div>
                <div className="space-y-6 flex-1">
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1.5">
                        Filtro en piloto automático
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed text-pretty">
                        WhatsApp atiende a los leads, solicita documentación y
                        descarta a los no cualificados.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1.5">
                        Información centralizada
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed text-pretty">
                        Llega a cada visita con el expediente completo y el
                        scoring financiero ya calculado.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1.5">
                        Visitas 100% efectivas
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed text-pretty">
                        Invierte tu tiempo solo en enseñar el piso a
                        inquilinos viables y listos para cerrar.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-emerald-500/20">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Cierra más rápido, sin estrés
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Item 1: WhatsApp (Wide Card - Span 2 cols) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 flex-1 flex flex-col">
              <div className="mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-white">
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">WhatsApp en piloto automático</h3>
                <p className="text-white/60 leading-relaxed text-pretty max-w-lg">
                  Responde leads, pide datos, hace seguimiento y ayuda a coordinar visitas por WhatsApp, sin que tengas que escribir lo mismo una y otra vez.
                </p>
              </div>
              
              {/* Abstract UI Visual - Automated WhatsApp Conversations (Grid Layout for Wide Card) */}
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Chat 1: Data Collection */}
                <div className="bg-[#0b141a] rounded-xl border border-white/5 overflow-hidden">
                  <div className="flex items-center gap-3 px-3 py-2 bg-[#202c33] border-b border-white/5">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">LM</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white truncate">Lucía M.</p>
                    </div>
                    <span className="text-[10px] text-white/40">10:42</span>
                  </div>
                  <div className="p-3 space-y-2 bg-[url('https://static.whatsapp.net/rsrc.php/v3/yl/r/gi_DckOUM5a.png')] bg-opacity-5 h-full">
                    <div className="flex justify-end">
                       <div className="bg-[#005c4b] text-[#e9edef] text-[11px] px-2.5 py-1.5 rounded-lg rounded-tr-none max-w-[85%] shadow-sm">
                         Hola Lucía, para agendar la visita necesito tu DNI e ingresos.
                         <div className="flex justify-end items-center gap-0.5 mt-0.5">
                           <span className="text-[9px] text-white/60">10:41</span>
                           <svg viewBox="0 0 16 15" width="10" height="10" className="text-[#53bdeb]"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg>
                         </div>
                       </div>
                    </div>
                    <div className="flex justify-start">
                       <div className="bg-[#202c33] text-[#e9edef] text-[11px] px-2.5 py-1.5 rounded-lg rounded-tl-none max-w-[85%] shadow-sm">
                         Claro! Te los paso ahora.
                         <span className="block text-[9px] text-white/40 text-right mt-0.5">10:42</span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Chat 2: Missing Doc */}
                <div className="bg-[#0b141a] rounded-xl border border-white/5 overflow-hidden">
                  <div className="flex items-center gap-3 px-3 py-2 bg-[#202c33] border-b border-white/5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white">CR</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white truncate">Carlos R.</p>
                    </div>
                    <span className="text-[10px] text-white/40">11:15</span>
                  </div>
                  <div className="p-3 space-y-2 h-full">
                    <div className="flex justify-end">
                       <div className="bg-[#005c4b] text-[#e9edef] text-[11px] px-2.5 py-1.5 rounded-lg rounded-tr-none max-w-[90%] shadow-sm">
                         Carlos, solo nos falta el avalista para completar tu perfil.
                         <div className="flex justify-end items-center gap-0.5 mt-0.5">
                           <span className="text-[9px] text-white/60">11:14</span>
                           <svg viewBox="0 0 16 15" width="10" height="10" className="text-[#53bdeb]"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>

                 {/* Chat 3: Scheduling */}
                 <div className="bg-[#0b141a] rounded-xl border border-white/5 overflow-hidden">
                  <div className="flex items-center gap-3 px-3 py-2 bg-[#202c33] border-b border-white/5">
                    <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-[10px] font-bold text-white">AG</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white truncate">Ana G.</p>
                    </div>
                    <span className="text-[10px] text-white/40">09:30</span>
                  </div>
                  <div className="p-3 space-y-2 h-full">
                    <div className="flex justify-end">
                       <div className="bg-[#005c4b] text-[#e9edef] text-[11px] px-2.5 py-1.5 rounded-lg rounded-tr-none max-w-[90%] shadow-sm">
                         Hola Ana, tenemos hueco mañana a las 10:00 o 12:30. ¿Te va bien?
                         <div className="flex justify-end items-center gap-0.5 mt-0.5">
                           <span className="text-[9px] text-white/60">09:30</span>
                           <svg viewBox="0 0 16 15" width="10" height="10" className="text-white/60"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Item 2: Todo en una sola ficha (Tall Card - Span 1 col) */}
          <div className="md:row-span-2 group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-8 pb-0 flex-1 flex flex-col">
              <div className="mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-white">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Todo en una sola ficha</h3>
                <p className="text-white/60 leading-relaxed text-pretty">
                  Datos del interesado, inmueble, origen del lead y comunicaciones reunidos en un mismo lugar. Sin pestañas infinitas.
                </p>
              </div>
              
              {/* Abstract UI Visual - File Card */}
              <div className="mt-auto relative w-full pt-6">
                <div className="relative w-full bg-[#1A1A1A] rounded-t-2xl border-t border-x border-white/10 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="p-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-3 w-32 bg-white/20 rounded-full"></div>
                        <div className="h-2 w-48 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className="h-6 w-20 bg-white/5 rounded-md border border-white/10"></div>
                      <div className="h-6 w-20 bg-white/5 rounded-md border border-white/10"></div>
                      <div className="h-6 w-28 bg-white/20 rounded-md border border-white/10"></div>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-3 opacity-70">
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="h-2.5 w-24 bg-white/20 rounded-full mb-3"></div>
                        <div className="space-y-2">
                          <div><div className="h-1.5 w-12 bg-white/10 rounded-full mb-1"></div><div className="h-2 w-20 bg-white/20 rounded-full"></div></div>
                          <div><div className="h-1.5 w-16 bg-white/10 rounded-full mb-1"></div><div className="h-2 w-28 bg-white/20 rounded-full"></div></div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="flex justify-between items-center mb-3"><div className="h-2.5 w-20 bg-white/20 rounded-full"></div><div className="h-1.5 w-10 bg-white/10 rounded-full"></div></div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center"><div className="flex gap-2 items-center"><div className="w-3 h-3 rounded bg-white/10"></div><div className="h-2 w-16 bg-white/20 rounded-full"></div></div><div className="h-1.5 w-12 bg-emerald-500/30 rounded-full"></div></div>
                          <div className="flex justify-between items-center"><div className="flex gap-2 items-center"><div className="w-3 h-3 rounded bg-white/10"></div><div className="h-2 w-20 bg-white/20 rounded-full"></div></div><div className="h-1.5 w-12 bg-amber-500/30 rounded-full"></div></div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 border border-white/5 h-16">
                        <div className="h-2.5 w-16 bg-white/20 rounded-full mb-2"></div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full mb-1"></div>
                        <div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
                </div>
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
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Decide a quién enseñas el piso</h3>
                <p className="text-white/60 leading-relaxed text-pretty max-w-xl">
                  La IA filtra y organiza, pero tú decides quién visita. Evita paseos inútiles y céntrate en los candidatos viables.
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
