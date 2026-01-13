"use client"

import {
    FileText, Briefcase, BookOpen, Monitor, ShieldCheck, Sparkles,
    GraduationCap, Globe, PenTool, Cpu, Code, Palette, Search, MessageCircle
} from "lucide-react"

export function FloatingServiceIcons() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">

            {/* --- BACKGROUND LAYER (Blurred, Slow, Small) --- */}
            <div className="absolute top-[10%] left-[10%] animate-float-complex opacity-40 blur-[1px]">
                <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 rotate-12">
                    <Globe className="h-6 w-6 text-primary/60 dark:text-primary/40" />
                </div>
            </div>
            <div className="absolute top-[80%] left-[20%] animate-float-complex delay-1000 opacity-40 blur-[1px]">
                <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 -rotate-6">
                    <Search className="h-5 w-5 text-accent/60 dark:text-accent/40" />
                </div>
            </div>
            <div className="absolute top-[15%] right-[20%] animate-float-complex delay-2000 opacity-40 blur-[1px]">
                <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 rotate-45">
                    <Code className="h-6 w-6 text-indigo-600/40 dark:text-indigo-400/40" />
                </div>
            </div>
            <div className="absolute top-[75%] right-[10%] animate-float-complex delay-3000 opacity-40 blur-[1px]">
                <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 -rotate-12">
                    <MessageCircle className="h-5 w-5 text-emerald-600/40 dark:text-emerald-400/40" />
                </div>
            </div>


            {/* --- MIDGROUND LAYER (Standard, Orbiting effectively) --- */}
            {/* Resume - Top Left */}
            <div className="absolute top-[20%] left-[5%] md:left-[8%] animate-float delay-0 opacity-90">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-sm shadow-lg rotate-[-6deg] hover:scale-110 transition-transform duration-500">
                    <FileText className="h-6 w-6 text-primary" />
                </div>
            </div>

            {/* Career - Top Right */}
            <div className="absolute top-[25%] right-[5%] md:right-[8%] animate-float delay-1000 opacity-90">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-sm shadow-lg rotate-[12deg] hover:scale-110 transition-transform duration-500">
                    <Briefcase className="h-7 w-7 text-accent" />
                </div>
            </div>

            {/* Academic - Bottom Left */}
            <div className="absolute bottom-[25%] left-[8%] md:left-[12%] animate-float delay-2000 opacity-90">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-sm shadow-lg rotate-[3deg] hover:scale-110 transition-transform duration-500">
                    <BookOpen className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
            </div>

            {/* Digital - Bottom Right */}
            <div className="absolute bottom-[30%] right-[8%] md:right-[12%] animate-float delay-3000 opacity-90">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-sm shadow-lg rotate-[-6deg] hover:scale-110 transition-transform duration-500">
                    <Monitor className="h-6 w-6 text-indigo-400" />
                </div>
            </div>


            {/* --- FOREGROUND LAYER (Sharp, Fast, Bright) --- */}

            {/* Graduation - Center Left High */}
            <div className="absolute top-[35%] left-[15%] animate-float delay-500 hidden md:block opacity-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/10 border-black/10 dark:border-white/20 backdrop-blur-md shadow-xl rotate-[15deg] hover:rotate-0 transition-transform">
                    <GraduationCap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
            </div>

            {/* Palette - Center Right Low */}
            <div className="absolute bottom-[40%] right-[18%] animate-float delay-700 hidden md:block opacity-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/10 border-black/10 dark:border-white/20 backdrop-blur-md shadow-xl rotate-[-10deg] hover:rotate-0 transition-transform">
                    <Palette className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                </div>
            </div>

            {/* CPU - Center Right High */}
            <div className="absolute top-[30%] right-[25%] animate-float delay-1500 hidden lg:block opacity-80">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-sm rotate-[8deg]">
                    <Cpu className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                </div>
            </div>

            {/* Pen Tool - Center Left Low */}
            <div className="absolute bottom-[30%] left-[25%] animate-float delay-2500 hidden lg:block opacity-80">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-sm rotate-[-8deg]">
                    <PenTool className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
            </div>

        </div>
    )
}
