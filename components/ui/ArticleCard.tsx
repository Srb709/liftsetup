import Link from 'next/link'
import type { Guide } from '@/data/guides'

interface ArticleCardProps {
  guide: Guide
}

const categoryColors: Record<string, string> = {
  'Buyer Guide': 'text-blue-500',
  'Setup Guide': 'text-green-500',
  Comparison: 'text-purple-500',
}

export default function ArticleCard({ guide }: ArticleCardProps) {
  const categoryColor = categoryColors[guide.category] ?? 'text-orange-500'

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all duration-200"
    >
      <div className="h-36 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center select-none">
        <span className="text-4xl" aria-hidden="true">
          📋
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-semibold uppercase tracking-wider ${categoryColor}`}>
            {guide.category}
          </span>
          <span className="text-xs text-slate-400">{guide.readTime}</span>
        </div>

        <h3 className="text-sm font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
          {guide.title}
        </h3>

        <p className="text-xs text-slate-500 leading-relaxed flex-1">{guide.description}</p>

        <span className="mt-3 text-xs font-medium text-orange-500 group-hover:text-orange-600 transition-colors">
          Read guide →
        </span>
      </div>
    </Link>
  )
}
