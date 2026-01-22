import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RefundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="font-medium text-foreground">STUEHUB believes in transparency and fairness.</p>

            <p>Payments made for services are generally non-refundable, as services involve time, effort, and personalized support.</p>

            <h3 className="text-xl font-semibold text-foreground mt-4">Exceptions for Refund</h3>
            <p>Refunds may be considered only in exceptional cases where:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Payment was made but service was not initiated.</li>
              <li>A genuine technical or processing issue occurred from our side.</li>
            </ul>

            <p>Once a service has started or documents have been reviewed/applied, refunds will not be provided.</p>
            <p>Any refund decision will be at the sole discretion of STUEHUB.</p>

            <div className="bg-secondary p-4 rounded-lg mt-8">
              <p className="text-foreground font-medium">For refund-related queries, please contact:</p>
              <a href="mailto:stuehub@gmail.com" className="text-primary hover:underline">stuehub@gmail.com</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}