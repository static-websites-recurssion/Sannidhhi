import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/data/categories";
import { getSiteUrl } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticPaths = [
    "",
    "/about",
    "/products",
    "/products/categories",
    "/industries",
    "/contact",
  ];

  const categoryPaths = CATEGORIES.map((c) => ({
    url: `${base}/products/categories/${c.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.85,
    })),
    ...categoryPaths,
  ];
}
