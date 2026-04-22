export interface Guide {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  metaTitle: string
  metaDescription: string
}

export const guides: Guide[] = [
  {
    slug: 'best-adjustable-dumbbells-under-300',
    title: 'Best Adjustable Dumbbells Under $300',
    description:
      'Our top picks for adjustable dumbbells that deliver real performance without breaking the bank.',
    category: 'Buyer Guide',
    readTime: '8 min read',
    metaTitle: 'Best Adjustable Dumbbells Under $300 (2025 Guide)',
    metaDescription:
      'Find the best adjustable dumbbells under $300. We compare weight range, build quality, and value to help you pick the right set.',
  },
  {
    slug: 'best-home-gym-for-small-spaces',
    title: 'Best Home Gym Setup for Small Spaces',
    description:
      'How to build an effective home gym even with limited square footage. The right gear makes all the difference.',
    category: 'Setup Guide',
    readTime: '10 min read',
    metaTitle: 'Best Home Gym for Small Spaces (2025 Guide)',
    metaDescription:
      'Build a complete home gym even in a small space. Our picks for compact, versatile gear that maximizes a limited footprint.',
  },
  {
    slug: 'dumbbells-vs-kettlebells',
    title: 'Dumbbells vs Kettlebells: Which Should You Buy?',
    description:
      'An honest comparison of both tools — when each makes sense and how to choose for your goals.',
    category: 'Comparison',
    readTime: '7 min read',
    metaTitle: 'Dumbbells vs Kettlebells: Which Is Better for Home Gyms?',
    metaDescription:
      'Dumbbells or kettlebells — which is the smarter buy for your home gym? A direct comparison covering training style, space, and cost.',
  },
  {
    slug: 'best-weight-bench-for-beginners',
    title: 'Best Weight Bench for Beginners',
    description:
      'New to training at home? These benches offer the best combination of safety, stability, and value.',
    category: 'Buyer Guide',
    readTime: '6 min read',
    metaTitle: 'Best Weight Bench for Beginners (2025 Guide)',
    metaDescription:
      'Find the best weight bench for beginners. Stable, affordable options for starting your home gym the right way.',
  },
]

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}
