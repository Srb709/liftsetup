import Link from 'next/link'
import type { Guide } from '@/data/guides'

interface ArticleCardProps {
  guide: Guide
}

const categoryStyles: Record<string, { dot: string; label: string; border: string }> = {
  'Buyer Guide': { dot: 'bg-blue-500', label: 'text-blue-600', border: 'group-hover:border-blue-200' },
  'Setup Guide': { dot: 'bg-green-500', label: 'text-green-600', border: 'group-hover:border-green-200' },
  Comparison: { dot: 'bg-purple-500', label: 'text-purple-600', border: 'group-hover:border-purple-200' },
}

export default function ArticleCard({ guide }: ArticleCardProps) {
  const style = categoryStyles[guide.category] ?? {
    dot: 'bg-orange-500',
    label: 'text-orange-600',
    border: 'group-hover:border-orange-200',
  }

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className={`group flex flex-col p-5 bg-white rounded-2xl border border-slate-200 ${style.border} hover:shadow-lg transition-all duration-300`}
    >
      {/* Category + read time */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${style.dot}`} aria-hidden="true" />
        <span className={`text-[10px] font-bold uppercase tracking-widest ${style.label}`}>
          {guide.category}
        </span>
        <span className="text-[10px] text-slate-400 ml-auto">{guide.readTime}</span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug mb-2 flex-1">
        {guide.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-slate-500 leading-relaxed mb-4">{guide.description}</p>

      {/* CTA */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-orange-500 group-hover:text-orange-600 transition-colors">
          Read guide →
        </span>
        <svg
          className="w-3.5 h-3.5 text-slate-300 group-hover:text-orange-400 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  )
}
