import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ContactPreviewSection() {
  return (
    <section className="border-t border-ink-900/8 bg-surface py-16 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Hyderabad desk · nationwide & export reach"
              subtitle="Visit us at Jeedimetla industrial estate or reach the trading desk directly for quotes and COA samples."
            />
            <ul className="mt-6 space-y-2 text-sm text-ink-800/85">
              {CONTACT.addressLines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={CONTACT.phoneTel} variant="primary" className="rounded-2xl">
                Call now
              </Button>
              <Button
                href={`mailto:${CONTACT.email}`}
                variant="outline"
                className="rounded-2xl"
              >
                Email
              </Button>
              <Button href={CONTACT.whatsapp} variant="outline" external className="rounded-2xl">
                WhatsApp
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-ink-900/10 bg-white p-6 shadow-sm lg:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-brand">
                Quick links
              </p>
              <ul className="mt-4 space-y-3 text-sm font-semibold text-ink-900">
                <li>
                  <Link className="hover:text-brand" href="/contact">
                    Full contact page with map →
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-brand" href="/products">
                    Searchable product catalog →
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-brand" href="/about">
                    Company profile →
                  </Link>
                </li>
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-ink-800/60">
                Typical response within one business day for standard product inquiries. Campaign and
                contract discussions may include technical review.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
