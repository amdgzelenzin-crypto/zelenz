import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bridal Makeup Before After Portfolio | Real Transformations | NIXTUDIO',
  description: 'Real bridal makeup before and after transformations by NIXTUDIO. See actual Kerala brides makeup transformations, HD & airbrush results, and book your perfect look.',
  keywords: [
    'bridal makeup before after',
    'bridal makeup transformations',
    'kerala bridal makeup portfolio',
    'bridal makeup results',
    'before after makeup photos',
    'bridal makeup real brides',
    'nixtudio portfolio',
    'bridal makeup proof',
    'kerala wedding makeup photos',
    'bridal makeover photos'
  ],
  openGraph: {
    title: 'Bridal Makeup Before After Portfolio | Real Transformations | NIXTUDIO',
    description: 'Real bridal makeup before and after transformations by NIXTUDIO. See actual Kerala brides makeup transformations and results.',
    url: 'https://nixtudio.in/bridal-makeup-portfolio-before-after',
    images: [{
      url: '/images/bridal-makeup-portfolio-before-after-nixtudio.jpg',
      width: 1200,
      height: 630,
      alt: 'Bridal Makeup Before After Portfolio - NIXTUDIO'
    }]
  },
  alternates: {
    canonical: 'https://nixtudio.in/bridal-makeup-portfolio-before-after',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Bridal Makeup Before After Portfolio",
  "description": "Real bridal makeup transformations and before after photos by NIXTUDIO in Kerala",
  "provider": {
    "@type": "LocalBusiness",
    "name": "NIXTUDIO",
    "url": "https://nixtudio.in"
  }
}

export default function BridalMakeupPortfolioPage() {
  const transformations = [
    {
      id: 1,
      brideName: "Anna Maria",
      location: "St. Thomas Church, Pala",
      before: "/images/portfolio/anna-before.jpg",
      after: "/images/portfolio/anna-after.jpg",
      services: ["HD Makeup", "Hair Styling", "Jewelry Coordination"],
      package: "Luxury Bridal Package",
      testimonial: "Nikita transformed me completely! The makeup lasted 16+ hours through the entire wedding ceremony and reception."
    },
    {
      id: 2,
      brideName: "Sarah Joseph",
      location: "St. Mary's Cathedral, Kottayam",
      before: "/images/portfolio/sarah-before.jpg",
      after: "/images/portfolio/sarah-after.jpg",
      services: ["Airbrush Makeup", "Traditional Look", "Contemporary Fusion"],
      package: "Wedding Day Bridal Makeup",
      testimonial: "Perfect for Kerala's humid weather! Everyone commented on how natural and flawless my makeup looked."
    },
    {
      id: 3,
      brideName: "Deepa Rani",
      location: "Sacred Heart Church, Pala",
      before: "/images/portfolio/deepa-before.jpg",
      after: "/images/portfolio/deepa-after.jpg",
      services: ["HD Makeup", "Traditional Kerala Look", "Gold Jewelry Styling"],
      package: "Traditional Bridal Package",
      testimonial: "Nikita understood exactly what I wanted. The traditional Kerala look with modern touches was perfect!"
    },
    {
      id: 4,
      brideName: "Priya Nair",
      location: "Lourdes Church, Kottayam",
      before: "/images/portfolio/priya-before.jpg",
      after: "/images/portfolio/priya-after.jpg",
      services: ["Airbrush Makeup", "Minimalist Look", "Contemporary Style"],
      package: "Modern Bridal Package",
      testimonial: "The airbrush makeup was incredible! Photos came out amazing and makeup stayed perfect throughout."
    },
    {
      id: 5,
      brideName: "Rebecca Thomas",
      location: "St. Joseph's Church, Pala",
      before: "/images/portfolio/rebecca-before.jpg",
      after: "/images/portfolio/rebecca-after.jpg",
      services: ["HD Makeup", "Dramatic Eyes", "Bold Lip"],
      package: "Luxury Bridal Package",
      testimonial: "Absolutely stunning! Nikita created the exact look I wanted. Felt like a princess on my wedding day."
    },
    {
      id: 6,
      brideName: "Anjali Menon",
      location: "St. George's Church, Kottayam",
      before: "/images/portfolio/anjali-before.jpg",
      after: "/images/portfolio/anjali-after.jpg",
      services: ["Airbrush Makeup", "Natural Dewy Look", "Soft Glam"],
      package: "Natural Bridal Package",
      testimonial: "So natural yet glamorous! The makeup enhanced my features without looking heavy. Perfect for my outdoor wedding."
    }
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">
                Real Kerala Brides • Real Transformations
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Bridal Makeup <span className="text-pink-600">Before & After</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              See the actual transformations of Kerala brides by NIXTUDIO. 
              Real photos, real results, real happiness from our HD and airbrush makeup expertise.
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-2">📸</div>
                <div className="text-2xl font-bold text-pink-600">500+</div>
                <div className="text-gray-600">Happy Brides</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-pink-600">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-2xl font-bold text-pink-600">100%</div>
                <div className="text-gray-600">Real Photos</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl mb-2">💕</div>
                <div className="text-2xl font-bold text-pink-600">16+ hrs</div>
                <div className="text-gray-600">Makeup Lasting</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition">
                All Transformations
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
                HD Makeup
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
                Airbrush Makeup
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
                Traditional Look
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
                Modern Look
              </button>
            </div>
          </div>
        </section>

        {/* Transformations Grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Real Kerala Bride Transformations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformations.map((transformation) => (
                <div key={transformation.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                  {/* Before/After Images */}
                  <div className="grid grid-cols-2 relative">
                    <div className="relative">
                      <Image
                        src={transformation.before}
                        alt={`${transformation.brideName} before makeup`}
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded text-xs font-bold">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={transformation.after}
                        alt={`${transformation.brideName} after makeup`}
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-pink-600 text-white px-2 py-1 rounded text-xs font-bold">
                        AFTER
                      </div>
                    </div>
                  </div>
                  
                  {/* Bride Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{transformation.brideName}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <span className="text-pink-600 mr-2">📍</span>
                      <span className="text-sm">{transformation.location}</span>
                    </div>
                    
                    {/* Services */}
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Services:</div>
                      <div className="flex flex-wrap gap-2">
                        {transformation.services.map((service, index) => (
                          <span key={index} className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Package */}
                    <div className="mb-4">
                      <div className="bg-pink-50 rounded-lg p-3">
                        <div className="text-sm font-semibold text-pink-800">{transformation.package}</div>
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-700 italic">
                        "{transformation.testimonial}"
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Our Transformations Stand Out</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
                <p className="text-gray-600">
                  Every bride gets a customized look based on their features, outfit, and wedding theme. 
                  No one-size-fits-all makeup here.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold mb-3">Kerala Weather Proof</h3>
                <p className="text-gray-600">
                  Specialized techniques and products that last through Kerala's humidity and heat. 
                  Your makeup stays perfect from start to finish.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-bold mb-3">Photography Ready</h3>
                <p className="text-gray-600">
                  Makeup designed to look stunning in photos and videos. 
                  No flashback, perfect coverage, and beautiful colors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Your Transformation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-pink-100 text-pink-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Skin analysis, outfit discussion, and look planning
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 text-pink-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Trial Session</h3>
                <p className="text-gray-600 text-sm">
                  Test the look, make adjustments, ensure perfection
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 text-pink-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Wedding Day</h3>
                <p className="text-gray-600 text-sm">
                  Professional application with premium products
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 text-pink-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">Perfect Result</h3>
                <p className="text-gray-600 text-sm">
                  Stunning look that lasts 16+ hours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready for Your Dream Transformation?</h2>
            <p className="text-xl mb-8">Join 500+ happy Kerala brides who trusted NIXTUDIO for their special day</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-pink-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
              >
                Book Your Transformation
              </Link>
              <Link 
                href="/bridal-makeup-price-pala-transparent" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-pink-600 transition"
              >
                View Packages
              </Link>
            </div>
            <div className="mt-8 bg-white/10 rounded-lg p-4">
              <p className="text-lg">
                <strong>🎁 Limited Time Offer:</strong> Book this month and get a free pre-bridal skincare treatment worth ₹5,000!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
