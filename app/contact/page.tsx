import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { PlusIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Contact Us — Veda Foundry",
  description:
    "Start a project with Veda Foundry. Reach out for web platforms, marketplaces, and product engineering.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="section-label mb-3">Contact Us</p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy mb-6">
                Let&apos;s build something extraordinary
              </h1>
              <p className="text-muted text-base leading-relaxed mb-8 max-w-lg">
                Share a few details about your project. We typically respond within one
                business day with next steps, questions, or a call invite.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:adityadesk99@gmail.com"
                    className="text-navy hover:text-gold transition-colors"
                  >
                    adityadesk99@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+917050020659"
                    className="text-navy hover:text-gold transition-colors"
                  >
                    +91 70500 20659
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-gold transition-colors"
                  >
                    +91 94730 95293
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-1">
                    Registered Address
                  </p>
                  <p className="text-navy text-sm leading-relaxed">
                    RKS Building, Beur More, Anishabad,
                    <br />
                    Patna, Bihar - 800002
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-1">
                    Based in
                  </p>
                  <p className="text-navy">India · Remote-first partnerships worldwide</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-navy/5 rounded-lg p-6 sm:p-8 shadow-sm">
              <form
                action="mailto:adityadesk99@gmail.com"
                method="GET"
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="subject"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-md border border-navy/10 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-light focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-md border border-navy/10 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-light focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy mb-1.5"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="body"
                    required
                    rows={5}
                    placeholder="What are you building? Timeline and budget range help us respond faster."
                    className="w-full rounded-md border border-navy/10 bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-light focus:outline-none focus:border-gold resize-y"
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                  Send Message
                  <PlusIcon className="text-gold" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
