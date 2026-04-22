export interface Category {
  slug: string
  name: string
  description: string
  icon: string
  metaTitle: string
  metaDescription: string
}

export const categories: Category[] = [
  {
    slug: 'adjustable-dumbbells',
    name: 'Adjustable Dumbbells',
    description: 'Space-saving sets that replace an entire dumbbell rack.',
    icon: '🏋️',
    metaTitle: 'Best Adjustable Dumbbells – Reviews & Buyer Guide',
    metaDescription:
      'Find the best adjustable dumbbells for your home gym. Honest reviews comparing weight range, build quality, and value.',
  },
  {
    slug: 'home-gym-systems',
    name: 'Home Gym Systems',
    description: 'All-in-one machines for a complete workout at home.',
    icon: '💪',
    metaTitle: 'Best Home Gym Systems – Reviews & Buyer Guide',
    metaDescription:
      'Compare the top home gym systems and multi-station machines. Find the right setup for your space and goals.',
  },
  {
    slug: 'benches',
    name: 'Weight Benches',
    description: 'Flat, adjustable, and FID benches for every need.',
    icon: '🪑',
    metaTitle: 'Best Weight Benches – Reviews & Buyer Guide',
    metaDescription:
      'Find the best weight bench for your home gym. Reviews of flat, adjustable, and utility benches at every price point.',
  },
  {
    slug: 'squat-racks',
    name: 'Squat Racks',
    description: 'Power racks, squat stands, and cage systems.',
    icon: '🔩',
    metaTitle: 'Best Squat Racks – Reviews & Buyer Guide',
    metaDescription:
      'Compare the best squat racks and power cages for home gyms. Find the right rack for your budget and space.',
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
