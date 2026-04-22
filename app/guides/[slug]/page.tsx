import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getGuideBySlug, guides } from '@/data/guides'

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
  }
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug)
  if (!guide) notFound()

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">{guide.category}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 leading-tight">{guide.title}</h1>
          <p className="text-slate-500 mt-3 text-lg leading-relaxed">{guide.description}</p>
          <p className="text-xs text-slate-400 mt-3">{guide.readTime}</p>
        </div>

        <div className="p-10 bg-slate-50 rounded-xl border border-slate-200 text-center">
          <p className="text-base font-semibold text-slate-700">Full guide coming soon.</p>
          <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
            We&apos;re working on detailed, research-backed content for this guide. Check back soon for the full
            breakdown.
          </p>
        </div>
      </div>
    </div>
  )
}
