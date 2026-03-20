import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_NAME, getSiteUrl } from "@/lib/constants";
import { CATEGORIES, getCategoryBySlug } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return { title: "Category" };
  const url = `${getSiteUrl()}/products/categories/${slug}`;
  return {
    title: cat.title,
    description: `${cat.title} — ${cat.description.slice(0, 155)}…`,
    openGraph: { title: `${cat.title} | ${SITE_NAME}`, url },
    alternates: { canonical: url },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const items = productsByCategory(slug);
  const url = `${getSiteUrl()}/products/categories/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat.title} — ${SITE_NAME}`,
    description: cat.description,
    url,
    numberOfItems: items.length,
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-navy-900/10 bg-navy-900 py-14 text-white lg:py-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
            Category
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold">{cat.title}</h1>
          <p className="mt-4 max-w-3xl text-white/75">{cat.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {cat.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold"
              >
                {h}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/products" variant="secondary" className="rounded-2xl">
              Full catalog search
            </Button>
            <Button href="/contact#enquiry" variant="outline" className="rounded-2xl border-white/35 text-white">
              Request quote
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12 lg:py-16">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-[640px] w-full text-left text-sm">
                  <thead className="bg-navy-900 text-xs font-bold uppercase tracking-wider text-white">
                    <tr>
                      <th className="px-4 py-3 sm:px-6">Product</th>
                      <th className="px-4 py-3 sm:px-6">CAS</th>
                      <th className="hidden px-4 py-3 md:table-cell md:px-6">Purity</th>
                      <th className="px-4 py-3 sm:px-6">Packaging</th>
                      <th className="hidden px-4 py-3 lg:table-cell lg:px-6">Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-900/10">
                    {items.map((p) => (
                      <tr key={p.id} className="hover:bg-surface/80">
                        <td className="px-4 py-3 font-semibold text-navy-900 sm:px-6">
                          {p.name}
                        </td>
                        <td className="px-4 py-3 text-navy-800/70 sm:px-6">{p.cas ?? "—"}</td>
                        <td className="hidden px-4 py-3 text-navy-800/70 md:table-cell md:px-6">
                          {p.purity ?? "—"}
                        </td>
                        <td className="px-4 py-3 text-navy-800/75 sm:px-6">
                          {p.packaging ?? "—"}
                        </td>
                        <td className="hidden px-4 py-3 text-navy-800/70 lg:table-cell lg:px-6">
                          {p.applications ?? "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <p className="mt-6 text-center text-xs text-navy-800/60">
            Specifications are representative. Confirm grade, origin, and test method before
            purchase order release.
          </p>
          <div className="mt-10 text-center">
            <Link href="/products/categories" className="text-sm font-semibold text-brand-red hover:underline">
              ← All categories
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
