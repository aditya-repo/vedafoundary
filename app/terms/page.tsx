import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms & Conditions — Veda Foundry",
  description:
    "Terms and conditions for using Veda Foundry services, website, and digital product engagements.",
};

const sections = [
  {
    title: "1. Agreement",
    body: `By accessing vedafoundry.com or engaging Veda Foundry for digital product services, you agree to these Terms & Conditions. If you do not agree, please do not use our website or services.`,
  },
  {
    title: "2. Services",
    body: `Veda Foundry provides web platform design, product engineering, marketplace development, and related digital services. Scope, timeline, fees, and deliverables for each engagement are defined in a written proposal or statement of work agreed by both parties.`,
  },
  {
    title: "3. Client responsibilities",
    body: `You agree to provide timely feedback, accurate project information, and access to accounts or assets required for delivery. Delays in client input may extend timelines without liability on our part.`,
  },
  {
    title: "4. Intellectual property",
    body: `Unless otherwise agreed in writing, final deliverables paid for in full are licensed or assigned to the client as specified in the project agreement. Pre-existing tools, frameworks, libraries, and our internal methods remain the property of Veda Foundry or their respective owners.`,
  },
  {
    title: "5. Payment",
    body: `Fees, payment schedules, and late-payment terms are outlined in each proposal. Work may be paused if invoices remain unpaid beyond the agreed terms.`,
  },
  {
    title: "6. Confidentiality",
    body: `Both parties agree to keep confidential business information shared during the engagement private, except where disclosure is required by law or already public through no fault of the receiving party.`,
  },
  {
    title: "7. Warranties & limitation of liability",
    body: `We deliver services with professional care. Except as required by law, Veda Foundry is not liable for indirect, incidental, or consequential damages arising from use of our website or services. Our total liability for any engagement is limited to fees paid for that engagement.`,
  },
  {
    title: "8. Website use",
    body: `Content on this website is for general information. You may not scrape, copy, or misuse site materials for commercial purposes without written permission. We may update or remove content at any time.`,
  },
  {
    title: "9. Third-party services",
    body: `Projects may integrate third-party tools (hosting, analytics, payments, APIs). Those services are governed by their own terms. We are not responsible for outages or policy changes by third parties.`,
  },
  {
    title: "10. Termination",
    body: `Either party may terminate an engagement as described in the project agreement. Fees for work completed up to termination remain due.`,
  },
  {
    title: "11. Governing law",
    body: `These terms are governed by the laws of India. Disputes will first be addressed in good faith negotiation before any formal proceedings.`,
  },
  {
    title: "12. Changes",
    body: `We may update these Terms & Conditions periodically. Continued use of the website or services after changes constitutes acceptance of the revised terms.`,
  },
  {
    title: "13. Contact",
    body: `Questions about these terms: adityadesk99@gmail.com`,
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-3">Legal</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-navy mb-4">
            Terms & Conditions
          </h1>
          <p className="text-muted text-sm mb-10">
            Last updated: July 11, 2026
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-xl font-semibold text-navy mb-2">
                  {section.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-navy/10">
            <p className="text-muted text-sm">
              Need clarification?{" "}
              <Link href="/contact" className="text-gold hover:underline">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
