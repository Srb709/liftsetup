import { withAffiliateTag } from '@/lib/affiliate'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const href = withAffiliateTag(product.affiliateUrl)
  const initial = product.brand.charAt(0).toUpperCase()

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300">

      {/* Card visual header */}
      <div className="relative h-40 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 overflow-hidden flex items-end p-4">
        {/* Giant decorative brand initial */}
        <span
          className="absolute -top-2 -right-2 text-[110px] font-black text-white/[0.04] select-none leading-none pointer-events-none"
          aria-hidden="true"
        >
          {initial}
        </span>

        {/* Badge */}
        {product.badge ? (
          <span className="relative z-10 inline-flex px-2.5 py-1 bg-orange-500 text-white text-[10px] font-bold rounded-lg tracking-wide">
            {product.badge}
          </span>
        ) : (
          <span className="relative z-10 inline-flex px-2.5 py-1 bg-white/8 text-slate-400 text-[10px] font-semibold rounded-lg border border-white/8 tracking-wide">
            {product.brand}
          </span>
        )}

        {/* Brand name — top right */}
        <span className="absolute top-4 right-4 text-[9px] font-black text-slate-500 uppercase tracking-[0.15em]">
          {product.brand}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">{product.name}</h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-4">{product.shortDescription}</p>

        {/* Best for pill */}
        <div className="mb-4 px-3 py-2.5 bg-orange-50 border border-orange-100 rounded-xl">
          <p className="text-[9px] font-bold text-orange-500 uppercase tracking-widest mb-0.5">Best for</p>
          <p className="text-xs text-slate-700 leading-snug">{product.bestFor}</p>
        </div>

        {/* Pros list */}
        <ul className="space-y-2 mb-5">
          {product.pros.map((pro) => (
            <li key={pro} className="flex items-start gap-2 text-xs text-slate-600">
              <span className="shrink-0 mt-0.5 w-3.5 h-3.5 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-[8px] font-black leading-none">✓</span>
              </span>
              {pro}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-900 text-white text-xs font-bold rounded-xl group-hover:bg-orange-500 transition-colors duration-300"
        >
          Check Price on Amazon
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}
