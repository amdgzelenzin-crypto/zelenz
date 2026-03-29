'use client'

import { useState, useEffect, useRef } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
  quality?: number
  fill?: boolean
  style?: React.CSSProperties
}

export default function LazyImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes,
  quality = 75,
  fill = false,
  style,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px 50px 0px',
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={`${className || ''} skeleton`}
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          ...style,
        }}
      />
    )
  }

  if (hasError) {
    return (
      <div
        className={`${className || ''} bg-gray-200 flex items-center justify-center text-gray-500 text-sm`}
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          ...style,
        }}
      >
        Image not available
      </div>
    )
  }

  return (
    <div
      ref={imgRef}
      className={`relative ${className || ''}`}
      style={{
        width: fill ? '100%' : width,
        height: fill ? '100%' : height,
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${fill ? 'absolute inset-0 w-full h-full object-cover' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      {!isLoaded && (
        <div
          className={`absolute inset-0 skeleton ${
            fill ? 'w-full h-full' : ''
          }`}
          style={{
            width: fill ? '100%' : width,
            height: fill ? '100%' : height,
          }}
        />
      )}
    </div>
  )
}
