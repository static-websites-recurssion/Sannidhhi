import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_TAGLINE, getSiteUrl } from "@/lib/constants";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSummarySection } from "@/sections/AboutSummarySection";
import { ProductCategoriesGrid } from "@/sections/ProductCategoriesGrid";
import { StatsBandSection } from "@/sections/StatsBandSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { IndustriesServedSection } from "@/sections/IndustriesServedSection";
import { FeaturedChemicalsSection } from "@/sections/FeaturedChemicalsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { CtaSection } from "@/sections/CtaSection";
import { ContactPreviewSection } from "@/sections/ContactPreviewSection";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Home",
  description: `${SITE_TAGLINE} — ${SITE_NAME} supplies bulk industrial chemicals, solvents, polymers, and additives with documented quality and export-ready logistics.`,
  openGraph: {
    images: [OG_IMAGE],
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: `${SITE_TAGLINE} — bulk chemical supply for manufacturers across India and export markets.`,
    url: getSiteUrl(),
  },
};

const webPageJson = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${SITE_NAME} — Home`,
  description: SITE_TAGLINE,
  url: getSiteUrl(),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageJson} />
      <HeroSection />
      <AboutSummarySection />
      <ProductCategoriesGrid />
      <StatsBandSection />
      <WhyChooseSection />
      <IndustriesServedSection />
      <FeaturedChemicalsSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactPreviewSection />
    </>
  );
}
