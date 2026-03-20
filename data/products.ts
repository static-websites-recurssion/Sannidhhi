export type Product = {
  id: string;
  name: string;
  cas?: string;
  categorySlug: string;
  purity?: string;
  packaging?: string;
  applications?: string;
};

const row = (
  id: string,
  name: string,
  categorySlug: string,
  cas?: string,
  purity?: string,
  packaging?: string,
  applications?: string
): Product => ({
  id,
  name,
  categorySlug,
  cas,
  purity,
  packaging,
  applications,
});

/** Curated B2B catalog — representative of typical industrial trading lines */
export const PRODUCTS: Product[] = [
  row("p001", "Acetone", "solvents", "67-64-1", "≥99.5%", "160 kg HDPE / ISO", "Coatings, pharma, extraction"),
  row("p002", "Acetic Acid", "commodity-chemicals", "64-19-7", "≥99.8%", "IBC, tanker", "Esters, textiles, food"),
  row("p003", "Aniline", "intermediates", "62-53-3", "≥99.5%", "200 kg drums", "MDI chains, dyes"),
  row("p004", "Benzaldehyde", "specialty-chemicals", "100-52-7", "≥99.0%", "200 kg", "Flavor, fragrance, pharma"),
  row("p005", "Hydrogen Peroxide", "commodity-chemicals", "7722-84-1", "50% / 35%", "IBC, tanker", "Bleaching, oxidation"),
  row("p006", "Methanol", "solvents", "67-56-1", "≥99.9%", "ISO tank, bulk", "Formaldehyde, fuels, resins"),
  row("p007", "Toluene", "solvents", "108-88-3", "≥99.5%", "Bulk / drums", "Paints, TDI, adhesives"),
  row("p008", "PVC Resin", "polymers-resins", "9002-86-2", "K-67 / K-58", "25 MT FCL", "Pipes, profiles, films"),
  row("p009", "Titanium Dioxide", "additives", "13463-67-7", "Rutile / Anatase", "25 kg bags", "Pigments, plastics"),
  row("p010", "Triethylamine", "specialty-chemicals", "121-44-8", "≥99.0%", "140 kg", "Catalysis, quaternaries"),
  row("p011", "Ethyl Acetate", "solvents", "141-78-6", "≥99.5%", "180 kg / ISO", "Coatings, pharma"),
  row("p012", "Butyl Acetate", "solvents", "123-86-4", "≥99.0%", "180 kg", "NC lacquers, flexo"),
  row("p013", "Isopropyl Alcohol", "solvents", "67-63-0", "≥99.5%", "160 kg", "Electronics, sanitization"),
  row("p014", "Xylene", "solvents", "1330-20-7", "Mixed isomers", "Bulk", "Paints, resins"),
  row("p015", "Cyclohexanone", "solvents", "108-94-1", "≥99.0%", "190 kg", "Nylon, adhesives"),
  row("p016", "Dimethylformamide", "solvents", "68-12-2", "≥99.5%", "190 kg", "Fibers, pharma"),
  row("p017", "Dimethyl Sulfoxide", "solvents", "67-68-5", "≥99.9%", "225 kg", "Pharma, electronics"),
  row("p018", "N-Methyl-2-Pyrrolidone", "solvents", "872-50-4", "≥99.5%", "200 kg", "Li-ion, coatings"),
  row("p019", "Formaldehyde", "commodity-chemicals", "50-00-0", "37–55%", "Tanker", "Resins, disinfectants"),
  row("p020", "Phenol", "commodity-chemicals", "108-95-2", "≥99.5%", "ISO / drums", "Bisphenol, resins"),
  row("p021", "Propylene Glycol", "semi-commodity-chemicals", "57-55-6", "USP / Industrial", "215 kg", "Food, UPR"),
  row("p022", "Monoethylene Glycol", "commodity-chemicals", "107-21-1", "≥99.0%", "ISO tank", "Polyester, coolant"),
  row("p023", "Diethylene Glycol", "commodity-chemicals", "111-46-6", "≥99.0%", "230 kg", "Resins, brake fluid"),
  row("p024", "Styrene Monomer", "commodity-chemicals", "100-42-5", "≥99.8%", "Bulk", "PS, SBR, resins"),
  row("p025", "Vinyl Acetate Monomer", "commodity-chemicals", "108-05-4", "≥99.5%", "Bulk", "Emulsions, adhesives"),
  row("p026", "Acrylonitrile", "commodity-chemicals", "107-13-1", "≥99.5%", "ISO", "ABS, acrylic fiber"),
  row("p027", "Maleic Anhydride", "intermediates", "108-31-6", "≥99.5%", "25 kg bags", "UPR, additives"),
  row("p028", "Phthalic Anhydride", "intermediates", "85-44-9", "≥99.5%", "25 kg", "Plasticizers, resins"),
  row("p029", "Adipic Acid", "intermediates", "124-04-9", "≥99.7%", "500 kg bags", "Nylon 66"),
  row("p030", "Sodium Hydroxide", "commodity-chemicals", "1310-73-2", "Flakes / Lye", "25 kg / tanker", "Soaps, alumina"),
  row("p031", "Caustic Soda Lye", "commodity-chemicals", "1310-73-2", "48–50%", "Tanker", "Alumina, textiles"),
  row("p032", "Sulfuric Acid", "commodity-chemicals", "7664-93-9", "98%", "Tanker", "Fertilizers, dyes"),
  row("p033", "Hydrochloric Acid", "commodity-chemicals", "7647-01-0", "32–35%", "Tanker / IBC", "Pickling, water"),
  row("p034", "Nitric Acid", "commodity-chemicals", "7697-37-2", "68%", "IBC", "Explosives, intermediates"),
  row("p035", "Ammonium Hydroxide", "commodity-chemicals", "1336-21-6", "25–28%", "IBC", "Fertilizers, cleaning"),
  row("p036", "Urea", "commodity-chemicals", "57-13-6", "Prilled / Granular", "50 kg / bulk", "AdBlue, fertilizers"),
  row("p037", "Soda Ash", "commodity-chemicals", "497-19-8", "Dense / Light", "50 kg / bulk", "Glass, detergents"),
  row("p038", "Sodium Bicarbonate", "semi-commodity-chemicals", "144-55-8", "Food / Tech", "25 kg", "Food, flue gas"),
  row("p039", "Citric Acid", "semi-commodity-chemicals", "77-92-9", "Monohydrate", "25 kg", "Food, cleaning"),
  row("p040", "Benzoic Acid", "additives", "65-85-0", "≥99.5%", "25 kg", "Preservatives, plasticizers"),
  row("p041", "Oxalic Acid", "semi-commodity-chemicals", "144-62-7", "≥99.0%", "25 kg", "Metal treatment"),
  row("p042", "Phosphoric Acid", "commodity-chemicals", "7664-38-2", "85% Food / Tech", "35 kg / IBC", "Fertilizers, food"),
  row("p043", "Sodium Hypochlorite", "commodity-chemicals", "7681-52-9", "10–15%", "Tanker", "Bleach, water"),
  row("p044", "Potassium Hydroxide", "commodity-chemicals", "1310-58-3", "90% flakes", "25 kg", "Soaps, K salts"),
  row("p045", "Calcium Chloride", "semi-commodity-chemicals", "10043-52-4", "Flakes / Prills", "25 kg", "Drilling, drying"),
  row("p046", "Zinc Oxide", "additives", "1314-13-2", "≥99.0%", "25 kg", "Rubber, ceramics"),
  row("p047", "Carbon Black", "additives", "1333-86-4", "N330 / N550", "Bulk bags", "Rubber, inks"),
  row("p048", "Linear Alkylbenzene Sulfonic Acid", "additives", "27176-87-0", "96%", "215 kg", "Detergents"),
  row("p049", "Sodium Lauryl Ether Sulfate", "additives", "68891-38-1", "70%", "170 kg", "Personal care"),
  row("p050", "Epichlorohydrin", "intermediates", "106-89-8", "≥99.0%", "240 kg", "Epoxy resins"),
  row("p051", "Bisphenol A", "intermediates", "80-05-7", "≥99.5%", "25 kg bags", "Epoxy, polycarbonate"),
  row("p052", "Terephthalic Acid", "intermediates", "100-21-0", "≥99.9%", "Bulk", "Polyester fiber"),
  row("p053", "Monoethanolamine", "semi-commodity-chemicals", "141-43-5", "≥99.0%", "200 kg", "Gas treating, surfactants"),
  row("p054", "Diethanolamine", "semi-commodity-chemicals", "111-42-2", "≥99.0%", "220 kg", "Surfactants, gas"),
  row("p055", "Triethanolamine", "semi-commodity-chemicals", "102-71-6", "≥99.0%", "220 kg", "Cement, surfactants"),
  row("p056", "Ethylene Diamine", "intermediates", "107-15-3", "≥99.0%", "180 kg", "Chelates, resins"),
  row("p057", "Hexamethylene Tetramine", "intermediates", "100-97-0", "≥99.0%", "25 kg", "Resins, pharma"),
  row("p058", "Melamine", "additives", "108-78-1", "≥99.8%", "25 kg", "Laminates, MF resins"),
  row("p059", "Urea Formaldehyde Resin Powder", "polymers-resins", "9011-05-6", "Industrial", "25 kg", "Wood adhesives"),
  row("p060", "Alkyd Resin", "polymers-resins", "—", "Long / Medium oil", "200 kg", "Decorative paints"),
  row("p061", "Unsaturated Polyester Resin", "polymers-resins", "—", "Ortho / ISO", "220 kg", "Composites, GRP"),
  row("p062", "Polyvinyl Alcohol", "polymers-resins", "9002-89-5", "Partially hydrolyzed", "20 kg", "Adhesives, emulsions"),
  row("p063", "Polystyrene GP", "polymers-resins", "9003-53-6", "GP / HIPS", "25 kg", "Packaging, disposables"),
  row("p064", "Polypropylene Homopolymer", "polymers-resins", "9003-07-0", "Various MFI", "25 kg", "Raffia, injection"),
  row("p065", "Linear Low Density Polyethylene", "polymers-resins", "25087-34-7", "Film grades", "25 kg", "Film, lamination"),
  row("p066", "High Density Polyethylene", "polymers-resins", "9002-88-4", "Blow / inj", "25 kg", "Bottles, crates"),
  row("p067", "Glycerine", "semi-commodity-chemicals", "56-81-5", "≥99.5%", "250 kg", "UPR, personal care"),
  row("p068", "Castor Oil", "semi-commodity-chemicals", "8001-79-4", "Refined", "200 kg", "Polyols, lubricants"),
  row("p069", "Linseed Oil", "semi-commodity-chemicals", "8001-26-1", "Refined", "200 kg", "Alkyds, coatings"),
  row("p070", "Rosin", "additives", "8050-09-7", "WW grade", "225 kg", "Adhesives, inks"),
  row("p071", "Paraffin Wax", "additives", "8002-74-2", "Fully refined", "Slabs", "Candles, coatings"),
  row("p072", "White Oil", "semi-commodity-chemicals", "8042-47-5", "Technical / Pharma", "165 kg", "Cosmetics, plastics"),
  row("p073", "Sodium Silicate", "commodity-chemicals", "1344-09-8", "2.2–3.2 ratio", "Tanker / IBC", "Detergents, foundry"),
  row("p074", "Hydrazine Hydrate", "specialty-chemicals", "7803-57-8", "80%", "200 kg", "Boiler treatment, agro"),
  row("p075", "Sodium Borohydride", "specialty-chemicals", "16940-66-2", "≥98%", "100 kg drums", "Reduction, pulp"),
  row("p076", "Thiourea", "intermediates", "62-56-6", "≥99.0%", "25 kg", "Dyes, pharma"),
  row("p077", "Paraformaldehyde", "intermediates", "30525-89-4", "96%", "25 kg", "Resins, agro"),
  row("p078", "Acetic Anhydride", "intermediates", "108-24-7", "≥98.5%", "200 kg", "Acetylation, cellulose"),
  row("p079", "Sodium Acetate", "semi-commodity-chemicals", "127-09-3", "Trihydrate / Anhy", "25 kg", "Food, dyeing"),
  row("p080", "Calcium Carbonate", "additives", "471-34-1", "Coated / Uncoated", "25 kg / bulk", "PVC, paints"),
];

export function productsByCategory(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === slug);
}

export function productInitial(name: string): string {
  const c = name.trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}
