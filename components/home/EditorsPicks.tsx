import Link from 'next/link'
import { guides } from '@/data/guides'
import { getProductsByIds } from '@/data/products'

export default function EditorsPicks() {
  const picks = guides.slice(0, 4)

  return (
    <section className="bg-stone-100 py-20">
      <div className="container-content">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="chip">Editor's picks</span>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-950 sm:text-4xl">High-intent guides to start with</h2>
          </div>
          <Link href="/guides" className="text-sm font-semibold text-zinc-600 transition hover:text-accent-700">
            View all guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {picks.map((guide) => {
            const featuredProduct = getProductsByIds(guide.featuredPickId ? [guide.featuredPickId] : [])[0]
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="section-shell group p-6 transition hover:-translate-y-0.5"
              >
                <div className="mb-4 flex items-center justify-between text-xs">
                  <span className="chip">{guide.category}</span>
                  <span className="text-zinc-500">{guide.readTime}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold leading-snug text-zinc-950 transition group-hover:text-accent-700">{guide.title}</h3>
                <p className="mb-4 text-sm leading-7 text-zinc-600">{guide.quickSummary.bestPick}</p>
                <div className="flex items-center justify-between border-t border-zinc-200 pt-4 text-sm">
                  <span className="text-zinc-500">{featuredProduct ? `Top pick: ${featuredProduct.name}` : guide.description}</span>
                  <span className="font-semibold text-accent-700">Read now</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
