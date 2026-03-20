import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, getSiteUrl } from "@/lib/constants";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Product categories",
  description: `Browse chemical categories from ${SITE_NAME}—commodities, solvents, specialty chemicals, polymers, additives, and intermediates.`,
  openGraph: {
    title: `Product categories | ${SITE_NAME}`,
    url: `${getSiteUrl()}/products/categories`,
  },
};

export default function CategoriesIndexPage() {
  const counts = CATEGORIES.map((c) => ({
    ...c,
    count: PRODUCTS.filter((p) => p.categorySlug === c.slug).length,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Product categories — ${SITE_NAME}`,
    url: `${getSiteUrl()}/products/categories`,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-navy-900/10 bg-white py-14 lg:py-16">
        <Container>
          <h1 className="text-balance text-4xl font-bold text-navy-900">
            Product categories
          </h1>
          <p className="mt-4 max-w-2xl text-navy-800/80">
            Each category opens a dedicated line list with industrial table layout. Use the full
            catalog for cross-category search and alphabet filters.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex text-sm font-semibold text-brand-red hover:underline"
          >
            Open searchable catalog →
          </Link>
        </Container>
      </section>
      <section className="bg-surface py-12 lg:py-16">
        <Container className="grid gap-5 md:grid-cols-2">
          {counts.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.04}>
              <Link
                href={`/products/categories/${c.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-red/25 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-navy-900 group-hover:text-brand-red">
                      {c.title}
                    </h2>
                    <p className="mt-2 text-sm text-navy-800/75">{c.description}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-navy-900 px-3 py-1 text-xs font-bold text-white">
                    {c.count} SKUs
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-lg border border-navy-900/10 bg-surface/80 px-2.5 py-1 text-xs font-semibold text-navy-800/80"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 text-sm font-semibold text-brand-red">
                  View category →
                </span>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
