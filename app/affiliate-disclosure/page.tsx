import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description:
    'LiftSetup participates in affiliate programs. Learn how our affiliate relationships work and how they do not affect our recommendations.',
  alternates: {
    canonical: 'https://liftsetup.com/affiliate-disclosure',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-600">Affiliate Disclosure</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 leading-tight">Affiliate Disclosure</h1>
          <p className="text-sm text-slate-400 mt-2">Last updated: April 2025</p>
        </div>

        <div className="space-y-8 text-slate-600 text-sm leading-relaxed">
          <section className="p-5 bg-orange-50 border border-orange-100 rounded-xl">
            <p className="text-sm font-medium text-slate-700">
              <strong>Short version:</strong> Some links on this site are affiliate links. If you click one and make a
              purchase, we may earn a commission — at no extra cost to you. This does not change what we recommend.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">Amazon Associates Program</h2>
            <p>
              LiftSetup is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program
              designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>
            <p className="mt-2">
              As an Amazon Associate, LiftSetup earns from qualifying purchases. Amazon, the Amazon logo, and other
              Amazon-related marks are trademarks of Amazon.com, Inc. or its affiliates.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">How affiliate links work</h2>
            <p>
              When you click a product link on LiftSetup and then make a purchase on Amazon within a qualifying window,
              we receive a small percentage of the sale as a commission. The price you pay is exactly the same whether
              or not you use our link — Amazon does not charge buyers more to fund these commissions.
            </p>
            <p className="mt-2">
              Affiliate links are identifiable by the{' '}
              <code className="px-1 py-0.5 bg-slate-100 rounded text-xs font-mono">tag=liftsetup-20</code> parameter in
              Amazon URLs. You are never required to use these links.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">How this affects our recommendations</h2>
            <p>
              It does not. Our product recommendations are based on research, published specifications, and verified
              user feedback — not on which products have higher affiliate commission rates.
            </p>
            <p className="mt-2">
              We do not accept payment from brands or manufacturers to feature or positively review their products. No
              product placement fees. No sponsored rankings.
            </p>
            <p className="mt-2">
              If a product makes our top picks list, it is because we believe it is a genuinely good option for the
              people we are writing for — not because of the commission structure.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">FTC compliance</h2>
            <p>
              In accordance with the Federal Trade Commission&apos;s guidelines on endorsements and testimonials, we
              disclose our affiliate relationships clearly. This page serves as our full disclosure. Individual pages
              and articles also carry affiliate disclosure notices where relevant.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">Questions</h2>
            <p>
              If you have questions about our affiliate relationships or editorial independence, you can learn more on
              our{' '}
              <Link href="/about" className="text-orange-500 hover:text-orange-600 underline">
                About page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
