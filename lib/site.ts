export const SITE_NAME = "Veda Foundry";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  process.env.SITE_URL?.replace(/\/$/, "") ??
  "https://vedafoundry.com";

export const SITE_DESCRIPTION =
  "We build product-grade web platforms for modern businesses. Ancient values. Modern execution.";
