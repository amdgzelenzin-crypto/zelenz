'use client'
import { useEffect, useState } from 'react'

const ELEMENT_TYPES = [
  { type: "heart", content: "♥", color: "#F9919F", fontSize: [10, 14] },
  { type: "sparkle", content: "✦", color: "#D4A055", fontSize: [8, 12] },
  { type: "sparkle2", content: "✧", color: "#D4A055", fontSize: [8, 12] },
];

function getRandomType() {
  return ELEMENT_TYPES[Math.floor(Math.random() * ELEMENT_TYPES.length)];
}

export default function FloatingAmbience() {
  const [elements, setElements] = useState<any[]>([])
  
  useEffect(() => {
    // Generate random elements
    // ONLY on client after mount
    const items = Array.from(
      { length: 15 }, // using 15 elements for safe performance
      (_, i) => {
        const typeDef = getRandomType();
        const size = Math.floor(Math.random() * (typeDef.fontSize[1] - typeDef.fontSize[0] + 1)) + typeDef.fontSize[0];
        return {
          id: i,
          content: typeDef.content,
          color: typeDef.color,
          size: size,
          left: Math.random() * 100,
          delay: Math.random() * 12,
          duration: 8 + Math.random() * 8,
          opacity: 0.25 + Math.random() * 0.30,
        }
      }
    )
    setElements(items)
  }, [])
  
  if (elements.length === 0) return null
  
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatUpIOS {
          0% {
            transform: translateY(110vh);
            opacity: 0;
          }
          10% {
            opacity: var(--max-opacity);
          }
          90% {
            opacity: var(--max-opacity);
          }
          100% {
            transform: translateY(-20vh);
            opacity: 0;
          }
        }
      `}} />
      <div 
        aria-hidden="true"
        style={{ 
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'hidden',
          willChange: 'contents'
        }}
      >
        {elements.map(el => (
          <div
            key={el.id}
            style={{
              position: 'absolute',
              left: `${el.left}vw`,
              fontSize: `${el.size}px`,
              color: el.color,
              ["--max-opacity" as any]: el.opacity,
              animation: `floatUpIOS ${el.duration}s linear ${el.delay}s infinite`,
              opacity: 0,
            }}
          >
            {el.content}
          </div>
        ))}
      </div>
    </>
  )
}
