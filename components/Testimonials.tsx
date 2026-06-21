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

  const prev = () =>
    setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  const next = () =>
    setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const visible = [
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ];

  return (
    <section className="py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="section-label mb-3">
              What Our Clients Say
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy">
              Trusted by founders and teams worldwide
            </h2>
          </div>

          <a href="#" className="hidden md:inline link-arrow">
            View All Stories
          </a>
        </div>


        {/* Mobile */}
        <div className="md:hidden">

          <div className="bg-white rounded-xl p-6 shadow-sm border border-navy/5">
            <p className="font-serif text-navy/80 leading-relaxed mb-6">
              &ldquo;{visible[0].quote}&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                style={{
                  backgroundColor: visible[0].avatarColor
                }}
              >
                {visible[0].initials}
              </div>

              <div>
                <p className="font-semibold text-navy">
                  {visible[0].name}
                </p>

                <p className="text-xs text-muted">
                  {visible[0].role}
                </p>
              </div>
            </div>
          </div>


          {/* Mobile Controls */}
          <div className="flex justify-center gap-4 mt-6">

            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center"
            >
              →
            </button>

          </div>

        </div>



        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">

          <button
            onClick={prev}
            className="shrink-0 w-10 h-10 flex items-center justify-center text-gold hover:text-gold-light"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
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
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                    style={{
                      backgroundColor: t.avatarColor
                    }}
                  >
                    {t.initials}
                  </div>

                  <div>
                    <p className="font-semibold text-navy">
                      {t.name}
                    </p>

                    <p className="text-xs text-muted">
                      {t.role}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>


          <button
            onClick={next}
            className="shrink-0 w-10 h-10 flex items-center justify-center text-gold hover:text-gold-light"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}