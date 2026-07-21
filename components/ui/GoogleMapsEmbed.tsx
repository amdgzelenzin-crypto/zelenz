'use client'

export default function GoogleMapsEmbed() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
      {/* ──────── LOCATION 1: PALA BRANCH ──────── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(183,110,121,0.12), 0 2px 8px rgba(183,110,121,0.06)',
          background: '#F9C8C8',
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: '20px',
              color: '#3D1520',
              marginBottom: '12px',
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}>
              ZELENZ SALON — PALA
            </div>
            <div style={{
              fontFamily: 'var(--font-body, serif)',
              fontSize: '14px',
              color: '#B76E79',
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              Dummy Building, Near Civil Station, Pala<br />
              Kottayam District, Kerala 686575
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #B76E79, #D4A055)',
                color: '#FFFFFF',
                padding: '10px 24px',
                borderRadius: '100px',
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'transform 300ms ease'
              }}
              onMouseOver={(e: any) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
            >
              GET DIRECTIONS →
            </a>
          </div>
        </div>
      </div>

      {/* ──────── LOCATION 2: KOTTAYAM BRANCH ──────── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(183,110,121,0.12), 0 2px 8px rgba(183,110,121,0.06)',
          background: '#F9C8C8',
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: '20px',
              color: '#3D1520',
              marginBottom: '12px',
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}>
              ZELENZ SALON — KOTTAYAM
            </div>
            <div style={{
              fontFamily: 'var(--font-body, serif)',
              fontSize: '14px',
              color: '#B76E79',
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              Dummy Complex, Kanjikuzhy, Kottayam<br />
              Kerala 686004
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #B76E79, #D4A055)',
                color: '#FFFFFF',
                padding: '10px 24px',
                borderRadius: '100px',
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'transform 300ms ease'
              }}
              onMouseOver={(e: any) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e: any) => e.currentTarget.style.transform = 'scale(1)'}
            >
              GET DIRECTIONS →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
