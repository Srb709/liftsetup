import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getGuideBySlug, getGuidesBySlugs, guides } from '@/data/guides'
import { categories, getCategoryBySlug } from '@/data/categories'
import { getProductsByIds } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import { withAffiliateTag } from '@/lib/affiliate'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug)
  if (!guide) return {}

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: `https://liftsetup.com/guides/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.metaTitle} | LiftSetup`,
      description: guide.metaDescription,
    },
  }
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug)
  if (!guide) notFound()

  const products = getProductsByIds(guide.relatedProductIds)
  const featuredProduct = getProductsByIds(guide.featuredPickId ? [guide.featuredPickId] : [])[0] ?? products[0]
  const parentCategory = getCategoryBySlug(guide.categorySlug)
  const relatedGuides = getGuidesBySlugs(guide.relatedGuideSlugs).filter((item) => item.slug !== guide.slug)
  const relatedCategories = categories.filter((item) => guide.relatedCategorySlugs.includes(item.slug))

  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-orange-400 transition-colors">Guides</Link>
          {parentCategory && (
            <>
              <span>/</span>
              <Link href={`/categories/${parentCategory.slug}`} className="hover:text-orange-400 transition-colors">{parentCategory.name}</Link>
            </>
          )}
          <span>/</span>
          <span className="text-slate-200 truncate max-w-[180px]">{guide.title}</span>
        </nav>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-10 mb-7">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-300">{guide.category}</span>
            <span className="text-slate-500">•</span>
            <span className="text-xs text-slate-400">{guide.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white mb-4">{guide.title}</h1>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-5">{guide.description}</p>
          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-300">
            <strong className="text-white">Affiliate disclosure:</strong> We may earn a commission from qualified purchases, at no extra cost to you. Recommendations remain independent.
            <Link href="/affiliate-disclosure" className="text-orange-400 hover:text-orange-300 ml-1">Learn more</Link>
          </div>
        </section>

        {featuredProduct && (
          <section className="mb-8 rounded-2xl border border-orange-400/30 bg-slate-900 p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300 mb-2">Best overall pick</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">{featuredProduct.name}</h2>
            <p className="text-slate-300 mb-4">{featuredProduct.shortDescription}</p>
            <a
              href={withAffiliateTag(featuredProduct.affiliateUrl)}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600"
            >
              Check Price on Amazon
            </a>
          </section>
        )}

        <section className="mb-8 rounded-2xl border border-white/10 bg-slate-900 p-5 sm:p-7">
          <h2 className="text-xl font-bold text-white mb-4">Quick summary</h2>
          <ul className="space-y-2 text-sm text-slate-200 mb-4">
            {guide.quickSummary.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2"><span className="text-orange-400">•</span><span>{bullet}</span></li>
            ))}
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <p className="rounded-xl border border-white/10 bg-slate-950 p-3"><span className="text-slate-400">For:</span> {guide.quickSummary.forWho}</p>
            <p className="rounded-xl border border-white/10 bg-slate-950 p-3"><span className="text-slate-400">Best pick:</span> {guide.quickSummary.bestPick}</p>
            {guide.quickSummary.skipIf && <p className="rounded-xl border border-white/10 bg-slate-950 p-3"><span className="text-slate-400">Skip if:</span> {guide.quickSummary.skipIf}</p>}
          </div>
        </section>

        <p className="text-slate-300 leading-relaxed mb-10">{guide.intro}</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Who this guide is for</h2>
          <ul className="space-y-2.5">
            {guide.whoItIsFor.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-slate-200"><span className="text-orange-400 mt-0.5">→</span>{point}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-5">What matters before buying</h2>
          <div className="space-y-4">
            {guide.whatMatters.map((item, i) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                <h3 className="text-base font-semibold text-white mb-1">{i + 1}. {item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {products.length > 0 && (
          <section className="mb-10" id="top-picks">
            <h2 className="text-2xl font-bold text-white mb-2">Top picks in this guide</h2>
            <p className="text-sm text-slate-400 mb-6">Decision-focused recommendations with clear trade-offs.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {products.length > 1 && (
          <section className="mb-10 overflow-x-auto">
            <h2 className="text-2xl font-bold text-white mb-4">At-a-glance comparison</h2>
            <table className="w-full min-w-[640px] text-sm border-collapse overflow-hidden rounded-xl border border-white/10">
              <thead className="bg-slate-900">
                <tr>
                  <th className="text-left p-3 text-slate-300">Pick</th>
                  <th className="text-left p-3 text-slate-300">Best for</th>
                  <th className="text-left p-3 text-slate-300">Main trade-off</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-white/10 bg-slate-950">
                    <td className="p-3 text-white font-semibold">{product.name}</td>
                    <td className="p-3 text-slate-300">{product.bestFor}</td>
                    <td className="p-3 text-slate-400">{product.cons[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        <section className="mb-10 rounded-2xl border border-white/10 bg-slate-900 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Why trust this guide</h2>
          <div className="space-y-2 text-sm text-slate-300">
            {guide.methodology.map((line) => (
              <p key={line}>• {line}</p>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-5">Frequently asked questions</h2>
          <div className="space-y-5">
            {guide.faqs.map((faq) => (
              <article key={faq.question} className="border-b border-white/10 pb-5 last:border-0">
                <h3 className="text-base font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-orange-500/25 bg-slate-900 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Verdict</h2>
          <p className="text-slate-300 leading-relaxed mb-4">{guide.conclusion}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides" className="inline-flex rounded-xl border border-white/15 px-4 py-2 text-sm text-slate-200 hover:border-orange-400/60">See more guides</Link>
            {parentCategory && <Link href={`/categories/${parentCategory.slug}`} className="inline-flex rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600">Browse {parentCategory.name}</Link>}
          </div>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <h3 className="text-lg font-bold text-white mb-3">Related guides</h3>
            <ul className="space-y-2 text-sm">
              {relatedGuides.map((related) => (
                <li key={related.slug}>
                  <Link href={`/guides/${related.slug}`} className="text-slate-200 hover:text-orange-300">{related.title} →</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <h3 className="text-lg font-bold text-white mb-3">Related categories</h3>
            <ul className="space-y-2 text-sm">
              {relatedCategories.map((relatedCategory) => (
                <li key={relatedCategory.slug}>
                  <Link href={`/categories/${relatedCategory.slug}`} className="text-slate-200 hover:text-orange-300">{relatedCategory.name} hub →</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
