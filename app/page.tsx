import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorkExperienceSection } from "@/components/work-experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
