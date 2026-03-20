import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductCategoriesGrid() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Product categories engineered for scale"
            subtitle="From solvents to polymers—structured like a modern catalog with the depth industrial buyers expect."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.04}>
              <Link
                href={`/products/categories/${c.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white/80 p-6 shadow-sm shadow-navy-900/5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-red/25 hover:shadow-lg hover:shadow-brand-red/10"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Category
                </p>
                <h3 className="mt-2 text-lg font-bold text-navy-900 group-hover:text-brand-red">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/75">
                  {c.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-900">
                  View products
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/products/categories"
            className="text-sm font-semibold text-brand-red hover:underline"
          >
            Explore all categories
          </Link>
        </div>
      </Container>
    </section>
  );
}
