"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Home, Grid, BookOpen, User, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Grid },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* 
        DECONSTRUCTED HEADER CONTAINER 
        Fixed top, no background pointer-events-none so clicks on page work.
        Children have pointer-events-auto.
      */}
      <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 pointer-events-none">

        {/* --- LEFT: LOGO --- */}
        <div className="pointer-events-auto">
          <Link href="/" className="flex items-center gap-1 p-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 transition-colors">
            <img
              src="/logo.png"
              alt="STUEHUB"
              className="h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* --- CENTER: GLASS DOCK (Desktop) --- */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-3 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative group flex items-center justify-center p-2.5 rounded-full transition-all duration-300 ease-out hover:scale-110",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/10 dark:hover:bg-white/10"
                )}
              >
                <Icon size={18} strokeWidth={2.5} />

                {/* Tooltip */}
                <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 dark:bg-white/90 text-white dark:text-black text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-md whitespace-nowrap pointer-events-none translate-y-2 group-hover:translate-y-0 duration-200">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* --- RIGHT: ACTIONS --- */}
        <div className="pointer-events-auto flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Button asChild size="sm" className="hidden md:inline-flex rounded-full shadow-lg bg-primary/90 hover:bg-primary backdrop-blur-md border border-white/10">
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex items-center justify-center animate-in fade-in slide-in-from-top-10">
          <div className="flex flex-col items-center gap-6">
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