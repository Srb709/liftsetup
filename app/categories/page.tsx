import type { Metadata } from 'next'
import Link from 'next/link'
import { categories } from '@/data/categories'
import SectionHeader from '@/components/ui/SectionHeader'

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
    <div className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-600">Equipment</span>
        </nav>

        <SectionHeader
          label="Equipment Categories"
          title="Browse by Equipment Type"
          description="Every category page includes product reviews, honest comparisons, and buying advice specific to that type of equipment."
          align="left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group flex flex-col p-7 bg-white rounded-xl border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl" aria-hidden="true">
                  {category.icon}
                </span>
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h2>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed mb-4">{category.overview}</p>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors">
                  Browse {category.name} →
                </span>
                <span className="text-xs text-slate-400">
                  {category.relatedGuideSlugs.length > 0
                    ? `${category.relatedGuideSlugs.length} guide${category.relatedGuideSlugs.length > 1 ? 's' : ''}`
                    : 'Reviews'}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 p-7 bg-slate-50 rounded-xl border border-slate-200">
          <h2 className="text-base font-semibold text-slate-900 mb-2">Not sure where to start?</h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            If you are building your first home gym, adjustable dumbbells and a quality bench cover the most ground in
            the least space. Browse our setup guides for a more structured starting point.
          </p>
          <Link
            href="/guides"
            className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            Browse setup guides →
          </Link>
        </div>
      </div>
    </div>
  )
}
