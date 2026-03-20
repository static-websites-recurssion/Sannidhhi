import type { Metadata } from "next";
import { SITE_NAME, getSiteUrl } from "@/lib/constants";
import { PRODUCTS } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { ProductCatalogClient } from "@/components/products/ProductCatalogClient";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Product catalog",
  description: `Search ${SITE_NAME} industrial chemical catalog—solvents, commodities, polymers, additives, and specialty lines with CAS references and packaging options.`,
  openGraph: {
    title: `Product catalog | ${SITE_NAME}`,
    url: `${getSiteUrl()}/products`,
  },
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${SITE_NAME} product catalog`,
  numberOfItems: PRODUCTS.length,
  itemListElement: PRODUCTS.slice(0, 24).map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `${getSiteUrl()}/products/categories/${p.categorySlug}`,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={itemList} />
      <section className="border-b border-navy-900/10 bg-gradient-to-b from-navy-900 to-navy-950 py-14 text-white lg:py-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
            Catalog
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight">
            Industrial chemical line list
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Search by name, CAS, category, or first letter. Specifications are indicative—final
            release per agreed COA and commercial confirmation.
          </p>
        </Container>
      </section>
      <section className="bg-surface py-12 lg:py-16">
        <Container>
          <ProductCatalogClient products={PRODUCTS} />
        </Container>
      </section>
    </>
  );
}
