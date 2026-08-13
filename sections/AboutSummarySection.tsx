import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function AboutSummarySection() {
  return (
    <section className="border-b border-ink-900/8 bg-white py-16 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="Technical trading desk for industrial chemistry"
              subtitle="We align supplier capability with plant requirements—covering specifications, packaging, regulatory paperwork, and logistics windows so your campaigns stay on schedule."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-ink-900/10 bg-gradient-to-br from-surface to-white p-8 shadow-sm shadow-ink-900/5">
              <ul className="space-y-4 text-sm leading-relaxed text-ink-800/85">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  Documented quality with COA alignment to your incoming standards.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ink-800/40" />
                  Flexible commercial structures for contract, spot, and project-based needs.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ink-800/40" />
                  Export-ready packing lists, MSDS support, and coordination with freight partners.
                </li>
              </ul>
              <div className="mt-8">
                <Button href="/about" variant="outline" className="rounded-2xl">
                  Our story &amp; values
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
