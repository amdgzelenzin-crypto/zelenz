import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

// DEPLOYMENT TRIGGER: Pages are built and ready - Vercel should deploy these

export const metadata: Metadata = {
  title: 'Bridal Makeup Pala | Expert HD & Airbrush Wedding Makeup | NIXTUDIO',
  description: 'Professional bridal makeup artist in Pala, Kerala. Specializing in HD & airbrush makeup for Kerala weddings. 6+ years experience • Transparent pricing • Local expertise.',
  keywords: [
    'bridal makeup pala',
    'bridal makeup artist pala',
    'pala wedding makeup',
    'bridal makeup kerala',
    'airbrush makeup pala',
    'hd bridal makeup pala',
    'best bridal makeup pala',
    'bridal makeup packages pala',
    'kerala wedding makeup artist',
    'bridal makeup studio pala'
  ],
  openGraph: {
    title: 'Bridal Makeup Pala | Expert HD & Airbrush Wedding Makeup | NIXTUDIO',
    description: 'Professional bridal makeup artist in Pala, Kerala. 6+ years experience • Transparent pricing • Local expertise.',
    url: 'https://nixtudio.in/bridal-makeup-pala',
    images: [{
      url: '/images/bridal-makeup-pala-nixtudio.jpg',
      width: 1200,
      height: 630,
      alt: 'Bridal Makeup Pala - NIXTUDIO'
    }]
  },
  alternates: {
    canonical: 'https://nixtudio.in/bridal-makeup-pala',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NIXTUDIO Bridal Makeup",
  "description": "Professional bridal makeup artist in Pala, Kerala specializing in HD and airbrush makeup for weddings",
  "url": "https://nixtudio.in",
  "telephone": "+917034726402",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pala",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "priceRange": "₹₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  },
  "serviceType": ["Bridal Makeup", "HD Makeup", "Airbrush Makeup", "Wedding Makeup"],
  "areaServed": "Pala, Kottayam, Kerala"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does bridal makeup cost in Pala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bridal makeup in Pala ranges from ₹14,500 to ₹45,000 depending on the package. HD makeup starts at ₹22,000, while airbrush makeup starts at ₹25,000. Luxury packages with full services can go up to ₹45,000."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between HD and Airbrush makeup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HD makeup uses traditional application methods with HD-compatible products, lasting 12-14 hours. Airbrush makeup uses compressed air for application, lasting 16+ hours and being more suitable for Kerala's humid climate and outdoor weddings."
      }
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book bridal makeup in Pala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For peak wedding season (November to February), book 6-8 months in advance. For off-season, 3-4 months is sufficient. Popular dates get booked quickly, so early booking is recommended."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide makeup trials before the wedding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide 2 complimentary trial sessions with all bridal packages. The first trial helps finalize the look, and the second ensures perfection with the actual wedding outfit and jewelry."
      }
    },
    {
      "@type": "Question",
      "name": "What makeup products do you use for bridal makeup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use premium international brands including MAC, Bobbi Brown, Charlotte Tilbury, NARS, and Fenty Beauty. All products are waterproof, long-lasting, and suitable for Kerala's climate."
      }
    },
    {
      "@type": "Question",
      "name": "Do you travel to wedding venues outside Pala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide services across Kerala including Kottayam, Ernakulam, Thrissur, and other districts. Travel charges apply for venues beyond 50km from Pala."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in a typical bridal makeup package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard bridal package includes pre-makeup consultation, 2 trial sessions, wedding day makeup, hair styling, draping assistance, touch-up kit, and emergency availability. Premium packages include additional services."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle makeup for Kerala's humid climate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in humidity-proof makeup using airbrush techniques, waterproof products, and setting sprays. Our makeup is designed to last 16+ hours even in Kerala's tropical climate and outdoor venues."
      }
    }
  ]
}

export default function BridalMakeupPalaPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">
                Pala's #1 Bridal Makeup Artist • 500+ Happy Brides • 4.9/5 Rating
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center" style={{fontFamily: 'var(--font-display)', letterSpacing: '0.01em'}}>
              Bridal Makeup <span className="text-[#D4A055]">Pala</span> | Wedding Makeup Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Professional makeup artist based in Pala, Kerala. Specializing in HD & airbrush techniques 
              that work well in our tropical climate. Serving local brides with personalized makeup services.
            </p>
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-2">👰</div>
                <div className="text-2xl font-bold text-[#D4A055]">500+</div>
                <div className="text-gray-600">Happy Brides</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-[#D4A055]">4.9/5</div>
                <div className="text-gray-600">Google Rating</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-2xl font-bold text-[#D4A055]">HD &</div>
                <div className="text-gray-600">Airbrush Expert</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl mb-2">•</div>
                <div className="text-2xl font-bold text-[#D4A055]">Pala</div>
                <div className="text-gray-600">Based</div>
              </div>
            </div>
            
            {/* Primary CTA */}
            <div className="text-center mb-8">
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 inline-block mb-6">
                <p className="text-pink-800">Weekend dates fill up quickly - contact early to check availability</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/917034726402?text=Hi%20Nikita!%20I'm%20interested%20in%20bridal%20makeup%20for%20my%20wedding.%20When%20are%20you%20available?"
                  className="bg-[#D4A055] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B8944A] transition flex items-center justify-center gap-2"
                >
                  <span>💬</span> Check Availability on WhatsApp
                </a>
                <Link 
                  href="/contact"
                  className="bg-[#D4A055] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#B8944A] transition"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12" style={{fontFamily: 'var(--font-display)', letterSpacing: '0.01em'}}>Wedding Makeup Services in Pala</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-4 text-[#B76E79]">HD Bridal Makeup</h3>
                <p className="text-gray-700 mb-6">
                  High-definition makeup designed for Kerala wedding photography. 
                  Uses camera-friendly products that maintain their look through long ceremonies and receptions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">12-14 hours lasting</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">Camera-ready finish</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">Traditional & modern looks</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-[#D4A055] mb-2">₹22,000 - ₹27,500</div>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#D4A055] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#B8944A] transition text-center"
                >
                  Book HD Makeup
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200">
                <div className="text-3xl mb-4">💨</div>
                <h3 className="text-2xl font-bold mb-4 text-[#B76E79]">Airbrush Bridal Makeup</h3>
                <p className="text-gray-700 mb-6">
                  Advanced airbrush technology perfect for Kerala's humid climate and outdoor weddings. 
                  Lightweight, waterproof, and lasts 16+ hours without touch-ups.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">16+ hours lasting</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">Humidity-proof</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">Perfect for outdoor venues</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-[#D4A055] mb-2">₹25,000 - ₹32,000</div>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#D4A055] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#B8944A] transition text-center"
                >
                  Book Airbrush Makeup
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                <div className="text-3xl mb-4">👑</div>
                <h3 className="text-2xl font-bold mb-4 text-[#B76E79]">Luxury Bridal Package</h3>
                <p className="text-gray-700 mb-6">
                  Complete wedding day transformation with premium services. 
                  Includes engagement makeup, reception makeup, and family makeup services.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">3-day coverage</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">Family makeup included</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-sm">VIP treatment</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-[#D4A055] mb-2">₹35,000 - ₹45,000</div>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#D4A055] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#B8944A] transition text-center"
                >
                  Book Luxury Package
                </Link>
              </div>
            </div>
            
            {/* What's Included */}
            <div className="bg-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{fontFamily: 'var(--font-display)', letterSpacing: '0.01em'}}>What's Included in Every Package</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-[#B76E79]">🎨 Pre-Wedding</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 2 Complimentary trial sessions</li>
                    <li>• Skin analysis & consultation</li>
                    <li>• Skincare routine guidance</li>
                    <li>• Look planning & mood board</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-[#B76E79]">💍 Wedding Day</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Professional makeup application</li>
                    <li>• Hair styling & setting</li>
                    <li>• Saree draping assistance</li>
                    <li>• Jewelry coordination</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-[#B76E79]">🎁 Post-Wedding</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Touch-up kit provided</li>
                    <li>• Emergency availability</li>
                    <li>• Aftercare guidance</li>
                    <li>• Photo retouching tips</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">HD vs Airbrush Makeup: Complete Comparison</h2>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#D4A055] text-white">
                      <th className="p-4 text-left">Feature</th>
                      <th className="p-4 text-center">HD Makeup</th>
                      <th className="p-4 text-center">Airbrush Makeup</th>
                      <th className="p-4 text-center">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Application Method</td>
                      <td className="p-4 text-center">Brush & Sponge</td>
                      <td className="p-4 text-center">Air Compressor</td>
                      <td className="p-4 text-center text-sm">Both excellent</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Finish</td>
                      <td className="p-4 text-center">Matte to Dewy</td>
                      <td className="p-4 text-center">Airbrushed Perfection</td>
                      <td className="p-4 text-center text-sm">Airbrush for outdoor</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Longevity</td>
                      <td className="p-4 text-center">12-14 hours</td>
                      <td className="p-4 text-center">16+ hours</td>
                      <td className="p-4 text-center text-sm">Airbrush for long events</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Climate Suitability</td>
                      <td className="p-4 text-center">Good for indoor</td>
                      <td className="p-4 text-center">Perfect for humidity</td>
                      <td className="p-4 text-center text-sm">Airbrush for Kerala</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Photography</td>
                      <td className="p-4 text-center">Excellent</td>
                      <td className="p-4 text-center">Flawless</td>
                      <td className="p-4 text-center text-sm">Both camera-ready</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Skin Type</td>
                      <td className="p-4 text-center">All skin types</td>
                      <td className="p-4 text-center">Best for oily skin</td>
                      <td className="p-4 text-center text-sm">Consult for custom</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Price Range</td>
                      <td className="p-4 text-center font-bold">₹22,000-27,500</td>
                      <td className="p-4 text-center font-bold">₹25,000-32,000</td>
                      <td className="p-4 text-center text-sm">Value for money</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-purple-50 p-6">
                <h4 className="text-xl font-bold mb-3">What works for Pala weddings:</h4>
                <p className="text-gray-700">
                  For <strong>indoor church weddings in Pala</strong> like St. Thomas or St. Mary's, the lighting is usually 
                  controlled, so HD makeup works beautifully and is more budget-friendly. 
                  For <strong>outdoor venues or during monsoon season</strong>, airbrush makeup handles the humidity better 
                  - it doesn't feel heavy and stays put through 16+ hours of celebration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose NIXTUDIO for Your Pala Wedding</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#B76E79]">Local Wedding Experience</h3>
                <p className="text-gray-700 mb-4">
                  Working regularly in Pala means I understand the specific challenges of our local venues. 
                  Church lighting conditions, temple makeup requirements, and how humidity affects different makeup types.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>6+ years serving Pala and surrounding areas</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>Experience with Kerala traditional bridal looks</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>Familiar with all major Pala wedding venues</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#B76E79]">Quality Products</h3>
                <p className="text-gray-700 mb-4">
                  I use specific brands that perform well in Kerala's climate - MAC for their staying power, 
                  Charlotte Tilbury for photography, and Bobbi Brown for natural coverage. 
                  Each product is tested for our local conditions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>MAC, Bobbi Brown, Charlotte Tilbury products</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>100% authentic and cruelty-free makeup</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>Regularly updated with latest techniques</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#B76E79]">🏆 Proven Results</h3>
                <p className="text-gray-700 mb-4">
                  500+ happy brides across Kerala, 4.9/5 Google rating, and consistent quality work. 
                  Every bride gets the same careful process: skin analysis, product testing, and practice sessions 
                  until we achieve the exact look you want.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>500+ successfully completed weddings</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>500+ 5-star Google reviews</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>6+ years of consistent quality</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#B76E79]">🤝 Personal Process</h3>
                <p className="text-gray-700 mb-4">
                  We start with a consultation about your outfit, venue, and preferences. 
                  First trial session tests the basic look, second trial perfects it with your actual jewelry. 
                  I'm available by phone for any questions leading up to your wedding day.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>2 complimentary trial sessions</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>Customized look for each bride</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#B76E79] mr-3">•</span>
                    <span>24/7 support before wedding day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Pala Brides Share Their Experience</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Nikita transformed me completely! The airbrush makeup lasted through my entire outdoor wedding 
                  in Pala despite the humidity. Everyone commented on how natural and flawless I looked."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#B76E79] font-bold">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold">Anna Maria</div>
                    <div className="text-sm text-gray-600">St. Thomas Church, Pala</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Best decision for my Kerala wedding! The HD makeup looked stunning in photos and lasted 
                  14+ hours. Nikita understood exactly what I wanted for my traditional look."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#B76E79] font-bold">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Joseph</div>
                    <div className="text-sm text-gray-600">St. Mary's Cathedral, Kottayam</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Professional, punctual, and detail-oriented! The trial sessions helped me feel confident. 
                  The makeup was perfect for my temple wedding in Pala. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#B76E79] font-bold">DR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Deepa Rani</div>
                    <div className="text-sm text-gray-600">Hindu Temple, Pala</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/bridal-makeup-portfolio-before-after"
                className="text-[#B76E79] font-semibold hover:underline"
              >
                View Before & After Transformations →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">How much does bridal makeup cost in Pala?</h3>
                <p className="text-gray-700">
                  Bridal makeup in Pala ranges from ₹14,500 to ₹45,000 depending on the package and services included. 
                  HD makeup starts at ₹22,000, while airbrush makeup starts at ₹25,000. Luxury packages with full services 
                  can go up to ₹45,000. All packages include 2 trial sessions and touch-up kit.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">What is the difference between HD and Airbrush makeup?</h3>
                <p className="text-gray-700">
                  HD makeup uses traditional application methods with HD-compatible products, lasting 12-14 hours. 
                  Airbrush makeup uses compressed air for application, lasting 16+ hours and being more suitable for 
                  Kerala's humid climate and outdoor weddings. Airbrush provides a lighter, more breathable feel.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">How far in advance should I book bridal makeup in Pala?</h3>
                <p className="text-gray-700">
                  For peak wedding season (November to February), book 6-8 months in advance. For off-season, 
                  3-4 months is sufficient. Popular dates get booked quickly, so early booking is recommended 
                  to secure your preferred date and time.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Do you provide makeup trials before the wedding?</h3>
                <p className="text-gray-700">
                  Yes, we provide 2 complimentary trial sessions with all bridal packages. The first trial helps 
                  finalize the look, and the second ensures perfection with the actual wedding outfit and jewelry. 
                  Additional trials can be arranged if needed.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">What makeup products do you use for bridal makeup?</h3>
                <p className="text-gray-700">
                  We use premium international brands including MAC, Bobbi Brown, Charlotte Tilbury, NARS, 
                  and Fenty Beauty. All products are waterproof, long-lasting, and suitable for Kerala's climate. 
                  We can accommodate specific brand preferences if needed.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Do you travel to wedding venues outside Pala?</h3>
                <p className="text-gray-700">
                  Yes, we provide services across Kerala including Kottayam, Ernakulam, Thrissur, and other districts. 
                  Travel charges apply for venues beyond 50km from Pala. We have experience with all major wedding 
                  venues across Kerala.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">What is included in a typical bridal makeup package?</h3>
                <p className="text-gray-700">
                  A standard bridal package includes pre-makeup consultation, 2 trial sessions, wedding day makeup, 
                  hair styling, draping assistance, touch-up kit, and emergency availability. Premium packages 
                  include additional services like engagement makeup, reception makeup, and family makeup.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">How do you handle makeup for Kerala's humid climate?</h3>
                <p className="text-gray-700">
                  We specialize in humidity-proof makeup using airbrush techniques, waterproof products, and 
                  professional setting sprays. Our makeup is designed to last 16+ hours even in Kerala's tropical 
                  climate and outdoor venues. We also provide specific skincare recommendations for pre-wedding prep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-[#D4A055] to-[#B76E79]">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready for Your Wedding Day Makeup?</h2>
            <p className="text-xl mb-8">Let's create the perfect look for your special day</p>
            
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-8 text-[#B76E79]">
              <p className="font-semibold">Planning ahead helps</p>
              <p className="text-sm mt-1">Popular wedding dates typically book 3-6 months in advance</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="https://wa.me/917034726402?text=Hi%20Nikita!%20I'm%20interested%20in%20bridal%20makeup%20for%20my%20wedding.%20When%20are%20you%20available?"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <span>💬</span> Check Availability on WhatsApp
              </a>
              <Link 
                href="/contact"
                className="bg-white text-[#D4A055] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
              >
                Book Free Consultation
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-bold mb-2">🎁 Free Consultation</div>
                <div>Discuss your wedding look with no obligation</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-bold mb-2">Transparent Pricing</div>
                <div>No hidden costs - clear package details</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="font-bold mb-2">⭐ Quality Guaranteed</div>
                <div>Professional service you can trust</div>
              </div>
            </div>
            
            <div className="mt-8 text-sm">
              <p className="mb-2">Also serving: <Link href="/bridal-makeup-kottayam" className="underline">Kottayam</Link>, Ernakulam, Thrissur, and all Kerala</p>
              <p>Read our <Link href="/blog/bridal-makeup-cost-pala" className="underline">complete pricing guide</Link> for detailed information</p>
            </div>
          </div>
        </section>

        {/* Sticky WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://wa.me/917034726402?text=Hi%20Nikita!%20I'm%20interested%20in%20bridal%20makeup%20for%20my%20wedding."
            className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110"
          >
            <span className="text-2xl">💬</span>
          </a>
        </div>
      </div>
    </>
  )
}
