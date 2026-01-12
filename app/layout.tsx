import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ParticlesBackground from "@/components/ParticlesBackground"
import { CustomCursor } from "@/components/CustomCursor"
import { NoiseOverlay } from "@/components/NoiseOverlay"
import { SmoothScroll } from "@/components/SmoothScroll"

// 1. Setup fonts with CSS variables for Tailwind
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Stu-Dos | Made for Student Needs",
  description:
    "Stu-Dos is a student support platform providing resume preparation, application filling, career guidance, academic support, and digital assistance. Every student deserves support.",
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
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
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
          <ParticlesBackground />
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
