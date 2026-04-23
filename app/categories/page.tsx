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
    <div className="bg-zinc-950 py-14 sm:py-16">
      <div className="container-content">
        <nav className="mb-8 flex items-center gap-2 text-xs text-zinc-500">
          <Link href="/" className="transition hover:text-accent-400">Home</Link>
          <span>/</span>
          <span className="text-zinc-300">Equipment</span>
        </nav>

        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 sm:p-10">
          <span className="eyebrow border-zinc-700 bg-zinc-950 text-zinc-300">Equipment category hubs</span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-stone-100 sm:text-5xl">Choose your next equipment category with clarity</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">
            Each hub organizes top picks, related buying guides, and category-level context so readers can move from research to purchase confidently.
          </p>
        </section>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition hover:border-accent-500/50"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{category.icon}</span>
                <h2 className="text-2xl font-semibold text-stone-100 transition group-hover:text-accent-300">{category.name}</h2>
              </div>

              <p className="mb-4 text-sm leading-7 text-zinc-300">{category.description}</p>

              <div className="mt-auto flex items-center justify-between border-t border-zinc-800 pt-4">
                <span className="text-sm font-semibold text-accent-300">Browse hub →</span>
                <span className="text-xs text-zinc-500">{category.relatedGuideSlugs.length} guide paths</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
