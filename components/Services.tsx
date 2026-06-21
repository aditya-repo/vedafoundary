import { LotusIcon } from "./icons";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="10" width="36" height="24" rx="2" stroke="#C5A059" strokeWidth="1.5" />
        <path d="M6 16h36" stroke="#C5A059" strokeWidth="1" />
        <circle cx="10" cy="13" r="1.5" fill="#C5A059" />
        <circle cx="15" cy="13" r="1.5" fill="#C5A059" />
      </svg>
    ),
    title: "Web Platforms",
    description:
      "Scalable, performant web applications built with modern frameworks and best practices.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M10 14h28l-2 22H12L10 14z" stroke="#C5A059" strokeWidth="1.5" />
        <path d="M16 14V10a8 8 0 0116 0v4" stroke="#C5A059" strokeWidth="1.5" />
      </svg>
    ),
    title: "E-Commerce Solutions",
    description:
      "End-to-end online stores with seamless checkout, inventory, and analytics integration.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 6l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12L24 6z" stroke="#C5A059" strokeWidth="1.5" />
      </svg>
    ),
    title: "Product Engineering",
    description:
      "From MVP to enterprise — we architect and ship products that users love.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="14" y="4" width="20" height="40" rx="4" stroke="#C5A059" strokeWidth="1.5" />
        <circle cx="24" cy="38" r="2" fill="#C5A059" />
        <path d="M20 8h8" stroke="#C5A059" strokeWidth="1" />
      </svg>
    ),
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile experiences designed for engagement and retention.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">What We Do</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy">
            End-to-end digital solutions built for growth
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover bg-white rounded-lg p-8 shadow-sm border border-navy/5"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="font-serif text-lg font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <a href="#" className="link-arrow">
                Learn more
                <LotusIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
