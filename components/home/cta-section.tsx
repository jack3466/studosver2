import { ContactForm } from "@/components/contact-form"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need Assistance?</h2>
            <p className="mt-4 text-muted-foreground">
              We are here for you. Fill in your details and let us support you at the right time, in the right way.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
