import type { MetadataRoute } from 'next'
import { categories } from '@/data/categories'
import { guides } from '@/data/guides'

const BASE_URL = 'https://liftsetup.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryUrls = categories.map((c) => ({
    url: `${BASE_URL}/categories/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const guideUrls = guides.map((g) => ({
    url: `${BASE_URL}/guides/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...guideUrls,
    ...categoryUrls,
  ]
}
