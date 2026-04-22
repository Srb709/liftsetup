import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getGuideBySlug, guides } from '@/data/guides'
import { getProductsByIds } from '@/data/products'
import { getCategoryBySlug } from '@/data/categories'
import ProductCard from '@/components/ui/ProductCard'
import AdjustableDumbbellsUnder300Page from '@/components/guides/AdjustableDumbbellsUnder300Page'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug)
  if (!guide) return {}

  const isMoneyPage = guide.slug === 'best-adjustable-dumbbells-under-300'

  return {
    title: isMoneyPage
      ? 'Best Adjustable Dumbbells Under $300 (2026 Buyer Guide) | LiftSetup'
      : guide.metaTitle,
    description: isMoneyPage
      ? 'Best adjustable dumbbells under $300, ranked for real home gym buyers. Compare top picks fast by adjustment feel, compactness, and overall value.'
      : guide.metaDescription,
    alternates: {
      canonical: `https://liftsetup.com/guides/${guide.slug}`,
    },
    openGraph: {
      title: isMoneyPage
        ? 'Best Adjustable Dumbbells Under $300 (2026 Buyer Guide) | LiftSetup'
        : `${guide.metaTitle} | LiftSetup`,
      description: isMoneyPage
        ? 'Best adjustable dumbbells under $300, ranked for real home gym buyers. Compare top picks fast by adjustment feel, compactness, and overall value.'
        : guide.metaDescription,
    },
  }
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug)
  if (!guide) notFound()

  const products = getProductsByIds(guide.relatedProductIds)
  const parentCategory = getCategoryBySlug(guide.categorySlug)

  if (guide.slug === 'best-adjustable-dumbbells-under-300') {
    return <AdjustableDumbbellsUnder300Page guide={guide} products={products} />
  }

  return (
    <div className="py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-orange-500 transition-colors">
            Guides
          </Link>
          {parentCategory && (
            <>
              <span>/</span>
              <Link
                href={`/categories/${parentCategory.slug}`}
                className="hover:text-orange-500 transition-colors"
              >
                {parentCategory.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-slate-600 truncate max-w-[160px]">{guide.title}</span>
        </nav>

        {/* Guide Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">
              {guide.category}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-400">{guide.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">{guide.title}</h1>
          <p className="text-lg text-slate-500 leading-relaxed">{guide.description}</p>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mb-8 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg">
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong className="font-semibold text-slate-600">Affiliate disclosure:</strong> LiftSetup earns a
            commission on qualifying purchases made through links on this page, at no extra cost to you. This does not
            affect our recommendations.{' '}
            <Link href="/affiliate-disclosure" className="underline hover:text-orange-500 transition-colors">
              Learn more
            </Link>
            .
          </p>
        </div>

        {/* Intro */}
        <p className="text-base text-slate-700 leading-relaxed mb-12">{guide.intro}</p>

        {/* Who This Guide Is For */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Who this guide is for</h2>
          <ul className="space-y-2.5">
            {guide.whoItIsFor.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                <span className="text-orange-500 mt-0.5 shrink-0" aria-hidden="true">
                  →
                </span>
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* What to Look For */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-5">What to look for</h2>
          <div className="space-y-4">
            {guide.whatMatters.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <div className="shrink-0 w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Picks */}
        {products.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Our top picks</h2>
            <p className="text-sm text-slate-500 mb-6">
              Selected based on value, build quality, and suitability for home gym use.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Frequently asked questions</h2>
          <div className="space-y-5">
            {guide.faqs.map((faq) => (
              <div key={faq.question} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">The bottom line</h2>
          <p className="text-base text-slate-700 leading-relaxed">{guide.conclusion}</p>
        </section>

        {/* Footer nav */}
        <div className="pt-8 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
          <Link href="/guides" className="text-sm text-slate-500 hover:text-orange-500 transition-colors">
            ← Back to all guides
          </Link>
          {parentCategory && (
            <Link
              href={`/categories/${parentCategory.slug}`}
              className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
            >
              Browse {parentCategory.name} →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
