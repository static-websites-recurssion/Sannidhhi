import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const featuredIds = [
  "acetone",
  "iso-propyl-alcohol-ipa",
  "methanol",
  "toluene-tar-toluene",
  "caustic-soda-flakes-lye",
  "sulphuric-acid",
  "hydrogen-peroxide",
  "mono-ethylene-glycol-meg",
];

export function FeaturedChemicalsSection() {
  const list = featuredIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as (typeof PRODUCTS)[number][];

  return (
    <section className="border-b border-ink-900/8 bg-surface py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Featured"
            title="High-velocity industrial molecules"
            subtitle="A snapshot from our line list—search the full catalog for grades, CAS references, and packaging."
            align="center"
          />
        </Reveal>
        <div className="mt-10 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-gradient-to-r from-ink-900 via-ink-900 to-brand-900 text-[11px] font-bold uppercase tracking-[0.12em] text-copper-100">
              <tr>
                <th className="px-4 py-3 sm:px-6">Product</th>
                <th className="hidden px-4 py-3 sm:table-cell sm:px-6">CAS</th>
                <th className="hidden px-4 py-3 md:table-cell md:px-6">Typical purity</th>
                <th className="px-4 py-3 sm:px-6">Packaging</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/8 [&>tr:nth-child(even)]:bg-surface/40">
              {list.map((p) => (
                <tr
                  key={p.id}
                  className="transition-colors hover:bg-copper-100/45"
                >
                  <td className="px-4 py-3 font-semibold text-ink-900 sm:px-6">
                    {p.name}
                  </td>
                  <td className="hidden px-4 py-3 text-ink-800/70 sm:table-cell sm:px-6">
                    {p.cas ?? "—"}
                  </td>
                  <td className="hidden px-4 py-3 text-ink-800/70 md:table-cell md:px-6">
                    {p.purity ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-ink-800/80 sm:px-6">
                    {p.packaging ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex rounded-2xl border border-ink-900/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:border-brand/40 hover:text-brand"
          >
            Open full catalog
          </Link>
        </div>
      </Container>
    </section>
  );
}
