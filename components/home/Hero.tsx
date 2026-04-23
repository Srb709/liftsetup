import Link from 'next/link'

export default function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-950 py-20 sm:py-24">
      <div className="container-content">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_420px] lg:gap-16">
          <div>
            <span className="eyebrow border-accent-400/40 bg-accent-500/15 text-amber-200">Independent home gym buyer's guides</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-stone-100 sm:text-6xl">
              Premium equipment reviews for serious home gym decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              LiftSetup helps you choose the right equipment with structured comparisons, clear trade-offs, and direct recommendations built for real home setups.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/guides" className="btn-primary bg-accent-600 hover:bg-accent-500">
                Explore buying guides
              </Link>
              <Link href="/categories" className="btn-secondary border-zinc-700 bg-zinc-900 text-stone-100 hover:border-zinc-500">
                Browse equipment hubs
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-zinc-800 pt-8">
              {[
                { stat: '200+', label: 'Products reviewed' },
                { stat: '50+', label: 'Guides & comparisons' },
                { stat: '100%', label: 'Independent picks' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-semibold text-stone-100">{item.stat}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-zinc-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="section-shell border-zinc-800 bg-zinc-900 p-6">
            <p className="chip border-accent-500/30 bg-accent-500/20 text-amber-100">Featured recommendation</p>
            <h2 className="mt-4 text-2xl font-semibold text-stone-100">Best overall adjustable dumbbell</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              Bowflex SelectTech 552 remains our default pick for most home gyms thanks to rapid adjustments, broad range, and proven reliability.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-accent-400" />Fast dial adjustments</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-accent-400" />Replaces 15 dumbbell pairs</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-accent-400" />Strong fit for small spaces</li>
            </ul>
            <Link href="/guides/best-adjustable-dumbbells-under-300" className="btn-primary mt-6 w-full bg-stone-100 text-zinc-950 hover:bg-accent-500 hover:text-stone-100">
              Read the full guide
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
