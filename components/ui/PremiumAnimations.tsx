'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export function FadeIn({ children, delay = 0, duration = 0.6, direction = 'up', className = '' }: FadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 30, opacity: 0 }
      case 'down': return { y: -30, opacity: 0 }
      case 'left': return { x: 30, opacity: 0 }
      case 'right': return { x: -30, opacity: 0 }
      default: return { y: 30, opacity: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function ScaleIn({ children, delay = 0, duration = 0.5, className = '' }: ScaleInProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface SlideInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'left' | 'right'
  className?: string
}

export function SlideIn({ children, delay = 0, duration = 0.7, direction = 'left', className = '' }: SlideInProps) {
  return (
    <motion.div
      initial={{ x: direction === 'left' ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface PremiumBoxProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function PremiumBox({ children, className = '', hover = true }: PremiumBoxProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={hover ? {
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        transition: { duration: 0.3, ease: 'easeOut' }
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose/5 to-pink/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggerContainer({ children, staggerDelay = 0.1, className = '' }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: staggerDelay }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
