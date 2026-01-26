import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background/40 backdrop-blur-xl border-t border-white/10 mt-auto relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="STUEHUB" className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Empowering students with clarity, support, and confidence.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/stuehub?utm_source=qr&igsh=bnpwdDBiaXl3ZTBs" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:stuehub@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">All Services</Link></li>
              <li><Link href="/courses" className="text-sm text-muted-foreground hover:text-primary">Courses</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Get Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal (NEW!) */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
              <li><Link href="/refund" className="text-sm text-muted-foreground hover:text-primary">Refund Policy</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-primary">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} STUEHUB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
