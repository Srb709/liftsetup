import { withAffiliateTag } from '@/lib/affiliate'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const href = withAffiliateTag(product.affiliateUrl)

  return (
    <div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="h-44 bg-slate-100 flex items-center justify-center select-none">
        <span className="text-5xl" aria-hidden="true">
          🏋️
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5">
        {product.badge && (
          <span className="inline-block self-start mb-2 px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-semibold rounded">
            {product.badge}
          </span>
        )}

        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{product.brand}</p>

        <h3 className="text-sm font-semibold text-slate-900 mt-0.5 mb-2 leading-snug">{product.name}</h3>

        <p className="text-xs text-slate-500 leading-relaxed mb-3">{product.shortDescription}</p>

        <div className="mb-3 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Best for</p>
          <p className="text-xs text-slate-700 leading-relaxed">{product.bestFor}</p>
        </div>

        <ul className="space-y-1 mb-4">
          {product.pros.map((pro) => (
            <li key={pro} className="flex items-start gap-1.5 text-xs text-slate-600">
              <span className="text-green-500 mt-0.5 shrink-0" aria-hidden="true">
                ✓
              </span>
              {pro}
            </li>
          ))}
        </ul>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-auto inline-flex items-center justify-center w-full px-4 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
        >
          Check Price on Amazon
        </a>
      </div>
    </div>
  )
}
