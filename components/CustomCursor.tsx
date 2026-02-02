"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"

export function CustomCursor() {
    // Mouse position values
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth spring for the ring - "The Zero-G Feel"
    // Stiffness: Tension of the spring (higher = snap back faster)
    // Damping: Friction (lower = more oscillation/wobble)
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
    const ringX = useSpring(mouseX, springConfig)
    const ringY = useSpring(mouseY, springConfig)

    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Update motion values directly - no re-renders!
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)

            if (!isVisible) setIsVisible(true)
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)

        // Optimized hover detection using event delegation
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Check if interactive
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.closest('[role="button"]') !== null ||
                target.classList.contains('cursor-pointer')

            setIsHovering(isInteractive)
        }

        // Hide cursor when leaving window
        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("mouseup", handleMouseUp)
        window.addEventListener("mouseover", handleMouseOver)
        document.addEventListener("mouseleave", handleMouseLeave)
        document.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("mouseup", handleMouseUp)
            window.removeEventListener("mouseover", handleMouseOver)
            document.removeEventListener("mouseleave", handleMouseLeave)
            document.removeEventListener("mouseenter", handleMouseEnter)
        }
    }, [mouseX, mouseY, isVisible])

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <>
                        {/* Main Dot - Instantly tracks mouse */}
                        <motion.div
                            className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
                            style={{
                                x: mouseX,
                                y: mouseY,
                                translateX: "-50%",
                                translateY: "-50%"
                            }}
                        />

                        {/* Trailing Ring - Smooth Spring Physics */}
                        <motion.div
                            className="fixed top-0 left-0 border-2 rounded-full pointer-events-none z-[9998]"
                            style={{
                                x: ringX,
                                y: ringY,
                                translateX: "-50%",
                                translateY: "-50%"
                            }}
                            animate={{
                                width: isHovering ? 48 : 32,
                                height: isHovering ? 48 : 32,
                                borderColor: isHovering ? "color-mix(in srgb, var(--primary), transparent 50%)" : "color-mix(in srgb, var(--primary), transparent 70%)",
                                backgroundColor: isHovering ? "color-mix(in srgb, var(--primary), transparent 90%)" : "transparent",
                                scale: isClicking ? 0.75 : 1
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25
                            }}
                        />
                    </>
                )}
            </AnimatePresence>

            <style jsx global>{`
                body, a, button, [role="button"] {
                    cursor: none !important;
                }
            `}</style>
        </>
    )
}
