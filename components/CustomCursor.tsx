"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"

export function CustomCursor() {
    const mouseX = useMotionValue(-100)
    const mouseY = useMotionValue(-100)
    const [isHovering, setIsHovering] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let rafId: number;
        
        const handleMouseMove = (e: MouseEvent) => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                mouseX.set(e.clientX)
                mouseY.set(e.clientY)
                if (!isVisible) setIsVisible(true)
            });
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.classList.contains('cursor-pointer')

            setIsHovering(isInteractive)
        }

        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        window.addEventListener("mousemove", handleMouseMove, { passive: true })
        window.addEventListener("mouseover", handleMouseOver, { passive: true })
        document.addEventListener("mouseleave", handleMouseLeave)
        document.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseover", handleMouseOver)
            document.removeEventListener("mouseleave", handleMouseLeave)
            document.removeEventListener("mouseenter", handleMouseEnter)
        }
    }, [mouseX, mouseY, isVisible])

    if (!isVisible) return null

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 bg-primary/80 rounded-full pointer-events-none z-[10000] mix-blend-multiply dark:mix-blend-screen"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    width: isHovering ? 28 : 12,
                    height: isHovering ? 28 : 12,
                    opacity: isHovering ? 0.5 : 1
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
            />
            <style jsx global>{`
                body, a, button, [role="button"] {
                    cursor: none !important;
                }
            `}</style>
        </>
    )
}

