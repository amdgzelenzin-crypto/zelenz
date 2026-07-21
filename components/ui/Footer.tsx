"use client";

import Link from "next/link";

const footerNav = [
  { href: "#home",          label: "Home" },
  { href: "#our-story",     label: "Our Story" },
  { href: "#services",      label: "Services" },
  { href: "#why-choose",    label: "Why Choose Zelenz" },
  { href: "#happy-clients", label: "Happy Clients" },
  { href: "#gallery",       label: "Gallery" },
  { href: "#contact",       label: "Contact Us" },
];

const simpleServices = [
  "Hair Lounge",
  "Skin & Facial Care",
  "Nail & Hand Care",
  "Premium Grooming"
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
          {/* Brand Column */}
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
              ZELENZ
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#E8CC90",
                marginBottom: "20px",
              }}
            >
              Unisex Saloon
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
              Where luxury meets beauty. Pala & Kottayam's premier unisex salon offering exceptional styling, grooming, and makeup services.
            </p>
          </div>

          {/* Navigate Column */}
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
                  <a
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
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
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
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {simpleServices.map((s) => (
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

          {/* Contact Column */}
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
                <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", color: "#F9919F", marginBottom: "4px" }}>Pala Location</p>
                <a
                  href="tel:+919876543210"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "16px",
                    color: "#E8CC90",
                    textDecoration: "none",
                  }}
                >
                  +91 98765 43210
                </a>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", color: "#F9919F", marginBottom: "4px" }}>Kottayam Location</p>
                <a
                  href="tel:+919876543211"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "16px",
                    color: "#E8CC90",
                    textDecoration: "none",
                  }}
                >
                  +91 98765 43211
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
                <a href="mailto:info@dummyzelenz.com" style={{ color: "inherit", textDecoration: "none" }}>info@dummyzelenz.com</a>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontSize: "14px",
                  color: "#F5D5C8",
                  lineHeight: 1.6,
                }}
              >
                <strong>Pala:</strong> Dummy Building, Near Civil Station, Pala, Kerala<br />
                <strong>Kottayam:</strong> Dummy Complex, Kanjikuzhy, Kottayam, Kerala<br />
                Mon – Sun, 9:30 AM – 7:30 PM
              </p>
              <a
                href="https://wa.me/919876543210"
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
                  href="https://facebook.com"
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
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
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
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
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
              fontSize: "12px",
              color: "rgba(245,210,200,0.50)",
              letterSpacing: "0.05em",
            }}
          >
            <a href="#privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
            {" · "}
            <a href="#terms" style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
            {" · "}
            500+ verified client reviews
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "11px",
              color: "rgba(245,210,200,0.45)",
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} Zelenz Unisex Saloon. All rights reserved.
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
      </div>
    </footer>
  );
}
