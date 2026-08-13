import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { countByCategory } from "@/data/products";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductCategoriesGrid() {
  const counts = countByCategory();

  return (
    <section className="relative bg-surface py-16 lg:py-24">
      {/* soft copper wash at the top edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-copper-100/50 to-transparent" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Product categories engineered for scale"
            subtitle="From solvents to inorganic salts—structured exactly like our catalogue, with the depth industrial buyers expect."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                href={`/products/categories/${c.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-white p-6 shadow-warm transition-all duration-300 hover:-translate-y-1 hover:border-copper/35 hover:shadow-warm-lg"
              >
                {/* copper sweep on hover */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand via-brand-600 to-copper transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs font-bold tabular-nums text-copper/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[11px] font-bold text-brand transition group-hover:bg-brand group-hover:text-white">
                    {counts[c.slug] ?? 0} products
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-ink-900 transition group-hover:text-brand">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-ink-800/70">
                  {c.short}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition group-hover:text-brand">
                  View products
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}

          {/* Closing tile — routes to the searchable catalogue */}
          <Reveal delay={CATEGORIES.length * 0.05}>
            <Link
              href="/products"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-copper/25 bg-gradient-to-br from-ink-900 to-ink-950 p-6 text-white shadow-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-lg"
            >
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-copper-200">
                  Full line list
                </p>
                <h3 className="mt-4 text-lg font-bold">Search the entire catalogue</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Filter by name, CAS, grade or category—then request a quote in one click.
                </p>
              </div>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-200">
                Open catalogue
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
