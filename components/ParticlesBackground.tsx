"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
    x: number
    y: number
    z: number
    vx: number
    vy: number
    size: number
    color: string
}

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []

        // Mouse state
        let mouseX = 0
        let mouseY = 0
        let targetMouseX = 0
        let targetMouseY = 0

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        const initParticles = () => {
            particles = []
            const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 5000)

            const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * 2 + 0.5, // Depth factor
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 3 + 1,
                    color: isDark
                        ? `hsla(${Math.random() * 60 + 200}, 70%, 70%, ${Math.random() * 0.5 + 0.1})` // Blue/Cyan for dark
                        : `hsla(${Math.random() * 60 + 10}, 90%, 45%, ${Math.random() * 0.5 + 0.4})` // Darker/Vibrant Orange for light
                })
            }
        }

        const draw = () => {
            // Smooth mouse movement
            mouseX += (targetMouseX - mouseX) * 0.05
            mouseY += (targetMouseY - mouseY) * 0.05

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((p) => {
                // Move
                p.x += p.vx * p.z
                p.y += p.vy * p.z

                // Mouse interaction (repel)
                const dx = p.x - mouseX
                const dy = p.y - mouseY
                const dist = Math.sqrt(dx * dx + dy * dy)
                const maxDist = 200

                if (dist < maxDist) {
                    const force = (maxDist - dist) / maxDist
                    p.x += dx * force * 0.05
                    p.y += dy * force * 0.05
                }

                // Wrap around screen
                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0

                // Draw
                ctx.fillStyle = p.color
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size * (p.z * 0.5), 0, Math.PI * 2)
                ctx.fill()
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = e.clientX
            targetMouseY = e.clientY
        }

        window.addEventListener("resize", resize)
        window.addEventListener("mousemove", handleMouseMove)

        resize()
        draw()

        return () => {
            window.removeEventListener("resize", resize)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [theme])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-to-br from-[#fdfbf7] to-[#e0e7ff] dark:from-[#0a0a0a] dark:to-[#1a1a2e]"
        >
            <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
        </div>
    )
}
