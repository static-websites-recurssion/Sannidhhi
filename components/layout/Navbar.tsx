"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES } from "@/data/categories";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(false), 140);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/8 bg-white/85 shadow-[0_1px_0_0_rgba(139,74,38,0.12)] backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2"
            onMouseEnter={() => setMega(false)}
          >
            <Image
              src="/assets/logo.png"
              alt={`${SITE_NAME} logo`}
              width={512}
              height={512}
              priority
              className="h-10 w-10 shrink-0 object-contain transition group-hover:scale-105"
            />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-bold tracking-tight text-ink-900">
                {SITE_NAME.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-ink-800/60">
                Chemical Industries
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-ink-900/5",
                  pathname === item.href ? "text-brand" : "text-ink-800"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
                setMega(true);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-ink-900/5",
                  mega ? "text-brand" : "text-ink-800"
                )}
                aria-expanded={mega}
                aria-haspopup="true"
              >
                Products
                <Chevron className={cn("h-4 w-4 transition", mega && "rotate-180")} />
              </button>
              <AnimatePresence>
                {mega ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full z-50 mt-2 w-[min(90vw,42rem)] -translate-x-1/2 rounded-2xl border border-ink-900/10 bg-white/95 p-6 shadow-2xl shadow-ink-900/15 backdrop-blur-xl"
                    onMouseEnter={() => {
                      if (closeTimer.current) clearTimeout(closeTimer.current);
                      setMega(true);
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      {CATEGORIES.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/products/categories/${c.slug}`}
                          className="group rounded-xl border border-ink-900/8 bg-surface-warm/80 p-4 transition hover:border-brand/30 hover:bg-white"
                        >
                          <p className="font-semibold text-ink-900 group-hover:text-brand">
                            {c.title}
                          </p>
                          <p className="mt-1 text-sm text-ink-800/70">{c.short}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 border-t border-ink-900/10 pt-4">
                      <Link
                        href="/products/categories"
                        className="text-sm font-semibold text-brand hover:underline"
                      >
                        All categories
                      </Link>
                      <span className="text-ink-800/30">|</span>
                      <Link
                        href="/products"
                        className="text-sm font-semibold text-ink-800 hover:text-brand"
                      >
                        Full product catalog
                      </Link>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/products"
              className="rounded-xl border border-ink-900/15 px-4 py-2 text-sm font-semibold text-ink-900 transition hover:border-brand/40 hover:text-brand"
            >
              Catalog
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-800"
            >
              Request quote
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-900/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-ink-900/10 bg-white lg:hidden"
          >
            <Container className="space-y-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-900"
                >
                  {item.label}
                </Link>
              ))}
              <p className="px-3 pt-2 text-xs font-bold uppercase tracking-widest text-ink-800/50">
                Products
              </p>
              <Link
                href="/products/categories"
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink-800"
              >
                Categories overview
              </Link>
              <Link
                href="/products"
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink-800"
              >
                Product catalog
              </Link>
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/categories/${c.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-ink-800/90"
                >
                  {c.title}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 block rounded-xl bg-brand px-3 py-3 text-center text-sm font-semibold text-white"
              >
                Request quote
              </Link>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
