import type { Metadata } from 'next'
import Link from 'next/link'
import { guides } from '@/data/guides'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Home Gym Guides – Reviews, Comparisons & Setup Advice',
  description:
    'Browse all home gym guides. Buyer guides, product comparisons, and setup advice to help you choose the right equipment for your space and budget.',
  alternates: {
    canonical: 'https://liftsetup.com/guides',
  },
  openGraph: {
    title: 'Home Gym Guides | LiftSetup',
    description:
      'Browse all home gym guides. Buyer guides, product comparisons, and setup advice to help you choose the right equipment.',
  },
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Buyer Guide': { bg: 'bg-blue-50', text: 'text-blue-600' },
  'Setup Guide': { bg: 'bg-green-50', text: 'text-green-600' },
  Comparison: { bg: 'bg-purple-50', text: 'text-purple-600' },
}

export default function GuidesPage() {
  return (
    <div className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-600">Guides</span>
        </nav>

        <SectionHeader
          label="All Guides"
          title="Buyer Guides, Comparisons & Setup Advice"
          description="Structured, research-backed guides to help you make the right equipment decision the first time."
          align="left"
        />

        <div className="mt-10 flex flex-col gap-5">
          {guides.map((guide) => {
            const colors = categoryColors[guide.category] ?? { bg: 'bg-orange-50', text: 'text-orange-600' }
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex flex-col sm:flex-row sm:items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-orange-200 hover:shadow-md transition-all duration-200"
              >
                <div className="shrink-0 w-full sm:w-48 h-28 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg flex items-center justify-center select-none">
                  <span className="text-3xl" aria-hidden="true">
                    📋
                  </span>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${colors.bg} ${colors.text}`}
                    >
                      {guide.category}
                    </span>
                    <span className="text-xs text-slate-400">{guide.readTime}</span>
                  </div>

                  <h2 className="text-base font-semibold text-slate-900 group-hover:text-orange-600 transition-colors mb-1 leading-snug">
                    {guide.title}
                  </h2>

                  <p className="text-sm text-slate-500 leading-relaxed mb-3">{guide.description}</p>

                  <span className="text-sm font-medium text-orange-500 group-hover:text-orange-600 transition-colors">
                    Read guide →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 p-7 bg-slate-50 rounded-xl border border-slate-200">
          <h2 className="text-base font-semibold text-slate-900 mb-2">Looking for equipment by type?</h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            Browse by equipment category to see product reviews, comparisons, and category-specific buying advice.
          </p>
          <Link
            href="/categories"
            className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            Browse equipment categories →
          </Link>
        </div>
      </div>
    </div>
  )
}
