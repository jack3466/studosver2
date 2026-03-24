"use client"

import { useEffect, useRef } from "react"

export function MeshGradient() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-mesh-spin opacity-30 dark:opacity-10 blur-[120px] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#000000_50%),radial-gradient(rgba(200,200,200,0.1)_0%,transparent_50%)] will-change-transform">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary via-accent to-primary mix-blend-multiply dark:mix-blend-screen" />
            </div>

            {/* Orb 1 */}
            <div className="absolute top-1/4 left-1/4 w-[70vw] h-[70vw] sm:w-[500px] sm:h-[500px] bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] animate-blob will-change-transform" />

            {/* Orb 2 */}
            <div className="absolute top-1/3 right-1/4 w-[80vw] h-[80vw] sm:w-[600px] sm:h-[600px] bg-accent/20 rounded-full blur-[100px] sm:blur-[120px] animate-blob animation-delay-2000 will-change-transform" />

            {/* Orb 3 */}
            <div className="absolute bottom-1/4 left-1/3 w-[70vw] h-[70vw] sm:w-[500px] sm:h-[500px] bg-primary/10 rounded-full blur-[80px] sm:blur-[100px] animate-blob animation-delay-4000 will-change-transform" />
        </div>
    )
}
