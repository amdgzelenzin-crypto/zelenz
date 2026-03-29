import Link from 'next/link'
import { notFound } from 'next/navigation'

const guides = {
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

export default function GuideTopic({ params }: { params: { slug: string } }) {
  const guide = guides[params.slug as keyof typeof guides]
  
  if (!guide) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-snow">
      <section className="section-padding section-base">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/bridal-guide" className="text-espresso/70 hover:text-espresso mb-8 inline-block">
            ← Back to Guide
          </Link>
          
          <p className="label-caps mb-4">Official Journal</p>
          <h1 className="font-serif text-5xl lg:text-7xl mb-8">{guide.title}</h1>
          
          <div 
            className="font-body text-espresso/70 prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-espresso/20">
            <Link href="/contact" className="btn-primary">
              Book Your Bridal Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
