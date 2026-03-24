import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { PrivacyContent } from "@/components/marketing/privacy-content"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacidadPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Política de Privacidad</h1>
          <p className="text-muted-foreground mb-8">
            Última actualización: Marzo 2026
          </p>

          <div className="prose prose-invert max-w-none text-muted-foreground">
            <PrivacyContent />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
