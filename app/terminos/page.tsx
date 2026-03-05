import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import Link from "next/link"
import { X } from "lucide-react"

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end mb-6">
            <Link
              href="/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Volver al inicio"
            >
              <X className="w-5 h-5" />
            </Link>
          </div>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Términos y Condiciones</h1>
            <p className="text-lg text-muted-foreground">
              Por favor, lee atentamente estos términos antes de utilizar los servicios de RentAFlow. Al acceder a nuestra plataforma, aceptas estar legalmente vinculado por ellos.
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-12">
            <div className="p-4 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Identificación del Titular</h2>
              <p className="text-muted-foreground mb-4">
                El sitio web y el servicio RentAFlow son operados por RentAFlow S.L. (en adelante, &quot;RentAFlow&quot;), con domicilio en Calle Gran Vía, 28, 28013 Madrid, España, y NIF B-12345678.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Objeto y Descripción del Servicio</h2>
              <p className="text-muted-foreground mb-4">
                RentAFlow es una plataforma SaaS (Software as a Service) diseñada para facilitar y automatizar la gestión de alquileres inmobiliarios. Nuestros servicios incluyen:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Gestión de leads y candidatos a inquilinos.</li>
                <li>Sistemas de filtrado y cualificación automatizada (scoring).</li>
                <li>Herramientas de comunicación centralizada (email, WhatsApp).</li>
                <li>Generación y almacenamiento de documentación contractual.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                RentAFlow actúa como proveedor de herramientas tecnológicas y no es una agencia inmobiliaria ni parte en los contratos de arrendamiento que puedan celebrarse entre los usuarios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Registro y Cuentas de Usuario</h2>
              <p className="text-muted-foreground mb-4">
                Para utilizar el servicio, debes registrarte y crear una cuenta. Te comprometes a:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Proporcionar información veraz, exacta y actualizada.</li>
                <li>Mantener la confidencialidad de tus credenciales de acceso.</li>
                <li>No utilizar el servicio para fines ilegales o no autorizados.</li>
                <li>Notificar inmediatamente cualquier uso no autorizado de tu cuenta.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Planes, Precios y Facturación</h2>
              <p className="text-muted-foreground mb-4">
                El acceso a determinadas funcionalidades requiere la suscripción a uno de nuestros planes de pago:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Mini:</strong> 49€/mes + IVA</li>
                <li><strong>Starter:</strong> 99€/mes + IVA</li>
                <li><strong>Agency:</strong> 249€/mes + IVA</li>
                <li><strong>Profesional:</strong> 499€/mes + IVA</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                La facturación se realiza mensualmente por adelantado. La suscripción se renueva automáticamente salvo cancelación. No se realizan reembolsos por períodos parciales no disfrutados. Nos reservamos el derecho a modificar los precios notificando con al menos 30 días de antelación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Propiedad Intelectual</h2>
              <p className="text-muted-foreground mb-4">
                El software, diseño, código fuente, marcas y contenido de RentAFlow son propiedad exclusiva de RentAFlow S.L. o sus licenciantes. Se otorga al usuario una licencia limitada, no exclusiva e intransferible para utilizar el servicio durante la vigencia del contrato.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Responsabilidad y Garantías</h2>
              <div className="bg-card p-6 rounded-lg border border-border space-y-4">
                <p className="text-muted-foreground">
                  <strong>Disponibilidad:</strong> RentAFlow se esfuerza por garantizar una disponibilidad del 99.9%, pero no garantiza que el servicio sea ininterrumpido o libre de errores.
                </p>
                <p className="text-muted-foreground">
                  <strong>Decisiones de Alquiler:</strong> RentAFlow proporciona herramientas de análisis y scoring basadas en los datos proporcionados, pero la decisión final de aceptar a un inquilino es responsabilidad exclusiva del usuario. RentAFlow no garantiza la solvencia futura de los inquilinos ni se hace responsable de impagos.
                </p>
                <p className="text-muted-foreground">
                  <strong>Limitación:</strong> En la medida permitida por la ley, la responsabilidad total de RentAFlow por cualquier reclamación no excederá el importe pagado por el usuario en los últimos 12 meses.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Cancelación y Terminación</h2>
              <p className="text-muted-foreground mb-4">
                Puedes cancelar tu suscripción en cualquier momento desde tu panel de control. La cancelación será efectiva al final del periodo de facturación en curso. RentAFlow puede suspender o cancelar tu cuenta si incumples estos términos, especialmente en casos de impago o uso fraudulento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Legislación Aplicable y Jurisdicción</h2>
              <p className="text-muted-foreground mb-4">
                Estos términos se rigen por la legislación española. Para cualquier controversia que pudiera derivarse del acceso o uso del servicio, las partes se someten a los Juzgados y Tribunales de la ciudad de Madrid, renunciando a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                ¿Preguntas sobre nuestros términos? Contáctanos en <a href="mailto:info@rentaflow.es" className="text-primary hover:underline">info@rentaflow.es</a>
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
