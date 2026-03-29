'use client'

import { useEffect, useState } from 'react'

export default function SiteLoader() {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem('nix-loaded')
      if (seen) return
    } catch (e) {
      return
    }

    setVisible(true)

    const exitTimer = setTimeout(() => {
      setLeaving(true)
    }, 800)

    const removeTimer = setTimeout(() => {
      setVisible(false)
      try {
        sessionStorage.setItem('nix-loaded', 'true')
      } catch (e) {}
    }, 1200)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

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
          background: #3D1520;
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
          font-family: var(--font-display, 'Playfair Display', serif);
          font-size: clamp(32px, 8vw, 56px);
          font-weight: 400;
          letter-spacing: 0.25em;
          background: linear-gradient(135deg,
            #D4A055 0%,
            #F5E6C8 35%,
            #D4A055 50%,
            #B8843A 70%,
            #D4A055 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          animation: letterIn 400ms
            ease forwards;
        }
        .nix-script {
          font-family: var(--font-script, 'Georgia', serif);
          font-size: clamp(14px, 3vw, 18px);
          font-style: italic;
          color: #F9C8C8;
          opacity: 0;
          margin-top: 6px;
          animation: scriptIn 500ms
            ease 600ms forwards;
          letter-spacing: 0.05em;
        }
        .nix-bar-track {
          width: clamp(120px, 30vw, 200px);
          height: 2px;
          background: rgba(249, 200, 200, 0.15);
          border-radius: 2px;
          margin-top: 40px;
          overflow: hidden;
        }
        .nix-bar-fill {
          height: 100%;
          width: 0%;
          border-radius: 2px;
          background: linear-gradient(90deg,
            #B76E79,
            #D4A055,
            #B76E79);
          animation: goldFill 2s
            cubic-bezier(0.4, 0, 0.2, 1)
            0.2s forwards;
        }
        .nix-tagline {
          font-family: var(--font-body, 'Georgia', serif);
          font-size: clamp(10px, 2.5vw, 12px);
          font-style: italic;
          color: rgba(249, 200, 200, 0.45);
          margin-top: 20px;
          letter-spacing: 0.15em;
        }
      `}</style>
      <div
        className={`nix-loader ${leaving ? 'leaving' : ''}`}
      >
        <div className="nix-letters">
          {'NIXTUDIO'.split('').map((letter, i) => (
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
        <div className="nix-script">by Nikita Liby</div>
        <div className="nix-bar-track">
          <div className="nix-bar-fill" />
        </div>
        <div className="nix-tagline">
          every face. carefully considered.
        </div>
      </div>
    </>
  )
}
