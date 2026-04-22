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
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <span className="text-xl font-bold text-white">Lift</span>
              <span className="text-xl font-bold text-orange-500">Setup</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Helping you build the perfect home gym without wasting money. Honest reviews, real comparisons, practical
              guides.
            </p>
            <p className="text-xs text-slate-600 mt-4 leading-relaxed max-w-xs">
              LiftSetup participates in affiliate programs. We may earn a commission when you click links and make
              purchases, at no additional cost to you.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Equipment</h3>
            <ul className="space-y-2.5 text-sm">
              {equipmentLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Guides</h3>
            <ul className="space-y-2.5 text-sm">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LiftSetup. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/affiliate-disclosure" className="hover:text-slate-300 transition-colors">
              Affiliate Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
