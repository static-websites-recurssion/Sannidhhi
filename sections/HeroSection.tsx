"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SITE_TAGLINE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DrumHeroArt } from "@/components/decor/DrumHeroArt";
import { MoleculeBg } from "@/components/decor/MoleculeBg";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(196,30,58,0.35),transparent_55%),radial-gradient(ellipse_at_80%_30%,rgba(20,54,92,0.55),transparent_50%),linear-gradient(180deg,#0a1628_0%,#050a14_100%)]" />
      <MoleculeBg className="pointer-events-none absolute -right-24 top-0 h-[120%] w-[80%] max-w-none text-white opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.04)_50%,transparent_65%)]" />

      <Container className="relative py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60"
          >
            Industrial chemicals · Bulk supply
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]"
          >
            {SITE_TAGLINE}
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Commodity to specialty lines, drum to bulk—Sannidhhi partners with manufacturers who
            need dependable specifications, transparent documentation, and export-ready execution.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href="/contact" variant="primary" className="rounded-2xl px-6 py-3">
              Export inquiry
            </Button>
            <Button href="/products" variant="secondary" className="rounded-2xl px-6 py-3">
              Browse catalog
            </Button>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? false : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-6 text-sm text-white/65"
          >
            <div>
              <p className="font-semibold text-white">COA-led releases</p>
              <p className="text-white/60">Lot traceability</p>
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" />
            <div>
              <p className="font-semibold text-white">Pan-India dispatch</p>
              <p className="text-white/60">Export documentation</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={reduce ? false : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative mt-14 lg:mt-0"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6">
            <DrumHeroArt className="mx-auto w-full max-w-lg drop-shadow-2xl" />
            <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-navy-950/40 px-4 py-3 text-xs text-white/70">
              <span className="font-semibold text-white/90">Download line list</span>
              <Link
                href="/assets/sannidhhi-product-catalog.pdf"
                className="rounded-lg bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white transition hover:bg-white/20"
              >
                PDF
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
