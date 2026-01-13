"use client"

import React from "react"
import { cn } from "@/lib/utils"

export function BackgroundBeams({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none -z-50 flex items-center justify-center bg-background",
                className
            )}
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            {/* Beam 1 */}
            <div className="absolute top-[-50%] left-[-20%] w-[100vw] h-[200vh] bg-gradient-to-b from-transparent via-primary/5 to-transparent rotate-[35deg] animate-beam opacity-40 blur-3xl transform-gpu" />

            {/* Beam 2 */}
            <div className="absolute top-[-50%] right-[-20%] w-[100vw] h-[200vh] bg-gradient-to-b from-transparent via-accent/5 to-transparent rotate-[-35deg] animate-beam animation-delay-2000 opacity-40 blur-3xl transform-gpu" />

            {/* Beam 3 (Shooting across) */}
            <div className="absolute top-[20%] left-[-50%] w-[200vw] h-[200px] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-[15deg] animate-beam-horizontal animation-delay-4000 opacity-30 blur-2xl transform-gpu" />

        </div>
    )
}
