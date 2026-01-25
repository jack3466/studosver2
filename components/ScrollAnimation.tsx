"use client"

import { motion } from "framer-motion"

interface ScrollAnimationProps {
    children: React.ReactNode
    className?: string
    animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up"
    delay?: number
    duration?: number
}

export function ScrollAnimation({
    children,
    className = "",
    animation = "fade-up",
    delay = 0,
    duration = 0.7
}: ScrollAnimationProps) {
    const getVariants = () => {
        switch (animation) {
            case "fade-up":
                return {
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                }
            case "fade-in":
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                }
            case "slide-left":
                return {
                    hidden: { opacity: 0, x: -40 },
                    visible: { opacity: 1, x: 0 }
                }
            case "slide-right":
                return {
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0 }
                }
            case "scale-up":
                return {
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                }
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                }
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={getVariants()}
            transition={{
                duration: duration,
                delay: delay / 1000,
                // Ultra smooth spring-like bezier
                ease: [0.22, 1, 0.36, 1],
                type: "tween" // using tween with custom ease for more predictable "smoothness" than spring sometimes
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
