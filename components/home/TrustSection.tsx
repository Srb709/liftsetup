const trustPoints = [
  {
    number: '01',
    title: 'Unbiased Recommendations',
    description:
      'We evaluate gear on real-world performance — not sponsorships or paid placements. Every recommendation comes with a clear reason.',
  },
  {
    number: '02',
    title: 'Clear, Direct Comparisons',
    description:
      'Side-by-side breakdowns on the factors that actually matter: weight range, build quality, durability, and real-world value.',
  },
  {
    number: '03',
    title: 'Built for Home Setups',
    description:
      'Every pick accounts for space constraints, realistic budgets, and actual use patterns. No gym-grade assumptions.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-[11px] font-bold text-orange-500 uppercase tracking-[0.12em] mb-1.5">Why LiftSetup</p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">Reviews You Can Trust</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {trustPoints.map((point) => (
            <div key={point.number}>
              <span className="block text-[80px] font-black text-slate-100 leading-none select-none mb-5" aria-hidden="true">
                {point.number}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{point.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
