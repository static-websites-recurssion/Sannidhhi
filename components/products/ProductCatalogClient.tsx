"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { productInitial } from "@/data/products";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 25;
const LETTERS = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), "#"];

type Props = { products: Product[] };

export function ProductCatalogClient({ products }: Props) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [letter, setLetter] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  /** Letters that actually have products, so we can dim the dead ones */
  const availableLetters = useMemo(() => {
    const set = new Set<string>();
    for (const p of products) set.add(productInitial(p.name));
    return set;
  }, [products]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter((p) => {
      if (cat !== "all" && p.categorySlug !== cat) return false;
      if (letter && productInitial(p.name) !== letter) return false;
      if (!term) return true;
      const blob = `${p.name} ${p.cas ?? ""} ${p.applications ?? ""} ${
        p.purity ?? ""
      } ${(p.aka ?? []).join(" ")}`.toLowerCase();
      return blob.includes(term);
    });
  }, [products, q, cat, letter]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pages - 1);
  const slice = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);
  const hasFilters = q !== "" || cat !== "all" || letter !== null;

  const categoryTitle = (slug: string) =>
    CATEGORIES.find((c) => c.slug === slug)?.title ?? slug;

  const enquiryHref = (p: Product) =>
    `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Enquiry: ${p.name}`
    )}&body=${encodeURIComponent(
      `Dear Sannidhhi Chemical Industries team,\n\nPlease share your best offer for:\n\nProduct: ${p.name}${
        p.cas ? `\nCAS: ${p.cas}` : ""
      }${p.purity ? `\nGrade / purity: ${p.purity}` : ""}\nQuantity required: \nDelivery location: \nRequired by: \n\nCompany: \nContact person: \nPhone: \n\nThank you.`
    )}`;

  const reset = () => {
    setQ("");
    setCat("all");
    setLetter(null);
    setPage(0);
  };

  return (
    <div>
      <div className="grid gap-4 rounded-2xl border border-ink-900/10 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <label
            htmlFor="catalog-search"
            className="text-xs font-bold uppercase tracking-widest text-ink-800/50"
          >
            Search catalog
          </label>
          <input
            id="catalog-search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(0);
            }}
            placeholder="Product name, CAS, application…"
            className="mt-2 w-full rounded-xl border border-ink-900/15 bg-surface/50 px-4 py-3 text-sm outline-none ring-brand/0 transition focus:border-brand/40 focus:ring-4 focus:ring-brand/15"
          />
        </div>
        <div className="lg:col-span-4">
          <label
            htmlFor="catalog-category"
            className="text-xs font-bold uppercase tracking-widest text-ink-800/50"
          >
            Category
          </label>
          <select
            id="catalog-category"
            value={cat}
            onChange={(e) => {
              setCat(e.target.value);
              setPage(0);
            }}
            className="mt-2 w-full rounded-xl border border-ink-900/15 bg-surface/50 px-4 py-3 text-sm outline-none focus:border-brand/40"
          >
            <option value="all">All categories ({products.length})</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title} ({products.filter((p) => p.categorySlug === c.slug).length})
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between gap-3 lg:col-span-3">
          <p className="text-sm text-ink-800/70">
            <span className="font-semibold text-ink-900">{filtered.length}</span> products
            match
          </p>
          {hasFilters ? (
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-ink-900/15 px-3 py-1.5 text-xs font-semibold text-ink-800 transition hover:border-brand/40 hover:text-brand"
            >
              Clear
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <FilterChip
          active={letter === null}
          onClick={() => {
            setLetter(null);
            setPage(0);
          }}
        >
          All
        </FilterChip>
        {LETTERS.map((L) => {
          const has = availableLetters.has(L);
          return (
            <FilterChip
              key={L}
              active={letter === L}
              disabled={!has}
              onClick={() => {
                setLetter(L);
                setPage(0);
              }}
            >
              {L}
            </FilterChip>
          );
        })}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="sticky top-0 z-10 bg-gradient-to-r from-ink-900 via-ink-900 to-brand-900 text-[11px] font-bold uppercase tracking-[0.12em] text-copper-100">
              <tr>
                <th className="px-4 py-3 sm:px-6">Product</th>
                <th className="px-4 py-3 sm:px-6">Category</th>
                <th className="px-4 py-3 sm:px-6">CAS</th>
                <th className="hidden px-4 py-3 md:table-cell md:px-6">Grade / purity</th>
                <th className="hidden px-4 py-3 lg:table-cell lg:px-6">Packing</th>
                <th className="hidden px-4 py-3 xl:table-cell xl:px-6">Typical use</th>
                <th className="px-4 py-3 text-right sm:px-6">Enquiry</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/8 [&>tr:nth-child(even)]:bg-surface/40">
              {slice.map((p) => (
                <tr key={p.id} className="transition-colors hover:bg-copper-100/45">
                  <td className="px-4 py-3 font-semibold text-ink-900 sm:px-6">{p.name}</td>
                  <td className="px-4 py-3 text-ink-800/75 sm:px-6">
                    <Link
                      href={`/products/categories/${p.categorySlug}`}
                      className="hover:text-brand hover:underline"
                    >
                      {categoryTitle(p.categorySlug)}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-ink-800/70 sm:px-6">{p.cas ?? "—"}</td>
                  <td className="hidden px-4 py-3 text-ink-800/70 md:table-cell md:px-6">
                    {p.purity ?? "—"}
                  </td>
                  <td className="hidden px-4 py-3 text-ink-800/70 lg:table-cell lg:px-6">
                    {p.packaging ?? "—"}
                  </td>
                  <td className="hidden px-4 py-3 text-ink-800/70 xl:table-cell xl:px-6">
                    {p.applications ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-right sm:px-6">
                    <a
                      href={enquiryHref(p)}
                      className="inline-block whitespace-nowrap rounded-lg border border-ink-900/15 px-3 py-1.5 text-xs font-semibold text-ink-900 transition hover:border-brand/40 hover:text-brand"
                    >
                      Get quote
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {slice.length === 0 ? (
          <p className="p-8 text-center text-sm text-ink-800/70">
            No products match your filters.{" "}
            <button
              type="button"
              onClick={reset}
              className="font-semibold text-brand hover:underline"
            >
              Clear filters
            </button>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-brand hover:underline">
              ask our desk
            </Link>{" "}
            — we source beyond the published list.
          </p>
        ) : null}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-ink-800/60">
          Page {safePage + 1} of {pages} · {PAGE_SIZE} per page
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={safePage <= 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className={cn(
              "rounded-xl border px-4 py-2 text-sm font-semibold transition",
              safePage <= 0
                ? "cursor-not-allowed border-ink-900/10 text-ink-800/35"
                : "border-ink-900/15 text-ink-900 hover:border-brand/40"
            )}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={safePage >= pages - 1}
            onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
            className={cn(
              "rounded-xl border px-4 py-2 text-sm font-semibold transition",
              safePage >= pages - 1
                ? "cursor-not-allowed border-ink-900/10 text-ink-800/35"
                : "border-ink-900/15 text-ink-900 hover:border-brand/40"
            )}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterChip({
  children,
  active,
  disabled,
  onClick,
}: {
  children: ReactNode;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "min-w-[2rem] rounded-lg px-2.5 py-1 text-xs font-bold transition",
        disabled
          ? "cursor-not-allowed border border-ink-900/5 bg-white/50 text-ink-800/25"
          : active
            ? "bg-ink-900 text-white shadow-md shadow-ink-900/20"
            : "border border-ink-900/10 bg-white text-ink-800 hover:border-brand/30"
      )}
    >
      {children}
    </button>
  );
}
