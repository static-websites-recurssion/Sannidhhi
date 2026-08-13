import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/data/categories";
import { CONTACT, SITE_NAME } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const quick = [
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries served" },
  { href: "/products", label: "Product catalog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-copper/25 bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(120,0,24,0.30),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-400/50 to-transparent" />
      <Container className="relative py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-sm">
                <Image
                  src="/assets/logo.png"
                  alt={`${SITE_NAME} logo`}
                  width={192}
                  height={192}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="font-bold leading-tight">{SITE_NAME}</p>
                <p className="text-xs text-white/60">Hyderabad, India</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Bulk chemical trading and supply for industrial manufacturers—documented quality,
              disciplined logistics, and technical partnership from inquiry to delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CONTACT.phoneTel}
                className="rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white/15"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold transition hover:border-white/40"
              >
                Email
              </a>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-copper-200">
                Explore
              </p>
              <ul className="mt-4 space-y-2">
                {quick.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 transition hover:text-copper-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-copper-200">
                Categories
              </p>
              <ul className="mt-4 space-y-2">
                {CATEGORIES.slice(0, 6).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/products/categories/${c.slug}`}
                      className="text-sm text-white/70 transition hover:text-copper-200"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/products/categories"
                    className="text-sm font-semibold text-copper-200 hover:underline"
                  >
                    View all →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-copper-200">
              Address
            </p>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-white/70">
              {CONTACT.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <a
              href={CONTACT.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-white hover:underline"
            >
              Open in Maps
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="text-white/40">
            Static site · B2B chemical supply · Specifications subject to confirmation
          </p>
        </div>
      </Container>
    </footer>
  );
}
