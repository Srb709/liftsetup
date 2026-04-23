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
    <div className="bg-stone-100 py-12 sm:py-14">
      <article className="container-content max-w-5xl">
        <nav className="mb-8 flex items-center gap-2 text-xs text-zinc-500">
          <Link href="/" className="transition hover:text-accent-700">Home</Link>
          <span>/</span>
          <Link href="/guides" className="transition hover:text-accent-700">Guides</Link>
          {parentCategory && (
            <>
              <span>/</span>
              <Link href={`/categories/${parentCategory.slug}`} className="transition hover:text-accent-700">{parentCategory.name}</Link>
            </>
          )}
          <span>/</span>
          <span className="max-w-[180px] truncate text-zinc-700">{guide.title}</span>
        </nav>

        <section className="section-shell p-7 sm:p-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="chip">{guide.category}</span>
            <span className="text-zinc-400">•</span>
            <span className="text-xs text-zinc-500">{guide.readTime}</span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-zinc-950 sm:text-5xl">{guide.title}</h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-zinc-600 sm:text-lg">{guide.description}</p>
          <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-7 text-zinc-600">
            <strong className="text-zinc-900">Affiliate disclosure:</strong> We may earn a commission from qualified purchases, at no extra cost to you. Recommendations remain independent.
            <Link href="/affiliate-disclosure" className="ml-1 font-medium text-accent-700 hover:text-accent-800">Learn more</Link>
          </div>
        </section>

        {featuredProduct && (
          <section className="mt-7 rounded-2xl border border-accent-300 bg-white p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-700">Best overall recommendation</p>
            <h2 className="mt-2 text-3xl font-semibold text-zinc-950">{featuredProduct.name}</h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-zinc-600">{featuredProduct.shortDescription}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={withAffiliateTag(featuredProduct.affiliateUrl)}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary bg-accent-600 hover:bg-accent-500"
              >
                Check Price on Amazon
              </a>
              <span className="text-sm text-zinc-500">Default pick for most readers.</span>
            </div>
          </section>
        )}

        <section className="section-shell mt-7 p-6 sm:p-7">
          <h2 className="text-2xl font-semibold text-zinc-950">Quick summary</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700">
            {guide.quickSummary.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2"><span className="text-accent-600">•</span><span>{bullet}</span></li>
            ))}
          </ul>
          <div className="mt-5 grid grid-cols-1 gap-3 text-sm md:grid-cols-3">
            <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-3"><span className="text-zinc-500">For:</span> {guide.quickSummary.forWho}</p>
            <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-3"><span className="text-zinc-500">Best pick:</span> {guide.quickSummary.bestPick}</p>
            {guide.quickSummary.skipIf && <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-3"><span className="text-zinc-500">Skip if:</span> {guide.quickSummary.skipIf}</p>}
          </div>
        </section>

        <p className="mt-9 text-base leading-8 text-zinc-700">{guide.intro}</p>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-zinc-950">Who this guide is for</h2>
          <ul className="mt-4 space-y-3">
            {guide.whoItIsFor.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm leading-7 text-zinc-700"><span className="mt-1 h-2 w-2 rounded-full bg-accent-600" />{point}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-zinc-950">What matters before buying</h2>
          <div className="mt-5 space-y-4">
            {guide.whatMatters.map((item, i) => (
              <article key={item.title} className="section-shell p-5">
                <h3 className="text-lg font-semibold text-zinc-900">{i + 1}. {item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {products.length > 0 && (
          <section className="mt-10" id="top-picks">
            <h2 className="text-3xl font-semibold text-zinc-950">Top picks in this guide</h2>
            <p className="mt-2 text-sm text-zinc-500">Decision-focused recommendations with clear trade-offs.</p>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {products.length > 1 && (
          <section className="mt-10 overflow-x-auto">
            <h2 className="text-3xl font-semibold text-zinc-950">At-a-glance comparison</h2>
            <table className="mt-4 w-full min-w-[640px] overflow-hidden rounded-xl border border-zinc-200 text-sm">
              <thead className="bg-zinc-900 text-stone-100">
                <tr>
                  <th className="p-3 text-left">Pick</th>
                  <th className="p-3 text-left">Best for</th>
                  <th className="p-3 text-left">Main trade-off</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-zinc-200 bg-white">
                    <td className="p-3 font-semibold text-zinc-900">{product.name}</td>
                    <td className="p-3 text-zinc-700">{product.bestFor}</td>
                    <td className="p-3 text-zinc-600">{product.cons[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-zinc-950">Why trust this guide</h2>
          <div className="mt-3 space-y-2 text-sm leading-7 text-zinc-700">
            {guide.methodology.map((line) => (
              <p key={line}>• {line}</p>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-zinc-950">Frequently asked questions</h2>
          <div className="mt-5 space-y-5">
            {guide.faqs.map((faq) => (
              <article key={faq.question} className="border-b border-zinc-200 pb-5 last:border-0">
                <h3 className="text-lg font-semibold text-zinc-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-accent-300 bg-white p-6">
          <h2 className="text-2xl font-semibold text-zinc-950">Verdict</h2>
          <p className="mt-3 leading-8 text-zinc-700">{guide.conclusion}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/guides" className="btn-secondary">See more guides</Link>
            {parentCategory && <Link href={`/categories/${parentCategory.slug}`} className="btn-primary bg-accent-600 hover:bg-accent-500">Browse {parentCategory.name}</Link>}
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="section-shell p-5">
            <h3 className="text-xl font-semibold text-zinc-950">Related guides</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {relatedGuides.map((related) => (
                <li key={related.slug}>
                  <Link href={`/guides/${related.slug}`} className="text-zinc-700 transition hover:text-accent-700">{related.title} →</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="section-shell p-5">
            <h3 className="text-xl font-semibold text-zinc-950">Related categories</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {relatedCategories.map((relatedCategory) => (
                <li key={relatedCategory.slug}>
                  <Link href={`/categories/${relatedCategory.slug}`} className="text-zinc-700 transition hover:text-accent-700">{relatedCategory.name} hub →</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </div>
  )
}
