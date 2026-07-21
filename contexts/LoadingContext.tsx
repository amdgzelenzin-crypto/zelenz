'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

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
  const [isLoading] = useState(false)
  const [isReady] = useState(true)

  return (
    <LoadingContext.Provider value={{ isLoading, isReady }}>
      {children}
    </LoadingContext.Provider>
  )
}
