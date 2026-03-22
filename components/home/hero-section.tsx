"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrambleText } from "@/components/ScrambleText"
import { MagneticButton } from "@/components/MagneticButton"
import { HeroGeometric } from "@/components/HeroGeometric"
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern"
import { FloatingServiceIcons } from "@/components/FloatingServiceIcons"
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator"
import { HeroBackgroundOrbs } from "@/components/HeroBackgroundOrbs"
import { MeshGradient } from "@/components/MeshGradient"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse position (center relative)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring physics
  const springConfig = { damping: 25, stiffness: 100 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  // Parallax layers (Slow, Medium, Fast)
  const xBack = useTransform(springX, [-1, 1], [-10, 10]) // Background moves opposite
  const yBack = useTransform(springY, [-1, 1], [-5, 5])

  const xMid = useTransform(springX, [-1, 1], [-20, 20]) // Text
  const yMid = useTransform(springY, [-1, 1], [-10, 10])

  const xFast = useTransform(springX, [-1, 1], [-40, 40]) // Floating elements
  const yFast = useTransform(springY, [-1, 1], [-20, 20])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    // Disable parallax on mobile/tablet (touch devices)
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none), (max-width: 1024px)').matches) return

    const { width, height, left, top } = containerRef.current.getBoundingClientRect()

    // Normalized coordinates (-1 to 1)
    const normX = ((e.clientX - left) / width) * 2 - 1
    const normY = ((e.clientY - top) / height) * 2 - 1

    x.set(normX)
    y.set(normY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[90dvh] flex items-center justify-center perspective-1000"
    >
      {/* --- LAYER 1: BACKGROUND (Slow) --- */}
      <motion.div
        style={{ x: xBack, y: yBack }}
        className="absolute inset-0 z-0 scale-110" // scale up to prevent edges showing
      >
        <MeshGradient />
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-glass.png"
            alt="Abstract Glass Background"
            className="w-full h-full object-cover opacity-30 dark:opacity-20 blur-[2px]"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
        </div>
        <AnimatedGridPattern className="opacity-10 absolute inset-0 z-0 mix-blend-overlay" />
        <HeroBackgroundOrbs />
        <HeroGeometric />
      </motion.div>

      <FloatingServiceIcons />


      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">

        {/* --- LAYER 2: TEXT CONTENT (Medium) --- */}
        <motion.div
          style={{ x: xMid, y: yMid, z: 10 }}
          className="mx-auto max-w-4xl text-center relative z-20"
        >
          {/* Glass Card Container (Optional wrapper, or just text) */}
          <div className="relative rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 p-5 md:p-8 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-4 overflow-hidden group">

            {/* Holographic Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none" />

            <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-backwards">
              <p className="text-sm font-semibold text-primary mb-6 tracking-widest uppercase bg-primary/10 py-1 px-3 rounded-full inline-block">
                Made for Student Needs
              </p>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-balance h-auto mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-backwards">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient pb-2">
                <ScrambleText text="Who We Are" duration={3000} className="" />
              </span>
            </h1>
            <p className="mt-2 text-lg text-muted-foreground italic animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-backwards">
              We are not just a service center. We are a support system for students.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-backwards">
              At STUEHUB, we understand the confusion, pressure, and uncertainty students face. We stand beside you — step by step.
            </p>

            {/* --- LAYER 3: BUTTONS (Fast) --- */}
            <motion.div
              style={{ x: xFast, y: yFast }}
              className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-backwards"
            >
              <MagneticButton asChild size="lg" strength={0.4} className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-full">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </MagneticButton>
              <MagneticButton asChild variant="outline" size="lg" strength={0.4} className="text-lg px-8 h-14 backdrop-blur-sm border-white/10 hover:bg-white/10 rounded-full">
                <Link href="/contact">Get Assistance</Link>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

      </div>
      <ScrollDownIndicator />
    </section>
  )
}
