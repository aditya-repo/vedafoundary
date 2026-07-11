"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    initials: "JD",
    name: "Jaydeep",
    role: "Founder, RugsBhaodhi",
    avatarColor: "#A0522D",
    quote:
      "I was managing everything on WhatsApp and Instagram DMs before this. Veda Foundry built us a proper e-commerce platform that looks and feels premium. Our customers now trust us more and the order process is completely smooth. Worth every rupee.",
  },
  {
    id: 2,
    initials: "PK",
    name: "Pankaj Kumar",
    role: "Founder, Navikara",
    avatarColor: "#2D6A4F",
    quote:
      "Navikara needed to handle thousands of daily users across government jobs, results and scholarships — all in one place. Veda Foundry understood the scale required from day one and delivered a fast, SEO-friendly platform that actually ranks. Students trust it because it works.",
  },
  {
    id: 3,
    initials: "SS",
    name: "Sweta Suman",
    role: "Founder, WeddinPlanner",
    avatarColor: "#C4973A",
    quote:
      "Building a marketplace where both vendors and couples interact is complicated — but Veda Foundry made it look effortless. The platform handles vendor listings, inquiries and bookings cleanly. We went from scattered WhatsApp groups to a proper business overnight.",
  },
  {
    id: 4,
    initials: "RR",
    name: "Rajeev Ranjan Arya",
    role: "Director, OAF Portal",
    avatarColor: "#2D4A6B",
    quote:
      "Our portal needed to be reliable, structured and professional — it serves a serious user base. Veda Foundry delivered exactly that. The attention to detail in the UI and the stability of the platform has made a real difference to how our users perceive us.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const visible = [
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ];

  return (
    <section className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="section-label mb-3">What Our Clients Say</p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy">
            Trusted by founders and teams worldwide
          </h2>
        </div>

        {/* Mobile — one card */}
        <div className="lg:hidden">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-navy/5">
            <p className="font-serif text-navy/80 text-sm leading-relaxed mb-6">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0"
                style={{ backgroundColor: testimonials[active].avatarColor }}
              >
                {testimonials[active].initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">{testimonials[active].name}</p>
                <p className="text-xs text-muted">{testimonials[active].role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-gold"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === active ? "bg-gold" : "bg-navy/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-gold"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop — three cards */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 w-10 h-10 flex items-center justify-center text-gold hover:text-gold-light"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div className="grid grid-cols-3 gap-6 flex-1">
            {visible.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-xl p-8 shadow-sm border border-navy/5"
              >
                <p className="font-serif text-navy/80 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0"
                    style={{ backgroundColor: t.avatarColor }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 w-10 h-10 flex items-center justify-center text-gold hover:text-gold-light"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
