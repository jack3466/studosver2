import { ClipboardCheck } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function ApplicationsPage() {
  return (
    <ServicePageLayout
      title="Application Filling Support"
      tagline="Don't lose opportunities due to small mistakes."
      description="Applications can be confusing, time-consuming, and stressful. One small error can lead to rejection. Stu-Dos ensures your applications are filled correctly and submitted on time."
      featureTitle="We Support Applications For"
      features={[
        "Passport (new & renewal)",
        "College & university admissions",
        "Scholarships & education loans",
        "Government & competitive exams",
        "Internship & job applications",
        "Online forms & registrations",
      ]}
      importanceTitle="Why This Service Matters"
      importance="Students often feel anxious while filling important forms. We take responsibility so you can stay confident and focused."
      serviceId="applications"
      icon={ClipboardCheck}
      image="/services/application.png"
    />
  )
}
