import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { categories } from '@/data/categories'

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Equipment Categories"
          title="Browse by Equipment Type"
          description="Find the right gear for your home gym, organized by category."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group flex flex-col items-start p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 hover:shadow-md transition-all duration-200"
            >
              <span className="text-3xl mb-3" aria-hidden="true">
                {category.icon}
              </span>
              <h3 className="text-base font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">{category.description}</p>
              <span className="mt-4 text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors">
                See picks →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
