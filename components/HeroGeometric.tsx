"use client"

import { cn } from "@/lib/utils"

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]"
}: {
    className?: string
    delay?: number
    width?: number | string
    height?: number | string
    rotate?: number
    gradient?: string
}) {
    return (
        <div
            className={cn(
                "absolute",
                className
            )}
            style={{
                width: typeof width === 'number' ? `min(${width}px, 80vw)` : width,
                height: typeof height === 'number' ? `min(${height}px, 30vw)` : height,
            }}
        >
            <div
                className={cn(
                    "absolute inset-0 rounded-full",
                    "bg-gradient-to-r to-transparent",
                    gradient,
                    "backdrop-blur-[6px] border border-white/[0.05]",
                    "shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]",
                    "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"
                )}
                style={{
                    transform: `rotate(${rotate}deg)`,
                }}
            />
        </div>
    )
}

export function HeroGeometric({ badge = "Design" }: { badge?: string }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <ElegantShape
                delay={0.3}
                width={800}
                height={200}
                rotate={12}
                gradient="from-primary/[0.15]"
                className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            />

            <ElegantShape
                delay={0.5}
                width={700}
                height={150}
                rotate={-15}
                gradient="from-accent/[0.15]"
                className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            />

            <ElegantShape
                delay={0.4}
                width={400}
                height={100}
                rotate={-8}
                gradient="from-primary/[0.1]"
                className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            />

            <ElegantShape
                delay={0.6}
                width={300}
                height={80}
                rotate={20}
                gradient="from-accent/[0.1]"
                className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    )
}
