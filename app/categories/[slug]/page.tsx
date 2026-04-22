import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCategoryBySlug, categories } from '@/data/categories'
import SectionHeader from '@/components/ui/SectionHeader'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug)
  if (!category) return {}

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: {
      canonical: `https://liftsetup.com/categories/${category.slug}`,
    },
  }
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug)
  if (!category) notFound()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Equipment Category"
          title={category.name}
          description={category.description}
          align="left"
        />

        <div className="mt-10 p-10 bg-slate-50 rounded-xl border border-slate-200 text-center">
          <p className="text-base font-semibold text-slate-700">Product reviews coming soon.</p>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            We&apos;re researching and building out this category. Check back soon for detailed picks and honest
            comparisons.
          </p>
        </div>
      </div>
    </div>
  )
}
