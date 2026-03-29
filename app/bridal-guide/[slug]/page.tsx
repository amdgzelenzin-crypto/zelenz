import Link from 'next/link'

export default function GuideTopic() {
  return (
    <div className="min-h-screen bg-snow flex items-center justify-center p-12">
      <div className="max-w-2xl text-center">
        <p className="label-caps mb-4">Bridal Guide</p>
        <h1 className="font-serif text-4xl mb-6 italic">Coming Soon</h1>
        <p className="font-body text-espresso/70 mb-8">
          We are currently drafting this premium resource for NIXTUDIO brides.
        </p>
        <Link href="/bridal-guide" className="btn-primary">
          Back to Guide
        </Link>
      </div>
    </div>
  )
}
