'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem('nix-loaded')
      if (seen) return
    } catch (e) {
      return
    }

    // Show loader immediately
    setMounted(true)

    const exitTimer = setTimeout(() => {
      setLeaving(true)
    }, 800)

    const removeTimer = setTimeout(() => {
      setMounted(false)
      try {
        sessionStorage.setItem('nix-loaded', 'true')
      } catch (e) {}
    }, 1200)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      <style>{`
        @keyframes goldFill {
          from { width: 0% }
          to   { width: 100% }
        }
        @keyframes letterIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scriptIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes loaderSlideUp {
          from { transform: translateY(0) }
          to   { transform: translateY(-100%) }
        }
        .nix-loader {
          position: fixed;
          inset: 0;
          background: #000000;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .nix-loader.leaving {
          animation: loaderSlideUp
            700ms cubic-bezier(0.76, 0, 0.24, 1)
            forwards;
        }
        .nix-letters {
          display: flex;
          gap: 2px;
        }
        .nix-letter {
          font-family: var(--font-display), 'Playfair Display', serif;
          font-size: clamp(32px, 8vw, 56px);
          font-weight: 400;
          letter-spacing: 0.25em;
          background: linear-gradient(135deg,
            #c49c4d 0%,
            #e9ce98 35%,
            #c49c4d 50%,
            #c49c4d 70%,
            #c49c4d 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          animation: letterIn 400ms
            ease forwards;
        }
        .nix-script {
          font-family: var(--font-script), 'Georgia', serif;
          font-size: clamp(14px, 3vw, 18px);
          font-style: italic;
          color: #323232;
          opacity: 0;
          margin-top: 6px;
          animation: scriptIn 500ms
            ease 600ms forwards;
          letter-spacing: 0.05em;
        }
        .nix-bar-track {
          width: clamp(120px, 30vw, 200px);
          height: 2px;
          background: rgba(196, 156, 77, 0.15);
          border-radius: 2px;
          margin-top: 40px;
          overflow: hidden;
        }
        .nix-bar-fill {
          height: 100%;
          width: 0%;
          border-radius: 2px;
          background: linear-gradient(90deg,
            #c49c4d,
            #c49c4d,
            #c49c4d);
          animation: goldFill 2s
            cubic-bezier(0.4, 0, 0.2, 1)
            0.2s forwards;
        }
        .nix-tagline {
          font-family: var(--font-body), 'Georgia', serif;
          font-size: clamp(10px, 2.5vw, 12px);
          font-style: italic;
          color: rgba(196, 156, 77, 0.45);
          margin-top: 20px;
          letter-spacing: 0.15em;
        }
      `}</style>
      <div
        className={`nix-loader ${leaving ? 'leaving' : ''}`}
      >
        <div className="nix-letters">
          {'ZELENZ'.split('').map((letter, i) => (
            <span
              key={i}
              className="nix-letter"
              style={{
                animationDelay: `${i * 60}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="nix-script">Unisex Saloon</div>
        <div className="nix-bar-track">
          <div className="nix-bar-fill" />
        </div>
        <div className="nix-tagline">
          where luxury meets beauty
        </div>
      </div>
    </>
  )
}
