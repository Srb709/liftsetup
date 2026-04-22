import SectionHeader from '@/components/ui/SectionHeader'
import ArticleCard from '@/components/ui/ArticleCard'
import { guides } from '@/data/guides'

export default function PopularGuides() {
  const featured = guides.slice(0, 4)

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Popular Guides"
          title="Top Picks & Expert Guides"
          description="Our most-read buyer guides to help you make the right call."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {featured.map((guide) => (
            <ArticleCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  )
}
