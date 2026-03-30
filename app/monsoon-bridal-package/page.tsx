import { Metadata } from 'next'
import BridalCalculator from '@/components/BridalCalculator'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Monsoon Bridal Makeup Package Kerala | Humidity-Proof Wedding Makeup | Nixtudio',
  description: 'Specialized monsoon bridal makeup package for Kerala weddings. Airbrush technology, waterproof makeup, and sweat-proof guarantee. Perfect for humid wedding seasons.',
  openGraph: {
    title: 'Monsoon Bridal Makeup Package Kerala | Humidity-Proof Wedding Makeup',
    description: 'Specialized monsoon bridal makeup package for Kerala weddings. Airbrush technology, waterproof makeup, and sweat-proof guarantee.',
    images: ['/images/services/monsoon-bridal-makeup-kerala.webp'],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Monsoon Bridal Makeup Package",
  "description": "Specialized monsoon bridal makeup package for Kerala weddings with humidity-proof guarantee",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Nixstudio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kottayam",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "telephone": "+91-XXXXXXXXXX",
    "rating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    }
  },
  "areaServed": "Kerala",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Monsoon Bridal Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Monsoon Bridal Makeup"
        }
      }
    ]
  }
}

export default function MonsoonBridalPackage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                🌧️ Monsoon Season Special
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Monsoon Bridal Makeup
              <span className="block text-pink-600">That Never Melts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Kerala's 90% humidity + torrential rain = makeup disaster. 
              Except when you have our specialized monsoon-proof bridal package. 
              Perfect for June-September weddings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="tel:+91-XXXXXXXXXX" 
                className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                📞 Book Monsoon Consultation
              </a>
              <a 
                href="#calculator" 
                className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
              >
                💰 Calculate Package Price
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  The Monsoon Wedding Nightmare
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-red-500 text-2xl">❌</span>
                    <div>
                      <h3 className="font-semibold text-lg">Makeup Melting</h3>
                      <p className="text-gray-600">Foundation slides off in 30 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-red-500 text-2xl">❌</span>
                    <div>
                      <h3 className="font-semibold text-lg">Sweat & Oil Breakthrough</h3>
                      <p className="text-gray-600">Shiny face in every photo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-red-500 text-2xl">❌</span>
                    <div>
                      <h3 className="font-semibold text-lg">Rain Emergency</h3>
                      <p className="text-gray-600">Waterproof claims that fail</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-red-500 text-2xl">❌</span>
                    <div>
                      <h3 className="font-semibold text-lg">Photography Disaster</h3>
                      <p className="text-gray-600">Cakey, patchy makeup in close-ups</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🌧️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Kerala Reality Check</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Humidity</span>
                    <span className="text-blue-600 font-bold">90%+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Temperature</span>
                    <span className="text-blue-600 font-bold">28-32°C</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Rainfall</span>
                    <span className="text-blue-600 font-bold">Heavy</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Makeup Failure Rate</span>
                    <span className="text-red-600 font-bold">80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Monsoon-Proof Solution
              </h2>
              <p className="text-xl text-gray-600">
                Scientific techniques + premium products = 12-hour flawless finish
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">💨</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Airbrush Technology</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Micro-fine mist application</li>
                  <li>• 70% less product than traditional</li>
                  <li>• Breathable, lightweight finish</li>
                  <li>• Water and sweat resistant</li>
                  <li>• Photographs beautifully</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Seal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Industrial-grade setting spray</li>
                  <li>• Waterproof mascara & liner</li>
                  <li>• Transfer-proof lipstick</li>
                  <li>• Oil-control primer</li>
                  <li>• Touch-up kit included</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Climate-Adapted Products</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Silicone-based foundations</li>
                  <li>• Waterproof concealers</li>
                  <li>• Cream blushes & bronzers</li>
                  <li>• Powder-free finishing</li>
                  <li>• Humidity-resistant formulas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Package Details */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Monsoon Bridal Package Details
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-pink-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-pink-600 mb-6">What's Included</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Pre-bridal skin consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Airbrush bridal makeup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Waterproof eye makeup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Transfer-proof lipstick</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Professional setting spray</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Emergency touch-up kit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>On-call assistance (12 hours)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>HD photography guarantee</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">🏛️ Temple Weddings</h4>
                    <p className="text-gray-600">Long ceremonies, outdoor rituals, traditional heavy makeup</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">⛪ Church Weddings</h4>
                    <p className="text-gray-600">Indoor ceremonies, air conditioning transitions, elegant looks</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">🌴 Outdoor Venues</h4>
                    <p className="text-gray-600">Beach weddings, garden ceremonies, resort celebrations</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">🏨 Destination Weddings</h4>
                    <p className="text-gray-600">Multi-day events, travel-friendly, humidity-proof</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Monsoon Bride Success Stories
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "My wedding was in August during heavy rains. Nikita's monsoon package was a lifesaver! 
                  My makeup stayed perfect through 8 hours of ceremonies and rain."
                </p>
                <div className="font-semibold">- Priya S., Kottayam</div>
                <div className="text-sm text-gray-500">August 2024 Monsoon Bride</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I was so worried about the humidity at my outdoor wedding. The airbrush makeup was 
                  incredible - didn't melt, didn't cake. Photos looked amazing!"
                </p>
                <div className="font-semibold">- Anjali M., Ernakulam</div>
                <div className="text-sm text-gray-500">July 2024 Outdoor Bride</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The emergency touch-up kit saved me! During the reception, I just freshened up 
                  and looked perfect again. Worth every penny for monsoon weddings."
                </p>
                <div className="font-semibold">- Divya K., Idukki</div>
                <div className="text-sm text-gray-500">September 2024 Temple Bride</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Calculator */}
        <section id="calculator" className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Calculate Your Monsoon Package Price
              </h2>
              <p className="text-xl text-gray-600">
                Get instant pricing for your specific wedding needs
              </p>
            </div>
            <BridalCalculator />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Don't Let Monsoon Ruin Your Bridal Glow
            </h2>
            <p className="text-xl mb-8">
              Limited spots available for 2024-2025 monsoon season. 
              Book your consultation before our calendar fills up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+91-XXXXXXXXXX" 
                className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Call Now: +91-XXXXXXXXXX
              </a>
              <a 
                href="https://wa.me/91XXXXXXXXXX" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                💬 WhatsApp Consultation
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>⚠️ Monsoon season (June-Sep) books 3 months in advance</p>
              <p>✅ 4.9-star rating with 250+ reviews</p>
              <p>🎯 100% humidity-proof guarantee</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
