export type Category = {
  slug: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
};

/**
 * Sections mirror the five parts of the Sannidhhi Chemical Industries
 * Corporate Profile & Catalogue, so a visitor browsing the site sees the same
 * groupings as the PDF they can download.
 */
export const CATEGORIES: Category[] = [
  {
    slug: "solvents",
    title: "Solvents, Alcohols & Organic Intermediates",
    short: "Process solvents & alcohols",
    description:
      "The core solvent portfolio—ketones, ethers, alcohols, and aromatics supplied from litre packs through to road tankers for pharma, coatings, and extraction duties.",
    highlights: ["Drums to tankers", "Commercial grade", "Fast dispatch"],
  },
  {
    slug: "acids",
    title: "Acids & Inorganic Corrosives",
    short: "Mineral & organic acids",
    description:
      "Mineral and organic acids in commercial and CP grades, packed in carboys, drums, and tankers with handling guidance for corrosive consignments.",
    highlights: ["Carboys & tankers", "CP grades", "Safe handling"],
  },
  {
    slug: "alkalis-salts",
    title: "Alkalis, Inorganic Salts & Industrial Chemicals",
    short: "Caustics, salts & powders",
    description:
      "Caustics, carbonates, sulphates, and inorganic salts in bags, drums, and bulk—staples for water treatment, textile processing, and general manufacturing.",
    highlights: ["Bagged 25/50 kg", "Bulk lots", "Consistent specs"],
  },
  {
    slug: "specialty-chemicals",
    title: "Specialty Chemicals, Surfactants & Process Aids",
    short: "Surfactants & process aids",
    description:
      "Surfactants, dispersants, defoamers, catalysts, and filter aids—including branded process aids stocked for textile, agro, and bulk drug operations.",
    highlights: ["Branded lines", "Technical support", "Specialty grades"],
  },
  {
    slug: "packaging-supplies",
    title: "Packaging Containers & Industrial Supplies",
    short: "Drums & industrial packing",
    description:
      "HDPE and mild steel drums supplied as bulk units for decanting, storage, and onward despatch of solvents and chemicals.",
    highlights: ["HDPE & M.S.", "Bulk units", "Ready stock"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
