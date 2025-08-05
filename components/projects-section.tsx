export function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-stone-100/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-zinc-800 mb-16 text-center">Projects</h2>

        <div className="space-y-8">
          {/* VTech Automations project */}
          <div className="border-l-2 border-zinc-300 pl-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-medium text-zinc-800 mb-1">
                  VTech Automations - Systemic Optimisation of Phosphating for Powder Coating
                </h3>
                <p className="text-zinc-600 font-light">Research Thesis</p>
                <p className="text-sm text-zinc-500 mt-1">Delhi, India · Remote</p>
              </div>
              <div className="text-sm text-zinc-500 font-light whitespace-nowrap">Jan 2025 – Jun 2025</div>
            </div>

            <div className="space-y-3 text-zinc-600 leading-relaxed">
              <p>
                • Re-engineered the 7-tank and 9-tank phosphating processes using a pattern-based approach to detect
                inefficiencies, isolate edge case anomalies, and map improvement loops in surface treatment cycles.
              </p>
              <p>
                • Positioned this as an industrial micro consulting exercise, blending field observations with
                non-obvious data connections, decision heuristics, and system design logic.
              </p>
              <p>
                • The outcome was not just process improvement – it was a strategic blueprint for scalable surface
                finishing systems, bridging engineering and consultative problem-solving.
              </p>
            </div>
          </div>

          {/* Indian Navy & Mormugao Port Authority project */}
          <div className="border-l-2 border-zinc-300 pl-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-medium text-zinc-800 mb-1">
                  Indian Navy & Mormugao Port Authority, Government of India
                </h3>
                <p className="text-zinc-600 font-light">Undergraduate Research Thesis</p>
              </div>
              <div className="text-sm text-zinc-500 font-light whitespace-nowrap">Jul 2024 – Dec 2024</div>
            </div>

            <div className="space-y-3 text-zinc-600 leading-relaxed">
              <p>
                • Crafted R&D initiatives to implement advanced 5G communication systems, enhancing connectivity,
                automation, and operational efficiency in Indian ports and naval vessels under guidance of Professor
                Naveen Gupta.
              </p>
              <p>
                • Delivered actionable insights that addressed gaps in current infrastructure, contributing to a
                strategic roadmap for digital transformation in port operations.
              </p>
              <p>
                • Conducted feasibility studies and analyzed infrastructure challenges, proposing data-driven solutions
                to optimize port operations and future-proof maritime connectivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
