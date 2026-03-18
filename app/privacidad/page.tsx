import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import Link from "next/link"

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Política de Privacidad</h1>
          <p className="text-muted-foreground mb-8">
            Última actualización: 18/03/2026
          </p>

          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p>
              La presente Política de Privacidad regula el tratamiento de datos personales realizado por ACES ALQUILER SL en relación con el sitio web de RentAFlow, las solicitudes de información o demo, las relaciones comerciales y contractuales con clientes y la operación del servicio.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Responsable del tratamiento</h2>
            <ul className="list-none pl-0 space-y-2">
              <li><strong>Responsable:</strong> ACES ALQUILER SL</li>
              <li><strong>NIF:</strong> B16926602</li>
              <li><strong>Domicilio social:</strong> Avenida de Abrantes, 92 Bajo A, 28025 Madrid, España</li>
              <li><strong>Nombre comercial:</strong> RentAFlow</li>
              <li><strong>Web:</strong> <Link href="/" className="text-primary hover:underline">https://rentaflow.es/</Link></li>
              <li><strong>Email general:</strong> <a href="mailto:info@rentaflow.es" className="text-primary hover:underline">info@rentaflow.es</a></li>
              <li><strong>Email de privacidad:</strong> <a href="mailto:privacidad@rentaflow.es" className="text-primary hover:underline">privacidad@rentaflow.es</a></li>
              <li><strong>Teléfono:</strong> +34 682 027 661</li>
              <li><strong>Delegado de Protección de Datos:</strong> no consta designado</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Ámbito de aplicación</h2>
            <p>
              Esta política se aplica a los tratamientos de datos personales realizados a través del sitio web, formularios de contacto o demo, comunicaciones comerciales B2B, procesos de alta y gestión contractual de clientes, soporte, seguridad y registros técnicos del servicio.
            </p>
            <p>
              Cuando RentAFlow trate datos en entornos operativos vinculados a una agencia cliente o a terceros relacionados con sus procesos, la calificación jurídica exacta de ACES ALQUILER SL deberá analizarse en cada flujo concreto. A efectos de este documento, la empresa manifiesta que no se posiciona con carácter general como encargada del tratamiento frente a la agencia cliente. Esta configuración deberá revisarse expresamente en contratación, integraciones y flujo real de datos antes de publicación definitiva.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Categorías de datos tratados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Datos identificativos y de contacto:</strong> nombre, apellidos, email, teléfono, empresa, cargo y datos facilitados en formularios o comunicaciones.</li>
              <li><strong>Datos comerciales y contractuales:</strong> información necesaria para preparar propuestas, gestionar altas, facturación, soporte y relación con clientes.</li>
              <li><strong>Datos técnicos y de navegación:</strong> dirección IP, registros técnicos, identificadores de sesión, eventos de acceso y datos necesarios para la seguridad y funcionamiento del servicio.</li>
              <li><strong>Datos de usuarios de cliente:</strong> cuentas, permisos, roles, histórico de accesos y uso del servicio, cuando proceda.</li>
            </ul>
            <p className="mt-4">No se permite la carga de categorías especiales de datos personales a través del servicio.</p>
            <p>RentAFlow no está dirigido a menores de 18 años.</p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Finalidades y bases jurídicas</h2>
            <div className="overflow-x-auto border border-white/10 rounded-lg my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="p-3 font-semibold text-white">Finalidad</th>
                    <th className="p-3 font-semibold text-white">Descripción</th>
                    <th className="p-3 font-semibold text-white">Base jurídica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-3 font-medium text-white">Contacto y solicitud de demo</td>
                    <td className="p-3">Atender formularios, responder consultas y gestionar reuniones o demos comerciales.</td>
                    <td className="p-3">Consentimiento del interesado y, cuando proceda, aplicación de medidas precontractuales a petición del interesado.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Alta de cliente y prestación del servicio</td>
                    <td className="p-3">Formalizar la relación comercial, crear cuentas, gestionar soporte, facturación, incidencias y servicio contratado.</td>
                    <td className="p-3">Ejecución del contrato y aplicación de medidas precontractuales.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Comunicaciones comerciales B2B</td>
                    <td className="p-3">Envío de newsletter, novedades y comunicaciones comerciales a contactos de agencias.</td>
                    <td className="p-3">Consentimiento cuando sea exigible y, en su caso, interés legítimo en el marco de una relación profesional previa conforme a la normativa aplicable.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Seguridad, logs y control técnico</td>
                    <td className="p-3">Prevenir accesos no autorizados, detectar incidencias y proteger la confidencialidad, integridad y disponibilidad del servicio.</td>
                    <td className="p-3">Interés legítimo del responsable en garantizar la seguridad del servicio y el correcto funcionamiento de los sistemas.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Cumplimiento normativo</td>
                    <td className="p-3">Atender obligaciones fiscales, contables, legales y requerimientos de autoridades competentes.</td>
                    <td className="p-3">Cumplimiento de obligaciones legales.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              En caso de que determinados tratamientos tengan una configuración funcional diferente a la aquí descrita, prevalecerá la base jurídica específica que corresponda al flujo real y a la documentación contractual vigente.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Procedencia de los datos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>De la propia persona interesada, a través de formularios, email, teléfono o reuniones.</li>
              <li>De representantes o empleados de agencias interesadas o clientes.</li>
              <li>De usuarios autorizados dentro del entorno del servicio, cuando exista relación contractual.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Conservación de los datos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contactos comerciales no convertidos:</strong> 1 año desde la última interacción.</li>
              <li><strong>Clientes y documentación de facturación:</strong> 5 años, sin perjuicio de plazos legales superiores que resulten aplicables.</li>
              <li><strong>Logs de acceso y seguridad:</strong> 1 año.</li>
              <li><strong>Datos alojados en plataforma tras la baja del cliente:</strong> hasta 1 año, salvo supresión anticipada por requerimiento legítimo o necesidad legal de conservación.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Destinatarios y proveedores</h2>
            <p>
              Con carácter general, no se comercializan ni ceden datos a terceros fuera de los supuestos necesarios para la prestación del servicio, el cumplimiento legal o la seguridad de los sistemas.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Hosting e infraestructura:</strong> Contabo GmbH.</li>
              <li><strong>Correo operativo y soporte:</strong> gestión interna mediante info@rentaflow.es.</li>
              <li><strong>Mensajería y atención por WhatsApp:</strong> +34 682 027 661, cuando la comunicación se canalice por dicha vía.</li>
              <li>No se declara uso de CRM, firma electrónica ni herramientas de analítica web en la configuración facilitada.</li>
              <li>La empresa declara no realizar transferencias internacionales de datos fuera del Espacio Económico Europeo.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Medidas de seguridad</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cifrado en tránsito.</li>
              <li>Cifrado en reposo.</li>
              <li>Control de acceso por roles y permisos.</li>
              <li>Registro de accesos y logs de seguridad.</li>
              <li>MFA / 2FA.</li>
              <li>Copias de seguridad.</li>
            </ul>
            <p className="mt-4">
              La empresa no declara, en esta versión, mecanismos configurables de borrado o anonimizado automático por parte del cliente.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Derechos de las personas interesadas</h2>
            <p>
              Las personas interesadas pueden ejercitar sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento, portabilidad y retirada del consentimiento cuando proceda, dirigiendo su solicitud a <a href="mailto:privacidad@rentaflow.es" className="text-primary hover:underline">privacidad@rentaflow.es</a>. También pueden presentar reclamación ante la Agencia Española de Protección de Datos si consideran que el tratamiento no se ajusta a la normativa vigente.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Menores de edad</h2>
            <p>
              RentAFlow no está dirigido a menores de 18 años. Si ACES ALQUILER SL detecta que se han recabado datos personales de un menor sin base legal suficiente, adoptará medidas razonables para su supresión.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Cambios en esta política</h2>
            <p>
              ACES ALQUILER SL podrá modificar esta Política de Privacidad para adaptarla a cambios normativos, técnicos u operativos. La versión vigente será la que publicada en <Link href="/" className="text-primary hover:underline">https://rentaflow.es/</Link>. Cuando los cambios sean relevantes, se comunicarán por medios razonables a los afectados cuando ello resulte exigible.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
