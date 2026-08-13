export const SITE_NAME = "Sannidhhi Chemical Industries";
export const SITE_TAGLINE =
  "Trusted Chemical Solutions for Industrial Excellence";

/** Founded per the corporate profile; drives the "years in trade" figures. */
export const ESTABLISHED_YEAR = 2007;

/** Whole years since founding, so the site never quotes a stale number. */
export function yearsInTrade(): number {
  return new Date().getFullYear() - ESTABLISHED_YEAR;
}

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
    "Plot No. 245/Part, SVCIE",
    "IDA Jeedimetla, Quthbullapur (M)",
    "Medchal Malkajgiri Dist.",
    "Hyderabad – 500055",
    "Telangana, India",
  ],
  phone: "+91 7981162470",
  phoneTel: "tel:+917981162470",
  phoneAlt: "+91 7794930749",
  phoneAltTel: "tel:+917794930749",
  email: "sannidhhi@gmail.com",
  emailAlt: "sannidhi7@gmail.com",
  whatsapp: "https://wa.me/917981162470",
  gstin: "36AAJHV6884J1Z8",
  stateCode: "Telangana (Code: 36)",
  mapsEmbed:
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sSannidhhi+Chemical+Industries,+Plot+No+245,+SVCIE,+IDA+Jeedimetla,+Hyderabad+500055!6i16",
  mapsLink: "https://maps.app.goo.gl/cwkufXN899xLddWt8",
} as const;

export function getSiteUrl(): string {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return "https://sannidhhi-chemical.com";
}
