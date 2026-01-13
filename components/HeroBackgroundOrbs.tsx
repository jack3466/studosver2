"use client"

import { cn } from "@/lib/utils"

export function HeroBackgroundOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 translate-y-[-10%]">
            {/* Orb 1: Primary (Teal) */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob" />

            {/* Orb 2: Accent (Orange) */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000" />

            {/* Orb 3: Purple/Indigo */}
            <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000" />
        </div>
    )
}
