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
    <div className="min-h-screen bg-[#FDE8E8]">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-sans tracking-widest uppercase text-[#B07880] mb-4">Official Journal</p>
          <h1 className="text-5xl lg:text-7xl mb-8" style={{fontFamily: 'var(--font-display)', letterSpacing: '0.01em'}}>Bridal <br /><em className="text-[#F07080]">Guide.</em></h1>
          <p className="text-xl mb-12 italic leading-relaxed" style={{fontFamily: 'var(--font-body)', color: '#3D1520', opacity: 0.7}}>
            The definitive resource for brides in Pala and Kottayam, curated by Nikita Liby.
          </p>

          <div className="grid gap-12">
            {topics.map(topic => (
              <div key={topic.slug} className="border-b border-[rgba(249,200,200,0.3)] pb-12">
                <p className="text-xs font-sans tracking-widest uppercase text-[#EE8898] mb-2">Topic</p>
                <h2 className="text-3xl mb-4" style={{fontFamily: 'var(--font-display)', letterSpacing: '0.01em'}}>{topic.title}</h2>
                <p className="mb-6" style={{fontFamily: 'var(--font-body)', color: '#3D1520', opacity: 0.8}}>{topic.excerpt}</p>
                <Link href={`/bridal-guide/${topic.slug}`} className="inline-flex items-center px-8 py-3 border-2 border-[#D4A055] text-[#3D1520] rounded-full font-sans text-xs tracking-widest uppercase hover:bg-[#D4A055] hover:text-white transition-all duration-300">
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
