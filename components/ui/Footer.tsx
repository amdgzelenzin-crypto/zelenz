"use client";

import Link from "next/link";

const footerNav = [
  { href: "/bridal",  label: "Bridal"       },
  { href: "/party",   label: "Party Makeup" },
  { href: "/salon",   label: "Services"     },
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
              Premium makeup studio in Pala, Kerala. Every face. Carefully considered.
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
              <a
                href="tel:+916282089746"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "16px",
                  color: "#E8CC90",
                  textDecoration: "none",
                }}
              >
                +91 6282 089 746
              </a>
              <p
                style={{
                  fontFamily: "var(--font-body), Georgia, serif",
                  fontSize: "14px",
                  color: "#F5D5C8",
                  lineHeight: 1.5,
                }}
              >
                Pala, Kerala<br />Mon – Sun, 10am – 7pm
              </p>
              <a
                href="https://wa.me/916282089746"
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
            Pala, Kerala · India
          </p>
        </div>
      </div>
    </footer>
  );
}
