'use client';

import { motion } from 'framer-motion';

interface FancyTextProps {
  children: string;
  className?: string;
  fillClassName?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
}

export default function FancyText({
  children,
  className,
  fillClassName,
  stagger = 0.06,
  duration = 1.2,
  delay = 0.2,
}: FancyTextProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {children.split('').map((char, i) => (
        <motion.span
          key={i}
          className={`inline-block ${fillClassName}`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: duration,
                ease: [0.4, 0, 0.2, 1],
              },
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
