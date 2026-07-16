import type { StaticImageData } from "next/image";

export const SITE_NAME = "Veda Foundry";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  process.env.SITE_URL?.replace(/\/$/, "") ??
  "https://vedafoundry.com";

export const SITE_TAGLINE = "Ancient values. Modern execution.";

export const SITE_DESCRIPTION =
  "We build product-grade web platforms for modern businesses. Ancient values. Modern execution.";

export const SITE_LONG_DESCRIPTION =
  "Veda Foundry is a product-grade web development studio building e-commerce platforms, real estate websites, marketplaces, and custom web applications with Next.js. Based in India, serving businesses worldwide.";

export const SITE_KEYWORDS = [
  "Veda Foundry",
  "web development India",
  "Next.js development",
  "product-grade web platforms",
  "e-commerce website development",
  "real estate website development",
  "marketplace development",
  "custom web application",
  "digital product studio",
  "Patna web development",
];

export const SITE_EMAIL = "adityadesk99@gmail.com";
export const SITE_PHONE = "+917050020659";
export const SITE_PHONE_DISPLAY = "+91 70500 20659";
export const SITE_PHONE_URL = `tel:${SITE_PHONE}`;

export const SITE_ADDRESS = {
  streetAddress: "RKS Building, Beur More, Anishabad",
  addressLocality: "Patna",
  addressRegion: "Bihar",
  postalCode: "800002",
  addressCountry: "IN",
} as const;

export function absoluteImageUrl(image: StaticImageData) {
  return new URL(image.src, SITE_URL).toString();
}
