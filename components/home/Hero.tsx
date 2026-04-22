import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Home Gym Equipment Guides
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Build Your Perfect Home Gym{' '}
            <span className="text-orange-500">Without Wasting Money</span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Expert reviews and honest comparisons for every home gym setup. We help you cut through the noise and choose
            equipment that actually fits your space, goals, and budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/categories/adjustable-dumbbells"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Browse Equipment
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              See Setup Guides
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-3 gap-8 max-w-md">
          <div>
            <div className="text-2xl font-bold text-white">200+</div>
            <div className="text-xs text-slate-400 mt-1">Products reviewed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-xs text-slate-400 mt-1">Setup guides</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-xs text-slate-400 mt-1">Unbiased picks</div>
          </div>
        </div>
      </div>
    </section>
  )
}
