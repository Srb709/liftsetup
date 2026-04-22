import Link from 'next/link'
import { guides } from '@/data/guides'
import { getProductsByIds } from '@/data/products'

export default function EditorsPicks() {
  const picks = guides.slice(0, 4)

  return (
    <section className="py-16 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] font-bold text-orange-400 uppercase tracking-[0.15em] mb-2">Editor&apos;s Picks</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">Start with these high-intent guides</h2>
          </div>
          <Link href="/guides" className="text-sm font-semibold text-slate-300 hover:text-orange-400 transition-colors">
            Browse all guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {picks.map((guide) => {
            const featuredProduct = getProductsByIds(guide.featuredPickId ? [guide.featuredPickId] : [])[0]
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group rounded-2xl border border-white/10 bg-slate-950 p-5 hover:border-orange-400/40 hover:shadow-[0_0_0_1px_rgba(249,115,22,0.2)] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-orange-300 font-semibold">{guide.category}</span>
                  <span className="text-[11px] text-slate-500">{guide.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors mb-2">{guide.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{guide.quickSummary.bestPick}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">{featuredProduct ? `Top pick: ${featuredProduct.name}` : guide.description}</span>
                  <span className="font-semibold text-orange-400">Read now →</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
