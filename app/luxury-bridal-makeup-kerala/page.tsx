import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury Bridal Makeup Kerala | NIXTUDIO Premium Studio Experience',
  description: 'Experience luxury bridal makeup in Kerala with NIXTUDIO. Premium HD & airbrush makeup, natural glowing looks, and exclusive bridal services across Kerala.',
  keywords: [
    'luxury bridal makeup kerala',
    'premium bridal makeup kerala',
    'bridal makeup kerala luxury',
    'high-end bridal makeup kerala',
    'nixtudio luxury kerala',
    'exclusive bridal makeup kerala',
    'luxury makeup artist kerala',
    'premium bridal studio kerala',
    'luxury wedding makeup kerala'
  ],
  openGraph: {
    title: 'Luxury Bridal Makeup Kerala | NIXTUDIO Premium Studio',
    description: 'Premium luxury bridal makeup experience across Kerala. Exclusive services, HD techniques, and personalized attention.',
    url: 'https://nixtudio.in/luxury-bridal-makeup-kerala',
    images: [{
      url: '/images/luxury-bridal-makeup-kerala-nixtudio.jpg',
      width: 1200,
      height: 630,
      alt: 'Luxury Bridal Makeup Kerala - NIXTUDIO Studio'
    }]
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Luxury Bridal Makeup Kerala - NIXTUDIO",
  "description": "Premium luxury bridal makeup services across Kerala. Exclusive HD and airbrush techniques for discerning brides.",
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
  "areaServed": {
    "@type": "Place",
    "name": "Kerala, India"
  },
  "serviceType": "Luxury Bridal Makeup Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "₹35,000 - ₹75,000",
    "priceCurrency": "INR"
  }
}

const testimonials = [
  {
    name: "Amrita Varma",
    location: "Kochi",
    text: "Luxury bridal makeup kerala at its finest! Nixtudio gave me the royal treatment. Premium bridal makeup kerala doesn't get better than this!",
    rating: 5
  },
  {
    name: "Radhika Nambiar",
    location: "Thiruvananthapuram",
    text: "Exclusive bridal makeup kerala experience was beyond my expectations. The luxury bridal studio kerala treatment made me feel like a queen.",
    rating: 5
  },
  {
    name: "Meenakshi Pillai",
    location: "Kozhikode",
    text: "High-end bridal makeup kerala service worth every penny. My luxury wedding makeup kerala look lasted perfectly through my beach wedding.",
    rating: 5
  },
  {
    name: "Ananya Menon",
    location: "Thrissur",
    text: "Luxury makeup artist kerala with international standards. Nixtudio's premium bridal studio kerala experience is unmatched in Kerala.",
    rating: 5
  },
  {
    name: "Diya Krishnan",
    location: "Kollam",
    text: "Bridal makeup kerala luxury experience exceeded all expectations. The attention to detail and premium products made all the difference.",
    rating: 5
  },
  {
    name: "Sonia James",
    location: "Alappuzha",
    text: "Luxury bridal makeup kerala destination wedding service was incredible. They traveled to my resort and created magic!",
    rating: 5
  },
  {
    name: "Priya Sharma",
    location: "Palakkad",
    text: "Premium bridal makeup kerala with personalized attention. The luxury bridal studio kerala team understood my vision perfectly.",
    rating: 5
  },
  {
    name: "Aishwarya Raj",
    location: "Malappuram",
    text: "Exclusive bridal makeup kerala experience that made my traditional wedding special. Luxury wedding makeup kerala at its best!",
    rating: 5
  }
]

const faqs = [
  {
    question: "What makes your luxury bridal makeup kerala different?",
    answer: "Our luxury bridal makeup kerala service includes premium international products, advanced HD and airbrush techniques, pre-bridal skincare treatments, personalized consultations, on-call support, and our signature 18+ hour lasting guarantee. This premium bridal makeup kerala experience is designed for discerning brides who demand perfection."
  },
  {
    question: "Do you offer premium bridal makeup kerala destination wedding services?",
    answer: "Yes! We provide luxury bridal makeup kerala destination wedding services across all popular Kerala destinations including Munnar, Kumarakom, Kovalam, Thekkady, and backwater resorts. Our exclusive bridal makeup kerala team travels with complete professional setup and premium products."
  },
  {
    question: "What's included in your luxury bridal studio kerala package?",
    answer: "Our luxury bridal studio kerala package includes: pre-bridal skincare consultation, premium international products (MAC, NARS, Huda Beauty), HD/airbrush foundation application, professional eye makeup, lip enhancement, false lashes, hair styling, saree draping assistance, jewelry styling, touch-up kit, and on-call support throughout your wedding day."
  },
  {
    question: "How much does luxury wedding makeup kerala cost?",
    answer: "Our luxury wedding makeup kerala packages range from ₹35,000 to ₹75,000 depending on services, location, and customization. Premium bridal makeup kerala pricing includes all products, services, travel within Kerala, and our satisfaction guarantee."
  },
  {
    question: "Are you available for luxury makeup artist kerala services across all districts?",
    answer: "Yes! As a leading luxury makeup artist kerala, we serve all 14 districts including Thiruvananthapuram, Kochi, Kozhikode, Thrissur, Kollam, Palakkad, Alappuzha, Malappuram, Kannur, Kasaragod, Wayanad, Ernakulam, Idukki, and Pathanamthitta."
  },
  {
    question: "What products do you use for premium bridal makeup kerala?",
    answer: "For premium bridal makeup kerala services, we use luxury international brands including Charlotte Tilbury, Tom Ford, Dior, Chanel, YSL, Giorgio Armani, La Mer, Clé de Peau, and limited edition collections. All products are authentic, premium quality, and photography-friendly."
  },
  {
    question: "Do you offer trial sessions for luxury bridal makeup kerala?",
    answer: "Yes! We offer comprehensive trial sessions for luxury bridal makeup kerala services. Trials include product testing, look customization, skincare assessment, and detailed consultation to ensure your luxury wedding makeup kerala experience exceeds expectations."
  },
  {
    question: "How far in advance should I book exclusive bridal makeup kerala services?",
    answer: "For exclusive bridal makeup kerala services, we recommend booking 8-12 months in advance, especially for peak wedding seasons (November to February) and destination weddings. Early booking ensures availability for your preferred date and allows for proper planning."
  },
  {
    question: "Do you provide luxury bridal makeup kerala for international weddings?",
    answer: "Yes! We offer luxury bridal makeup kerala services for international destination weddings. Our team is experienced with various cultural requirements, climate conditions, and international standards. We travel globally for our premium bridal makeup kerala clients."
  },
  {
    question: "What makes your luxury bridal studio kerala experience unique?",
    answer: "Our luxury bridal studio kerala experience includes: personalized one-on-one consultations, custom-blended foundations, exclusive product access, celebrity-inspired techniques, pre-wedding skincare packages, emotional support, and our signature 'Bridal Concierge' service that handles all your beauty needs."
  },
  {
    question: "Do you offer luxury wedding makeup kerala for different cultural weddings?",
    answer: "Absolutely! We specialize in luxury wedding makeup kerala for Hindu, Christian, Muslim, and interfaith weddings. Our premium bridal makeup kerala services respect cultural traditions while incorporating modern luxury elements and international beauty standards."
  },
  {
    question: "What's your cancellation policy for luxury bridal makeup kerala bookings?",
    answer: "For luxury bridal makeup kerala bookings, we require 50% advance payment. Cancellations made 60+ days before receive 80% refund; 30-59 days receive 50% refund; less than 30 days receive 25% refund. We offer date rescheduling options subject to availability."
  },
  {
    question: "Do you provide makeup for bridal party with luxury bridal makeup kerala service?",
    answer: "Yes! Our luxury bridal makeup kerala service includes discounted packages for bridal party members. Mother, bridesmaids, sisters, and close relatives receive premium treatment at special rates when booking with the bride."
  },
  {
    question: "How long does luxury bridal makeup kerala application take?",
    answer: "Luxury bridal makeup kerala application takes 3-4 hours for complete transformation including pre-makeup skincare, foundation application, eye makeup, lip enhancement, hair styling, and final touches. We arrive early to ensure a relaxed, luxurious experience."
  },
  {
    question: "What's included in your premium bridal makeup kerala after-service support?",
    answer: "Our premium bridal makeup kerala after-service includes: on-call support throughout your wedding day, emergency touch-up kit, detailed makeup removal guide, skincare recommendations, follow-up consultation, and complimentary anniversary makeup session for your first anniversary."
  }
]

const luxuryFeatures = [
  {
    title: "Premium International Products",
    description: "Exclusive access to luxury brands like Charlotte Tilbury, Tom Ford, Dior, and limited edition collections not available elsewhere in Kerala.",
    icon: "💎"
  },
  {
    title: "Advanced HD & Airbrush Technology",
    description: "Cutting-edge techniques for flawless, long-lasting luxury bridal makeup kerala that looks perfect in 4K photography and videos.",
    icon: "🎨"
  },
  {
    title: "Pre-Bridal Skincare Package",
    description: "Luxury pre-bridal treatments including facials, peels, and skincare routines to prepare your skin for the perfect canvas.",
    icon: "✨"
  },
  {
    title: "Personalized Color Analysis",
    description: "Professional color analysis and custom-blended foundations to match your exact skin tone and undertones.",
    icon: "🎯"
  },
  {
    title: "Celebrity-Inspired Techniques",
    description: "Latest techniques inspired by international celebrity makeup artists and red carpet trends adapted for Kerala brides.",
    icon: "👑"
  },
  {
    title: "18+ Hour Lasting Guarantee",
    description: "Premium formulations and techniques ensure your luxury bridal makeup kerala lasts from morning rituals to late-night receptions.",
    icon: "⏰"
  }
]

const serviceAreas = [
  "Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam",
  "Palakkad", "Alappuzha", "Malappuram", "Kannur", "Kasaragod",
  "Wayanad", "Ernakulam", "Idukki", "Pathanamthitta"
]

export default function LuxuryBridalMakeupKerala() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/luxury-bridal-makeup-kerala-hero.webp"
              alt="Luxury Bridal Makeup Kerala - NIXTUDIO Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-purple-900/60" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Luxury Bridal Makeup Kerala
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Experience the pinnacle of premium bridal makeup in Kerala. 
                Exclusive services, international products, and personalized luxury.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Book Luxury Experience
                </Link>
                <Link 
                  href="/bridal-makeup-price-pala"
                  className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Luxury Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                What Defines Our Luxury Bridal Makeup Kerala Experience
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                NIXTUDIO sets the standard for luxury bridal makeup kerala with premium products, 
                advanced techniques, and personalized attention that transforms your wedding day 
                into an unforgettable luxury experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {luxuryFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-amber-600">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Luxury Bridal Makeup Kerala - All Districts Covered
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-amber-600">Premium Service Across Kerala</h3>
              <p className="text-gray-700 mb-6">
                Our luxury bridal makeup kerala service spans all 14 districts, bringing 
                premium bridal makeup kerala excellence to every corner of God's Own Country.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Our Premium Bridal Makeup Kerala Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">Royal Luxury Package</h3>
                <p className="text-gray-700 mb-4">
                  The ultimate luxury bridal makeup kerala experience for discerning brides. 
                  This premium bridal makeup kerala package includes everything you need 
                  for your perfect wedding day transformation.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pre-bridal skincare package (3 sessions)</li>
                  <li>• Premium international products</li>
                  <li>• Custom-blended foundation</li>
                  <li>• HD and airbrush techniques</li>
                  <li>• Professional hair styling</li>
                  <li>• Saree draping assistance</li>
                  <li>• Jewelry styling consultation</li>
                  <li>• On-call support team</li>
                  <li>• Touch-up kit and emergency support</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">Elite Destination Package</h3>
                <p className="text-gray-700 mb-4">
                  Exclusive bridal makeup kerala service for destination weddings. 
                  Our luxury wedding makeup kerala team travels to resorts, backwaters, 
                  and exotic locations across Kerala.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Travel to any Kerala destination</li>
                  <li>• Complete professional setup</li>
                  <li>• Climate-adapted makeup techniques</li>
                  <li>• Multiple look changes</li>
                  <li>• Pre-wedding event makeup</li>
                  <li>• Post-wedding photoshoot makeup</li>
                  <li>• Assistant makeup artist</li>
                  <li>• Luxury accommodation for team</li>
                  <li>• 24/7 availability during wedding events</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">Celebrity-Inspired Package</h3>
                <p className="text-gray-700 mb-4">
                  Red carpet luxury bridal makeup kerala inspired by international celebrities. 
                  Premium bridal makeup kerala techniques that make you look and feel like a star.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Celebrity makeup techniques</li>
                  <li>• Advanced contouring and highlighting</li>
                  <li>• False lash application</li>
                  <li>• Lip enhancement and shaping</li>
                  <li>• Body makeup for exposed areas</li>
                  <li>• Photogenic makeup techniques</li>
                  <li>• Video-ready finish</li>
                  <li>• Color analysis consultation</li>
                  <li>• Social media ready look</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">Traditional Luxury Package</h3>
                <p className="text-gray-700 mb-4">
                  Luxury bridal makeup kerala that honors traditional Kerala aesthetics 
                  while incorporating modern luxury elements and premium products.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Traditional Kerala bridal aesthetics</li>
                  <li>• Cultural color preferences</li>
                  <li>• Temple-appropriate makeup</li>
                  <li>• Church wedding ready</li>
                  <li>• Muslim wedding traditions</li>
                  <li>• Gold jewelry compatibility</li>
                  <li>• Traditional hair styling</li>
                  <li>• Cultural makeup techniques</li>
                  <li>• Modern-traditional fusion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Luxury */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Why Choose Our Luxury Bridal Studio Kerala Experience
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Award-Winning Excellence</h3>
                <p className="text-gray-700">
                  Recognized as Kerala's premier luxury bridal makeup kerala studio 
                  with multiple awards and celebrity clientele.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Exclusive Product Access</h3>
                <p className="text-gray-700">
                  Premium international products and limited edition collections 
                  not available elsewhere in Kerala's luxury bridal makeup market.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💝</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Personalized Luxury</h3>
                <p className="text-gray-700">
                  One-on-one consultations and custom-tailored luxury bridal makeup kerala 
                  experiences designed exclusively for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Kerala Brides Love Our Luxury Experience
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 font-bold">
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
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Luxury Bridal Makeup Kerala FAQ
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-amber-600">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready for the Ultimate Luxury Bridal Makeup Kerala Experience?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join elite Kerala brides who chose NIXTUDIO for their luxury wedding day transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Book Luxury Consultation
              </Link>
              <Link 
                href="/bridal-makeup-price-pala"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                View Luxury Packages
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Explore Our Premium Bridal Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link href="/best-bridal-makeup-pala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-amber-600">Best Bridal Makeup Pala</h3>
                <p className="text-gray-700">Premium bridal makeup in Pala</p>
              </Link>
              <Link href="/bridal-makeup-kottayam" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-amber-600">Bridal Makeup Kottayam</h3>
                <p className="text-gray-700">Kottayam district coverage</p>
              </Link>
              <Link href="/airbrush-makeup-pala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-amber-600">Airbrush Makeup Pala</h3>
                <p className="text-gray-700">Advanced airbrush techniques</p>
              </Link>
              <Link href="/bridal-makeup-price-pala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-amber-600">Bridal Makeup Price Pala</h3>
                <p className="text-gray-700">Luxury pricing information</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
