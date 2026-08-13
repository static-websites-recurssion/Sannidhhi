import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#780018_0%,#45000e_38%,#1e0d10_70%,#140809_100%)]" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(139,74,38,0.35),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-400/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper-400/40 to-transparent" />
      <Container className="relative text-center text-white">
        <Reveal>
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-copper-200/60" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-copper-200">
              Let&rsquo;s talk supply
            </p>
            <span className="h-px w-8 bg-copper-200/60" />
          </div>
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
              variant="outlineLight"
              external
              className="rounded-2xl px-7 py-3"
            >
              Download catalog
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
