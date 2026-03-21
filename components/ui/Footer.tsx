import Link from "next/link";

const footerNav = [
  { href: "/bridal", label: "Bridal" },
  { href: "/party", label: "Party Makeup" },
  { href: "/salon", label: "Salon" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const footerServices = [
  { href: "/bridal", label: "Bridal Makeup" },
  { href: "/party", label: "Party & Guest" },
  { href: "/salon#haircut", label: "Hair" },
  { href: "/salon#gel-nails", label: "Nails" },
  { href: "/salon#facials", label: "Facials & Spa" },
];

export default function Footer() {
  return (
    <footer className="bg-parchment border-t border-taupe/15">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="inline-flex flex-col">
              <span className="font-serif text-xl tracking-wide text-espresso">
                NIXTUDIO
              </span>
              <span className="font-script text-sm text-brass -mt-1">
                By Nikita Liby
              </span>
            </Link>
            <p className="mt-4 text-sm text-taupe leading-relaxed max-w-[240px]">
              Where every face is a considered work.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-espresso mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-taupe hover:text-espresso transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-espresso mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-taupe hover:text-espresso transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-espresso mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-taupe">
              <li>Pala, Kerala</li>
              <li>
                <a
                  href="tel:+917034726402"
                  className="hover:text-espresso transition-colors duration-300"
                >
                  Salon: +91 70347 26402
                </a>
              </li>
              <li>
                <a
                  href="tel:+917034726407"
                  className="hover:text-espresso transition-colors duration-300"
                >
                  Bridal: +91 70347 26407
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/nixtudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-espresso transition-colors duration-300"
                >
                  @nixtudio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-taupe/10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-5">
          <p className="text-xs text-taupe/60 text-center">
            © {new Date().getFullYear()} NIXTUDIO by Nikita Liby &nbsp;|&nbsp; GST: 32AWNPL0049D1ZW
          </p>
        </div>
      </div>
    </footer>
  );
}
