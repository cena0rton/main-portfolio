"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export function AboutSectionWithUpload() {
  const [imageUrl, setImageUrl] = useState("/images/profile.jpg")

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
    }
  }

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-zinc-800 mb-8">About Me</h2>
            <div className="space-y-6 text-zinc-600 leading-relaxed">
              <p>
                I'm a BITS Pilani graduate and a curious being who thrives on blending logic with creativity. I approach
                tech with a non-linear mindset always exploring, reading, writing, or making music between lines of
                code.
              </p>
              <p>
                With experience in MERN stack and Java Spring Boot, I craft scalable, user centric applications. I
                believe in minimalism, thoughtful design, and code that feels as intuitive as it looks.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-stone-200 group">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt="Pawan Mishra"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Upload overlay (only visible in development) */}
              {process.env.NODE_ENV === "development" && (
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Button variant="secondary" size="sm" asChild>
                      <span>
                        <Upload className="w-4 h-4 mr-2" />
                        Change Photo
                      </span>
                    </Button>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
