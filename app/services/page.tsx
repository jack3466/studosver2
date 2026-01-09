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
  },
  {
    title: "Application Filling Support",
    description:
      "Applications can be confusing, time-consuming, and stressful. One small error can lead to rejection. We ensure your applications are filled correctly and submitted on time.",
    icon: ClipboardCheck,
    href: "/services/applications",
  },
  {
    title: "Internship & Career Assistance",
    description:
      "Choosing the right internship or career path can change your future. We guide students to make informed and confident career decisions.",
    icon: Briefcase,
    href: "/services/career",
  },
  {
    title: "Academic Support Services",
    description:
      "Academic pressure can affect confidence and performance. We provide structured academic assistance so students can stay stress-free.",
    icon: BookOpen,
    href: "/services/academic",
  },
  {
    title: "Skill Support",
    description:
      "Skills are essential for survival in today's competitive world. We help students develop practical skills required for academics and careers.",
    icon: Wrench,
    href: "/services/skills",
  },
  {
    title: "Digital & Practical Support",
    description:
      "From online forms to digital documents, students face daily technical challenges. We solve them quickly and correctly.",
    icon: Monitor,
    href: "/services/digital",
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
                    <CardContent className="p-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                      <div className="flex items-center text-sm font-medium text-primary">
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
