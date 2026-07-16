import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { PlusIcon, PhoneIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/components/WhatsAppFloat";
import { SITE_PHONE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Veda Foundry",
  description:
    "Learn about Veda Foundry — a digital studio building product-grade web platforms with ancient values and modern execution.",
};

const values = [
  {
    title: "Clarity",
    description:
      "We communicate plainly, scope carefully, and deliver what we promise — no jargon, no surprises. Every milestone has a clear outcome.",
  },
  {
    title: "Craftsmanship",
    description:
      "Every interface, API, and deployment is built with the same care a craftsman gives to lasting work. Details are not optional.",
  },
  {
    title: "Integrity",
    description:
      "We choose the right stack for the problem, not the trend — and we own outcomes with our clients from kickoff to launch.",
  },
  {
    title: "Performance",
    description:
      "Speed, SEO, and reliability are baked in from day one. A beautiful product that loads slowly is unfinished work.",
  },
  {
    title: "Mindful Innovation",
    description:
      "We adopt new technology when it serves the product — never for novelty. Purpose first, tools second.",
  },
  {
    title: "Enduring Impact",
    description:
      "We build platforms meant to grow with your business, not throwaway launches that fade in a year.",
  },
];

const capabilities = [
  {
    title: "Web Platforms & SaaS",
    description:
      "Multi-page products, dashboards, admin systems, and subscription experiences engineered for real users and real scale.",
  },
  {
    title: "Marketplaces",
    description:
      "Two-sided platforms with vendor listings, inquiries, bookings, and clean flows for both supply and demand sides.",
  },
  {
    title: "E-Commerce",
    description:
      "Premium storefronts with smooth checkout, catalog management, and a brand experience customers trust.",
  },
  {
    title: "Career & Content Platforms",
    description:
      "High-traffic information products — jobs, results, scholarships, and SEO-led publishing systems that need to rank and stay fast.",
  },
  {
    title: "Fintech Interfaces",
    description:
      "Finance and investment experiences that feel trustworthy, structured, and stable under serious usage.",
  },
  {
    title: "Ongoing Product Engineering",
    description:
      "Beyond launch — iteration, performance work, feature delivery, and technical partnership as your product grows.",
  },
];

const approach = [
  {
    step: "01",
    title: "Listen deeply",
    description:
      "We start with your users, constraints, and business goals — not a template. Discovery is where most of the risk is removed.",
  },
  {
    step: "02",
    title: "Design with intent",
    description:
      "Interfaces and flows are shaped for clarity. We prototype decisions early so you see the product before heavy build begins.",
  },
  {
    step: "03",
    title: "Build for production",
    description:
      "Clean architecture, modern stacks (Next.js, Node, MongoDB, and more), and shipping standards that hold up under traffic.",
  },
  {
    step: "04",
    title: "Launch & stay close",
    description:
      "Deployment, monitoring, and iteration. We don’t disappear after go-live — we help you stabilize and improve.",
  },
];

const whoWeServe = [
  "Founders replacing WhatsApp/Instagram operations with a real platform",
  "Teams launching an MVP that still needs to feel product-grade",
  "Businesses scaling traffic and needing SEO + performance discipline",
  "Operators building marketplaces, portals, or finance-facing products",
];

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "25+", label: "Happy clients" },
  { value: "5+", label: "Years of experience" },
  { value: "99%", label: "Client retention" },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-3">About Us</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy max-w-3xl mb-6">
            Ancient values. Modern execution.
          </h1>
          <p className="text-muted text-base lg:text-lg leading-relaxed max-w-2xl mb-10">
            Veda Foundry is a digital product studio based in Patna, India. We design and
            engineer web platforms, marketplaces, and business systems for founders who care
            about quality, speed, and long-term reliability.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl lg:text-3xl font-semibold text-gold leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-muted text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <p className="section-label mb-3">Our Story</p>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-5">
                Why Veda Foundry exists
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Too many businesses still run on DMs, scattered sheets, and fragile websites
                that buckle the moment traffic arrives. We built Veda Foundry to close that
                gap — turning real operational needs into product-grade software.
              </p>
              <p className="text-muted text-sm leading-relaxed mb-4">
                The name reflects our philosophy. “Veda” points to knowledge systems that
                valued precision and purpose. “Foundry” is where raw material becomes lasting
                form. Together, they describe how we work: deliberate, structured, and built
                to endure.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                From career platforms serving thousands of daily users, to wedding vendor
                marketplaces and finance products, our work lives in production — not in
                pitch decks.
              </p>
            </div>
            <div className="bg-navy rounded-lg p-8 lg:p-10 flex flex-col justify-center">
              <p className="font-serif text-xl lg:text-2xl text-white italic leading-relaxed mb-6">
                &ldquo;Code is the new Sanskrit — precise, powerful, timeless.&rdquo;
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                We draw inspiration from ancient Indian wisdom — where everything was designed
                with purpose, harmony, and precision. That same mindset drives how we build
                software today: clarity over complexity, craftsmanship over shortcuts, and
                long-term partnerships over one-time projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20 bg-white/60 border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-3">What We Build</p>
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-4 max-w-2xl">
            Product-grade platforms for modern businesses
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mb-10">
            We don&apos;t ship decorative websites. We ship systems that handle listings,
            users, content, payments, SEO, and day-to-day operations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item) => (
              <div key={item.title} className="border border-navy/5 bg-cream rounded-lg p-6">
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-3">How We Work</p>
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-4">
            A thoughtful process. Predictable results.
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mb-10">
            Clients stay with us because the process is transparent — and the delivery is
            consistent. Here&apos;s how an engagement typically unfolds.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item) => (
              <div key={item.step}>
                <p className="text-gold text-xs font-semibold tracking-widest mb-2">{item.step}</p>
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="section-label mb-3">Who We Serve</p>
              <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-5">
                Built for founders who want a real product
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Whether you&apos;re validating an idea or replacing a messy stack of tools,
                we partner closely — as an extension of your team, not a distant vendor.
              </p>
              <Link href="/#work" className="link-arrow text-gold">
                See our work
              </Link>
            </div>
            <ul className="space-y-4">
              {whoWeServe.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-navy leading-relaxed border-b border-navy/10 pb-4"
                >
                  <span className="text-gold shrink-0 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-3">Our Values</p>
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-navy mb-4">
            Principles that shape every engagement
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mb-10">
            Technology changes. Standards of care shouldn&apos;t. These values guide every
            proposal, sprint, and release.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white border border-navy/5 rounded-lg p-6">
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / presence */}
      <section className="py-16 lg:py-20 border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="section-label mb-3">Presence</p>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Rooted in Patna. Working nationwide.
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Our registered office is in Patna, Bihar. We work remotely with founders and
                teams across India — and support products that need to perform for users
                everywhere.
              </p>
              <p className="text-navy text-sm leading-relaxed">
                RKS Building, Beur More, Anishabad,
                <br />
                Patna, Bihar - 800002
              </p>
            </div>
            <div>
              <p className="section-label mb-3">Get in touch</p>
              <h2 className="font-serif text-2xl font-semibold text-navy mb-4">
                Prefer a conversation first?
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Reach us on WhatsApp for a quick inquiry, or visit the contact page for email,
                phone, and project details.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  WhatsApp Us
                  <PlusIcon className="text-gold" />
                </a>
                <Link href="/contact" className="btn-outline">
                  Contact page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-white mb-4">
            Ready to build with us?
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Tell us about your product, timeline, and goals — we&apos;ll respond with a clear
            next step.
          </p>
          <a href={SITE_PHONE_URL} className="btn-gold">
            <PhoneIcon className="w-4 h-4" />
            Free Demo
          </a>
        </div>
      </section>
    </PageShell>
  );
}
