import Image from "next/image"

export function AboutSection() {
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
              I have experience with the MERN stack and Java Spring Boot, but at heart, I’m a product architect. I use code to shape ideas into real, usable things driven by clarity, minimalism, and a belief that good design should feel as natural as it looks.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-stone-200 shadow-lg">
              <Image
                src="images/pawan.jpeg"
                alt="Pawan Mishra - Developer & Creative"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
