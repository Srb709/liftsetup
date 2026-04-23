const trustPoints = [
  {
    number: '01',
    title: 'Unbiased Recommendations',
    description:
      'Every pick includes a rationale and trade-offs. We prioritize practical fit, durability, and value over brand hype.',
  },
  {
    number: '02',
    title: 'Decision-First Comparisons',
    description:
      'Guides are structured so readers can quickly identify the default pick, budget option, and premium upgrade path.',
  },
  {
    number: '03',
    title: 'Built for Real Home Gyms',
    description:
      'Our framework evaluates equipment against constraints that matter in real homes: space, noise, adjustability, and long-term use.',
  },
]

export default function TrustSection() {
  return (
    <section className="bg-stone-100 py-20">
      <div className="container-content">
        <div className="mb-12">
          <span className="chip">Methodology</span>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-950 sm:text-4xl">A review process you can trust</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {trustPoints.map((point) => (
            <article key={point.number} className="section-shell p-6">
              <p className="text-4xl font-semibold text-zinc-300">{point.number}</p>
              <h3 className="mt-4 text-xl font-semibold text-zinc-950">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
