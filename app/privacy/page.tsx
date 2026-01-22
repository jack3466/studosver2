import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 px-6">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6 text-muted-foreground">
            <p><strong>STUEHUB values the privacy of its users and is committed to protecting personal information shared with us.</strong></p>

            <p>We may collect basic personal details such as name, phone number, email address, educational details, and documents (such as resumes or application information) solely for the purpose of providing student support services.</p>

            <h3 className="text-xl font-semibold text-foreground mt-6">How We Use Your Information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide requested services</li>
              <li>Communicate with students regarding their queries</li>
              <li>Improve our services</li>
            </ul>

            <p>STUEHUB does not sell, rent, or share personal data with third parties for marketing or commercial purposes.</p>

            <p>We take reasonable measures to protect user data. However, users are advised to share information responsibly while using online platforms.</p>

            <p>By using our website and services, you agree to this Privacy Policy.</p>

            <div className="bg-secondary p-4 rounded-lg mt-8">
              <p className="text-foreground font-medium">For any privacy-related concerns, you may contact us at:</p>
              <a href="mailto:stuehub@gmail.com" className="text-primary hover:underline">stuehub@gmail.com</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}