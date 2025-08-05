"use client"

import type React from "react"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    VANTA: any
    THREE: any
  }
}

interface VantaBackgroundProps {
  effect?: "waves" | "fog" | "net" | "cells" | "birds" | "dots"
  children: React.ReactNode
}

export function VantaBackground({ effect = "waves", children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    // Load Three.js and Vanta.js scripts
    const loadScripts = async () => {
      // Load Three.js
      if (!window.THREE) {
        const threeScript = document.createElement("script")
        threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        document.head.appendChild(threeScript)
        await new Promise((resolve) => (threeScript.onload = resolve))
      }

      // Load Vanta effect
      if (!window.VANTA) {
        const vantaScript = document.createElement("script")
        vantaScript.src = `https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.${effect}.min.js`
        document.head.appendChild(vantaScript)
        await new Promise((resolve) => (vantaScript.onload = resolve))
      }

      // Initialize Vanta effect
      if (vantaRef.current && window.VANTA && window.THREE) {
        vantaEffect.current = window.VANTA[effect.toUpperCase()]({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true, // Enable mouse interaction
          touchControls: true, // Enable touch interaction
          gyroControls: false, // Disable gyro on mobile
          minHeight: 200.0, // Minimum height
          minWidth: 200.0, // Minimum width
          scale: 1.0, // Overall scale
          scaleMobile: 1.0, // Scale on mobile
          // Waves specific options
          ...(effect === "waves" && {
            color: 0x3f3f46,
            shininess: 30,
            waveHeight: 15,
            waveSpeed: 0.75,
            zoom: 0.65,
          }),
          // Fog specific options
          ...(effect === "fog" && {
            highlightColor: 0xffffff, // Light fog color (currently coral)
            midtoneColor: 0xffffff, // Mid fog color (currently orange)
            lowlightColor: 0x448aea, // Dark fog color (currently purple)
            baseColor: 0xffffff, // Base color (currently white)
            blurFactor: 0.6, // How blurry the fog is (0-1)
            speed: 1.0, // Animation speed
            zoom: 1.0, // Zoom level
          }),
          // Net specific options
          ...(effect === "net" && {
            color: 0x3f3f46,
            backgroundColor: 0xf5f5f4,
            points: 8.0,
            maxDistance: 20.0,
            spacing: 15.0,
          }),
          // Cells specific options
          ...(effect === "cells" && {
            color1: 0x3f3f46,
            color2: 0x71717a,
            size: 1.5,
            speed: 1.0,
          }),
          // Birds specific options
          ...(effect === "birds" && {
            colorMode: "lerp",
            birdSize: 1.0,
            wingSpan: 25.0,
            speedLimit: 3.0,
            separation: 20.0,
            alignment: 20.0,
            cohesion: 20.0,
            quantity: 3.0,
          }),
          // Dots specific options
          ...(effect === "dots" && {
            color: 0x3f3f46,
            color2: 0x71717a,
            backgroundColor: 0xf5f5f4,
            size: 3.0,
            spacing: 30.0,
          }),
        })
      }
    }

    loadScripts()

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
      }
    }
  }, [effect])

  return (
    <div ref={vantaRef} className="relative min-h-screen">
      {children}
    </div>
  )
}
