import { Globe } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function AbroadStudyPage() {
  return (
    <ServicePageLayout
      title="Abroad Study Guidance"
      tagline="Your gateway to international education."
      description="Comprehensive guidance for international universities, visa applications, and student support. We make studying abroad a reality."
      featureTitle="Services Include"
      features={[
        "University shortlisting",
        "Application & essay guidance",
        "Visa processing assistance",
        "Scholarship applications",
        "Pre-departure briefing",
      ]}
      importanceTitle="Why This Service Matters"
      importance="Studying abroad is a major step. We simplify the complex process to help you achieve your global education dreams."
      serviceId="abroad"
      icon={Globe}
      image="/services/abroad.png"
    />
  )
}
