import { AnimatedTitle } from "./animated-title"
import { VantaBackground } from "./vanta-background"

export function HeroSection() {
  return (
    <VantaBackground effect="fog">
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-black mb-6 leading-tight drop-shadow-lg">
            <br />
            <AnimatedTitle />
          </h1>
          <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Exploring life with curiosity, creativity, and a quiet fire to shape what truly matters.
          </p>
        </div>
      </section>
    </VantaBackground>
  )
}
