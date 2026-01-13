import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrambleText } from "@/components/ScrambleText"
import { MagneticButton } from "@/components/MagneticButton"
import { HeroGeometric } from "@/components/HeroGeometric"
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern"
import { FloatingServiceIcons } from "@/components/FloatingServiceIcons"
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator"
import { ParallaxImage } from "@/components/ParallaxImage"
import { HeroBackgroundOrbs } from "@/components/HeroBackgroundOrbs"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-glass.png"
          alt="Abstract Glass Background"
          className="w-full h-full object-cover opacity-30 dark:opacity-20 blur-[2px]"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      </div>

      <AnimatedGridPattern className="opacity-30 absolute inset-0 z-0 mix-blend-overlay" />
      <HeroBackgroundOrbs />
      <HeroGeometric />
      <FloatingServiceIcons />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="mx-auto max-w-4xl text-center">
          {/* Glass Card Container */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-2xl dark:bg-black/20 dark:border-white/10 ring-1 ring-white/10 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-4 overflow-hidden group">

            {/* Holographic Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none" />

            <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-backwards">
              <p className="text-sm font-semibold text-primary mb-6 tracking-widest uppercase bg-primary/10 py-1 px-3 rounded-full inline-block">
                Made for Student Needs
              </p>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-balance h-24 sm:h-auto mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-backwards">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient pb-2">
                <ScrambleText text="Who We Are" duration={3000} className="" />
              </span>
            </h1>
            <p className="mt-2 text-lg text-muted-foreground italic animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-backwards">
              We are not just a service center. We are a support system for students.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-backwards">
              At Stu-Dos, we understand the confusion, pressure, and uncertainty students face while managing academics,
              applications, skills, and career decisions. From filling a single form to shaping your future path, we stand
              beside you — step by step.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-backwards">
              Whether you are a student who needs guidance, clarity, or execution support, Stu-Dos is built only for you.
            </p>
            <p className="mt-6 font-medium text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800 fill-mode-backwards">
              Every student deserves support. Stu-Dos makes sure you never walk alone.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-backwards">
              <MagneticButton asChild size="lg" strength={0.3} className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </MagneticButton>
              <MagneticButton asChild variant="outline" size="lg" strength={0.3} className="text-lg px-8 h-14 backdrop-blur-sm border-white/10 hover:bg-white/10">
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
