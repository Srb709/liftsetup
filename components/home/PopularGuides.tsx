import Link from 'next/link'
import { guides } from '@/data/guides'

export default function PopularGuides() {
  const latest = [...guides].slice(0, 6)

  return (
    <section className="bg-zinc-950 py-20">
      <div className="container-content">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="eyebrow border-zinc-700 bg-zinc-900 text-zinc-300">Latest buying guides</span>
            <h2 className="mt-3 text-3xl font-semibold text-stone-100 sm:text-4xl">Fast-read breakdowns for smarter purchases</h2>
          </div>
          <Link href="/guides" className="hidden text-sm font-semibold text-zinc-400 transition hover:text-accent-400 sm:inline-flex">
            All guides →
          </Link>
        </div>

        <div className="space-y-3">
          {latest.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-4 transition hover:border-accent-500/50"
            >
              <span className="w-8 text-xs font-semibold text-zinc-500">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-sm font-medium text-stone-100 transition group-hover:text-accent-300 sm:text-base">{guide.title}</h3>
                <p className="line-clamp-1 text-xs text-zinc-400">{guide.quickSummary.bestPick}</p>
              </div>
              <span className="text-xs font-semibold text-accent-300">Read</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
