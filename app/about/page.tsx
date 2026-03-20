import type { Metadata } from "next";
import { SITE_NAME, getSiteUrl } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { MoleculeBg } from "@/components/decor/MoleculeBg";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE_NAME}—mission, vision, quality commitment, and supply network strength for industrial chemical buyers.`,
  openGraph: {
    title: `About | ${SITE_NAME}`,
    url: `${getSiteUrl()}/about`,
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE_NAME}`,
  url: `${getSiteUrl()}/about`,
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <section className="relative overflow-hidden border-b border-navy-900/10 bg-navy-900 py-16 text-white lg:py-20">
        <MoleculeBg className="pointer-events-none absolute -right-20 top-0 h-full w-[70%] opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,30,58,0.35),transparent_45%)]" />
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
            About us
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Precision supply for industrial chemistry programs
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Sannidhhi Chemical Industries operates as a trading and supply partner—bridging verified
            producers with plants that need predictable releases, compliant paperwork, and logistics
            that respect production calendars.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/products" variant="secondary" className="rounded-2xl">
              Product catalog
            </Button>
            <Button href="/contact" variant="outline" className="rounded-2xl border-white/35 text-white">
              Talk to the desk
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Overview"
              title="Company overview"
              subtitle="Headquartered in Hyderabad’s industrial corridor, we serve manufacturers who treat chemistry as a critical input—not a commodity afterthought."
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-navy-800/85">
              <p>
                Our team combines sourcing relationships across domestic and international producers
                with on-ground release checks that align to your incoming material standards.
              </p>
              <p>
                From drum lots to ISO tanks and export containers, we structure each movement with
                documentation traceability so QA and procurement stay aligned.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="grid gap-6">
              <div className="rounded-2xl border border-navy-900/10 bg-surface/80 p-6">
                <h2 className="text-lg font-bold text-navy-900">Mission</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/80">
                  Enable industrial growth through dependable chemical supply—transparent specs,
                  ethical sourcing, and execution that respects your line uptime.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-900/10 bg-surface/80 p-6">
                <h2 className="text-lg font-bold text-navy-900">Vision</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/80">
                  Become the preferred trading partner for mid-to-large chemical consumers across
                  India and selective export corridors—known for technical credibility and speed.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-navy-900/8 bg-surface py-16 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Assurance"
              title="Quality commitment"
              subtitle="We treat certificates and specifications as contractual truth—not marketing language."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "COA alignment",
                d: "Pre-dispatch review against agreed purity, moisture, and key impurity limits.",
              },
              {
                t: "Lot traceability",
                d: "Batch references linked to MSDS revisions and packing declarations.",
              },
              {
                t: "Deviation protocol",
                d: "Structured communication when analytical variance requires technical sign-off.",
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-navy-900">{x.t}</h3>
                  <p className="mt-2 text-sm text-navy-800/80">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Network"
              title="Supply network strength"
              subtitle="Alternate producers, backup origins, and packaging flexibility—so campaigns survive volatility."
            />
            <ul className="mt-6 space-y-3 text-sm text-navy-800/85">
              <li className="flex gap-2">
                <span className="text-brand-red">▸</span>
                Domestic tanker, ISO, and drum programs with scheduled windows.
              </li>
              <li className="flex gap-2">
                <span className="text-brand-red">▸</span>
                Import coordination for grades not economically available locally.
              </li>
              <li className="flex gap-2">
                <span className="text-brand-red">▸</span>
                Project stocking discussions for turnaround and capacity expansion phases.
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-navy-900/10 bg-gradient-to-br from-navy-900 to-navy-950 p-8 text-white shadow-xl">
              <h2 className="text-xl font-bold">Experience &amp; trust</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Our value is measured in repeat campaigns: plants that return because releases match
                specs, documents arrive complete, and the desk answers when batches are on critical path.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Whether you are qualifying a new solvent line or locking resin grades for export
                finished goods, we align commercial terms with technical reality.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" className="rounded-2xl">
                  Start a conversation
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
