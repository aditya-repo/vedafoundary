import Image from "next/image";
import { LotusIcon } from "./icons";
import bgImage from "@/app/assets/bg.webp";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 19h16M6 15h12M8 11h8M10 7h4" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "25+",
    label: "Happy Clients",
    icon: <LotusIcon className="w-5 h-5" />,
  },
  {
    value: "5+",
    label: "Years of Experience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 2l8 4v6c0 5.25-3.5 10-8 12-8-1.75-8-6.75-8-12V6l8-4z" stroke="#C5A059" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    value: "99%",
    label: "Client Retention",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" stroke="#C5A059" strokeWidth="1.5" />
        <path d="M8 12l3 3 5-5" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function FaintMandala({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="200" cy="200" r="180" stroke="#C5A059" strokeWidth="0.5" opacity="0.15" />
      <circle cx="200" cy="200" r="140" stroke="#C5A059" strokeWidth="0.5" opacity="0.12" />
      <circle cx="200" cy="200" r="100" stroke="#C5A059" strokeWidth="0.5" opacity="0.1" />
      <circle cx="200" cy="200" r="60" stroke="#C5A059" strokeWidth="0.5" opacity="0.08" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={200 + 180 * Math.cos(angle)}
            y2={200 + 180 * Math.sin(angle)}
            stroke="#C5A059"
            strokeWidth="0.4"
            opacity="0.1"
          />
        );
      })}
    </svg>
  );
}

function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-3 mt-5 mx-auto lg:mx-0 w-full max-w-[180px] sm:max-w-[220px]">
      <div className="h-px flex-1 bg-gold/50" />
      <LotusIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
      <div className="h-px flex-1 bg-gold/50" />
    </div>
  );
}

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed backgrounds — desktop only */}
      <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2">
        <div className="relative bg-cream overflow-hidden">
          <FaintMandala className="w-[420px] h-[420px] -left-20 top-1/2 -translate-y-1/2 opacity-60" />
          <div className="absolute right-0 top-0 bottom-0 w-[38%]">
            <Image
              src={bgImage}
              alt=""
              fill
              className="object-cover object-center opacity-90"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/40 to-transparent" />
          </div>
        </div>
        <div className="relative bg-navy overflow-hidden">
          <FaintMandala className="w-[500px] h-[500px] -right-32 top-1/2 -translate-y-1/2 opacity-40" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 overflow-hidden lg:overflow-visible rounded-none">
          {/* Quote */}
          <div className="relative bg-cream lg:bg-transparent flex items-center min-h-[240px] sm:min-h-[280px] lg:min-h-[380px] py-12 lg:py-16 lg:pr-6 px-2 sm:px-0">
            <div className="lg:hidden absolute inset-0 overflow-hidden">
              <FaintMandala className="w-[280px] h-[280px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
            </div>

            <blockquote className="relative z-10 w-full lg:pr-[15%]">
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-navy leading-snug italic text-center lg:text-left">
                &ldquo;Code is the new Sanskrit — precise, powerful, timeless.&rdquo;
              </p>
              <LotusDivider />
            </blockquote>
          </div>

          {/* Philosophy + stats */}
          <div className="bg-navy lg:bg-transparent py-12 lg:py-16 lg:pl-6 px-4 sm:px-6 flex flex-col justify-center lg:min-h-[380px]">
            <p className="section-label mb-4">Our Philosophy</p>

            <p className="text-white/80 text-sm leading-relaxed mb-3">
              We draw inspiration from ancient Indian wisdom — where everything was designed
              with purpose, harmony, and precision. That same mindset drives how we build
              software today.
            </p>
            <p className="text-white/80 text-sm leading-relaxed mb-8">
              We believe in clarity over complexity, craftsmanship over shortcuts, and
              long-term partnerships over one-time projects.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1.5">
                  <span className="text-gold">{stat.icon}</span>
                  <p className="font-serif text-2xl font-semibold text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-[11px] leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
