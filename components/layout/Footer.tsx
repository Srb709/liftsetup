import Link from 'next/link'

const equipmentLinks = [
  { label: 'Adjustable Dumbbells', href: '/categories/adjustable-dumbbells' },
  { label: 'Home Gym Systems', href: '/categories/home-gym-systems' },
  { label: 'Weight Benches', href: '/categories/benches' },
  { label: 'Squat Racks', href: '/categories/squat-racks' },
]

const guideLinks = [
  { label: 'Best Dumbbells Under $300', href: '/guides/best-adjustable-dumbbells-under-300' },
  { label: 'Home Gym for Small Spaces', href: '/guides/best-home-gym-for-small-spaces' },
  { label: 'Dumbbells vs Kettlebells', href: '/guides/dumbbells-vs-kettlebells' },
  { label: 'Best Bench for Beginners', href: '/guides/best-weight-bench-for-beginners' },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-end gap-1">
              <span className="text-xl font-black text-stone-100">Lift</span>
              <span className="text-xl font-black text-accent-500">Setup</span>
            </Link>
            <p className="mb-4 max-w-md text-sm leading-relaxed text-zinc-400">
              LiftSetup publishes data-driven buyer guides for home gym equipment with clear recommendations, transparent trade-offs, and practical setup advice.
            </p>
            <p className="max-w-md text-xs leading-relaxed text-zinc-500">
              LiftSetup participates in affiliate programs, including Amazon Associates, and may earn a commission from qualifying purchases at no extra cost to you.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Equipment hubs</h3>
            <ul className="space-y-2.5">
              {equipmentLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-400 transition hover:text-accent-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Top guides</h3>
            <ul className="space-y-2.5">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-400 transition hover:text-accent-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} LiftSetup. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-zinc-300">
              Privacy Policy
            </Link>
            <Link href="/affiliate-disclosure" className="transition hover:text-zinc-300">
              Affiliate Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
