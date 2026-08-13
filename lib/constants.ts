export const SITE_NAME = "Sannidhhi Chemical Industries";
export const SITE_TAGLINE =
  "Trusted Chemical Solutions for Industrial Excellence";

/**
 * Shared social preview image. Next.js replaces (rather than merges) a parent's
 * `openGraph` block when a route defines its own, so every page metadata object
 * spreads this in explicitly.
 */
export const OG_IMAGE = {
  url: "/assets/og-image.png",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
} as const;

export const CONTACT = {
  addressLines: [
    "Plot No 245 Part",
    "S.V. Co-op Industrial Estate",
    "IDA Jeedimetla",
    "Hyderabad – 500055",
    "Telangana, India",
  ],
  phone: "+91 7981162470",
  phoneTel: "tel:+917981162470",
  email: "sannidhhi@gmail.com",
  whatsapp: "https://wa.me/917981162470",
  mapsEmbed:
    "https://maps.google.com/maps?q=IDA+Jeedimetla+Hyderabad+500055+India&z=14&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=IDA+Jeedimetla+Hyderabad+500055",
} as const;

export function getSiteUrl(): string {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return "https://sannidhhi-chemical.com";
}
