export type Industry = {
  id: string;
  title: string;
  description: string;
};

export const INDUSTRIES: Industry[] = [
  {
    id: "pharma",
    title: "Pharma",
    description: "API precursors, solvents, and intermediates aligned with documented quality expectations.",
  },
  {
    id: "paints",
    title: "Paints & Coatings",
    description: "Resins, solvents, and additives for durable films, industrial coatings, and protective systems.",
  },
  {
    id: "plastics",
    title: "Plastics",
    description: "Monomers, process solvents, and additives for compounding, extrusion, and molding operations.",
  },
  {
    id: "textile",
    title: "Textile",
    description: "Processing chemicals, dyes intermediates, and finishing auxiliaries for mills and processors.",
  },
  {
    id: "agro",
    title: "Agro Chemicals",
    description: "Building blocks and formulation inputs supporting crop protection and nutrition chemistry.",
  },
  {
    id: "construction",
    title: "Construction Chemicals",
    description: "Admixture inputs, resins, and solvents for admixtures, waterproofing, and repair systems.",
  },
  {
    id: "rubber",
    title: "Rubber Industry",
    description: "Accelerators, antioxidants, and process oils for tire and industrial rubber manufacturing.",
  },
  {
    id: "adhesives",
    title: "Adhesives",
    description: "Monomers, solvents, and tackifiers for hot-melt, reactive, and solvent-borne adhesive lines.",
  },
];
