import type React from "react"
import type { Metadata } from "next"
import { Outfit, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/CustomCursor"
import { NoiseOverlay } from "@/components/NoiseOverlay"
import { SmoothScroll } from "@/components/SmoothScroll"
import { InteractiveParticleMesh } from "@/components/InteractiveParticleMesh"

// 1. Setup fonts with CSS variables for Tailwind
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "STUEHUB | Made for Student Needs",
  description:
    "STUEHUB is a student support platform providing resume preparation, application filling, career guidance, academic support, and digital assistance. Every student deserves support.",
  keywords: [
    "student support",
    "resume preparation",
    "career guidance",
    "academic help",
    "internship assistance",
    "application support",
  ],
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background elements */}
          {/* Background elements */}
          <SmoothScroll />
          <CustomCursor />
          <InteractiveParticleMesh />
          <NoiseOverlay />
          <div className="orb-1" />
          <div className="orb-2" />

          {/* Content */}
          {children}

          {/* Analytics */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
