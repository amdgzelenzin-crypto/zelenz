'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface LoadingContextType {
  isLoading: boolean
  isReady: boolean
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  isReady: false
})

export function useLoading() {
  return useContext(LoadingContext)
}

interface LoadingProviderProps {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Check if user has already seen loader
    try {
      const seen = sessionStorage.getItem('nix-loaded')
      if (seen) {
        // If already seen, show content immediately without loader
        setIsLoading(false)
        setIsReady(true)
        return
      }
    } catch (e) {
      // If sessionStorage fails, proceed with loader
    }

    // For first-time visitors, ensure loader shows immediately
    // Don't allow content to render until loader animation completes
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsReady(true)
      try {
        sessionStorage.setItem('nix-loaded', 'true')
      } catch (e) {}
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading, isReady }}>
      {children}
    </LoadingContext.Provider>
  )
}
