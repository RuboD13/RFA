"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import {
  LayoutDashboard,
  Users,
  BarChart3,
  MessageSquare,
  CheckCircle2,
  Clock,
  Building2,
  FileText,
  Mail,
  CalendarDays,
  MessageCircle,
  CheckSquare,
  Calendar,
  ChevronLeft,
  ChevronRight,
  User,
  Phone,
  MapPin,
  Trash2,
} from "lucide-react"

const tabs = [
  {
    id: "detalle",
    label: "Detalle del lead",
    icon: FileText,
    description: "Ficha completa con datos personales, documentos, estado y comunicaciones del candidato.",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    description: "Métricas y estadísticas de tus clientes potenciales.",
  },
  {
    id: "anuncios",
    label: "Centro de Anuncios",
    icon: Building2,
    description: "Control de todos tus inmuebles activos con métricas de rendimiento y consumo del plan.",
  },
  {
    id: "leads",
    label: "Gestión de Leads",
    icon: Users,
    description: "Lista completa de leads con estado, ingresos y origen. Filtra por anuncio y estado.",
  },
  {
    id: "agenda",
    label: "Agenda",
    icon: Calendar,
    description: "Configura disponibilidad y gestiona visitas. Sincronización automática con calendario.",
  },
]

function LeadsMockup() {
  const leads = [
    { name: "María García", status: "Datos Completos", score: "98%", income: "3.200 EUR", property: "Apartamento Centro" },
    { name: "Carlos López", status: "Incompleto", score: "45%", income: "- EUR", property: "Calle del Río 12" },
    { name: "Ana Martínez", status: "Datos Completos", score: "100%", income: "2.800 EUR", property: "Avenida del Parque 25" },
    { name: "Pedro Sánchez", status: "Pendiente", score: "72%", income: "2.100 EUR", property: "Apartamento Centro" },
  ]

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
      <div className="space-y-2">
        {leads.map((lead, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{lead.name}</p>
                <p className="text-xs text-muted-foreground">{lead.property}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">{lead.income}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  lead.status === "Datos Completos"
                    ? "bg-success/10 text-success"
                    : lead.status === "Incompleto"
                      ? "bg-chart-4/10 text-chart-4"
                      : "bg-secondary text-muted-foreground"
                }`}
              >
                {lead.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnunciosMockup() {
  const anuncios = [
    { name: "Calle del Río 12", leads: 115, emails: 9, whatsapps: 10, completos: 2, time: "00:43h" },
    { name: "Avenida del Parque 25", leads: 109, emails: 1, whatsapps: 1, completos: 0, time: "00:04h" },
    { name: "Hab Doble - Calle Nueva 10", leads: 146, emails: 0, whatsapps: 0, completos: 0, time: "00:00h" },
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
                <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded">Activo</span>
              </div>
              <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                Programar
              </Button>
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

function DashboardMockup() {
  const chartData = [
    { name: "1 mar", leads: 4, complete: 2 },
    { name: "2 mar", leads: 3, complete: 1 },
    { name: "3 mar", leads: 2, complete: 1 },
    { name: "4 mar", leads: 5, complete: 3 },
    { name: "5 mar", leads: 6, complete: 4 },
    { name: "6 mar", leads: 4, complete: 2 },
    { name: "7 mar", leads: 7, complete: 5 },
  ]

  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-foreground">Dashboard de Leads</h2>
        <p className="text-sm text-muted-foreground">Métricas y estadísticas de tus clientes potenciales</p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-xl bg-card">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium text-foreground">Total Leads</span>
            <Users className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold text-foreground">1828</div>
          <p className="text-xs text-muted-foreground mt-1">Todos los clientes registrados</p>
        </div>
        <div className="p-4 border rounded-xl bg-card">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium text-foreground">Leads Nuevos Hoy</span>
            <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">Hoy</span>
          </div>
          <div className="text-2xl font-bold text-foreground text-primary">1</div>
          <p className="text-xs text-muted-foreground mt-1">Registrados en las últimas 24h</p>
        </div>
        <div className="p-4 border rounded-xl bg-card">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium text-foreground">Leads con información completa</span>
            <span className="text-[10px] bg-success/10 text-success px-1.5 py-0.5 rounded">Hoy</span>
          </div>
          <div className="text-2xl font-bold text-success">0</div>
          <p className="text-xs text-muted-foreground mt-1">Con estado "Datos Completos" hoy</p>
        </div>
      </div>

      {/* Estadísticas de la Inmobiliaria */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Estadísticas de la Inmobiliaria</h3>
            <p className="text-xs text-muted-foreground">Totales y rendimiento agregados por periodo</p>
          </div>
          <div className="flex items-center gap-1 text-[10px] bg-secondary/50 p-1 rounded-lg">
            <span className="px-2 py-1 rounded bg-background shadow-sm text-foreground font-medium">Mes</span>
            <span className="px-2 py-1 text-muted-foreground cursor-pointer hover:text-foreground">Mes ant.</span>
            <span className="px-2 py-1 text-muted-foreground cursor-pointer hover:text-foreground">Ciclo</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Leads Totales", value: "21", color: "text-foreground" },
            { label: "Datos Completos", value: "8", color: "text-success" },
            { label: "Tasa Conversión", value: "38.1%", color: "text-primary" },
            { label: "Descartados", value: "3", color: "text-destructive" },
          ].map((stat, i) => (
            <div key={i} className="p-4 bg-secondary/20 rounded-xl text-center">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Preparados para la fase de visita */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Preparados para la fase de visita</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Datos Completados", value: "8", color: "text-success" },
            { label: "Candidatos Aprobados", value: "0", color: "text-success" },
            { label: "Visita Propuesta", value: "0", color: "text-primary" },
            { label: "Visita Completada", value: "0", color: "text-primary" },
          ].map((stat, i) => (
            <div key={i} className="p-4 bg-secondary/10 border border-border/50 rounded-xl text-center">
              <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
              <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="p-4 border rounded-xl bg-card">
        <h3 className="text-sm font-semibold text-foreground mb-4">Leads por periodo</h3>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="leads"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              <Line type="monotone" dataKey="complete" stroke="hsl(var(--success))" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section: Calidad & Consumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calidad */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Análisis de Calidad</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-secondary/10 border border-border/50 rounded-xl text-center">
              <div className="text-xs text-muted-foreground mb-1">Datos Incompletos</div>
              <div className="text-xl font-bold text-chart-4">10</div>
            </div>
            <div className="p-4 bg-secondary/10 border border-border/50 rounded-xl text-center">
              <div className="text-xs text-muted-foreground mb-1">Necesidad de Aval</div>
              <div className="text-xl font-bold text-primary">0</div>
            </div>
          </div>
        </div>

        {/* Consumo */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Consumo y Rendimiento</h3>
          <div className="p-4 bg-card border rounded-xl space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-muted-foreground">Leads</span>
                <span className="font-medium text-foreground">1 / 500</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-foreground w-[0.2%]"></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-muted-foreground">0.2% del plan utilizado</span>
                <span className="text-[10px] text-foreground font-medium">Tiempo ahorrado: 0h 3m</span>
              </div>
            </div>
            <div className="space-y-2 pt-2 border-t border-border">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">WhatsApps enviados</span>
                <span className="font-medium text-foreground">1</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Coste aprox. WhatsApps</span>
                <span className="font-medium text-success">€0.03</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Emails enviados</span>
                <span className="font-medium text-foreground">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LeadDetailMockup() {
  return (
    <div className="p-4 lg:p-6 bg-card h-full">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <Users className="w-6 h-6 text-muted-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Laura Martínez</h2>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Apartamento Centro - Hab 2 · Fecha Entrada: 05/01/2025, 10:21 · Origen: mail
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
            <Mail className="w-3.5 h-3.5" /> Correo
          </Button>
          <Button size="sm" className="h-8 gap-2 text-xs bg-foreground text-background hover:bg-foreground/90">
            <CheckCircle2 className="w-3.5 h-3.5" /> Candidato Aprobado
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-2 text-xs">
            <CheckSquare className="w-3.5 h-3.5" /> Pedir Aval
          </Button>
          <Button variant="outline" size="sm" className="h-8 text-xs text-destructive hover:text-destructive">
            Denegar Candidato
          </Button>
        </div>

        <div className="flex gap-2 border-b border-border">
          <div className="px-4 py-2 text-sm font-medium border-b-2 border-foreground text-foreground">
            Laura Martínez
          </div>
          <div className="px-4 py-2 text-sm font-medium text-muted-foreground">Carlos Ruiz</div>
          <div className="px-4 py-2 text-sm font-medium text-muted-foreground">Avalista - A. G.</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 spans) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Info Personal */}
          <div className="border border-border rounded-xl p-5">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-foreground">Información personal</h3>
              <Button variant="ghost" size="sm" className="h-7 text-xs">
                Editar
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <div>
                <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider">NOMBRE</p>
                <p className="text-sm font-medium text-foreground">Laura Martínez</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider">ROL</p>
                <p className="text-sm font-medium text-foreground">Titular</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider">CORREO</p>
                <p className="text-sm font-medium text-foreground">laura.martinez@email.com</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider">TELÉFONO</p>
                <p className="text-sm font-medium text-foreground">+34 600 123 456</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider">INGRESOS</p>
                <p className="text-sm font-medium text-foreground">€ 1.450,00</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider">PAÍS</p>
                <p className="text-sm font-medium text-foreground">España</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider">
                  CÓDIGO POSTAL
                </p>
                <p className="text-sm font-medium text-foreground">28001</p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider">DNI</p>
                <p className="text-sm font-medium text-foreground">12345678Z</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Estado */}
            <div className="border border-border rounded-xl p-5">
              <p className="font-semibold text-foreground mb-1">Estado</p>
              <p className="text-lg font-bold text-foreground">Aprobado</p>
              <p className="text-xs text-muted-foreground mt-1">Click para cambiar estado</p>
            </div>
            {/* Visita */}
            <div className="border border-border rounded-xl p-5">
              <p className="font-semibold text-foreground mb-3">Información de la visita</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarDays className="w-4 h-4" />
                  <span className="text-sm">No programada</span>
                </div>
                <Button size="sm" className="h-7 text-xs bg-foreground text-background">
                  Programar
                </Button>
              </div>
            </div>
          </div>

          {/* Comunicaciones */}
          <div className="border border-border rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-foreground">Comunicaciones</h3>
              <span className="text-xs text-muted-foreground">2</span>
            </div>
            <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
              <div className="p-3 bg-secondary/30 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <MessageCircle className="w-3 h-3 text-foreground" />
                  <span className="text-xs font-semibold text-foreground">WhatsApp</span>
                  <span className="text-[10px] text-muted-foreground">10/12/2025</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Hola Laura, gracias por tu interés. Para continuar necesitamos DNI, ingresos y teléfono.
                </p>
              </div>
              <div className="p-3 bg-secondary/30 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-3 h-3 text-foreground" />
                  <span className="text-xs font-semibold text-foreground">Email</span>
                  <span className="text-[10px] text-muted-foreground">10/12/2025</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Confirmación de visita reservada. Si necesitas cambiarla, responde a este correo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (1 span) */}
        <div className="space-y-6">
          {/* Documentos */}
          <div className="border border-border rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-foreground">Documentos</h3>
              <Button variant="ghost" size="sm" className="h-7 text-xs">
                Gestionar
              </Button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">DNI/NIE</span>
                </div>
                <span className="text-[10px] font-medium text-foreground">Completado</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">Just. ingresos</span>
                </div>
                <span className="text-[10px] font-medium text-chart-4 bg-chart-4/10 px-2 py-0.5 rounded">
                  Pendiente
                </span>
              </div>
            </div>
          </div>

          {/* Anotaciones */}
          <div className="border border-border rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-foreground">Anotaciones</h3>
              <span className="text-xs text-muted-foreground">1</span>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-secondary/30 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-primary/20" />
                  <span className="text-xs font-semibold text-foreground">Admin</span>
                  <span className="text-[10px] text-muted-foreground">04/01/2025 10:46</span>
                </div>
                <p className="text-xs text-muted-foreground">Familia completa, revisar avalista.</p>
              </div>
              <Button variant="outline" className="w-full text-xs h-8">
                Añadir Nota
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AgendaMockup() {
  const citas = [
    {
      time: "18:14",
      name: "Sofía L.",
      phone: "+34 611 222 333",
      place: "Calle Mayor 45",
      status: "past",
    },
    {
      time: "19:10",
      name: "Javier R.",
      phone: "+34 622 333 444",
      place: "Calle Mayor 45",
      income: "Ingresos: 2800€",
      status: "future",
    },
    {
      time: "19:30",
      name: "Lucía G.",
      phone: "+34 633 444 555",
      place: "Calle Mayor 45",
      status: "future",
    },
    {
      time: "19:50",
      name: "Elena M.",
      phone: "+34 644 555 666",
      place: "Calle Mayor 45",
      status: "future",
    },
    {
      time: "20:05",
      name: "Miguel T.",
      phone: "+34 655 666 777",
      place: "Calle Mayor 45",
      income: "Ingresos: 3200€",
      status: "future",
    },
  ]

  return (
    <div className="p-4 lg:p-6 bg-card h-full flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-foreground">Agenda</h2>
          <p className="text-xs text-muted-foreground">Configura disponibilidad y gestiona visitas.</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2 h-8 text-xs">
          <User className="w-3.5 h-3.5" /> Agente
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendario (Columna Izquierda) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Calendario</span>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-foreground font-medium">Feb 2025</span>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Días simulados */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"].map((day, i) => (
              <div key={i} className="text-[10px] text-muted-foreground uppercase">
                {day}
              </div>
            ))}
            {[16, 17, 18, 19, 20, 21, 22].map((day, i) => (
              <div
                key={i}
                className={`relative p-2 rounded-lg border text-sm font-medium flex flex-col items-center justify-center h-16 cursor-pointer transition-colors ${
                  day === 20
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background border-border text-muted-foreground hover:bg-secondary/50"
                }`}
              >
                <span className="text-xs mb-1">{day} feb</span>
                {/* Notification badges */}
                {(day === 19 || day === 20) && (
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center">
                    {day === 19 ? 4 : 5}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs h-7">
              Semana anterior
            </Button>
            <Button variant="secondary" size="sm" className="text-xs h-7">
              Semana actual
            </Button>
            <Button variant="outline" size="sm" className="text-xs h-7">
              Semana siguiente
            </Button>
          </div>
        </div>

        {/* Panel Disponibilidad (Columna Derecha) */}
        <div className="border border-primary/20 bg-primary/5 rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-lg mb-1 text-foreground">viernes 20 de febrero</h3>
          <p className="text-xs text-muted-foreground mb-4">1 franjas configuradas</p>
          <div className="bg-background/60 rounded-lg p-3 mb-4 flex items-center gap-3 border border-border/50">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">19:20 - 20:20</span>
            <span className="text-xs text-muted-foreground border-l border-border pl-2 ml-1">Calle Mayor 45</span>
          </div>
          <Button className="w-full bg-foreground text-background hover:bg-foreground/90 h-9 text-xs">
            <Clock className="w-3.5 h-3.5 mr-2" /> Gestionar Disponibilidad
          </Button>
        </div>
      </div>

      {/* Lista de Citas */}
      <div className="mt-2">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4" /> Citas Programadas
        </h3>
        <div className="space-y-3">
          {citas.map((cita, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border ${
                cita.status === "future"
                  ? "bg-success/5 border-success/20"
                  : "bg-secondary/20 border-border text-muted-foreground"
              }`}
            >
              <div className="flex items-center gap-4 mb-2 sm:mb-0">
                <div
                  className={`px-2 py-1 rounded text-sm font-bold ${
                    cita.status === "future" ? "bg-background/50 text-foreground" : "bg-background/50 text-foreground"
                  }`}
                >
                  {cita.time}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5" />
                    <span className="text-sm font-semibold text-foreground">{cita.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                    <Phone className="w-3 h-3" />
                    <span className="underline decoration-dotted">{cita.phone}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-8 justify-between sm:justify-end w-full sm:w-auto">
                <div className="text-right">
                  <div className="flex items-center gap-1 text-xs text-foreground justify-end">
                    <Building2 className="w-3 h-3 text-muted-foreground" />
                    <span>{cita.place}</span>
                  </div>
                  {cita.income && <div className="text-[10px] text-muted-foreground mt-0.5">{cita.income}</div>}
                </div>

                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full hover:bg-background/80">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <FileText className="w-3.5 h-3.5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full hover:bg-background/80">
                    <Trash2 className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DashboardPreview({ hideHeader = false }: { hideHeader?: boolean }) {
  const [activeTab, setActiveTab] = useState("detalle")
  const activeTabData = tabs.find((t) => t.id === activeTab)

  const renderMockup = () => {
    switch (activeTab) {
      case "leads":
        return <LeadsMockup />
      case "anuncios":
        return <AnunciosMockup />
      case "agenda":
        return <AgendaMockup />
      case "dashboard":
        return <DashboardMockup />
      case "detalle":
        return <LeadDetailMockup />
      default:
        return <LeadsMockup />
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
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
