'use client'

import { createContext, useContext, useLayoutEffect, useState, ReactNode } from 'react'
import LoadingScreen from '@/components/ui/SiteLoader'

interface LoadingContextType {
  isLoading: boolean
  isReady: boolean
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  isReady: true,
})

export function useLoading() {
  return useContext(LoadingContext)
}

interface LoadingProviderProps {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  // SSR defaults: full HTML for crawlers. First-visit overlay uses layout effect to avoid content flash.
  const [isLoading, setIsLoading] = useState(false)
  const [isReady] = useState(true)

  useLayoutEffect(() => {
    const clearFirstVisit = () => {
      document.documentElement.classList.remove('nix-first-visit')
      document.documentElement.classList.remove('nix-has-loader')
    }

    try {
      if (sessionStorage.getItem('nix-loaded')) {
        clearFirstVisit()
        return
      }
    } catch {
      clearFirstVisit()
      return
    }

    setIsLoading(true)
    document.documentElement.classList.add('nix-has-loader')
    const timer = setTimeout(() => {
      setIsLoading(false)
      clearFirstVisit()
      try {
        sessionStorage.setItem('nix-loaded', 'true')
      } catch {
        /* ignore */
      }
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading, isReady }}>
      {children}
      {isLoading && (
        <div className="fixed inset-0 z-[100001]" aria-hidden="true">
          <LoadingScreen controlled />
        </div>
      )}
    </LoadingContext.Provider>
  )
}
