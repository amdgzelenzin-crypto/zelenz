"use client";

import Link from "next/link";
import ProtectedEmail from "@/components/ui/ProtectedEmail";

const footerNav = [
  { href: "/bridal",  label: "Bridal"       },
  { href: "/party",   label: "Party & Guests" },
  { href: "/services",label: "Services"     },
  { href: "/blog",    label: "Journal"      },
  { href: "/gallery", label: "Gallery"      },
  { href: "/about",   label: "About"        },
  { href: "/contact", label: "Contact"      },
];

const services = [
  "Bridal Makeup", "Engagement Makeup", "Reception Makeup",
  "Party & Guest Makeup", "Hairstyling", "Saree Draping",
  "Gel Nails", "Nail Extensions", "Facials", "Hair Coloring",
];

export default function Footer() {
  return (
    <footer className="texture-grain" style={{ background: "#3D1520", color: "#FFF5F7" }}>
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "clamp(60px, 8vw, 100px) clamp(24px, 5vw, 48px) clamp(40px, 5vw, 60px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "60px",
          }}
        >
          {/* Brand col */}
          <div>
            <p
              className="gold-foil-text"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "18px",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              NIXTUDIO
            </p>
            <p
              style={{
                fontFamily: "var(--font-script), Georgia, serif",
                fontSize: "14px",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#E8CC90",
                marginBottom: "20px",
              }}
            >
              By Nikita Liby
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: "14px",
                fontStyle: "italic",
                lineHeight: 1.7,
                color: "#F5D5C8",
                maxWidth: "240px",
              }}
            >
              Premium makeup studio in <span itemProp="addressLocality">Pala</span>, <span itemProp="addressRegion">Kerala</span>. Every face. Carefully considered.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#F9919F",
                marginBottom: "20px",
              }}
            >
              Navigate
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontSize: "14px",
                      color: "#F5D5C8",
                      textDecoration: "none",
                      transition: "color 250ms ease",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#F9919F",
                marginBottom: "20px",
              }}
            >
              Services
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {services.slice(0, 6).map((s) => (
                <li key={s}>
                  <span
                    style={{
                      fontFamily: "var(--font-body), Georgia, serif",
                      fontSize: "14px",
                      color: "#F5D5C8",
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#F9919F",
                marginBottom: "20px",
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", color: "#F9919F", marginBottom: "4px" }}>Salon</p>
                <a
                  href="tel:+917034726402"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "16px",
                    color: "#E8CC90",
                    textDecoration: "none",
                  }}
                >
                  +91 70347 26402
                </a>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", color: "#F9919F", marginBottom: "4px" }}>Bridal</p>
                <a
                  href="tel:+917034726407"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "16px",
                    color: "#E8CC90",
                    textDecoration: "none",
                  }}
                >
                  +91 70347 26407
                </a>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#E8CC90',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body, serif)',
                  fontSize: '14px',
                  marginTop: '8px',
                  cursor: 'pointer'
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E8CC90"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
                <ProtectedEmail />
              </div>
              <p
                itemScope
                itemType="https://schema.org/PostalAddress"
                style={{
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontSize: "14px",
                  color: "#F5D5C8",
                  lineHeight: 1.6,
                }}
              >
                <strong>Main Salon:</strong> <span itemProp="addressLocality">Pala</span>, <span itemProp="addressRegion">Kerala</span><br />
                <strong>Bridal Suite:</strong> <span itemProp="streetAddress">Moozhayil House, Thodupuzha Rd</span><br />
                <meta itemProp="addressCountry" content="IN" />
                <span itemProp="postalCode">686575</span><br />
                Mon – Sun, 10am – 7pm
              </p>
              <a
                href="https://wa.me/917034726402"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  padding: "10px 20px",
                  borderRadius: "100px",
                  background: "#25D366",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                WhatsApp
              </a>
              <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                <a
                  href="https://www.facebook.com/nixtudio_-100648048221705/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "transparent",
                    border: "1.5px solid #B78472",
                    color: "#B78472",
                    textDecoration: "none",
                    transition: "all 300ms ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                    e.currentTarget.style.borderColor = "#D4AF37";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#B78472";
                    e.currentTarget.style.borderColor = "#B78472";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/nixtudio_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "transparent",
                    border: "1.5px solid #B78472",
                    color: "#B78472",
                    textDecoration: "none",
                    transition: "all 300ms ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                    e.currentTarget.style.borderColor = "#D4AF37";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#B78472";
                    e.currentTarget.style.borderColor = "#B78472";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC0U_0F2DXFeCwahTd4YI9YA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "transparent",
                    border: "1.5px solid #B78472",
                    color: "#B78472",
                    textDecoration: "none",
                    transition: "all 300ms ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                    e.currentTarget.style.borderColor = "#D4AF37";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#B78472";
                    e.currentTarget.style.borderColor = "#B78472";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://revol-q.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Revol-Q"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "transparent",
                    border: "1.5px solid #B78472",
                    color: "#B78472",
                    textDecoration: "none",
                    transition: "all 300ms ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#D4AF37";
                    e.currentTarget.style.borderColor = "#D4AF37";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#B78472";
                    e.currentTarget.style.borderColor = "#B78472";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: "20px",
                      height: "20px",
                      fill: "none",
                      stroke: "#B78472",
                      strokeWidth: "1.5",
                    }}
                  >
                    <path d="M8 20V4h6a4 4 0 0 1 0 8H8m6 0l4 8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(245,210,200,0.15)",
            paddingTop: "28px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "11px",
              color: "rgba(245,210,200,0.45)",
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} NIXTUDIO by Nikita Liby. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "11px",
              color: "rgba(245,210,200,0.45)",
              letterSpacing: "0.05em",
            }}
          >
            <a 
              href="https://revol-q.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(245,210,200,0.45)",
                textDecoration: "none",
                transition: "color 250ms ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#D4AF37";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "rgba(245,210,200,0.45)";
              }}
            >
              POWERED BY REVOL-Q
            </a>
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "10px",
              color: "rgba(245,210,200,0.40)",
              letterSpacing: "0.15em",
            }}
          >
            Pala, Kerala · India
          </p>
        </div>

        {/* Stealth SEO Footer Anchor */}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(245,210,200,0.08)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "10px",
              color: "rgba(245,210,200,0.40)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              lineHeight: 1.4,
            }}
          >
            Also providing premium woman's salon services and bespoke skin treatments in Pala & Kottayam.
          </p>
        </div>
      </div>
    </footer>
  );
}
