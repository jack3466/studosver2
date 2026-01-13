"use client"

import React, { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
    x: number
    y: number
    originX: number
    originY: number
    vx: number
    vy: number
    size: number
    color: string
}

export function InteractiveParticleMesh() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const { theme } = useTheme()
    const mouse = useRef({ x: 0, y: 0 })
    // For smoothing mouse movement slightly
    const smoothedMouse = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let particles: Particle[] = []
        let animationFrameId: number
        let width = 0
        let height = 0

        // Configuration
        const particleSpacing = 45 // Denser mesh (was 60)
        const interactionRadius = 250 // Much larger reach (was 150)
        const returnSpeed = 0.08 // Slower snap-back for more floaty feel
        const repulsionStrength = 8 // Stronger push (was 2)
        const connectionDistance = 120 // Connect further

        const init = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height

            particles = []
            const rows = Math.ceil(height / particleSpacing)
            const cols = Math.ceil(width / particleSpacing)

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const x = j * particleSpacing + (Math.random() * 20 - 10) // slight jitter
                    const y = i * particleSpacing + (Math.random() * 20 - 10)
                    particles.push({
                        x,
                        y,
                        originX: x,
                        originY: y,
                        vx: 0,
                        vy: 0,
                        // Larger particles: 1.5 to 3.5px
                        size: Math.random() * 2 + 1.5,
                        color: theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)'
                    })
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            // Smooth mouse for less jittery physics
            smoothedMouse.current.x += (mouse.current.x - smoothedMouse.current.x) * 0.1
            smoothedMouse.current.y += (mouse.current.y - smoothedMouse.current.y) * 0.1

            particles.forEach((p, index) => {
                // Physics
                const dx = p.x - smoothedMouse.current.x
                const dy = p.y - smoothedMouse.current.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                let forceDirectionX = dx / distance
                let forceDirectionY = dy / distance

                // Repulsion from mouse
                if (distance < interactionRadius) {
                    const force = (interactionRadius - distance) / interactionRadius
                    const directionX = forceDirectionX * force * repulsionStrength
                    const directionY = forceDirectionY * force * repulsionStrength
                    p.vx += directionX
                    p.vy += directionY
                }

                // Return to origin (Elasticity)
                const returnDx = p.originX - p.x
                const returnDy = p.originY - p.y

                p.vx += returnDx * returnSpeed * 0.5
                p.vy += returnDy * returnSpeed * 0.5

                // Friction
                p.vx *= 0.85
                p.vy *= 0.85

                p.x += p.vx
                p.y += p.vy

                // Draw particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                // High opacity for visibility
                ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.5)'
                ctx.fill()

                // Connect lines (Constellation) - check neighbors only roughly to save perf
                // Simple O(N^2) for small N (~500 particles) is okay on modern devices, 
                // but let's limit drawing checks for very far particles if needed.
                // For this density (~60px spacing), N is around 500-800 on 1080p.
                // We can optimize by only checking current index + lookahead, 
                // but simplest visuals check all for best mesh.

                // Optimization: Only check particles within array index range ?? No, spatial is better.
                // Let's just do a limited inner loop or random sample if perf is bad. 
                // Standard double loop is fine for < 1000 particles.

                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const distSq = (p.x - p2.x) ** 2 + (p.y - p2.y) ** 2

                    if (distSq < connectionDistance * connectionDistance) {
                        const dist = Math.sqrt(distSq)
                        const opacity = 1 - dist / connectionDistance
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        // High contrast lines
                        ctx.strokeStyle = theme === 'dark'
                            ? `rgba(255, 255, 255, ${opacity * 0.4})`
                            : `rgba(0, 0, 0, ${opacity * 0.3})`
                        ctx.lineWidth = 1
                        ctx.stroke()
                    }
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        const handleResize = () => {
            init()
        }

        const handleMouseMove = (e: MouseEvent) => {
            // Offset by scroll position if the canvas is fixed? 
            // If fixed, e.clientX is correct. If absolute in document, needs pageX.
            // We stick with fixed background usually.
            mouse.current.x = e.clientX
            mouse.current.y = e.clientY
        }

        window.addEventListener("resize", handleResize)
        window.addEventListener("mousemove", handleMouseMove)

        init()
        animate()

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [theme])

    return (
        <div ref={containerRef} className="fixed inset-0 -z-50 pointer-events-none">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    )
}
