import type { Metadata } from 'next'
import Link from 'next/link'
import { guides } from '@/data/guides'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Home Gym Guides – Reviews, Comparisons & Setup Advice',
  description:
    'Browse all home gym guides. Buyer guides, product comparisons, and setup advice to help you choose the right equipment for your space and budget.',
  alternates: {
    canonical: 'https://liftsetup.com/guides',
  },
  openGraph: {
    title: 'Home Gym Guides | LiftSetup',
    description:
      'Browse all home gym guides. Buyer guides, product comparisons, and setup advice to help you choose the right equipment.',
  },
}

export default function GuidesPage() {
  return (
    <div className="bg-stone-100 py-14 sm:py-16">
      <div className="container-content">
        <nav className="mb-8 flex items-center gap-2 text-xs text-zinc-500">
          <Link href="/" className="transition hover:text-accent-700">
            Home
          </Link>
          <span>/</span>
          <span className="text-zinc-700">Guides</span>
        </nav>

        <section className="section-shell p-7 sm:p-10">
          <SectionHeader
            label="Guide library"
            title="Buyer guides, comparisons, and setup paths"
            description="Explore structured decision guides with clear recommendations, ranked picks, and practical context for budget, space, and training goals."
            align="left"
          />
        </section>

        <div className="mt-8 grid gap-5">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="section-shell group flex flex-col gap-4 p-6 sm:flex-row sm:items-start"
            >
              <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 sm:w-52">
                <span className="chip">{guide.category}</span>
              </div>

              <div className="flex flex-1 flex-col">
                <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
                  <span className="font-medium uppercase tracking-[0.12em]">{guide.category}</span>
                  <span>{guide.readTime}</span>
                </div>

                <h2 className="mb-2 text-xl font-semibold leading-snug text-zinc-950 transition group-hover:text-accent-700">
                  {guide.title}
                </h2>

                <p className="mb-4 text-sm leading-7 text-zinc-600">{guide.description}</p>

                <span className="mt-auto text-sm font-semibold text-accent-700">Read guide →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="section-shell mt-10 p-7 sm:p-8">
          <h2 className="text-2xl font-semibold text-zinc-950">Need product hubs instead?</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-600">
            Browse equipment categories to see featured picks, connected guides, and product-level comparisons organized by training intent.
          </p>
          <Link href="/categories" className="btn-primary mt-5 bg-accent-600 hover:bg-accent-500">
            Browse equipment categories
          </Link>
        </div>
      </div>
    </div>
  )
}
