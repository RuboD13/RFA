"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Users,
  BarChart3,
  MessageSquare,
  CheckCircle2,
  Clock,
  Building2,
  Mail,
  Phone,
  MapPin,
  MoreHorizontal,
  Calendar,
  ShieldCheck,
  FileText,
  StickyNote,
} from "lucide-react"

const tabs = [
  {
    id: "leads",
    label: "Gestión de Leads",
    icon: Users,
    description: "Lista completa de leads con estado, ingresos y origen. Filtra por anuncio y estado.",
  },
  {
    id: "anuncios",
    label: "Centro de Anuncios",
    icon: Building2,
    description: "Control de todos tus inmuebles activos con métricas de rendimiento y consumo del plan anual.",
  },
  {
    id: "metricas",
    label: "Estadísticas",
    icon: BarChart3,
    description: "Análisis detallado: leads totales, tasa de conversión, tiempo ahorrado y calidad de datos.",
  },
  {
    id: "comunicaciones",
    label: "Detalle del lead",
    icon: MessageSquare,
    description: "Resumen del lead, comunicaciones y próximos pasos en un solo lugar.",
  },
]

type LeadApplicant = {
  id: string
  name: string
  role: "Titular" | "Solicitante" | "Avalista"
  email: string
  phone: string
  income: string
  country: string
  postalCode: string
  docType: string
  docId: string
}

type LeadDetails = {
  id: string
  name: string
  status: string
  score: string
  income: string
  email: string
  phone: string
  property: string
  updated: string
  origin: string
  applicants: LeadApplicant[]
  documents: { label: string; status: "Completado" | "Pendiente" }[]
  notes: { author: string; text: string; date: string }[]
  communications: { channel: "WhatsApp" | "Email"; date: string; preview: string }[]
}

function LeadsMockup({
  leads,
  onSelectLead,
}: {
  leads: LeadDetails[]
  onSelectLead: (leadId: string) => void
}) {

  const statusStyles: Record<string, { badge: string; border: string }> = {
    Aprobado: {
      badge: "bg-success/15 text-success",
      border: "border-success/60 bg-success/5",
    },
    "Datos Completos": {
      badge: "bg-success/15 text-success",
      border: "border-success/40 bg-success/5",
    },
    Incompleto: {
      badge: "bg-chart-4/15 text-chart-4",
      border: "border-chart-4/60 bg-chart-4/5",
    },
    Descartado: {
      badge: "bg-secondary text-muted-foreground",
      border: "border-border bg-card",
    },
  }

  return (
    <div className="p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">Leads</h3>
          <p className="text-xs text-muted-foreground">Gestión de clientes potenciales</p>
        </div>
        <div className="flex gap-2">
          <div className="text-xs bg-secondary px-3 py-1.5 rounded-lg">
            Total: <span className="font-semibold">376</span>
          </div>
          <div className="text-xs bg-success/10 text-success px-3 py-1.5 rounded-lg">
            Conversión: <span className="font-semibold">27%</span>
          </div>
        </div>
      </div>
      <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
        {leads.map((lead) => {
          const styles = statusStyles[lead.status] ?? statusStyles["Datos Completos"]
          return (
            <div
              key={lead.id}
              onClick={() => onSelectLead(lead.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  onSelectLead(lead.id)
                }
              }}
              role="button"
              tabIndex={0}
              className={`w-full rounded-xl border p-3 bg-card text-left transition ${styles.border} hover:border-primary/40`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-wide text-muted-foreground">ID: {lead.id}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-foreground">{lead.name}</p>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full ${styles.badge}`}>
                        {lead.status}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {lead.score}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="text-success font-medium">{lead.income}</span>
                      <span>{lead.updated}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={(event) => event.stopPropagation()}
                    className="p-1.5 rounded-lg border border-border bg-secondary/50"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => event.stopPropagation()}
                    className="p-1.5 rounded-lg border border-border bg-secondary/50"
                  >
                    <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => event.stopPropagation()}
                    className="p-1.5 rounded-lg border border-border bg-secondary/50"
                  >
                    <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => event.stopPropagation()}
                    className="p-1.5 rounded-lg border border-border bg-secondary/50"
                  >
                    <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  {lead.email}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  {lead.phone}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {lead.property}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AnunciosMockup() {
  const anuncios = [
    { name: "Hab Doble - Ascao 55", status: "Activo", leads: 146, emails: 6, whatsapps: 4, completos: 2, time: "00:43h" },
    { name: "Río Corrientes", status: "Activo", leads: 115, emails: 9, whatsapps: 10, completos: 2, time: "00:31h" },
    { name: "José María de Pereda 5", status: "Activo", leads: 98, emails: 2, whatsapps: 1, completos: 1, time: "00:12h" },
    { name: "José María de Pereda 2", status: "Activo", leads: 64, emails: 1, whatsapps: 0, completos: 0, time: "00:04h" },
    { name: "Feli Peña", status: "Pausa", leads: 32, emails: 0, whatsapps: 0, completos: 0, time: "00:00h" },
  ]

  return (
    <div className="p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">Centro de Anuncios</h3>
          <p className="text-xs text-muted-foreground">Control operativo y económico por anuncio</p>
        </div>
        <div className="text-xs bg-secondary px-3 py-1.5 rounded-lg">320 leads usados</div>
      </div>
      <div className="space-y-3">
        {anuncios.map((anuncio, i) => (
          <div key={i} className="p-4 border border-border rounded-lg bg-card">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm text-foreground">{anuncio.name}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    anuncio.status === "Pausa" ? "bg-secondary text-muted-foreground" : "bg-success/10 text-success"
                  }`}
                >
                  {anuncio.status}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {anuncio.status === "Pausa" ? (
                  <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                    Reactivar
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                    Pausar
                  </Button>
                )}
                <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                  Archivar
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2 text-center">
              {[
                { label: "Nuevos", value: anuncio.leads },
                { label: "Emails", value: anuncio.emails },
                { label: "WhatsApps", value: anuncio.whatsapps },
                { label: "Completos", value: anuncio.completos },
                { label: "A la espera", value: Math.floor(anuncio.leads * 0.9) },
                { label: "Tiempo", value: anuncio.time },
              ].map((stat, j) => (
                <div key={j}>
                  <p className={`text-sm font-semibold ${j === 0 ? "text-primary" : "text-foreground"}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MetricasMockup() {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-4">
        <h3 className="font-semibold text-foreground">Estadísticas - Río Corrientes</h3>
        <p className="text-xs text-muted-foreground">Análisis detallado del rendimiento</p>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: "Leads Totales", value: "116", color: "text-foreground" },
          { label: "Datos Completos", value: "40", color: "text-success" },
          { label: "Tasa Conversión", value: "34.5%", color: "text-primary" },
          { label: "Descartados", value: "0", color: "text-destructive" },
        ].map((stat, i) => (
          <div key={i} className="bg-secondary/30 rounded-lg p-3 text-center">
            <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-secondary/30 rounded-lg p-4">
          <p className="text-xs font-medium text-muted-foreground mb-3">Leads por día</p>
          <div className="flex items-end gap-1 h-20">
            {[2, 5, 3, 8, 12, 28, 45, 58, 110].map((val, i) => (
              <div key={i} className="flex-1 bg-primary/60 rounded-t" style={{ height: `${(val / 110) * 100}%` }} />
            ))}
          </div>
        </div>
        <div className="bg-secondary/30 rounded-lg p-4">
          <p className="text-xs font-medium text-muted-foreground mb-3">Análisis de Calidad</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Leads Rebotados</span>
              <span className="font-medium text-foreground">6</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Datos Incompletos</span>
              <span className="font-medium text-chart-4">40</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Necesidad de Aval</span>
              <span className="font-medium text-foreground">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between p-3 bg-success/10 rounded-lg">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-success" />
          <span className="text-sm text-foreground">Tiempo ahorrado</span>
        </div>
        <span className="font-bold text-success">00:49h</span>
      </div>
    </div>
  )
}

function LeadDetailMockup({ lead }: { lead: LeadDetails }) {
  const [activeApplicantId, setActiveApplicantId] = useState(lead.applicants[0]?.id ?? "")
  const activeApplicant = lead.applicants.find((applicant) => applicant.id === activeApplicantId) ?? lead.applicants[0]

  return (
    <div className="p-4 lg:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
            <Users className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">{lead.name}</h3>
            <p className="text-xs text-muted-foreground">
              {lead.property} · Fecha Entrada: {lead.updated} · Origen: {lead.origin}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
            <MessageSquare className="w-3 h-3 mr-1" />
            WhatsApp
          </Button>
          <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
            <Mail className="w-3 h-3 mr-1" />
            Correo
          </Button>
          <Button size="sm" className="text-xs h-7">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Candidato Aprobado
          </Button>
          <Button size="sm" variant="outline" className="text-xs h-7">
            <ShieldCheck className="w-3 h-3 mr-1" />
            Pedir Aval
          </Button>
          <Button size="sm" variant="outline" className="text-xs h-7">
            Denegar Candidato
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {lead.applicants.map((applicant) => (
          <button
            key={applicant.id}
            type="button"
            onClick={() => setActiveApplicantId(applicant.id)}
            className={`text-xs px-3 py-1 rounded-full border ${
              activeApplicantId === applicant.id
                ? "bg-primary/10 text-primary border-primary/30"
                : "bg-secondary text-muted-foreground border-border"
            }`}
          >
            {applicant.role === "Avalista" ? `Avalista - ${applicant.name}` : applicant.name}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-foreground">Información personal</p>
              <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                Editar
              </Button>
            </div>
            {activeApplicant && (
              <div className="grid gap-3 text-xs text-muted-foreground sm:grid-cols-2">
                <div>
                  <p className="text-[11px] uppercase tracking-wide">Nombre</p>
                  <p className="text-sm text-foreground">{activeApplicant.name}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide">Rol</p>
                  <p className="text-sm text-foreground">{activeApplicant.role}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide">Correo</p>
                  <p className="text-sm text-foreground">{activeApplicant.email}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide">Teléfono</p>
                  <p className="text-sm text-foreground">{activeApplicant.phone}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide">Ingresos</p>
                  <p className="text-sm text-foreground">{activeApplicant.income}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide">País</p>
                  <p className="text-sm text-foreground">{activeApplicant.country}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide">Código Postal</p>
                  <p className="text-sm text-foreground">{activeApplicant.postalCode}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide">{activeApplicant.docType}</p>
                  <p className="text-sm text-foreground">{activeApplicant.docId}</p>
                </div>
              </div>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-success/10 border border-success/20 rounded-xl p-4">
              <p className="text-xs font-medium text-success mb-2">Estado</p>
              <p className="text-sm text-success font-semibold">{lead.status}</p>
              <p className="text-xs text-muted-foreground mt-2">Click para cambiar estado</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <p className="text-xs font-medium text-muted-foreground mb-2">Información de la visita</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  No programada
                </span>
                <Button size="sm" className="text-xs h-7">
                  Programar
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-foreground">Comunicaciones</p>
              <span className="text-xs text-muted-foreground">{lead.communications.length}</span>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
              {lead.communications.map((message, index) => (
                <div key={`${message.channel}-${index}`} className="rounded-lg border border-border bg-secondary/30 p-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span className="text-foreground font-medium">{message.channel}</span>
                    <span>· {message.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{message.preview}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-foreground">Documentos</p>
              <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                Gestionar
              </Button>
            </div>
            <div className="space-y-2">
              {lead.documents.map((doc) => (
                <div key={doc.label} className="flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <FileText className="w-3.5 h-3.5" />
                    {doc.label}
                  </span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                      doc.status === "Completado"
                        ? "bg-success/15 text-success"
                        : "bg-chart-4/15 text-chart-4"
                    }`}
                  >
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-foreground">Anotaciones</p>
              <span className="text-xs text-muted-foreground">{lead.notes.length}</span>
            </div>
            <div className="space-y-2">
              {lead.notes.map((note, index) => (
                <div key={`${note.author}-${index}`} className="rounded-lg border border-border p-2 text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <StickyNote className="w-3.5 h-3.5" />
                    <span className="text-foreground font-medium">{note.author}</span>
                    <span>· {note.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{note.text}</p>
                </div>
              ))}
            </div>
            <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent mt-3 w-full">
              Añadir Nota
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DashboardPreview({ hideHeader = false }: { hideHeader?: boolean }) {
  const leads = useMemo<LeadDetails[]>(
    () => [
      {
        id: "2271",
        name: "Lina Montoro",
        status: "Aprobado",
        score: "84%",
        income: "€ 1.120,00",
        email: "lina.montoro@ejemplo.com",
        phone: "642564192",
        property: "Hab Doble - Ascao 55",
        updated: "05/01/2025, 10:21",
        origin: "mail",
        applicants: [
          {
            id: "app-2271-1",
            name: "Lina Montoro",
            role: "Titular",
            email: "lina.montoro@ejemplo.com",
            phone: "642564192",
            income: "€ 1.120,00",
            country: "España",
            postalCode: "28045",
            docType: "DNI",
            docId: "43182512S",
          },
          {
            id: "app-2271-2",
            name: "Mario Salas",
            role: "Solicitante",
            email: "mario.salas@ejemplo.com",
            phone: "622450981",
            income: "€ 1.980,00",
            country: "España",
            postalCode: "28045",
            docType: "NIE",
            docId: "X4618568D",
          },
          {
            id: "app-2271-3",
            name: "J. P.",
            role: "Avalista",
            email: "jp@ejemplo.com",
            phone: "695665556",
            income: "€ 3.330,00",
            country: "España",
            postalCode: "28018",
            docType: "Pasaporte",
            docId: "P56566556",
          },
        ],
        documents: [
          { label: "DNI/NIE", status: "Completado" },
          { label: "Just. ingresos", status: "Pendiente" },
        ],
        notes: [{ author: "Juanjo", text: "Familia completa, revisar avalista.", date: "04/01/2025 10:46" }],
        communications: [
          {
            channel: "WhatsApp",
            date: "10/12/2025",
            preview: "Hola Lina, gracias por tu interés. Para continuar necesitamos DNI, ingresos y teléfono.",
          },
          {
            channel: "Email",
            date: "10/12/2025",
            preview: "Confirmación de visita reservada. Si necesitas cambiarla, responde a este correo.",
          },
        ],
      },
      {
        id: "2218",
        name: "Samuel Varela",
        status: "Descartado",
        score: "83%",
        income: "€ 3.750,00",
        email: "samuel.varela@ejemplo.com",
        phone: "3609572004",
        property: "Río Corrientes",
        updated: "10/12/2025, 15:22",
        origin: "portal",
        applicants: [
          {
            id: "app-2218-1",
            name: "Samuel Varela",
            role: "Titular",
            email: "samuel.varela@ejemplo.com",
            phone: "3609572004",
            income: "€ 3.750,00",
            country: "España",
            postalCode: "28012",
            docType: "DNI",
            docId: "58421222M",
          },
        ],
        documents: [
          { label: "DNI/NIE", status: "Completado" },
          { label: "Just. ingresos", status: "Completado" },
        ],
        notes: [{ author: "María", text: "Descartado por requisitos de renta.", date: "11/12/2025 09:10" }],
        communications: [
          {
            channel: "Email",
            date: "11/12/2025",
            preview: "Gracias por tu interés. En esta ocasión avanzaremos con otro candidato.",
          },
        ],
      },
      {
        id: "2203",
        name: "Nadia Pardo",
        status: "Incompleto",
        score: "40%",
        income: "€ -",
        email: "nadia.pardo@idealista.com.contactos-id-xy82@contacts.idealista.com",
        phone: "3684033440",
        property: "Río Corrientes",
        updated: "16/12/2025, 23:04",
        origin: "idealista",
        applicants: [
          {
            id: "app-2203-1",
            name: "Nadia Pardo",
            role: "Titular",
            email: "nadia.pardo@idealista.com.contactos-id-xy82@contacts.idealista.com",
            phone: "3684033440",
            income: "€ 1.200,00",
            country: "España",
            postalCode: "28015",
            docType: "DNI",
            docId: "44182021K",
          },
          {
            id: "app-2203-2",
            name: "Iván Soler",
            role: "Solicitante",
            email: "ivan.soler@ejemplo.com",
            phone: "620778901",
            income: "€ 1.450,00",
            country: "España",
            postalCode: "28015",
            docType: "NIE",
            docId: "Y5298871B",
          },
          {
            id: "app-2203-3",
            name: "M. R.",
            role: "Avalista",
            email: "mr@ejemplo.com",
            phone: "611554420",
            income: "€ 3.100,00",
            country: "España",
            postalCode: "28015",
            docType: "Pasaporte",
            docId: "P44201117",
          },
        ],
        documents: [
          { label: "DNI/NIE", status: "Pendiente" },
          { label: "Just. ingresos", status: "Pendiente" },
        ],
        notes: [{ author: "Equipo", text: "Pendiente de completar documentación.", date: "16/12/2025 23:05" }],
        communications: [
          {
            channel: "WhatsApp",
            date: "16/12/2025",
            preview: "Necesitamos DNI y justificante de ingresos para continuar con la solicitud.",
          },
        ],
      },
      {
        id: "1773",
        name: "Mario Castañeda",
        status: "Datos Completos",
        score: "80%",
        income: "€ 1.100,00",
        email: "mario.castaneda@ejemplo.com",
        phone: "600224138",
        property: "José María de Pereda 2",
        updated: "30/11/2025, 17:49",
        origin: "web",
        applicants: [
          {
            id: "app-1773-1",
            name: "Mario Castañeda",
            role: "Titular",
            email: "mario.castaneda@ejemplo.com",
            phone: "600224138",
            income: "€ 1.100,00",
            country: "España",
            postalCode: "28028",
            docType: "DNI",
            docId: "12455788R",
          },
        ],
        documents: [
          { label: "DNI/NIE", status: "Completado" },
          { label: "Just. ingresos", status: "Completado" },
        ],
        notes: [{ author: "Ana", text: "Todo correcto, listo para visita.", date: "02/12/2025 09:18" }],
        communications: [
          {
            channel: "WhatsApp",
            date: "01/12/2025",
            preview: "Gracias Mario, ya tenemos tu documentación. Te contactamos con horarios.",
          },
        ],
      },
      {
        id: "1694",
        name: "Clara Benítez",
        status: "Incompleto",
        score: "40%",
        income: "€ -",
        email: "clara.benitez@idealista.com.contactos-9a1f@contacts.idealista.com",
        phone: "5255784462",
        property: "Feli Peña",
        updated: "22/11/2025, 02:52",
        origin: "idealista",
        applicants: [
          {
            id: "app-1694-1",
            name: "Clara Benítez",
            role: "Titular",
            email: "clara.benitez@idealista.com.contactos-9a1f@contacts.idealista.com",
            phone: "5255784462",
            income: "€ 1.000,00",
            country: "España",
            postalCode: "28042",
            docType: "DNI",
            docId: "27811445P",
          },
        ],
        documents: [
          { label: "DNI/NIE", status: "Pendiente" },
          { label: "Just. ingresos", status: "Pendiente" },
        ],
        notes: [{ author: "Equipo", text: "Pendiente respuesta.", date: "22/11/2025 03:02" }],
        communications: [
          {
            channel: "Email",
            date: "22/11/2025",
            preview: "Te recordamos subir tu DNI y justificante de ingresos para avanzar.",
          },
        ],
      },
      {
        id: "1418",
        name: "Iván Rojas",
        status: "Datos Completos",
        score: "80%",
        income: "€ 1.900,00",
        email: "ivan.rojas@ejemplo.com",
        phone: "34672666545",
        property: "José María de Pereda 5",
        updated: "27/12/2025, 11:33",
        origin: "web",
        applicants: [
          {
            id: "app-1418-1",
            name: "Iván Rojas",
            role: "Titular",
            email: "ivan.rojas@ejemplo.com",
            phone: "34672666545",
            income: "€ 1.900,00",
            country: "España",
            postalCode: "28033",
            docType: "DNI",
            docId: "99421555T",
          },
        ],
        documents: [
          { label: "DNI/NIE", status: "Completado" },
          { label: "Just. ingresos", status: "Completado" },
        ],
        notes: [{ author: "Pablo", text: "Candidato sólido.", date: "28/12/2025 08:40" }],
        communications: [
          {
            channel: "WhatsApp",
            date: "27/12/2025",
            preview: "Hola Iván, hemos recibido tu documentación. Te escribimos con horarios.",
          },
        ],
      },
    ],
    []
  )
  const [activeTab, setActiveTab] = useState("leads")
  const [selectedLeadId, setSelectedLeadId] = useState(leads[0]?.id ?? "")
  const selectedLead = leads.find((lead) => lead.id === selectedLeadId) ?? leads[0]
  const activeTabData = tabs.find((t) => t.id === activeTab)

  const renderMockup = () => {
    switch (activeTab) {
      case "leads":
        return (
          <LeadsMockup
            leads={leads}
            onSelectLead={(leadId) => {
              setSelectedLeadId(leadId)
              setActiveTab("comunicaciones")
            }}
          />
        )
      case "anuncios":
        return <AnunciosMockup />
      case "metricas":
        return <MetricasMockup />
      case "comunicaciones":
        return selectedLead ? <LeadDetailMockup lead={selectedLead} /> : null
      default:
        return (
          <LeadsMockup
            leads={leads}
            onSelectLead={(leadId) => {
              setSelectedLeadId(leadId)
              setActiveTab("comunicaciones")
            }}
          />
        )
    }
  }

  return (
    <section className={hideHeader ? "" : "py-16 lg:py-24 bg-background"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Un dashboard diseñado para <span className="text-primary">agentes inmobiliarios</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Interfaz intuitiva que te permite supervisar todo el flujo de alquileres desde un solo lugar.
            </p>
          </div>
        )}

        {/* Tab Navigation */}
        {!hideHeader && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTab(tab.id)}
                  className="gap-2"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </Button>
              )
            })}
          </div>
        )}

        {/* Dashboard Preview with React Mockups */}
        <div className="relative bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-chart-4/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 bg-background rounded text-xs text-muted-foreground">
                app.rentaflow.com/dashboard
              </div>
            </div>
          </div>

          <div className="flex min-h-[400px]">
            {/* Sidebar mockup */}
            <div className="w-48 bg-secondary/20 border-r border-border p-4 hidden lg:block">
              <div className="font-semibold text-sm text-foreground mb-4">RentAFlow</div>
              <div className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-2 text-xs px-3 py-2 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">{renderMockup()}</div>
          </div>
        </div>

        {/* Tab Description */}
        <p className="text-center text-muted-foreground mt-6">{activeTabData?.description}</p>
      </div>
    </section>
  )
}
