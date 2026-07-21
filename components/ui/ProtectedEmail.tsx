'use client'

export default function ProtectedEmail() {
  const email = 'zelenzmakeups@gmail.com'
  const subject = 'Bridal & Salon Booking Enquiry'
  
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`
  }

  return (
    <span 
      onClick={handleEmailClick}
      style={{ cursor: 'pointer', textDecoration: 'underline' }}
      className="text-current"
    >
      zelenzmakeups@gmail.com
    </span>
  )
}
