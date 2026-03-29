'use client'

import dynamic from 'next/dynamic'

const FloatingAmbience = dynamic(() => import('./FloatingAmbience'), {
  ssr: false,
  loading: () => null,
})

const ScrollToTop = dynamic(() => import('./ScrollToTop'), {
  ssr: false,
  loading: () => null,
})

export default function ClientComponents() {
  return (
    <>
      <FloatingAmbience />
      <ScrollToTop />
    </>
  )
}

