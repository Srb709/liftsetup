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
    <div className="bg-zinc-950 py-14 sm:py-16">
      <div className="container-content">
        <nav className="mb-8 flex items-center gap-2 text-xs text-zinc-500">
          <Link href="/" className="transition hover:text-accent-400">Home</Link>
          <span>/</span>
          <Link href="/categories" className="transition hover:text-accent-400">Equipment</Link>
          <span>/</span>
          <span className="text-zinc-300">{category.name}</span>
        </nav>

        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 sm:p-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl" aria-hidden="true">{category.icon}</span>
            <h1 className="text-4xl font-semibold text-stone-100 sm:text-5xl">{category.name} hub</h1>
          </div>
          <p className="max-w-3xl text-base leading-8 text-zinc-300">{category.overview}</p>
          <div className="mt-6 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-zinc-300">{relatedGuides.length} buying guides connected</div>
            <div className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-zinc-300">{categoryProducts.length} reviewed products</div>
            <div className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-zinc-300">Internal links to neighboring hubs</div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-stone-100">Who this category is best for</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {category.useCases.map((useCase) => (
              <article key={useCase} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                <p className="text-sm leading-7 text-zinc-300">{useCase}</p>
              </article>
            ))}
          </div>
        </section>

        {featuredProducts.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-stone-100">Featured picks in this category</h2>
            <p className="mt-2 text-sm text-zinc-400">Start with these editor-selected recommendations before scanning the full product list.</p>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {relatedGuides.length > 0 && (
          <section className="mt-10">
            <div className="mb-5 flex items-end justify-between">
              <h2 className="text-2xl font-semibold text-stone-100">Related buyer guides</h2>
              <Link href="/guides" className="text-sm font-semibold text-accent-300 hover:text-accent-200">All guides →</Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedGuides.map((guide) => (
                <ArticleCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        )}

        {categoryProducts.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-stone-100">More reviewed products</h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {relatedCategories.length > 0 && (
          <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-semibold text-stone-100">Neighboring category hubs</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedCategories.map((relatedCategory) => (
                <Link
                  key={relatedCategory.slug}
                  href={`/categories/${relatedCategory.slug}`}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-accent-500/60 hover:text-accent-300"
                >
                  {relatedCategory.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-8">
          <Link href="/categories" className="text-sm text-zinc-400 transition hover:text-accent-300">← Back to all categories</Link>
          <Link href="/guides" className="text-sm font-semibold text-accent-300 transition hover:text-accent-200">Browse all guides →</Link>
        </div>
      </div>
    </div>
  )
}
