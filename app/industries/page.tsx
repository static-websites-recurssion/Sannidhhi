import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, getSiteUrl } from "@/lib/constants";
import { INDUSTRIES } from "@/data/industries";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Industries served",
  description: `${SITE_NAME} supplies chemicals to pharma, coatings, plastics, textiles, agro, construction, rubber, and adhesives sectors across India and export markets.`,
  openGraph: {
    images: [OG_IMAGE],
    title: `Industries served | ${SITE_NAME}`,
    url: `${getSiteUrl()}/industries`,
  },
};

const icons: Record<string, ReactNode> = {
  pharma: <IconFlask />,
  paints: <IconBrush />,
  plastics: <IconCube />,
  textile: <IconFabric />,
  agro: <IconLeaf />,
  construction: <IconBuild />,
  rubber: <IconRing />,
  adhesives: <IconBond />,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Industries served — ${SITE_NAME}`,
  url: `${getSiteUrl()}/industries`,
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="border-b border-ink-900/10 bg-gradient-to-br from-white via-surface to-white py-14 lg:py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
            Markets
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold text-ink-900">
            Industries we serve with documented supply
          </h1>
          <p className="mt-4 max-w-2xl text-ink-800/80">
            Cross-sector experience accelerates qualification: we understand how specifications,
            packaging, and documentation differ between paints plants and pharma intermediates
            producers.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" className="rounded-2xl">
              Discuss your sector
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14 lg:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 text-white shadow-lg shadow-ink-900/25">
                    {icons[ind.id] ?? <IconCube />}
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-ink-900">{ind.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-800/78">
                    {ind.description}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink-800/45">
                    Typical lines
                  </p>
                  <p className="mt-1 text-xs text-ink-800/65">
                    Solvents · acids · alkalis · inorganic salts · surfactants
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function IconFlask() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 3h4M9 8l-3 9a2 2 0 002 2h8a2 2 0 002-2l-3-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconBrush() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20c2-4 8-6 10-9s2-7 2-7-5-1-7 2-3 6-5 14z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconCube() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l8 4v10l-8 4-8-4V7l8-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconFabric() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 18c8-1 12-7 12-15-8 0-14 4-15 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconBuild() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20h16M6 20V10l6-4 6 4v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconRing() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconBond() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 12h8M12 8v8M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
