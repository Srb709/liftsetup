import type { Metadata } from 'next'
import Link from 'next/link'
import { categories } from '@/data/categories'

export const metadata: Metadata = {
  title: 'Home Gym Equipment Categories',
  description:
    'Browse home gym equipment by category. Find the best adjustable dumbbells, weight benches, squat racks, and complete home gym systems.',
  alternates: {
    canonical: 'https://liftsetup.com/categories',
  },
  openGraph: {
    title: 'Home Gym Equipment Categories | LiftSetup',
    description:
      'Browse home gym equipment by category. Find the best adjustable dumbbells, weight benches, squat racks, and complete home gym systems.',
  },
}

export default function CategoriesPage() {
  return (
    <div className="py-14 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Equipment</span>
        </nav>

        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.15em] text-orange-400 font-semibold mb-2">Category Hubs</p>
          <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">Find your next gear category</h1>
          <p className="text-slate-300 max-w-3xl">Each category hub includes buyer guides, featured picks, and internal links to related equipment so users can compare options quickly.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group flex flex-col p-7 bg-slate-900 rounded-xl border border-white/10 hover:border-orange-400/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl" aria-hidden="true">{category.icon}</span>
                <h2 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">{category.name}</h2>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">{category.description}</p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-medium text-orange-400 group-hover:text-orange-300 transition-colors">Browse hub →</span>
                <span className="text-xs text-slate-500">{category.relatedGuideSlugs.length} guides</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
