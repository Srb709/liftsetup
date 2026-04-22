import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { categories, getCategoryBySlug } from '@/data/categories'
import { getGuidesBySlugs } from '@/data/guides'
import { getProductsByCategory, getProductsByIds } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import ArticleCard from '@/components/ui/ArticleCard'

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
  const relatedCategories = categories.filter((item) => category.relatedCategorySlugs.includes(item.slug))
  const categoryProducts = getProductsByCategory(category.slug)
  const featuredProducts = getProductsByIds(category.featuredProductIds)

  return (
    <div className="py-14 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-orange-400 transition-colors">Equipment</Link>
          <span>/</span>
          <span className="text-slate-200">{category.name}</span>
        </nav>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-7 sm:p-10 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl" aria-hidden="true">{category.icon}</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">{category.name} Hub</h1>
          </div>
          <p className="text-slate-300 max-w-3xl leading-relaxed mb-5">{category.overview}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-slate-300">{relatedGuides.length} buying guide paths</div>
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-slate-300">{categoryProducts.length} reviewed products</div>
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-slate-300">Internal links to related hubs</div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Who this category is best for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.useCases.map((useCase) => (
              <article key={useCase} className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                <p className="text-sm text-slate-200 leading-relaxed">{useCase}</p>
              </article>
            ))}
          </div>
        </section>

        {relatedGuides.length > 0 && (
          <section className="mb-12">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Related buyer guides</h2>
              <Link href="/guides" className="text-sm text-orange-400 hover:text-orange-300">All guides →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedGuides.map((guide) => (
                <ArticleCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        )}

        {featuredProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-5">Featured picks in this category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {categoryProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-5">More reviewed products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {relatedCategories.length > 0 && (
          <section className="rounded-2xl border border-white/10 bg-slate-900 p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Neighboring category hubs</h2>
            <div className="flex flex-wrap gap-3">
              {relatedCategories.map((relatedCategory) => (
                <Link
                  key={relatedCategory.slug}
                  href={`/categories/${relatedCategory.slug}`}
                  className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 hover:border-orange-400/60 hover:text-orange-300"
                >
                  {relatedCategory.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="pt-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <Link href="/categories" className="text-sm text-slate-400 hover:text-orange-400 transition-colors">← Back to all categories</Link>
          <Link href="/guides" className="text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors">Browse all guides →</Link>
        </div>
      </div>
    </div>
  )
}
