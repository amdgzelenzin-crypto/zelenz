import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bridal Makeup Price Pala 2026 | Complete Transparent Pricing | NIXTUDIO',
  description: 'Complete bridal makeup price list in Pala, Kerala. NIXTUDIO offers transparent pricing for HD, airbrush, luxury bridal makeup packages starting ₹14,500. No hidden costs.',
  keywords: [
    'bridal makeup price pala',
    'bridal makeup cost pala',
    'bridal makeup packages pala',
    'bridal makeup rates pala kerala',
    'nixtudio price list',
    'bridal makeup charges pala',
    'luxury bridal makeup price pala',
    'bridal makeup price list kerala',
    'affordable bridal makeup pala',
    'premium bridal makeup cost'
  ],
  openGraph: {
    title: 'Bridal Makeup Price Pala 2026 | Complete Transparent Pricing | NIXTUDIO',
    description: 'Complete bridal makeup price list in Pala, Kerala. HD, airbrush, luxury packages with transparent pricing. No hidden costs.',
    url: 'https://nixtudio.in/bridal-makeup-price-pala-transparent',
    images: [{
      url: '/images/bridal-makeup-price-pala-transparent-nixtudio.jpg',
      width: 1200,
      height: 630,
      alt: 'Bridal Makeup Price Pala - NIXTUDIO Transparent Pricing'
    }]
  },
  alternates: {
    canonical: 'https://nixtudio.in/bridal-makeup-price-pala-transparent',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bridal Makeup Price Pala - NIXTUDIO",
  "description": "Transparent pricing for bridal makeup services in Pala, Kerala. HD, airbrush, and luxury packages with no hidden costs.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "NIXTUDIO",
    "url": "https://nixtudio.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pala",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    }
  },
  "serviceType": "Bridal Makeup Services",
  "offers": [
    {
      "@type": "Offer",
      "name": "Engagement Makeup Package",
      "description": "Professional engagement makeup with HD techniques",
      "price": "14500",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer", 
      "name": "Wedding Day Bridal Makeup",
      "description": "Complete wedding day makeup with HD & airbrush options",
      "price": "27500",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Luxury Bridal Package",
      "description": "Premium luxury bridal makeup with all services",
      "price": "45000",
      "priceCurrency": "INR", 
      "availability": "https://schema.org/InStock"
    }
  ]
}

export default function BridalMakeupPricePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">
                100% Transparent Pricing - No Hidden Costs
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Bridal Makeup Price <span className="text-pink-600">Pala 2026</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete transparent pricing for all bridal makeup services in Pala, Kerala. 
              Premium HD & airbrush makeup by Nikita Liby with no hidden charges.
            </p>
            
            {/* Price Overview Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-200">
                <div className="text-4xl mb-4">💕</div>
                <h3 className="text-2xl font-bold mb-2">Engagement</h3>
                <div className="text-3xl font-bold text-pink-600 mb-4">₹14,500</div>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>✓ HD Foundation Application</li>
                  <li>✓ Waterproof Makeup</li>
                  <li>✓ 4-Hour Touch-up Kit</li>
                  <li>✓ Pre-Makeup Skincare</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-300 transform scale-105">
                <div className="text-4xl mb-4">👰</div>
                <h3 className="text-2xl font-bold mb-2">Wedding Day</h3>
                <div className="text-3xl font-bold text-pink-600 mb-4">₹27,500</div>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>✓ HD + Airbrush Options</li>
                  <li>✓ 16-Hour Lasting</li>
                  <li>✓ 2 Trial Sessions</li>
                  <li>✓ Emergency Artist Visit</li>
                </ul>
                <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold mt-4">
                  MOST POPULAR
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-200">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-2xl font-bold mb-2">Luxury Package</h3>
                <div className="text-3xl font-bold text-pink-600 mb-4">₹45,000</div>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>✓ Complete Wedding Services</li>
                  <li>✓ Engagement + Wedding</li>
                  <li>✓ Reception Makeup</li>
                  <li>✓ Home Service Available</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 max-w-4xl mx-auto">
              <h4 className="text-xl font-bold mb-3">🔥 Why Our Pricing is Transparent:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>✅ <strong>No Hidden Costs</strong> - What you see is what you pay</div>
                <div>✅ <strong>Premium Products</strong> - MAC, Bobbi Brown, Charlotte Tilbury</div>
                <div>✅ <strong>6+ Years Experience</strong> - 500+ Happy Brides</div>
                <div>✅ <strong>Satisfaction Guarantee</strong> - Perfection or Redo</div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Pricing Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Complete Price Breakdown</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Service Breakdown */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Individual Services</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>HD Bridal Makeup</span>
                    <span className="font-bold text-xl">₹22,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>Airbrush Bridal Makeup</span>
                    <span className="font-bold text-xl">₹25,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>Party Makeup (Guest)</span>
                    <span className="font-bold text-xl">₹8,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>Hair Styling</span>
                    <span className="font-bold text-xl">₹3,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span>Nail Extensions</span>
                    <span className="font-bold text-xl">₹2,000</span>
                  </div>
                </div>
              </div>
              
              {/* What's Included */}
              <div>
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <div className="bg-pink-50 rounded-xl p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">✓</span>
                      <span><strong>Pre-Makeup Consultation</strong> - Skin analysis & look planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">✓</span>
                      <span><strong>Premium Products</strong> - International brands only</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">✓</span>
                      <span><strong>Waterproof Formula</strong> - Perfect for Kerala humidity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">✓</span>
                      <span><strong>Touch-up Kit</strong> - Emergency essentials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-600 mr-2">✓</span>
                      <span><strong>Photography Testing</strong> - Looks perfect in photos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">How We Compare</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg">
                <thead>
                  <tr className="bg-pink-600 text-white">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">NIXTUDIO</th>
                    <th className="p-4 text-center">Others</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Experienced Artist</td>
                    <td className="p-4 text-center text-green-600 font-bold">✓ 6+ Years</td>
                    <td className="p-4 text-center text-gray-500">Variable</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Transparent Pricing</td>
                    <td className="p-4 text-center text-green-600 font-bold">✓ Yes</td>
                    <td className="p-4 text-center text-red-600 font-bold">✗ Hidden Costs</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Premium Products</td>
                    <td className="p-4 text-center text-green-600 font-bold">✓ International</td>
                    <td className="p-4 text-center text-gray-500">Standard</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Satisfaction Guarantee</td>
                    <td className="p-4 text-center text-green-600 font-bold">✓ Yes</td>
                    <td className="p-4 text-center text-gray-500">Rare</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Trial Sessions</td>
                    <td className="p-4 text-center text-green-600 font-bold">✓ 2 Included</td>
                    <td className="p-4 text-center text-red-600 font-bold">✗ Extra Cost</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready for Your Perfect Bridal Look?</h2>
            <p className="text-xl mb-8">Book your consultation today and lock in your wedding date</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-pink-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
              >
                Book Consultation
              </Link>
              <Link 
                href="/gallery" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-pink-600 transition"
              >
                View Portfolio
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2">
              <span>📞</span>
              <span className="text-lg">Call: +91 70347 26402</span>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
