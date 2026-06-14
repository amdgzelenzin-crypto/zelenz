import { BRIDAL_PACKAGES, BRIDAL_EXTRAS } from '@/lib/bridal-packages'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'
import { PremiumIcon, StarRating } from '@/components/ui/PremiumIcon'

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
    url: 'https://nixtudio.in/bridal-makeup-price-pala',
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
    "url": "https://nixtudio.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pala",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    }
  },
  "serviceType": "Bridal Makeup Services",
  "offers": BRIDAL_PACKAGES.map((pkg) => ({
    "@type": "Offer",
    "name": `${pkg.name} — ${pkg.subtitle}`,
    "price": String(pkg.price),
    "priceCurrency": "INR",
    "description": pkg.technique,
  })),
}

const packages = BRIDAL_PACKAGES.map((pkg) => ({
  name: `${pkg.name} — ${pkg.subtitle}`,
  price: pkg.priceDisplay,
  description: pkg.technique,
  features: [...pkg.included],
  popular: pkg.badge === 'MOST POPULAR',
}))

const additionalServices = [
  ...BRIDAL_EXTRAS.map((extra) => ({
    name: extra.service,
    price: extra.price,
    description: 'Add-on for Standard packages; included in Premium',
  })),
  {
    name: "Guest / Party Makeup",
    price: "See catalogue",
    description: "Family and guest makeup — ask for our Party/Guest makeup catalogue at booking"
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
    answer: "Official packages: Standard HD (₹27,500) and Standard Airbrush (₹32,500) include makeup, hairstyling, lashes, lens, outfit styling (saree not included), and hair extensions if needed. Premium (₹40,000) adds saree draping with/without pre-pleats. Same tiers for engagement, wedding, or reception."
  },
  {
    question: "Are there any hidden costs in your bridal makeup price pala?",
    answer: "No hidden costs on listed package prices. Saree draping is extra on Standard packages (₹1,500–2,000). Guest/family makeup is separate — ask for our Party/Guest catalogue. Balance after advance is due on the event day."
  },
  {
    question: "Do you offer affordable bridal makeup pala packages?",
    answer: "Standard HD at ₹27,500 is our entry bridal package — professional makeup by Nikita Liby with premium products. Airbrush Standard at ₹32,500 is most popular for Kerala humidity."
  },
  {
    question: "What's the difference between your bridal makeup packages pala?",
    answer: "Standard HD uses high-definition techniques (₹27,500). Standard Airbrush uses humidity-resistant airbrush (₹32,500). Premium Signature Airbrush (₹40,000) uses luxury international brands and includes saree draping."
  },
  {
    question: "Is trial session included in bridal makeup price pala?",
    answer: "No makeup or hair trials are offered. Consultation happens on the day of your function. A pre-bridal guide is shared when you book."
  },
  {
    question: "What's the best value bridal makeup price pala package?",
    answer: "Standard Airbrush at ₹32,500 offers the best balance for Kerala weddings — humidity-resistant finish with full Standard inclusions. Premium at ₹40,000 is ideal if you want saree draping and luxury brands included."
  },
  {
    question: "Are products included in bridal makeup price pala?",
    answer: "Yes — all products are included. Standard packages use Bobbi Brown, Huda Beauty, MAC, Urban Decay, and more. Premium adds Chanel, Dior, Gucci, YSL, Givenchy, NARS, Pat McGrath, and other luxury brands."
  },
  {
    question: "Do you charge extra for bridal makeup price pala home service?",
    answer: "On-location service may incur travel charges depending on venue distance from Pala. Guest makeup and extras are quoted from our Party/Guest catalogue at booking."
  },
]

export default function BridalMakeupPricePala() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white" style={{ fontFamily: "var(--font-body), Georgia, serif" }}>
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
              <h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display), Georgia, serif", lineHeight: 1.2 }}
              >
                Bridal Makeup Price Pala
              </h1>
              <p 
                className="text-2xl md:text-3xl mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body), Georgia, serif" }}
              >
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
              <h2 
                className="text-3xl font-bold mb-4 text-green-800"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Price Match Guarantee
              </h2>
              <p 
                className="text-2xl text-green-700 leading-relaxed"
                style={{ fontFamily: "var(--font-body), Georgia, serif" }}
              >
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
              <h2 
                className="text-4xl font-bold mb-6 text-gray-900"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Bridal Makeup Packages Pala
              </h2>
              <p 
                className="text-2xl text-gray-700 leading-relaxed"
                style={{ fontFamily: "var(--font-body), Georgia, serif" }}
              >
                Choose from our carefully designed bridal makeup price pala packages. 
                Each offers exceptional value with premium products and professional service.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${pkg.popular ? 'ring-4 ring-green-500 scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="bg-green-500 text-white text-center py-2 px-4 rounded-lg mb-4 font-bold" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                      MOST POPULAR
                    </div>
                  )}
                  <h3 
                    className="text-2xl font-bold mb-2 text-gray-900"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span 
                      className="text-4xl font-bold text-green-600"
                      style={{ fontFamily: "var(--font-sans), sans-serif" }}
                    >
                      {pkg.price}
                    </span>
                  </div>
                  <p 
                    className="text-lg text-gray-700 mb-6 leading-relaxed"
                    style={{ fontFamily: "var(--font-body), Georgia, serif" }}
                  >
                    {pkg.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <PremiumIcon name="check" size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                        <span 
                          className="text-gray-700 text-base"
                          style={{ fontFamily: "var(--font-body), Georgia, serif" }}
                        >
                          {feature}
                        </span>
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
                    style={{ fontFamily: "var(--font-sans), sans-serif" }}
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
                    <PremiumIcon name="gem" size={20} className="text-green-500 mr-3 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">Premium International Products</h3>
                      <p className="text-gray-700">MAC, NARS, Huda Beauty, Fenty - no compromises on quality</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PremiumIcon name="clock" size={20} className="text-green-500 mr-3 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">16+ Hour Lasting Guarantee</h3>
                      <p className="text-gray-700">Lasts from morning rituals to late-night receptions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PremiumIcon name="palette" size={20} className="text-green-500 mr-3 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">Advanced HD & Airbrush Technology</h3>
                      <p className="text-gray-700">Flawless finish perfect for photography and videos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PremiumIcon name="heart" size={20} className="text-green-500 mr-3 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">Complete Service Package</h3>
                      <p className="text-gray-700">Makeup, hair styling, draping, and touch-up kit included</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PremiumIcon name="trophy" size={20} className="text-green-500 mr-3 mt-1 shrink-0" />
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
                    <span className="font-bold text-gray-900">NIXTUDIO Standard HD</span>
                    <span className="text-green-600 font-bold">₹27,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-bold text-gray-900">NIXTUDIO Standard Airbrush</span>
                    <span className="text-green-600 font-bold">₹32,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-bold text-gray-900">NIXTUDIO Premium</span>
                    <span className="text-green-600 font-bold">₹40,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-700">Other Studios Similar</span>
                    <span className="text-gray-900">₹35,000–50,000</span>
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
                    <StarRating count={testimonial.rating} size={14} />
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
