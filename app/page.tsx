import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import FeaturedCategories from '@/components/home/FeaturedCategories'
import PopularGuides from '@/components/home/PopularGuides'
import TrustSection from '@/components/home/TrustSection'

export const metadata: Metadata = {
  title: 'Best Home Gym Equipment Reviews & Setup Guides',
  description:
    'Find the best home gym equipment for your budget. Honest reviews and comparisons of adjustable dumbbells, squat racks, benches, and complete home gym systems.',
  alternates: {
    canonical: 'https://liftsetup.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <PopularGuides />
      <TrustSection />
    </>
  )
}
