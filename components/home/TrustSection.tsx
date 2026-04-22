import SectionHeader from '@/components/ui/SectionHeader'

const trustPoints = [
  {
    icon: '🎯',
    title: 'Unbiased Recommendations',
    description:
      'We evaluate gear based on real-world performance, not sponsorships or paid placements. Our picks reflect honest research.',
  },
  {
    icon: '📊',
    title: 'Clear, Honest Comparisons',
    description:
      'Side-by-side breakdowns on the features that actually matter — weight range, build quality, durability, and long-term value.',
  },
  {
    icon: '🏠',
    title: 'Built for Real Home Setups',
    description:
      'Every recommendation accounts for space, budget, and practical use. No gym-grade assumptions — just what works at home.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why LiftSetup"
          title="Reviews You Can Actually Trust"
          description="We're here to help you make one smart purchase, not push you toward the most expensive option."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-center text-center p-8 rounded-xl bg-slate-50 border border-slate-100"
            >
              <span className="text-4xl mb-4" aria-hidden="true">
                {point.icon}
              </span>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
