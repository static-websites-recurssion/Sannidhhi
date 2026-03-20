import type { ReactNode } from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/data/industries";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

export function IndustriesServedSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Markets"
            title="Industries we reliably serve"
            subtitle="Cross-sector experience means faster qualification conversations and fewer mismatched grades."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.id} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-navy-900/10 bg-surface/60 p-5 transition hover:border-brand-red/25 hover:bg-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white shadow-md shadow-navy-900/20">
                  {icons[ind.id] ?? <IconCube />}
                </div>
                <h3 className="mt-4 font-bold text-navy-900">{ind.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/75">
                  {ind.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/industries"
            className="text-sm font-semibold text-brand-red hover:underline"
          >
            Industry overview page →
          </Link>
        </div>
      </Container>
    </section>
  );
}

function IconFlask() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function IconBond() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 12h8M12 8v8M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
