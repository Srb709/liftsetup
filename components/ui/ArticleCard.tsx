import Link from 'next/link'
import type { Guide } from '@/data/guides'

interface ArticleCardProps {
  guide: Guide
}

const categoryStyles: Record<string, string> = {
  'Buyer Guide': 'border-l-accent-500',
  'Setup Guide': 'border-l-emerald-600',
  Comparison: 'border-l-zinc-700',
}

export default function ArticleCard({ guide }: ArticleCardProps) {
  const borderTone = categoryStyles[guide.category] ?? 'border-l-accent-500'

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className={`group section-shell flex flex-col border-l-4 p-6 transition hover:-translate-y-0.5 hover:shadow-[0_2px_0_rgba(24,24,27,0.05),0_28px_70px_rgba(24,24,27,0.1)] ${borderTone}`}
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="chip border-zinc-300 bg-zinc-100 text-zinc-700">{guide.category}</span>
        <span className="ml-auto text-xs text-zinc-500">{guide.readTime}</span>
      </div>

      <h3 className="mb-2 flex-1 text-lg font-semibold leading-snug text-zinc-950 transition group-hover:text-accent-700">
        {guide.title}
      </h3>

      <p className="mb-5 text-sm leading-7 text-zinc-600">{guide.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-accent-700 transition group-hover:text-accent-800">Read guide</span>
        <span className="text-zinc-400 transition group-hover:text-accent-700">→</span>
      </div>
    </Link>
  )
}
