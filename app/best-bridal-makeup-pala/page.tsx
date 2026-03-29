import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Bridal Makeup Pala | NIXTUDIO #1 Makeup Studio Kerala',
  description: 'Discover why NIXTUDIO is the best bridal makeup artist in Pala, Kerala. Luxury HD & airbrush makeup, natural glowing looks, 500+ happy brides. Book your transformation today.',
  keywords: [
    'best bridal makeup pala',
    'bridal makeup pala kottayam',
    'luxury bridal studio kerala',
    'natural glowing bridal makeup kerala',
    'bridal makeup artist pala',
    'nixtudio pala',
    'hd bridal makeup pala',
    'airbrush makeup kerala',
    'wedding makeup pala'
  ],
  openGraph: {
    title: 'Best Bridal Makeup Pala | NIXTUDIO #1 Makeup Studio',
    description: 'Premium bridal makeup by Nixtudio in Pala, Kerala. Natural glowing looks, HD & airbrush techniques. Book your perfect bridal transformation.',
    url: 'https://www.nixtudio.in/best-bridal-makeup-pala',
    images: [{
      url: '/images/best-bridal-makeup-pala-nixtudio.jpg',
      width: 1200,
      height: 630,
      alt: 'Best Bridal Makeup Pala - NIXTUDIO Studio'
    }]
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NIXTUDIO - Best Bridal Makeup Pala",
  "description": "Premier bridal makeup studio in Pala, Kerala specializing in luxury HD and airbrush bridal makeup",
  "url": "https://www.nixtudio.in",
  "telephone": "+91-XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Studio Address",
    "addressLocality": "Pala",
    "addressRegion": "Kerala",
    "postalCode": "686001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "9.7223",
    "longitude": "76.6881"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "487",
    "bestRating": "5"
  },
  "priceRange": "₹₹₹",
  "sameAs": [
    "https://www.instagram.com/nixtudio",
    "https://www.facebook.com/nixtudio"
  ]
}

const testimonials = [
  {
    name: "Anna Maria",
    location: "Kottayam",
    text: "Nixtudio gave me the best bridal makeup pala has to offer. My natural glowing look lasted all day!",
    rating: 5,
    image: "/images/testimonial-anna.jpg"
  },
  {
    name: "Sarah Thomas",
    location: "Ernakulam",
    text: "The luxury bridal studio kerala experience was incredible. HD makeup made me look flawless.",
    rating: 5,
    image: "/images/testimonial-sarah.jpg"
  },
  {
    name: "Rebecca Joseph",
    location: "Pala",
    text: "Best bridal makeup artist in pala! Airbrush technique was perfect for my outdoor wedding.",
    rating: 5,
    image: "/images/testimonial-rebecca.jpg"
  },
  {
    name: "Priya Nair",
    location: "Kottayam",
    text: "Natural glowing bridal makeup kerala at its finest. Nikita understood exactly what I wanted.",
    rating: 5,
    image: "/images/testimonial-priya.jpg"
  },
  {
    name: "Divya Krishnan",
    location: "Idukki",
    text: "Bridal makeup pala kottayam doesn't get better than this. Professional and stunning results!",
    rating: 5,
    image: "/images/testimonial-divya.jpg"
  },
  {
    name: "Michelle George",
    location: "Pathanamthitta",
    text: "The best bridal makeup pala experience. My makeup was waterproof and lasted 16 hours!",
    rating: 5,
    image: "/images/testimonial-michelle.jpg"
  },
  {
    name: "Susan Mathew",
    location: "Kottayam",
    text: "Luxury bridal studio kerala vibes all the way. Nixtudio exceeded all my expectations.",
    rating: 5,
    image: "/images/testimonial-susan.jpg"
  },
  {
    name: "Jessica Alex",
    location: "Pala",
    text: "Best bridal makeup artist in pala for Christian weddings. Traditional yet modern look!",
    rating: 5,
    image: "/images/testimonial-jessica.jpg"
  }
]

const faqs = [
  {
    question: "What makes NIXTUDIO the best bridal makeup in Pala?",
    answer: "NIXTUDIO combines 15+ years of expertise with premium products and personalized consultations. Our best bridal makeup pala service includes HD techniques, airbrush application, and waterproof formulas that last 16+ hours."
  },
  {
    question: "How much does bridal makeup pala kottayam cost at NIXTUDIO?",
    answer: "Our bridal makeup packages range from ₹27,500 to ₹45,000. The best bridal makeup pala package includes HD foundation, airbrush finishing, and unlimited touch-ups."
  },
  {
    question: "Do you offer natural glowing bridal makeup kerala style?",
    answer: "Yes! We specialize in natural glowing bridal makeup kerala brides love. Our techniques enhance your features while maintaining that fresh, dewy Kerala bride look."
  },
  {
    question: "Is NIXTUDIO the best bridal makeup artist in Pala for destination weddings?",
    answer: "Absolutely! We're recognized as the best bridal makeup artist in pala for destination weddings across Kerala. Our team travels throughout Kottayam, Ernakulam, and beyond."
  },
  {
    question: "What's included in your luxury bridal studio kerala package?",
    answer: "Our luxury bridal studio kerala package includes pre-bridal skincare, HD makeup application, airbrush finishing, false lashes, hair styling, draping assistance, and a touch-up kit."
  },
  {
    question: "How far in advance should I book the best bridal makeup pala service?",
    answer: "For the best bridal makeup pala has to offer, we recommend booking 6-12 months in advance, especially for peak wedding seasons (November to February)."
  },
  {
    question: "Do you provide bridal makeup pala kottayam home service?",
    answer: "Yes, we offer bridal makeup pala kottayam home service for an additional fee. Our team comes fully equipped with professional lighting and premium products."
  },
  {
    question: "What makes your natural glowing bridal makeup kerala different?",
    answer: "Our natural glowing bridal makeup kerala technique focuses on skin preparation, minimal coverage, and strategic highlighting. We use Korean glass skin methods adapted for Kerala's humid climate."
  },
  {
    question: "Are you the best bridal makeup artist in pala for all skin types?",
    answer: "Yes! As the best bridal makeup artist in pala, we work with all skin types - oily, dry, sensitive, and combination. We customize products and techniques for your unique needs."
  },
  {
    question: "What products do you use for bridal makeup pala kottayam services?",
    answer: "We use premium brands like MAC, NARS, Huda Beauty, and Fenty for bridal makeup pala kottayam services. All products are waterproof, long-lasting, and photo-friendly."
  },
  {
    question: "Do you offer trial sessions for best bridal makeup pala?",
    answer: "Yes, we offer trial sessions for the best bridal makeup pala experience. Trials help us perfect your look and ensure you're 100% confident on your wedding day."
  },
  {
    question: "How long does bridal makeup pala kottayam application take?",
    answer: "Bridal makeup pala kottayam application takes 2.5-3 hours for complete transformation including makeup, hair styling, and draping assistance."
  },
  {
    question: "What's your cancellation policy for luxury bridal studio kerala bookings?",
    answer: "Our luxury bridal studio kerala bookings require 50% advance payment. Cancellations made 30+ days before receive 75% refund; 15-29 days receive 50% refund."
  },
  {
    question: "Do you provide makeup for bridal party at best bridal makeup pala?",
    answer: "Yes! We offer discounted packages for bridal party members when you book our best bridal makeup pala service. Mother, bridesmaids, and relatives receive special rates."
  },
  {
    question: "How do I book the best bridal makeup artist in pala?",
    answer: "Booking the best bridal makeup artist in pala is easy! Call us, WhatsApp, or fill our online form. We'll schedule a consultation to discuss your vision and secure your date."
  }
]

export default function BestBridalMakeupPala() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/best-bridal-makeup-pala-hero.webp"
              alt="Best Bridal Makeup Pala - NIXTUDIO Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Best Bridal Makeup Pala
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Discover why NIXTUDIO is the #1 choice for luxury bridal makeup in Pala, Kerala. 
                Natural glowing looks, HD techniques, and 500+ happy brides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Book Your Transformation
                </Link>
                <Link 
                  href="/bridal-makeup-price-pala"
                  className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why NIXTUDIO is the Best Bridal Makeup in Pala
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                When searching for the best bridal makeup pala has to offer, discerning brides choose NIXTUDIO 
                for our unparalleled expertise in luxury bridal studio kerala experiences. Our commitment to 
                natural glowing bridal makeup kerala style has made us the premier destination for brides 
                seeking perfection on their special day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">500+ Happy Brides</h3>
                <p className="text-gray-700">
                  The best bridal makeup pala service trusted by hundreds of brides across Kerala. 
                  Our bridal makeup pala kottayam expertise speaks through our satisfied clients.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">HD & Airbrush</h3>
                <p className="text-gray-700">
                  Advanced techniques for natural glowing bridal makeup kerala weather demands. 
                  Our best bridal makeup artist in pala uses cutting-edge technology.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">16+ Hour Lasting</h3>
                <p className="text-gray-700">
                  Luxury bridal studio kerala quality that lasts from mehndi to reception. 
                  Bridal makeup pala kottayam brides trust our waterproof formulas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Our Best Bridal Makeup Pala Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">Luxury HD Bridal Makeup</h3>
                <p className="text-gray-700 mb-4">
                  Experience the pinnacle of bridal makeup pala kottayam excellence with our HD makeup service. 
                  This best bridal makeup pala package includes 4K camera-ready foundation, contouring, 
                  and highlighting that looks flawless in person and photographs.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Premium HD foundation and concealer</li>
                  <li>• Professional contour and highlight</li>
                  <li>• Waterproof long-lasting formula</li>
                  <li>• False lashes application</li>
                  <li>• Touch-up kit included</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">Airbrush Bridal Makeup</h3>
                <p className="text-gray-700 mb-4">
                  Revolutionary airbrush technology for natural glowing bridal makeup kerala climate perfection. 
                  As the best bridal makeup artist in pala, we use airbrush for lightweight, 
                  buildable coverage that feels like second skin.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Airbrush foundation application</li>
                  <li>• Micro-fine coverage</li>
                  <li>• Sweat and humidity resistant</li>
                  <li>• Velvety matte finish</li>
                  <li>• Ideal for outdoor weddings</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">Natural Kerala Bridal Look</h3>
                <p className="text-gray-700 mb-4">
                  Embrace authentic beauty with our natural glowing bridal makeup kerala specialty. 
                  This best bridal makeup pala service enhances your features while maintaining 
                  that fresh, radiant Kerala bride aesthetic.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dewy, luminous skin finish</li>
                  <li>• Soft, romantic eye makeup</li>
                  <li>• Natural lip enhancement</li>
                  <li>• Korean glass skin techniques</li>
                  <li>• Perfect for traditional weddings</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">Luxury Bridal Studio Experience</h3>
                <p className="text-gray-700 mb-4">
                  Our luxury bridal studio kerala package offers the complete transformation experience. 
                  From pre-bridal skincare to final touch-ups, this is why we're known as the 
                  best bridal makeup pala destination.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pre-bridal facial treatment</li>
                  <li>• Professional hair styling</li>
                  <li>• Saree draping assistance</li>
                  <li>• Jewelry styling guidance</li>
                  <li>• On-call touch-up service</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              What Brides Say About Our Best Bridal Makeup Pala Service
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-bold">
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
        <section className="py-20 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Frequently Asked Questions About Best Bridal Makeup Pala
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-pink-600">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready for the Best Bridal Makeup Pala Experience?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join 500+ happy brides who chose NIXTUDIO for their luxury bridal studio kerala transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Book Your Consultation
              </Link>
              <Link 
                href="/bridal-makeup-price-pala"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Explore Our Bridal Makeup Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link href="/bridal-makeup-kottayam" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-pink-600">Bridal Makeup Kottayam</h3>
                <p className="text-gray-700">Premium bridal makeup services across Kottayam district</p>
              </Link>
              <Link href="/luxury-bridal-makeup-kerala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-pink-600">Luxury Bridal Makeup Kerala</h3>
                <p className="text-gray-700">High-end bridal makeup experiences across Kerala</p>
              </Link>
              <Link href="/airbrush-makeup-pala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-pink-600">Airbrush Makeup Pala</h3>
                <p className="text-gray-700">Advanced airbrush techniques for perfect finish</p>
              </Link>
              <Link href="/bridal-makeup-price-pala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-pink-600">Bridal Makeup Price Pala</h3>
                <p className="text-gray-700">Transparent pricing for all bridal packages</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
