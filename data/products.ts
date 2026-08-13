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

/** Packaging shorthands used across the line list */
const DRUM = "200 kg drums";
const DRUM_S = "Drums";
const BAG = "25 kg bags";
const BAG50 = "50 kg bags";
const BULK = "Bulk / ISO tank";
const BULK_DRUM = "Bulk & drums";
const IBC = "IBC / tanker";
const CAN = "Cans / carboys";

type Row = [
  name: string,
  categorySlug: string,
  cas?: string,
  purity?: string,
  packaging?: string,
  applications?: string,
];

/**
 * Line list transcribed from the Sannidhhi Chemical Industries product
 * catalogue (2025–26). Grades, packing and CAS references are indicative —
 * confirm against the COA/TDS issued with each consignment.
 */
const ROWS: Row[] = [
  // ── A ───────────────────────────────────────────────────────────────────
  ["Acetophenone", "intermediates", "98-86-2", "≥99%", DRUM, "Fragrance, pharma synthesis, resins"],
  ["Acrylamide", "intermediates", "79-06-1", "≥98%", BAG, "Polyacrylamide, water treatment"],
  ["Acrylic Acid", "commodity-chemicals", "79-10-7", "≥99.5%", IBC, "SAP, acrylates, emulsions"],
  ["Adipic Acid", "intermediates", "124-04-9", "≥99.7%", BAG50, "Nylon 66, polyurethanes, plasticisers"],
  ["Allyl Alcohol", "intermediates", "107-18-6", "≥99%", DRUM, "Glycerine, epoxy, allyl esters"],
  ["Alpha Naphthol", "intermediates", "90-15-3", "≥99%", BAG, "Agrochemicals, dyes, pharma"],
  ["Ammonium Bi Carbonate", "semi-commodity-chemicals", "1066-33-7", "Food / Tech", BAG, "Leavening, ceramics, rubber"],
  ["Ammonium Thiocyanate", "semi-commodity-chemicals", "1762-95-4", "≥98%", BAG, "Herbicides, photography, textiles"],
  ["Amino Ethyl Ethanolamine", "intermediates", "111-41-1", "≥99%", DRUM, "Fuel additives, chelates, resins"],
  ["Amino Guanidine Bicarbonate", "intermediates", "2582-30-1", "≥98%", BAG, "Pharma, blowing agents"],
  ["Aniline Oil", "intermediates", "62-53-3", "≥99.5%", DRUM, "MDI chains, rubber chemicals, dyes"],
  ["Ascorbic Acid", "specialty-chemicals", "50-81-7", "USP / Food", BAG, "Nutrition, antioxidant, food"],
  ["Allyl Chloride", "specialty-chemicals", "107-05-1", "≥99%", DRUM, "Epichlorohydrin, allyl derivatives"],
  ["Antimony Trioxide", "specialty-chemicals", "1309-64-4", "≥99.5%", BAG, "Flame retardant synergist, PET catalyst"],

  // ── B ───────────────────────────────────────────────────────────────────
  ["Benzaldehyde", "intermediates", "100-52-7", "≥99%", DRUM, "Flavour, fragrance, pharma"],
  ["Benzoic Acid", "additives", "65-85-0", "≥99.5%", BAG, "Preservatives, plasticisers, alkyds"],
  ["Benzophenone", "additives", "119-61-9", "≥99%", BAG, "UV absorber, photoinitiator, fragrance"],
  ["Benzylamine", "intermediates", "100-46-9", "≥99%", DRUM, "Pharma, agro, corrosion inhibitors"],
  ["Beta Naphthol", "intermediates", "135-19-3", "≥99%", BAG, "Dyes, pigments, antioxidants"],
  ["Bisphenol A", "intermediates", "80-05-7", "≥99.5%", BAG, "Epoxy resins, polycarbonate"],

  // ── C ───────────────────────────────────────────────────────────────────
  ["Catechol", "intermediates", "120-80-9", "≥99%", BAG, "Pharma, agro, antioxidants"],
  ["Chloroform", "solvents", "67-66-3", "≥99.5%", DRUM_S, "Extraction, HCFC-22, pharma"],
  ["Cyclohexanone", "solvents", "108-94-1", "≥99.5%", BULK_DRUM, "Nylon, adhesives, PVC cements"],

  // ── D ───────────────────────────────────────────────────────────────────
  ["D- Tartaric Acid", "semi-commodity-chemicals", "147-71-7", "≥99%", BAG, "Chiral resolution, pharma"],
  ["DL- Tartaric Acid", "semi-commodity-chemicals", "133-37-9", "≥99%", BAG, "Food acidulant, plating, pharma"],
  ["DL- Tartaric Acid Anhydrous", "semi-commodity-chemicals", "133-37-9", "Anhydrous", BAG, "Pharma, resolution chemistry"],
  ["L (+) Tartaric Acid", "semi-commodity-chemicals", "87-69-4", "≥99.5%", BAG, "Food, wine, pharma"],
  ["Di Acetone Alcohol", "solvents", "123-42-2", "≥99%", DRUM, "Coatings, inks, cleaning"],
  ["Di Cyclohexylamine", "intermediates", "101-83-7", "≥99%", DRUM, "Rubber accelerators, corrosion inhibitors"],
  ["Di Cyclohexylcarbodiimide (DCC)", "intermediates", "538-75-0", "≥99%", DRUM_S, "Peptide coupling, pharma"],
  ["Di Ethyl Ether", "solvents", "60-29-7", "≥99.5%", DRUM_S, "Extraction, pharma, starting fluid"],
  ["Di Ethyl Sulphate", "intermediates", "64-67-5", "≥99%", DRUM, "Ethylation, dyes, pharma"],
  ["Di Ethylamine", "intermediates", "109-89-7", "≥99.5%", DRUM, "Rubber chemicals, agro, pharma"],
  ["Di Ethanolamine (DEA)", "semi-commodity-chemicals", "111-42-2", "≥99%", "220 kg drums", "Gas treating, surfactants, herbicides"],
  ["Di Ethyl Carbonate", "intermediates", "105-58-8", "≥99.5%", DRUM, "Electrolytes, solvents, synthesis"],
  ["Di Ethyl Malonate", "intermediates", "105-53-3", "≥99%", DRUM, "Pharma, vitamins, flavours"],
  ["Di Ethylene Triamine (DETA)", "intermediates", "111-40-0", "≥99%", "180 kg drums", "Epoxy curing, chelates, lube additives"],
  ["Di Iso Propylamine", "intermediates", "108-18-9", "≥99%", DRUM, "Agro, rubber, LDA chemistry"],
  ["Di Methyl Amine 40%", "intermediates", "124-40-3", "40% solution", DRUM, "Surfactants, agro, pharma"],
  ["Di Methyl Carbonate", "intermediates", "616-38-6", "≥99.5%", DRUM, "Methylation, electrolytes, coatings"],
  ["Di Methyl Malonate", "intermediates", "108-59-8", "≥99%", DRUM, "Pharma, agro synthesis"],
  ["Di N Butylamine", "intermediates", "111-92-2", "≥99%", DRUM, "Rubber accelerators, corrosion inhibitors"],
  ["Di Propylene Glycol (DPG)", "semi-commodity-chemicals", "25265-71-8", "Industrial / LO", "215 kg drums", "Fragrance, UPR, cosmetics"],
  ["Di Tert Butyl Dicarbonate (Boc)", "intermediates", "24424-99-5", "≥99%", DRUM_S, "Peptide protection, pharma"],
  ["Dicyandiamide", "intermediates", "461-58-5", "≥99.5%", BAG, "Epoxy curing, flame retardants, resins"],
  ["Dimethylamino Propylamine (DMAPA)", "intermediates", "109-55-7", "≥99%", DRUM, "Betaine surfactants, epoxy curing"],
  ["Decabromodiphenyl Ethane (DBDE)", "specialty-chemicals", "84852-53-9", "≥98%", BAG, "Flame retardant for plastics, textiles"],
  ["Decabromodiphenyl Oxide", "specialty-chemicals", "1163-19-5", "≥98%", BAG, "Flame retardant masterbatches"],
  ["Dibasic Ester (DBE)", "specialty-chemicals", "95481-62-2", "Technical", DRUM, "Paint stripping, coatings, cleaners"],
  ["Diglyme", "solvents", "111-96-6", "≥99%", BULK_DRUM, "Grignard chemistry, pharma, electrolytes"],
  ["Dimethyl Terephthalate (DMT)", "intermediates", "120-61-6", "≥99.8%", BAG, "Polyester, PBT, plasticisers"],
  ["Dimethyl-5-Sulfoisophthalate Sodium Salt", "specialty-chemicals", "3965-55-7", "≥98%", BAG, "Cationic dyeable polyester"],
  ["Diisopropyl Ether (DIPE)", "solvents", "108-20-3", "≥99%", DRUM_S, "Extraction, fuel blending, pharma"],
  ["Dimethyl Acetamide (DMAC)", "solvents", "127-19-5", "≥99.9%", DRUM_S, "Spandex, pharma, films"],
  ["Dimethyl Formamide (DMF)", "solvents", "68-12-2", "≥99.9%", DRUM_S, "PU synthetic leather, fibres, pharma"],
  ["Dimethyl Sulfoxide (DMSO)", "solvents", "67-68-5", "≥99.9%", "225 kg drums", "Pharma, electronics, agro"],
  ["1,2-Dimethoxyethane (Monoglyme)", "solvents", "110-71-4", "≥99%", BULK_DRUM, "Battery electrolytes, Grignard reactions"],

  // ── E ───────────────────────────────────────────────────────────────────
  ["Epichlorohydrin (ECH)", "intermediates", "106-89-8", "≥99.5%", "240 kg drums", "Epoxy resins, wet-strength resins"],
  ["Epoxy Resin", "polymers-resins", "25068-38-6", "Liquid / Solid", DRUM, "Coatings, composites, adhesives"],
  ["Ethyl Aceto Acetate", "intermediates", "141-97-9", "≥99%", DRUM, "Pharma, dyes, agro"],
  ["Ethyl Acrylate", "intermediates", "140-88-5", "≥99.5%", DRUM, "Acrylic emulsions, adhesives, textiles"],
  ["Ethyl Chloro Formate", "intermediates", "541-41-3", "≥99%", DRUM_S, "Carbamates, pharma synthesis"],
  ["Ethyl Cyano Acetate", "intermediates", "105-56-6", "≥99%", DRUM, "Pharma, agro, dyes"],
  ["EDTA Acid", "additives", "60-00-4", "99.0%", BAG, "Chelation, detergents, water treatment"],
  ["EDTA 2Na (Disodium)", "additives", "139-33-3", "≥99%", BAG, "Chelation, cosmetics, food"],
  ["EDTA Tri Sodium", "additives", "150-38-9", "≥99%", BAG, "Chelation, cleaning, textiles"],
  ["Ethylene Diamine (EDA)", "intermediates", "107-15-3", "≥99.5%", "180 kg drums", "Chelates, resins, fungicides"],
  ["Ethylene Di Chloride (EDC)", "solvents", "107-06-2", "≥99.5%", BULK, "VCM, degreasing, intermediates"],
  ["Ethylene Vinyl Acetate (EVA)", "polymers-resins", "24937-78-8", "VA 18–28%", BAG, "Hot melt adhesives, footwear, films"],

  // ── F ───────────────────────────────────────────────────────────────────
  ["Fluorobenzene", "intermediates", "462-06-6", "≥99.5%", DRUM_S, "Pharma, agro, fine chemicals"],
  ["Formamide", "intermediates", "75-12-7", "≥99.5%", DRUM, "Pharma, plasticiser, solvent"],
  ["Formic Acid 85%", "commodity-chemicals", "64-18-6", "85%", "35 kg / IBC", "Leather, textiles, rubber latex"],
  ["Formic Acid 99%", "commodity-chemicals", "64-18-6", "99%", "35 kg / IBC", "Silage, pharma, dyeing"],
  ["Fumaric Acid", "intermediates", "110-17-8", "≥99.5%", BAG, "UPR resins, food acidulant"],
  ["Furfuryl Alcohol", "intermediates", "98-00-0", "≥98%", DRUM, "Foundry resins, corrosion coatings"],

  // ── G ───────────────────────────────────────────────────────────────────
  ["Glycerine", "semi-commodity-chemicals", "56-81-5", "99.5% / 99.7% USP", "250 kg drums", "Personal care, UPR, pharma"],
  ["Gluconic Acid", "additives", "526-95-4", "50% solution", DRUM, "Concrete admixtures, cleaning"],
  ["Glutaraldehyde 50%", "specialty-chemicals", "111-30-8", "50%", DRUM, "Biocide, leather tanning, disinfection"],
  ["Glycine", "semi-commodity-chemicals", "56-40-6", "Tech / Food", BAG, "Agro, food, pharma"],
  ["Glyoxal 40%", "intermediates", "107-22-2", "40%", DRUM, "Textile finishing, crosslinkers, paper"],
  ["Gum Rosin", "specialty-chemicals", "8050-09-7", "WW / X grade", BAG, "Adhesives, inks, sizing"],

  // ── H ───────────────────────────────────────────────────────────────────
  ["Hexamethyldisilazane (HMDS)", "specialty-chemicals", "999-97-3", "≥99%", CAN, "Silylation, electronics, pharma"],
  ["Hexamine", "intermediates", "100-97-0", "≥99%", BAG, "Phenolic resins, rubber, pharma"],
  ["Hexylene Glycol", "semi-commodity-chemicals", "107-41-5", "≥99%", DRUM, "Coatings, cosmetics, hydraulic fluids"],
  ["Hydrazine Hydrate 80%", "specialty-chemicals", "7803-57-8", "80%", DRUM, "Boiler treatment, blowing agents, agro"],
  ["Hydrazine Hydrate 100%", "specialty-chemicals", "7803-57-8", "100%", DRUM, "Pharma, polymerisation, agro"],
  ["Hydrobromic Acid 48%", "commodity-chemicals", "10035-10-6", "48%", CAN, "Bromides, pharma, catalysis"],
  ["Hydrogen Peroxide", "commodity-chemicals", "7722-84-1", "35% / 50%", IBC, "Bleaching, oxidation, effluent"],
  ["Hydroquinone", "additives", "123-31-9", "≥99.5%", BAG, "Polymerisation inhibitor, photo, rubber"],
  ["Hydroxylamine HCl", "intermediates", "5470-11-1", "≥99%", BAG, "Oximes, pharma, photography"],
  ["Hydroxylamine Sulphate", "intermediates", "10039-54-0", "≥99%", BAG, "Caprolactam, agro, pharma"],
  ["Heptane", "solvents", "142-82-5", "≥99%", DRUM_S, "Extraction, adhesives, polymerisation"],
  ["Heptane S", "solvents", undefined, "Technical", DRUM_S, "Adhesives, rubber solutions"],
  ["1,6-Hexanediol (Flakes)", "intermediates", "629-11-8", "≥99%", BAG, "Polyesters, PU, coatings"],

  // ── I ───────────────────────────────────────────────────────────────────
  ["Imidazole", "intermediates", "288-32-4", "≥99%", BAG, "Epoxy curing, pharma, corrosion inhibitors"],
  ["2 Methyl Imidazole", "intermediates", "693-98-1", "≥99%", BAG, "Epoxy accelerator, pharma"],
  ["Iodine", "specialty-chemicals", "7553-56-2", "≥99.5%", "Fibre drums", "Pharma, disinfectants, catalysts"],
  ["Isobutanol", "solvents", "78-83-1", "≥99.5%", BULK_DRUM, "Coatings, esters, extraction"],
  ["Iso Propyl Alcohol (IPA)", "solvents", "67-63-0", "≥99.7%", BULK_DRUM, "Electronics, pharma, sanitisation"],
  ["Isopropyl Acetate", "solvents", "108-21-4", "≥99%", DRUM_S, "Inks, coatings, pharma"],
  ["Isobutyraldehyde", "intermediates", "78-84-2", "≥99%", DRUM, "Neopentyl glycol, agro, resins"],
  ["Isophorone", "solvents", "78-59-1", "≥99%", DRUM, "High-solid coatings, inks, adhesives"],
  ["Isophthalic Acid", "intermediates", "121-91-5", "≥99.5%", BAG, "UPR, PET copolymers, coatings"],
  ["Isovaleraldehyde", "intermediates", "590-86-3", "≥97%", DRUM_S, "Flavour, fragrance, pharma"],
  ["Iso Butyric Acid", "intermediates", "79-31-2", "≥99%", DRUM, "Esters, pharma, flavour"],
  ["Isopropanol Amine (MIPA)", "semi-commodity-chemicals", "78-96-6", "≥99%", DRUM, "Surfactants, agro, metalworking"],

  // ── J ───────────────────────────────────────────────────────────────────
  ["Jeffamine D 230", "specialty-chemicals", "9046-10-0", "Polyetheramine", DRUM, "Epoxy curing, composites, coatings"],

  // ── L ───────────────────────────────────────────────────────────────────
  ["Lactose", "semi-commodity-chemicals", "63-42-3", "Pharma / Food", BAG, "Excipient, food, fermentation"],
  ["Lithium Carbonate", "specialty-chemicals", "554-13-2", "≥99% / Battery", BAG, "Batteries, glass, pharma"],
  ["Lithium Hydroxide", "specialty-chemicals", "1310-65-2", "Monohydrate", BAG, "Battery cathodes, greases"],
  ["Liquid Light Paraffin", "specialty-chemicals", "8042-47-5", "Technical / Pharma", "165 kg drums", "Cosmetics, plastics, textiles"],

  // ── M ───────────────────────────────────────────────────────────────────
  ["Maleic Anhydride", "intermediates", "108-31-6", "≥99.5%", BAG, "UPR, additives, agro"],
  ["Malonic Acid", "intermediates", "141-82-2", "≥99%", BAG, "Pharma, flavours, adhesives"],
  ["Malononitrile", "intermediates", "109-77-3", "≥99%", DRUM_S, "Pharma, dyes, agro"],
  ["Melamine", "additives", "108-78-1", "≥99.8%", BAG, "Laminates, MF resins, flame retardants"],
  ["Meta Cresol", "intermediates", "108-39-4", "≥99%", DRUM, "Pharma, agro, antioxidants"],
  ["Methacrylic Acid", "intermediates", "79-41-4", "≥99.5%", DRUM, "Acrylic polymers, coatings, adhesives"],
  ["Methane Sulphonic Acid (MSA)", "specialty-chemicals", "75-75-2", "70% / 99%", DRUM, "Electroplating, catalysis, cleaning"],
  ["Methane Sulphonyl Chloride", "intermediates", "124-63-0", "≥99.5%", DRUM_S, "Pharma, agro, mesylates"],
  ["Methyl Aceto Acetate", "intermediates", "105-45-3", "≥99%", DRUM, "Pharma, agro, pigments"],
  ["Methyl Acrylate", "intermediates", "96-33-3", "≥99.5%", DRUM, "Acrylic fibres, emulsions, adhesives"],
  ["Methyl Chloro Formate", "intermediates", "79-22-1", "≥99%", DRUM_S, "Carbamates, pharma, agro"],
  ["Methyl Cyano Acetate", "intermediates", "105-34-0", "≥99%", DRUM, "Pharma, dyes, agro"],
  ["Methyl Cyclohexane", "solvents", "108-87-2", "≥99%", DRUM_S, "Correction fluids, rubber, extraction"],
  ["Methylene Diphenyl Diisocyanate (MDI)", "intermediates", "101-68-8", "Polymeric / Pure", "250 kg drums", "PU foams, adhesives, binders"],
  ["Methyl Methacrylate (MMA)", "intermediates", "80-62-6", "≥99.8%", DRUM, "PMMA, coatings, adhesives"],
  ["Mono Methylamine", "intermediates", "74-89-5", "40% aq.", DRUM, "Agro, pharma, surfactants"],
  ["Monoethylamine", "intermediates", "75-04-7", "70% aq.", DRUM, "Agro, rubber, dyes"],
  ["Mono Chloro Benzene (MCB)", "solvents", "108-90-7", "≥99.9%", DRUM, "Nitrochlorobenzene, agro, solvent"],
  ["Mono Ethanol Amine (MEA)", "semi-commodity-chemicals", "141-43-5", "≥99%", DRUM, "Gas sweetening, surfactants, detergents"],
  ["Mono Ethylene Glycol (MEG)", "commodity-chemicals", "107-21-1", "Fibre grade", BULK, "Polyester, coolants, PET"],
  ["Mono Iso Propylamine 70%", "intermediates", "75-31-0", "70%", DRUM, "Herbicides, rubber, pharma"],
  ["Mono Iso Propylamine 99%", "intermediates", "75-31-0", "99%", DRUM, "Glyphosate, agro, pharma"],
  ["Morpholine", "intermediates", "110-91-8", "≥99%", DRUM, "Boiler treatment, rubber accelerators"],
  ["MP Diol Glycol (2-Methyl-1,3-Propanediol)", "semi-commodity-chemicals", "2163-42-0", "≥99.5%", DRUM, "Polyesters, coatings, PU"],
  ["Methanol", "solvents", "67-56-1", "≥99.9%", BULK, "Formaldehyde, biodiesel, solvent"],
  ["Methylene Chloride (MDC)", "solvents", "75-09-2", "≥99.9%", BULK_DRUM, "Paint stripping, pharma, foam blowing"],
  ["Methyl Iso Butyl Ketone (MIBK)", "solvents", "108-10-1", "≥99.5%", DRUM_S, "Coatings, rubber chemicals, extraction"],
  ["Methyl Tertiary Butyl Ether (MTBE)", "solvents", "1634-04-4", "≥99.5%", DRUM_S, "Fuel blending, pharma, extraction"],
  ["2 Methyl THF", "solvents", "96-47-9", "≥99%", DRUM_S, "Grignard chemistry, pharma"],

  // ── N ───────────────────────────────────────────────────────────────────
  ["N- Ethyl Piperazine", "intermediates", "5308-25-8", "≥99%", DRUM_S, "Pharma, agro, epoxy curing"],
  ["N- Methyl Piperazine", "intermediates", "109-01-3", "≥99%", DRUM_S, "Pharma, agro intermediates"],
  ["N- Butyric Acid", "intermediates", "107-92-6", "≥99%", DRUM, "Esters, flavours, animal nutrition"],
  ["N- Butyl Methacrylate", "intermediates", "97-88-1", "≥99%", DRUM, "Acrylic coatings, adhesives"],
  ["N- Butanol", "solvents", "71-36-3", "≥99.5%", BULK_DRUM, "Butyl acetate, coatings, plasticisers"],
  ["Napthalene Crude", "intermediates", "91-20-3", "Crude", BAG50, "Phthalic anhydride, dispersants"],
  ["Napthalene Refined", "intermediates", "91-20-3", "Refined", BAG50, "Dyes, tanning agents, moth repellent"],
  ["Neo Pentyl Glycol (NPG)", "semi-commodity-chemicals", "126-30-7", "≥99%", BAG, "Powder coatings, polyesters, lubricants"],
  ["Nitromethane", "solvents", "75-52-5", "≥99%", DRUM_S, "Pharma, stabiliser, fuel"],
  ["Nonyl Phenol", "additives", "25154-52-3", "≥99%", DRUM, "Surfactants, antioxidants, lube additives"],
  ["Nonyl Phenol Ethoxylate", "additives", "9016-45-9", "NP-9 / NP-10", DRUM, "Emulsifiers, textile auxiliaries"],
  ["N- Hexane", "solvents", "110-54-3", "≥99%", BULK_DRUM, "Edible oil extraction, adhesives"],
  ["N- Heptane", "solvents", "142-82-5", "≥99%", DRUM_S, "Adhesives, laboratory, extraction"],
  ["N- Pentane", "solvents", "109-66-0", "≥99%", DRUM_S, "Foam blowing, extraction"],
  ["N- Propanol", "solvents", "71-23-8", "≥99.5%", DRUM_S, "Inks, cosmetics, cleaning"],
  ["N- Propyl Acetate", "solvents", "109-60-4", "≥99%", DRUM_S, "Inks, coatings, flexo printing"],
  ["N-Methyl-2-Pyrrolidone (NMP)", "solvents", "872-50-4", "≥99.9%", DRUM, "Li-ion binders, coatings, pharma"],

  // ── O ───────────────────────────────────────────────────────────────────
  ["Oxone PS - 16", "specialty-chemicals", "70693-62-8", "Technical", BAG, "Oxidation, pool care, etching"],
  ["Ortho Chloro Benzaldehyde", "intermediates", "89-98-5", "≥99%", DRUM_S, "Pharma, dyes, agro"],

  // ── P ───────────────────────────────────────────────────────────────────
  ["Para Tertiary Butyl Phenol", "intermediates", "98-54-4", "≥99%", BAG, "Phenolic resins, antioxidants"],
  ["Para Tertiary Octyl Phenol", "intermediates", "140-66-9", "≥99%", BAG, "Tackifier resins, surfactants"],
  ["Para Toluene Sulfonyl Chloride", "intermediates", "98-59-9", "≥99%", BAG, "Pharma, tosylates, agro"],
  ["Paraformaldehyde 91%", "intermediates", "30525-89-4", "91%", BAG, "Resins, agro, disinfectants"],
  ["Paraformaldehyde 96%", "intermediates", "30525-89-4", "96%", BAG, "Resins, pharma, biocides"],
  ["Pentaerythritol 98%", "intermediates", "115-77-5", "Mono 98%", BAG, "Alkyds, PVC stabilisers, explosives"],
  ["Perchloroethylene", "solvents", "127-18-4", "≥99.9%", BULK_DRUM, "Dry cleaning, metal degreasing"],
  ["Phenol", "solvents", "108-95-2", "≥99.5%", BULK_DRUM, "Bisphenol A, resins, pharma"],
  ["Phosphoric Acid (Food Grade)", "commodity-chemicals", "7664-38-2", "85% Food", "35 kg / IBC", "Beverages, food, pharma"],
  ["Phosphoric Acid (Technical)", "commodity-chemicals", "7664-38-2", "85% Tech", "35 kg / IBC", "Metal treatment, fertilisers"],
  ["Phosphorus Oxychloride", "intermediates", "10025-87-3", "≥99%", DRUM_S, "Pharma, agro, flame retardants"],
  ["Phosphorus Pentoxide", "intermediates", "1314-56-3", "≥98%", BAG, "Drying agent, phosphates, synthesis"],
  ["Piperazine Anhydrous", "intermediates", "110-85-0", "≥99%", BAG, "Pharma, corrosion inhibitors, agro"],
  ["Poly Vinyl Alcohol (PVA)", "polymers-resins", "9002-89-5", "Partially / Fully hydrolysed", BAG, "Adhesives, emulsions, textile sizing"],
  ["Polyethylene Glycol (PEG)", "polymers-resins", "25322-68-3", "PEG 200–6000", DRUM, "Pharma, cosmetics, lubricants"],
  ["Polypropylene Glycol 1000D", "polymers-resins", "25322-69-4", "MW ~1000", DRUM, "Polyurethanes, defoamers"],
  ["Polypropylene Glycol 2000D", "polymers-resins", "25322-69-4", "MW ~2000", DRUM, "Polyurethanes, lubricants"],
  ["Polytetramethylene Ether Glycol (PTMEG)", "polymers-resins", "25190-06-1", "PTMEG 1000/2000", DRUM, "Spandex, TPU, elastomers"],
  ["Polyethylene Terephthalate (PET Resin)", "polymers-resins", "25038-59-9", "Bottle / Film grade", BAG, "Bottles, films, fibres"],
  ["Polyvinyl Chloride Resin (PVC Resin)", "polymers-resins", "9002-86-2", "K-57 / K-67", BAG, "Pipes, profiles, films"],
  ["Potassium Bi Carbonate", "semi-commodity-chemicals", "298-14-6", "Food / Tech", BAG, "Food, fire extinguishers, agro"],
  ["Potassium Carbonate (Granular)", "semi-commodity-chemicals", "584-08-7", "≥99%", BAG, "Glass, soaps, pharma"],
  ["Potassium Carbonate (Powder)", "semi-commodity-chemicals", "584-08-7", "≥99%", BAG, "Glass, dyes, food"],
  ["Potassium Permanganate", "specialty-chemicals", "7722-64-7", "≥99%", "50 kg drums", "Water treatment, oxidation, denim"],
  ["Potassium Sorbate", "specialty-chemicals", "24634-61-5", "Food grade", BAG, "Food preservative, personal care"],
  ["Phenyl Chloro Formate", "intermediates", "1885-14-9", "≥99%", DRUM_S, "Pharma, carbamates, agro"],
  ["Propionaldehyde", "intermediates", "123-38-6", "≥97%", DRUM_S, "Propionic acid, agro, pharma"],
  ["Propionic Acid", "additives", "79-09-4", "≥99.5%", DRUM, "Feed preservation, herbicides, food"],
  ["Propionic Anhydride", "intermediates", "123-62-6", "≥99%", DRUM, "Pharma, agro, cellulose esters"],
  ["Propargyl Alcohol", "intermediates", "107-19-7", "≥99%", DRUM_S, "Corrosion inhibitors, pharma, plating"],
  ["Propylene Glycol (Technical)", "semi-commodity-chemicals", "57-55-6", "Industrial", "215 kg drums", "UPR, antifreeze, coatings"],
  ["Propylene Glycol (USP)", "semi-commodity-chemicals", "57-55-6", "USP / EP", "215 kg drums", "Food, pharma, personal care"],
  ["Propylene Carbonate", "solvents", "108-32-7", "≥99.5%", BULK_DRUM, "Electrolytes, coatings, cleaning"],
  ["Phthalic Anhydride", "intermediates", "85-44-9", "≥99.8%", BAG, "Plasticisers, alkyds, UPR"],
  ["Pyridine", "solvents", "110-86-1", "≥99.5%", DRUM, "Pharma, agro, denaturant"],
  ["Pyrrolidine", "intermediates", "123-75-1", "≥99%", DRUM_S, "Pharma, agro synthesis"],
  ["Pyrrolidine Pure", "specialty-chemicals", "123-75-1", "≥99.5%", DRUM_S, "Pharma-grade synthesis"],
  ["Poly Carboxylate Super Plasticiser – Polyether (HPEG)", "additives", undefined, "Macromonomer", DRUM, "Concrete admixtures, PCE synthesis"],
  ["Poly Phosphoric Acid 115% (PPA)", "commodity-chemicals", "8017-16-1", "115% min.", IBC, "Catalysis, bitumen modification"],
  ["Poly Phosphoric Acid 118% (PPA)", "commodity-chemicals", "8017-16-1", "118%", IBC, "Acylation, fertilisers, catalysis"],
  ["Paraffin Wax", "specialty-chemicals", "8002-74-2", "Fully refined", "Slabs / bags", "Candles, coatings, rubber"],

  // ── R ───────────────────────────────────────────────────────────────────
  ["Resorcinol", "intermediates", "108-46-3", "≥99.5%", BAG, "Tyre adhesives, resins, UV absorbers"],
  ["(R)-1-Phenylethylamine", "specialty-chemicals", "3886-69-9", "≥99%", CAN, "Chiral resolution, pharma"],

  // ── S ───────────────────────────────────────────────────────────────────
  ["Sodium Borohydride (Granular)", "specialty-chemicals", "16940-66-2", "≥98%", "Fibre drums", "Reduction, pulp bleaching, pharma"],
  ["Sodium Borohydride (Powder)", "specialty-chemicals", "16940-66-2", "≥98%", "Fibre drums", "Pharma reduction, metal recovery"],
  ["Sodium Cyanide", "specialty-chemicals", "143-33-9", "≥98%", "Steel drums", "Gold leaching, electroplating"],
  ["Sodium Gluconate", "additives", "527-07-1", "≥98%", BAG, "Concrete retarder, cleaning, chelation"],
  ["Sodium Ligno Sulphonate", "additives", "8061-51-6", "Technical", BAG, "Concrete admixtures, dust control"],
  ["Sodium Metabisulphite", "commodity-chemicals", "7681-57-4", "≥97%", BAG50, "Water treatment, food, textiles"],
  ["Sodium Metal", "specialty-chemicals", "7440-23-5", "≥99.5%", "Sealed drums", "Reduction, alloys, synthesis"],
  ["Sodium Methoxide Powder", "intermediates", "124-41-4", "≥98%", "Fibre drums", "Biodiesel, pharma, catalysis"],
  ["Sodium Nitrate", "commodity-chemicals", "7631-99-4", "≥99%", BAG50, "Glass, fertiliser, heat transfer"],
  ["Sodium Nitrite", "commodity-chemicals", "7632-00-0", "≥99%", BAG50, "Dyes, corrosion inhibition, curing"],
  ["Sodium Thiocyanate", "semi-commodity-chemicals", "540-72-7", "≥98%", BAG, "Acrylic fibre, agro, photography"],
  ["Sodium Tri Poly Phosphate (STPP)", "additives", "7758-29-4", "≥94%", BAG50, "Detergents, food, ceramics"],
  ["Sodium Benzoate", "additives", "532-32-1", "Food grade", BAG, "Preservative, corrosion inhibitor"],
  ["Sodium Formate", "semi-commodity-chemicals", "141-53-7", "≥95%", BAG50, "Leather, de-icing, drilling"],
  ["Sodium Sulphate", "commodity-chemicals", "7757-82-6", "≥99%", BAG50, "Detergents, glass, textiles"],
  ["Sodium Perborate Tetrahydrate", "specialty-chemicals", "10486-00-7", "≥98%", BAG, "Bleaching, detergents, disinfection"],
  ["Sodium Percarbonate", "specialty-chemicals", "15630-89-4", "Coated / Uncoated", BAG, "Oxygen bleach, cleaning"],
  ["Sodium Persulphate", "specialty-chemicals", "7775-27-1", "≥98%", BAG, "Polymer initiator, PCB etching"],
  ["Sodium Silicofluoride (SSF)", "specialty-chemicals", "16893-85-9", "≥98%", BAG, "Water fluoridation, glass, ceramics"],
  ["Sebacic Acid", "specialty-chemicals", "111-20-6", "≥99%", BAG, "Nylon 610, plasticisers, lubricants"],
  ["Succinic Acid", "specialty-chemicals", "110-15-6", "≥99%", BAG, "Resins, food, pharma"],
  ["Sulfolane Anhydrous", "solvents", "126-33-0", "≥99.5%", BULK_DRUM, "Aromatic extraction, gas treating"],

  // ── T ───────────────────────────────────────────────────────────────────
  ["Tertiary Butanol", "solvents", "75-65-0", "≥99.5%", DRUM, "MTBE, pharma, denaturant"],
  ["Tertiary Butylamine", "intermediates", "75-64-9", "≥99.5%", DRUM_S, "Rubber accelerators, agro, pharma"],
  ["Tertiary Butyl Acetate", "solvents", "540-88-5", "≥99%", DRUM_S, "Low-VOC coatings, thinners"],
  ["Tetrahydrofuran (THF)", "solvents", "109-99-9", "≥99.9%", DRUM_S, "PTMEG, PVC cements, pharma"],
  ["Trichloroethylene", "solvents", "79-01-6", "≥99.5%", DRUM_S, "Metal degreasing, extraction"],
  ["Thiophenol", "intermediates", "108-98-5", "≥99%", DRUM_S, "Pharma, agro, polymer additives"],
  ["Thiourea", "intermediates", "62-56-6", "≥99%", BAG, "Dyes, pharma, metal refining"],
  ["Toluene Di Isocyanate (TDI)", "intermediates", "584-84-9", "80/20", "250 kg drums", "Flexible PU foam, coatings"],
  ["Tri Ethyl Phosphate", "additives", "78-40-0", "≥99%", DRUM, "Flame retardant, plasticiser, catalyst"],
  ["Tri Ethyl Amine (TEA)", "intermediates", "121-44-8", "≥99.5%", "140 kg drums", "Catalysis, quaternaries, pharma"],
  ["Tri Ethyl Ortho Formate", "intermediates", "122-51-0", "≥98%", DRUM_S, "Pharma, dyes, fine chemicals"],
  ["Tri Ethylene Pentamine (TEPA)", "intermediates", "112-57-2", "Technical", DRUM, "Epoxy curing, lube additives, fabric softeners"],
  ["Triethylene Tetramine (TETA)", "intermediates", "112-24-3", "Technical", DRUM, "Epoxy curing, chelates, corrosion inhibitors"],
  ["Tri Methyl Ortho Acetate", "intermediates", "1445-45-0", "≥98%", DRUM_S, "Pharma, agro synthesis"],
  ["Tri Methyl Ortho Formate", "intermediates", "149-73-5", "≥98%", DRUM_S, "Pharma, dyes, fine chemicals"],
  ["Tri Methylamine", "intermediates", "75-50-3", "30% aq.", DRUM, "Choline chloride, quats, agro"],
  ["Tri N Butylamine", "intermediates", "102-82-9", "≥99%", DRUM, "Pharma, corrosion inhibitors, dyes"],
  ["Triethanolamine 85% & 99%", "semi-commodity-chemicals", "102-71-6", "85% / 99%", "220 kg drums", "Cement grinding, surfactants, metalworking"],
  ["Triphenyl Phosphine", "specialty-chemicals", "603-35-0", "≥99%", BAG, "Wittig chemistry, catalysis, pharma"],
  ["Triphosgene (Bis Trichloro Methyl Carbonate)", "intermediates", "32315-10-9", "≥99%", "Fibre drums", "Phosgenation, pharma, agro"],
  ["Tri Mellitic Anhydride (TMA)", "specialty-chemicals", "552-30-7", "≥99%", BAG, "TOTM plasticisers, PA imides, coatings"],
  ["Tri Octyl Tri Mellitate (TOTM)", "specialty-chemicals", "3319-31-1", "≥99%", DRUM, "High-temp wire & cable plasticiser"],
  ["Tri Iso Propanol Amine", "specialty-chemicals", "122-20-3", "≥98%", DRUM, "Cement grinding aids, surfactants"],
  ["Trimethylolpropane (TMP)", "specialty-chemicals", "77-99-6", "≥99%", BAG, "Alkyds, PU, synthetic lubricants"],
  ["Triacetin", "specialty-chemicals", "102-76-1", "≥99%", DRUM, "Plasticiser, tobacco, flavours"],
  ["Tetra Potassium Pyro Phosphate (TKPP)", "specialty-chemicals", "7320-34-5", "≥96%", BAG, "Detergents, food, ceramics"],
  ["Tetrasodium Pyrophosphate (TSPP)", "specialty-chemicals", "7722-88-5", "Technical", BAG, "Detergents, water treatment, food"],
  ["Titanium Dioxide", "specialty-chemicals", "13463-67-7", "Rutile / Anatase", BAG, "Paints, plastics, inks"],
  ["Toluene", "solvents", "108-88-3", "≥99.5%", BULK_DRUM, "Paints, TDI, adhesives"],
  ["1,2,4 H Triazole", "intermediates", "288-88-0", "≥99%", BAG, "Agro fungicides, pharma"],

  // ── U ───────────────────────────────────────────────────────────────────
  ["Urea (Technical Grade)", "commodity-chemicals", "57-13-6", "Prilled / Granular", BAG50, "AdBlue, resins, fertiliser"],

  // ── V ───────────────────────────────────────────────────────────────────
  ["Vinyl Acetate Monomer (VAM)", "commodity-chemicals", "108-05-4", "≥99.9%", BULK, "PVA emulsions, EVA, adhesives"],

  // ── X ───────────────────────────────────────────────────────────────────
  ["Xylene (Mix)", "solvents", "1330-20-7", "Mixed isomers", BULK_DRUM, "Paints, thinners, resins"],
  ["Xylene (Ortho)", "solvents", "95-47-6", "≥98%", BULK_DRUM, "Phthalic anhydride, agro"],
  ["Xanthan Gum", "specialty-chemicals", "11138-66-2", "Food / Oil drilling", BAG, "Thickener, drilling fluids, food"],

  // ── Z ───────────────────────────────────────────────────────────────────
  ["Zinc Borate", "specialty-chemicals", "1332-07-6", "≥98%", BAG, "Flame retardant, smoke suppressant"],

  // ── Numeric & misc ──────────────────────────────────────────────────────
  ["1 - Bromo 3- Chloropropane", "intermediates", "109-70-6", "≥99%", DRUM_S, "Pharma, agro intermediates"],
  ["1,4- Butanediol (BDO)", "intermediates", "110-63-4", "≥99.5%", DRUM, "THF, PBT, PU elastomers"],
  ["1,4 Dioxane", "solvents", "123-91-1", "≥99%", DRUM_S, "Laboratory, pharma, stabiliser"],
  ["2 Butyne 1,4 Diol", "intermediates", "110-65-6", "≥99%", DRUM_S, "Plating brighteners, BDO route"],
  ["2- Ethyl Hexyl Acrylate", "intermediates", "103-11-7", "≥99.5%", DRUM, "PSA adhesives, coatings, emulsions"],
  ["2- Hydroxy Ethyl Methacrylate (HEMA)", "intermediates", "868-77-9", "≥99%", DRUM, "Coatings, dental, contact lenses"],
  ["2,2-Di Methoxy Propane", "intermediates", "77-76-9", "≥98%", DRUM_S, "Drying agent, pharma, ketals"],
  ["2,4-Dichloro Benzyl Chloride", "intermediates", "94-99-5", "≥98%", DRUM_S, "Agro, pharma synthesis"],
  ["2-Mercaptoethanol", "intermediates", "60-24-2", "≥99%", DRUM_S, "Pharma, leather, polymer additives"],
  ["4-Hydroxy Benzaldehyde", "intermediates", "123-08-0", "≥99%", BAG, "Pharma, fragrance, agro"],
  ["4-Dimethyl Amino Pyridine (DMAP)", "specialty-chemicals", "1122-58-3", "≥99%", "Fibre drums", "Acylation catalyst, pharma"],

  // ── Additional bulk solvents ────────────────────────────────────────────
  ["Acetone", "solvents", "67-64-1", "≥99.5%", BULK_DRUM, "Coatings, pharma, extraction"],
  ["Acetic Acid", "solvents", "64-19-7", "≥99.8%", BULK_DRUM, "Esters, textiles, food"],
  ["Acetonitrile", "solvents", "75-05-8", "HPLC / Tech", DRUM_S, "HPLC, pharma, extraction"],
  ["Acrylonitrile", "solvents", "107-13-1", "≥99.5%", BULK, "ABS, acrylic fibre, nitrile rubber"],
  ["Butyl Acetate", "solvents", "123-86-4", "≥99.5%", BULK_DRUM, "NC lacquers, flexo inks, coatings"],
  ["Butyl Acrylate", "solvents", "141-32-2", "≥99.5%", DRUM_S, "Emulsions, adhesives, textiles"],
  ["Butyl Carbitol", "solvents", "112-34-5", "≥99%", DRUM_S, "Coatings, brake fluids, inks"],
  ["Butyl Carbitol Acetate", "solvents", "124-17-4", "≥99%", DRUM_S, "Coil coatings, inks, cleaners"],
  ["Butyl Glycol / Cellosolve", "solvents", "111-76-2", "≥99.5%", BULK_DRUM, "Coatings, cleaners, inks"],
  ["Butyl Cellosolve Acetate", "solvents", "112-07-2", "≥99%", DRUM_S, "Coatings, inks, lacquers"],
  ["Ethyl Acetate", "solvents", "141-78-6", "≥99.5%", BULK_DRUM, "Inks, coatings, pharma, adhesives"],
];

/**
 * Alternate spellings, catalogue phrasings and trade abbreviations. Keyed by the
 * generated product id so buyers searching a familiar name still land on the item.
 */
const ALIASES: Record<string, string[]> = {
  "methylene-chloride-mdc": ["Methylene Di Chloride", "Dichloromethane", "DCM", "MDC"],
  "diisopropyl-ether-dipe": ["Disopropyl Ether", "DIPE"],
  "methyl-iso-butyl-ketone-mibk": ["Methy Iso Butyl Ketone", "MIBK", "Hexone"],
  "di-tert-butyl-dicarbonate-boc": ["Di Tret Butyl Dicarbonate", "Boc Anhydride", "Boc2O"],
  "phosphorus-pentoxide": ["Phosphorus Pentaoxide", "P2O5"],
  "2-hydroxy-ethyl-methacrylate-hema": ["2 Hydroxy Ethyl Mathacrylate", "HEMA"],
  "urea-technical-grade": ["Technical Grade Prilled Urea", "Prilled Urea"],
  "polyethylene-terephthalate-pet-resin": ["Polyethelyne Terephthalate", "PET"],
  "triphosgene-bis-trichloro-methyl-carbonate": ["BTC", "Bis Trichloro Methyl Carbonate"],
  "iso-propyl-alcohol-ipa": ["Isopropanol", "IPA", "2-Propanol"],
  "n-butanol": ["Normal Butanol", "NBA", "1-Butanol"],
  "mono-ethylene-glycol-meg": ["MEG", "Ethylene Glycol"],
  "di-ethanolamine-dea": ["DEA", "Diethanolamine"],
  "mono-ethanol-amine-mea": ["MEA", "Monoethanolamine"],
  "triethanolamine-85-99": ["TEA", "Triethanolamine"],
  "tri-ethyl-amine-tea": ["TEA", "Triethylamine"],
  "aniline-oil": ["Aniline"],
  "hexamine": ["Hexamethylene Tetramine", "Methenamine", "Urotropine"],
  "napthalene-refined": ["Naphthalene Refined"],
  "napthalene-crude": ["Naphthalene Crude"],
  "epichlorohydrin-ech": ["ECH", "Epichlorhydrin"],
  "n-methyl-2-pyrrolidone-nmp": ["NMP", "Methyl Pyrrolidone"],
  "dimethyl-formamide-dmf": ["DMF"],
  "dimethyl-acetamide-dmac": ["DMAC", "DMA"],
  "dimethyl-sulfoxide-dmso": ["DMSO"],
  "ethylene-di-chloride-edc": ["EDC", "1,2-Dichloroethane"],
  "mono-chloro-benzene-mcb": ["MCB", "Chlorobenzene"],
  "poly-vinyl-alcohol-pva": ["PVA", "Polyvinyl Alcohol"],
  "polyvinyl-chloride-resin-pvc-resin": ["PVC"],
  "vinyl-acetate-monomer-vam": ["VAM"],
  "methyl-methacrylate-mma": ["MMA"],
  "methylene-diphenyl-diisocyanate-mdi": [
    "MDI",
    "Polymeric MDI",
    "PMDI",
    "MethyleneDiphenyl Diisocyante",
  ],
  "toluene-di-isocyanate-tdi": ["TDI"],
  "1-4-butanediol-bdo": ["BDO", "Butane Diol"],
  "tetrahydrofuran-thf": ["THF"],
  "2-methyl-thf": ["MeTHF", "2-MeTHF"],
  "neo-pentyl-glycol-npg": ["NPG"],
  "di-propylene-glycol-dpg": ["DPG"],
  "propylene-glycol-usp": ["MPG USP", "Mono Propylene Glycol"],
  "propylene-glycol-technical": ["MPG", "Mono Propylene Glycol"],
  "di-ethylene-triamine-deta": ["DETA"],
  "triethylene-tetramine-teta": ["TETA"],
  "tri-ethylene-pentamine-tepa": ["TEPA"],
  "ethylene-diamine-eda": ["EDA"],
  "methane-sulphonic-acid-msa": ["MSA", "Methanesulfonic Acid"],
  "sodium-tri-poly-phosphate-stpp": ["STPP", "Sodium Tri Polyphosphate"],
  "tetra-potassium-pyro-phosphate-tkpp": ["TKPP"],
  "tetrasodium-pyrophosphate-tspp": ["TSPP"],
  "tri-mellitic-anhydride-tma": ["TMA", "Trimellitic Anhydride", "Tri Mellitiv Anhydride"],
  "tri-octyl-tri-mellitate-totm": ["TOTM"],
  "trimethylolpropane-tmp": ["TMP", "Tri Methylol Propane"],
  "polytetramethylene-ether-glycol-ptmeg": ["PTMEG", "PTMG"],
  "polyethylene-glycol-peg": ["PEG"],
  "methyl-tertiary-butyl-ether-mtbe": ["MTBE"],
  "1-2-dimethoxyethane-monoglyme": ["Monoglyme", "DME", "Glyme"],
  "sodium-silicofluoride-ssf": ["SSF", "Sodium Fluorosilicate"],
  "decabromodiphenyl-ethane-dbde": ["DBDE"],
  "4-dimethyl-amino-pyridine-dmap": ["DMAP"],
  "di-cyclohexylcarbodiimide-dcc": ["DCC"],
  "mp-diol-glycol-2-methyl-1-3-propanediol": ["MP Diol", "MP Dial", "MPO"],
  "liquid-light-paraffin": ["LiquidLight Paraffin", "White Oil", "LLP"],
  "poly-phosphoric-acid-115-ppa": ["PPA"],
  "poly-phosphoric-acid-118-ppa": ["PPA"],
  "butyl-glycol-cellosolve": ["Butyl Cellosolve", "2-Butoxyethanol", "BG"],
  "titanium-dioxide": ["TiO2", "Rutile", "Anatase"],
  "hydrogen-peroxide": ["H2O2"],
  "epoxy-resin": ["DGEBA", "Liquid Epoxy Resin", "LER"],
  "ethylene-vinyl-acetate-eva": ["EVA"],
  "1-6-hexanediol-flakes": ["HDO", "1,6 Hexane Diol"],
  "oxone-ps-16": ["Potassium Monopersulfate", "PMPS"],
  "jeffamine-d-230": ["Polyetheramine D230", "D-230"],

  // Exact spellings as printed in the 2025–26 catalogue (several are typos there),
  // so a buyer searching straight off the PDF still lands on the right product.
  "methacrylic-acid": ["Metha Acrylic Acid"],
  "maleic-anhydride": ["Maliec Anhydride"],
  "hydrobromic-acid-48": ["Hydrbromic Acid 48%"],
  "dicyandiamide": ["Dicyandiaminde"],
  "di-ethyl-ether": ["Di Ehtyl Ether"],
  "di-ethyl-sulphate": ["Di Ehtyl Sulphate"],
  "amino-ethyl-ethanolamine": ["Amino Ethylethanolamine", "AEEA"],
  "sodium-borohydride-granular": ["Sodium Borohydride Granual"],
  "potassium-carbonate-granular": ["Potassium Carbonate Granual"],
  "triacetin": ["Triacetin China"],
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
