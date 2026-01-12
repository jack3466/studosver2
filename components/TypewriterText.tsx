"use client"

import { useEffect, useState } from "react"

export function TypewriterText({ text, speed = 50, className = "" }: { text: string, speed?: number, className?: string }) {
    const [displayText, setDisplayText] = useState("")

    useEffect(() => {
        let i = 0
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText((prev) => prev + text.charAt(i))
                i++
            } else {
                clearInterval(timer)
            }
        }, speed)

        return () => clearInterval(timer)
    }, [text, speed])

    return (
        <span className={className}>
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    )
}
