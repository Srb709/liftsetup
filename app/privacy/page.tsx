import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for LiftSetup. Learn how we handle visitor data, cookies, and third-party links.',
  alternates: {
    canonical: 'https://liftsetup.com/privacy',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-600">Privacy Policy</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 leading-tight">Privacy Policy</h1>
          <p className="text-sm text-slate-400 mt-2">Last updated: April 2025</p>
        </div>

        <div className="space-y-8 text-slate-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">Overview</h2>
            <p>
              This policy explains how LiftSetup (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) handles
              information when you visit liftsetup.com. We do not sell personal data. We do not collect personal
              information directly from visitors.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">Information collected automatically</h2>
            <p>
              When you visit the site, standard web server logs may automatically record technical information such as
              your IP address, browser type, referring URL, and pages visited. This information is not linked to any
              personally identifiable data and is used only in aggregate to understand general site usage patterns.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">Analytics</h2>
            <p>
              We may use analytics services such as Google Analytics to understand how visitors use the site. These
              services collect anonymized usage data including page views, session duration, and general geographic
              location. They use cookies to distinguish between visits.
            </p>
            <p className="mt-2">
              You can opt out of Google Analytics tracking by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">Cookies</h2>
            <p>
              This site may use cookies to support analytics and basic functionality. Cookies are small text files
              stored by your browser. Most browsers allow you to view, control, or delete cookies through their
              settings. Disabling cookies will not affect your ability to read content on this site.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">Third-party links</h2>
            <p>
              This site contains links to external websites, including Amazon. When you follow one of these links you
              leave LiftSetup. We are not responsible for the privacy practices of third-party sites. Amazon&apos;s
              data practices are governed by{' '}
              <a
                href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 underline"
              >
                Amazon&apos;s Privacy Notice
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">Affiliate links</h2>
            <p>
              LiftSetup participates in the Amazon Associates affiliate program. When you click affiliate links and make
              qualifying purchases, we earn a commission. This does not affect the price you pay. For full details see
              our{' '}
              <Link href="/affiliate-disclosure" className="text-orange-500 hover:text-orange-600 underline">
                Affiliate Disclosure
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">Children</h2>
            <p>
              This site is not directed at children under 13. We do not knowingly collect any information from children
              under 13.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be reflected on this page with an updated
              date. Continued use of the site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-slate-900 mb-2">Contact</h2>
            <p>If you have questions about this privacy policy, you can reach us through our website.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
