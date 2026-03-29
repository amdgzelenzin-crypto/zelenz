import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bridal Makeup Price Pala | NIXTUDIO Transparent Pricing 2026',
  description: 'Complete bridal makeup price list in Pala, Kerala. NIXTUDIO offers transparent pricing for HD, airbrush, luxury bridal makeup packages with no hidden costs.',
  keywords: [
    'bridal makeup price pala',
    'bridal makeup cost pala',
    'bridal makeup packages pala',
    'bridal makeup rates pala kerala',
    'nixtudio price list',
    'bridal makeup charges pala',
    'affordable bridal makeup pala',
    'luxury bridal makeup price pala',
    'bridal makeup price list kerala'
  ],
  openGraph: {
    title: 'Bridal Makeup Price Pala | NIXTUDIO Transparent Pricing',
    description: 'Complete pricing guide for bridal makeup services in Pala. No hidden costs, premium quality, best value.',
    url: 'https://www.nixtudio.in/bridal-makeup-price-pala',
    images: [{
      url: '/images/bridal-makeup-price-pala-nixtudio.jpg',
      width: 1200,
      height: 630,
      alt: 'Bridal Makeup Price Pala - NIXTUDIO Studio'
    }]
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bridal Makeup Price Pala - NIXTUDIO",
  "description": "Transparent pricing for bridal makeup services in Pala, Kerala. HD, airbrush, and luxury packages available.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "NIXTUDIO",
    "url": "https://www.nixtudio.in",
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
      "name": "Premium Bridal Makeup Package",
      "price": "27,500",
      "priceCurrency": "INR",
      "description": "Complete bridal makeup transformation with HD techniques"
    },
    {
      "@type": "Offer",
      "name": "Luxury Airbrush Bridal Package",
      "price": "35,000",
      "priceCurrency": "INR",
      "description": "Advanced airbrush bridal makeup with premium products"
    },
    {
      "@type": "Offer",
      "name": "Royal Luxury Bridal Experience",
      "price": "45,000",
      "priceCurrency": "INR",
      "description": "Ultimate luxury bridal experience with all premium services"
    }
  ]
}

const packages = [
  {
    name: "Premium Bridal Makeup",
    price: "₹27,500",
    originalPrice: "₹35,000",
    description: "Perfect for brides who want professional quality at the best bridal makeup price pala offers.",
    features: [
      "HD foundation application",
      "Professional contouring & highlighting",
      "Eye makeup with false lashes",
      "Lip color application",
      "Basic hair styling",
      "Saree draping assistance",
      "Touch-up kit included",
      "12-hour lasting guarantee"
    ],
    popular: true
  },
  {
    name: "Luxury Airbrush Bridal",
    price: "₹35,000",
    originalPrice: "₹45,000",
    description: "Advanced airbrush technology for flawless, long-lasting bridal makeup pala kerala brides love.",
    features: [
      "Airbrush foundation application",
      "Airbrush contouring & highlighting",
      "Advanced eye makeup techniques",
      "Premium false lashes",
      "Professional hair styling",
      "Expert saree draping",
      "Premium touch-up kit",
      "16-hour lasting guarantee",
      "Waterproof & sweat-proof"
    ],
    popular: false
  },
  {
    name: "Royal Luxury Experience",
    price: "₹45,000",
    originalPrice: "₹60,000",
    description: "The ultimate luxury bridal makeup price pala premium package with exclusive services.",
    features: [
      "Pre-bridal skincare session",
      "Custom-blended foundation",
      "Airbrush & HD combination",
      "Celebrity-inspired eye makeup",
      "Luxury false lashes",
      "Advanced hair styling",
      "Jewelry styling consultation",
      "Premium touch-up kit",
      "18-hour lasting guarantee",
      "On-call support team",
      "Emergency touch-up service"
    ],
    popular: false
  }
]

const additionalServices = [
  {
    name: "Bridal Party Makeup",
    price: "₹8,000 - ₹15,000",
    description: "Makeup for mother, bridesmaids, sisters, and close relatives"
  },
  {
    name: "Reception Makeup",
    price: "₹12,000 - ₹18,000",
    description: "Second look for evening reception and party"
  },
  {
    name: "Pre-Wedding Events",
    price: "₹6,000 - ₹10,000",
    description: "Mehndi, engagement, sangeet makeup"
  },
  {
    name: "Trial Session",
    price: "₹5,000",
    description: "Full makeup trial with consultation (adjustable against booking)"
  },
  {
    name: "Home Service",
    price: "₹3,000 - ₹5,000",
    description: "Additional charge for on-location service within 30km"
  },
  {
    name: "Destination Wedding",
    price: "Custom Quote",
    description: "Outstation destination wedding packages"
  }
]

const testimonials = [
  {
    name: "Anjaly Joseph",
    location: "Pala",
    text: "Best bridal makeup price pala value for money! Premium quality at affordable rates. Worth every penny!",
    rating: 5
  },
  {
    name: "Divya Nair",
    location: "Kottayam",
    text: "Transparent bridal makeup price pala listing with no hidden costs. The luxury package was amazing!",
    rating: 5
  },
  {
    name: "Priya Menon",
    location: "Ettumanoor",
    text: "Affordable bridal makeup pala without compromising quality. My makeup lasted 16 hours perfectly.",
    rating: 5
  },
  {
    name: "Sarah Thomas",
    location: "Changanassery",
    text: "Bridal makeup packages pala pricing is very reasonable. The airbrush package gave me flawless skin!",
    rating: 5
  },
  {
    name: "Rebecca Alex",
    location: "Pala",
    text: "Best bridal makeup price pala compared to other studios. Professional service and stunning results!",
    rating: 5
  },
  {
    name: "Aisha Begum",
    location: "Kanjirappally",
    text: "Luxury bridal makeup price pala is worth the investment. I felt like a celebrity on my wedding day!",
    rating: 5
  }
]

const faqs = [
  {
    question: "What's included in your bridal makeup price pala packages?",
    answer: "Our bridal makeup price pala packages include professional makeup application, premium products, hair styling, saree draping assistance, touch-up kit, and lasting guarantee. Specific inclusions vary by package - Premium includes basic services, Luxury adds airbrush technology, and Royal includes pre-bridal skincare and on-call support."
  },
  {
    question: "Are there any hidden costs in your bridal makeup price pala?",
    answer: "No! We believe in transparent bridal makeup price pala listings. All prices are inclusive of taxes, products, and services mentioned. Additional charges only apply for home service (₹3,000-5,000), outstation travel, or if you request extra services not included in your package."
  },
  {
    question: "Do you offer affordable bridal makeup pala packages?",
    answer: "Yes! Our Premium package at ₹27,500 is the most affordable bridal makeup pala option without compromising quality. We also offer EMI options and seasonal discounts. We believe every bride deserves professional makeup regardless of budget."
  },
  {
    question: "How does your bridal makeup price pala compare to other studios?",
    answer: "Our bridal makeup price pala is 20-30% more affordable than comparable studios in Kerala while using premium international products. We offer better value with longer lasting makeup (16-18 hours vs 8-12 hours elsewhere), premium products, and satisfaction guarantee."
  },
  {
    question: "What's the difference between your bridal makeup packages pala?",
    answer: "Our bridal makeup packages pala differ in technology and services: Premium uses traditional HD techniques, Luxury adds airbrush technology for flawless finish, and Royal includes pre-bridal skincare, custom-blended foundation, and on-call support. All packages use premium products and include hair styling."
  },
  {
    question: "Is trial session included in bridal makeup price pala?",
    answer: "Trial session costs ₹5,000 separately but is fully adjustable against your final booking. We recommend trials for all brides to test products and perfect your look. The trial fee is waived when you book any of our bridal makeup packages pala."
  },
  {
    question: "Do you offer payment plans for bridal makeup price pala?",
    answer: "Yes! We offer flexible payment plans for all bridal makeup price pala packages. Pay 40% at booking, 30% one month before, and 30% on the wedding day. We also accept credit card EMI options for your convenience."
  },
  {
    question: "What's your cancellation policy for bridal makeup packages pala?",
    answer: "For bridal makeup packages pala bookings: 30+ days notice - 80% refund; 15-29 days - 50% refund; 7-14 days - 25% refund; less than 7 days - no refund. We offer one free date rescheduling up to 30 days before your wedding."
  },
  {
    question: "Are products included in bridal makeup price pala?",
    answer: "Yes! All premium products are included in our bridal makeup price pala packages. We use international brands like MAC, NARS, Huda Beauty, Fenty, and airbrush-specific products. No additional charges for any products used during your makeup application."
  },
  {
    question: "Do you charge extra for bridal makeup price pala home service?",
    answer: "Home service within 30km of Pala costs an additional ₹3,000-5,000 depending on distance. For locations beyond 30km, custom quotes apply. Our bridal makeup price pala studio service is included in all packages without additional charges."
  },
  {
    question: "What's the best value bridal makeup price pala package?",
    answer: "Our Premium package at ₹27,500 offers the best value bridal makeup price pala with professional HD makeup, hair styling, and 12-hour lasting guarantee. For brides wanting extra features, the Luxury airbrush package at ₹35,000 provides excellent value for advanced technology."
  },
  {
    question: "Do you offer discounts for bridal makeup price pala advance booking?",
    answer: "Yes! Book 6+ months in advance and get 10% off any bridal makeup price pala package. Book 9+ months ahead and get 15% off. We also offer seasonal discounts during off-peak months (March-May, July-September)."
  },
  {
    question: "Is luxury bridal makeup price pala worth the extra cost?",
    answer: "Absolutely! Our luxury bridal makeup price pala package includes airbrush technology, premium products, pre-bridal skincare, and on-call support. The flawless finish, 18-hour lasting guarantee, and celebrity-inspired techniques make it worth every penny for your once-in-a-lifetime day."
  },
  {
    question: "What payment methods do you accept for bridal makeup price pala?",
    answer: "We accept cash, bank transfer, credit/debit cards, UPI, and digital wallets for all bridal makeup price pala payments. For international clients, we accept PayPal and wire transfers. All payment methods are secure and receipt is provided immediately."
  },
  {
    question: "Do you offer group discounts for bridal makeup price pala?",
    answer: "Yes! Book bridal makeup for 3+ family members and get 15% off total bridal makeup price pala. Book 5+ and get 20% off. This applies to mother, sisters, bridesmaids, and close relatives booking together with the bride's package."
  }
]

export default function BridalMakeupPricePala() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/bridal-makeup-price-pala-hero.webp"
              alt="Bridal Makeup Price Pala - NIXTUDIO Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-green-900/60" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Bridal Makeup Price Pala
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Transparent pricing with no hidden costs. 
                Premium quality at the best value in Kerala.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Book Your Package
                </Link>
                <Link 
                  href="tel:+919876543210"
                  className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Call for Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Price Guarantee */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-green-100 p-8 rounded-xl max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-green-800">
                Price Match Guarantee
              </h2>
              <p className="text-xl text-green-700">
                Found comparable bridal makeup at a lower price? We'll match it! 
                Plus, you'll get our premium products and 16+ hour lasting guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* Main Packages */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Bridal Makeup Packages Pala
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Choose from our carefully designed bridal makeup price pala packages. 
                Each offers exceptional value with premium products and professional service.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${pkg.popular ? 'ring-4 ring-green-500 scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="bg-green-500 text-white text-center py-2 px-4 rounded-lg mb-4 font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-green-600">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-gray-700 mb-6">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                      pkg.popular 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Book This Package
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Additional Services & Pricing
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-2 text-green-600">{service.name}</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{service.price}</p>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Why Our Bridal Makeup Price Pala Offers Best Value
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">💎</span>
                    <div>
                      <h3 className="font-bold text-gray-900">Premium International Products</h3>
                      <p className="text-gray-700">MAC, NARS, Huda Beauty, Fenty - no compromises on quality</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">⏰</span>
                    <div>
                      <h3 className="font-bold text-gray-900">16+ Hour Lasting Guarantee</h3>
                      <p className="text-gray-700">Lasts from morning rituals to late-night receptions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">🎨</span>
                    <div>
                      <h3 className="font-bold text-gray-900">Advanced HD & Airbrush Technology</h3>
                      <p className="text-gray-700">Flawless finish perfect for photography and videos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">💝</span>
                    <div>
                      <h3 className="font-bold text-gray-900">Complete Service Package</h3>
                      <p className="text-gray-700">Makeup, hair styling, draping, and touch-up kit included</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">🏆</span>
                    <div>
                      <h3 className="font-bold text-gray-900">Satisfaction Guarantee</h3>
                      <p className="text-gray-700">Not satisfied? We'll fix it until you're happy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-green-600">Price Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-bold text-gray-900">NIXTUDIO Premium</span>
                    <span className="text-green-600 font-bold">₹27,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">Other Studios Similar</span>
                    <span className="text-gray-900">₹35,000-45,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">5-Star Hotel Salons</span>
                    <span className="text-gray-900">₹50,000-75,000</span>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg mt-4">
                    <p className="text-green-800 font-bold">You Save: ₹7,500-47,500!</p>
                    <p className="text-green-700 text-sm">With better products and longer lasting makeup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Brides Love Our Transparent Pricing
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Bridal Makeup Price Pala FAQ
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-green-600">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Book Your Bridal Makeup Package?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Secure your date with just 40% advance payment. Flexible payment options available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Book Your Package
              </Link>
              <Link 
                href="tel:+919876543210"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Call for Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Explore Our Bridal Makeup Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link href="/best-bridal-makeup-pala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-green-600">Best Bridal Makeup Pala</h3>
                <p className="text-gray-700">Premium bridal services</p>
              </Link>
              <Link href="/bridal-makeup-kottayam" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-green-600">Bridal Makeup Kottayam</h3>
                <p className="text-gray-700">Kottayam district coverage</p>
              </Link>
              <Link href="/luxury-bridal-makeup-kerala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-green-600">Luxury Bridal Makeup Kerala</h3>
                <p className="text-gray-700">High-end luxury experience</p>
              </Link>
              <Link href="/airbrush-makeup-pala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-green-600">Airbrush Makeup Pala</h3>
                <p className="text-gray-700">Advanced airbrush technology</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
