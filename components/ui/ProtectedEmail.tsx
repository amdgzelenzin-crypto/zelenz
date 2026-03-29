'use client'

export default function ProtectedEmail() {
  const email = 'nixtudio1@gmail.com'
  const subject = 'Bridal Makeup Enquiry'
  
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`
  }

  return (
    <span 
      onClick={handleEmailClick}
      style={{ cursor: 'pointer', textDecoration: 'underline' }}
      className="text-current"
    >
      nixtudio1@gmail.com
    </span>
  )
}
