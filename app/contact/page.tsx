import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "STUEHUB, 76-1-450/15/4A, Housing Board Colony Rd, Beside Triangle Park, Revenue colony, Bhavanipuram, Vijayawada, Andhra Pradesh 520012",
    href: "https://www.google.com/maps/place/STUEHUB/@16.5358897,80.5919844,846m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a35ef8f5ea182c9:0xbab25ec2b842f24d!8m2!3d16.5358897!4d80.5945593!16s%2Fg%2F11yxjq4c6d?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D",
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
    value: "stuehub@gmail.com",
    href: "mailto:stuehub@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@stuehub",
    href: "https://www.instagram.com/stuehub?utm_source=qr&igsh=bnpwdDBiaXl3ZTBs",
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
                Have a question, need guidance, or looking for support? Reach out to STUEHUB — we're here to assist you
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

                {/* Google Map Embed */}
                <div className="mt-8 rounded-lg overflow-hidden h-64 border border-border shadow-sm">
                  <iframe
                    src="https://maps.google.com/maps?q=16.5358897,80.5945593&hl=en&z=14&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
            <p className="text-lg font-medium">Your struggle matters. STUEHUB stands with you.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
