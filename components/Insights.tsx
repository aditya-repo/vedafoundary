import InsightsCarousel from "./InsightsCarousel";

export default function Insights() {
  return (
    <section id="insights" className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="section-label mb-3">Insights</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy">
            Thoughts on product, technology, and growth
          </h2>
        </div>

        <InsightsCarousel />
      </div>
    </section>
  );
}
