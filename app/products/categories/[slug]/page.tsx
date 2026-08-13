import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OG_IMAGE, SITE_NAME, getSiteUrl } from "@/lib/constants";
import { CATEGORIES, getCategoryBySlug } from "@/data/categories";
import { productsByCategory } from "@/data/products";
import { Container } from "@/components/ui/Container";
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
    openGraph: { title: `${cat.title} | ${SITE_NAME}`, url, images: [OG_IMAGE] },
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
      <section className="relative overflow-hidden border-b border-copper/20 bg-ink-950 py-14 text-white lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_-10%,rgba(120,0,24,0.45),transparent_60%),radial-gradient(ellipse_at_90%_40%,rgba(139,74,38,0.25),transparent_55%)]" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper-400/50 to-transparent" />
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
            Category
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold">{cat.title}</h1>
          <p className="mt-4 max-w-3xl text-white/75">{cat.description}</p>
          <p className="mt-4 text-sm font-semibold text-white/85">
            {items.length} {items.length === 1 ? "product" : "products"} listed in this
            category
          </p>
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
            <Button href="/contact#enquiry" variant="outlineLight" className="rounded-2xl">
              Request quote
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12 lg:py-16">
        <Container>
          {/* Not wrapped in Reveal — the line list is the page's substance and must
              render even before (or without) client-side hydration. */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-warm">
              <div className="overflow-x-auto">
                <table className="min-w-[640px] w-full text-left text-sm">
                  <thead className="bg-gradient-to-r from-ink-900 via-ink-900 to-brand-900 text-[11px] font-bold uppercase tracking-[0.12em] text-copper-100">
                    <tr>
                      <th className="px-4 py-3 sm:px-6">Product</th>
                      <th className="px-4 py-3 sm:px-6">CAS</th>
                      <th className="hidden px-4 py-3 md:table-cell md:px-6">Purity</th>
                      <th className="px-4 py-3 sm:px-6">Packaging</th>
                      <th className="hidden px-4 py-3 lg:table-cell lg:px-6">Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-900/8 [&>tr:nth-child(even)]:bg-surface/40">
                    {items.map((p) => (
                      <tr key={p.id} className="transition-colors hover:bg-copper-100/45">
                        <td className="px-4 py-3 font-semibold text-ink-900 sm:px-6">
                          {p.name}
                        </td>
                        <td className="px-4 py-3 text-ink-800/70 sm:px-6">{p.cas ?? "—"}</td>
                        <td className="hidden px-4 py-3 text-ink-800/70 md:table-cell md:px-6">
                          {p.purity ?? "—"}
                        </td>
                        <td className="px-4 py-3 text-ink-800/75 sm:px-6">
                          {p.packaging ?? "—"}
                        </td>
                        <td className="hidden px-4 py-3 text-ink-800/70 lg:table-cell lg:px-6">
                          {p.applications ?? "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-ink-800/60">
            Specifications are representative. Confirm grade, origin, and test method before
            purchase order release.
          </p>
          <div className="mt-10 text-center">
            <Link href="/products/categories" className="text-sm font-semibold text-brand hover:underline">
              ← All categories
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
