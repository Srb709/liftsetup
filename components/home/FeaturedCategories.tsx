import Link from 'next/link'
import { categories } from '@/data/categories'

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-bold text-orange-500 uppercase tracking-[0.12em] mb-1.5">Top Categories</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">Shop by equipment hub</h2>
          </div>
          <Link href="/categories" className="hidden sm:inline-flex text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors">
            All category hubs →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-orange-300 hover:bg-white transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{category.name}</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">{category.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">{category.relatedGuideSlugs.length} guide{category.relatedGuideSlugs.length === 1 ? '' : 's'} + picks</span>
                <span className="font-semibold text-orange-500 group-hover:text-orange-600">Explore hub →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
