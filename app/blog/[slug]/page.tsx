import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Prose } from "@/components/site";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = posts.find((p) => p.slug === slug);
  return { title: p?.title, description: p?.excerpt };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const p = posts.find((p) => p.slug === slug);
  if (!p) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/blog" className="text-lg underline underline-offset-4">← All posts</Link>
      <p className="mt-10 text-lg text-muted-foreground">{p.date}</p>
      <h1 className="mt-2 font-heading text-5xl leading-tight">{p.title}</h1>
      <div className="mt-10"><Prose paragraphs={p.body} /></div>
    </main>
  );
}
