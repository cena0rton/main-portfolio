"use client"

import Link from "next/link"
import { Instagram, Linkedin, FileText, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    closeMenu()
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-[5px] border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-medium text-black hover:text-black/80 transition-colors drop-shadow-sm -tracking-1"
              onClick={closeMenu}
            >
              Pawan Mishra
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-black/90 hover:text-black transition-colors drop-shadow-sm cursor-pointer"
                >
                  About
                </button>
                <Link href="/blog" className="text-black/90 hover:text-black transition-colors drop-shadow-sm">
                  Blogs
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-black/90 hover:text-black hover:bg-black/10"
                >
                  <Link href="https://instagram.com/pawanm_7" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-black/90 hover:text-black hover:bg-black/10"
                >
                  <Link href="https://www.linkedin.com/in/pmbpgc7/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-black/90 hover:text-black hover:bg-black/10"
                >
                  <Link href="https://medium.com/@pmbpgc" target="_blank" rel="noopener noreferrer">
                    <FileText className="w-5 h-5" />
                    <span className="sr-only">Medium</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-black/90 hover:text-black hover:bg-black/10"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={closeMenu} />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white/95 backdrop-blur-[10px] border-l border-white/30 shadow-2xl">
            <div className="flex flex-col h-full pt-20 px-6">
              {/* Menu Items */}
              <div className="space-y-8">
                {/* Navigation Links */}
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-2xl font-light text-black hover:text-black/70 transition-colors py-2 text-left"
                >
                  About
                </button>

                <Link
                  href="/blog"
                  className="block text-2xl font-light text-black hover:text-black/70 transition-colors py-2"
                  onClick={closeMenu}
                >
                  Blog
                </Link>

                {/* Social Media Links */}
                <div className="space-y-6">
                  <h3 className="text-sm font-medium text-black/60 uppercase tracking-wider">Connect</h3>

                  <Link
                    href="https://instagram.com/pawanm_7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-xl font-light text-black hover:text-black/70 transition-colors py-2"
                    onClick={closeMenu}
                  >
                    <Instagram className="w-6 h-6" />
                    Instagram
                  </Link>

                  <Link
                    href="https://linkedin.com/pmbpgc7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-xl font-light text-black hover:text-black/70 transition-colors py-2"
                    onClick={closeMenu}
                  >
                    <Linkedin className="w-6 h-6" />
                    LinkedIn
                  </Link>

                  <Link
                    href="https://medium.com/@pmbpgc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-xl font-light text-black hover:text-black/70 transition-colors py-2"
                    onClick={closeMenu}
                  >
                    <FileText className="w-6 h-6" />
                    Medium
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto pb-8">
                <p className="text-sm text-black/50 text-center">© 2025 Pawan Mishra</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
