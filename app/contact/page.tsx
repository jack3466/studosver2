import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Vijayawada, Andhra Pradesh, India",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9291419199",
    href: "tel:+919291419199",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Stu.dos.official@gmail.com",
    href: "mailto:Stu.dos.official@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@studos.in",
    href: "https://www.instagram.com/studos.in",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Saturday, 10:00 AM – 7:00 PM",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Contact Us</h1>
              <p className="mt-4 text-lg text-primary font-medium">{"We're Here to Help You Move Forward"}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Have a question, need guidance, or looking for support? Reach out to Stu-Dos — we're here to assist you
                with clarity and care. Whether it's an application, document, resume, or academic support, our team is
                ready to help you take the next step with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-lg bg-secondary h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Vijayawada, Andhra Pradesh</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Need assistance? Please fill out the form below and our team will get back to you as soon as possible.
                </p>
                <div className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-sm">
                  <ContactForm />
                </div>
              </div>
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
