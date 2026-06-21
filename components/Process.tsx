const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Deep dive into your goals, users, and market landscape.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Strategy",
    description: "Define roadmap, architecture, and success metrics.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 18V6M10 18V10M16 18V14M22 18V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Design",
    description: "Craft intuitive interfaces with pixel-perfect precision.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Develop",
    description: "Build with clean code, modern stack, and best practices.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M8 6L2 12l6 6M16 6l6 6-6 6M14 4l-4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Test",
    description: "Rigorous QA across devices, browsers, and edge cases.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Launch & Support",
    description: "Deploy, monitor, and iterate for long-term success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4.5 16.5L12 4l7.5 12.5H4.5z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Our Process</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy">
            A thoughtful process. Predictable results.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-gold/30" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4">
                  <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full">
                    <polygon
                      points="32,2 62,17 62,47 32,62 2,47 2,17"
                      fill="none"
                      stroke="#C5A059"
                      strokeWidth="1"
                    />
                  </svg>
                  <span className="relative text-gold">{step.icon}</span>
                </div>
                <p className="text-gold text-xs font-semibold mb-1">{step.num}</p>
                <h3 className="font-serif text-base font-semibold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
