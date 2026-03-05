import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import Link from "next/link"
import { X } from "lucide-react"

export default function CookiesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Política de Cookies</h1>
            <p className="text-lg text-muted-foreground">
              Utilizamos cookies para mejorar tu experiencia en RentAFlow. Aquí te explicamos qué son, cuáles usamos y cómo puedes gestionarlas.
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-12">
            <div className="p-4 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground">
              <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. ¿Qué son las Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Las cookies son pequeños archivos de texto que los sitios web almacenan en tu ordenador o dispositivo móvil cuando los visitas. Permiten que el sitio web recuerde tus acciones y preferencias (como el inicio de sesión, el idioma o el tamaño de letra) durante un período de tiempo, para que no tengas que volver a configurarlas cada vez que regresas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Tipos de Cookies que Utilizamos</h2>
              <p className="text-muted-foreground mb-4">
                En RentAFlow utilizamos diferentes tipos de cookies para garantizar el funcionamiento de la plataforma y mejorar nuestros servicios:
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-2">Cookies Técnicas (Necesarias)</h3>
                  <p className="text-sm text-muted-foreground">Son esenciales para que la web funcione. Permiten la navegación, el acceso a áreas seguras y la realización de pagos. Sin ellas, la plataforma no funcionaría correctamente.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-2">Cookies de Personalización</h3>
                  <p className="text-sm text-muted-foreground">Permiten recordar información para que accedas al servicio con determinadas características (idioma, aspecto del dashboard, etc.).</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-2">Cookies de Análisis</h3>
                  <p className="text-sm text-muted-foreground">Nos ayudan a entender cómo interactúan los usuarios con la web (páginas más visitadas, tiempo de estancia) para mejorar el rendimiento y la usabilidad.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-2">Cookies Publicitarias</h3>
                  <p className="text-sm text-muted-foreground">Se utilizan para mostrarte anuncios relevantes según tus intereses y navegación. Pueden ser propias o de terceros.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Relación de Cookies</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 font-semibold text-foreground">Nombre</th>
                      <th className="py-3 px-4 font-semibold text-foreground">Proveedor</th>
                      <th className="py-3 px-4 font-semibold text-foreground">Finalidad</th>
                      <th className="py-3 px-4 font-semibold text-foreground">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4"><code>session_id</code></td>
                      <td className="py-3 px-4">RentAFlow</td>
                      <td className="py-3 px-4">Mantiene la sesión del usuario activa.</td>
                      <td className="py-3 px-4">Sesión</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4"><code>cookie_consent</code></td>
                      <td className="py-3 px-4">RentAFlow</td>
                      <td className="py-3 px-4">Recuerda tus preferencias de cookies.</td>
                      <td className="py-3 px-4">1 año</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4"><code>_ga, _gid</code></td>
                      <td className="py-3 px-4">Google Analytics</td>
                      <td className="py-3 px-4">Analítica web y estadísticas de uso.</td>
                      <td className="py-3 px-4">2 años / 24h</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4"><code>__stripe_mid</code></td>
                      <td className="py-3 px-4">Stripe</td>
                      <td className="py-3 px-4">Prevención de fraude en pagos.</td>
                      <td className="py-3 px-4">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Cómo gestionar las cookies</h2>
              <p className="text-muted-foreground mb-4">
                Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c2b9-2592-15cbe9629273" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                ¿Dudas sobre las cookies? Contáctanos en <a href="mailto:info@rentaflow.es" className="text-primary hover:underline">info@rentaflow.es</a>
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
