"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home",          label: "Home" },
  { href: "#our-story",     label: "Our Story" },
  { href: "#services",      label: "Services" },
  { href: "#why-choose",    label: "Why Choose Zelenz" },
  { href: "#happy-clients", label: "Happy Clients" },
  { href: "#gallery",       label: "Gallery" },
  { href: "#contact",       label: "Contact Us" },
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
            className="flex items-center gap-2 group"
            aria-label="Zelenz Unisex Saloon — Home"
          >
            <Image
              src="/logo.png"
              alt="Zelenz Unisex Saloon Logo"
              width={160}
              height={48}
              className={`h-6 md:h-11 w-auto object-contain transition-all duration-300 ${
                scrolled ? "drop-shadow-xs" : "brightness-0 invert"
              }`}
              priority
              suppressHydrationWarning
            />
          </Link>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
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
              </a>
            ))}
          </nav>

          {/* CTA - desktop */}
          <a
            href="#contact"
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
            Book Appointment
          </a>

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
          className="fixed inset-0 z-[9999] flex flex-col"
          style={{
            background: "rgba(61,26,31,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Fixed top bar — close always visible */}
          <div
            className="flex shrink-0 items-center justify-between px-5 pb-2"
            style={{ paddingTop: "max(20px, env(safe-area-inset-top))" }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                color: "#D4A055",
                textTransform: "uppercase",
              }}
            >
              Zelenz Salon
            </span>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                color: "#FDE8E8",
                padding: "12px",
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
          </div>

          {/* Scrollable nav — all links reachable on small screens */}
          <div
            className="flex-1 overflow-y-auto overscroll-contain px-5"
            style={{
              WebkitOverflowScrolling: "touch",
              paddingBottom: "max(32px, env(safe-area-inset-bottom))",
            }}
          >
            <nav className="flex flex-col w-full max-w-md mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(24px, 6vw, 32px)",
                    color: "#FDE8E8",
                    textAlign: "center",
                    padding: "12px 0",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mx-auto mt-4 text-center"
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "14px 28px",
                borderRadius: "100px",
                background: "#E8A890",
                width: "fit-content",
              }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </>
  );
}
