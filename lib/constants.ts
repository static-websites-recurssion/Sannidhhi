export const SITE_NAME = "Sannidhhi Chemical Industries";
export const SITE_TAGLINE =
  "Trusted Chemical Solutions for Industrial Excellence";

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
