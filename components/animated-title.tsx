"use client"

import { useState, useEffect } from "react"

const titles = ["Developer", "Music Producer", "Philosophy Buff", "Creative Thinker", "Problem Solver"]

export function AnimatedTitle() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing animation
          if (charIndex < currentTitle.length) {
            setDisplayedText(currentTitle.slice(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          // Deleting animation
          if (charIndex > 0) {
            setDisplayedText(currentTitle.slice(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            // Move to next title
            setIsDeleting(false)
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    ) // Faster deletion, slower typing

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentTitleIndex])

  return (
    <span className="font-medium relative">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
