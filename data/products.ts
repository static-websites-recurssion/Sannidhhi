export type Product = {
  id: string;
  name: string;
  cas?: string;
  categorySlug: string;
  purity?: string;
  packaging?: string;
  applications?: string;
  /** Alternate spellings & trade abbreviations, used to widen catalog search */
  aka?: string[];
};

/** Packing vocabulary used across the catalogue */
const DRUMS = "Drums";
const DRUMS_BULK = "Drums / bulk";
const DRUMS_TANKER = "Drums / tanker";
const DRUMS_CARBOYS = "Drums / carboys";
const DRUMS_SPECIAL = "Drums / special pack";
const CARBOYS = "Carboys";
const CARBOYS_DRUMS = "Carboys / drums";
const TANKER_CARBOYS = "Tanker / carboys";
const BAGS = "Bags (25 / 50 kg)";
const BAGS_DRUMS = "Bags / drums";
const BAGS_TANKER = "Bags / tanker";
const BULK_UNITS = "Bulk units";

/** Grades quoted on the catalogue's "Standard Grade" column */
const COMM = "Commercial";
const COMM_BULK = "Commercial / bulk";
const COMM_PURE = "Commercial / pure";
const SPECIALTY = "Specialty";

type Row = [
  name: string,
  categorySlug: string,
  cas?: string,
  purity?: string,
  packaging?: string,
  applications?: string,
];

/**
 * Line list transcribed from the Sannidhhi Chemical Industries Corporate
 * Profile & Catalogue, following its five sections.
 *
 * Note on grades and packing: the catalogue quotes "Commercial" against
 * virtually every line, with bulk/pure qualifiers called out only where the
 * product is also offered that way. Its "available variants" column is
 * inconsistent in the source document, so packing here reflects the catalogue's
 * stated packaging type. CAS references are added for search and are
 * indicative — confirm every grade, assay, and pack against the COA/TDS issued
 * with each consignment.
 */
const ROWS: Row[] = [
  // ── 1. Solvents, alcohols & organic intermediates ───────────────────────
  ["1,4 Dioxane", "solvents", "123-91-1", COMM, DRUMS_CARBOYS, "Extraction, pharma synthesis, wetting agent"],
  ["2-Methyl Tetrahydrofuran", "solvents", "96-47-9", COMM, DRUMS_BULK, "Grignard chemistry, lithiation, pharma"],
  ["2-Phenylacetonitrile", "solvents", "140-29-4", COMM, CARBOYS_DRUMS, "Pharma, agro, fine chemical synthesis"],
  ["Acetone", "solvents", "67-64-1", COMM, "Drums / tanker / litre packs", "Cleaning, coatings, pharma, extraction"],
  ["Acetonitrile", "solvents", "75-05-8", COMM, DRUMS_CARBOYS, "HPLC, pharma synthesis, extraction"],
  ["Benzene", "solvents", "71-43-2", COMM, DRUMS, "Intermediates, solvent, chemical synthesis"],
  ["Chloroform", "solvents", "67-66-3", COMM, DRUMS_CARBOYS, "Extraction, pharma, laboratory use"],
  ["Cyclohexane", "solvents", "110-82-7", COMM_BULK, DRUMS_TANKER, "Nylon precursors, resins, extraction"],
  ["Cyclohexanone", "solvents", "108-94-1", COMM, DRUMS, "Nylon, adhesives, PVC cements"],
  ["Di Ethyl Ether", "solvents", "60-29-7", COMM_BULK, DRUMS, "Extraction, pharma, laboratory use"],
  ["Di Iso Propyl Ether (DIPE)", "solvents", "108-20-3", COMM, DRUMS, "Extraction, fuel blending, pharma"],
  ["Di Methyl Formamide (DMF)", "solvents", "68-12-2", COMM_BULK, DRUMS_TANKER, "PU synthetic leather, fibres, pharma"],
  ["Di Methyl Sulphoxide (DMSO)", "solvents", "67-68-5", COMM, DRUMS_CARBOYS, "Pharma, agro, electronics"],
  ["Ethyl Acetate", "solvents", "141-78-6", COMM_PURE, DRUMS_TANKER, "Coatings, inks, adhesives, extraction"],
  ["Hexane", "solvents", "110-54-3", COMM, DRUMS_TANKER, "Edible oil extraction, adhesives, coatings"],
  ["Iso Amyl Alcohol", "solvents", "123-51-3", COMM, DRUMS_CARBOYS, "Flavours, extraction, lube additives"],
  ["Iso Propyl Acetate", "solvents", "108-21-4", COMM, DRUMS, "Coatings, printing inks, thinners"],
  ["Iso Propyl Alcohol (IPA)", "solvents", "67-63-0", COMM, DRUMS_TANKER, "Sanitisers, cleaning, pharma"],
  ["Methanol", "solvents", "67-56-1", COMM, DRUMS_TANKER, "Solvent, formaldehyde, biodiesel"],
  ["Methylene Chloride (MDC)", "solvents", "75-09-2", COMM, DRUMS_TANKER, "Paint stripping, pharma extraction"],
  ["Methyl Ethyl Ketone (MEK)", "solvents", "78-93-3", COMM, DRUMS, "Coatings, adhesives, printing inks"],
  ["Methyl Isobutyl Ketone (MIBK)", "solvents", "108-10-1", COMM, DRUMS, "Coatings, rubber chemicals, extraction"],
  ["Methyl Tertiary Butyl Ether (MTBE)", "solvents", "1634-04-4", COMM, DRUMS_TANKER, "Fuel blending, solvent, extraction"],
  ["Mixed Solvent / Mix Xylene", "solvents", "1330-20-7", COMM, DRUMS_TANKER, "Thinners, coatings, degreasing"],
  ["Mono Ethylene Glycol (MEG)", "solvents", "107-21-1", COMM, DRUMS_TANKER, "Coolants, polyester, humectant"],
  ["N Butanol / Normal Butanol", "solvents", "71-36-3", COMM, DRUMS_TANKER, "Coatings, plasticisers, butyl acetate"],
  ["N Heptane", "solvents", "142-82-5", COMM, DRUMS, "Extraction, adhesives, laboratory use"],
  ["N Hexane 99%", "solvents", "110-54-3", "Commercial (99%)", DRUMS, "Pharma extraction, polymerisation"],
  ["N Propanol Alcohol", "solvents", "71-23-8", "Imported high purity", DRUMS, "Inks, cosmetics, pharma"],
  ["Ortho Xylene", "solvents", "95-47-6", COMM_BULK, DRUMS_TANKER, "Phthalic anhydride, solvents, thinners"],
  ["Pyridine", "solvents", "110-86-1", COMM, DRUMS_CARBOYS, "Pharma, agro, denaturant"],
  ["Tertiary Butanol", "solvents", "75-65-0", COMM, DRUMS, "Solvent, MTBE, denaturant"],
  ["Tetra Hydrofuran (THF)", "solvents", "109-99-9", COMM_BULK, DRUMS, "PTMEG, pharma, Grignard chemistry"],
  ["Toluene / Tar Toluene", "solvents", "108-88-3", COMM, DRUMS_TANKER, "Thinners, adhesives, intermediates"],

  // ── 2. Acids & inorganic corrosives ─────────────────────────────────────
  ["Acetic Acid Glacial", "acids", "64-19-7", COMM, CARBOYS_DRUMS, "Textiles, pharma, acetates"],
  ["Citric Acid", "acids", "5949-29-1", "Pure commercial", BAGS, "Food, cleaning, pharma"],
  ["Formic Acid", "acids", "64-18-6", "Commercial (85%)", CARBOYS_DRUMS, "Leather, textiles, rubber latex"],
  ["Hydro Bromic Acid 48%", "acids", "10035-10-6", "Commercial (48%)", CARBOYS, "Bromides, pharma synthesis"],
  ["Hydrochloric Acid", "acids", "7647-01-0", "Commercial / CP 36%", TANKER_CARBOYS, "Pickling, water treatment, pH control"],
  ["Nitric Acid 72%", "acids", "7697-37-2", "Commercial (72%)", CARBOYS, "Nitration, metal treatment, fertilisers"],
  ["Oxalic Acid", "acids", "144-62-7", COMM, BAGS, "Bleaching, metal cleaning, textiles"],
  ["Para Toluene Sulphonic Acid", "acids", "104-15-4", COMM, BAGS_DRUMS, "Esterification catalyst, resins, dyes"],
  ["Phosphoric Acid", "acids", "7664-38-2", "Commercial (85%)", CARBOYS_DRUMS, "Phosphates, metal treatment, food"],
  ["Phosphorus Oxychloride", "acids", "10025-87-3", COMM, DRUMS_SPECIAL, "Pharma, agro, flame retardants"],
  ["Sulphamic Acid", "acids", "5329-14-6", COMM, BAGS, "Descaling, cleaning, dyes"],
  ["Sulphuric Acid", "acids", "7664-93-9", COMM_BULK, TANKER_CARBOYS, "Pickling, fertilisers, process acid"],

  // ── 3. Alkalis, inorganic salts & industrial chemicals ──────────────────
  ["Activated Carbon", "alkalis-salts", "7440-44-0", COMM, BAGS, "Decolourisation, water treatment, purification"],
  ["Aluminium Chloride", "alkalis-salts", "7446-70-0", COMM, BAGS_DRUMS, "Friedel-Crafts catalyst, water treatment"],
  ["Aluminium Oxide", "alkalis-salts", "1344-28-1", COMM, BAGS, "Chromatography, abrasives, catalyst support"],
  ["Ammonia Solution", "alkalis-salts", "1336-21-6", COMM, CARBOYS_DRUMS, "pH control, textiles, water treatment"],
  ["Ammonium Chloride", "alkalis-salts", "12125-02-9", COMM, BAGS, "Galvanising, batteries, pharma"],
  ["Calcium Chloride", "alkalis-salts", "10043-52-4", COMM, BAGS, "Dehydration, de-icing, drilling fluids"],
  ["Caustic Potash Flakes", "alkalis-salts", "1310-58-3", COMM, BAGS, "Soaps, potassium salts, cleaning"],
  ["Caustic Soda Flakes / Lye", "alkalis-salts", "1310-73-2", COMM, BAGS_TANKER, "Textiles, soaps, effluent treatment"],
  ["EDTA 2Na", "alkalis-salts", "139-33-3", COMM, BAGS, "Chelation, cleaning, cosmetics"],
  ["Ferric Chloride", "alkalis-salts", "7705-08-0", COMM, "Bags / carboys", "Water treatment, etching, effluent"],
  ["Hydrated Lime Powder", "alkalis-salts", "1305-62-0", COMM, BAGS, "Effluent treatment, construction, pH control"],
  ["Hydrazine Hydrate 80%", "alkalis-salts", "7803-57-8", "Commercial (80%)", DRUMS_CARBOYS, "Boiler treatment, blowing agents, pharma"],
  ["Hydrogen Peroxide", "alkalis-salts", "7722-84-1", COMM, CARBOYS, "Bleaching, effluent, disinfection"],
  ["Iron Powder", "alkalis-salts", "7439-89-6", COMM, BAGS_DRUMS, "Reduction chemistry, metallurgy"],
  ["Manganese Sulphate", "alkalis-salts", "7785-87-7", COMM, BAGS, "Micronutrients, ceramics, batteries"],
  ["Para Formaldehyde", "alkalis-salts", "30525-89-4", "Commercial (91–96%)", BAGS, "Resins, disinfectant, synthesis"],
  ["Potassium Carbonate", "alkalis-salts", "584-08-7", COMM, BAGS, "Glass, soaps, pharma synthesis"],
  ["Sodium Acetate Anhydrous", "alkalis-salts", "127-09-3", COMM, BAGS, "Buffers, textiles, tanning"],
  ["Sodium Bicarbonate / Soda Karb", "alkalis-salts", "144-55-8", COMM, BAGS, "pH control, effluent, food"],
  ["Sodium Bisulphite / Meta Bisulphite", "alkalis-salts", "7681-57-4", COMM, BAGS, "Bleaching, preservative, dechlorination"],
  ["Sodium Borohydride", "alkalis-salts", "16940-66-2", COMM, DRUMS_SPECIAL, "Reduction chemistry, pharma, pulp bleaching"],
  ["Sodium Chloride / Sodium Carbonate", "alkalis-salts", "7647-14-5", COMM, BAGS, "Brine, glass, detergents, textiles"],
  ["Sodium Cyanate / Sodium Hydride", "alkalis-salts", "917-61-3", COMM, DRUMS, "Heat treatment, deprotonation, synthesis"],
  ["Sodium Hydroxide Pellets", "alkalis-salts", "1310-73-2", "Commercial / AR", "Drums / containers", "Laboratory, pharma, pH control"],
  ["Sodium Hypochlorite", "alkalis-salts", "7681-52-9", COMM, CARBOYS_DRUMS, "Disinfection, bleaching, effluent"],
  ["Sodium Nitrite / Sodium Thiosulphate", "alkalis-salts", "7632-00-0", COMM, BAGS, "Diazotisation, dyes, dechlorination"],
  ["Sodium Sulphate Anhydrous", "alkalis-salts", "7757-82-6", COMM, BAGS, "Detergents, textiles, glass"],
  ["Stable Bleaching Powder", "alkalis-salts", "7778-54-3", COMM, BAGS_DRUMS, "Disinfection, water treatment, bleaching"],
  ["Sulphur", "alkalis-salts", "7704-34-9", COMM, BAGS, "Rubber vulcanisation, agro, sulphuric acid"],

  // ── 4. Specialty chemicals, surfactants & process aids ──────────────────
  ["Acetyl Chloride", "specialty-chemicals", "75-36-5", COMM, DRUMS_SPECIAL, "Acetylation, pharma, dyes"],
  ["APSURF WDQ909", "specialty-chemicals", undefined, SPECIALTY, DRUMS, "Surfactant additive for textile and agro formulations"],
  ["Chloro Acetyl Chloride", "specialty-chemicals", "79-04-9", COMM, DRUMS, "Agro, pharma, dyes intermediates"],
  ["Di Methyl Amine 40% Solution", "specialty-chemicals", "124-40-3", COMM, DRUMS_CARBOYS, "Surfactants, agro, pharma"],
  ["Di Methyl Sulphate", "specialty-chemicals", "77-78-1", COMM, DRUMS, "Methylation, dyes, pharma"],
  ["Dispertox (ANS) 60 / Despertox (BS) SPL", "specialty-chemicals", undefined, SPECIALTY, DRUMS, "Dispersing agent for dyes and pigment pastes"],
  ["DMA NO", "specialty-chemicals", undefined, SPECIALTY, DRUMS, "Process additive for bulk drug and dye operations"],
  ["Ethylene Dichloride (EDC)", "specialty-chemicals", "107-06-2", COMM, DRUMS, "VCM, degreasing, intermediates"],
  ["Formaldehyde / Formamide", "specialty-chemicals", "50-00-0", COMM, CARBOYS_DRUMS, "Resins, disinfectant, pharma synthesis"],
  ["Hyflow Supercel", "specialty-chemicals", "68855-54-9", COMM, BAGS, "Filter aid for clarification and polishing"],
  ["IGSURF 2080 DW / IG SURF 2900 / 6000T", "specialty-chemicals", undefined, SPECIALTY, DRUMS, "Emulsifier and surfactant series for formulations"],
  ["Liquid Paraffin Light / Mineral Oil", "specialty-chemicals", "8042-47-5", "Commercial / IP", "Drums / barrels", "Lubricants, pharma, textile processing"],
  ["Mono Chloro Benzene", "specialty-chemicals", "108-90-7", COMM, DRUMS, "Agro, pharma, dyes intermediates"],
  ["Mono Methyl Amine 40%", "specialty-chemicals", "74-89-5", COMM, DRUMS, "Pharma, agro, surfactants"],
  ["Nitro Benzene", "specialty-chemicals", "98-95-3", COMM, DRUMS, "Aniline, dyes, rubber chemicals"],
  ["N-Methyl-2-Pyrrolidone (NMP)", "specialty-chemicals", "872-50-4", COMM_PURE, DRUMS_CARBOYS, "Electronics cleaning, pharma, coatings"],
  ["NN Dimethyl Acetamide (DMAC)", "specialty-chemicals", "127-19-5", COMM, DRUMS, "Spandex, pharma, films"],
  ["Piperidine", "specialty-chemicals", "110-89-4", COMM, "Drums / bottles", "Pharma synthesis, rubber accelerators"],
  ["Polyethylene Glycol 400 (PEG 400)", "specialty-chemicals", "25322-68-3", COMM, DRUMS_CARBOYS, "Pharma, cosmetics, lubricants"],
  ["Raghupal BBU Powder / SI LIQ", "specialty-chemicals", undefined, SPECIALTY, BAGS_DRUMS, "Processing auxiliary for textile and dye houses"],
  ["Raney Nickel", "specialty-chemicals", "7440-02-0", SPECIALTY, "Special drums", "Hydrogenation catalyst supplied in slurry"],
  ["Silica Gel 100-200 / 230-400 / 60-120", "specialty-chemicals", "112926-00-8", "Lab / commercial", BAGS_DRUMS, "Column chromatography, desiccant"],
  ["Silicon Deformer 3910", "specialty-chemicals", undefined, SPECIALTY, DRUMS_CARBOYS, "Antifoam agent for fermentation and effluent"],
  ["Sodium Lauryl Sulphate (SLS)", "specialty-chemicals", "151-21-3", COMM, BAGS, "Detergents, cosmetics, wetting agent"],
  ["Sorbitol / Sorbox 80", "specialty-chemicals", "50-70-4", COMM, DRUMS, "Humectant, pharma, food, cosmetics"],
  ["Styrene Monomer", "specialty-chemicals", "100-42-5", COMM, DRUMS, "Polystyrene, resins, latex"],
  ["Thionyl Chloride / Thio Urea", "specialty-chemicals", "7719-09-7", COMM, BAGS_DRUMS, "Chlorination, pharma, agro synthesis"],
  ["Tri Ethyl Amine (TEA)", "specialty-chemicals", "121-44-8", COMM, DRUMS, "Acid scavenger, pharma, catalyst"],
  ["Unitop - 100 / Xanthan Gum Powder", "specialty-chemicals", "11138-66-2", COMM, BAGS_DRUMS, "Industrial additive, thickener, stabiliser"],

  // ── 5. Packaging containers & industrial supplies ───────────────────────
  ["Empty Drums", "packaging-supplies", undefined, "HDPE plastic", BULK_UNITS, "Standard drums for chemical storage and despatch"],
  ["M.S. Drums", "packaging-supplies", undefined, "Steel metal", BULK_UNITS, "Mild steel drums for chemicals and solvents"],
];

/** Alternate spellings & trade abbreviations that widen catalogue search */
const ALIASES: Record<string, string[]> = {
  "1-4-dioxane": ["Dioxane", "1,4-Dioxan"],
  "2-methyl-tetrahydrofuran": ["2-MeTHF", "Me-THF"],
  "2-phenylacetonitrile": ["Benzyl Cyanide", "Phenyl Aceto Nitrile"],
  acetonitrile: ["ACN", "Methyl Cyanide"],
  chloroform: ["Trichloromethane"],
  "di-iso-propyl-ether-dipe": ["DIPE", "Diisopropyl Ether", "Iso Propyl Ether"],
  "di-methyl-formamide-dmf": ["DMF", "Dimethylformamide", "N,N-Dimethylformamide"],
  "di-methyl-sulphoxide-dmso": ["DMSO", "Dimethyl Sulfoxide", "Methyl Sulphoxide"],
  "ethyl-acetate": ["EA", "Ethyl Acetate Pure"],
  "iso-amyl-alcohol": ["Isoamyl Alcohol", "3-Methyl-1-Butanol"],
  "iso-propyl-alcohol-ipa": ["IPA", "Isopropanol", "2-Propanol"],
  "iso-propyl-acetate": ["IPAc", "Isopropyl Acetate"],
  methanol: ["Methyl Alcohol", "MeOH"],
  "methylene-chloride-mdc": ["MDC", "Dichloromethane", "DCM"],
  "methyl-ethyl-ketone-mek": ["MEK", "Butanone", "2-Butanone"],
  "methyl-isobutyl-ketone-mibk": ["MIBK", "Hexone"],
  "methyl-tertiary-butyl-ether-mtbe": ["MTBE", "Tert-Butyl Methyl Ether"],
  "mixed-solvent-mix-xylene": ["Mix Xylene", "Xylene", "Mixed Xylenes", "MIX"],
  "mono-ethylene-glycol-meg": ["MEG", "Ethylene Glycol"],
  "n-butanol-normal-butanol": ["NBA", "Butyl Alcohol", "1-Butanol"],
  "n-heptane": ["Heptane"],
  "n-hexane-99": ["Hexane 99%", "Normal Hexane"],
  "n-propanol-alcohol": ["NPA", "1-Propanol", "Propyl Alcohol"],
  "ortho-xylene": ["OX", "O-Xylene"],
  "tertiary-butanol": ["TBA", "Tert-Butyl Alcohol"],
  "tetra-hydrofuran-thf": ["THF", "Tetrahydrofuran"],
  "toluene-tar-toluene": ["Toluol", "Tar Toluene", "Methyl Benzene"],

  "acetic-acid-glacial": ["GAA", "Glacial Acetic Acid"],
  "formic-acid": ["Formic Acid 85%", "Methanoic Acid"],
  "hydro-bromic-acid-48": ["HBr", "Hydrobromic Acid"],
  "hydrochloric-acid": ["HCl", "Muriatic Acid", "Commercial HCl"],
  "nitric-acid-72": ["HNO3"],
  "para-toluene-sulphonic-acid": ["PTSA", "p-TSA", "Tosic Acid"],
  "phosphoric-acid": ["Ortho Phosphoric Acid", "H3PO4"],
  "phosphorus-oxychloride": ["POCl3"],
  "sulphuric-acid": ["Sulfuric Acid", "H2SO4"],

  "caustic-soda-flakes-lye": ["Caustic Soda", "Sodium Hydroxide", "Lye", "NaOH"],
  "caustic-potash-flakes": ["Potassium Hydroxide", "KOH"],
  "edta-2na": ["EDTA Disodium", "Disodium EDTA"],
  "hydrated-lime-powder": ["Calcium Hydroxide", "Slaked Lime"],
  "hydrogen-peroxide": ["H2O2", "Peroxide"],
  "para-formaldehyde": ["PFA", "Paraformaldehyde"],
  "sodium-bicarbonate-soda-karb": ["Soda Karb", "Baking Soda", "Sodium Bi Carbonate"],
  "sodium-bisulphite-meta-bisulphite": ["SMBS", "Sodium Metabisulphite", "Meta Bi Sulphite"],
  "sodium-chloride-sodium-carbonate": ["Soda Ash", "Common Salt", "Sodium Carbonate"],
  "sodium-hypochlorite": ["Hypo", "Bleach Solution"],
  "sodium-sulphate-anhydrous": ["Glauber Salt", "Sodium Sulfate"],
  "stable-bleaching-powder": ["SBP", "Calcium Hypochlorite"],

  "di-methyl-amine-40-solution": ["DMA 40%", "Dimethylamine"],
  "di-methyl-sulphate": ["DMS", "Dimethyl Sulfate"],
  "ethylene-dichloride-edc": ["EDC", "1,2-Dichloroethane"],
  "formaldehyde-formamide": ["Formalin", "Formamide"],
  "hyflow-supercel": ["Hyflo Super Cel", "Diatomaceous Earth", "Filter Aid"],
  "liquid-paraffin-light-mineral-oil": ["LLP", "White Oil", "Mineral Oil"],
  "mono-chloro-benzene": ["MCB", "Chlorobenzene"],
  "mono-methyl-amine-40": ["MMA 40%", "Methylamine"],
  "n-methyl-2-pyrrolidone-nmp": ["NMP", "N Methyl Pyrrolidone"],
  "nn-dimethyl-acetamide-dmac": ["DMAC", "Dimethylacetamide", "DMA"],
  "polyethylene-glycol-400-peg-400": ["PEG 400", "Macrogol 400"],
  "silica-gel-100-200-230-400-60-120": ["Silica Gel", "Column Silica", "Silica 60-120"],
  "silicon-deformer-3910": ["Silicone Defoamer", "Antifoam 3910", "Defoamer"],
  "sodium-lauryl-sulphate-sls": ["SLS", "Sodium Dodecyl Sulphate", "SDS"],
  "sorbitol-sorbox-80": ["Sorbitol 70%", "Sorbox 80"],
  "styrene-monomer": ["SM", "Styrene"],
  "thionyl-chloride-thio-urea": ["SOCl2", "Thiourea", "Thio Urea"],
  "tri-ethyl-amine-tea": ["TEA", "Triethylamine"],
  "unitop-100-xanthan-gum-powder": ["Unitop 100", "Xanthan Gum"],
  "empty-drums": ["HDPE Drums", "Plastic Drums", "Barrels"],
  "m-s-drums": ["MS Drums", "Steel Drums", "Mild Steel Drums"],
};

function slugifyId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()%+.,/–—]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const PRODUCTS: Product[] = ROWS.map(
  ([name, categorySlug, cas, purity, packaging, applications]) => {
    const id = slugifyId(name);
    return {
      id,
      name,
      categorySlug,
      cas,
      purity,
      packaging,
      applications,
      aka: ALIASES[id],
    };
  }
).sort((a, b) => {
  // Letters first, numeric/symbol-led names last — mirrors the "#" bucket in the
  // alphabet filter and the catalogue's own ordering.
  const ga = productInitial(a.name) === "#" ? 1 : 0;
  const gb = productInitial(b.name) === "#" ? 1 : 0;
  if (ga !== gb) return ga - gb;
  return a.name.localeCompare(b.name, "en");
});

export function productsByCategory(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === slug);
}

export function productInitial(name: string): string {
  const c = name.trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}

export function countByCategory(): Record<string, number> {
  return PRODUCTS.reduce<Record<string, number>>((acc, p) => {
    acc[p.categorySlug] = (acc[p.categorySlug] ?? 0) + 1;
    return acc;
  }, {});
}

export const PRODUCT_COUNT = PRODUCTS.length;
