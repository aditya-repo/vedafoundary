const values = [
  {
    title: "Clarity",
    description: "Transparent communication and clear deliverables at every stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="#C5A059" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="#C5A059" />
      </svg>
    ),
  },
  {
    title: "Craftsmanship",
    description: "Meticulous attention to detail in design, code, and user experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#C5A059" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "Honest partnerships built on trust, ethics, and accountability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2l8 4v6c0 5.25-3.5 10-8 12-4.5-2-8-6.75-8-12V6l8-4z" stroke="#C5A059" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Performance",
    description: "Lightning-fast applications optimized for speed and scalability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#C5A059" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Mindful Innovation",
    description: "Purposeful technology choices that serve real business needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" stroke="#C5A059" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Enduring Impact",
    description: "Solutions designed to grow and evolve with your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="#C5A059" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Values() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Why Choose Us</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy">
            Ancient values. Modern execution.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {values.map((value) => (
            <div key={value.title} className="flex gap-4">
              <div className="shrink-0 mt-1">{value.icon}</div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
