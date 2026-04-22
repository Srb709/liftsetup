import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About LiftSetup',
  description:
    'LiftSetup helps people build effective home gyms without wasting money. Learn how our recommendations work and what we stand for.',
  alternates: {
    canonical: 'https://liftsetup.com/about',
  },
  openGraph: {
    title: 'About LiftSetup',
    description: 'LiftSetup helps people build effective home gyms without wasting money.',
  },
}

export default function AboutPage() {
  return (
    <div className="py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-600">About</span>
        </nav>

        <div className="mb-10">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">About LiftSetup</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 leading-tight">
            We help people build better home gyms.
          </h1>
        </div>

        <div className="prose-content space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Why we built this</h2>
            <p className="text-base">
              Buying home gym equipment is confusing in a way that does not have to be. Walk into any retailer, search
              Amazon, or Google &ldquo;best home gym equipment&rdquo; and you will find thousands of options, wildly
              inconsistent reviews, and almost no guidance on what actually makes sense for a home setup specifically.
            </p>
            <p className="text-base mt-3">
              Most review content is written for commercial gym standards or treats every buyer the same regardless of
              their space, experience level, or budget. That gap is what LiftSetup is built to fill.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">What we focus on</h2>
            <p className="text-base">
              LiftSetup covers home gym equipment exclusively — the gear that makes sense for real spaces, real budgets,
              and real schedules. Our content is structured around decisions people actually face:
            </p>
            <ul className="mt-3 space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5 shrink-0">→</span>
                <span>Adjustable dumbbells vs fixed sets — which makes more sense for your space?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5 shrink-0">→</span>
                <span>What equipment should you buy first if you only have $300 to start?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5 shrink-0">→</span>
                <span>Can you build a complete home gym in a spare room, garage corner, or apartment?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5 shrink-0">→</span>
                <span>Which squat rack actually fits in a 7-foot ceiling garage?</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">How our recommendations work</h2>
            <p className="text-base">
              Our guides are based on published product specifications, verified user reviews, and research into how
              equipment holds up in real home gym environments. We do not accept payment to recommend specific products
              and we do not adjust rankings based on commission rates.
            </p>
            <p className="text-base mt-3">
              When we recommend something, we explain the reasoning — and what the trade-offs are. We believe the best
              recommendation is the one that is honest about limitations, not the one that calls every product a top
              pick.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Affiliate links</h2>
            <p className="text-base">
              LiftSetup uses affiliate links. When you click a product link and make a purchase on Amazon, we earn a
              small commission at no extra cost to you. This is how the site stays free to use. It does not affect which
              products we recommend or how we rank them.
            </p>
            <p className="text-base mt-3">
              For full details, see our{' '}
              <Link href="/affiliate-disclosure" className="text-orange-500 hover:text-orange-600 underline">
                Affiliate Disclosure
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">What we do not do</h2>
            <ul className="space-y-2 text-base">
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5 shrink-0">✗</span>
                <span>We do not publish vague reviews that call every product excellent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5 shrink-0">✗</span>
                <span>We do not include a product just because it has a high affiliate commission</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5 shrink-0">✗</span>
                <span>We do not fabricate specs, invent pricing, or copy manufacturer descriptions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400 mt-0.5 shrink-0">✗</span>
                <span>We do not make recommendations without explaining the trade-offs</span>
              </li>
            </ul>
          </section>

          <div className="pt-4 border-t border-slate-200">
            <p className="text-base">
              The goal is simple: help you make one good purchasing decision that you will not regret.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="/guides"
                className="inline-flex items-center px-5 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                Browse Guides
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center px-5 py-2.5 bg-white text-slate-700 text-sm font-semibold rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Browse Equipment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
