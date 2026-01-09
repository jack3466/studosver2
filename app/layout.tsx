import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <body className={`font-sans antialiased`}>
  {/* Add these two lines for the floating colors: */}
  <div className="orb-1" />
  <div className="orb-2" />
  
  {children}
</body>
      </body>
    </html>
  )
}
