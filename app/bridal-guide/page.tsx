import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export default function BridalGuide() {
  const topics = [
    {
      title: "Natural Bridal Makeup in Pala",
      slug: "natural-bridal-makeup-pala",
      excerpt: "Mastering the 'lit-from-within' glow optimized for the Pala climate and church ceremonies."
    },
    {
      title: "Essential Bridal Skincare in Kerala",
      slug: "bridal-skincare-kerala",
      excerpt: "How to prepare your skin for high-humidity wedding days in Kottayam and beyond."
    },
    {
      title: "Planning Premium Kottayam Weddings",
      slug: "premium-kottayam-weddings",
      excerpt: "A guide to the most exquisite venues and vendor coordination in the heart of Kerala."
    }
  ]

  return (
    <div className="min-h-screen bg-snow">
      <section className="section-padding section-base">
        <div className="max-w-4xl mx-auto px-6">
          <p className="label-caps mb-4">Official Journal</p>
          <h1 className="font-serif text-5xl lg:text-7xl mb-8">Bridal <br /><em>Guide.</em></h1>
          <p className="font-body text-xl text-espresso/70 mb-12 italic leading-relaxed">
            The definitive resource for brides in Pala and Kottayam, curated by Nikita Liby.
          </p>

          <div className="grid gap-12">
            {topics.map(topic => (
              <div key={topic.slug} className="border-b border-pink-200 pb-12">
                <p className="label-caps text-pink-400 mb-2">Topic</p>
                <h2 className="font-serif text-3xl mb-4">{topic.title}</h2>
                <p className="font-body text-espresso/80 mb-6">{topic.excerpt}</p>
                <Link href={`/bridal-guide/${topic.slug}`} className="btn-outline-gold">
                  Read Guide
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
