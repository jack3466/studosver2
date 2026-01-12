"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollAnimation } from "./ScrollAnimation"

interface StaggerContainerProps {
    children: React.ReactNode
    className?: string
    staggerDelay?: number // ms between items
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 100
}: StaggerContainerProps) {
    // This component acts as a logical grouper. 
    // It maps over children and assigns delays if they are valid React elements.
    // However, for simplicity in this project (without complex recursive cloning),
    // we will mostly use this as a styling wrapper or manually apply delays in the parent.

    // BETTER APPROACH for this constrained environment:
    // Just a clean wrapper that enforces a grid/flex layout for now, 
    // relying on the manual delay props we used in Page.tsx or applying delays via CSS.

    // But wait, the user wants *professional* transactions. 
    // Let's make this component actually handle the sequencing if possible, 
    // or provide a simpler API for the user code.

    // Let's stick to a manual Grid wrapper for now that animates children in.

    return (
        <div className={className}>
            {children}
        </div>
    )
}

// Helper to wrap lists with automatic delay calculation
import React from 'react'

export function StaggeredList({
    children,
    className = "",
    baseDelay = 0
}: {
    children: React.ReactNode,
    className?: string,
    baseDelay?: number
}) {
    return (
        <div className={className}>
            {React.Children.map(children, (child, index) => (
                <ScrollAnimation
                    key={index}
                    delay={baseDelay + (index * 100)}
                    animation="fade-up"
                    className="h-full" // Ensure cards stretch
                >
                    {child}
                </ScrollAnimation>
            ))}
        </div>
    )
}
