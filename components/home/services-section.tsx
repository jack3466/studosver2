import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText, ClipboardCheck, Briefcase, BookOpen, Wrench, Monitor } from "lucide-react"

const services = [
  {
    title: "Resume & CV Preparation",
    description: "Professional resume building for freshers and experienced students",
    icon: FileText,
    href: "/services/resume",
  },
  {
    title: "Application Filling Support",
    description: "Assistance with passports, admissions, scholarships, and more",
    icon: ClipboardCheck,
    href: "/services/applications",
  },
  {
    title: "Internship & Career Assistance",
    description: "Career counseling, internship guidance, and job application support",
    icon: Briefcase,
    href: "/services/career",
  },
  {
    title: "Academic Support Services",
    description: "Assignment formatting, project documentation, and presentations",
    icon: BookOpen,
    href: "/services/academic",
  },
  {
    title: "Skill Support",
    description: "Computer skills, MS Office training, and digital communication",
    icon: Wrench,
    href: "/services/skills",
  },
  {
    title: "Digital & Practical Support",
    description: "Online forms, email setup, document scanning, and formatting",
    icon: Monitor,
    href: "/services/digital",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support designed to help students succeed in every aspect of their academic and professional
            journey.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
