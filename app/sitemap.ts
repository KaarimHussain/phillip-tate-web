import type { MetadataRoute } from "next";
import { env } from "@/env";
import { books, posts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/books", "/blog", "/contact", ...books.map((b) => `/books/${b.slug}`), ...posts.map((p) => `/blog/${p.slug}`)];
  return paths.map((p) => ({ url: new URL(p, env.NEXT_PUBLIC_SITE_URL).href }));
}
