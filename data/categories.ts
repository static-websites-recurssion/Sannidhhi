export type Category = {
  slug: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "commodity-chemicals",
    title: "Commodity Chemicals",
    short: "High-volume industrial staples",
    description:
      "Reliable supply of foundational chemicals for continuous manufacturing, formulation, and toll processing at competitive scale.",
    highlights: ["Bulk availability", "Consistent specs", "Global sourcing"],
  },
  {
    slug: "semi-commodity-chemicals",
    title: "Semi Commodity Chemicals",
    short: "Balanced volume & specification",
    description:
      "Intermediate-demand products with defined purity windows—ideal for plants that need dependable quality without specialty premiums.",
    highlights: ["Flexible lots", "Documented COA", "Repeat orders"],
  },
  {
    slug: "solvents",
    title: "Solvents",
    short: "Industrial-grade diluents & cleaners",
    description:
      "A broad solvent portfolio supporting coatings, pharma, adhesives, and extraction workflows with compliant handling guidance.",
    highlights: ["Drums to ISO tanks", "Moisture control", "Fast dispatch"],
  },
  {
    slug: "specialty-chemicals",
    title: "Specialty Chemicals",
    short: "Performance-driven molecules",
    description:
      "Targeted chemistries for differentiated formulations—engineered for efficacy, stability, and regulatory alignment.",
    highlights: ["Technical support", "Application notes", "Tighter specs"],
  },
  {
    slug: "additives",
    title: "Additives",
    short: "Process & product enhancers",
    description:
      "Stabilizers, catalysts, and functional additives that improve throughput, shelf life, and end-use performance.",
    highlights: ["Low inclusion levels", "Batch traceability", "Shelf programs"],
  },
  {
    slug: "intermediates",
    title: "Intermediates",
    short: "Building blocks for synthesis",
    description:
      "Key intermediates for multi-step synthesis routes across pharma, agro, and fine chemical value chains.",
    highlights: ["KSM support", "Impurity profiles", "Secure packaging"],
  },
  {
    slug: "polymers-resins",
    title: "Polymers & Resins",
    short: "PVC, polyols & resin systems",
    description:
      "Polymer grades and resin systems for rigid and flexible applications, compounding, and surface coatings.",
    highlights: ["Grade matching", "MFI documentation", "Project stocking"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
