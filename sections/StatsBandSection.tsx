"use client";

import { AnimatedStats } from "@/components/motion/AnimatedStats";
import { Container } from "@/components/ui/Container";
import { PRODUCT_COUNT } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { yearsInTrade } from "@/lib/constants";

const stats = [
  { label: "Products in the line list", value: PRODUCT_COUNT, suffix: "+" },
  { label: "Catalogue sections", value: CATEGORIES.length },
  { label: "Years supplying industry", value: yearsInTrade(), suffix: "+" },
  { label: "Packing & dispatch modes", value: 5, suffix: "+" },
];

export function StatsBandSection() {
  return (
    <section className="relative overflow-hidden border-y border-copper/20 bg-gradient-to-br from-brand-900 via-ink-900 to-ink-950 py-16 text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_120%,rgba(139,74,38,0.28),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-400/60 to-transparent" />
      <Container className="relative">
        <div className="mb-10 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-copper-200/60" />
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-copper-200">
            At a glance
          </p>
          <span className="h-px w-8 bg-copper-200/60" />
        </div>
        <AnimatedStats items={stats} />
      </Container>
    </section>
  );
}
