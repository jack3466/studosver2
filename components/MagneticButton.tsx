"use client"

import { useRef, useState } from "react"
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MagneticButtonProps extends React.ComponentProps<typeof Button> {
    strength?: number
}

export function MagneticButton({
    children,
    className,
    strength = 0.5,
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null)
    const rectRef = useRef<DOMRect | null>(null)

    // Mouse position values
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth spring physics for the magnetic effect
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
    const springX = useSpring(x, springConfig)
    const springY = useSpring(y, springConfig)

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (ref.current) {
            rectRef.current = ref.current.getBoundingClientRect()
        }
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!rectRef.current) return

        const { clientX, clientY } = e
        const { left, top, width, height } = rectRef.current

        const centerX = left + width / 2
        const centerY = top + height / 2

        const distanceX = (clientX - centerX) * strength
        const distanceY = (clientY - centerY) * strength

        x.set(distanceX)
        y.set(distanceY)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
        rectRef.current = null
    }

    return (
        <motion.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={cn("inline-block", className)}
        >
            <Button
                className={cn(
                    "relative overflow-hidden transition-colors duration-300",
                    "bg-primary text-primary-foreground shadow-lg",
                    className
                )}
                {...props}
            >
                {children}
            </Button>
        </motion.div>
    )
}
