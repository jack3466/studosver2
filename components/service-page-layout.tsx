import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import type { LucideIcon } from "lucide-react"

interface ServicePageLayoutProps {
  title: string
  tagline: string
  description: string
  features: string[]
  featureTitle: string
  importance: string
  importanceTitle: string
  serviceId: string
  icon: LucideIcon
}

export function ServicePageLayout({
  title,
  tagline,
  description,
  features,
  featureTitle,
  importance,
  importanceTitle,
  serviceId,
  icon: Icon,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-6">
                <Icon className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">{title}</h1>
              <p className="mt-4 text-lg text-primary font-medium">{tagline}</p>
              <p className="mt-6 text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-6">{featureTitle}</h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">{importanceTitle}</h2>
                <p className="text-muted-foreground leading-relaxed">{importance}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold">{"Need Assistance? We're Here for You"}</h2>
                <p className="mt-4 text-muted-foreground">
                  Fill in your details and let us support you at the right time, in the right way.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-sm">
                <ContactForm preselectedService={serviceId} />
              </div>
            </div>
          </div>
        </section>

        {/* Closing Line */}
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
