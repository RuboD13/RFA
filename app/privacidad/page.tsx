import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import Link from "next/link"
import { X } from "lucide-react"

export default function PrivacidadPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Política de Privacidad</h1>
            <p className="text-lg text-muted-foreground">
              En RentAFlow nos tomamos muy en serio la protección de tus datos personales. Esta política explica cómo recopilamos, utilizamos y protegemos tu información.
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-12">
            <div className="p-4 bg-muted/50 rounded-lg border border-border text-sm text-muted-foreground">
              <strong>Última actualización:</strong> 06 de marzo de 2026
            </div>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Responsable del Tratamiento</h2>
              <p className="text-muted-foreground mb-4">
                El responsable del tratamiento de los datos personales recabados a través del sitio web y la plataforma es:
              </p>
              <ul className="list-none pl-0 space-y-2 text-muted-foreground bg-card p-6 rounded-lg border border-border">
                <li><strong>Denominación Social:</strong> RentAFlow S.L. (en adelante, &quot;RentAFlow&quot;)</li>
                <li><strong>Domicilio Social:</strong> Calle Gran Vía, 28, 28013 Madrid, España</li>
                <li><strong>NIF:</strong> B-12345678</li>
                <li><strong>Email de contacto:</strong> <a href="mailto:info@rentaflow.es" className="text-primary hover:underline">info@rentaflow.es</a></li>
                <li><strong>Delegado de Protección de Datos (DPO):</strong> <a href="mailto:dpo@rentaflow.es" className="text-primary hover:underline">dpo@rentaflow.es</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Qué datos recopilamos</h2>
              <p className="text-muted-foreground mb-4">
                Dependiendo de cómo interactúes con nuestra plataforma (como visitante, agencia inmobiliaria, propietario o inquilino potencial), podemos recopilar las siguientes categorías de datos:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-2">Datos de Identificación y Contacto</h3>
                  <p className="text-sm text-muted-foreground">Nombre y apellidos, dirección de correo electrónico, número de teléfono, dirección postal, DNI/NIE (cuando sea necesario para contratos).</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-2">Datos Profesionales y Económicos</h3>
                  <p className="text-sm text-muted-foreground">Para inquilinos: Nóminas, contratos de trabajo, declaraciones de renta o justificantes de ingresos necesarios para el scoring de solvencia.</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-2">Datos de Uso y Navegación</h3>
                  <p className="text-sm text-muted-foreground">Dirección IP, tipo de dispositivo, navegador, páginas visitadas, interacciones con la plataforma (logs de actividad).</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-2">Datos de Transacciones</h3>
                  <p className="text-sm text-muted-foreground">Información sobre los planes contratados, historial de pagos y facturación (no almacenamos datos completos de tarjetas de crédito, que son gestionados por nuestra pasarela de pagos segura).</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalidad y Base Legal del Tratamiento</h2>
              <p className="text-muted-foreground mb-4">
                Tratamos tus datos con las siguientes finalidades y bases legales:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 font-semibold text-foreground">Finalidad</th>
                      <th className="py-3 px-4 font-semibold text-foreground">Base Legal (RGPD)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Prestación del servicio (gestión de alquileres, automatización de leads).</td>
                      <td className="py-3 px-4">Ejecución del contrato (Art. 6.1.b)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Facturación y gestión contable.</td>
                      <td className="py-3 px-4">Obligación legal (Art. 6.1.c)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Envío de comunicaciones comerciales y novedades.</td>
                      <td className="py-3 px-4">Consentimiento (Art. 6.1.a) o Interés legítimo (Art. 6.1.f) si ya eres cliente.</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Soporte técnico y atención al cliente.</td>
                      <td className="py-3 px-4">Ejecución del contrato e Interés legítimo.</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Mejora de la plataforma y análisis de uso.</td>
                      <td className="py-3 px-4">Interés legítimo (Art. 6.1.f).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Conservación de los Datos</h2>
              <p className="text-muted-foreground mb-4">
                Conservaremos tus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades para las que fueron recabados, o mientras exista una obligación legal de conservarlos.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Datos de usuarios activos:</strong> Mientras se mantenga la relación contractual.</li>
                <li><strong>Datos de facturación:</strong> 6 años (según Código de Comercio).</li>
                <li><strong>Datos de candidatos/inquilinos:</strong> Se eliminarán o anonimizarán una vez finalizado el proceso de selección, salvo que se consienta su conservación para futuras oportunidades.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Destinatarios de los Datos</h2>
              <p className="text-muted-foreground mb-4">
                Tus datos pueden ser comunicados a:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Proveedores de servicios (Encargados del Tratamiento):</strong> Empresas que nos prestan servicios tecnológicos (hosting, envío de emails, CRM), de pago o de asesoría. Todos ellos ubicados en el EEE o con garantías adecuadas de protección de datos.</li>
                <li><strong>Agencias Inmobiliarias/Propietarios:</strong> Si eres un candidato a inquilino, tus datos se compartirán con la agencia o propietario del inmueble por el que te has interesado para gestionar la visita y el contrato.</li>
                <li><strong>Autoridades competentes:</strong> Jueces, Tribunales o Hacienda, cuando exista una obligación legal.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Derechos del Usuario</h2>
              <p className="text-muted-foreground mb-4">
                Como titular de los datos, tienes derecho a:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Acceso:</strong> Saber qué datos tenemos de ti.</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos.</li>
                  <li><strong>Supresión (&quot;Olvido&quot;):</strong> Solicitar el borrado de tus datos.</li>
                </ul>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Oposición:</strong> Oponerte a ciertos tratamientos.</li>
                  <li><strong>Limitación:</strong> Restringir el tratamiento en ciertos casos.</li>
                  <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado.</li>
                </ul>
              </div>
              <p className="text-muted-foreground mt-4">
                Para ejercer estos derechos, puedes enviar un email a <a href="mailto:info@rentaflow.es" className="text-primary hover:underline">info@rentaflow.es</a> adjuntando copia de tu DNI. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Seguridad</h2>
              <p className="text-muted-foreground mb-4">
                RentAFlow implementa medidas de seguridad técnicas y organizativas adecuadas para proteger tus datos contra el acceso no autorizado, la pérdida o la alteración, incluyendo el cifrado de datos en tránsito (SSL/TLS) y en reposo, controles de acceso y auditorías regulares.
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                ¿Tienes dudas sobre nuestra política de privacidad? Contáctanos en <a href="mailto:info@rentaflow.es" className="text-primary hover:underline">info@rentaflow.es</a>
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
