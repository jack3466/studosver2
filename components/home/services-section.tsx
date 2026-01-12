import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText, ClipboardCheck, Briefcase, BookOpen, Wrench, Monitor } from "lucide-react"
import { StaggeredList } from "@/components/StaggerContainer"
import { SpotlightCard } from "@/components/SpotlightCard"
import { ParallaxImage } from "@/components/ParallaxImage"

const services = [
  {
    title: "Resume & CV Preparation",
    description: "Professional resume building for freshers and experienced students",
    icon: FileText,
    href: "/services/resume",
    image: "/services/resume.png",
  },
  {
    title: "Application Filling Support",
    description: "Assistance with passports, admissions, scholarships, and more",
    icon: ClipboardCheck,
    href: "/services/applications",
    image: "/services/application.png",
  },
  {
    title: "Internship & Career Assistance",
    description: "Career counseling, internship guidance, and job application support",
    icon: Briefcase,
    href: "/services/career",
    image: "/services/career.png",
  },
  {
    title: "Academic Support Services",
    description: "Assignment formatting, project documentation, and presentations",
    icon: BookOpen,
    href: "/services/academic",
    image: "/services/academic.png",
  },
  {
    title: "Skill Support",
    description: "Computer skills, MS Office training, and digital communication",
    icon: Wrench,
    href: "/services/skills",
    image: "/services/skills.png",
  },
  {
    title: "Digital & Practical Support",
    description: "Online forms, email setup, document scanning, and formatting",
    icon: Monitor,
    href: "/services/digital",
    image: "/services/digital.png",
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

        <StaggeredList className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group block h-full">
              <SpotlightCard className="h-full bg-card/50 backdrop-blur-sm border-primary/10">
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Image Header */}
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg bg-muted/20">
                    <ParallaxImage intensity={10} className="w-full h-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 scale-105"
                      />
                    </ParallaxImage>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{service.title}</h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{service.description}</p>

                    <div className="flex items-center text-sm font-medium text-primary mt-auto">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </CardContent>
              </SpotlightCard>
            </Link>
          ))}
        </StaggeredList>
      </div>
    </section>
  )
}
