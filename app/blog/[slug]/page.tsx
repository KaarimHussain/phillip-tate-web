import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { Prose } from "@/components/site";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = posts.find((p) => p.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.excerpt },
  };
}

// params are read inside <Suspense> so the page shell renders instantly on navigation.
export default function PostPage(props: PageProps<"/blog/[slug]">) {
  return (
    <Suspense fallback={<Loading />}>
      <PostDetail params={props.params} />
    </Suspense>
  );
}

async function PostDetail({ params }: { params: PageProps<"/blog/[slug]">["params"] }) {
  const { slug } = await params;
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
