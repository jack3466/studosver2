import { Monitor } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function DigitalPage() {
  return (
    <ServicePageLayout
      title="Digital & Practical Support"
      tagline="Everyday student needs, handled smoothly."
      description="From online forms to digital documents, students face daily technical challenges. STUEHUB solves them quickly and correctly."
      featureTitle="Services Include"
      features={[
        "Online form assistance",
        "Email setup & usage",
        "Document scanning & printing",
        "Xerox & formatting",
        "Digital document support",
      ]}
      importanceTitle="Why This Service Matters"
      importance="Not every student is digitally confident. We ensure no student feels left behind."
      serviceId="digital"
      icon={Monitor}
      image="/services/digital.png"
    />
  )
}
