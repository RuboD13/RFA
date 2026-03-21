import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { PrivacyContent } from "@/components/marketing/privacy-content"

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
