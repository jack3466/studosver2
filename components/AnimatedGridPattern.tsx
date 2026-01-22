"use client"

import { useId } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGridPatternProps {
    width?: number
    height?: number
    x?: number
    y?: number
    strokeDasharray?: any
    numSquares?: number
    className?: string
    maxOpacity?: number
    duration?: number
    repeatDelay?: number
}

export function AnimatedGridPattern({
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = 0,
    numSquares = 50,
    className,
    maxOpacity = 0.5,
    duration = 4,
    repeatDelay = 0.5,
    ...props
}: AnimatedGridPatternProps) {
    const id = useId()

    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
                className
            )}
            {...props}
        >
            <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
            >
                <defs>
                    <pattern
                        id={id}
                        width={width}
                        height={height}
                        patternUnits="userSpaceOnUse"
                        x={x}
                        y={y}
                    >
                        <circle
                            cx={1}
                            cy={1}
                            r={1.5}
                            fill="currentColor"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
                <svg x={x} y={y} className="overflow-visible">
                    <circle
                        cx={1}
                        cy={1}
                        r={2.5}
                        fill="currentColor"
                        className="text-primary/30"
                    />
                    <circle
                        cx={width * 5 + 1}
                        cy={height * 3 + 1}
                        r={2.5}
                        fill="currentColor"
                        className="text-accent/30"
                    />
                </svg>
            </svg>
        </div>
    )
}
