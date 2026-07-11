import Link from "next/link";
import { MandalaLogo } from "./icons";

const links = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-cream pt-12 pb-8 border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 mb-10">
          <Link href="/" className="flex items-center gap-3">
            <MandalaLogo className="w-8 h-8" />
            <span className="font-serif text-base font-semibold text-navy">
              VEDA FOUNDRY
            </span>
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-navy/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-light text-xs">
            &copy; {new Date().getFullYear()} Veda Foundry. All rights reserved.
          </p>
          <p className="text-light text-xs">Crafted with precision and purpose.</p>
        </div>
      </div>
    </footer>
  );
}
