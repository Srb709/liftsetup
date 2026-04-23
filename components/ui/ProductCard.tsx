import { withAffiliateTag } from '@/lib/affiliate'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const href = withAffiliateTag(product.affiliateUrl)

  return (
    <div className="section-shell group flex h-full flex-col overflow-hidden">
      <div className="border-b border-zinc-200 bg-zinc-950 p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-400">{product.brand}</span>
          {product.badge ? (
            <span className="rounded-full border border-accent-500/40 bg-accent-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-200">
              {product.badge}
            </span>
          ) : null}
        </div>
        <h3 className="text-xl font-semibold leading-tight text-stone-100">{product.name}</h3>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-4 text-sm leading-7 text-zinc-600">{product.shortDescription}</p>

        <div className="mb-4 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Best for</p>
          <p className="text-sm text-zinc-700">{product.bestFor}</p>
        </div>

        <ul className="mb-5 space-y-2.5">
          {product.pros.map((pro) => (
            <li key={pro} className="flex items-start gap-2 text-sm text-zinc-600">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" aria-hidden="true" />
              {pro}
            </li>
          ))}
        </ul>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-primary mt-auto"
        >
          Check Price on Amazon
        </a>
      </div>
    </div>
  )
}
