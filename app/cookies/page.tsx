import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="gap-2 -ml-4 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                Volver a la página principal
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Política de Cookies de RentAFlow</h1>
          <p className="text-muted-foreground mb-8">
            Última actualización: Marzo 2026
          </p>

          <div className="prose prose-invert max-w-none text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. ¿Qué es esta Política de Cookies?</h2>
            <p>
              La presente Política de Cookies explica qué son las cookies, qué tipos de cookies pueden utilizarse en el sitio web <Link href="/" className="text-primary hover:underline">https://rentaflow.es/</Link>, con qué finalidad se usan y cómo puedes gestionarlas.
            </p>
            <p>Esta política se aplica al sitio web titularidad de:</p>
            <ul className="list-none pl-0 space-y-2">
              <li><strong>ACES ALQUILER SL</strong></li>
              <li><strong>NIF:</strong> B16926602</li>
              <li><strong>Domicilio social:</strong> Avenida de Abrantes, 92 Bajo A, 28025 Madrid, España</li>
              <li><strong>Email general:</strong> <a href="mailto:info@rentaflow.es" className="text-primary hover:underline">info@rentaflow.es</a></li>
              <li><strong>Email de privacidad:</strong> <a href="mailto:privacidad@rentaflow.es" className="text-primary hover:underline">privacidad@rentaflow.es</a></li>
              <li><strong>Teléfono:</strong> +34 682 027 661</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos o dispositivos de almacenamiento y recuperación de datos que se descargan en tu dispositivo cuando accedes a una página web. Sirven, entre otras cosas, para permitir el funcionamiento técnico del sitio, recordar determinadas preferencias o, en algunos casos, obtener información sobre la navegación del usuario.
            </p>
            <p>Las cookies pueden ser propias o de terceros, de sesión o persistentes.</p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. ¿Qué tipos de cookies pueden existir en este sitio web?</h2>
            <p>En función de su finalidad, en un sitio web como RentAFlow podrían llegar a utilizarse las siguientes categorías:</p>
            
            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">a) Cookies técnicas o estrictamente necesarias</h3>
            <p>
              Son aquellas imprescindibles para que el sitio web funcione correctamente, permita la navegación, gestione la seguridad, recuerde opciones técnicas básicas o posibilite servicios expresamente solicitados por el usuario.
            </p>
            <p>
              Estas cookies no requieren consentimiento cuando se utilizan exclusivamente para finalidades técnicas legítimas y necesarias para el funcionamiento del sitio.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">b) Cookies de personalización</h3>
            <p>
              Permiten recordar ciertas preferencias del usuario, como idioma, región o determinados ajustes de visualización, cuando el propio usuario los ha solicitado.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">c) Cookies de análisis o medición</h3>
            <p>
              Se utilizan para recopilar información sobre el uso del sitio web, medir la actividad, elaborar estadísticas y mejorar el rendimiento o la experiencia de navegación.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">d) Cookies publicitarias o de publicidad comportamental</h3>
            <p>
              Permiten gestionar espacios publicitarios o analizar hábitos de navegación para mostrar anuncios personalizados en función del perfil del usuario.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. ¿Qué cookies utiliza actualmente RentAFlow?</h2>
            <p>De acuerdo con la información actualmente facilitada por ACES ALQUILER SL para la configuración jurídica del sitio web:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>no se utiliza analítica web;</li>
              <li>no se emplea CRM con seguimiento de navegación en la web;</li>
              <li>no se han declarado cookies publicitarias ni de perfilado;</li>
              <li>y la web no se ha configurado, por el momento, para realizar medición avanzada del comportamiento del usuario.</li>
            </ul>
            <p>
              Por tanto, RentAFlow declara que, en principio, su sitio web utiliza únicamente cookies técnicas o estrictamente necesarias, en la medida en que resulten imprescindibles para el funcionamiento, seguridad, estabilidad, accesibilidad o prestación básica del sitio.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Base jurídica del uso de cookies</h2>
            <p>
              La base jurídica para el uso de cookies técnicas o estrictamente necesarias es el interés legítimo de ACES ALQUILER SL en posibilitar el funcionamiento correcto, seguro y operativo del sitio web, así como la necesidad técnica de prestar el servicio solicitado por el usuario.
            </p>
            <p>
              En caso de que en el futuro RentAFlow incorpore cookies analíticas, de personalización no necesarias, publicitarias o de terceros no estrictamente necesarias, dichas cookies solo se instalarán cuando proceda tras obtener el consentimiento válido del usuario, de conformidad con la normativa aplicable.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. ¿Quién utiliza la información de las cookies?</h2>
            <p>
              Con carácter general, la información derivada de las cookies técnicas necesarias del sitio es utilizada por ACES ALQUILER SL para posibilitar el funcionamiento del sitio web.
            </p>
            <p>
              En este momento, y conforme a la información facilitada, no se han identificado proveedores de analítica, publicidad, CRM o personalización web que utilicen cookies no necesarias en el sitio.
            </p>
            <p>
              Si en el futuro se incorporaran cookies de terceros, esta política deberá actualizarse para identificar de forma clara a dichos terceros, su finalidad y, en su caso, la existencia de transferencias internacionales de datos.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Información sobre las cookies del sitio</h2>
            <p>
              A la fecha de esta política, y con base en la información actualmente disponible, el sitio web de RentAFlow no declara el uso de cookies analíticas, publicitarias o de personalización no necesarias.
            </p>
            <p>
              En consecuencia, la web funcionará, en principio, únicamente con cookies técnicas o estrictamente necesarias para su funcionamiento, seguridad, estabilidad, accesibilidad o correcta prestación.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Gestión del consentimiento</h2>
            <p>
              Dado que, según la información disponible, el sitio web se limita al uso de cookies técnicas o estrictamente necesarias, no sería necesario recabar consentimiento para su utilización, sin perjuicio del deber de información aplicable.
            </p>
            <p>
              No obstante, si en el futuro se incorporan cookies no necesarias, RentAFlow deberá implantar un sistema de gestión del consentimiento conforme a la normativa vigente, que permita al usuario:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>aceptar o rechazar las cookies no necesarias;</li>
              <li>configurar sus preferencias por categorías;</li>
              <li>y retirar el consentimiento en cualquier momento con la misma facilidad con la que lo otorgó.</li>
            </ul>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}