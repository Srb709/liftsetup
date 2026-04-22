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
    <footer className="bg-slate-950 text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-0.5 mb-4">
              <span className="text-lg font-black text-white tracking-tight">Lift</span>
              <span className="text-lg font-black text-orange-500 tracking-tight">Setup</span>
            </Link>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-4">
              Honest reviews and buying guides for home gym equipment. We help you buy once and buy right.
            </p>
            <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
              LiftSetup participates in the Amazon Associates program. We earn a commission on qualifying purchases at no extra cost to you.
            </p>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Equipment</h3>
            <ul className="space-y-2.5">
              {equipmentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Top Guides</h3>
            <ul className="space-y-2.5">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} LiftSetup. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-slate-600">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/affiliate-disclosure" className="hover:text-slate-400 transition-colors">
              Affiliate Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
