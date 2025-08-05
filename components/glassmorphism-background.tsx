"use client"

import type React from "react"

interface GlassmorphismBackgroundProps {
  children: React.ReactNode
}

export function GlassmorphismBackground({ children }: GlassmorphismBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Floating glass elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-float-slow"></div>
      </div>

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/10"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
