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

const SmoothScroll = dynamic(() => import('./SmoothScroll'), {
  ssr: false,
  loading: () => null,
})

export default function ClientComponents() {
  return (
    <>
      <SmoothScroll />
      <SiteLoader />
      <FloatingAmbience />
      <ScrollToTop />
    </>
  )
}
