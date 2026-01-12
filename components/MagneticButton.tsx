"use client"

import { useRef, useState } from "react"
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
    const btnRef = useRef<HTMLButtonElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect()

        const x = (clientX - (left + width / 2)) * strength
        const y = (clientY - (top + height / 2)) * strength

        setPosition({ x, y })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <Button
            ref={btnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "transition-transform duration-100 ease-out will-change-transform relative overflow-hidden",
                className
            )}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            {...props}
        >
            {/* Ripple/Glow effect on hover could go here */}
            <span className="relative z-10">{children}</span>
        </Button>
    )
}
