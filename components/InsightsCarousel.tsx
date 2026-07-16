"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";
import coverImage from "@/app/assets/Ranking-Real-Estate-Business-on-Google-Maps.webp";
import whatsappCover from "@/app/assets/whatsapp-blog.jpg";
import bhadohiCover from "@/app/assets/bhadohi-blog.webp";

type Article = {
  href: string | null;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: StaticImageData;
  gradient?: string;
};

const articles: Article[] = [
  {
    href: "/blog/whatsapp-property-sharing-doesnt-scale",
    category: "Growth",
    title: "The WhatsApp Trap: Why Sharing Properties One-by-One Doesn't Scale",
    excerpt:
      "Still sending property photos and PDFs on WhatsApp? Discover why it doesn't scale and how a real estate website helps manage inventory and generate more leads.",
    date: "Apr 28, 2024",
    readTime: "6 min read",
    image: whatsappCover,
  },
  {
    href: "/blog/etsy-amazon-bhadohi-artisans-margins",
    category: "E-Commerce",
    title:
      "Why Selling Only on Etsy & Amazon Is Costing Bhadohi Rug Artisans Their Margins",
    excerpt:
      "Marketplace fees, zero brand ownership, no customer data — and one policy violation away from losing your entire storefront overnight. Here's why Bhadohi rug sellers need their own website as a safety net.",
    date: "Jun 10, 2024",
    readTime: "10 min read",
    image: bhadohiCover,
  },
  {
    href: "/insights/from-google-maps-listing-to-digital-website",
    category: "Product",
    title: "From Google Maps Listing to Digital Website",
    excerpt:
      "Why a property dealer's Google Maps profile isn't enough anymore — and what to add to actually convert visitors.",
    date: "May 12, 2024",
    readTime: "8 min read",
    image: coverImage,
  },
  {
    href: null,
    category: "Design",
    title: "Sacred Geometry in Modern UI Design",
    excerpt:
      "Drawing inspiration from ancient patterns to create interfaces that feel timeless.",
    date: "Mar 30, 2024",
    readTime: "5 min read",
    gradient: "from-rose-100 to-pink-200",
  },
];

function ArticleCard({ article }: { article: Article }) {
  const inner = (
    <>
      {article.image ? (
        <div className="aspect-[16/10] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className={`aspect-[16/10] bg-gradient-to-br ${article.gradient}`} />
      )}
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
    </>
  );

  const className =
    "card-hover bg-white rounded-lg overflow-hidden shadow-sm border border-navy/5 block h-full";

  if (article.href) {
    return (
      <Link href={article.href} className={className}>
        {inner}
      </Link>
    );
  }

  return <article className={className}>{inner}</article>;
}

export default function InsightsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-card]");
    const step = card ? card.offsetWidth + 16 : track.clientWidth * 0.72;
    track.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Mobile / tablet carousel */}
      <div className="lg:hidden relative">
        <div
          ref={trackRef}
          className="insights-carousel flex gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-2 -mx-6 px-6"
        >
          {articles.map((article) => (
            <div
              key={article.title}
              data-carousel-card
              className="snap-start shrink-0 w-[calc((100%-1rem)/1.25)] sm:w-[calc((100%-1rem)/2.2)]"
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => scroll("prev")}
            aria-label="Previous article"
            className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-gold"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("next")}
            aria-label="Next article"
            className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-gold"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
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

      {/* Desktop grid */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </>
  );
}
