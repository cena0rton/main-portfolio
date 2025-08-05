"use client"

import type React from "react"

interface ModernGradientBackgroundProps {
  variant?: "aurora" | "cosmic" | "ocean" | "sunset" | "forest"
  children: React.ReactNode
}

export function ModernGradientBackground({ variant = "aurora", children }: ModernGradientBackgroundProps) {
  const gradients = {
    aurora: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
    cosmic: "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900",
    ocean: "bg-gradient-to-br from-blue-900 via-teal-900 to-cyan-900",
    sunset: "bg-gradient-to-br from-orange-900 via-red-900 to-pink-900",
    forest: "bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900",
  }

  return (
    <div className={`relative min-h-screen ${gradients[variant]}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
