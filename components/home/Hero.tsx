import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Orange ambient glow — top right */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-orange-500 opacity-[0.06] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Orange ambient glow — bottom left */}
      <div
        className="absolute -bottom-48 -left-24 w-[400px] h-[400px] rounded-full bg-orange-600 opacity-[0.04] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="grid lg:grid-cols-[1fr_460px] gap-16 xl:gap-24 items-center">

          {/* ── Left: Text ── */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/8 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-[0.12em]">
                Home Gym Equipment Guides
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[74px] font-black text-white leading-[0.9] tracking-tight mb-8">
              Build Your<br />
              Perfect Home<br />
              <span className="text-orange-500">Gym.</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-[480px]">
              Stop guessing. We cut through the noise on every major equipment decision — honest reviews, real comparisons, and zero fluff.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 px-7 py-4 bg-orange-500 text-white text-sm font-bold rounded-xl hover:bg-orange-400 transition-colors"
              >
                Browse Guides
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/6 text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10"
              >
                Browse Equipment
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 pt-10 border-t border-white/6 grid grid-cols-3 gap-8 max-w-xs">
              {[
                { num: '200+', label: 'Products reviewed' },
                { num: '50+', label: 'Buying guides' },
                { num: '100%', label: 'Independent' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="text-2xl font-black text-white">{num}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Floating product card UI ── */}
          <div className="hidden lg:block relative py-10 px-5">
            {/* Main recommendation card */}
            <div className="relative z-10 bg-slate-900 rounded-2xl border border-white/8 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between mb-5">
                <span className="px-2.5 py-1 bg-orange-500 text-white text-xs font-bold rounded-lg tracking-wide">
                  Best Overall
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Adjustable Dumbbells
                </span>
              </div>

              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Bowflex</p>
              <h3 className="text-xl font-black text-white mb-3 leading-tight">SelectTech 552</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                Replaces 15 sets of fixed weights. Dial system adjusts in under 3 seconds. The most proven adjustable dumbbell on the market.
              </p>

              <div className="space-y-2.5 mb-5">
                {[
                  'Dial adjusts in under 3 seconds',
                  'Replaces 15 pairs of dumbbells',
                  'Compact tray footprint',
                ].map((pro) => (
                  <div key={pro} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
                      <span className="text-green-400 text-[9px] font-black leading-none">✓</span>
                    </span>
                    <span className="text-xs text-slate-300">{pro}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-white/6 mb-4" />
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Best for most home gyms</span>
                <span className="text-xs font-bold text-orange-400">Check price →</span>
              </div>
            </div>

            {/* Floating card — top right */}
            <div className="absolute -top-2 -right-2 z-20 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-white/8 p-4 shadow-2xl w-44">
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Budget Pick</p>
              <p className="text-sm font-bold text-white leading-snug">Yes4All Adjustable Dumbbells</p>
              <p className="text-[11px] text-orange-400 font-semibold mt-1.5">Best entry-level →</p>
            </div>

            {/* Floating card — bottom left */}
            <div className="absolute -bottom-2 -left-2 z-20 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-white/8 p-4 shadow-2xl w-44">
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Heavy Lifting</p>
              <p className="text-sm font-bold text-white leading-snug">Ironmaster Quick-Lock 75lb</p>
              <p className="text-[11px] text-orange-400 font-semibold mt-1.5">Best build quality →</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
