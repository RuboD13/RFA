import { Navbar } from "@/components/marketing/navbar"
import { HeroSection } from "@/components/marketing/hero-section"
import { OperationalContext } from "@/components/marketing/operational-context"
import { BenefitsGrid } from "@/components/marketing/benefits-grid"
import { IntegrationsSection } from "@/components/marketing/integrations-section"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { DashboardPreview } from "@/components/marketing/dashboard-preview"
import { PricingCards } from "@/components/marketing/pricing-cards"
import { Testimonials } from "@/components/marketing/testimonials"
import { Roadmap } from "@/components/marketing/roadmap"
import { FAQSection } from "@/components/marketing/faq-section"
import { CTASection } from "@/components/marketing/cta-section"
import { Footer } from "@/components/marketing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <OperationalContext />
      <BenefitsGrid />
      <IntegrationsSection />
      <HowItWorks />
      <DashboardPreview />
      <PricingCards />
      <Testimonials />
      <Roadmap />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
