'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Church, Building, Trees, Building2, Wind, Calendar, Gift, Diamond, Award, Quote } from 'lucide-react'

interface CalculatorData {
  weddingDate: string
  venueType: string
  guestCount: string
  functions: string[]
  skinType: string
  concerns: string[]
}

interface Recommendation {
  package: string
  price: string
  includes: string[]
  whyRecommended: string
  urgencyLevel: 'low' | 'medium' | 'high'
}

export default function BridalCalculator() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<CalculatorData>({
    weddingDate: '',
    venueType: '',
    guestCount: '',
    functions: [],
    skinType: '',
    concerns: []
  })
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const venueTypes = [
    { value: 'church', label: 'Christian Church', icon: Church },
    { value: 'temple', label: 'Hindu Temple', icon: Building2 },
    { value: 'mosque', label: 'Muslim Mosque', icon: Building },
    { value: 'outdoor', label: 'Outdoor/Backwater', icon: Trees },
    { value: 'hall', label: 'Convention Hall', icon: Building }
  ]

  const functionOptions = [
    { value: 'engagement', label: 'Engagement' },
    { value: 'mehndi', label: 'Mehndi/Haldi' },
    { value: 'sangeet', label: 'Sangeet/Reception' },
    { value: 'wedding', label: 'Wedding Day' },
    { value: 'postwedding', label: 'Post-Wedding Shoot' }
  ]

  const skinTypes = [
    { value: 'oily', label: 'Oily/Combination' },
    { value: 'dry', label: 'Dry/Sensitive' },
    { value: 'normal', label: 'Normal' },
    { value: 'mixed', label: 'Not Sure' }
  ]

  const concernOptions = [
    { value: 'acne', label: 'Acne/Blemishes' },
    { value: 'darkspots', label: 'Dark Spots' },
    { value: 'sensitivity', label: 'Sensitivity' },
    { value: 'pigmentation', label: 'Pigmentation' },
    { value: 'none', label: 'No Major Concerns' }
  ]

  const calculateRecommendation = () => {
    setIsCalculating(true)
    
    // Simulate AI processing
    setTimeout(() => {
      let packageType = 'Premium'
      let price = '₹27,500'
      let includes = []
      let whyRecommended = ''
      let urgencyLevel: 'low' | 'medium' | 'high' = 'medium'

      // AI Logic based on inputs
      const weddingDate = new Date(data.weddingDate)
      const monthsUntil = Math.ceil((weddingDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 30))
      
      if (data.functions.length >= 3) {
        packageType = 'Luxury'
        price = '₹45,000'
        urgencyLevel = monthsUntil < 3 ? 'high' : 'medium'
      } else if (data.functions.length === 2) {
        packageType = 'Premium'
        price = '₹32,500'
      } else {
        packageType = 'Classic'
        price = '₹27,500'
      }

      includes = [
        'Nikita Liby - Personal Attention (No Delegation)',
        'HD & Airbrush Makeup',
        'Humidity-Resistant Finish (16+ Hours)',
        'Pre-Wedding Skin Preparation',
        'Hair Styling & Draping'
      ]

      if (data.functions.length > 1) {
        includes.push('Multiple Function Coordination')
      }

      if (data.venueType === 'outdoor') {
        includes.push('Extra-Strength Weather Protection')
        whyRecommended = 'Outdoor venues require specialized humidity-resistant techniques for Kerala\'s tropical climate.'
      } else if (data.venueType === 'church') {
        whyRecommended = 'Church lighting demands our signature "Glow-from-within" technique for natural elegance.'
      } else if (data.venueType === 'temple') {
        whyRecommended = 'Temple ceremonies need heat-activated formulas that improve with warmth and won\'t transfer onto traditional attire.'
      }

      if (data.concerns.includes('acne') || data.concerns.includes('darkspots')) {
        includes.push('Advanced Skin Correction')
        whyRecommended += ' Your skin concerns require specialized preparation and medical-grade products.'
      }

      if (monthsUntil < 3) {
        urgencyLevel = 'high'
        whyRecommended += ' ⚠️ Book ASAP - Limited dates available!'
      } else if (monthsUntil > 6) {
        urgencyLevel = 'low'
      }

      setRecommendation({
        package: packageType,
        price,
        includes,
        whyRecommended,
        urgencyLevel
      })
      
      setIsCalculating(false)
      setStep(4)
    }, 2000)
  }

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-serif text-espresso mb-6">When is your wedding?</h2>
            <input
              type="date"
              value={data.weddingDate}
              onChange={(e) => setData({...data, weddingDate: e.target.value})}
              className="w-full p-4 border border-rose/20 rounded-lg focus:border-rose focus:outline-none text-lg"
              min={new Date().toISOString().split('T')[0]}
            />
            <button
              onClick={() => data.weddingDate && setStep(2)}
              disabled={!data.weddingDate}
              className="mt-6 w-full bg-rose text-white py-4 rounded-lg font-semibold disabled:bg-gray-300 hover:bg-rose/90 transition-colors"
            >
              Next →
            </button>
          </div>
        )

      case 2:
        return (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-serif text-espresso mb-6">Where is your venue?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {venueTypes.map((venue) => (
                <motion.button
                    key={venue.value}
                    onClick={() => setData({...data, venueType: venue.value})}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      data.venueType === venue.value 
                        ? 'border-rose bg-rose/10' 
                        : 'border-rose/20 hover:border-rose/40'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-lg bg-rose-50/50 border border-rose-100/50"
                      whileHover={{ scale: 1.05 }}
                    >
                      <venue.icon className="w-6 h-6 text-rose-600" strokeWidth={1.5} />
                    </motion.div>
                    <div className="font-medium text-espresso">{venue.label}</div>
                  </motion.button>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              <button onClick={() => setStep(1)} className="flex-1 border border-rose text-rose py-3 rounded-lg font-semibold hover:bg-rose/5">
                ← Back
              </button>
              <button
                onClick={() => data.venueType && setStep(3)}
                disabled={!data.venueType}
                className="flex-1 bg-rose text-white py-3 rounded-lg font-semibold disabled:bg-gray-300 hover:bg-rose/90"
              >
                Next →
              </button>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-serif text-espresso mb-6">What functions need makeup?</h2>
            <div className="space-y-3 mb-6">
              {functionOptions.map((func) => (
                <label key={func.value} className="flex items-center p-3 border border-rose/20 rounded-lg cursor-pointer hover:bg-rose/5">
                  <input
                    type="checkbox"
                    checked={data.functions.includes(func.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setData({...data, functions: [...data.functions, func.value]})
                      } else {
                        setData({...data, functions: data.functions.filter(f => f !== func.value)})
                      }
                    }}
                    className="mr-3 w-5 h-5 text-rose"
                  />
                  <span className="text-espresso">{func.label}</span>
                </label>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-espresso mb-3">Skin type (optional)</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {skinTypes.map((skin) => (
                <button
                  key={skin.value}
                  onClick={() => setData({...data, skinType: skin.value})}
                  className={`p-3 rounded-lg border transition-all ${
                    data.skinType === skin.value 
                      ? 'border-rose bg-rose/10' 
                      : 'border-rose/20 hover:border-rose/40'
                  }`}
                >
                  {skin.label}
                </button>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-espresso mb-3">Any concerns? (optional)</h3>
            <div className="space-y-2 mb-6">
              {concernOptions.map((concern) => (
                <label key={concern.value} className="flex items-center p-2">
                  <input
                    type="checkbox"
                    checked={data.concerns.includes(concern.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setData({...data, concerns: [...data.concerns, concern.value]})
                      } else {
                        setData({...data, concerns: data.concerns.filter(c => c !== concern.value)})
                      }
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm text-espresso">{concern.label}</span>
                </label>
              ))}
            </div>

            <div className="flex gap-4">
              <button onClick={() => setStep(2)} className="flex-1 border border-rose text-rose py-3 rounded-lg font-semibold hover:bg-rose/5">
                ← Back
              </button>
              <button
                onClick={calculateRecommendation}
                disabled={data.functions.length === 0 || isCalculating}
                className="flex-1 bg-rose text-white py-3 rounded-lg font-semibold disabled:bg-gray-300 hover:bg-rose/90"
              >
                {isCalculating ? 'Analyzing...' : 'Get My Recommendation'}
              </button>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <motion.div 
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-rose-50/50 border border-rose-100/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-8 h-8 text-rose-600" strokeWidth={1.5} />
              </motion.div>
              <h2 className="text-3xl font-serif text-espresso mb-2">Your Personalized Recommendation</h2>
              <p className="text-taupe">AI-analyzed based on your Kerala wedding requirements</p>
            </div>

            {recommendation && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-rose/10 to-pink/10 p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif text-espresso">{recommendation.package} Package</h3>
                      <div className="text-3xl font-bold text-rose mt-2">{recommendation.price}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      recommendation.urgencyLevel === 'high' ? 'bg-red-100 text-red-700' :
                      recommendation.urgencyLevel === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {recommendation.urgencyLevel === 'high' ? 'Book ASAP' :
                       recommendation.urgencyLevel === 'medium' ? 'Recommended Soon' : 'Plan Ahead'}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-espresso mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {recommendation.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-rose mr-2">✓</span>
                        <span className="text-taupe">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-espresso mb-2">Why This Package?</h4>
                  <p className="text-taupe">{recommendation.whyRecommended}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/contact" className="bg-rose text-white py-4 rounded-lg font-semibold text-center hover:bg-rose/90 transition-colors">
                    Book Free Consultation
                  </Link>
                  <Link href="/bridal-makeup-pala" className="border border-rose text-rose py-4 rounded-lg font-semibold text-center hover:bg-rose/5 transition-colors">
                    View Full Portfolio
                  </Link>
                </div>

                <button 
                  onClick={() => {
                    setStep(1)
                    setData({
                      weddingDate: '',
                      venueType: '',
                      guestCount: '',
                      functions: [],
                      skinType: '',
                      concerns: []
                    })
                    setRecommendation(null)
                  }}
                  className="w-full text-center text-taupe hover:text-espresso transition-colors"
                >
                  Calculate Again →
                </button>
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-espresso">Step {step} of 4</span>
          <span className="text-sm text-taupe">
            {step === 1 && 'Wedding Date'}
            {step === 2 && 'Venue Type'}
            {step === 3 && 'Function Details'}
            {step === 4 && 'Your Results'}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-rose h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      {renderStep()}
    </div>
  )
}
