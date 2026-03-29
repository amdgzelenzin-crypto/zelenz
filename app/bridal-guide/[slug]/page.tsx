import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Guide {
  title: string
  content: string
}

const guides: Record<string, Guide> = {
  "natural-bridal-makeup-pala": {
    title: "Natural Bridal Makeup in Pala",
    content: `
      <h2>Mastering the 'Lit-From-Within' Glow for Pala Brides</h2>
      <p>Natural bridal makeup is perfect for Pala's church ceremonies and traditional Kerala weddings. The key is enhancing your features while looking like yourself - just more radiant.</p>
      
      <h3>Why Natural Makeup Works for Pala Weddings</h3>
      <ul>
        <li>Perfect for church photography and natural lighting</li>
        <li>Withstands Kerala's humidity without feeling heavy</li>
        <li>Complements traditional Kerala sarees and gold jewelry</li>
        <li>Timeless - photos won't look dated in 10 years</li>
      </ul>
      
      <h3>The Natural Makeup Process</h3>
      <p>1. <strong>Skin Prep:</strong> Lightweight moisturizer and primer</p>
      <p>2. <strong>Base:</strong> Tinted moisturizer or lightweight foundation</p>
      <p>3. <strong>Eyes:</strong> Soft brow definition, neutral eyeshadows, brown liner</p>
      <p>4. <strong>Cheeks:</strong> Cream blush for natural flush</p>
      <p>5. <strong>Lips:</strong> Nude or soft pink lipstick</p>
      
      <h3>Best Products for Natural Look</h3>
      <ul>
        <li>MAC Face & Body Foundation</li>
        <li>Bobbi Brown Vitamin Enriched Face Base</li>
        <li>Charlotte Tilbury Magic Cream</li>
        <li>NARS Radiant Creamy Concealer</li>
      </ul>
    `
  },
  "bridal-skincare-kerala": {
    title: "Essential Bridal Skincare in Kerala",
    content: `
      <h2>Pre-Wedding Skincare for Kerala's Climate</h2>
      <p>Kerala's tropical climate requires special skincare preparation for your wedding day. Here's your 3-month bridal skincare routine.</p>
      
      <h3>3 Months Before</h3>
      <ul>
        <li>Start with professional facial</li>
        <li>Begin consistent cleansing routine</li>
        <li>Add Vitamin C serum daily</li>
        <li>Use gentle exfoliator 2x/week</li>
      </ul>
      
      <h3>1 Month Before</h3>
      <ul>
        <li>Introduce hyaluronic acid</li>
        <li>Start under-eye cream</li>
        <li>Weekly face masks</li>
        <li>Stay hydrated - 8 glasses water daily</li>
      </ul>
      
      <h3>1 Week Before</h3>
      <ul>
        <li>No new products</li>
        <li>Gentle cleansing only</li>
        <li>Extra hydration</li>
        <li>8 hours sleep nightly</li>
      </ul>
      
      <h3>Wedding Day</h3>
      <ul>
        <li>Cleanse with cold water</li>
        <li>Light moisturizer</li>
        <li>Lip balm</li>
        <li>No harsh treatments</li>
      </ul>
    `
  },
  "premium-kottayam-weddings": {
    title: "Planning Premium Kottayam Weddings",
    content: `
      <h2>The Ultimate Kottayam Wedding Planning Guide</h2>
      <p>Kottayam offers some of Kerala's most beautiful wedding venues and services. Here's how to plan your premium Kottayam wedding.</p>
      
      <h3>Top Wedding Venues in Kottayam</h3>
      <ul>
        <li><strong>St. Mary's Cathedral:</strong> Historic church with beautiful architecture</li>
        <li><strong>Malanadu Kudumbashree Hall:</strong> Traditional Kerala venue</li>
        <li><strong>CGI Earth Resort:</strong> Luxury outdoor venue</li>
        <li><strong>The Windsor Hotel:</strong> Premium indoor venue</li>
      </ul>
      
      <h3>Best Wedding Photographers</h3>
      <ul>
        <li>Light and Life Studios</li>
        <li>Framekraft Photography</li>
        <li>Wedding Diary</li>
        <li>Memoria Photography</li>
      </ul>
      
      <h3>Traditional Kerala Wedding Elements</h3>
      <ul>
        <li>Kasavu saree styling</li>
        <li>Traditional gold jewelry</li>
        <li>Malayalam wedding rituals</li>
        <li>Kerala sadhya catering</li>
      </ul>
      
      <h3>Wedding Timeline</h3>
      <p>6:00 AM - Bridal makeup begins</p>
      <p>8:00 AM - Getting ready photos</p>
      <p>10:00 AM - Church ceremony</p>
      <p>1:00 PM - Wedding reception</p>
      <p>7:00 PM - Evening function</p>
    `
  }
}

export default async function GuideTopic({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const guide = guides[slug]
  
  if (!guide) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#FDE8E8]">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/bridal-guide" className="mb-8 inline-flex items-center text-sm hover:opacity-70 transition" style={{color: '#3D1520', opacity: 0.7, fontFamily: 'var(--font-body)'}}>
            ← Back to Guide
          </Link>
          
          <div className="mb-12">
            <p className="text-xs font-sans tracking-widest uppercase text-[#B07880] mb-4">Official Journal</p>
            <h1 className="text-5xl lg:text-6xl mb-6" style={{fontFamily: 'var(--font-display)', letterSpacing: '0.01em', color: '#3D1520', fontWeight: 400}}>{guide.title}</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4A055] to-[#B76E79] rounded-full"></div>
          </div>
          
          <div 
            className="space-y-12 max-w-none bg-white rounded-2xl shadow-lg p-12"
            style={{fontFamily: 'var(--font-body)', color: '#3D1520', lineHeight: '1.8'}}
            dangerouslySetInnerHTML={{ __html: guide.content.replace(/<h2>/g, '<h2 class="text-3xl mb-6" style="font-family: var(--font-display); letter-spacing: 0.01em; color: #3D1520; font-weight: 400;">').replace(/<h3>/g, '<h3 class="text-2xl mb-4" style="font-family: var(--font-display); letter-spacing: 0.01em; color: #3D1520; font-weight: 400;">').replace(/<p>/g, '<p class="mb-4 text-lg">').replace(/<ul>/g, '<ul class="space-y-3">').replace(/<li>/g, '<li class="flex items-start"><span class="text-[#D4A055] mr-3 mt-1">•</span><span>').replace(/<\/li>/g, '</span></li>').replace(/<strong>/g, '<strong style="color: #B76E79;">') }}
          />
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#D4A055] to-[#B76E79] rounded-2xl p-8">
              <h3 className="text-2xl mb-4 text-white" style={{fontFamily: 'var(--font-display)', letterSpacing: '0.01em'}}>Ready to Book Your Consultation?</h3>
              <p className="text-white mb-6 opacity-90">Let's create your perfect bridal look together</p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#D4A055] rounded-full font-sans text-xs tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 font-semibold">
                Book Your Bridal Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
