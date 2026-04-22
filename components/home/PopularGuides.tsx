import Link from 'next/link'
import { guides } from '@/data/guides'

const categoryBar: Record<string, string> = {
  'Buyer Guide': 'bg-blue-500',
  'Setup Guide': 'bg-green-500',
  Comparison: 'bg-purple-500',
}

export default function PopularGuides() {
  const featured = guides.slice(0, 4)

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] font-bold text-orange-500 uppercase tracking-[0.12em] mb-1.5">Guides</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">Top Picks & Expert Guides</h2>
          </div>
          <Link
            href="/guides"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-orange-400 transition-colors"
          >
            All guides
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Guide cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((guide) => {
            const barColor = categoryBar[guide.category] ?? 'bg-orange-500'
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex flex-col bg-slate-900 rounded-2xl border border-white/6 overflow-hidden hover:border-orange-500/25 hover:shadow-[0_0_0_1px_rgba(249,115,22,0.12),0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                {/* Category color bar */}
                <div className={`h-0.5 w-full shrink-0 ${barColor}`} aria-hidden="true" />

                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      {guide.category}
                    </span>
                    <span className="text-[10px] text-slate-600">{guide.readTime}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors leading-snug mb-3 flex-1">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-5">{guide.description}</p>

                  <span className="text-xs font-bold text-orange-500 group-hover:text-orange-400 transition-colors">
                    Read guide →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
