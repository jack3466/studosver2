import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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
    <html lang="en">
      {/* 2. Single body tag with font variables applied */}
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        
        {/* Background elements */}
        <div className="orb-1" />
        <div className="orb-2" />

        {/* Content */}
        {children}
        
        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
