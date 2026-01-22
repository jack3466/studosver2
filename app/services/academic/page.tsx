import { BookOpen } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function AcademicPage() {
  return (
    <ServicePageLayout
      title="Academic Support Services"
      tagline="When academics feel heavy, we support you."
      description="Academic pressure can affect confidence and performance. STUEHUB provides structured academic assistance so students can stay stress-free."
      featureTitle="Academic Support Includes"
      features={[
        "Assignment formatting",
        "Project documentation",
        "Reports & case studies",
        "PPT & presentation support",
        "Academic content guidance",
      ]}
      importanceTitle="Why This Service Matters"
      importance="Good presentation improves understanding and evaluation. We help you submit quality work with confidence."
      serviceId="academic"
      icon={BookOpen}
      image="/services/academic.png"
    />
  )
}
