import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getCategoryBySlug, categories } from '@/data/categories'
import { getGuidesBySlugs } from '@/data/guides'
import { getProductsByCategory } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import ArticleCard from '@/components/ui/ArticleCard'
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
    openGraph: {
      title: `${category.metaTitle} | LiftSetup`,
      description: category.metaDescription,
    },
  }
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug)
  if (!category) notFound()

  const relatedGuides = getGuidesBySlugs(category.relatedGuideSlugs)
  const categoryProducts = getProductsByCategory(category.slug)

  return (
    <div className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-orange-500 transition-colors">
            Equipment
          </Link>
          <span>/</span>
          <span className="text-slate-600">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl" aria-hidden="true">
              {category.icon}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">{category.name}</h1>
          </div>
          <p className="text-base text-slate-600 leading-relaxed max-w-3xl">{category.overview}</p>
        </div>

        {/* Who Should Buy This */}
        <div className="mb-12 p-7 bg-slate-50 rounded-xl border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Who should buy {category.name.toLowerCase()}?</h2>
          <ul className="space-y-2.5">
            {category.useCases.map((useCase) => (
              <li key={useCase} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="text-orange-500 mt-0.5 shrink-0" aria-hidden="true">
                  →
                </span>
                {useCase}
              </li>
            ))}
          </ul>
        </div>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <div className="mb-14">
            <SectionHeader
              label="Related Guides"
              title={`Buying Guides for ${category.name}`}
              description="Structured advice to help you choose the right product for your specific situation."
              align="left"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {relatedGuides.map((guide) => (
                <ArticleCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
        )}

        {/* Products */}
        {categoryProducts.length > 0 && (
          <div>
            <SectionHeader
              label="Top Picks"
              title={`Best ${category.name}`}
              description="Our reviewed picks for this category, ranked by overall value for home gym use."
              align="left"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* If no guides and products (empty category like squat-racks which has no guides yet) */}
        {relatedGuides.length === 0 && categoryProducts.length === 0 && (
          <div className="p-10 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <p className="text-base font-semibold text-slate-700">More content coming soon.</p>
            <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
              We are actively building out guides and reviews for this category.
            </p>
          </div>
        )}

        {/* Cross-link to guides index */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/categories"
            className="text-sm text-slate-500 hover:text-orange-500 transition-colors"
          >
            ← Back to all categories
          </Link>
          <Link
            href="/guides"
            className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            Browse all guides →
          </Link>
        </div>
      </div>
    </div>
  )
}
