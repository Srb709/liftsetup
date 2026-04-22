export interface Category {
  slug: string
  name: string
  description: string
  icon: string
  overview: string
  useCases: string[]
  relatedGuideSlugs: string[]
  metaTitle: string
  metaDescription: string
}

export const categories: Category[] = [
  {
    slug: 'adjustable-dumbbells',
    name: 'Adjustable Dumbbells',
    description: 'Space-saving sets that replace an entire dumbbell rack.',
    icon: '🏋️',
    overview:
      'Adjustable dumbbells are the single most efficient investment for most home gyms. One compact set covers the full range of a traditional dumbbell rack — from warm-up weights through heavy compound and isolation work — without the floor space or cost. The main differences between sets come down to adjustment speed, weight range, build durability, and how the mechanism holds up over years of use.',
    useCases: [
      'Setting up a first home gym and needing versatile free weights',
      'Limited floor space — need to cover a wide weight range compactly',
      'Intermediate lifters who train upper body with dumbbells regularly',
      'Anyone replacing a fixed dumbbell set that takes up too much room',
    ],
    relatedGuideSlugs: ['best-adjustable-dumbbells-under-300', 'dumbbells-vs-kettlebells'],
    metaTitle: 'Best Adjustable Dumbbells – Reviews & Buyer Guide',
    metaDescription:
      'Find the best adjustable dumbbells for your home gym. Honest reviews comparing weight range, adjustment speed, build quality, and value.',
  },
  {
    slug: 'home-gym-systems',
    name: 'Home Gym Systems',
    description: 'All-in-one machines for a complete workout at home.',
    icon: '💪',
    overview:
      'Home gym systems and multi-station machines offer a wide variety of exercises from a single footprint. They range from cable-based resistance machines to full Smith machine setups. While they require a dedicated space, they eliminate the need to manage multiple pieces of equipment and are a good choice for people who prefer machine-based training or want to work out without a spotter.',
    useCases: [
      'People who prefer machine-based training to free weights',
      'Anyone who wants to work out alone safely without a spotter',
      'Households where multiple people with different training needs share equipment',
      'Home gym setups in a dedicated garage or basement with adequate space',
    ],
    relatedGuideSlugs: ['best-home-gym-for-small-spaces'],
    metaTitle: 'Best Home Gym Systems – Reviews & Buyer Guide',
    metaDescription:
      'Compare the top home gym systems and multi-station machines. Find the right setup for your space and goals.',
  },
  {
    slug: 'benches',
    name: 'Weight Benches',
    description: 'Flat, adjustable, and FID benches for every need.',
    icon: '🪑',
    overview:
      'A quality weight bench dramatically expands what you can do with a set of dumbbells. It opens up pressing movements for chest and shoulders, supported rowing for back, and a stable surface for dozens of accessory exercises. The key differences between benches are stability under load, pad quality and density, adjustability range, and whether the frame folds for storage.',
    useCases: [
      'Anyone with dumbbells who wants to add pressing and rowing movements',
      'People who want to build a well-rounded upper body training setup',
      'Home gym users who need incline capability for chest and shoulder work',
      'Smaller spaces where a folding bench is needed for storage',
    ],
    relatedGuideSlugs: ['best-weight-bench-for-beginners'],
    metaTitle: 'Best Weight Benches – Reviews & Buyer Guide',
    metaDescription:
      'Find the best weight bench for your home gym. Reviews of flat, adjustable, and FID benches at every price point.',
  },
  {
    slug: 'squat-racks',
    name: 'Squat Racks',
    description: 'Power racks, squat stands, and cage systems.',
    icon: '🔩',
    overview:
      'A power rack or squat rack is the foundation of a barbell-based home gym. It allows you to safely perform squats, bench press, overhead press, and pull-ups without a spotter. Racks vary significantly in frame gauge, hole spacing, footprint, and accessory compatibility. Choosing the right one depends on your ceiling height, available space, barbell weight ambitions, and how much you plan to expand your setup over time.',
    useCases: [
      'Lifters who train with a barbell and need a safe solo setup',
      'Anyone building a long-term home gym around compound barbell movements',
      'People with garage or basement space for a permanent rack installation',
      'Intermediate to advanced lifters who have outgrown dumbbell-only training',
    ],
    relatedGuideSlugs: [],
    metaTitle: 'Best Squat Racks – Reviews & Buyer Guide',
    metaDescription:
      'Compare the best squat racks and power cages for home gyms. Find the right rack for your ceiling height, budget, and space.',
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
