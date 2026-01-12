"use client"

import { useRef, useState } from "react"

interface ParallaxImageProps {
    children: React.ReactNode
    className?: string
    intensity?: number
}

export function ParallaxImage({
    children,
    className = "",
    intensity = 20
}: ParallaxImageProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [rotation, setRotation] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return

        const { left, top, width, height } = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - left - width / 2) / (width / 2)
        const y = (e.clientY - top - height / 2) / (height / 2)

        // Calculate rotation based on cursor position
        // Rotate Y axis based on X position (left/right tilt)
        // Rotate X axis based on Y position (up/down tilt) - inverted
        setRotation({
            x: -y * intensity,
            y: x * intensity
        })
    }

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 })
    }

    return (
        <div
            ref={containerRef}
            className={`perspective-1000 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: "1000px"
            }}
        >
            <div
                className="transition-transform duration-200 ease-out will-change-transform"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
                    transformStyle: "preserve-3d"
                }}
            >
                {children}
            </div>
        </div>
    )
}
