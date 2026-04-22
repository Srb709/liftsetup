import Link from 'next/link'
import { withAffiliateTag } from '@/lib/affiliate'
import type { Guide } from '@/data/guides'
import type { Product } from '@/data/products'

interface AdjustableDumbbellsUnder300PageProps {
  guide: Guide
  products: Product[]
}

const pickBadges: Record<string, string> = {
  'bowflex-selecttech-552': 'Best Overall',
  'yes4all-adjustable': 'Best Budget',
  'powerblock-elite-exp': 'Best Compact',
  'nordictrack-select-a-weight': 'Best for Beginners',
}

const comparisonRows = [
  {
    label: 'Adjustment feel',
    values: {
      'bowflex-selecttech-552': 'Fast dial changes between sets',
      'powerblock-elite-exp': 'Pin selector with compact block design',
      'nordictrack-select-a-weight': 'Selector-pin changes with traditional shape',
      'yes4all-adjustable': 'Manual spin-lock plate changes',
    },
  },
  {
    label: 'Training flow',
    values: {
      'bowflex-selecttech-552': 'Excellent for supersets and circuits',
      'powerblock-elite-exp': 'Strong for structured progressive sessions',
      'nordictrack-select-a-weight': 'Good for mixed beginner programs',
      'yes4all-adjustable': 'Best for slower, straightforward sets',
    },
  },
  {
    label: 'Space efficiency',
    values: {
      'bowflex-selecttech-552': 'Compact tray footprint',
      'powerblock-elite-exp': 'Most compact profile in this guide',
      'nordictrack-select-a-weight': 'Compact, but larger than block style',
      'yes4all-adjustable': 'Plate storage needed between workouts',
    },
  },
  {
    label: 'Best for',
    values: {
      'bowflex-selecttech-552': 'Most home gym buyers under $300',
      'powerblock-elite-exp': 'Buyers prioritizing compact durability',
      'nordictrack-select-a-weight': 'Beginners wanting a familiar dumbbell feel',
      'yes4all-adjustable': 'Lowest-cost entry into adjustable training',
    },
  },
]

const buyerProfiles = [
  {
    title: 'Beginners building a first setup',
    description: 'You need predictable increments and a set that keeps training simple from day one.',
  },
  {
    title: 'Small-space home gyms',
    description: 'You want one pair that replaces a rack without taking over your bedroom, garage, or corner gym.',
  },
  {
    title: 'Budget-conscious buyers',
    description: 'You care about long-term value, not just a low sticker price that costs you later.',
  },
  {
    title: 'People avoiding cheap junk',
    description: 'You want reliable adjustment hardware and a build that can hold up to regular use.',
  },
]

const howWeChose = [
  {
    title: 'Value per training year',
    description: 'We prioritized options that deliver strong daily usability without crossing the $300 budget target.',
  },
  {
    title: 'Usability in real workouts',
    description: 'Fast and reliable adjustment matters when you are moving through supersets, drop sets, and warm-ups.',
  },
  {
    title: 'Build quality signals',
    description: 'We looked for models with track records of consistent locking behavior and stable handling.',
  },
  {
    title: 'Space efficiency',
    description: 'Every pick had to replace multiple fixed pairs while staying practical for compact home setups.',
  },
]

export default function AdjustableDumbbellsUnder300Page({
  guide,
  products,
}: AdjustableDumbbellsUnder300PageProps) {
  const topPick = products[0]
  const topPicks = products.slice(0, 4)

  if (!topPick) return null

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-orange-500 transition-colors">
            Guides
          </Link>
          <span>/</span>
          <Link href="/categories/adjustable-dumbbells" className="hover:text-orange-500 transition-colors">
            Adjustable Dumbbells
          </Link>
          <span>/</span>
          <span className="text-slate-900 truncate max-w-[180px]">{guide.title}</span>
        </nav>

        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-6 sm:p-10 mb-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.2),_transparent_45%)]" aria-hidden="true" />
          <div className="relative">
            <span className="inline-flex px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-300 mb-4">
              Buyer Guide
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">Best Adjustable Dumbbells Under $300</h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
              We compared the most popular adjustable dumbbells in this budget range to identify the sets that are easiest to use,
              most practical in small spaces, and strongest overall value for real home training.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Independent recommendations based on usability, build confidence, and long-term value for home gym buyers.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Budget Cap</p>
                <p className="text-sm font-semibold text-white">Under $300 focus</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Top Picks</p>
                <p className="text-sm font-semibold text-white">4 proven options</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Priorities</p>
                <p className="text-sm font-semibold text-white">Speed, value, footprint</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Read Time</p>
                <p className="text-sm font-semibold text-white">{guide.readTime}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#top-picks"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                See Top Picks
              </a>
              <a
                href="#comparison"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border border-slate-600 text-slate-100 hover:border-slate-400 transition-colors"
              >
                Compare Options
              </a>
            </div>
          </div>
        </section>

        <section className="mb-8 rounded-3xl border border-orange-200/70 bg-gradient-to-br from-orange-50 to-white p-5 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-500 mb-2">Best Overall Pick</p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mb-3">{topPick.name}</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{topPick.shortDescription}</p>
              <div className="rounded-xl bg-white border border-orange-100 p-4 mb-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-1">Why it wins</p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  It balances fast adjustment, practical range for most home workouts, and a compact footprint that fits small training spaces.
                </p>
              </div>
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Best for: </span>
                {topPick.bestFor}
              </p>
            </div>

            <div className="lg:w-[360px] rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Quick Pros</h3>
              <ul className="space-y-2 mb-4">
                {topPick.pros.slice(0, 3).map((pro) => (
                  <li key={pro} className="text-sm text-slate-600 flex gap-2">
                    <span className="text-emerald-600 font-bold">+</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Trade-offs</h3>
              <ul className="space-y-2 mb-5">
                {topPick.cons.slice(0, 2).map((con) => (
                  <li key={con} className="text-sm text-slate-600 flex gap-2">
                    <span className="text-rose-600 font-bold">−</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
              <a
                href={withAffiliateTag(topPick.affiliateUrl)}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors"
              >
                Check Price on Amazon
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Who this page is for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {buyerProfiles.map((profile) => (
              <article key={profile.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{profile.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{profile.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What to look for before you buy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guide.whatMatters.slice(0, 6).map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="top-picks" className="scroll-mt-24 mb-12">
          <div className="flex items-end justify-between mb-5 gap-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Top picks under $300</h2>
              <p className="text-sm text-slate-600">Ranked for practical value, daily usability, and compact home gym fit.</p>
            </div>
          </div>
          <div className="space-y-5">
            {topPicks.map((product, index) => (
              <article key={product.id} className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center justify-center h-7 min-w-7 px-2 rounded-full bg-slate-900 text-white text-xs font-bold">
                        #{index + 1}
                      </span>
                      <span className="inline-flex px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 text-[11px] font-bold tracking-wide">
                        {pickBadges[product.id] ?? product.badge ?? 'Top Pick'}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{product.brand}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{product.shortDescription}</p>
                    <p className="text-sm text-slate-700 mb-4">
                      <span className="font-semibold text-slate-900">Best for: </span>
                      {product.bestFor}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-700 mb-2">Pros</p>
                        <ul className="space-y-2">
                          {product.pros.map((pro) => (
                            <li key={pro} className="text-sm text-emerald-900">{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-rose-100 bg-rose-50 p-3">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-rose-700 mb-2">Cons</p>
                        <ul className="space-y-2">
                          {product.cons.map((con) => (
                            <li key={con} className="text-sm text-rose-900">{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-56 lg:shrink-0">
                    <a
                      href={withAffiliateTag(product.affiliateUrl)}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white hover:bg-orange-500 transition-colors"
                    >
                      Check Price
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="comparison" className="scroll-mt-24 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white hidden md:block">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-900 text-slate-100">
                <tr>
                  <th className="text-left p-4 font-semibold">Compare</th>
                  {topPicks.map((product) => (
                    <th key={product.id} className="text-left p-4 font-semibold min-w-[180px]">
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-slate-100 align-top">
                    <td className="p-4 font-semibold text-slate-900">{row.label}</td>
                    {topPicks.map((product) => (
                      <td key={`${row.label}-${product.id}`} className="p-4 text-slate-600 leading-relaxed">
                        {row.values[product.id as keyof typeof row.values]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 md:hidden">
            {topPicks.map((product) => (
              <article key={`mobile-${product.id}`} className="rounded-2xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-bold text-slate-900 mb-3">{product.name}</h3>
                <dl className="space-y-2">
                  {comparisonRows.map((row) => (
                    <div key={`${product.id}-${row.label}`}>
                      <dt className="text-[11px] uppercase tracking-wide text-slate-500">{row.label}</dt>
                      <dd className="text-sm text-slate-700">{row.values[product.id as keyof typeof row.values]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How we chose these picks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {howWeChose.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-2xl border border-slate-900 bg-slate-950 text-slate-100 p-5 sm:p-7">
          <h2 className="text-2xl font-bold mb-5">Final verdict</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-slate-700 p-4 bg-slate-900/50">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-1">Best Overall</p>
              <p className="text-base font-semibold">Bowflex SelectTech 552</p>
            </div>
            <div className="rounded-xl border border-slate-700 p-4 bg-slate-900/50">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-1">Best Budget</p>
              <p className="text-base font-semibold">Yes4All Adjustable Dumbbells</p>
            </div>
            <div className="rounded-xl border border-slate-700 p-4 bg-slate-900/50">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-1">Best Compact</p>
              <p className="text-base font-semibold">PowerBlock Elite EXP</p>
            </div>
            <div className="rounded-xl border border-slate-700 p-4 bg-slate-900/50">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-1">Best for Beginners</p>
              <p className="text-base font-semibold">NordicTrack Select-A-Weight</p>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-5">
            If you want one confident recommendation, start with the Bowflex SelectTech 552. If your first priority is lowest cost,
            choose Yes4All. If your training space is tight, PowerBlock is the cleanest fit. If you want a more traditional dumbbell
            feel as a newer lifter, NordicTrack is the better entry point.
          </p>
          <a
            href={withAffiliateTag(topPick.affiliateUrl)}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600 transition-colors"
          >
            Check Our #1 Pick
          </a>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">Frequently asked questions</h2>
          <div className="space-y-3">
            {guide.faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">Keep researching</h2>
          <p className="text-sm text-slate-600 mb-4">
            Want more context before you buy? Explore our full category hub and related guides.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/categories/adjustable-dumbbells"
              className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-orange-500 hover:text-orange-600 transition-colors"
            >
              Adjustable Dumbbells Category
            </Link>
            <Link
              href="/guides/dumbbells-vs-kettlebells"
              className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-orange-500 hover:text-orange-600 transition-colors"
            >
              Dumbbells vs Kettlebells
            </Link>
            <Link
              href="/guides/best-home-gym-for-small-spaces"
              className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-orange-500 hover:text-orange-600 transition-colors"
            >
              Best Home Gym for Small Spaces
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
