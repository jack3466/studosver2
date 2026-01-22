import { Heart, Clock, ShieldCheck, Sparkles } from "lucide-react"
import { StaggeredList } from "@/components/StaggerContainer"
import { SpotlightCard } from "@/components/SpotlightCard"

const reasons = [
  {
    title: "Reduce Student Stress",
    description: "We handle the complex processes so you can focus on what matters most — your growth.",
    icon: Heart,
  },
  {
    title: "Save Time and Effort",
    description: "No more hours spent figuring out procedures. We do the heavy lifting for you.",
    icon: Clock,
  },
  {
    title: "Avoid Costly Mistakes",
    description: "Professional guidance ensures your applications and documents are error-free.",
    icon: ShieldCheck,
  },
  {
    title: "Provide Clarity and Confidence",
    description: "Clear guidance and step-by-step support to help you move forward with certainty.",
    icon: Sparkles,
  },
]

export function WhySection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why STUEHUB?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Because students don't fail due to lack of talent — they fail due to lack of guidance and support.
          </p>
        </div>

        <StaggeredList className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <SpotlightCard key={reason.title} className="text-center p-6 bg-card border-border hover:shadow-xl transition-shadow backdrop-blur-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </SpotlightCard>
          ))}
        </StaggeredList>

        <p className="mt-12 text-center text-muted-foreground italic">
          We treat every student problem as personal and every success as shared.
        </p>
      </div>
    </section>
  )
}
