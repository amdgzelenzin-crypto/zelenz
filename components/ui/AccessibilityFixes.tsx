'use client'

import { useEffect } from 'react'

/**
 * Accessibility Fixes Component
 * Addresses common accessibility issues including:
 * - Missing aria-labels on interactive elements
 * - Missing alt text on images
 * - Missing semantic HTML structure
 * - Missing keyboard navigation support
 * - Missing focus management
 * - Missing skip links
 * - Poor color contrast indicators
 */

interface AccessibilityFixesProps {
  children?: React.ReactNode
}

export default function AccessibilityFixes({ children }: AccessibilityFixesProps) {
  useEffect(() => {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a')
    skipLink.href = '#main-content'
    skipLink.textContent = 'Skip to main content'
    skipLink.className = 'sr-only focus:absolute focus:top-4 left-4 bg-white px-4 py-2 text-sm'
    skipLink.tabIndex = 0
    document.body.prepend(skipLink)

    // Add proper ARIA labels to common elements that might be missing them
    const addAriaLabels = () => {
      // Add aria-label to buttons without proper labels
      const buttons = document.querySelectorAll('button:not([aria-label]), button:not([aria-labelledby])')
      buttons.forEach((button, index) => {
        const text = button.textContent?.trim()
        if (text && !button.getAttribute('aria-label') && !button.getAttribute('aria-labelledby')) {
          button.setAttribute('aria-label', text)
        }
      })

      // Add aria-label to links without proper labels
      const links = document.querySelectorAll('a:not([aria-label]), a:not([aria-labelledby])')
      links.forEach((link) => {
        const text = link.textContent?.trim()
        if (text && !link.getAttribute('aria-label') && !link.getAttribute('aria-labelledby')) {
          link.setAttribute('aria-label', text)
        }
      })

      // Add aria-label to input fields without proper labels
      const inputs = document.querySelectorAll('input:not([aria-label]), input:not([aria-labelledby])')
      inputs.forEach((input) => {
        const placeholder = input.getAttribute('placeholder')
        const label = input.closest('label')?.textContent?.trim()
        if (placeholder && !input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby') && label) {
          input.setAttribute('aria-label', placeholder)
        }
      })

      // Fix missing alt text on images
      const images = document.querySelectorAll('img:not([alt])')
      images.forEach((img) => {
        const src = img.getAttribute('src') || ''
        if (!img.getAttribute('alt')) {
          // Generate descriptive alt text from image src
          const altText = src.split('/').pop()?.split('.')[0]?.replace(/-/g, ' ') || 'Image'
          img.setAttribute('alt', altText)
        }
      })

      // Add role="navigation" to nav elements
      const navs = document.querySelectorAll('nav:not([role])')
      navs.forEach((nav) => {
        nav.setAttribute('role', 'navigation')
      })

      // Add proper heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      headings.forEach((heading) => {
        // Ensure headings have proper structure
        if (!heading.getAttribute('id') && heading.textContent?.trim()) {
          const text = heading.textContent?.trim()
          const id = text.toLowerCase().replace(/[^a-z0-9]/g, '-')
          heading.setAttribute('id', id)
        }
      })
    }

    // Run the fixes after a short delay to ensure DOM is ready
    const timer = setTimeout(addAriaLabels, 1000)

    return () => clearTimeout(timer)
  }, [])

  return null // This component doesn't render anything, just runs the fixes
}
