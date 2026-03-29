'use client'

import { useEffect } from 'react'

export default function LoadingScreen() {
  useEffect(() => {
    // Prevent scrolling during loading
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <style>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          background: #FDE8E8;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .loading-content {
          text-align: center;
          animation: fadeInUp 1s ease-out;
        }
        
        .loading-logo {
          font-family: var(--font-display), 'Playfair Display', serif;
          font-size: clamp(32px, 8vw, 56px);
          font-weight: 300;
          font-style: italic;
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
          margin-bottom: 24px;
          animation: shimmerText 2s ease-in-out infinite;
        }
        
        .loading-tagline {
          font-family: var(--font-body), 'Georgia', serif;
          font-size: clamp(14px, 3vw, 18px);
          font-style: italic;
          color: rgba(61, 21, 32, 0.6);
          letter-spacing: 0.15em;
          margin-top: 8px;
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        
        .loading-dots {
          display: flex;
          gap: 8px;
          margin-top: 32px;
          animation: fadeInUp 1s ease-out 0.6s both;
        }
        
        .loading-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(61, 21, 32, 0.3);
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        .loading-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .loading-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmerText {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
        
        /* Add subtle texture matching main site */
        .loading-screen::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(249, 200, 200, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(212, 160, 85, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(249, 145, 159, 0.06) 0%, transparent 50%);
          pointer-events: none;
        }
      `}</style>
      
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            NIXTUDIO
          </div>
          <div className="loading-tagline">
            every face. carefully considered.
          </div>
          <div className="loading-dots">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
      </div>
    </>
  )
}
