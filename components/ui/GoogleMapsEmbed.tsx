'use client'

export default function GoogleMapsEmbed() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
      {/* ──────── LOCATION 1: CHERPUNKAL BRANCH (MAIN) ──────── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(196, 156, 77, 0.12), 0 2px 8px rgba(196, 156, 77, 0.06)',
          background: 'linear-gradient(135deg, #000000 0%, #323232 100%)',
          border: '1px solid #323232',
          height: '320px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: '11px',
              color: '#c49c4d',
              marginBottom: '6px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              Main Location
            </div>
            <div style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: '22px',
              color: '#c79c44',
              marginBottom: '12px',
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}>
              ZELENZ — CHERPUNKAL
            </div>
            <div style={{
              fontFamily: 'var(--font-body, serif)',
              fontSize: '14px',
              color: '#e9ce98',
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              Opp. Mar Sleeva Medicity, Cherpunkal<br />
              Kottayam District, Kerala
            </div>
            <a
              href="https://www.google.com/maps/place/9%C2%B040'47.0%22N+76%C2%B038'41.5%22E/@9.6797295,76.6422854,17z/data=!3m1!4b1!4m4!3m3!8m2!3d9.6797295!4d76.6448603?hl=en&entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#000000',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '100px',
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'transform 300ms ease, background 300ms ease'
              }}
              onMouseOver={(e: any) => {
                e.currentTarget.style.transform = 'scale(1.04)'
                e.currentTarget.style.background = '#c49c4d'
              }}
              onMouseOut={(e: any) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.background = '#000000'
              }}
            >
              OPEN GOOGLE MAPS →
            </a>
          </div>
        </div>
      </div>

      {/* ──────── LOCATION 2: PALA BRANCH ──────── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(196, 156, 77, 0.12), 0 2px 8px rgba(196, 156, 77, 0.06)',
          background: 'linear-gradient(135deg, #000000 0%, #323232 100%)',
          border: '1px solid #323232',
          height: '320px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <div style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: '11px',
              color: '#c49c4d',
              marginBottom: '6px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              Pala Branch
            </div>
            <div style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: '22px',
              color: '#c79c44',
              marginBottom: '12px',
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}>
              ZELENZ — PALA
            </div>
            <div style={{
              fontFamily: 'var(--font-body, serif)',
              fontSize: '14px',
              color: '#e9ce98',
              marginBottom: '20px',
              lineHeight: '1.6'
            }}>
              Santhom Complex, Kottaramattom, Pala<br />
              Kottayam District, Kerala
            </div>
            <a
              href="https://maps.google.com/?q=Zelenz+Makeups+Santhom+Complex+Kottaramattom+Pala"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#000000',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '100px',
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'transform 300ms ease, background 300ms ease'
              }}
              onMouseOver={(e: any) => {
                e.currentTarget.style.transform = 'scale(1.04)'
                e.currentTarget.style.background = '#c49c4d'
              }}
              onMouseOut={(e: any) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.background = '#000000'
              }}
            >
              OPEN GOOGLE MAPS →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
