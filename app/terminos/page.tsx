import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/marketing/back-button"

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <BackButton />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Términos y Aviso Legal</h1>
          <p className="text-muted-foreground mb-8">
            Última actualización: Marzo 2026
          </p>

          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p>
              En cumplimiento de los deberes de información previstos en la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se facilitan a continuación los datos identificativos del titular de este sitio web:
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Datos identificativos del titular</h2>
            <ul className="list-none pl-0 space-y-2">
              <li><strong>Titular:</strong> ACES ALQUILER SL</li>
              <li><strong>NIF/CIF:</strong> B16926602</li>
              <li><strong>Domicilio social:</strong> Avenida de Abrantes, 92 Bajo A, 28025 Madrid</li>
              <li><strong>Correo electrónico general:</strong> <a href="mailto:info@rentaflow.es" className="text-primary hover:underline">info@rentaflow.es</a></li>
              <li><strong>Correo electrónico de privacidad y legal:</strong> <a href="mailto:privacidad@rentaflow.es" className="text-primary hover:underline">privacidad@rentaflow.es</a></li>
              <li><strong>Teléfono:</strong> +34 682 027 661</li>
              <li><strong>Nombre comercial del servicio:</strong> RentAFlow / RentalFlow</li>
              <li><strong>Sitio web:</strong> <Link href="/" className="text-primary hover:underline">https://rentaflow.es/</Link></li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Objeto</h2>
            <p>
              El presente Aviso Legal regula el acceso, navegación y uso del sitio web <Link href="/" className="text-primary hover:underline">https://rentaflow.es/</Link> (en adelante, el "Sitio Web"), así como las responsabilidades derivadas de la utilización de sus contenidos.
            </p>
            <p>
              Se entenderá por contenido, a título enunciativo y no limitativo, los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico, estructura, interfaces, bases de datos y demás elementos incluidos en el Sitio Web.
            </p>
            <p>
              El acceso o uso del Sitio Web atribuye la condición de usuario e implica la aceptación plena de este Aviso Legal desde dicho acceso o uso.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Condiciones de uso del sitio web</h2>
            <p>
              El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, la buena fe, el orden público y el presente Aviso Legal.
            </p>
            <p>El usuario deberá abstenerse de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>utilizar el Sitio Web con fines ilícitos, lesivos o contrarios a los derechos e intereses de terceros;</li>
              <li>provocar daños en los sistemas físicos o lógicos del titular del Sitio Web, de sus proveedores o de terceros;</li>
              <li>introducir o difundir virus informáticos, bots maliciosos, scripts abusivos o cualesquiera otros sistemas susceptibles de provocar daños;</li>
              <li>intentar acceder, utilizar o manipular datos del titular, de otros usuarios o de terceros sin autorización;</li>
              <li>emplear el Sitio Web para envío de spam, scraping abusivo, ingeniería inversa de áreas no públicas o actividades equivalentes.</li>
            </ul>
            <p className="mt-4">
              ACES ALQUILER SL se reserva el derecho a interrumpir el acceso al Sitio Web, de forma temporal o definitiva, a usuarios que incumplan este Aviso Legal, la normativa aplicable o realicen un uso que pueda comprometer la seguridad, estabilidad o funcionamiento del Sitio Web.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Propiedad intelectual e industrial</h2>
            <p>
              Todos los derechos de propiedad intelectual e industrial sobre el Sitio Web y sus contenidos corresponden a ACES ALQUILER SL o, en su caso, a terceros licenciantes.
            </p>
            <p>
              Quedan comprendidos, entre otros, los textos, diseños, código fuente, estructura, bases de datos, interfaces, logotipos, marcas, nombres comerciales, fotografías, imágenes, vídeos, audios, software y cualquier otro elemento protegido por la normativa vigente.
            </p>
            <p>
              En ningún caso el acceso, navegación o uso del Sitio Web implica una cesión, transmisión, licencia o renuncia total o parcial de dichos derechos, salvo que se indique expresamente lo contrario por escrito.
            </p>
            <p>Queda prohibido:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>reproducir, copiar, distribuir, transformar o comunicar públicamente los contenidos del Sitio Web sin autorización previa y por escrito del titular;</li>
              <li>realizar ingeniería inversa, descompilación o extracción no autorizada sobre elementos del Sitio Web cuando ello no esté legalmente permitido;</li>
              <li>utilizar marcas, nombres comerciales, signos distintivos o elementos gráficos de ACES ALQUILER SL sin autorización.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Responsabilidad</h2>
            <p>
              ACES ALQUILER SL realiza esfuerzos razonables para que la información del Sitio Web sea correcta, esté actualizada y funcione adecuadamente. No obstante, no garantiza la ausencia de errores, interrupciones, incidencias técnicas o la disponibilidad permanente del Sitio Web.
            </p>
            <p>En la máxima medida permitida por la ley, ACES ALQUILER SL no será responsable de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>daños o perjuicios derivados de interferencias, interrupciones, virus, averías telefónicas, desconexiones o fallos operativos ajenos a su control;</li>
              <li>errores de seguridad o daños producidos por el uso de dispositivos infectados o navegadores desactualizados;</li>
              <li>decisiones adoptadas por el usuario basadas exclusivamente en la información publicada en el Sitio Web;</li>
              <li>contenidos o servicios de terceros enlazados desde el Sitio Web.</li>
            </ul>
            <p className="mt-4">
              La información contenida en este Sitio Web tiene carácter general e informativo. Salvo que se indique expresamente lo contrario, no constituye asesoramiento jurídico, contractual, técnico ni profesional individualizado.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Enlaces externos</h2>
            <p>
              En caso de que el Sitio Web contenga enlaces a páginas o recursos de terceros, dichos enlaces tendrán una finalidad meramente informativa.
            </p>
            <p>ACES ALQUILER SL no controla ni asume responsabilidad por:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>el contenido, disponibilidad o exactitud de los sitios enlazados;</li>
              <li>las políticas de privacidad, cookies o condiciones de uso de terceros;</li>
              <li>los resultados, servicios o actuaciones derivados del acceso a dichos sitios externos.</li>
            </ul>
            <p className="mt-4">
              La inclusión de enlaces no implica relación, recomendación o aprobación por parte de ACES ALQUILER SL, salvo que se indique expresamente.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Protección de datos personales</h2>
            <p>
              El tratamiento de los datos personales que pueda realizarse a través del Sitio Web se regula en la correspondiente <Link href="/privacidad" className="text-primary hover:underline">Política de Privacidad</Link>, que forma parte integrante del marco legal del sitio.
            </p>
            <p>
              Si el usuario desea conocer cómo se recogen, utilizan, conservan y protegen sus datos personales, puede consultar dicha Política de Privacidad.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Cookies</h2>
            <p>
              El Sitio Web puede utilizar cookies propias estrictamente necesarias para su funcionamiento técnico.
            </p>
            <p>
              La información detallada sobre el uso de cookies, su tipología y la forma de gestionarlas se encuentra disponible en la correspondiente <Link href="/cookies" className="text-primary hover:underline">Política de Cookies</Link>.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Comunicaciones comerciales y medios de contacto</h2>
            <p>
              Las comunicaciones realizadas a través de las direcciones publicadas en el Sitio Web, incluyendo solicitudes de información, contacto comercial o peticiones de demostración, deberán realizarse de forma lícita, veraz y sin prácticas abusivas.
            </p>
            <p>
              Queda prohibido utilizar los datos de contacto publicados en este Sitio Web para el envío de comunicaciones comerciales no solicitadas, spam o cualesquiera otras prácticas contrarias a la normativa vigente.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Modificaciones</h2>
            <p>
              ACES ALQUILER SL podrá modificar en cualquier momento el presente Aviso Legal para adaptarlo a cambios normativos, técnicos, operativos o de organización del Sitio Web.
            </p>
            <p>
              La versión vigente será la que se encuentre publicada en cada momento en esta página.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Legislación aplicable y jurisdicción</h2>
            <p>
              El presente Aviso Legal se rige por la legislación española.
            </p>
            <p>
              Para cualquier controversia que pudiera derivarse del acceso o uso del Sitio Web, las partes se someten, salvo norma imperativa en contrario, a los Juzgados y Tribunales de Madrid.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con este Aviso Legal, el usuario puede contactar con:
            </p>
            <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="font-bold text-white">ACES ALQUILER SL</p>
              <p>Avenida de Abrantes, 92 Bajo A, 28025 Madrid</p>
              <p>
                <strong>Email:</strong> <a href="mailto:privacidad@rentaflow.es" className="text-primary hover:underline">privacidad@rentaflow.es</a>
              </p>
              <p>
                <strong>Teléfono:</strong> +34 682 027 661
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
