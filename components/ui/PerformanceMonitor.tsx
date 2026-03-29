'use client'

import { useEffect } from 'react'

interface PerformanceMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  ttfb: number // Time to First Byte
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return
    }

    // Core Web Vitals monitoring
    const measurePerformance = () => {
      const metrics: PerformanceMetrics = {
        fcp: 0,
        lcp: 0,
        fid: 0,
        cls: 0,
        ttfb: 0,
      }

      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry
      if (fcpEntry) {
        metrics.fcp = fcpEntry.startTime
      }

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
        metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      }

      // Largest Contentful Paint
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        metrics.lcp = lastEntry.startTime
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          metrics.fid = (entry as any).processingStart - entry.startTime
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        })
        metrics.cls = clsValue
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Log metrics (in production, you'd send these to analytics)
      setTimeout(() => {
        console.log('Performance Metrics:', metrics)
        
        // Send to analytics service if needed
        if (typeof window !== 'undefined' && 'gtag' in window) {
          const gtag = (window as any).gtag
          gtag('event', 'web_vitals', {
            fcp: Math.round(metrics.fcp),
            lcp: Math.round(metrics.lcp),
            fid: Math.round(metrics.fid),
            cls: Math.round(metrics.cls * 1000) / 1000,
            ttfb: Math.round(metrics.ttfb),
          })
        }
      }, 5000)
    }

    measurePerformance()

    // Resource timing monitoring
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
      const slowResources = resources.filter(resource => resource.duration > 1000)
      
      if (slowResources.length > 0) {
        console.warn('Slow resources detected:', slowResources.map(r => ({
          name: r.name,
          duration: r.duration,
          size: r.transferSize
        })))
      }
    }

    setTimeout(monitorResources, 3000)

  }, [])

  return null // This component doesn't render anything
}
