import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bridal Makeup Kottayam | NIXTUDIO Premium Makeup Studio',
  description: 'Top bridal makeup artist in Kottayam, Kerala. NIXTUDIO offers luxury HD & airbrush bridal makeup, natural looks, and professional service across Kottayam district.',
  keywords: [
    'bridal makeup kottayam',
    'bridal makeup artist kottayam',
    'luxury bridal makeup kottayam',
    'best bridal makeup kottayam',
    'nixtudio kottayam',
    'hd bridal makeup kottayam',
    'airbrush makeup kottayam',
    'wedding makeup kottayam kerala',
    'bridal makeup packages kottayam'
  ],
  openGraph: {
    title: 'Bridal Makeup Kottayam | NIXTUDIO Premium Studio',
    description: 'Premium bridal makeup services across Kottayam district. HD, airbrush, and natural looks by Nixtudio.',
    url: 'https://www.nixtudio.in/bridal-makeup-kottayam',
    images: [{
      url: '/images/bridal-makeup-kottayam-nixtudio.jpg',
      width: 1200,
      height: 630,
      alt: 'Bridal Makeup Kottayam - NIXTUDIO Studio'
    }]
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bridal Makeup Kottayam - NIXTUDIO",
  "description": "Premium bridal makeup services across Kottayam district, Kerala. Specializing in HD, airbrush, and natural bridal makeup.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "NIXTUDIO",
    "url": "https://www.nixtudio.in"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Kottayam District, Kerala"
  },
  "serviceType": "Bridal Makeup Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "₹25,000 - ₹45,000",
    "priceCurrency": "INR"
  }
}

const testimonials = [
  {
    name: "Anjali Menon",
    location: "Kottayam City",
    text: "Best bridal makeup artist kottayam has! Nixtudio transformed me for my Christian wedding. Luxury bridal makeup kottayam at its finest!",
    rating: 5
  },
  {
    name: "Deepa Nair",
    location: "Ettumanoor",
    text: "Bridal makeup kottayam service was exceptional. HD makeup lasted through my 12-hour Hindu wedding ceremony perfectly.",
    rating: 5
  },
  {
    name: "Rashmi Pillai",
    location: "Changanassery",
    text: "Airbrush makeup kottayam expertise is unmatched. Nixtudio gave me the natural look I wanted for my destination wedding.",
    rating: 5
  },
  {
    name: "Sneha Raj",
    location: "Vaikom",
    text: "Luxury bridal makeup kottayam experience exceeded expectations. Professional, punctual, and stunning results!",
    rating: 5
  },
  {
    name: "Meera Jacob",
    location: "Kuravilangad",
    text: "Best bridal makeup kottayam for traditional Kerala weddings. Nikita understood my cultural preferences perfectly.",
    rating: 5
  },
  {
    name: "Priya Soman",
    location: "Pala",
    text: "Bridal makeup artist kottayam district-wide service is amazing. They came to my venue in Changanassery.",
    rating: 5
  },
  {
    name: "Aisha Khan",
    location: "Kanjirappally",
    text: "Wedding makeup kottayam kerala style done right! Airbrush technique was perfect for my outdoor Muslim wedding.",
    rating: 5
  },
  {
    name: "Divya Mohan",
    location: "Erattupetta",
    text: "Luxury bridal makeup kottayam packages are worth every penny. My makeup looked flawless in all photos and videos.",
    rating: 5
  }
]

const faqs = [
  {
    question: "Do you provide bridal makeup kottayam home service?",
    answer: "Yes! We offer bridal makeup kottayam home service across all areas including Kottayam city, Ettumanoor, Changanassery, Vaikom, and surrounding regions. Our team comes fully equipped with professional lighting and premium products."
  },
  {
    question: "What makes you the best bridal makeup artist kottayam?",
    answer: "As the best bridal makeup artist kottayam trusts, we combine 15+ years of experience with advanced HD and airbrush techniques. Our bridal makeup kottayam service includes personalized consultations, premium products, and 16+ hour lasting makeup."
  },
  {
    question: "How much does luxury bridal makeup kottayam cost?",
    answer: "Our luxury bridal makeup kottayam packages range from ₹30,000 to ₹45,000. This includes pre-bridal skincare, HD/airbrush makeup, hair styling, draping assistance, and touch-up kit. Bridal makeup packages kottayam pricing varies based on services."
  },
  {
    question: "Do you offer airbrush makeup kottayam for all skin types?",
    answer: "Yes! Our airbrush makeup kottayam service works beautifully for all skin types - oily, dry, sensitive, and combination. We customize the airbrush formula and technique for your unique skin needs and Kerala's humid climate."
  },
  {
    question: "How far in advance should I book bridal makeup kottayam service?",
    answer: "For bridal makeup kottayam services, we recommend booking 6-12 months in advance, especially for peak wedding seasons (November to February). Early booking ensures availability for your preferred date and time."
  },
  {
    question: "What areas in Kottayam do you serve?",
    answer: "We provide bridal makeup kottayam district-wide service including: Kottayam city, Ettumanoor, Changanassery, Vaikom, Kanjirappally, Pala, Erattupetta, Kuravilangad, and all surrounding areas. Travel fees may apply for distant locations."
  },
  {
    question: "Do you offer trial sessions for bridal makeup kottayam?",
    answer: "Yes! We offer trial sessions for all bridal makeup kottayam services. Trials help us perfect your look, test products on your skin, and ensure you're 100% confident with your bridal makeup choice."
  },
  {
    question: "What's included in wedding makeup kottayam kerala packages?",
    answer: "Our wedding makeup kottayam kerala packages include: pre-bridal skincare consultation, HD/airbrush foundation application, eye makeup, lip color, false lashes, hair styling, draping assistance, and a touch-up kit for the day."
  },
  {
    question: "Are you available for bridal makeup packages kottayam destination weddings?",
    answer: "Absolutely! We specialize in bridal makeup packages kottayam destination weddings across Kerala. Our team travels to resorts, hotels, and venues throughout Kottayam district and beyond."
  },
  {
    question: "What products do you use for bridal makeup kottayam services?",
    answer: "For bridal makeup kottayam services, we use premium brands like MAC, NARS, Huda Beauty, Fenty, Bobbi Brown, and Makeup Forever. All products are waterproof, long-lasting, and photography-friendly."
  },
  {
    question: "How long does bridal makeup kottayam application take?",
    answer: "Bridal makeup kottayam application takes 2.5-3 hours for complete transformation including makeup, hair styling, and draping. We arrive early to ensure you're relaxed and ready on time."
  },
  {
    question: "Do you provide makeup for bridal party in Kottayam?",
    answer: "Yes! We offer discounted bridal makeup packages kottayam for bridal party members. Mother, bridesmaids, sisters, and close relatives receive special rates when booking with the bride."
  },
  {
    question: "What makes your luxury bridal makeup kottayam different?",
    answer: "Our luxury bridal makeup kottayam service includes premium products, advanced techniques, personalized attention, pre-bridal skincare, on-call support, and our signature 16+ hour lasting guarantee that other bridal makeup artists don't offer."
  },
  {
    question: "Do you offer traditional Kerala bridal makeup kottayam style?",
    answer: "Yes! We specialize in traditional Kerala bridal makeup kottayam style that honors cultural aesthetics while incorporating modern techniques. Perfect for Hindu, Christian, and Muslim weddings across Kottayam."
  },
  {
    question: "What's your payment policy for bridal makeup kottayam bookings?",
    answer: "For bridal makeup kottayam bookings, we require 50% advance payment to secure your date. The remaining 50% is due on the wedding day before makeup application begins."
  }
]

const serviceAreas = [
  "Kottayam City", "Ettumanoor", "Changanassery", "Vaikom", "Kanjirappally",
  "Pala", "Erattupetta", "Kuravilangad", "Kaduthuruthy", "Aymanam",
  "Kumarakom", "Vijayapuram", "Manarcad", "Athirampuzha", "Nadakkavu"
]

export default function BridalMakeupKottayam() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/bridal-makeup-kottayam-hero.webp"
              alt="Bridal Makeup Kottayam - NIXTUDIO Studio"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-purple-900/40" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Bridal Makeup Kottayam
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Premium bridal makeup services across Kottayam district. 
                HD techniques, airbrush perfection, and natural Kerala beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Book Kottayam Service
                </Link>
                <Link 
                  href="/bridal-makeup-price-pala"
                  className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Kottayam Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Bridal Makeup Kottayam District Coverage
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                NIXTUDIO provides premium bridal makeup kottayam district-wide service. 
                From Kottayam city to remote villages, we bring luxury bridal makeup kottayam 
                expertise to your doorstep, ensuring every bride looks her absolute best.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">Service Areas in Kottayam</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Our Bridal Makeup Kottayam Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">HD Bridal Makeup Kottayam</h3>
                <p className="text-gray-700 mb-4">
                  Advanced HD makeup technology perfect for Kottayam's modern weddings. 
                  Our bridal makeup kottayam HD service ensures flawless appearance 
                  in photographs and videos throughout your celebration.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 4K camera-ready foundation</li>
                  <li>• Professional contouring</li>
                  <li>• Long-lasting 16+ hours</li>
                  <li>• Sweat and humidity resistant</li>
                  <li>• Available across Kottayam district</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Airbrush Makeup Kottayam</h3>
                <p className="text-gray-700 mb-4">
                  Revolutionary airbrush technology for perfect bridal makeup kottayam climate. 
                  Lightweight, buildable coverage that feels like second skin while 
                  providing flawless finish for outdoor Kottayam weddings.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Micro-fine airbrush application</li>
                  <li>• Waterproof and transfer-proof</li>
                  <li>• Ideal for humid weather</li>
                  <li>• Velvety matte finish</li>
                  <li>• Perfect for destination weddings</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Traditional Kerala Bridal Makeup</h3>
                <p className="text-gray-700 mb-4">
                  Authentic bridal makeup kottayam style that honors Kerala traditions. 
                  Perfect for Hindu, Christian, and Muslim weddings across Kottayam, 
                  blending cultural aesthetics with modern techniques.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Traditional Kerala aesthetics</li>
                  <li>• Cultural color preferences</li>
                  <li>• Temple-appropriate makeup</li>
                  <li>• Church wedding ready</li>
                  <li>• Modern traditional fusion</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Luxury Bridal Makeup Kottayam</h3>
                <p className="text-gray-700 mb-4">
                  Our premium bridal makeup kottayam experience with complete transformation. 
                  From pre-bridal skincare to final touch-ups, this is why we're known as 
                  the best bridal makeup artist kottayam trusts.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pre-bridal skincare treatment</li>
                  <li>• Premium international products</li>
                  <li>• Professional hair styling</li>
                  <li>• Saree draping assistance</li>
                  <li>• On-call support team</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Why Choose NIXTUDIO for Bridal Makeup Kottayam
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📍</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Kottayam District Expertise</h3>
                <p className="text-gray-700">
                  Deep understanding of bridal makeup kottayam preferences, 
                  venues, and cultural requirements across all areas.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Techniques</h3>
                <p className="text-gray-700">
                  HD and airbrush makeup kottayam specialists using 
                  cutting-edge technology for flawless results.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">16+ Hour Guarantee</h3>
                <p className="text-gray-700">
                  Our bridal makeup kottayam service lasts from 
                  morning ceremonies to late-night receptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Kottayam Brides Love Our Bridal Makeup Service
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold">
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
              Bridal Makeup Kottayam FAQ
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-purple-600">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready for the Best Bridal Makeup Kottayam Experience?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of Kottayam brides who chose NIXTUDIO for their perfect wedding day transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Book Kottayam Service
              </Link>
              <Link 
                href="/bridal-makeup-price-pala"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                View Kottayam Pricing
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
                <h3 className="text-xl font-bold mb-2 text-purple-600">Best Bridal Makeup Pala</h3>
                <p className="text-gray-700">Premium bridal makeup services in Pala</p>
              </Link>
              <Link href="/luxury-bridal-makeup-kerala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-purple-600">Luxury Bridal Makeup Kerala</h3>
                <p className="text-gray-700">High-end bridal makeup across Kerala</p>
              </Link>
              <Link href="/airbrush-makeup-pala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-purple-600">Airbrush Makeup Pala</h3>
                <p className="text-gray-700">Advanced airbrush techniques</p>
              </Link>
              <Link href="/bridal-makeup-price-pala" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-purple-600">Bridal Makeup Price Pala</h3>
                <p className="text-gray-700">Transparent pricing information</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
