export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Documentation and lot consistency improved our QC pass rate. Sannidhhi has been a dependable partner for drum and bulk solvents.",
    name: "Plant Head",
    role: "Operations",
    org: "Coatings manufacturer, Western India",
  },
  {
    quote:
      "Responsive logistics and transparent specs—exactly what we need for continuous resin procurement.",
    name: "Procurement Manager",
    role: "Supply Chain",
    org: "Plastics compounding unit",
  },
  {
    quote:
      "Their technical team helped us qualify an alternative grade without disrupting our campaign schedule.",
    name: "R&D Lead",
    role: "Formulations",
    org: "Adhesives producer",
  },
];
