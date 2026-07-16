import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { PlusIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/components/WhatsAppFloat";
import coverImage from "@/app/assets/Ranking-Real-Estate-Business-on-Google-Maps.webp";

export const metadata: Metadata = {
  title: "From Google Maps Listing to Digital Website — Veda Foundry",
  description:
    "Your Google Maps listing gets you found — but not chosen. Here's what real estate dealers need to add to actually convert visitors into buyers.",
};

const checklist = [
  "A live, browsable property catalog — searchable by budget, locality, and type, not a static PDF you email on request",
  "RERA verification displayed clearly on every listing, building buyer confidence upfront",
  "WhatsApp and call-to-action buttons on every property page, not just your homepage",
  "Locality pages with pricing trends and nearby infrastructure — this is also what ranks well in search",
  "Client testimonials with real context — not just star ratings, but a sentence on what the experience was actually like",
  "A mobile-first design — most property searches in India start on a phone, often triggered by exactly the Maps listing that brought them there",
  "Fast page load and clean navigation — buyers browsing 10+ properties in one session will drop off fast on a slow, cluttered site",
];

export default function GoogleMapsBlogPage() {
  return (
    <PageShell>
      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/#insights"
            className="text-sm text-muted hover:text-gold transition-colors mb-8 inline-block"
          >
            ← Back to Insights
          </Link>

          <p className="section-label mb-3">Product</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-navy leading-tight mb-4">
            From Google Maps Listing to Digital Website: What Property Dealers Are Missing
          </h1>
          <p className="text-light text-sm mb-8">
            May 12, 2024 &bull; 8 min read
          </p>

          <div className="overflow-hidden rounded-lg mb-10 border border-navy/5">
            <Image
              src={coverImage}
              alt="Ranking a real estate business on Google Maps"
              width={1200}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="prose-custom space-y-6 text-muted text-base leading-relaxed">
            <p>
              If someone searches &ldquo;real estate agent near me&rdquo; or &ldquo;flats for sale
              in Patna,&rdquo; your Google Maps listing is probably how they find you. It&apos;s
              free, it&apos;s fast to set up, and for local discovery, nothing beats it.
            </p>
            <p>
              But here&apos;s the problem: getting found isn&apos;t the same as getting chosen.
            </p>
            <p>
              A Google Maps pin can show your name, a star rating, and a phone number. It
              can&apos;t show a buyer what your current listings look like, what your process
              feels like, or why they should trust you over the five other pins sitting right
              next to yours on the same map. That&apos;s where most real estate businesses lose
              the deal — not before the search, but right after it.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              Why a Maps Listing Alone Isn&apos;t Enough Anymore
            </h2>

            <h3 className="font-serif text-lg font-semibold text-navy">
              1. You look identical to every competitor next to you
            </h3>
            <p>
              Open Google Maps and search for property dealers in any city. You&apos;ll see a
              cluster of pins — same star ratings, same generic categories, same &ldquo;Call
              Now&rdquo; button. There&apos;s nothing in that listing that tells a buyer what
              makes you different. A dedicated website is the only place you actually get to make
              a first impression on your own terms.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy">
              2. There&apos;s no way to actually browse your inventory
            </h3>
            <p>
              A Maps listing can link to a website, but if that link goes nowhere (or nowhere
              useful), you&apos;ve sent a warm lead into a dead end. Serious buyers want to
              scroll through active listings, filter by budget, locality, and property type, and
              see photos — before they ever pick up the phone. Without that, you&apos;re relying
              entirely on people calling a stranger cold, which most buyers today are reluctant
              to do.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy">
              3. You have zero trust signals beyond a star rating
            </h3>
            <p>
              Reviews on Maps help, but they&apos;re thin — a line or two, easy to fake, and
              impossible to expand on. A website lets you show RERA registration details, past
              project deliveries, client testimonials with context, and your actual track record.
              In real estate, where a single transaction can be someone&apos;s life savings, trust
              signals aren&apos;t optional — they&apos;re the deciding factor.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy">
              4. You&apos;re invisible to organic search traffic
            </h3>
            <p>
              A Maps listing only shows up in local map-pack results and only when someone is
              already searching nearby. It does nothing for buyers searching things like
              &ldquo;3 BHK flats under 80 lakh in Kankarbagh&rdquo; or &ldquo;best localities to
              invest in Patna real estate.&rdquo; A proper website with SEO-optimized property
              pages can rank for exactly these searches — pulling in buyers who don&apos;t even
              know your business name yet.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy">
              5. There&apos;s no way to capture a lead who isn&apos;t ready to call
            </h3>
            <p>
              Not every visitor wants to talk to you immediately — some just want to browse
              first. Without a website, your only conversion point is a phone call, which is a
              high-commitment first step for a stranger. A website lets you capture interest
              earlier through inquiry forms, WhatsApp chat buttons, and property-specific
              &ldquo;Contact for details&rdquo; actions — meeting the buyer at whatever stage
              they&apos;re actually at.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy">
              6. You can&apos;t showcase locality or pricing insight
            </h3>
            <p>
              Buyers researching real estate almost always compare localities before they compare
              properties. A website can show price trends by area, nearby developments, and
              locality guides — positioning you as the local expert, not just another listing
              agent. That kind of content is impossible to convey through a Maps profile.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              What to Add: A Simple Checklist
            </h2>
            <p>
              If you&apos;re a property dealer relying mainly on your Google Maps listing right
              now, here&apos;s what actually moves the needle:
            </p>
            <ul className="space-y-3 pl-0 list-none">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <span className="text-gold shrink-0 mt-0.5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              Google Maps and a Website Aren&apos;t Competing — They Work Together
            </h2>
            <p>
              The goal isn&apos;t to abandon your Maps presence — it&apos;s to stop treating it
              as your entire digital footprint. Maps gets you discovered locally. A proper
              website is what turns that discovery into an actual inquiry, and that inquiry into
              a closed deal.
            </p>
            <p>
              Property dealers who pair a strong Maps profile with a real, searchable website
              consistently see more qualified leads — because by the time a buyer calls,
              they&apos;ve already browsed your listings, seen your credentials, and decided
              you&apos;re worth talking to. That&apos;s a very different conversation than a cold
              call off a Maps pin.
            </p>
          </div>

          <div className="mt-12 p-8 bg-navy rounded-lg text-center">
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Looking to turn your real estate business&apos;s Google Maps traffic into an actual
              website that converts? Veda Foundry builds property platforms with live listings,
              RERA verification, and lead capture built in from day one.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Start a conversation on WhatsApp
              <PlusIcon />
            </a>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
