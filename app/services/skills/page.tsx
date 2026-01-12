import { Wrench } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function SkillsPage() {
  return (
    <ServicePageLayout
      title="Skill Support"
      tagline="Skills build confidence. Confidence builds success."
      description="Skills are essential for survival in today's competitive world. We help students develop practical skills required for academics and careers."
      featureTitle="Skill Support Areas"
      features={[
        "Basic computer skills",
        "MS Word, Excel & PowerPoint",
        "Email & digital communication",
        "Career readiness guidance",
        "Practical digital usage support",
      ]}
      importanceTitle="Why This Service Matters"
      importance="Education without skills creates fear. Skills create confidence and independence."
      serviceId="skills"
      icon={Wrench}
      image="/services/skills.png"
    />
  )
}
