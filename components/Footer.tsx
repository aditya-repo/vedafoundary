import { MandalaLogo } from "./icons";

const footerLinks = {
  Services: ["Web Platforms", "E-Commerce", "Product Engineering", "Mobile Apps"],
  Company: ["About", "Process", "Work", "Insights", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-cream pt-16 pb-8 border-t border-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <MandalaLogo className="w-8 h-8" />
              <span className="font-serif text-base font-semibold text-navy">
                VEDA FOUNDRY
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Product-grade web platforms built with ancient values and modern execution.
            </p>
            <MandalaLogo className="w-12 h-12 opacity-20" />
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="section-label mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted hover:text-navy transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="section-label mb-4">Connect</h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-navy transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-light text-xs">
            &copy; {new Date().getFullYear()} Veda Foundry. All rights reserved.
          </p>
          <p className="text-light text-xs">Crafted with precision and purpose.</p>
        </div>
      </div>
    </footer>
  );
}
