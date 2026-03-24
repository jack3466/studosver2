"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { MagneticButton } from "@/components/MagneticButton"
import { HeroGeometric } from "@/components/HeroGeometric"
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern"
import { FloatingServiceIcons } from "@/components/FloatingServiceIcons"
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator"
import { HeroBackgroundOrbs } from "@/components/HeroBackgroundOrbs"
import { MeshGradient } from "@/components/MeshGradient"

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[90dvh] flex items-center justify-center">
      {/* --- LAYER 1: BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <MeshGradient />
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/hero-glass.webp" type="image/webp" />
            <img
              src="/hero-glass.png"
              alt="Abstract Glass Background"
              className="w-full h-full object-cover opacity-30 dark:opacity-20 blur-[2px]"
              width="1920"
              height="1080"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
        </div>
        <AnimatedGridPattern className="opacity-10 absolute inset-0 z-0 mix-blend-overlay" />
        <HeroBackgroundOrbs />
        <HeroGeometric />
      </div>

      <FloatingServiceIcons />


      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full animate-in fade-in duration-1000 ease-out">
        {/* --- LAYER 2: TEXT CONTENT --- */}
        <div className="mx-auto max-w-4xl text-center relative z-20">
          {/* Glass Card Container */}
          <div className="relative rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 p-5 md:p-8 md:py-12 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden group">

            {/* Holographic Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none" />

            {/* Content Display */}
            <div className="relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 fill-mode-backwards">
              <p className="text-sm font-semibold text-primary mb-6 tracking-widest uppercase bg-primary/10 py-1.5 px-4 rounded-full inline-block backdrop-blur-sm border border-primary/20">
                Made for Student Needs
              </p>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-[6.5rem] text-balance h-auto mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-backwards">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient pb-2 inline-block">
                Who We Are
              </span>
            </h1>

            <p className="mt-2 text-xl md:text-2xl font-medium text-foreground/80 tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-backwards">
              We are not just a service center. <br className="hidden sm:block" />
              We are a support system for students.
            </p>
            
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-backwards">
              At STUEHUB, we understand the confusion, pressure, and uncertainty students face. We stand beside you — step by step.
            </p>

            {/* --- LAYER 3: BUTTONS --- */}
            <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 relative z-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-backwards">
              <MagneticButton asChild size="lg" strength={0.4} className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-full transition-all">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </MagneticButton>
              <MagneticButton asChild variant="outline" size="lg" strength={0.4} className="text-lg px-8 h-14 bg-white/5 backdrop-blur-md border-white/20 hover:bg-white/10 rounded-full transition-all">
                <Link href="/contact">Get Assistance</Link>
              </MagneticButton>
            </div>
          </div>
        </div>

      </div>
      <ScrollDownIndicator />
    </section>
  )
}

