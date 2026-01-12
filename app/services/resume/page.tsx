import { FileText } from "lucide-react"
import { ServicePageLayout } from "@/components/service-page-layout"

export default function ResumePage() {
  return (
    <ServicePageLayout
      title="Resume & CV Preparation"
      tagline="Because your first impression matters."
      description="A resume is not just a document — it is your story. At Stu-Dos, we help students present their skills, education, and potential in a professional and confident way."
      featureTitle="What We Provide"
      features={[
        "Student resumes (freshers & experienced)",
        "Internship resumes",
        "Academic CVs",
        "Resume formatting & correction",
        "Profile strengthening guidance",
      ]}
      importanceTitle="Why This Service Matters"
      importance="Many students miss opportunities not because they lack skills, but because their resume doesn't reflect them properly. We ensure your resume speaks for you when you are not in the room."
      serviceId="resume"
      icon={FileText}
      image="/services/resume.png"
    />
  )
}
