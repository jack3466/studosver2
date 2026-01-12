import { Target, Lightbulb } from "lucide-react"

export function VisionMissionSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Vision */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To create a student-friendly ecosystem where every learner gets the right guidance, support, and
              confidence to move forward in life without fear or confusion.
            </p>
          </div>

          {/* Mission */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To simplify academic, professional, and documentation processes for students by providing reliable,
              affordable, and trustworthy assistance that truly understands student needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
