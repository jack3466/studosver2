"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* 
        CLASSIC TOP-DOCKED SOLID HEADER
        Clean, full-width, edge-to-edge layout with no glassmorphism or floating gaps.
      */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background border-b border-border h-16 flex items-center justify-between px-4 lg:px-12 transition-colors duration-300 shadow-sm">
        
        {/* --- LEFT: LOGO --- */}
        <Link href="/" className="flex items-center shrink-0">
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img
              src="/logo.png"
              alt="STUEHUB"
              className="h-8 md:h-10 w-auto object-contain"
              width="80"
              height="56"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
        </Link>

        {/* --- CENTER: TEXT LINKS (Desktop) --- */}
        <nav className="hidden md:flex items-center gap-8 mx-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold tracking-wide transition-colors duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* --- RIGHT: ACTIONS --- */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <Button asChild size="sm" className="hidden md:inline-flex rounded-md text-sm shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden flex items-center justify-center animate-in fade-in duration-200">
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-8">
              <ThemeToggle />
              <Button asChild className="rounded-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Close area if needed, though button toggles it */}
        </div>
      )}
    </>
  )
}