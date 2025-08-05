export function WorkExperienceSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-zinc-800 mb-16 text-center">Work Experience</h2>

        <div className="space-y-8">
          <div className="border-l-2 border-zinc-300 pl-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-medium text-zinc-800 mb-1">Greateway Software Pvt. Ltd, Pune</h3>
                <p className="text-zinc-600 font-light">Java Full Stack Developer Intern</p>
              </div>
              <div className="text-sm text-zinc-500 font-light whitespace-nowrap">Feb 2025 – Aug 2025</div>
            </div>

            <div className="space-y-3 text-zinc-600 leading-relaxed">
              <p>
                • Engineered a scalable event management backend with Java Spring Boot, orchestrated modules for session
                scheduling, venue coordination, and attendee workflows, and contributed under active technical
                mentorship.
              </p>
              <p>
                • Refactored legacy codebase and implemented modular components, increasing maintainability and
                accelerating future feature development by 25%.
              </p>
              <p>
                • Executed system validation protocols, integrated secure payment APIs, and authored backend
                documentation to enable seamless user onboarding and efficient team handovers.
              </p>
              <p>
                • Worked on backend logic and data models using MongoDB to maintain consistency, performance, and
                scalability of data operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
