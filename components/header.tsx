"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

// 1. I added "Courses" here. Now it appears automatically on Mobile and Desktop!
const navigation = [
  { name: "Services", href: "/services" },
  { name: "Courses", href: "/courses" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-2">
          {/* I replaced the text "Stu-Dos" with your logo image here */}
          <img
            src="/logo-transparent.png"
            alt="Stu-Dos Logo"
            className="h-12 md:h-16 w-auto object-contain dark:invert dark:hue-rotate-180"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild>
            <Link href="/contact">Get Assistance</Link>
          </Button>
          <ThemeToggle />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button type="button" className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION MENU (When you click the hamburger icon) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="/contact">Get Assistance</Link>
            </Button>
            <div className="mt-4 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}