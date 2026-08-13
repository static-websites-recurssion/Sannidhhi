import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingEnquiry } from "@/components/FloatingEnquiry";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT, OG_IMAGE, SITE_NAME, SITE_TAGLINE, getSiteUrl } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Sannidhhi Chemical Industries supplies commodity to specialty chemicals, solvents, polymers, and additives for pharma, coatings, plastics, and industrial manufacturing—with export-ready documentation.",
  keywords: [
    "chemical supplier India",
    "bulk chemicals Hyderabad",
    "industrial solvents",
    "PVC resin supplier",
    "chemical trading",
    "B2B chemicals",
    "Sannidhhi Chemical Industries",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Trusted chemical solutions for industrial excellence. Bulk supply, documented quality, export execution.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Industrial & commodity chemicals for manufacturers across India and export markets.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#1e0d10",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: siteUrl,
  logo: `${siteUrl}/assets/logo.png`,
  image: `${siteUrl}/assets/og-image.png`,
  description: SITE_TAGLINE,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${CONTACT.addressLines[0]}, ${CONTACT.addressLines[1]}`,
    addressLocality: "Hyderabad",
    postalCode: "500055",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      contactType: "sales",
      email: CONTACT.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Telugu"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen font-sans antialiased">
        <JsonLd data={orgJsonLd} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingEnquiry />
      </body>
    </html>
  );
}
