import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Política de Cookies</h1>
          <p className="text-muted-foreground mb-8">
            Última actualización: Marzo 2026
          </p>

          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p>
              En este sitio web, titularidad de <strong>ACES ALQUILER SL</strong>, utilizamos cookies y tecnologías similares con la finalidad de permitir el funcionamiento técnico de la página y, en su caso, mejorar la experiencia de navegación.
            </p>
            <p>
              Esta Política de Cookies explica qué son las cookies, qué tipos existen, cuáles utilizamos en <Link href="/" className="text-primary hover:underline">https://rentaflow.es/</Link> y cómo puedes gestionarlas.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos que se descargan en tu dispositivo cuando visitas una página web. Sirven, entre otras cosas, para permitir el funcionamiento técnico del sitio, recordar determinadas preferencias o, en algunos casos, obtener información sobre la navegación del usuario.
            </p>
            <p>
              La utilización de determinadas cookies puede implicar tratamiento de datos personales, por lo que su uso debe cumplir tanto la normativa de protección de datos como la LSSI. La AEPD recuerda que, cuando las cookies no sean necesarias, debe recabarse un consentimiento libre e informado, y que aceptar y rechazar deben presentarse al mismo nivel.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Tipos de cookies</h2>
            <p>Las cookies pueden clasificarse de distintas formas:</p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">a) Según quién las gestione</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies propias:</strong> son enviadas al equipo del usuario desde un dominio gestionado por el propio titular del sitio web.
              </li>
              <li>
                <strong>Cookies de terceros:</strong> son enviadas desde un dominio gestionado por una entidad distinta del titular del sitio web.
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">b) Según su finalidad</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies técnicas o necesarias:</strong> permiten la navegación y el uso de las funciones básicas del sitio web. No requieren consentimiento cuando son estrictamente necesarias.
              </li>
              <li>
                <strong>Cookies de preferencias o personalización:</strong> permiten recordar determinadas opciones del usuario. En algunos casos pueden considerarse técnicas; en otros, pueden requerir consentimiento según cómo se implementen. La AEPD distingue especialmente entre preferencias decididas por el propio usuario y preferencias decididas por el editor.
              </li>
              <li>
                <strong>Cookies analíticas o de medición:</strong> permiten analizar el comportamiento de navegación para mejorar el servicio.
              </li>
              <li>
                <strong>Cookies de publicidad comportamental:</strong> permiten mostrar publicidad personalizada en función del comportamiento del usuario.
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">c) Según el tiempo que permanecen activas</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies de sesión:</strong> se eliminan al cerrar el navegador.
              </li>
              <li>
                <strong>Cookies persistentes:</strong> permanecen almacenadas durante un período determinado.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. ¿Qué cookies utiliza RentAFlow?</h2>
            <p>
              A fecha de esta política, <strong>RentAFlow declara que no utiliza cookies analíticas, publicitarias ni de perfilado</strong> en su sitio web, y que no explota herramientas de analítica web de terceros como parte de su configuración ordinaria actual, conforme al criterio operativo facilitado internamente para la web corporativa.
            </p>
            <p>En consecuencia, el sitio debería limitarse a:</p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Cookies técnicas o estrictamente necesarias</h3>
            <p>Son aquellas imprescindibles para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>permitir la navegación por la web;</li>
              <li>mantener la seguridad del sitio;</li>
              <li>gestionar la sesión, si existiera un área privada;</li>
              <li>equilibrar carga, prevenir abusos o proteger formularios;</li>
              <li>recordar preferencias técnicas estrictamente necesarias para el funcionamiento básico del sitio.</li>
            </ul>
            <p className="mt-4">
              Estas cookies no requieren consentimiento cuando sean necesarias para prestar el servicio solicitado o permitir la navegación técnica, de conformidad con la LSSI y con los criterios de la AEPD.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
              <p className="text-yellow-200 text-sm">
                <strong>Importante:</strong> antes de publicar esta política, debe realizarse una comprobación técnica real del sitio para verificar qué cookies se instalan efectivamente al acceder a la web y si provienen solo del propio dominio o también del servidor, CMS, proveedor de hosting, formularios embebidos, fuentes, reproductores, mapas u otros servicios integrados.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Base legal y consentimiento</h2>
            <p>
              Cuando una web utiliza únicamente cookies técnicas o estrictamente necesarias, no es preciso recabar consentimiento para su uso, aunque sí conviene informar de manera transparente sobre ellas.
            </p>
            <p>
              Si en el futuro RentAFlow incorpora cookies analíticas, de personalización no exentas, publicidad o cualquier otra cookie no necesaria, se mostrará un mecanismo de gestión del consentimiento conforme a la normativa aplicable.
            </p>
            <p>Ese mecanismo deberá permitir al usuario:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>aceptar</strong> las cookies no necesarias;</li>
              <li><strong>rechazarlas</strong> con la misma facilidad;</li>
              <li><strong>configurarlas</strong> de forma granular cuando proceda.</li>
            </ul>
            <p className="mt-4">
              La AEPD ha reiterado que las opciones de aceptar y rechazar deben aparecer al mismo nivel, con igual visibilidad, y sin diseños engañosos.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. ¿Cómo puedes gestionar o desactivar las cookies?</h2>
            <p>
              Puedes permitir, bloquear o eliminar cookies desde la configuración de tu navegador. Ten en cuenta que, si desactivas cookies técnicas necesarias, algunas partes del sitio web podrían no funcionar correctamente.
            </p>
            <p>
              Cada navegador ofrece mecanismos distintos de configuración. Debes consultar la documentación oficial del navegador que utilices.
            </p>
            <p>
              Asimismo, si en el futuro el sitio incorporase un panel de configuración de cookies, podrás revisar tus preferencias desde dicho panel en cualquier momento.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Cookies de terceros</h2>
            <p>
              A fecha de esta política, RentAFlow no prevé utilizar cookies de terceros con fines analíticos, publicitarios o de seguimiento en su configuración ordinaria declarada para la web.
            </p>
            <p>
              No obstante, si en alguna página concreta se integrasen contenidos o servicios de terceros —por ejemplo, vídeos embebidos, mapas, tipografías remotas, widgets, formularios externos o botones de mensajería— podrían instalarse cookies o realizarse conexiones técnicas atribuibles a dichos terceros.
            </p>
            <p>En ese caso:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>deberá revisarse previamente su impacto;</li>
              <li>deberá actualizarse esta Política de Cookies;</li>
              <li>y, si la cookie no es necesaria, deberá activarse solo tras obtener consentimiento válido.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Cambios en esta Política de Cookies</h2>
            <p>
              RentAFlow podrá modificar esta Política de Cookies cuando sea necesario para adaptarla a cambios técnicos, normativos o funcionales del sitio web.
            </p>
            <p>La versión vigente será la publicada en esta página.</p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Tabla de cookies</h2>
            <p className="text-sm text-yellow-500 mb-4 font-bold">[POR COMPLETAR ANTES DE PUBLICAR TRAS REVISIÓN TÉCNICA REAL DEL SITIO]</p>
            
            <div className="overflow-x-auto border border-white/10 rounded-lg">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="p-3 font-semibold text-white">Nombre</th>
                    <th className="p-3 font-semibold text-white">Proveedor</th>
                    <th className="p-3 font-semibold text-white">Finalidad</th>
                    <th className="p-3 font-semibold text-white">Tipo</th>
                    <th className="p-3 font-semibold text-white">Duración</th>
                    <th className="p-3 font-semibold text-white">Necesaria / Consentimiento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-3">[POR DEFINIR]</td>
                    <td className="p-3">[propia / tercero]</td>
                    <td className="p-3">[POR DEFINIR]</td>
                    <td className="p-3">[técnica / analítica / etc.]</td>
                    <td className="p-3">[POR DEFINIR]</td>
                    <td className="p-3">[POR DEFINIR]</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Contacto</h2>
            <p>Si tienes dudas sobre esta Política de Cookies, puedes contactar con:</p>
            <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="font-bold text-white">ACES ALQUILER SL</p>
              <p>Avenida de Abrantes, 92 Bajo A, 28025 Madrid</p>
              <p>
                <strong>Email:</strong> <a href="mailto:privacidad@rentaflow.es" className="text-primary hover:underline">privacidad@rentaflow.es</a>
              </p>
              <p>
                <strong>Web:</strong> <Link href="/" className="text-primary hover:underline">https://rentaflow.es/</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
