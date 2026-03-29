'use client'

import dynamic from 'next/dynamic'

const SiteLoader = dynamic(() => import('./SiteLoader'), {
  ssr: false,
  loading: () => null,
})

const FloatingAmbience = dynamic(() => import('./FloatingAmbience'), {
  ssr: false,
  loading: () => null,
})

const ScrollToTop = dynamic(() => import('./ScrollToTop'), {
  ssr: false,
  loading: () => null,
})

const AccessibilityFixes = dynamic(() => import('./AccessibilityFixes'), {
  ssr: false,
  loading: () => null,
})

const PerformanceMonitor = dynamic(() => import('./PerformanceMonitor'), {
  ssr: false,
  loading: () => null,
})

export default function ClientComponents() {
  return (
    <>
      <SiteLoader />
      <FloatingAmbience />
      <ScrollToTop />
      <AccessibilityFixes />
      <PerformanceMonitor />
    </>
  )
}

