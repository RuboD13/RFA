"use client"

import { useEffect, useState } from "react"
import {
  CalendarCheck,
  CheckCircle2,
  FileText,
  Globe,
  Mail,
  MessageSquare,
  UserCheck,
  Bot,
} from "lucide-react"

export function AutomationVisual() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const orderedLeads = [
    { name: "Lina Montoro", property: "Ascao 55", status: "Aprobado", tone: "emerald" },
    { name: "Samuel Varela", property: "Río Corrientes", status: "Descartado", tone: "slate" },
    { name: "Nadia Pardo", property: "Río Corrientes", status: "Incompleto", tone: "amber" },
    { name: "Mario Castañeda", property: "Pereda 2", status: "Datos Compl.", tone: "blue" },
  ]

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4 sm:p-8 min-h-[420px] flex items-center justify-center">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl overflow-hidden" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_2fr_1.4fr] gap-8 lg:gap-12 items-center">
        <div className="relative h-[240px]">
          <div className="absolute left-2 top-6 w-40 rounded-xl border border-border bg-card/80 p-3 shadow-sm lead-intake lead-intake-1">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                <Globe className="h-4 w-4" />
              </span>
              {orderedLeads[0].name}
            </div>
            <div className="mt-1 text-[10px] text-muted-foreground">{orderedLeads[0].property}</div>
            <div className="mt-2 h-2 w-16 rounded bg-muted/50" />
            <div className="mt-1 h-2 w-20 rounded bg-muted/40" />
          </div>
          <div className="absolute left-20 top-16 w-40 rounded-xl border border-border bg-card/80 p-3 shadow-sm lead-intake lead-intake-2">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                <Globe className="h-4 w-4" />
              </span>
              {orderedLeads[1].name}
            </div>
            <div className="mt-1 text-[10px] text-muted-foreground">{orderedLeads[1].property}</div>
            <div className="mt-2 h-2 w-12 rounded bg-muted/40" />
            <div className="mt-1 h-2 w-24 rounded bg-muted/30" />
          </div>
          <div className="absolute left-6 bottom-10 w-40 rounded-xl border border-border bg-card/80 p-3 shadow-sm lead-intake lead-intake-3">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                <Globe className="h-4 w-4" />
              </span>
              {orderedLeads[2].name}
            </div>
            <div className="mt-1 text-[10px] text-muted-foreground">{orderedLeads[2].property}</div>
            <div className="mt-2 h-2 w-20 rounded bg-muted/40" />
            <div className="mt-1 h-2 w-14 rounded bg-muted/30" />
          </div>
          <div className="absolute right-2 bottom-8 w-36 rounded-xl border border-border bg-card/70 p-3 shadow-sm opacity-70 lead-intake lead-intake-4">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                <Globe className="h-4 w-4" />
              </span>
              {orderedLeads[3].name}
            </div>
            <div className="mt-1 text-[10px] text-muted-foreground">{orderedLeads[3].property}</div>
            <div className="mt-2 h-2 w-10 rounded bg-muted/30" />
          </div>
          <div className="absolute left-6 -bottom-2 text-xs uppercase tracking-wider text-muted-foreground">
            Leads desordenados
          </div>
        </div>

        <div className="relative h-[260px] rounded-3xl border border-border bg-card/70 p-6">
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-3 rounded-full bg-secondary/80 border border-border" />
          <span className="belt-dot belt-dot-1" />
          <span className="belt-dot belt-dot-2" />
          <span className="belt-dot belt-dot-3" />

          <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between">
            <div className={`flex items-center gap-2 rounded-2xl border bg-background px-4 py-3 shadow-sm transition-all ${activeStep === 0 ? "border-orange-500/60 ring-1 ring-orange-500/40" : "border-border/60"}`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                <Globe className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold text-foreground">Entrada</div>
                <div className="text-[10px] text-muted-foreground">Idealista</div>
              </div>
            </div>

            <div className="relative flex items-center gap-2 rounded-2xl border bg-background px-4 py-3 shadow-sm transition-all">
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${activeStep === 1 ? "bg-primary/10 text-primary" : "bg-muted/40 text-muted-foreground"}`}>
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold text-foreground">Clasifica</div>
                <div className="text-[10px] text-muted-foreground">Datos + scoring</div>
              </div>

              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[10px] text-muted-foreground">
                <Mail className="h-3.5 w-3.5 text-blue-500" />
                Email a lead
              </div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[10px] text-muted-foreground">
                <MessageSquare className="h-3.5 w-3.5 text-green-500" />
                WhatsApp a agente
              </div>
            </div>

            <div className={`flex items-center gap-2 rounded-2xl border bg-background px-4 py-3 shadow-sm transition-all ${activeStep >= 2 ? "border-primary/60 ring-1 ring-primary/30" : "border-border/60"}`}>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <UserCheck className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold text-foreground">Coordina</div>
                <div className="text-[10px] text-muted-foreground">Visitas + docs</div>
              </div>
            </div>
          </div>

          <div className="absolute left-6 top-4 text-xs uppercase tracking-wider text-muted-foreground">
            Línea de trabajo
          </div>
          <div className="absolute right-6 bottom-4 flex items-center gap-2 text-xs text-muted-foreground">
            <span className={`h-2 w-2 rounded-full ${activeStep === 1 ? "bg-green-500 animate-pulse" : "bg-muted-foreground/40"}`} />
            Procesando
          </div>
        </div>

        <div className="relative h-[240px]">
          <div className="absolute right-2 top-0 text-xs uppercase tracking-wider text-muted-foreground">
            Leads ordenados
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {orderedLeads.map((lead, index) => (
              <div
                key={lead.name}
                className={`lead-grid-card lead-grid-card-${index} rounded-xl border bg-card px-3 py-3 shadow-sm transition-all ${activeStep >= 2 ? "opacity-100" : "opacity-60"} ${
                  lead.tone === "emerald" ? "border-emerald-500/30" : ""
                } ${lead.tone === "slate" ? "border-slate-500/30" : ""} ${lead.tone === "amber" ? "border-amber-500/30" : ""} ${
                  lead.tone === "blue" ? "border-blue-500/30" : ""
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">{lead.name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    lead.tone === "emerald" ? "bg-emerald-500/10 text-emerald-500" : ""
                  } ${lead.tone === "slate" ? "bg-slate-500/10 text-slate-500" : ""} ${
                    lead.tone === "amber" ? "bg-amber-500/10 text-amber-500" : ""
                  } ${lead.tone === "blue" ? "bg-blue-500/10 text-blue-500" : ""}`}
                  >
                    {lead.status}
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground">{lead.property}</div>
                <div className="mt-2 h-2 w-16 rounded bg-muted/60" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes belt {
          0% { transform: translateX(-10%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(110%); opacity: 0; }
        }
        @keyframes lead-intake {
          0% { transform: translateX(0px) translateY(0px) scale(1) rotate(var(--lead-rot)); opacity: 1; }
          55% { transform: translateX(60px) translateY(-6px) scale(0.98) rotate(var(--lead-rot)); opacity: 1; }
          80% { transform: translateX(120px) translateY(-10px) scale(0.92) rotate(var(--lead-rot)); opacity: 0.7; }
          100% { transform: translateX(170px) translateY(-10px) scale(0.88) rotate(var(--lead-rot)); opacity: 0; }
        }
        @keyframes lead-place {
          0% { transform: translateX(-18px) translateY(8px); opacity: 0; }
          35% { opacity: 1; }
          70% { transform: translateX(0px) translateY(0px); opacity: 1; }
          100% { transform: translateX(0px) translateY(0px); opacity: 0.85; }
        }
        .belt-dot {
          position: absolute;
          top: 50%;
          left: 6%;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(59, 130, 246, 0.35);
          transform: translateY(-50%);
          box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.08);
        }
        .belt-dot-1 { animation: belt 2.2s linear infinite; }
        .belt-dot-2 { animation: belt 2.2s linear infinite 0.7s; }
        .belt-dot-3 { animation: belt 2.2s linear infinite 1.4s; }
        .lead-intake { animation: lead-intake 5.2s ease-in-out infinite; }
        .lead-intake-1 { --lead-rot: -8deg; animation-delay: 0.1s; }
        .lead-intake-2 { --lead-rot: 6deg; animation-delay: 0.8s; }
        .lead-intake-3 { --lead-rot: -2deg; animation-delay: 1.4s; }
        .lead-intake-4 { --lead-rot: 10deg; animation-delay: 2s; }
        .lead-grid-card { animation: lead-place 4.2s ease-in-out infinite; }
        .lead-grid-card-0 { animation-delay: 0.1s; }
        .lead-grid-card-1 { animation-delay: 0.6s; }
        .lead-grid-card-2 { animation-delay: 1.1s; }
        .lead-grid-card-3 { animation-delay: 1.6s; }
      `}</style>
    </div>
  )
}
