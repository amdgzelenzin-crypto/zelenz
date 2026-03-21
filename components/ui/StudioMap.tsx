'use client'

export default function StudioMap() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
    }}>
      
      {/* Map with pink CSS filter */}
      <div style={{
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: `
          0 8px 40px rgba(183,110,121,0.18),
          0 2px 8px rgba(183,110,121,0.10)
        `,
        filter: `
          sepia(45%)
          hue-rotate(295deg)
          saturate(55%)
          brightness(105%)
          contrast(95%)
        `,
      }}>
        <iframe
          src="https://maps.google.com/maps?q=Pala,Kerala,India&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{
            border: 'none',
            display: 'block',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="NIXTUDIO Location — Pala, Kerala"
        />
      </div>

      {/* Floating branded card */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        zIndex: 10,
        background: 'rgba(255,250,248,0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderRadius: '16px',
        padding: '16px 20px',
        boxShadow: `
          0 4px 24px rgba(183,110,121,0.20)
        `,
        border: '1px solid #F9C8C8',
        maxWidth: '190px',
      }}>
        <div style={{
          fontFamily: 'var(--font-display, serif)',
          fontSize: '15px',
          fontWeight: '500',
          color: '#4E4247',
          letterSpacing: '0.08em',
          marginBottom: '2px',
        }}>
          NIXTUDIO
        </div>
        <div style={{
          fontFamily: 'var(--font-script, serif)',
          fontSize: '13px',
          fontStyle: 'italic',
          color: '#B76E79',
          marginBottom: '8px',
        }}>
          by Nikita Liby
        </div>
        <div style={{
          fontFamily: 'var(--font-body, serif)',
          fontSize: '12px',
          color: '#A86070',
          fontStyle: 'italic',
          marginBottom: '12px',
          lineHeight: '1.5',
        }}>
          Pala, Kerala
        </div>
        <a
          href="https://maps.app.goo.gl/itu98MmV5z5XtLpR6"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: `linear-gradient(135deg, #B76E79, #D4A055)`,
            color: '#FFFFFF',
            padding: '8px 16px',
            borderRadius: '100px',
            fontFamily: 'var(--font-sans, sans-serif)',
            fontSize: '10px',
            letterSpacing: '0.15em',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          GET DIRECTIONS →
        </a>
      </div>
    </div>
  )
}
