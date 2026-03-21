'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: any = null

    const initLenis = async () => {
      const Lenis = (
        await import('@studio-freight/lenis')
      ).default

      lenis = new Lenis({
        duration: 1.0,
        easing: (t: number) =>
          1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        touchMultiplier: 1.5,
        infinite: false,
        gestureOrientation: 'vertical',
      })

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time)
        }
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [])

  return null
}
