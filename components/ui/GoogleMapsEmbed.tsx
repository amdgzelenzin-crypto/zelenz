'use client'

export default function GoogleMapsEmbed() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
      {/* ──────── LOCATION 1: MAIN STUDIO ──────── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(183,110,121,0.12), 0 2px 8px rgba(183,110,121,0.06)',
          background: '#F9C8C8',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: '18px',
              color: '#3D1520',
              marginBottom: '12px'
            }}>
              NIXTUDIO Main Studio
            </div>
            <div style={{
              fontFamily: 'var(--font-body, serif)',
              fontSize: '14px',
              color: '#B76E79',
              marginBottom: '16px',
              lineHeight: '1.6'
            }}>
              Pala, Kerala 686575<br />
              Thodupuzha Road
            </div>
            <a
              href="https://maps.app.goo.gl/itu98MmV5z5XtLpR6"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #B76E79, #D4A055)',
                color: '#FFFFFF',
                padding: '10px 20px',
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

      {/* ──────── LOCATION 2: BRIDAL SUITE ──────── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(183,110,121,0.12), 0 2px 8px rgba(183,110,121,0.06)',
          background: '#F9C8C8',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: '18px',
              color: '#3D1520',
              marginBottom: '12px'
            }}>
              BRIDAL SUITE
            </div>
            <div style={{
              fontFamily: 'var(--font-script, serif)',
              fontSize: '14px',
              fontStyle: 'italic',
              color: '#B76E79',
              marginBottom: '12px'
            }}>
              by Nikita Liby
            </div>
            <div style={{
              fontFamily: 'var(--font-body, serif)',
              fontSize: '14px',
              color: '#B76E79',
              marginBottom: '16px',
              lineHeight: '1.6'
            }}>
              Moozhayil House<br />
              Thodupuzha Rd, Pala<br />
              Kerala 686575
            </div>
            <a
              href="https://maps.app.goo.gl/F6MtRGyNAoHAsmYe8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #B76E79, #D4A055)',
                color: '#FFFFFF',
                padding: '10px 20px',
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
