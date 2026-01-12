"use client"

import { useEffect, useState, useRef } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

export function ScrambleText({
    text,
    className = "",
    duration = 2000,
    delay = 0
}: {
    text: string
    className?: string
    duration?: number
    delay?: number
}) {
    const [displayText, setDisplayText] = useState(text)
    const [isScrambling, setIsScrambling] = useState(false)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        let interval: NodeJS.Timeout

        // Start scrambling after delay
        timeout = setTimeout(() => {
            setIsScrambling(true)
            let steps = 0
            const totalSteps = 20 // How many scramble frames
            const stepDuration = duration / totalSteps

            interval = setInterval(() => {
                if (steps >= totalSteps) {
                    setDisplayText(text)
                    setIsScrambling(false)
                    clearInterval(interval)
                    return
                }

                // Randomize text
                setDisplayText(
                    text.split("").map((char, index) => {
                        if (char === " ") return " "
                        // Percentage of text revealed increases with steps
                        if (index < (steps / totalSteps) * text.length) return char
                        return CHARS[Math.floor(Math.random() * CHARS.length)]
                    }).join("")
                )

                steps++
            }, stepDuration)

        }, delay)

        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        }
    }, [text, duration, delay])

    return (
        <span className={className}>{displayText}</span>
    )
}
