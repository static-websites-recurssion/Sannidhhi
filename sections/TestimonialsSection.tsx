import { TESTIMONIALS } from "@/data/testimonials";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What partners say about working with us"
            subtitle="Representative feedback from industrial buyers—names anonymized for client confidentiality."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.org} delay={i * 0.06}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-ink-900/10 bg-gradient-to-b from-white to-surface/40 p-6 shadow-sm">
                <p className="text-sm leading-relaxed text-ink-800/90">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-ink-900/10 pt-4 text-xs text-ink-800/60">
                  <p className="font-semibold text-ink-900">{t.name}</p>
                  <p>
                    {t.role} · {t.org}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
