import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>Stu-Dos is a student support service provider. We offer guidance, assistance, and support based on experience and best practices.</p>
            
            <div className="border-l-4 border-primary pl-4 py-2 bg-secondary/50">
                <p className="font-medium text-foreground">No Guarantee of Results</p>
                <p>We do not guarantee employment, internships, admissions, or specific results. Outcomes depend on multiple factors including student effort, eligibility, and external organizations.</p>
            </div>

            <p>Information shared on this website is for guidance purposes only and should not be considered as professional, legal, or employment advice.</p>
            
            <p>Stu-Dos is not affiliated with any government body, university, or corporate organization unless explicitly stated.</p>
            
            <p>By using our services, you acknowledge and agree to this disclaimer.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}