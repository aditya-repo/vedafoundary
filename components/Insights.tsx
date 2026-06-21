import { ArrowRight } from "./icons";

const articles = [
  {
    category: "Product",
    title: "Building MVPs That Actually Validate Ideas",
    excerpt:
      "Why speed without strategy leads nowhere — and how to ship the right thing first.",
    date: "May 12, 2024",
    readTime: "8 min read",
    gradient: "from-amber-100 to-orange-200",
  },
  {
    category: "Technology",
    title: "The Case for Server Components in 2024",
    excerpt:
      "How React Server Components are changing the way we think about web architecture.",
    date: "Apr 28, 2024",
    readTime: "6 min read",
    gradient: "from-blue-100 to-indigo-200",
  },
  {
    category: "Growth",
    title: "Conversion Optimization Beyond A/B Testing",
    excerpt:
      "A holistic framework for improving conversion rates across the entire funnel.",
    date: "Apr 15, 2024",
    readTime: "10 min read",
    gradient: "from-emerald-100 to-teal-200",
  },
  {
    category: "Design",
    title: "Sacred Geometry in Modern UI Design",
    excerpt:
      "Drawing inspiration from ancient patterns to create interfaces that feel timeless.",
    date: "Mar 30, 2024",
    readTime: "5 min read",
    gradient: "from-rose-100 to-pink-200",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-label mb-3">Insights</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy">
              Thoughts on product, technology, and growth
            </h2>
          </div>
          <a href="#" className="hidden md:inline link-arrow">
            View All Articles
            <ArrowRight />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className="card-hover bg-white rounded-lg overflow-hidden shadow-sm border border-navy/5"
            >
              <div className={`aspect-[16/10] bg-gradient-to-br ${article.gradient}`} />
              <div className="p-6">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
                  {article.category}
                </p>
                <h3 className="font-serif text-base font-semibold text-navy mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <p className="text-light text-xs">
                  {article.date} &bull; {article.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
