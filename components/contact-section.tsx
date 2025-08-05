"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "./contact-form-modal"

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-zinc-800 mb-8">Let's Work Together</h2>
          <p className="text-lg text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
            discuss a project.
          </p>

          <Button
            onClick={() => setIsModalOpen(true)}
            variant="outline"
            size="lg"
            className="border-zinc-300 text-zinc-800 hover:bg-zinc-800 hover:text-stone-50 transition-colors duration-300 bg-transparent"
          >
            Get In Touch
          </Button>
        </div>
      </section>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
