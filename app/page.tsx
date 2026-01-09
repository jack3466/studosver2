import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { VisionMissionSection } from "@/components/home/vision-mission-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhySection } from "@/components/home/why-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VisionMissionSection />
        <ServicesSection />
        <WhySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
