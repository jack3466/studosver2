import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">Made for Student Needs</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">Who We Are</h1>
          <p className="mt-2 text-lg text-muted-foreground italic">
            We are not just a service center. We are a support system for students.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            At Stu-Dos, we understand the confusion, pressure, and uncertainty students face while managing academics,
            applications, skills, and career decisions. From filling a single form to shaping your future path, we stand
            beside you — step by step.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Whether you are a student who needs guidance, clarity, or execution support, Stu-Dos is built only for you.
          </p>
          <p className="mt-6 font-medium text-foreground">
            Every student deserves support. Stu-Dos makes sure you never walk alone.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get Assistance</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
