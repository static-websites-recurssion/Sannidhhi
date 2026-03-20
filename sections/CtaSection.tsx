import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#c41e3a_0%,#0a1628_55%,#050a14_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Cpath d=%22M0 20h40M20 0v40%22 stroke=%22%23fff%22 stroke-width=%220.5%22 opacity=%220.2%22/%3E%3C/svg%3E')]" />
      <Container className="relative text-center text-white">
        <Reveal>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to qualify your next campaign lot?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Share target specifications, monthly off-take, and preferred packaging—we will respond with
            availability, lead time, and documentation outline.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact#enquiry" variant="secondary" className="rounded-2xl px-7 py-3">
              Start enquiry
            </Button>
            <Button
              href="/assets/sannidhhi-product-catalog.pdf"
              variant="outline"
              external
              className="rounded-2xl border-white/40 bg-white/10 px-7 py-3 text-white hover:bg-white/20"
            >
              Download catalog
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
