import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bridal Makeup Kanjirappally | Premium Wedding Makeup Artist | NIXTUDIO',
  description: 'Expert bridal makeup artist serving Kanjirappally, Kerala. Nikita Liby specializes in humidity-resistant airbrush makeup for Christian church weddings. 15 minutes from Kanjirappally town.',
  keywords: [
    'bridal makeup kanjirappally',
    'kanjirappally bridal makeup artist',
    'wedding makeup kanjirappally',
    'christian bridal makeup kanjirappally',
    'airbrush makeup kanjirappally',
    'best makeup artist kanjirappally',
    'bridal makeup near kanjirappally',
    'kerala wedding makeup kanjirappally'
  ],
  openGraph: {
    title: 'Bridal Makeup Kanjirappally | Premium Wedding Makeup Artist | NIXTUDIO',
    description: 'Expert bridal makeup artist serving Kanjirappally. Humidity-resistant techniques for Kerala weddings.',
    url: 'https://nixtudio.in/bridal-makeup-kanjirappally',
    images: [{
      url: '/images/bridal-makeup-kanjirappally.jpg',
      width: 1200,
      height: 630,
      alt: 'Bridal Makeup Kanjirappally - NIXTUDIO'
    }]
  },
  alternates: {
    canonical: 'https://nixtudio.in/bridal-makeup-kanjirappally',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["BeautySalon", "ProfessionalService"],
  "name": "NIXTUDIO Bridal Makeup - Kanjirappally Service",
  "description": "Premium bridal makeup services for Kanjirappally brides. Specializing in humidity-resistant airbrush makeup for Christian church weddings and Kerala tropical climate.",
  "url": "https://nixtudio.in",
  "telephone": "+917034726402",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Moozhayil House, Thodupuzha Rd, opposite kuttiyankal nursery",
    "addressLocality": "Pala",
    "addressRegion": "Kerala",
    "postalCode": "686575",
    "addressCountry": "IN"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Kanjirappally, Kerala"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "9.7115",
    "longitude": "76.6225"
  },
  "serviceType": "Bridal Makeup Services",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kanjirappally Bridal Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kanjirappally Christian Church Wedding Makeup",
          "description": "Humidity-resistant airbrush makeup perfect for Kanjirappally church ceremonies"
        },
        "priceCurrency": "INR",
        "price": "27500"
      }
    ]
  },
  "provider": {
    "@type": "Person",
    "name": "Nikita Liby",
    "jobTitle": "Bridal Makeup Artist"
  }
}

export default function BridalMakeupKanjirappally() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-rose/5 to-pink/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-rose/10 text-rose text-sm font-semibold rounded-full">
                SERVING KANJIRAPPALLY • 15 MINUTES FROM TOWN
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-espresso mb-6 leading-tight">
              Bridal Makeup in<br/>Kanjirappally
            </h1>
            <p className="text-xl text-espresso/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Premium bridal makeup services for Kanjirappally brides. Nikita Liby's humidity-resistant 
              airbrush techniques ensure flawless makeup for Christian church weddings and Kerala's tropical climate.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-taupe">
                <span className="w-2 h-2 bg-rose rounded-full"></span>
                15 Minutes from Kanjirappally Town
              </div>
              <div className="flex items-center gap-2 text-sm text-taupe">
                <span className="w-2 h-2 bg-rose rounded-full"></span>
                Christian Church Wedding Specialists
              </div>
              <div className="flex items-center gap-2 text-sm text-taupe">
                <span className="w-2 h-2 bg-rose rounded-full"></span>
                6+ Years Experience
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/bridal-makeup-calculator" 
                className="bg-rose text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose/90 transition-colors"
              >
                Calculate Your Package
              </Link>
              <Link 
                href="/contact" 
                className="border border-rose text-rose px-8 py-4 rounded-lg font-semibold hover:bg-rose/5 transition-colors"
              >
                Book Kanjirappally Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Kanjirappally-Specific Content */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-serif text-espresso mb-6">
                  Why Kanjirappally Brides Choose NIXTUDIO
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-rose/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-rose text-sm">⛪</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-espresso mb-1">Christian Church Wedding Experts</h3>
                      <p className="text-taupe text-sm">Specialized techniques for Kanjirappally's beautiful church ceremonies and natural lighting conditions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-rose/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-rose text-sm">🌡️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-espresso mb-1">Kanjirappally Climate Knowledge</h3>
                      <p className="text-taupe text-sm">Understanding local weather patterns and humidity levels specific to Kanjirappally region.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-rose/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-rose text-sm">🚗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-espresso mb-1">Convenient Location Access</h3>
                      <p className="text-taupe text-sm">Just 15 minutes from Kanjirappally town with easy access from major churches and venues.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-rose/10 to-pink/10 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-espresso mb-4">Kanjirappally Service Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-taupe">Service Area:</span>
                    <span className="text-espresso font-medium">Kanjirappally + 25km radius</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-taupe">Travel Time:</span>
                    <span className="text-espresso font-medium">15 minutes from town</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-taupe">Church Specialization:</span>
                    <span className="text-espresso font-medium">St. Mary's, St. Joseph's, more</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-taupe">On-Site Service:</span>
                    <span className="text-espresso font-medium">Available for Kanjirappally venues</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-taupe">Early Start:</span>
                    <span className="text-espresso font-medium">5:00 AM availability</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Churches in Kanjirappally */}
            <div className="mb-16">
              <h2 className="text-2xl font-serif text-espresso mb-6 text-center">
                Popular Wedding Venues in Kanjirappally
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "St. Mary's Forane Church",
                  "St. Joseph's Cathedral",
                  "St. Thomas Church",
                  "Sacred Heart Church",
                  "St. George Church",
                  "Christ the King Church"
                ].map((church, index) => (
                  <div key={index} className="bg-white border border-rose/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">⛪</div>
                    <div className="font-medium text-espresso text-sm">{church}</div>
                    <div className="text-xs text-taupe mt-1">Specialized lighting techniques</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials from Kanjirappally Area */}
            <div className="mb-16">
              <h2 className="text-2xl font-serif text-espresso mb-6 text-center">
                Kanjirappally Bride Experiences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-rose/5 p-6 rounded-xl">
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                  <p className="text-taupe text-sm mb-3 italic">
                    "Best decision for my Kanjirappally church wedding! Nikita understood exactly how the lighting in St. Mary's Church would affect the makeup. The humidity-resistant technique was perfect for the June weather."
                  </p>
                  <div className="text-sm font-medium text-espresso">- Maria, Kanjirappally</div>
                </div>
                
                <div className="bg-blue/5 p-6 rounded-xl">
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                  <p className="text-taupe text-sm mb-3 italic">
                    "Nikita traveled to our venue in Kanjirappally and created magic. Her airbrush makeup lasted through 16 hours of celebrations. Highly recommend for Kanjirappally brides!"
                  </p>
                  <div className="text-sm font-medium text-espresso">- Anna, Kanjirappally</div>
                </div>
              </div>
            </div>

            {/* Packages */}
            <div className="mb-16">
              <h2 className="text-2xl font-serif text-espresso mb-6 text-center">
                Kanjirappally Bridal Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-rose/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-espresso mb-2">Classic</h3>
                  <div className="text-2xl font-bold text-rose mb-4">₹27,500</div>
                  <ul className="space-y-2 text-sm text-taupe mb-4">
                    <li>• Bridal makeup & hair</li>
                    <li>• Humidity-resistant finish</li>
                    <li>• 1 function coverage</li>
                    <li>• Trial session included</li>
                  </ul>
                  <Link href="/contact" className="w-full block text-center border border-rose text-rose py-2 rounded-lg text-sm font-semibold hover:bg-rose/5">
                    Inquire
                  </Link>
                </div>
                
                <div className="bg-gradient-to-br from-rose/10 to-pink/10 border-2 border-rose rounded-xl p-6">
                  <div className="bg-rose text-white text-xs px-2 py-1 rounded-full inline-block mb-2">Most Popular</div>
                  <h3 className="text-lg font-semibold text-espresso mb-2">Premium</h3>
                  <div className="text-2xl font-bold text-rose mb-4">₹32,500</div>
                  <ul className="space-y-2 text-sm text-taupe mb-4">
                    <li>• Airbrush makeup & hair</li>
                    <li>• Advanced humidity protection</li>
                    <li>• 2 functions covered</li>
                    <li>• Pre-bridal skin prep</li>
                  </ul>
                  <Link href="/contact" className="w-full block text-center bg-rose text-white py-2 rounded-lg text-sm font-semibold hover:bg-rose/90">
                    Book Now
                  </Link>
                </div>
                
                <div className="bg-white border border-rose/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-espresso mb-2">Luxury</h3>
                  <div className="text-2xl font-bold text-rose mb-4">₹45,000</div>
                  <ul className="space-y-2 text-sm text-taupe mb-4">
                    <li>• Complete bridal package</li>
                    <li>• Maximum humidity defense</li>
                    <li>• 3+ functions coverage</li>
                    <li>• On-site service available</li>
                  </ul>
                  <Link href="/contact" className="w-full block text-center border border-rose text-rose py-2 rounded-lg text-sm font-semibold hover:bg-rose/5">
                    Inquire
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <section className="py-12 px-8 bg-gradient-to-r from-rose to-pink rounded-2xl text-center text-white">
              <h2 className="text-3xl font-serif mb-4">Ready for Your Kanjirappally Wedding?</h2>
              <p className="text-lg mb-8 opacity-90">
                Let Nikita Liby create the perfect humidity-resistant bridal makeup for your special day
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/bridal-makeup-calculator" 
                  className="bg-white text-rose px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Calculate Your Package
                </Link>
                <Link 
                  href="tel:+917034726402" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-rose transition-colors"
                >
                  Call Now: +91 7034726402
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-serif text-espresso mb-6 text-center">
                Kanjirappally Bridal Makeup FAQ
              </h2>
              <div className="space-y-4">
                <div className="bg-white border border-rose/20 rounded-lg p-4">
                  <h3 className="font-semibold text-espresso mb-2">How far in advance should Kanjirappally brides book?</h3>
                  <p className="text-taupe text-sm">For Kanjirappally church wedding season (December-March), book 6-8 months ahead. Nikita personally handles maximum 2 brides per day.</p>
                </div>
                
                <div className="bg-white border border-rose/20 rounded-lg p-4">
                  <h3 className="font-semibold text-espresso mb-2">Do you provide on-site makeup service in Kanjirappally?</h3>
                  <p className="text-taupe text-sm">Yes! We provide complete on-site bridal makeup services across Kanjirappally and surrounding areas within 25km radius.</p>
                </div>
                
                <div className="bg-white border border-rose/20 rounded-lg p-4">
                  <h3 className="font-semibold text-espresso mb-2">What makes your makeup suitable for Kanjirappally's climate?</h3>
                  <p className="text-taupe text-sm">Our specialized airbrush techniques with humidity-resistant formulas are specifically designed for Kerala's tropical climate and 90%+ humidity levels.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directions */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif text-espresso mb-6 text-center">
              Getting to NIXTUDIO from Kanjirappally
            </h2>
            <div className="bg-white rounded-xl p-6 border border-rose/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-espresso mb-3">By Car</h3>
                  <ul className="space-y-2 text-sm text-taupe">
                    <li>• Start from Kanjirappally town center</li>
                    <li>• Take the Thodupuzha Road (SH 8)</li>
                    <li>• Continue for 12 km towards Pala</li>
                    <li>• Studio located on the left, opposite kuttiyankal nursery</li>
                    <li>• Travel time: 15-20 minutes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-espresso mb-3">Landmarks</h3>
                  <ul className="space-y-2 text-sm text-taupe">
                    <li>• Near Moozhayil House</li>
                    <li>• Opposite kuttiyankal nursery</li>
                    <li>• 3 km before Pala town</li>
                    <li>• On Thodupuzha-Pala main road</li>
                    <li>• Ample parking available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
