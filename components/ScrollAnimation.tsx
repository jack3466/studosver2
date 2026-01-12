"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
    children: React.ReactNode
    className?: string
    animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right"
    delay?: number
}

export function ScrollAnimation({
    children,
    className = "",
    animation = "fade-up",
    delay = 0
}: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.1,
                rootMargin: "50px",
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-up":
                return "translate-y-10 opacity-0"
            case "fade-in":
                return "opacity-0"
            case "slide-left":
                return "-translate-x-10 opacity-0"
            case "slide-right":
                return "translate-x-10 opacity-0"
            default:
                return "opacity-0"
        }
    }

    const getVisibleClass = () => {
        switch (animation) {
            case "fade-up":
                return "translate-y-0 opacity-100"
            case "fade-in":
                return "opacity-100"
            case "slide-left":
                return "translate-x-0 opacity-100"
            case "slide-right":
                return "translate-x-0 opacity-100"
            default:
                return "opacity-100"
        }
    }

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${className} ${isVisible ? getVisibleClass() : getAnimationClass()
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}
