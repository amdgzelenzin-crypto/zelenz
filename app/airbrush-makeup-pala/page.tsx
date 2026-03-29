import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Airbrush Makeup Pala | NIXTUDIO Advanced Airbrush Studio',
  description: 'Experience advanced airbrush makeup in Pala, Kerala. NIXTUDIO specializes in airbrush bridal makeup with flawless finish, long-lasting results, and perfect for all skin types.',
  keywords: [
    'airbrush makeup pala',
    'airbrush bridal makeup pala',
    'airbrush makeup artist pala',
    'best airbrush makeup pala',
    'nixtudio airbrush pala',
    'airbrush foundation pala',
    'airbrush wedding makeup pala',
    'professional airbrush makeup kerala',
    'airbrush makeup studio pala'
  ],
  openGraph: {
    title: 'Airbrush Makeup Pala | NIXTUDIO Advanced Studio',
    description: 'Advanced airbrush makeup services in Pala. Flawless finish, long-lasting, perfect for bridal and special occasions.',
    url: 'https://nixtudio.in/airbrush-makeup-pala',
    images: [{
      url: '/images/airbrush-makeup-pala-nixtudio.jpg',
      width: 1200,
      height: 630,
      alt: 'Airbrush Makeup Pala - NIXTUDIO Studio'
    }]
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Airbrush Makeup Pala - NIXTUDIO",
  "description": "Advanced airbrush makeup services in Pala, Kerala. Specializing in airbrush bridal makeup with flawless, long-lasting finish.",
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
  "serviceType": "Airbrush Makeup Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "₹25,000 - ₹50,000",
    "priceCurrency": "INR"
  }
}

const testimonials = [
  {
    name: "Fathima Noor",
    location: "Pala",
    text: "Best airbrush makeup pala experience! My bridal makeup lasted 18 hours through my outdoor wedding. Airbrush makeup artist pala perfection!",
    rating: 5
  },
  {
    name: "Anu Sreenivas",
    location: "Ettumanoor",
    text: "Airbrush bridal makeup pala at its finest! Nixtudio's airbrush technique gave me flawless skin that looked natural in photos.",
    rating: 5
  },
  {
    name: "Divya Ramesh",
    location: "Kottayam",
    text: "Professional airbrush makeup kerala expertise! The airbrush foundation pala application was lightweight and lasted through humidity.",
    rating: 5
  },
  {
    name: "Priya Krishnan",
    location: "Changanassery",
    text: "Airbrush wedding makeup pala service exceeded expectations. My makeup looked perfect from morning ceremony to evening reception.",
    rating: 5
  },
  {
    name: "Reena Joseph",
    location: "Pala",
    text: "Best airbrush makeup pala for my destination wedding! The airbrush makeup artist pala team was professional and amazing.",
    rating: 5
  },
  {
    name: "Aisha Begum",
    location: "Kanjirappally",
    text: "Airbrush bridal makeup pala that lasted through my Muslim wedding rituals. Flawless finish and comfortable to wear!",
    rating: 5
  },
  {
    name: "Sonia Thomas",
    location: "Vaikom",
    text: "Airbrush makeup studio pala experience was luxurious. The airbrush technique gave me that celebrity red carpet look!",
    rating: 5
  },
  {
    name: "Meera Pillai",
    location: "Erattupetta",
    text: "Professional airbrush makeup kerala service worth every penny. My airbrush wedding makeup pala looked stunning in all photos!",
    rating: 5
  }
]

const faqs = [
  {
    question: "What makes airbrush makeup pala different from traditional makeup?",
    answer: "Airbrush makeup pala uses compressed air to spray fine makeup particles onto the skin, creating a flawless, lightweight finish. Unlike traditional makeup, airbrush foundation pala application provides buildable coverage that feels like second skin and lasts 16+ hours without touch-ups."
  },
  {
    question: "Is airbrush bridal makeup pala suitable for all skin types?",
    answer: "Yes! Airbrush bridal makeup pala is perfect for all skin types - oily, dry, sensitive, and combination. The airbrush technique allows for customized coverage and is hypoallergenic, making it ideal for sensitive skin. Our airbrush makeup artist pala adjusts the formula for your specific needs."
  },
  {
    question: "How long does airbrush makeup pala last?",
    answer: "Professional airbrush makeup kerala lasts 16-18 hours without touch-ups. The airbrush wedding makeup pala application is waterproof, sweat-proof, and transfer-resistant, making it perfect for long wedding days, outdoor events, and Kerala's humid climate."
  },
  {
    question: "Do you provide airbrush makeup pala home service?",
    answer: "Yes! We offer airbrush makeup pala home service across Pala and surrounding areas. Our airbrush makeup studio pala team comes fully equipped with professional airbrush equipment, lighting, and premium products for on-location services."
  },
  {
    question: "What's included in your airbrush bridal makeup pala package?",
    answer: "Our airbrush bridal makeup pala package includes: pre-makeup skincare consultation, airbrush foundation application, airbrush contouring and highlighting, eye makeup, lip color, false lashes, airbrush finishing spray, and a touch-up kit. Professional airbrush makeup kerala at its best!"
  },
  {
    question: "How much does airbrush makeup artist pala service cost?",
    answer: "Airbrush makeup artist pala services range from ₹25,000 to ₹50,000 depending on the package and services included. Airbrush wedding makeup pala packages include premium products, professional service, and our satisfaction guarantee."
  },
  {
    question: "Is airbrush foundation pala good for oily skin?",
    answer: "Absolutely! Airbrush foundation pala is excellent for oily skin as it creates a matte, breathable finish that controls shine throughout the day. The airbrush technique allows for oil-free application that lasts longer than traditional foundations."
  },
  {
    question: "Do you offer trial sessions for airbrush makeup pala?",
    answer: "Yes! We offer comprehensive trial sessions for airbrush makeup pala services. Trials include airbrush foundation testing, color matching, technique demonstration, and customization to ensure you're confident with your airbrush bridal makeup pala look."
  },
  {
    question: "Can airbrush makeup pala cover acne and scars?",
    answer: "Yes! Airbrush makeup pala provides excellent coverage for acne, scars, hyperpigmentation, and uneven skin tone. The airbrush technique allows for precise application that conceals imperfections while looking natural and feeling lightweight."
  },
  {
    question: "Is airbrush wedding makeup pala good for outdoor weddings?",
    answer: "Perfect! Airbrush wedding makeup pala is ideal for outdoor weddings as it's waterproof, sweat-proof, and humidity-resistant. The airbrush makeup studio pala formula withstands heat, sweat, and tears while maintaining a flawless finish."
  },
  {
    question: "What products do you use for professional airbrush makeup kerala?",
    answer: "For professional airbrush makeup kerala services, we use premium airbrush-specific products from brands like TEMPTU, Dinair, MAC Pro, and Kett Cosmetics. All products are high-quality, long-lasting, and safe for all skin types."
  },
  {
    question: "How long does airbrush bridal makeup pala application take?",
    answer: "Airbrush bridal makeup pala application takes 2-2.5 hours for complete transformation including preparation, airbrush foundation application, detailed eye makeup, and final touches. We arrive early to ensure a relaxed experience."
  },
  {
    question: "Do you provide airbrush makeup for bridal party in Pala?",
    answer: "Yes! We offer airbrush makeup pala services for bridal party members including mother, bridesmaids, and close relatives. Special discounted packages available when booking with the bride's airbrush bridal makeup pala service."
  },
  {
    question: "What's your cancellation policy for airbrush makeup artist pala bookings?",
    answer: "For airbrush makeup artist pala bookings, we require 40% advance payment. Cancellations made 30+ days before receive 70% refund; 15-29 days receive 40% refund; less than 15 days receive 20% refund. Date rescheduling options available."
  },
  {
    question: "Is airbrush makeup pala suitable for mature skin?",
    answer: "Yes! Airbrush makeup pala is excellent for mature skin as it doesn't settle into fine lines or wrinkles. The lightweight, buildable formula provides coverage without emphasizing texture, creating a smooth, youthful appearance."
  }
]

const airbrushBenefits = [
  {
    title: "Flawless Finish",
    description: "Airbrush makeup creates a perfect, poreless finish that looks natural in person and photographs flawlessly.",
    icon: "✨"
  },
  {
    title: "16+ Hour Lasting",
    description: "Professional airbrush makeup lasts 16-18 hours without touch-ups, perfect for long wedding days.",
    icon: "⏰"
  },
  {
    title: "Waterproof & Sweat-Proof",
    description: "Resistant to water, sweat, and tears - ideal for outdoor weddings and Kerala's humid climate.",
    icon: "💧"
  },
  {
    title: "Lightweight Feel",
    description: "Feels like wearing nothing at all while providing full coverage. Breathable and comfortable.",
    icon: "🌬️"
  },
  {
    title: "Buildable Coverage",
    description: "From sheer to full coverage, customize your look without looking cakey or heavy.",
    icon: "🎨"
  },
  {
    title: "Hygienic Application",
    description: "No brushes or sponges touch your face - completely sanitary and perfect for sensitive skin.",
    icon: "🦠"
  }
]

const airbrushServices = [
  {
    title: "Airbrush Bridal Makeup",
    description: "Complete bridal transformation using advanced airbrush techniques for flawless, long-lasting beauty.",
    price: "₹35,000"
  },
  {
    title: "Airbrush HD Makeup",
    description: "High-definition airbrush makeup perfect for photography and videography, 4K camera ready.",
    price: "₹30,000"
  },
  {
    title: "Airbrush Party Makeup",
    description: "Lightweight airbrush makeup for receptions, parties, and special occasions.",
    price: "₹15,000"
  },
  {
    title: "Airbrush Makeup Class",
    description: "Learn professional airbrush techniques from our expert makeup artists.",
    price: "₹10,000"
  }
]

export default function AirbrushMakeupPala() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/airbrush-makeup-pala-hero.webp"
              alt="Airbrush Makeup Pala - NIXTUDIO Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/50" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Airbrush Makeup Pala
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Experience advanced airbrush technology for flawless, long-lasting makeup. 
                Perfect for brides who demand perfection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Book Airbrush Service
                </Link>
                <Link 
                  href="/bridal-makeup-price-pala"
                  className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Airbrush Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why Choose Airbrush Makeup Pala
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                NIXTUDIO brings professional airbrush makeup technology to Pala, Kerala. 
                Our airbrush makeup artist pala expertise ensures flawless results that 
                last through your entire celebration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {airbrushBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-600">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Our Airbrush Makeup Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {airbrushServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <Link 
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Advanced Airbrush Technology
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Our airbrush makeup studio pala uses cutting-edge technology and premium products 
                  to deliver flawless results every time.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✓</span>
                    Professional airbrush compressors and guns
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✓</span>
                    Premium airbrush-specific makeup formulas
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✓</span>
                    Sanitary single-use nozzle systems
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✓</span>
                    Expert airbrush makeup artist training
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">✓</span>
                    Custom color matching and blending
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/airbrush-makeup-technology.webp"
                  alt="Airbrush Makeup Technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Pala Brides Love Our Airbrush Makeup
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">
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
              Airbrush Makeup Pala FAQ
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready for Flawless Airbrush Makeup?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Experience the magic of airbrush technology for your perfect wedding day look.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Book Airbrush Consultation
              </Link>
              <Link 
                href="/bridal-makeup-price-pala"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                View Airbrush Pricing
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
                <h3 className="text-xl font-bold mb-2 text-blue-600">Best Bridal Makeup Pala</h3>
                <p className="text-gray-700">Premium bridal makeup services</p>
              </Link>
              <Link href="/bridal-makeup-kottayam" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Bridal Makeup Kottayam</h3>
                <p className="text-gray-700">Kottayam district coverage</p>
              </Link>
              <Link href="/luxury-bridal-makeup-kerala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Luxury Bridal Makeup Kerala</h3>
                <p className="text-gray-700">High-end luxury experience</p>
              </Link>
              <Link href="/bridal-makeup-price-pala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Bridal Makeup Price Pala</h3>
                <p className="text-gray-700">Complete pricing information</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
