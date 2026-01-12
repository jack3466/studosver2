import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { VisionMissionSection } from "@/components/home/vision-mission-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhySection } from "@/components/home/why-section"
import { CTASection } from "@/components/home/cta-section"
import { ScrollAnimation } from "@/components/ScrollAnimation"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-24">
        <ScrollAnimation animation="fade-in">
          <HeroSection />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <VisionMissionSection />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up">
          <ServicesSection />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up">
          <WhySection />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in" delay={300}>
          <CTASection />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  )
}
