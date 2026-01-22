import { Briefcase } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function CareerPage() {
  return (
    <ServicePageLayout
      title="Internship & Career Assistance"
      tagline="Your career deserves the right direction."
      description="Choosing the right internship or career path can change your future. At STUEHUB, we guide students to make informed and confident career decisions."
      featureTitle="What We Offer"
      features={[
        "Internship guidance & application support",
        "Career path counselling",
        "Resume alignment for career goals",
        "Skill & growth recommendations",
        "Freshers career support",
      ]}
      importanceTitle="Why This Service Matters"
      importance="Career confusion is common, but staying confused is not necessary. We help students move forward with clarity and purpose."
      serviceId="career"
      icon={Briefcase}
      image="/services/career.png"
    />
  )
}
