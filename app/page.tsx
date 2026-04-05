import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/home/hero-section"
import { ScrollAnimation } from "@/components/ScrollAnimation"

// --- LAZY LOADED COMPONENTS (Below Fold) ---
const AccreditationSection = dynamic(() => import("@/components/home/accreditation-section").then(mod => mod.AccreditationSection), { ssr: true })
const VisionMissionSection = dynamic(() => import("@/components/home/vision-mission-section").then(mod => mod.VisionMissionSection), { ssr: true })
const ServicesSection = dynamic(() => import("@/components/home/services-section").then(mod => mod.ServicesSection), { ssr: true })
const WhySection = dynamic(() => import("@/components/home/why-section").then(mod => mod.WhySection), { ssr: true })
const ReviewsSection = dynamic(() => import("@/components/home/reviews-section").then(mod => mod.ReviewsSection), { ssr: true })
const CTASection = dynamic(() => import("@/components/home/cta-section").then(mod => mod.CTASection), { ssr: true })
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer), { ssr: true })

export default function HomePage() {
  return (
    <div className="min-[100dvh]">
      <Header />
      <main className="space-y-24">
        <ScrollAnimation animation="fade-in">
          <HeroSection />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in" delay={100}>
          <AccreditationSection />
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

        <ScrollAnimation animation="fade-up">
          <ReviewsSection />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-in" delay={300}>
          <CTASection />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  )
}
