import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Kerala Bridal Makeup Checklist 2026 | Wedding Planning Guide | NIXTUDIO',
  description: 'Download free Kerala bridal makeup checklist 2026. Complete wedding day makeup timeline, skincare routine, and essential tips for perfect bridal look.',
  keywords: [
    'bridal makeup checklist',
    'kerala wedding makeup checklist',
    'bridal makeup timeline',
    'wedding day makeup routine',
    'bridal makeup essentials',
    'kerala bride checklist',
    'wedding makeup preparation',
    'bridal beauty checklist',
    'kerala wedding planning'
  ],
  openGraph: {
    title: 'Free Kerala Bridal Makeup Checklist 2026 | Wedding Planning Guide | NIXTUDIO',
    description: 'Download free Kerala bridal makeup checklist with wedding day timeline, skincare routine, and essential tips for perfect bridal look.',
    url: 'https://nixtudio.in/bridal-makeup-checklist',
    images: [{
      url: '/images/bridal-makeup-checklist-nixtudio.jpg',
      width: 1200,
      height: 630,
      alt: 'Kerala Bridal Makeup Checklist - NIXTUDIO'
    }]
  },
  alternates: {
    canonical: 'https://nixtudio.in/bridal-makeup-checklist',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  "headline": "Free Kerala Bridal Makeup Checklist 2026",
  "description": "Comprehensive bridal makeup checklist for Kerala weddings including timeline, skincare, and essential preparation steps.",
  "author": {
    "@type": "Person",
    "name": "Nikita Liby",
    "url": "https://nixtudio.in/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "NIXTUDIO",
    "url": "https://nixtudio.in"
  }
}

export default function BridalMakeupChecklistPage() {
  const checklistCategories = [
    {
      title: "6 Months Before Wedding",
      items: [
        "Research and shortlist makeup artists",
        "Check artist availability for your date",
        "Read reviews and examine portfolios",
        "Schedule initial consultations",
        "Start skincare routine for glowing skin"
      ]
    },
    {
      title: "3 Months Before Wedding",
      items: [
        "Book your makeup artist",
        "Schedule first trial session",
        "Decide on final makeup look",
        "Order wedding accessories and jewelry",
        "Begin regular facials if needed"
      ]
    },
    {
      title: "1 Month Before Wedding",
      items: [
        "Schedule second trial session",
        "Finalize makeup look with artist",
        "Get any skincare treatments done",
        "Test allergy patches for new products",
        "Confirm wedding day timeline"
      ]
    },
    {
      title: "1 Week Before Wedding",
      items: [
        "Final trial session with full outfit",
        "Take photos of approved look",
        "Get emergency touch-up kit ready",
        "Confirm artist arrival time",
        "Prepare skincare products"
      ]
    },
    {
      title: "Wedding Day Morning",
      items: [
        "Wake up 3 hours before makeup",
        "Cleanse and moisturize face",
        "No caffeine or salty foods",
        "Wear button-down shirt",
        "Have reference photos ready",
        "Relax and stay hydrated"
      ]
    },
    {
      title: "💄 Essential Makeup Items",
      items: [
        "Lipstick and lip liner (extra)",
        "Compact powder for touch-ups",
        "Oil blotting papers",
        "Tissues and cotton pads",
        "Safety pins and bobby pins",
        "Small mirror for checks",
        "Makeup remover wipes"
      ]
    },
    {
      title: "🌟 Kerala Wedding Specific Tips",
      items: [
        "Choose waterproof/humidity-proof makeup",
        "Opt for airbrush in outdoor venues",
        "Consider traditional jewelry weight",
        "Plan for temple/church requirements",
        "Account for saree draping effects",
        "Test makeup in similar lighting",
        "Have emergency contact ready"
      ]
    }
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                FREE DOWNLOAD • Expert-Curated • Kerala Bride Approved
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ultimate Kerala <span className="text-green-600">Bridal Makeup</span> Checklist
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Complete wedding day preparation guide by NIXTUDIO. 
              Timeline, skincare, essentials, and Kerala-specific tips for your perfect bridal look.
            </p>
            
            {/* Download Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-2">📋</div>
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-gray-600">Checklist Items</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-2">⏰</div>
                <div className="text-2xl font-bold text-green-600">6 Month</div>
                <div className="text-gray-600">Timeline</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-2">•</div>
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Kerala Specific</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-green-600">Expert</div>
                <div className="text-gray-600">Verified</div>
              </div>
            </div>
            
            {/* Download CTA */}
            <div className="bg-green-600 text-white rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
              <div className="text-2xl font-bold mb-4">🎁 Download Your FREE Checklist</div>
              <p className="text-lg mb-6">
                Get the complete bridal makeup preparation guide used by 500+ Kerala brides
              </p>
              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                />
              </div>
              <button className="w-full bg-white text-green-600 px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                Download Free Checklist
              </button>
              <p className="text-sm mt-4">
                ✓ No spam • ✓ Unsubscribe anytime • ✓ Instant download
              </p>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What's Inside Your Free Checklist</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {checklistCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-green-600">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-700">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why This Checklist Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">•</div>
                <h3 className="text-xl font-bold mb-3">Proven Timeline</h3>
                <p className="text-gray-600">
                  Based on 500+ Kerala weddings. 
                  Every timeline tested and optimized for real conditions.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">•</div>
                <h3 className="text-xl font-bold mb-3">Kerala Specific</h3>
                <p className="text-gray-600">
                  Designed for Kerala's climate, venues, 
                  and cultural requirements. No generic advice.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">•</div>
                <h3 className="text-xl font-bold mb-3">Expert Verified</h3>
                <p className="text-gray-600">
                  Created by Nikita Liby with 6+ years 
                  of Kerala bridal makeup expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Brides Who Used This Checklist</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-lg font-bold mb-2">"Perfect timeline!"</div>
                <div className="text-gray-600 mb-3">- Anna Maria, Pala</div>
                <p className="text-sm text-gray-700">
                  "The checklist helped me stay organized and stress-free. 
                  Everything was planned perfectly for my wedding day."
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-lg font-bold mb-2">"Lifesaver!"</div>
                <div className="text-gray-600 mb-3">- Sarah Joseph, Kottayam</div>
                <p className="text-sm text-gray-700">
                  "Especially loved the Kerala-specific tips. 
                  The humidity-proof advice was exactly what I needed."
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-lg font-bold mb-2">"So comprehensive!"</div>
                <div className="text-gray-600 mb-3">- Deepa Rani, Pala</div>
                <p className="text-sm text-gray-700">
                  "Followed the 6-month timeline and my skin was glowing 
                  on the wedding day. Highly recommended!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Additional Wedding Resources</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">📚 Related Guides</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/kerala-wedding-makeup-guide" className="text-green-600 hover:underline">
                      Ultimate Kerala Wedding Makeup Guide →
                    </Link>
                  </li>
                  <li>
                    <Link href="/bridal-makeup-price-pala-transparent" className="text-green-600 hover:underline">
                      Transparent Pricing Guide →
                    </Link>
                  </li>
                  <li>
                    <Link href="/bridal-makeup-portfolio-before-after" className="text-green-600 hover:underline">
                      Real Transformations →
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">🎨 Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/bridal" className="text-green-600 hover:underline">
                      Bridal Makeup Packages →
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-green-600 hover:underline">
                      Complete Salon Services →
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-green-600 hover:underline">
                      Book Consultation →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready for Your Perfect Wedding?</h2>
            <p className="text-xl mb-8">Download the checklist and book NIXTUDIO for your dream bridal look</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
              >
                Book Your Makeup Artist
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition"
              >
                Get Full Checklist - Contact Us
              </Link>
            </div>
            <div className="mt-8 bg-white/10 rounded-lg p-4">
              <p className="text-lg">
                <strong>🎉 Special Bonus:</strong> Book this month and get the checklist PLUS a free skincare consultation worth ₹3,000!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
