import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import GuideDownloadForm from '@/components/GuideDownloadForm'
import ScrollToFormButton from '@/components/ScrollToFormButton'
import { FadeIn, PremiumBox, StaggerContainer, StaggerItem } from '@/components/ui/PremiumAnimations'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free 7-Day Bridal Skin Prep Guide | Kerala Wedding | NIXTUDIO',
  description: 'Download our free 7-day bridal skin preparation guide designed for Kerala\'s tropical climate. Expert tips by Nikita Liby for flawless wedding makeup.',
  keywords: [
    'bridal skin prep guide',
    'kerala wedding skin care',
    '7 day bridal routine',
    'pre-bridal home care',
    'bridal skincare kerala',
    'wedding prep guide',
    'flawless bridal skin',
    'nixtudio skin guide'
  ],
  openGraph: {
    title: 'Free 7-Day Bridal Skin Prep Guide | Kerala Wedding | NIXTUDIO',
    description: 'Download our free 7-day bridal skin preparation guide designed for Kerala\'s tropical climate.',
    url: 'https://nixtudio.in/bridal-skin-prep-guide',
    images: [{
      url: '/images/bridal-skin-prep-guide.jpg',
      width: 1200,
      height: 630,
      alt: 'Bridal Skin Prep Guide - NIXTUDIO'
    }]
  },
  alternates: {
    canonical: 'https://nixtudio.in/bridal-skin-prep-guide',
  },
}

const leadMagnetSchema = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  "name": "7-Day Bridal Skin Preparation Guide",
  "description": "Comprehensive skincare guide for Kerala brides preparing for their wedding day",
  "author": {
    "@type": "Person",
    "name": "Nikita Liby",
    "jobTitle": "Founder & Creative Director"
  },
  "publisher": {
    "@type": "Organization",
    "name": "NIXTUDIO",
    "url": "https://nixtudio.in"
  },
  "datePublished": "2024-12-20",
  "dateModified": "2024-12-20",
  "about": [
    "Bridal Skincare",
    "Kerala Climate",
    "Wedding Preparation",
    "Skin Care Routine"
  ],
  "learningResourceType": "Guide",
  "educationalLevel": "Beginner to Intermediate",
  "teaches": [
    "Pre-bridal skincare routine",
    "Climate-specific skin preparation",
    "Product recommendations for Kerala humidity",
    "DIY home care treatments"
  ]
}

export default function BridalSkinPrepGuide() {
  return (
    <>
      <JsonLd data={leadMagnetSchema} />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-rose/5 to-pink/5">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-rose/10 to-pink/10 text-rose text-sm font-semibold rounded-full border border-rose/20">
                  EXCLUSIVE DOWNLOAD • KERALA CLIMATE OPTIMIZED
                </span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <h1 className="text-4xl md:text-5xl font-serif text-espresso mb-6 leading-tight">
                7-Day Bridal Skin<br/>Preparation Guide
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-xl text-espresso/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                The ultimate pre-bridal skincare routine designed specifically for Kerala's tropical climate. 
                Expert tips from Nikita Liby to ensure your skin is perfectly prepped for flawless, humidity-resistant makeup.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="flex items-center gap-3 text-sm text-taupe">
                  <div className="w-3 h-3 bg-gradient-to-r from-rose to-pink rounded-full"></div>
                  <span className="font-medium">Kerala Climate Expert</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-taupe">
                  <div className="w-3 h-3 bg-gradient-to-r from-rose to-pink rounded-full"></div>
                  <span className="font-medium">500+ Brides Served</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-taupe">
                  <div className="w-3 h-3 bg-gradient-to-r from-rose to-pink rounded-full"></div>
                  <span className="font-medium">Instant Download</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <PremiumBox className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto border border-rose/10">
                <h3 className="text-lg font-semibold text-espresso mb-6">Request Your Exclusive Guide</h3>
                <GuideDownloadForm />
                <p className="text-xs text-taupe text-center mt-6">
                  Premium PDF Guide (2.3 MB) • Personalized consultation available
                </p>
              </PremiumBox>
            </FadeIn>
          </div>
        </section>

        {/* What's Inside */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-espresso mb-12 text-center">
              What's Inside Your Free Guide
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-rose/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-rose text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-espresso mb-2">Day 1-2: Deep Cleansing Protocol</h3>
                    <p className="text-taupe text-sm">Oil-control cleansing techniques for Kerala's humidity. Product recommendations that won't strip your skin.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-rose/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-rose text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-espresso mb-2">Day 3-4: Hydration Balance</h3>
                    <p className="text-taupe text-sm">Lightweight hydration that works with tropical weather. Avoiding the greasy look in Kerala humidity.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-rose/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-rose text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-espresso mb-2">Day 5-6: Skin Perfecting</h3>
                    <p className="text-taupe text-sm">Gentle exfoliation and brightening. Addressing pigmentation concerns common in Kerala skin tones.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-rose/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-rose text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-espresso mb-2">Day 7: Wedding Day Prep</h3>
                    <p className="text-taupe text-sm">The exact morning routine Nikita uses for her brides. Prepping skin for 16+ hour makeup wear.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-rose/10 to-pink/10 p-6 rounded-xl">
                  <h3 className="font-semibold text-espresso mb-4">🎁 Bonus Materials</h3>
                  <ul className="space-y-2 text-sm text-taupe">
                    <li className="flex items-start gap-2">
                      <span className="text-rose">•</span>
                      <span>Emergency pimple treatment (overnight fix)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose">•</span>
                      <span>DIY face mask recipes for Kerala weather</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose">•</span>
                      <span>Monsoon vs Summer skincare adjustments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose">•</span>
                      <span>Product shopping list with Kerala alternatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose">•</span>
                      <span>What to avoid 7 days before wedding</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue/5 p-6 rounded-xl">
                  <h3 className="font-semibold text-espresso mb-4">🌟 Expert Insights</h3>
                  <p className="text-taupe text-sm mb-3">
                    "After 500+ Kerala brides, I've identified the exact skincare protocol that works with our tropical climate, not against it."
                  </p>
                  <p className="text-taupe text-sm font-medium">
                    — Nikita Liby, Founder NIXTUDIO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-espresso mb-12 text-center">
              Sneak Peek: Day 3 Protocol
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-espresso mb-2">Day 3: Hydration Balance (Morning & Evening)</h3>
                <p className="text-taupe">The critical day where most Kerala brides get it wrong...</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-espresso mb-3">Morning Routine (6:30 AM)</h4>
                  <ol className="space-y-2 text-sm text-taupe">
                    <li>1. Rinse face with cool water (no cleanser)</li>
                    <li>2. Apply rose water toner with cotton pad</li>
                    <li>3. Vitamin C serum (3 drops only)</li>
                    <li>4. Wait 2 minutes, then apply gel moisturizer</li>
                    <li>5. SPF 50+ sunscreen (non-greasy formula)</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold text-espresso mb-3">Evening Routine (8:00 PM)</h4>
                  <ol className="space-y-2 text-sm text-taupe">
                    <li>1. Oil-free cleanser with lukewarm water</li>
                    <li>2. Hyaluronic acid serum (avoid over-application)</li>
                    <li>3. Lightweight night cream (pea-sized amount)</li>
                    <li>4. Under eye cream (tap gently)</li>
                    <li>5. NO: Heavy creams, oils, or new products</li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-yellow/10 p-4 rounded-lg">
                <h4 className="font-semibold text-espresso mb-2">💡 Kerala Climate Tip</h4>
                <p className="text-taupe text-sm">
                  Most brides over-moisturize in Kerala humidity, thinking it helps. It actually creates a barrier that prevents makeup adhesion. 
                  The key is lightweight hydration that sinks in completely.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-espresso mb-4">Get the complete 7-day protocol with product recommendations and troubleshooting tips.</p>
              <ScrollToFormButton className="bg-rose text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose/90 transition-colors">
                Download Full Guide
              </ScrollToFormButton>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-espresso mb-12 text-center">
              Success Stories from Kerala Brides
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-rose/5 p-6 rounded-xl">
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
                <p className="text-taupe text-sm mb-3 italic">
                  "Followed the guide exactly for my July monsoon wedding. My skin was perfect and the makeup lasted 16 hours without any touch-ups!"
                </p>
                <div className="text-sm font-medium text-espresso">- Priya, Kottayam</div>
              </div>
              
              <div className="bg-blue/5 p-6 rounded-xl">
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
                <p className="text-taupe text-sm mb-3 italic">
                  "The day-by-day approach was so easy to follow. My skin has never looked better. Nikita really understands Kerala skin!"
                </p>
                <div className="text-sm font-medium text-espresso">- Anna, Pala</div>
              </div>
              
              <div className="bg-green/5 p-6 rounded-xl">
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>
                <p className="text-taupe text-sm mb-3 italic">
                  "Worth downloading just for the emergency pimple treatment! Saved my sister's wedding day. Thank you Nikita!"
                </p>
                <div className="text-sm font-medium text-espresso">- Maria, Ernakulam</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-espresso mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-espresso mb-2">Is this guide suitable for all skin types?</h3>
                <p className="text-taupe text-sm">Yes! The guide includes modifications for oily, dry, combination, and sensitive skin types commonly found in Kerala.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-espresso mb-2">What if I have less than 7 days before my wedding?</h3>
                <p className="text-taupe text-sm">The guide includes a "3-day emergency protocol" for last-minute preparations. While 7 days is optimal, you'll still see significant improvement.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-espresso mb-2">Are the products mentioned easily available in Kerala?</h3>
                <p className="text-taupe text-sm">Yes! We include both premium and budget-friendly alternatives available at local Kerala stores and online.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-espresso mb-2">Will this help with monsoon-related skin issues?</h3>
                <p className="text-taupe text-sm">Absolutely! The guide is specifically designed for Kerala's tropical climate, including monsoon-specific protocols and adjustments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-rose to-pink">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-serif mb-6">
              Ready for Your Perfect Bridal Skin?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 500+ Kerala brides who've used this guide to achieve flawless wedding day skin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScrollToFormButton className="bg-white text-rose px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download Free Guide
              </ScrollToFormButton>
              <Link 
                href="/bridal-makeup-calculator" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-rose transition-colors"
              >
                Try Bridal Calculator
              </Link>
            </div>
            
            <div className="mt-12 flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📥</span>
                <span>Instant PDF Download</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📧</span>
                <span>Email Support Included</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                <span>Kerala Climate Tested</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
