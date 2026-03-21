"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/bridal",  label: "Bridal"       },
  { href: "/party",   label: "Party Makeup" },
  { href: "/salon",   label: "SERVICES"     },
  { href: "/gallery", label: "Gallery"      },
  { href: "/about",   label: "About"        },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 400ms ease, box-shadow 400ms ease",
          background: scrolled ? "rgba(253,232,232,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(61,21,32,0.08)" : "none",
        }}
      >
        <div className="mx-auto flex flex-row items-center justify-between max-w-[1440px] px-4 md:px-12 h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "1px" }}
            aria-label="NIXTUDIO — Home"
          >
            <span
              className="text-[16px] md:text-[18px] gold-foil-text"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: scrolled ? "#3D1520" : "#FFFFFF",
                lineHeight: 1,
                transition: "color 400ms ease",
              }}
            >
              NIXTUDIO
            </span>
            <span
              className="text-[12px] md:text-[13px]"
              style={{
                fontFamily: "var(--font-script), Georgia, serif",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#D4A055",
                lineHeight: 1,
              }}
            >
              By Nikita Liby
            </span>
          </Link>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: scrolled ? "#3D1520" : "rgba(255,255,255,0.88)",
                  textDecoration: "none",
                  transition: "color 300ms ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA - desktop */}
          <Link
            href="/contact"
            className="hidden md:flex"
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "10px 22px",
              borderRadius: "100px",
              background: "#E8A890",
              transition: "background 300ms ease",
              whiteSpace: "nowrap",
            }}
          >
            Check Availability
          </Link>

          {/* Hamburger button - mobile */}
          <button
            className="flex md:hidden items-center justify-center p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            style={{ color: scrolled ? "#3D1520" : "#FFFFFF" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(61,26,31,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 300ms ease-out"
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              color: "#FDE8E8",
              padding: "16px",
              fontSize: "28px",
              lineHeight: 1,
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Gold Script */}
          <div
            style={{
              fontFamily: "var(--font-script), Georgia, serif",
              fontSize: "28px",
              color: "#D4A055",
              fontStyle: "italic",
              marginBottom: "40px",
              marginTop: "-40px",
            }}
          >
            By Nikita Liby
          </div>

          {/* Links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "0px", width: "100%" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "36px",
                  color: "#FDE8E8",
                  textAlign: "center",
                  padding: "20px 0",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
