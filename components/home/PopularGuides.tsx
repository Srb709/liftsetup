import Link from 'next/link'
import { guides } from '@/data/guides'

export default function PopularGuides() {
  const latest = [...guides].slice(0, 6)

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-bold text-orange-500 uppercase tracking-[0.12em] mb-1.5">Latest Buyer Guides</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">Scan, compare, decide fast</h2>
          </div>
          <Link href="/guides" className="hidden sm:inline-flex text-sm font-bold text-slate-400 hover:text-orange-400 transition-colors">
            All guides →
          </Link>
        </div>

        <div className="space-y-3">
          {latest.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-4 hover:border-orange-400/40"
            >
              <span className="text-xs font-black text-slate-500 w-8">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-orange-300 transition-colors">{guide.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-1">{guide.quickSummary.bestPick}</p>
              </div>
              <span className="text-xs font-semibold text-orange-400">Read →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
