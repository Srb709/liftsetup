export interface Product {
  name: string
  category: string
  description: string
  affiliateUrl: string
  badge?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="h-48 bg-slate-100 flex items-center justify-center select-none">
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

        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{product.category}</span>

        <h3 className="text-base font-semibold text-slate-900 mt-1 mb-2">{product.name}</h3>

        <p className="text-sm text-slate-500 leading-relaxed flex-1">{product.description}</p>

        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
        >
          Check Price on Amazon
        </a>
      </div>
    </div>
  )
}
