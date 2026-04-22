import Link from 'next/link'
import { categories } from '@/data/categories'
import { getProductsByCategory } from '@/data/products'

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] font-bold text-orange-500 uppercase tracking-[0.12em] mb-1.5">Equipment</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">Browse by Category</h2>
          </div>
          <Link
            href="/categories"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors"
          >
            All categories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category, i) => {
            const productCount = getProductsByCategory(category.slug).length
            const num = String(i + 1).padStart(2, '0')

            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group flex items-start gap-5 p-7 bg-slate-50 rounded-2xl border border-slate-200 hover:border-orange-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                {/* Number badge */}
                <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-slate-200 group-hover:bg-orange-500 group-hover:border-orange-500 flex items-center justify-center transition-all duration-300 shadow-sm">
                  <span className="text-xs font-black text-slate-400 group-hover:text-white transition-colors duration-300 tabular-nums">
                    {num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      {productCount} product{productCount !== 1 ? 's' : ''} reviewed
                    </span>
                    <span className="text-xs font-bold text-orange-500 group-hover:text-orange-600 transition-colors">
                      See picks →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
