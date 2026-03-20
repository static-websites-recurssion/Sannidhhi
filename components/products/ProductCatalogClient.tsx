"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { productInitial } from "@/data/products";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 12;
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type Props = { products: Product[] };

export function ProductCatalogClient({ products }: Props) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [letter, setLetter] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter((p) => {
      if (cat !== "all" && p.categorySlug !== cat) return false;
      if (letter) {
        const ini = productInitial(p.name);
        if (letter === "#" && ini === "#") return true;
        if (letter !== "#" && ini !== letter) return false;
      }
      if (!term) return true;
      const blob = `${p.name} ${p.cas ?? ""} ${p.applications ?? ""}`.toLowerCase();
      return blob.includes(term);
    });
  }, [products, q, cat, letter]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pages - 1);
  const slice = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

  const categoryTitle = (slug: string) =>
    CATEGORIES.find((c) => c.slug === slug)?.title ?? slug;

  return (
    <div>
      <div className="grid gap-4 rounded-2xl border border-navy-900/10 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <label className="text-xs font-bold uppercase tracking-widest text-navy-800/50">
            Search catalog
          </label>
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(0);
            }}
            placeholder="Product name, CAS, application…"
            className="mt-2 w-full rounded-xl border border-navy-900/15 bg-surface/50 px-4 py-3 text-sm outline-none ring-brand-red/0 transition focus:border-brand-red/40 focus:ring-4 focus:ring-brand-red/15"
          />
        </div>
        <div className="lg:col-span-4">
          <label className="text-xs font-bold uppercase tracking-widest text-navy-800/50">
            Category
          </label>
          <select
            value={cat}
            onChange={(e) => {
              setCat(e.target.value);
              setPage(0);
            }}
            className="mt-2 w-full rounded-xl border border-navy-900/15 bg-surface/50 px-4 py-3 text-sm outline-none focus:border-brand-red/40"
          >
            <option value="all">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-3 text-sm text-navy-800/70">
          <span className="font-semibold text-navy-900">{filtered.length}</span> products match
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
        {LETTERS.map((L) => (
          <FilterChip
            key={L}
            active={letter === L}
            onClick={() => {
              setLetter(L);
              setPage(0);
            }}
          >
            {L}
          </FilterChip>
        ))}
        <FilterChip
          active={letter === "#"}
          onClick={() => {
            setLetter("#");
            setPage(0);
          }}
        >
          #
        </FilterChip>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full text-left text-sm">
            <thead className="sticky top-0 z-10 bg-navy-900 text-xs font-bold uppercase tracking-wider text-white">
              <tr>
                <th className="px-4 py-3 sm:px-6">Product</th>
                <th className="px-4 py-3 sm:px-6">Category</th>
                <th className="px-4 py-3 sm:px-6">CAS</th>
                <th className="hidden px-4 py-3 md:table-cell md:px-6">Purity</th>
                <th className="hidden px-4 py-3 lg:table-cell lg:px-6">Packaging</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-900/10">
              {slice.map((p) => (
                <tr key={p.id} className="transition hover:bg-surface/80">
                  <td className="px-4 py-3 font-semibold text-navy-900 sm:px-6">
                    <Link
                      href={`/products/categories/${p.categorySlug}`}
                      className="hover:text-brand-red"
                    >
                      {p.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-navy-800/75 sm:px-6">
                    <Link
                      href={`/products/categories/${p.categorySlug}`}
                      className="hover:text-brand-red hover:underline"
                    >
                      {categoryTitle(p.categorySlug)}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-navy-800/70 sm:px-6">{p.cas ?? "—"}</td>
                  <td className="hidden px-4 py-3 text-navy-800/70 md:table-cell md:px-6">
                    {p.purity ?? "—"}
                  </td>
                  <td className="hidden px-4 py-3 text-navy-800/70 lg:table-cell lg:px-6">
                    {p.packaging ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {slice.length === 0 ? (
          <p className="p-8 text-center text-sm text-navy-800/70">
            No products match your filters. Try clearing search or alphabet.
          </p>
        ) : null}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-navy-800/60">
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
                ? "cursor-not-allowed border-navy-900/10 text-navy-800/35"
                : "border-navy-900/15 text-navy-900 hover:border-brand-red/40"
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
                ? "cursor-not-allowed border-navy-900/10 text-navy-800/35"
                : "border-navy-900/15 text-navy-900 hover:border-brand-red/40"
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
  onClick,
}: {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-w-[2rem] rounded-lg px-2.5 py-1 text-xs font-bold transition",
        active
          ? "bg-navy-900 text-white shadow-md shadow-navy-900/20"
          : "border border-navy-900/10 bg-white text-navy-800 hover:border-brand-red/30"
      )}
    >
      {children}
    </button>
  );
}
