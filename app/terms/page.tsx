import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>By accessing or using the Stu-Dos website and services, you agree to the following terms and conditions.</p>
            
            <ul className="list-disc pl-5 space-y-4">
                <li><strong>Services:</strong> Stu-Dos provides student support services including resume assistance, application support, interview preparation, career guidance, and digital services. We do not guarantee job placement, internship offers, or specific outcomes.</li>
                <li><strong>User Responsibility:</strong> All services are provided based on the information shared by the student. Stu-Dos is not responsible for incorrect details provided by users.</li>
                <li><strong>Conduct:</strong> Users agree not to misuse the website or services for unlawful or inappropriate purposes.</li>
                <li><strong>Modifications:</strong> Stu-Dos reserves the right to modify, suspend, or discontinue any service or content without prior notice.</li>
            </ul>

            <p className="mt-8">Use of this website signifies acceptance of these terms.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}