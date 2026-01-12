"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    useEffect(() => {
        const cursor = cursorRef.current
        const ring = ringRef.current
        if (!cursor || !ring) return

        let mouseX = -100
        let mouseY = -100
        let ringX = -100
        let ringY = -100

        const moveCursor = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY

            // Instant movement for the dot
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        }

        const animateRing = () => {
            // Smooth lerp for the ring
            ringX += (mouseX - ringX) * 0.15
            ringY += (mouseY - ringY) * 0.15

            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
            requestAnimationFrame(animateRing)
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)

        // Detect hover on interactive elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("mouseup", handleMouseUp)
        window.addEventListener("mouseover", handleMouseOver)

        const animationId = requestAnimationFrame(animateRing)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("mouseup", handleMouseUp)
            window.removeEventListener("mouseover", handleMouseOver)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <>
            {/* Main Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-0 will-change-transform mix-blend-difference"
            />
            {/* Trailing Ring */}
            <div
                ref={ringRef}
                className={`fixed top-0 left-0 border-2 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out will-change-transform
          ${isHovering
                        ? "w-12 h-12 border-primary/50 bg-primary/10"
                        : "w-8 h-8 border-primary/30"
                    }
          ${isClicking ? "scale-75" : "scale-100"}
        `}
            />

            <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>
        </>
    )
}
