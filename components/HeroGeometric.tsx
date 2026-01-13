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
    width?: number
    height?: number
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
                width,
                height,
            }}
        >
            <div
                className={cn(
                    "absolute inset-0 rounded-full",
                    "bg-gradient-to-r to-transparent",
                    gradient,
                    "backdrop-blur-[2px] border-2 border-white/[0.15]",
                    "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                    "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
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
                width={600}
                height={140}
                rotate={12}
                gradient="from-indigo-500/[0.15]"
                className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            />

            <ElegantShape
                delay={0.5}
                width={500}
                height={120}
                rotate={-15}
                gradient="from-rose-500/[0.15]"
                className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            />

            <ElegantShape
                delay={0.4}
                width={300}
                height={80}
                rotate={-8}
                gradient="from-violet-500/[0.15]"
                className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            />

            <ElegantShape
                delay={0.6}
                width={200}
                height={60}
                rotate={20}
                gradient="from-amber-500/[0.15]"
                className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    )
}
