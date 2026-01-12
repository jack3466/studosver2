import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FileText, ClipboardCheck, Briefcase, BookOpen, Wrench, Monitor } from "lucide-react"

const services = [
  {
    title: "Resume & CV Preparation",
    description:
      "A resume is not just a document — it is your story. We help students present their skills, education, and potential in a professional and confident way.",
    icon: FileText,
    href: "/services/resume",
    image: "/services/resume.png",
  },
  {
    title: "Application Filling Support",
    description:
      "Applications can be confusing, time-consuming, and stressful. One small error can lead to rejection. We ensure your applications are filled correctly and submitted on time.",
    icon: ClipboardCheck,
    href: "/services/applications",
    image: "/services/application.png",
  },
  {
    title: "Internship & Career Assistance",
    description:
      "Choosing the right internship or career path can change your future. We guide students to make informed and confident career decisions.",
    icon: Briefcase,
    href: "/services/career",
    image: "/services/career.png",
  },
  {
    title: "Academic Support Services",
    description:
      "Academic pressure can affect confidence and performance. We provide structured academic assistance so students can stay stress-free.",
    icon: BookOpen,
    href: "/services/academic",
    image: "/services/academic.png",
  },
  {
    title: "Skill Support",
    description:
      "Skills are essential for survival in today's competitive world. We help students develop practical skills required for academics and careers.",
    icon: Wrench,
    href: "/services/skills",
    image: "/services/skills.png",
  },
  {
    title: "Digital & Practical Support",
    description:
      "From online forms to digital documents, students face daily technical challenges. We solve them quickly and correctly.",
    icon: Monitor,
    href: "/services/digital",
    image: "/services/digital.png",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Our Services</h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Comprehensive support designed to help students succeed in every aspect of their academic and
                professional journey. From resume building to digital assistance, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link key={service.title} href={service.href} className="group">
                  <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/30">
                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Image Header */}
                      <div className="relative w-full h-56 overflow-hidden rounded-t-lg bg-muted/20">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <service.icon className="h-6 w-6" />
                          </div>
                          <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {service.title}
                          </h2>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{service.description}</p>

                        <div className="flex items-center text-sm font-medium text-primary mt-auto">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Stu-Dos */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold mb-4">Why Choose Stu-Dos?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Because students don't fail due to lack of talent — they fail due to lack of guidance and support. We
                treat every student problem as personal and every success as shared.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-lg font-medium">Your struggle matters. Stu-Dos stands with you.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
