import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Heart, CheckCircle, Users, Shield, ArrowRight } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Listen Before We Guide",
    description: "We understand your situation before providing solutions.",
  },
  {
    icon: CheckCircle,
    title: "Explain Before We Act",
    description: "Clear communication at every step of the process.",
  },
  {
    icon: Users,
    title: "Support Without Judgment",
    description: "Every student concern is valid and deserves attention.",
  },
  {
    icon: Shield,
    title: "Handle With Care",
    description: "Your documents and data are treated with responsibility.",
  },
]

const commitments = [
  "Provide honest and transparent support",
  "Handle student documents with care and accuracy",
  "Offer guidance that is practical, not confusing",
  "Stand by students until the work is completed",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">About Us</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                STUEHUB was created with one simple belief: Every student deserves support, clarity, and confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We are a student-focused assistance platform built to help learners handle the real challenges of
                  academic life — documentation, applications, skills, and career decisions — without stress or
                  confusion.
                </p>
                <p className="font-medium text-foreground">
                  At STUEHUB, we don't see students as customers. We see them as dreamers, learners, and future
                  professionals who just need the right guidance at the right time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why STUEHUB Exists */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Why STUEHUB Exists</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In today's world, students are expected to manage everything on their own — applications, resumes,
                skills, internships, exams, and career planning. But reality is different.
              </p>
              <p className="text-muted-foreground mb-4">Many students:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Feel confused about procedures",
                  "Fear making mistakes in important applications",
                  "Lack guidance and practical support",
                  "Don't know whom to trust",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-medium text-foreground">
                STUEHUB was born to fill this gap. We exist to simplify processes, reduce pressure, and stand beside
                students when they need help the most.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">What Makes Us Different</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                STUEHUB is not just about services — it's about understanding.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center p-6 rounded-lg bg-secondary">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We believe:</p>
              <div className="space-y-3 text-left max-w-md mx-auto">
                {[
                  "No question is too small",
                  "No student concern should be ignored",
                  "No opportunity should be missed due to lack of guidance",
                ].map((belief, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{belief}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground">
                From a single form fill to long-term career assistance, we treat every task with responsibility and
                care.
              </p>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Our Commitment to Students</h2>
              <p className="text-muted-foreground mb-6">At STUEHUB, we promise to:</p>
              <ul className="space-y-3 mb-6">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{commitment}</span>
                  </li>
                ))}
              </ul>
              <p className="font-medium text-foreground">
                Your trust matters to us — and we work every day to earn it.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To build a trusted student support ecosystem where guidance, skills, and opportunities are accessible
                  to every learner, regardless of background.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Target className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower students by providing reliable academic, professional, and documentation assistance that
                  helps them move forward with confidence and clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Note - UPDATED WITH IMAGE */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">A Message to Students</h2>
              <div className="bg-secondary rounded-lg p-8">
                <p className="text-lg text-foreground font-medium mb-4">You are not alone.</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you are confused, stressed, or unsure about the next step — STUEHUB is here for you. Your journey
                  matters. Your dreams matter. And we are proud to be part of your story.
                </p>
                <div className="border-t border-border pt-6 mt-6">
                  <p className="text-muted-foreground italic leading-relaxed mb-6">
                    "STUEHUB was not born out of comfort. It was born out of struggle — struggles I have personally
                    faced and struggles I have witnessed in countless students. It stands for clarity, reliability, and
                    practical assistance. It is built to support students through applications, documentation, skills,
                    and career-related needs — step by step, without judgment or confusion."
                  </p>

                  {/* --- NEW SECTION: Founder Image & Name --- */}
                  <div className="flex items-center gap-4">
                    {/* Make sure 'founder.png' is in your public folder! */}
                    <img
                      src="/founder.jpg"
                      alt="Siva Sai Krishna Sankurathri"
                      className="h-16 w-16 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <p className="font-semibold text-lg text-foreground">Siva Sai Krishna Sankurathri</p>
                      <p className="text-sm text-primary font-medium">Founder & CEO, STUEHUB</p>
                    </div>
                  </div>
                  {/* ---------------------------------------- */}

                </div>
                <div className="border-t border-border pt-6 mt-6">
                  <p className="text-muted-foreground italic leading-relaxed mb-6">
                    "I know what it feels like to be lost at sea without a map. That’s why I built this ship!
                    STUEHUB is the proof that your struggle isn't the end—it's the start of your adventure.
                    Documentation, careers, skills? Leave the boring stuff to me.
                    You just focus on becoming the King of your own future!"
                  </p>

                  {/* --- NEW SECTION: Founder Image & Name --- */}
                  <div className="flex items-center gap-4">
                    {/* Make sure 'founder.png' is in your public folder! */}

                    <div>
                      <p className="font-semibold text-lg text-foreground">Shaik Omar Farooq</p>
                      <p className="text-sm text-primary font-medium"> - CTO, STUEHUB</p>
                    </div>
                  </div>
                  {/* ---------------------------------------- */}

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-lg font-medium mb-6">
              STUEHUB — because every student deserves someone who understands.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}