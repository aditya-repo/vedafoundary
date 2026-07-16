import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { PlusIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/components/WhatsAppFloat";
import coverImage from "@/app/assets/bhadohi-blog.webp";

export const metadata: Metadata = {
  title: "Why Selling Only on Etsy & Amazon Is Costing Bhadohi Rug Artisans Their Margins",
  description:
    "Marketplace fees, zero brand ownership, no customer data — and one policy violation away from losing your entire storefront overnight. Here's why Bhadohi rug sellers need their own website as a safety net.",
};

const faqs = [
  {
    question: "Should rug sellers stop selling on Etsy or Amazon?",
    answer:
      "No. These marketplaces remain valuable for reaching international buyers. The goal is to reduce dependency by also building your own website and customer base.",
  },
  {
    question: "Why is owning a website important for artisans?",
    answer:
      "A website gives artisans complete control over their brand, product presentation, customer relationships, and long-term marketing strategy.",
  },
  {
    question: "Can a website help increase profit margins?",
    answer:
      "Yes. While operating a website has its own costs, it can reduce reliance on marketplace commissions and create opportunities for repeat customers, direct inquiries, and wholesale partnerships.",
  },
  {
    question: "Which rug businesses benefit most from having their own website?",
    answer:
      "Handmade rug manufacturers, exporters, wholesalers, custom rug makers, luxury carpet brands, home décor businesses, and artisan collectives can all benefit from establishing an independent online presence.",
  },
];

export default function BhadohiMarketplaceBlogPage() {
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

          <p className="section-label mb-3">E-Commerce</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-navy leading-tight mb-4">
            Why Selling Only on Etsy &amp; Amazon Is Costing Bhadohi Rug Artisans Their
            Margins
          </h1>
          <p className="text-light text-sm mb-8">Jun 10, 2024 &bull; 10 min read</p>

          <div className="overflow-hidden rounded-lg mb-10 border border-navy/5">
            <Image
              src={coverImage}
              alt="Bhadohi rug artisan weaving — marketplace fees vs owning your own e-commerce website"
              width={1200}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="space-y-6 text-muted text-base leading-relaxed">
            <p>
              For generations, the artisans of Bhadohi, Jaipur, Mirzapur, Panipat, Kashmir,
              and other renowned weaving regions of India have created handcrafted rugs admired
              across the world. Their craftsmanship has found customers in the United States,
              Europe, Australia, and the Middle East through global marketplaces such as Etsy,
              Amazon, Wayfair, and other B2B and B2C platforms.
            </p>
            <p>
              These marketplaces have undoubtedly opened doors that were once difficult to
              access. They provide instant visibility, built-in traffic, payment processing,
              and access to international buyers.
            </p>
            <p>However, many artisans and exporters eventually discover a difficult reality:</p>
            <p className="font-medium text-navy">
              Building your entire business on someone else&apos;s marketplace also means
              building your future on someone else&apos;s rules.
            </p>
            <p>
              As businesses grow, the limitations become more apparent. Profit margins shrink,
              customer relationships disappear after each sale, competition intensifies, and one
              unexpected policy issue can temporarily—or sometimes permanently—interrupt years of
              hard work.
            </p>
            <p>
              This article explores why relying exclusively on marketplaces can hold back
              long-term growth and how having your own website creates a stronger, more
              sustainable business.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              Marketplaces Are Excellent for Starting—But Risky for Depending On
            </h2>
            <p>
              Selling on Etsy or Amazon is similar to opening a small shop inside a large
              shopping mall.
            </p>
            <p>
              Thousands of visitors walk past your store every day. You don&apos;t need to build
              the mall, maintain its security, or attract visitors yourself.
            </p>
            <p>
              That convenience has enormous value, especially for businesses entering online
              commerce for the first time.
            </p>
            <p>The challenge begins when all of your sales come from that single mall.</p>
            <p>
              If the mall changes its policies, increases rent, closes your shop, or simply
              moves another seller ahead of you, your business immediately feels the impact.
            </p>
            <p>This is exactly how marketplace dependency works.</p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              The Hidden Cost of Marketplace Fees
            </h2>
            <p>
              Every sale on a marketplace comes with costs that aren&apos;t always obvious at
              first.
            </p>
            <p>Besides the listed commission, sellers often pay for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Marketplace selling fees</li>
              <li>Payment processing charges</li>
              <li>Advertising costs</li>
              <li>Currency conversion fees</li>
              <li>International transaction charges</li>
              <li>Shipping-related deductions</li>
              <li>Promotional discounts</li>
            </ul>
            <p>Individually, these costs seem manageable.</p>
            <p>
              Combined, they can significantly reduce the profit earned on every handmade rug.
            </p>
            <p>
              Imagine spending weeks weaving a premium handcrafted carpet, only to see a
              substantial portion of the final sale value deducted before the payment reaches
              your account.
            </p>
            <p>
              For businesses operating with handcrafted products, where labour, wool quality,
              natural dyes, and finishing already require significant investment, protecting
              margins becomes increasingly important.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              You&apos;re Building Their Brand—Not Yours
            </h2>
            <p>Consider this question.</p>
            <p>When a customer buys a rug from Amazon, what do they usually remember?</p>
            <p>Most buyers remember buying from Amazon.</p>
            <p>When someone purchases through Etsy, they often remember buying from Etsy.</p>
            <p>
              Very few customers remember the individual artisan behind the product unless
              they&apos;ve already developed a relationship with that brand.
            </p>
            <p>This creates a long-term challenge.</p>
            <p>
              You may create exceptional products, receive excellent reviews, and consistently
              deliver quality—but much of the trust remains attached to the marketplace rather
              than your own business.
            </p>
            <p>
              As a result, every future customer often has to discover you all over again.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              Your Customers Don&apos;t Really Become Your Customers
            </h2>
            <p>One of the biggest limitations of marketplaces is customer ownership.</p>
            <p>
              When someone purchases directly from your own website, you can gradually build a
              lasting relationship through newsletters, product launches, care guides, loyalty
              programs, and personalized recommendations.
            </p>
            <p>
              On many marketplaces, however, access to customer information is intentionally
              limited.
            </p>
            <p>
              You complete the sale, ship the order, and the relationship largely ends there.
            </p>
            <p>
              The next time that buyer wants another rug, there&apos;s no guarantee they&apos;ll
              return to your store. Instead, they may purchase from whichever seller appears
              first in the search results.
            </p>
            <p>
              Over time, this makes customer acquisition significantly more expensive because
              every sale often requires finding a completely new buyer.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              One Policy Issue Can Interrupt Your Entire Business
            </h2>
            <p>
              Marketplace policies exist for good reasons. They help maintain quality, prevent
              fraud, and protect buyers.
            </p>
            <p>
              However, even experienced sellers occasionally face situations where listings are
              removed, products are temporarily hidden, or accounts are suspended while reviews
              take place.
            </p>
            <p>Sometimes these actions result from genuine mistakes.</p>
            <p>
              Sometimes they happen because automated systems detect unusual activity that later
              proves to be harmless.
            </p>
            <p>Regardless of the reason, the impact can be significant.</p>
            <p>
              If nearly all of your business depends on one marketplace account, even a
              temporary suspension can interrupt orders, reduce cash flow, and delay customer
              communication.
            </p>
            <p>This doesn&apos;t mean marketplaces are unreliable.</p>
            <p>
              It simply highlights the importance of not relying on a single platform for your
              entire business.
            </p>
            <p>Diversifying your online presence helps reduce that risk.</p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              Standing Out Is Becoming More Difficult Every Year
            </h2>
            <p>The global handmade rug market has become increasingly competitive.</p>
            <p>Every year, thousands of new sellers join online marketplaces.</p>
            <p>Many offer similar designs, similar pricing, and similar photography.</p>
            <p>
              When buyers search for &ldquo;handmade wool rug,&rdquo; they may see hundreds—or
              even thousands—of competing listings.
            </p>
            <p>
              Your handcrafted masterpiece appears beside factory-made alternatives, imported
              products, machine-made rugs, and aggressive discount offers.
            </p>
            <p>
              Instead of competing on craftsmanship alone, sellers often find themselves
              competing on price.
            </p>
            <p>That race rarely benefits artisans.</p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              Price Shouldn&apos;t Be Your Only Competitive Advantage
            </h2>
            <p>Handmade rugs are not ordinary products.</p>
            <p>Every knot represents hours of skilled craftsmanship.</p>
            <p>Each design carries cultural heritage passed down through generations.</p>
            <p>
              Natural materials, traditional weaving techniques, and artisan expertise create
              value that cannot be measured by price alone.
            </p>
            <p>
              Yet marketplaces often encourage buyers to compare products primarily through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lowest price</li>
              <li>Highest ratings</li>
              <li>Fastest delivery</li>
              <li>Sponsored placement</li>
            </ul>
            <p>Very little space exists to tell your story.</p>
            <p>
              Without that story, buyers may struggle to understand why one handcrafted rug
              deserves a premium over another.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              Your Website Gives Your Craftsmanship a Home
            </h2>
            <p>A dedicated website changes the conversation.</p>
            <p>
              Instead of competing inside a crowded marketplace, you create your own digital
              showroom.
            </p>
            <p>Visitors don&apos;t just see products.</p>
            <p>They discover your journey.</p>
            <p>They learn about your weaving process.</p>
            <p>They understand your materials.</p>
            <p>They meet the artisans behind the craftsmanship.</p>
            <p>
              They explore collections that reflect your design philosophy rather than
              marketplace categories.
            </p>
            <p>This transforms a transaction into a brand experience.</p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              Tell the Story Behind Every Rug
            </h2>
            <p>
              Modern customers, especially international buyers, increasingly value authenticity.
            </p>
            <p>Many want to know:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where was this rug woven?</li>
              <li>Who made it?</li>
              <li>What materials were used?</li>
              <li>Is it hand-knotted or hand-tufted?</li>
              <li>How long did it take to create?</li>
              <li>What makes this design unique?</li>
            </ul>
            <p>A marketplace listing provides only limited room for storytelling.</p>
            <p>
              Your own website gives you unlimited space to explain the heritage, craftsmanship,
              and traditions behind every collection.
            </p>
            <p>Stories create emotional connections.</p>
            <p>Emotional connections create loyal customers.</p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              Own Your Brand Instead of Renting Visibility
            </h2>
            <p>
              Every improvement you make to your own website benefits your business directly.
            </p>
            <p>
              When someone searches Google for your company name, they discover your brand—not
              another marketplace.
            </p>
            <p>When a customer bookmarks your website, they return to your catalog.</p>
            <p>
              When journalists, designers, architects, or interior decorators recommend your
              products, they can link directly to your business instead of a third-party
              marketplace listing.
            </p>
            <p>
              Over time, your website becomes a long-term business asset that continues growing
              alongside your reputation.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              Better Margins Mean Greater Business Stability
            </h2>
            <p>
              Selling through your own website doesn&apos;t automatically eliminate every cost.
            </p>
            <p>
              You&apos;ll still invest in marketing, payment processing, logistics, photography,
              and customer support.
            </p>
            <p>
              However, many of those investments strengthen your own business rather than
              someone else&apos;s platform.
            </p>
            <p>
              Instead of continuously paying for visibility inside a marketplace, you&apos;re
              building an online presence that belongs entirely to you.
            </p>
            <p>Over time, stronger margins provide more flexibility to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Invest in better materials</li>
              <li>Hire additional artisans</li>
              <li>Expand internationally</li>
              <li>Improve packaging</li>
              <li>Launch new collections</li>
              <li>Strengthen customer support</li>
            </ul>
            <p>
              Healthy businesses are built on sustainable margins—not just higher sales volume.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              A Website Opens New Opportunities Beyond Direct Sales
            </h2>
            <p>A professional website serves many purposes beyond e-commerce.</p>
            <p>It becomes a platform for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Interior designers looking for custom projects.</li>
              <li>Hospitality businesses sourcing rugs for hotels and resorts.</li>
              <li>Architects searching for bespoke collections.</li>
              <li>International wholesalers seeking manufacturing partners.</li>
              <li>Export buyers looking for long-term suppliers.</li>
              <li>Retail stores interested in private-label production.</li>
            </ul>
            <p>
              Many of these buyers prefer working directly with manufacturers rather than
              discovering them through crowded marketplaces.
            </p>
            <p>Your website helps establish that credibility.</p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              The Strongest Businesses Combine Both Strategies
            </h2>
            <p>The question isn&apos;t whether you should leave Etsy or Amazon.</p>
            <p>For most artisans, the answer is no.</p>
            <p>
              Marketplaces remain valuable channels for reaching new customers and expanding
              internationally.
            </p>
            <p>The smarter approach is to avoid making them your only channel.</p>
            <p>
              Successful brands often use marketplaces to generate initial exposure while
              simultaneously investing in their own digital presence.
            </p>
            <p>
              Their website becomes the foundation of the business, while marketplaces serve as
              additional sales channels rather than the entire business itself.
            </p>
            <p>
              This balanced approach reduces risk, strengthens branding, and creates greater
              control over future growth.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-4">
              Final Thoughts
            </h2>
            <p>
              The artisans of Bhadohi, Jaipur, Mirzapur, Panipat, Kashmir, and other weaving
              regions have built a global reputation through generations of remarkable
              craftsmanship.
            </p>
            <p>
              That craftsmanship deserves more than competing solely inside crowded marketplaces.
            </p>
            <p>
              Platforms like Etsy and Amazon can introduce your products to the world, but they
              cannot fully represent your story, your heritage, or your brand.
            </p>
            <p>
              Your own website allows you to build direct customer relationships, strengthen brand
              recognition, improve long-term profitability, and create a business that isn&apos;t
              entirely dependent on the policies or algorithms of any single marketplace.
            </p>
            <p>
              The future of handmade rug businesses isn&apos;t about choosing between
              marketplaces and a website.
            </p>
            <p>
              It&apos;s about using marketplaces as one sales channel while building a brand that
              customers can recognize, trust, and return to for years to come.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy pt-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 pt-2">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 bg-navy rounded-lg text-center">
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Selling Bhadohi rugs on marketplaces but ready to own your brand and margins?
              Veda Foundry builds e-commerce sites with catalog management, direct checkout,
              and WhatsApp integration — so you&apos;re never one policy change away from
              losing your business.
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
