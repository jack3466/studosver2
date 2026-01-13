"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, BookOpen, User, Mail, Grid, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

const dockItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Grid },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "About", href: "/about", icon: User },
    { name: "Contact", href: "/contact", icon: Mail },
]

export function FloatingDock() {
    const pathname = usePathname()

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            {/* 
        Container: Pill shape, Heavy Blur (Focus Blur), Glass background.
        We use group to detect hover state for the whole dock if needed, 
        but individal items handle their own scale.
      */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-2xl shadow-2xl ring-1 ring-white/10 transition-all duration-300 hover:scale-[1.02] hover:bg-black/10 dark:hover:bg-white/10">

                {dockItems.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative group flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ease-out hover:scale-125 focus:scale-125 hover:-translate-y-2"
                        >
                            {/* Active Indicator */}
                            {isActive && (
                                <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary" />
                            )}

                            {/* Icon Container */}
                            <div
                                className={cn(
                                    "p-2 rounded-xl transition-all duration-300",
                                    isActive
                                        ? "bg-primary/20 text-primary"
                                        : "text-muted-foreground hover:text-foreground hover:bg-white/10 dark:hover:bg-white/10"
                                )}
                            >
                                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            </div>

                            {/* Tooltip (Visible on Hover) */}
                            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-black/80 dark:bg-white/90 text-white dark:text-black text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-md pointer-events-none whitespace-nowrap">
                                {item.name}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
