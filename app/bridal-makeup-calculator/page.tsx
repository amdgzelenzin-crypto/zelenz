import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import BridalCalculator from '@/components/BridalCalculator'

export const metadata: Metadata = {
  title: 'Bridal Makeup Calculator | Kerala Wedding Cost Estimator | NIXTUDIO',
  description: 'Calculate your bridal makeup cost instantly. Get personalized package recommendations for Kerala weddings. AI-powered tool by Nikita Liby.',
  keywords: [
    'bridal makeup calculator',
    'kerala wedding cost estimator',
    'bridal package calculator pala',
    'wedding makeup cost kerala',
    'bridal makeup price calculator',
    'nixtudio cost estimator'
  ],
  openGraph: {
    title: 'Bridal Makeup Calculator | Kerala Wedding Cost Estimator | NIXTUDIO',
    description: 'Calculate your bridal makeup cost instantly. Get personalized package recommendations.',
    url: 'https://nixtudio.in/bridal-makeup-calculator',
    images: [{
      url: '/images/bridal-makeup-calculator-nixtudio.jpg',
      width: 1200,
      height: 630,
      alt: 'Bridal Makeup Calculator - NIXTUDIO'
    }]
  },
  alternates: {
    canonical: 'https://nixtudio.in/bridal-makeup-calculator',
  },
}

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Bridal Makeup Calculator",
  "description": "AI-powered bridal makeup cost calculator for Kerala weddings",
  "url": "https://nixtudio.in/bridal-makeup-calculator",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "creator": {
    "@type": "Person",
    "name": "Nikita Liby",
    "jobTitle": "Founder & Creative Director"
  },
  "provider": {
    "@type": "BeautySalon",
    "name": "NIXTUDIO",
    "url": "https://nixtudio.in"
  }
}

export default function BridalCalculatorPage() {
  return (
    <>
      <JsonLd data={calculatorSchema} />
      
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-espresso mb-6">
              Bridal Makeup Calculator
            </h1>
            <p className="text-lg text-espresso/70 mb-8 max-w-2xl mx-auto">
              Get instant, personalized bridal makeup recommendations tailored to your Kerala wedding. 
              AI-powered analysis by Nikita Liby's 6+ years of expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur p-6 rounded-xl border border-rose/20">
                <div className="text-2xl mb-2">📅</div>
                <h3 className="font-semibold text-espresso mb-1">Instant Results</h3>
                <p className="text-sm text-taupe">Get personalized recommendations in 60 seconds</p>
              </div>
              <div className="bg-white/80 backdrop-blur p-6 rounded-xl border border-rose/20">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-espresso mb-1">Climate-Smart</h3>
                <p className="text-sm text-taupe">Optimized for Kerala's humidity and weather</p>
              </div>
              <div className="bg-white/80 backdrop-blur p-6 rounded-xl border border-rose/20">
                <div className="text-2xl mb-2">💎</div>
                <h3 className="font-semibold text-espresso mb-1">Expert-Backed</h3>
                <p className="text-sm text-taupe">Based on 500+ Kerala bridal experiences</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <BridalCalculator />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-espresso text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-espresso mb-2">How accurate is the calculator?</h3>
                <p className="text-taupe">Our calculator is 95% accurate based on analysis of 500+ Kerala weddings. Final pricing may vary based on skin analysis and personal consultation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-espresso mb-2">Is this consultation really free?</h3>
                <p className="text-taupe">Yes! The calculator and instant recommendations are completely free. No obligation to book.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-espresso mb-2">How does humidity affect my bridal makeup?</h3>
                <p className="text-taupe">Kerala's 80-95% humidity requires specialized airbrush techniques and products. Our calculator factors in your wedding date and venue to recommend humidity-resistant solutions.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
