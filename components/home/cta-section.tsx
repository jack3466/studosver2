import { ContactForm } from "@/components/contact-form"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration */}
          <div className="hidden lg:block relative group">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl bg-muted/10 backdrop-blur-sm border border-white/10 shadow-2xl">
              <img
                src="/services/contact.png"
                alt="Contact Support"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Text */}
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background/90 to-transparent">
                <h3 className="text-2xl font-bold text-foreground">Here to Help</h3>
                <p className="text-muted-foreground">We are always ready to listen.</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="mx-auto max-w-2xl lg:mx-0 w-full">
            <div className="text-center lg:text-left mb-10">
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
      </div>
    </section>
  )
}
