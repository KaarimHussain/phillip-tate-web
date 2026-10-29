import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PageTitle } from "@/components/site";
import { posts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Reflections from author Philip Tate on writing, the Blue Ridge Mountains, fishing, and faith.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <PageTitle eyebrow="Reflections" title="Blog" intro="Thoughts on writing, family, and healing." />
      <div className="mx-auto max-w-3xl divide-y px-5 py-8">
        {posts.map((p) => (
          <Reveal key={p.slug}><article className="py-10">
            <p className="text-lg text-muted-foreground">{p.date}</p>
            <h2 className="mt-1 font-heading text-3xl leading-tight">
              <Link href={`/blog/${p.slug}`} className="hover:text-primary hover:underline underline-offset-4">{p.title}</Link>
            </h2>
            <p className="mt-3 text-xl leading-relaxed">{p.excerpt}</p>
            <Link href={`/blog/${p.slug}`} className="mt-4 inline-block text-lg font-semibold text-primary underline underline-offset-4">
              Read more →
            </Link>
          </article></Reveal>
        ))}
      </div>
    </main>
  );
}
