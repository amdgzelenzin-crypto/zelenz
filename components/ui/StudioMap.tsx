'use client'

import Image from 'next/image'
import { IconBadge, PremiumIcon } from '@/components/ui/PremiumIcon'

export default function StudioMap() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
      {/* ──────── LOCATION 1: MAIN STUDIO ──────── */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(196, 156, 77, 0.12), 0 2px 8px rgba(196, 156, 77, 0.06)',
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
              background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.05) 0%, rgba(196, 156, 77, 0.1) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-display, serif)', fontSize: '24px',
                  color: '#000000', marginBottom: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}>
                  <PremiumIcon name="map-pin" size={22} className="text-[#c49c4d]" />
                  Pala, Kerala
                </div>
                <div style={{
                  fontFamily: 'var(--font-body, serif)', fontSize: '14px',
                  color: '#c49c4d', fontStyle: 'italic'
                }}>
                  Main Studio Location
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute', bottom: '20px', left: '20px', zIndex: 10,
          background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)',
          borderRadius: '16px', padding: '16px 20px', border: '1px solid #323232',
          boxShadow: '0 4px 24px rgba(196, 156, 77, 0.20)', maxWidth: '200px',
        }}>
          <div style={{ fontFamily: 'var(--font-display, serif)', fontSize: '15px', fontWeight: '500', color: '#e9ce98', letterSpacing: '0.08em', marginBottom: '2px' }}>
            NIXTUDIO
          </div>
          <div style={{ fontFamily: 'var(--font-script, serif)', fontSize: '13px', fontStyle: 'italic', color: '#c49c4d', marginBottom: '8px' }}>
            Main Salon
          </div>
          <div style={{ fontFamily: 'var(--font-body, serif)', fontSize: '12px', color: '#c1a447', fontStyle: 'italic', marginBottom: '12px', lineHeight: '1.5' }}>
            Pala, Kerala
          </div>
          <a
            href="https://maps.app.goo.gl/itu98MmV5z5XtLpR6"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', background: 'linear-gradient(135deg, #c49c4d, #c49c4d)',
              color: '#ffffff', padding: '8px 16px', borderRadius: '100px',
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
          boxShadow: '0 8px 40px rgba(196, 156, 77, 0.12), 0 2px 8px rgba(196, 156, 77, 0.06)',
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
              background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.05) 0%, rgba(196, 156, 77, 0.1) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-display, serif)', fontSize: '24px',
                  color: '#000000', marginBottom: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}>
                  <PremiumIcon name="landmark" size={22} className="text-[#c49c4d]" />
                  Bridal Suite
                </div>
                <div style={{
                  fontFamily: 'var(--font-body, serif)', fontSize: '14px',
                  color: '#c49c4d', fontStyle: 'italic'
                }}>
                  Moozhayil House, Pala
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute', bottom: '20px', left: '20px', zIndex: 10,
          background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)',
          borderRadius: '16px', padding: '16px 20px', border: '1px solid #323232',
          boxShadow: '0 4px 24px rgba(196, 156, 77, 0.20)', maxWidth: '240px',
        }}>
          <div style={{ fontFamily: 'var(--font-display, serif)', fontSize: '15px', fontWeight: '500', color: '#e9ce98', letterSpacing: '0.08em', marginBottom: '2px' }}>
            BRIDAL SUITE
          </div>
          <div style={{ fontFamily: 'var(--font-script, serif)', fontSize: '13px', fontStyle: 'italic', color: '#c49c4d', marginBottom: '8px' }}>
            by Nikita Liby
          </div>
          <div style={{ fontFamily: 'var(--font-body, serif)', fontSize: '11px', color: '#c1a447', fontStyle: 'italic', marginBottom: '12px', lineHeight: '1.4' }}>
            Moozhayil House, <br /> Thodupuzha Rd, Pala
          </div>
          <a
            href="https://maps.app.goo.gl/F6MtRGyNAoHAsmYe8"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', background: 'linear-gradient(135deg, #c49c4d, #c49c4d)',
              color: '#ffffff', padding: '8px 16px', borderRadius: '100px',
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
