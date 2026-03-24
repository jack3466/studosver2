"use client"

import { useRef, useState } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export function HolographicCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)

    // Mouse position for spotlight
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // 3D Tilt values
    const xPercent = useMotionValue(0)
    const yPercent = useMotionValue(0)

    const rotateX = useSpring(useTransform(yPercent, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 })
    const rotateY = useSpring(useTransform(xPercent, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 })

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()

        // Spotlight position
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)

        // Tilt calculation (-0.5 to 0.5 range)
        xPercent.set(((clientX - left) / width) - 0.5)
        yPercent.set(((clientY - top) / height) - 0.5)
    }

    function onMouseLeave() {
        // Reset spotlight (optional, or let it stay at last pos)
        // mouseX.set(-1000) 
        // mouseY.set(-1000)

        // Reset tilt
        xPercent.set(0)
        yPercent.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "group relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-[12px] overflow-hidden transition-colors hover:border-white/40",
                className
            )}
        >
            <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    backgroundImage: useMotionTemplate`
               radial-gradient(
                 650px circle at ${mouseX}px ${mouseY}px,
                 rgba(255,255,255,0.1),
                 transparent 80%
               )
             ` as any
                }}
            />
            <div className="relative z-20 h-full">
                {children}
            </div>
        </motion.div>
    )
}

// Helper to use transform in standard motion import 
// (Normally imported from framer-motion)
import { useTransform } from "framer-motion"
