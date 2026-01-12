"use client"

import { useEffect } from "react"

export function SmoothScroll() {
    useEffect(() => {
        // Add smooth scrolling to html
        document.documentElement.style.scrollBehavior = "smooth"

        return () => {
            document.documentElement.style.scrollBehavior = "auto"
        }
    }, [])

    return null
}
