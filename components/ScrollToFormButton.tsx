'use client'

export default function ScrollToFormButton({ children, className = '' }: { 
  children: React.ReactNode
  className?: string 
}) {
  const scrollToForm = () => {
    document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button onClick={scrollToForm} className={className}>
      {children}
    </button>
  )
}
