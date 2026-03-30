'use client'

import { useState } from 'react'

export default function GuideDownloadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    weddingDate: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Handle form submission here
    // You can integrate with your email service or CRM
    console.log('Form submitted:', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    alert('Thank you! Your guide will be downloaded shortly.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      weddingDate: ''
    })
    
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-rose/20 rounded-lg focus:border-rose focus:outline-none"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-rose/20 rounded-lg focus:border-rose focus:outline-none"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp Number (Optional)"
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full p-3 border border-rose/20 rounded-lg focus:border-rose focus:outline-none"
        />
      </div>
      <div>
        <input
          type="text"
          name="weddingDate"
          placeholder="Wedding Date (Optional)"
          value={formData.weddingDate}
          onChange={handleChange}
          className="w-full p-3 border border-rose/20 rounded-lg focus:border-rose focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-rose text-white py-4 rounded-lg font-semibold hover:bg-rose/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Downloading...' : 'Download Free Guide →'}
      </button>
    </form>
  )
}
