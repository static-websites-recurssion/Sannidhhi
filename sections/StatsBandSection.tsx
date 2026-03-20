"use client";

import { AnimatedStats } from "@/components/motion/AnimatedStats";
import { Container } from "@/components/ui/Container";

const stats = [
  { label: "Catalog SKUs (representative)", value: 80, suffix: "+" },
  { label: "Core categories", value: 7 },
  { label: "Years collective desk experience", value: 15, suffix: "+" },
  { label: "Dispatch modes", value: 12, suffix: "+" },
];

export function StatsBandSection() {
  return (
    <section className="border-y border-white/10 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-950 py-14 text-white">
      <Container>
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-white/50">
          At a glance
        </p>
        <AnimatedStats items={stats} />
      </Container>
    </section>
  );
}
