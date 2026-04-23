import Link from 'next/link'
import { categories } from '@/data/categories'

export default function FeaturedCategories() {
  return (
    <section className="border-y border-zinc-200 bg-white py-20">
      <div className="container-content">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="chip">Equipment hubs</span>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-950 sm:text-4xl">Compare by category, then buy with confidence</h2>
          </div>
          <Link href="/categories" className="hidden text-sm font-semibold text-zinc-600 transition hover:text-accent-700 sm:inline-flex">
            Browse all hubs →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="section-shell group flex flex-col p-6 transition hover:-translate-y-0.5"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                <h3 className="text-xl font-semibold text-zinc-950 transition group-hover:text-accent-700">{category.name}</h3>
              </div>
              <p className="mb-4 text-sm leading-7 text-zinc-600">{category.description}</p>
              <div className="mt-auto flex items-center justify-between border-t border-zinc-200 pt-4 text-sm">
                <span className="text-zinc-500">{category.relatedGuideSlugs.length} related guides</span>
                <span className="font-semibold text-accent-700">Explore hub</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
