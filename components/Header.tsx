import Link from "next/link";
import { MandalaLogo, PlusIcon } from "./icons";
import { WHATSAPP_URL } from "./WhatsAppFloat";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            <MandalaLogo className="w-9 h-9" />
            <span className="font-serif text-lg font-semibold tracking-wide text-navy">
              VEDA FOUNDRY
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-navy/70 hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Start a Project
            <PlusIcon className="text-gold" />
          </a>
        </div>
      </div>
    </header>
  );
}
