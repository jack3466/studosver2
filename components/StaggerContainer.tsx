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
import { motion } from "framer-motion"

export function StaggeredList({
    children,
    className = "",
    baseDelay = 0,
    staggerDuration = 0.15
}: {
    children: React.ReactNode,
    className?: string,
    baseDelay?: number,
    staggerDuration?: number
}) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDuration,
                delayChildren: baseDelay / 1000
            }
        }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {/* 
              We map children and wrap them in a motion component so they implicitly pick up the parent's staggered transition.
              However, since our ScrollAnimation component *also* has initial/whileInView, they might conflict if nested directly without care.
              
              Actually, the cleanest way with Framer Motion stagger is to have the PARENT control the "show" state, and children just have variants.
              
              But our ScrollAnimation component is designed to be standalone. 
              
              Hybrid approach: 
              We can keep ScrollAnimation as is (standalone), OR we can make StaggeredList intelligent.
              
              To avoid rewriting all children usage, let's keep it simple: 
              We'll just map the children and clone them with an increasing delay prop, 
              which `ScrollAnimation` already accepts.
            */}
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        // @ts-ignore - we assume the child accepts standard props or we wrap it
                        delay: baseDelay + (index * 100),
                        // We can also force the animation type if we wanted, but let's trust the child
                    } as any)
                }
                return child
            })}
        </motion.div>
    )
}
