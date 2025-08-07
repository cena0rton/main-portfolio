import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "PitchPulse- Validate Your Startup Ideas at Lightning Speed ",
    description: "Built PitchPulse using Firebase, Next.js, and Anthropic’s API to help founders validate startup ideas through real feedback, behavioral cues, and early market signals. Designed it as a lean, empathetic tool that fuses fast iteration with smart AI answer cutting through noise to surface what truly resonates.",
    image: "/images/pitch.png",
    technologies: ["Next.js", "0-100 Product", "Product Designing"],
    liveLink: "https://pitchpulse.vercel.app",
    githubLink: "#",
    category: "AI Product "
  },
  {
    id: 2,
    title: "Skimly Real-Time Feedback Operations",
    description: "Built Skimly as a real-time feedback operations tool to help product teams convert scattered feedback into clear, actionable insights. Designed with MongoDB and Next.js, it features a responsive dashboard that visualizes feedback patterns and priorities the moment users log in. Still evolving Skimly is my ongoing effort to bridge the gap between user voice and product direction.",
    image: "/images/skimly.png",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    liveLink: "https://skimlyy.vercel.app",
    githubLink: "#",
    category: "PM Tool (In Progress)"
  },
  {
    id: 3,
    title: "Nior- Minimalist Fashion E-Commerce",
    description: "Nior is an ongoing fashion storefront project crafted to offer a sleek, modern shopping experience. Built with Next.js and integrated with Supabase for authentication and backend support, it focuses on performance, clean UI, and mobile responsiveness. Designed to scale with real-time inventory and customer engagement features in mind.",
    image: "/images/nior.png",
    technologies: ["SupaBase","End-to-End Product Design", "Full-Cycle Execution"],
    liveLink: "https://pawanhere.vercel.app",
    githubLink: "#",
    category: "Fashion Store (In Progress) "
  },
  {
    id: 4,
    title: "Portfolio Website with Firebase Blog",
    description: "Built a minimalist portfolio website using Next.js 15 with a dynamic blog system powered by Firebase. Features include admin panel for blog management, responsive design, and optimized performance. Implemented secure authentication and real-time content management.",
    image: "/images/Pawan.png",
    technologies: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
    liveLink: "https://pawanhere.vercel.app",
    githubLink: "#",
    category: "Full Stack"
  }
]

export default function ProjectsPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-zinc-800 mb-4 pb-5">Projects</h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              I am not limited to one thing, I love to build products from scratch and learn new things. Here are some of the projects I have worked on.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="inline-block px-3 py-1 bg-stone-200 text-zinc-700 text-sm rounded-full">
                    {project.category}
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-medium text-zinc-800 leading-tight">
                    {project.title}
                  </h2>
                  
                  <p className="text-zinc-600 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    {project.liveLink !== "#" && (
                      <Button asChild className="bg-zinc-800 hover:bg-zinc-700 text-white">
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    
                    {project.githubLink !== "#" && (
                      <Button variant="outline" asChild>
                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone-200 shadow-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
