"use client"

import { ChevronDown } from "lucide-react"

export function ScrollDownIndicator() {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer pointer-events-auto">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Scroll</span>
            <ChevronDown className="h-5 w-5 text-primary" />
        </div>
    )
}
