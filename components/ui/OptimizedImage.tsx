'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  style?: React.CSSProperties
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  sizes,
  quality = 75,
  style,
  placeholder = 'empty',
  blurDataURL,
}: OptimizedImageProps) {
  const [error, setError] = useState(false)

  const handleError = () => {
    setError(true)
  }

  // Generate WebP and fallback URLs
  const generateImageUrls = (originalSrc: string) => {
    if (originalSrc.startsWith('http')) {
      return {
        webp: originalSrc,
        fallback: originalSrc,
      }
    }

    // For local images, we'll rely on Next.js Image optimization
    return {
      webp: originalSrc,
      fallback: originalSrc,
    }
  }

  const { webp, fallback } = generateImageUrls(src)

  if (error) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center text-gray-500 text-sm ${className || ''}`}
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
    <div className={`relative ${className || ''}`} style={style}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={`transition-opacity duration-300 ${className || ''}`}
        style={{
          objectFit: 'cover',
          ...style,
        }}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
}
