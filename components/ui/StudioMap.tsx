'use client'

import Image from 'next/image'

export default function StudioMap() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
      {/* ──────── LOCATION 1: MAIN STUDIO ──────── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(183,110,121,0.12), 0 2px 8px rgba(183,110,121,0.06)',
        }}>
          <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <Image
              src="https://maps.googleapis.com/maps/api/staticmap?center=Pala,Kerala,India&zoom=15&size=800x400&markers=color:red%7CPala,Kerala,India&key=YOUR_API_KEY"
              alt="NIXTUDIO Main Salon — Pala, Kerala"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(61,21,32,0.05) 0%, rgba(183,110,121,0.1) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-display, serif)', fontSize: '24px',
                  color: '#3D1520', marginBottom: '8px'
                }}>
                  📍 Pala, Kerala
                </div>
                <div style={{
                  fontFamily: 'var(--font-body, serif)', fontSize: '14px',
                  color: '#B76E79', fontStyle: 'italic'
                }}>
                  Main Studio Location
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute', bottom: '20px', left: '20px', zIndex: 10,
          background: 'rgba(255,250,248,0.94)', backdropFilter: 'blur(12px)',
          borderRadius: '16px', padding: '16px 20px', border: '1px solid #F9C8C8',
          boxShadow: '0 4px 24px rgba(183,110,121,0.20)', maxWidth: '200px',
        }}>
          <div style={{ fontFamily: 'var(--font-display, serif)', fontSize: '15px', fontWeight: '500', color: '#4E4247', letterSpacing: '0.08em', marginBottom: '2px' }}>
            NIXTUDIO
          </div>
          <div style={{ fontFamily: 'var(--font-script, serif)', fontSize: '13px', fontStyle: 'italic', color: '#B76E79', marginBottom: '8px' }}>
            Main Salon
          </div>
          <div style={{ fontFamily: 'var(--font-body, serif)', fontSize: '12px', color: '#A86070', fontStyle: 'italic', marginBottom: '12px', lineHeight: '1.5' }}>
            Pala, Kerala
          </div>
          <a
            href="https://maps.app.goo.gl/itu98MmV5z5XtLpR6"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', background: 'linear-gradient(135deg, #B76E79, #D4A055)',
              color: '#FFFFFF', padding: '8px 16px', borderRadius: '100px',
              fontFamily: 'var(--font-sans, sans-serif)', fontSize: '10px',
              letterSpacing: '0.15em', textDecoration: 'none', fontWeight: '500',
            }}
          >
            GET DIRECTIONS →
          </a>
        </div>
      </div>

      {/* ──────── LOCATION 2: BRIDAL SUITE ──────── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(183,110,121,0.12), 0 2px 8px rgba(183,110,121,0.06)',
        }}>
          <div style={{ position: 'relative', width: '100%', height: '400px' }}>
            <Image
              src="https://maps.googleapis.com/maps/api/staticmap?center=Moozhayil+House,Thodupuzha+Rd,Pala,Kerala&zoom=15&size=800x400&markers=color:red%7CMoozhayil+House,Thodupuzha+Rd,Pala,Kerala&key=YOUR_API_KEY"
              alt="NIXTUDIO BRIDAL SUITE — Pala, Kerala"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(61,21,32,0.05) 0%, rgba(183,110,121,0.1) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-display, serif)', fontSize: '24px',
                  color: '#3D1520', marginBottom: '8px'
                }}>
                  🏛️ Bridal Suite
                </div>
                <div style={{
                  fontFamily: 'var(--font-body, serif)', fontSize: '14px',
                  color: '#B76E79', fontStyle: 'italic'
                }}>
                  Moozhayil House, Pala
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute', bottom: '20px', left: '20px', zIndex: 10,
          background: 'rgba(255,250,248,0.94)', backdropFilter: 'blur(12px)',
          borderRadius: '16px', padding: '16px 20px', border: '1px solid #F9C8C8',
          boxShadow: '0 4px 24px rgba(183,110,121,0.20)', maxWidth: '240px',
        }}>
          <div style={{ fontFamily: 'var(--font-display, serif)', fontSize: '15px', fontWeight: '500', color: '#4E4247', letterSpacing: '0.08em', marginBottom: '2px' }}>
            BRIDAL SUITE
          </div>
          <div style={{ fontFamily: 'var(--font-script, serif)', fontSize: '13px', fontStyle: 'italic', color: '#B76E79', marginBottom: '8px' }}>
            by Nikita Liby
          </div>
          <div style={{ fontFamily: 'var(--font-body, serif)', fontSize: '11px', color: '#A86070', fontStyle: 'italic', marginBottom: '12px', lineHeight: '1.4' }}>
            Moozhayil House, <br /> Thodupuzha Rd, Pala
          </div>
          <a
            href="https://maps.app.goo.gl/F6MtRGyNAoHAsmYe8"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', background: 'linear-gradient(135deg, #B76E79, #D4A055)',
              color: '#FFFFFF', padding: '8px 16px', borderRadius: '100px',
              fontFamily: 'var(--font-sans, sans-serif)', fontSize: '10px',
              letterSpacing: '0.15em', textDecoration: 'none', fontWeight: '500',
            }}
          >
            GET DIRECTIONS →
          </a>
        </div>
      </div>
    </div>
  )
}
