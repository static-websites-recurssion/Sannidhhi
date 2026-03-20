import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Specification discipline",
    body: "We work to agreed purity, moisture, and impurity ceilings—reducing variance at your gate.",
  },
  {
    title: "Supply network depth",
    body: "Multi-origin options with alternate approvals to keep lines running during disruptions.",
  },
  {
    title: "Export execution",
    body: "Commercial invoices, packing declarations, and coordination aligned to your forwarder.",
  },
  {
    title: "Responsive desk",
    body: "Technical clarifications and sample coordination handled with manufacturing urgency.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden border-y border-navy-900/8 bg-navy-900 py-16 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(196,30,58,0.35),transparent_45%),radial-gradient(circle_at_100%_100%,rgba(20,54,92,0.5),transparent_40%)]" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why Sannidhhi"
            title="Built for plants that cannot afford guesswork"
            subtitle="Industrial chemistry is a trust game. We combine trading agility with QA-minded release practices."
            align="center"
            light
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
