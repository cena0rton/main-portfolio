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
                With experience in MERN stack and Java Spring Boot, I craft scalable, user centric applications. I
                believe in minimalism, thoughtful design, and code that feels as intuitive as it looks.
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
