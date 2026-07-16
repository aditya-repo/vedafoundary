import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import { SITE_NAME, SITE_URL } from "./site";

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type ArticleSeoInput = {
  path: string;
  title: string;
  description: string;
  headline: string;
  publishedAt: string;
  modifiedAt?: string;
  category: string;
  image: StaticImageData;
  imageAlt: string;
  faqs?: ArticleFaq[];
};

function absoluteImageUrl(image: StaticImageData) {
  return new URL(image.src, SITE_URL).toString();
}

export function buildArticleMetadata(article: ArticleSeoInput): Metadata {
  const imageUrl = absoluteImageUrl(article.image);

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: article.path,
    },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url: article.path,
      siteName: SITE_NAME,
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt ?? article.publishedAt,
      section: article.category,
      authors: [SITE_NAME],
      images: [
        {
          url: imageUrl,
          width: article.image.width,
          height: article.image.height,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [imageUrl],
    },
  };
}

export function buildArticleJsonLd(article: ArticleSeoInput) {
  const pageUrl = `${SITE_URL}${article.path}`;
  const imageUrl = absoluteImageUrl(article.image);

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.headline,
      description: article.description,
      image: [imageUrl],
      datePublished: article.publishedAt,
      dateModified: article.modifiedAt ?? article.publishedAt,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/apple-touch-icon.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      articleSection: article.category,
      url: pageUrl,
    },
  ];

  if (article.faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return schemas;
}
