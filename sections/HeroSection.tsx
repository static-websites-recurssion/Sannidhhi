"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { PRODUCT_COUNT } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DrumHeroArt } from "@/components/decor/DrumHeroArt";
import { MoleculeBg } from "@/components/decor/MoleculeBg";

const trust = [
  { k: "COA-led releases", v: "Lot traceability" },
  { k: "Drum to ISO tank", v: "Bulk & packed" },
  { k: "Pan-India dispatch", v: "Export documentation" },
];

export function HeroSection() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: reduce ? false : { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  });

  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {/* Layered brand light: burgundy top-left, copper mid-right, ink base */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_-5%,rgba(120,0,24,0.55),transparent_58%),radial-gradient(ellipse_at_88%_35%,rgba(139,74,38,0.30),transparent_55%),linear-gradient(180deg,#1e0d10_0%,#140809_100%)]" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <MoleculeBg className="pointer-events-none absolute -right-24 top-0 h-[120%] w-[80%] max-w-none text-white opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.05)_50%,transparent_65%)]" />
      {/* copper hairline along the very top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-400/70 to-transparent" />

      <Container className="relative py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-24">
        <div>
          <motion.div {...rise(0)} className="flex items-center gap-3">
            <span className="rule-copper h-px w-8 shrink-0" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-copper-200">
              Industrial chemicals · Bulk supply
            </p>
          </motion.div>

          <motion.h1
            {...rise(0.06)}
            className="mt-5 text-balance text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.35rem]"
          >
            Trusted chemical solutions for{" "}
            <span className="bg-gradient-to-r from-copper-200 via-copper-400 to-brand-400 bg-clip-text text-transparent">
              industrial excellence
            </span>
          </motion.h1>

          <motion.p
            {...rise(0.13)}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Commodity to specialty lines, drum to bulk—Sannidhhi partners with manufacturers who
            need dependable specifications, transparent documentation, and export-ready execution.
          </motion.p>

          <motion.div {...rise(0.19)} className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact#enquiry" variant="primary" className="rounded-2xl px-6 py-3">
              Request a quote
            </Button>
            <Button href="/products" variant="secondary" className="rounded-2xl px-6 py-3">
              Browse {PRODUCT_COUNT} products
            </Button>
          </motion.div>

          <motion.dl
            {...rise(0.27)}
            className="mt-11 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-7 sm:grid-cols-3"
          >
            {trust.map((t) => (
              <div key={t.k}>
                <dt className="text-sm font-semibold text-white">{t.k}</dt>
                <dd className="mt-0.5 text-xs text-white/55">{t.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={reduce ? false : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 lg:mt-0"
        >
          {/* copper glow behind the card */}
          <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_50%_45%,rgba(139,74,38,0.28),transparent_70%)] blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/12 bg-white/[0.06] p-4 shadow-warm-lg backdrop-blur-md sm:p-6">
            <DrumHeroArt className="mx-auto w-full max-w-lg drop-shadow-2xl" />

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-ink-950/40 px-4 py-3">
                <p className="text-2xl font-bold leading-none text-white">{PRODUCT_COUNT}</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-white/50">
                  Products listed
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-950/40 px-4 py-3">
                <p className="text-2xl font-bold leading-none text-white">{CATEGORIES.length}</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-white/50">
                  Categories
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-4 rounded-2xl border border-copper/25 bg-copper/10 px-4 py-3 text-xs text-white/75">
              <span className="font-semibold text-white/90">Download the 2025–26 line list</span>
              <Link
                href="/assets/sannidhhi-product-catalog.pdf"
                className="rounded-lg bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white transition hover:bg-white/25"
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
