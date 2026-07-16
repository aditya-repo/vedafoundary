import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import {
  SITE_ADDRESS,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_KEYWORDS,
  SITE_LONG_DESCRIPTION,
  SITE_NAME,
  SITE_PHONE,
  SITE_TAGLINE,
  SITE_URL,
  absoluteImageUrl,
} from "./site";

const HOME_TITLE = "Product-Grade Web Platforms for Modern Businesses";

const HOME_SERVICES = [
  {
    name: "Web Platforms",
    description:
      "Scalable, performant web applications built with modern frameworks and best practices.",
  },
  {
    name: "E-Commerce Solutions",
    description:
      "End-to-end online stores with seamless checkout, inventory, and analytics integration.",
  },
  {
    name: "Product Engineering",
    description:
      "From MVP to enterprise — we architect and ship products that users love.",
  },
  {
    name: "Mobile Apps",
    description:
      "Native and cross-platform mobile experiences designed for engagement and retention.",
  },
] as const;

const HOME_FAQS = [
  {
    question: "What does Veda Foundry build?",
    answer:
      "Veda Foundry builds product-grade web platforms including e-commerce stores, real estate websites, vendor marketplaces, fintech portals, and custom web applications using Next.js, MongoDB, and modern cloud infrastructure.",
  },
  {
    question: "Where is Veda Foundry based?",
    answer:
      "Veda Foundry is based in Patna, Bihar, India and works with clients across India and internationally through remote-first partnerships.",
  },
  {
    question: "What industries does Veda Foundry serve?",
    answer:
      "We work with real estate businesses, e-commerce and handicraft brands, career and education platforms, fintech startups, wedding marketplaces, and other growth-focused businesses that need reliable digital products.",
  },
  {
    question: "How can I start a project with Veda Foundry?",
    answer:
      "You can request a free demo, call us at +91 70500 20659, email adityadesk99@gmail.com, or message us on WhatsApp. We typically respond within one business day.",
  },
] as const;

export function buildHomeMetadata(heroImage: StaticImageData): Metadata {
  const imageUrl = absoluteImageUrl(heroImage);
  const title = `${SITE_NAME} — ${HOME_TITLE}`;

  return {
    title: {
      absolute: title,
    },
    description: SITE_LONG_DESCRIPTION,
    keywords: [...SITE_KEYWORDS],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "/",
      siteName: SITE_NAME,
      title,
      description: SITE_LONG_DESCRIPTION,
      images: [
        {
          url: imageUrl,
          width: heroImage.width,
          height: heroImage.height,
          alt: "Veda Foundry — product-grade web platforms for modern businesses",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: SITE_LONG_DESCRIPTION,
      images: [imageUrl],
    },
    other: {
      "application-name": SITE_NAME,
      "apple-mobile-web-app-title": SITE_NAME,
    },
  };
}

export function buildHomeJsonLd(heroImage: StaticImageData) {
  const imageUrl = absoluteImageUrl(heroImage);
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const serviceId = `${SITE_URL}/#professional-service`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/apple-touch-icon.png`,
      },
      image: imageUrl,
      description: SITE_LONG_DESCRIPTION,
      email: SITE_EMAIL,
      telephone: SITE_PHONE,
      slogan: SITE_TAGLINE,
      address: {
        "@type": "PostalAddress",
        ...SITE_ADDRESS,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: SITE_PHONE,
          contactType: "customer service",
          email: SITE_EMAIL,
          areaServed: ["IN", "Worldwide"],
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      publisher: {
        "@id": organizationId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": webpageId,
      url: SITE_URL,
      name: `${SITE_NAME} — ${HOME_TITLE}`,
      description: SITE_LONG_DESCRIPTION,
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": organizationId,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
      inLanguage: "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": serviceId,
      name: SITE_NAME,
      url: SITE_URL,
      image: imageUrl,
      description: SITE_LONG_DESCRIPTION,
      email: SITE_EMAIL,
      telephone: SITE_PHONE,
      priceRange: "$$",
      areaServed: "Worldwide",
      address: {
        "@type": "PostalAddress",
        ...SITE_ADDRESS,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Product Services",
        itemListElement: HOME_SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: {
              "@id": organizationId,
            },
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: HOME_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
